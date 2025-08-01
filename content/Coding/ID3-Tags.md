---
created:
  - " 07-27-2025 20:50"
tags:
---


Learning about this for my [[Libby-Downloader]] project. After ripping, I want to enrich with metadata

ID3 is a standard for giving audio file data to mp3 files, as described [here](https://id3.org/Home)

For my reference, here are some quick guides:
- [Technical Reference to frame tags](https://id3.org/id3v2.4.0-frames%C2%A0)
- [Librivox guide to ID3](https://wiki.librivox.org/index.php/What_is_ID3)
- [APLN guide to id3 tags in audiobooks](https://apln.ca/introduction-to-id3-tags-in-audiobooks/)

The APLN Checklist:
- Artist - TPE1 (writer)
- Track - TRCK (position in set ie 4/9)
- Title - TIT2 (name of segment, Ch.1, Etymology and Extracts, etc.)
- Album title - TALB (name of entire book)
- Year - TDRC
- Genre -  TCON (audiobook, fantasy)
- Album Artist -  TPE2 (narrator)
	- TCOM sometimes also used for narrator (composer)

Additional:
- Attached Picture - APIC (cover art)
- Comments - COMM (brief synopsis)
- Part of set - TPOS (1/2, etc.)