

A reference for useful commands I use
- Assuming vim familiarity already, this is just things that I might use

| Command                        | Function                                                                                                                              |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| *General editing*              |                                                                                                                                       |
| 0                              | Similar to `\|`, but can't be paired to a motion or number modifier (~~50~~ -> 5\|)                                                   |
| ^                              | First printable character in line. Similar to `_`, but can't be paired to a motion or number modifier (~~5^~~ -> 5_)                  |
| .                              | Repeat last change                                                                                                                    |
| *Visual mode*                  |                                                                                                                                       |
| `gu gU ~`                      | Lowercase / Uppercase / Toggle Case                                                                                                   |
| `<  > =`                       | Unindent, Indent, Autoindent                                                                                                          |
| *Wrapping*                     |                                                                                                                                       |
| `ci x`                         | "Change in" X - {}()""\[\]<br>This deletes, and lets you edit 'in' a section X                                                        |
| `vi <mod>`                     | Base vim, visual mode, select in (word, line, etc)                                                                                    |
| *Buffer*                       |                                                                                                                                       |
| `:bnext :bprev :bd`            | Next, previous, delete buffer                                                                                                         |
| `:vsp f`<br>`:sp f`            | Vertical / horizontal split.                                                                                                          |
| `Ctrl-w w`<br>`Ctrl-w h/j/k/l` | Switch window, or move to window                                                                                                      |
| *mini.AI*                      | Adds the `a` (around) and `i` (inside) operators                                                                                      |
| `aX` / `iX`                    | "around X" / "inside X" selection. \|"x"\| vs "\|x\|"                                                                                 |
| `g[` / `g]`                    | go left/right. Move cursor to corresponding edge of `a` textobject                                                                    |
| So many X, look up docs        | [echasnovski/mini.ai](https://github.com/echasnovski/mini.ai)                                                                         |
| *mini.surround*                | [mini.nvim - mini-surround](https://github.com/echasnovski/mini.nvim/blob/main/readmes/mini-surround.md)                              |
| `sa`                           | Add surrounding. `ysiw` wraps word in quotes                                                                                          |
| `sd`                           | Delete surroundings. `ds"` removes the quotes wrapping text.                                                                          |
| `sr`                           | Replaces surroundings. `sr([` changes parentheses to brackets                                                                         |
| `sf` / `sF`                    | Find surrounding to the left / right                                                                                                  |
| *Replacing*                    |                                                                                                                                       |
| `:x,ys/...`                    | x can be absolute (244) or relate (-4) or . (current). y is the same.<br>This range specifies what lines the replacement will affect. |
| :`s/(foo)/\1bar`               | The `()` group captures, and the `\1` group inserts in the replacement text                                                           |
| `\w \d`                        | Regex selectors work: word, digit, whitespace, etc.                                                                                   |
| *Useful Flows*                 |                                                                                                                                       |
| `viXp`                         | Jumps to inside of X, visual selects it, and replaces it with whatevers in the paste buffer                                           |
| ciX                            | Jumps to X, deletes it, and places you in insert mode                                                                                 |


