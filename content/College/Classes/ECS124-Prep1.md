
[MT Prep](https://canvas.ucdavis.edu/courses/968116/files/folder/TEST%20PREP%20MATERIAL?preview=26398474)

1) Strings s1=cctag, s2=catt

|        |       | c     | c     | t     | a     | g     |     |
| ------ | ----- | ----- | ----- | ----- | ----- | ----- | --- |
|        | **0** | -1    | -2    | -3    | -4    | -5    |     |
| c      | -1    | **3** | 2     | 1     | 0     | -1    |     |
| a      | -2    | **2** | **1** | 0     | 4     | 3     |     |
| t      | -3    | 1     | 0     | **4** | 3     | 2     |     |
| t      | -4    | 0     | -1    | **3** | **2** | **1** |     |
|        |       |       |       |       |       |       |     |
| **s1** | c     | -     | c     | t     | -     | a     | g   |
| **s2** | c     | a     | -     | t     | t     | -     | -   |

|        |     | c     | c     | t     | a     | g   |     |
| ------ | --- | ----- | ----- | ----- | ----- | --- | --- |
|        | 0   | **0** | 0     | 0     | 0     | 0   |     |
| c      | 0   | 3     | **3** | **2** | 1     | 0   |     |
| a      | 0   | 2     | **2** | 1     | **5** | 4   |     |
| t      | 0   | 1     | 1     | **5** | 4     | 3   |     |
| t      | 0   | 0     | 0     | 4     | 3     | 2   |     |
|        |     |       |       |       |       |     |     |
| **s1** | c   | t     | a     |       | c     | a   | t   |
| **s2** | c   | -     | a     |       | c     | -   | t   |




---

Review Vid - [1](https://ucdavis.zoom.us/rec/play/08Arrcuoljwtnd6LbOVxIEYkI-9m-HnMTuVYP03E4v3WBp4n_atY3h7k2hlfJq5Mn7ZWKjKSu5GZ2hy4.q7ihbjzoTudmJo6_?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fucdavis.zoom.us%2Frec%2Fshare%2Fl9gPM7Ulwc_tvPekEzOaAMxzIl6hsKjbJtHUSEAQZOEdXebqjsaO-C62NMIVK2pH.hB3FxH7uDISl-c3h)

MT Content:
1) Building matrix alignment
	1) Global
	2) Local
	3) end-gap-free? LCS (longest common subsequence)
2) Traceback
Quiz 1 and 2 help for these
3) Dealing recurrence -> Solve matrix
	1) Change recurrence based on new requirements
*BLAST not on midterm*
4) Lab 1
	1) Part A, Part D
		1) FASTQ -> FASTA
		2) Not so much this one, no quality score ~~FASTA -> FASTQ~~
5) Simple short answers
	1) Statistics (E(L) - Longest common subsequence)

Global:
- -for space, -for mismatch, +match
Local:
- spaces, mismatch, match
- Forget sections, min=0