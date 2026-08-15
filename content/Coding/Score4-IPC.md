---
created:
  - " 07-30-2026 17:00"
tags:
---


## UDS Wire Format (Stage 1)

Fixed-size binary messages over a Unix domain socket. Little-endian explicitly.
No length prefix needed — both sides know exact byte counts.

### EngineRequest — 20 bytes

| Field | Type | Bytes | Offset | Notes |
|---|---|---|---|---|
| `type` | uint8 | 1 | 0 | 0 = VALIDATE_MOVE, 1 = GET_AI_MOVE |
| `player1_bits` | uint64 (LE) | 8 | 1 | |
| `player2_bits` | uint64 (LE) | 8 | 9 | |
| `next_player` | uint8 | 1 | 17 | 1 or 2 |
| `column` | uint8 | 1 | 18 | 0–15; unused for GET_AI_MOVE, send 0 |
| `search_depth` | uint8 | 1 | 19 | unused for VALIDATE_MOVE, send 0 |

### EngineResponse — 19 bytes

| Field | Type | Bytes | Offset | Notes |
|---|---|---|---|---|
| `outcome` | uint8 | 1 | 0 | 0=OK, 1=INVALID, 2=DRAW, 3=SCORED_P1, 4=SCORED_P2 |
| `player1_bits` | uint64 (LE) | 8 | 1 | resulting state |
| `player2_bits` | uint64 (LE) | 8 | 9 | resulting state |
| `column_played` | uint8 | 1 | 17 | echoed (VALIDATE_MOVE) or chosen (GET_AI_MOVE) |
| `lines_completed` | uint8 | 1 | 18 | 0 unless outcome is SCORED_P1/SCORED_P2; count of simultaneous lines completed by this move |

> [!note] Cumulative score (total lines toward 4) is NOT tracked here
> `lines_completed` is per-move only. Session-level cumulative score per player,
> and the "first to 4 total lines" win-threshold check, live in Go's game state —
> C++ never sees or needs to know the running total. See [[Score4-Server]].

### Key Decisions
- `outcome` and `lines_completed` are separate fields, not a combined enum — so
  the count isn't bounded by the enum's range, and a future change to how many
  lines a single move can complete doesn't require restructuring `outcome`.
- Small fields (`type`, `next_player`, `column`, `search_depth`) are byte-aligned,
  not bit-packed — optimizes for debuggability/correctness on a localhost channel
  where wire size isn't the bottleneck. Contrast with the bitboards themselves,
  which *are* maximally packed, because there the entropy is genuinely dense.
- Little-endian assumed explicitly (host is x86_64/ARM64 in dev and on EC2) —
  not derived from "native" byte order, so the assumption is visible, not implicit.

### Open Questions
- [ ] Max simultaneous lines completable by one move in the 4×4×4 lattice — worth
      verifying against `check_win`'s line enumeration once written, to confirm
      `lines_completed` (uint8) has plenty of headroom (it does, practically).
- [ ] If a single move's `lines_completed` pushes a player's total score past 4
      in one jump (e.g. 2 → 5), game still ends the instant total crosses 4 —
      confirm this is fine and no other handling is needed.