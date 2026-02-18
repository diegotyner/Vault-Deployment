---
created:
  - " 02-12-2026 17:16"
tags:
---


Quick storage of infrequent but super useful Linux commands:

#### General
##### Disk Management
`du -sh * | sort -h`
- du (disk usage)
	- S(ummary), H(uman readable)
- sort 
	- H(uman readable)
##### Rename
Mass renaming files, comes up a lot. Used with perl regex syntax:
`rename -n 's/Lab(\d)_Solutions/L0$1_Sols/' Lab*_Solutions.pdf`

##### Stow
Creates symlinks. Super useful for keeping config files in one place, but spreading them around
`~/dotfiles $ stow nvim -t ~/.config/nvim`
- From dotfiles, stowing all files in directory nvim
- -t flag denotes target, and not just placing everything in root
- Target is the existing nvim dir in config

##### Pdftotext
Can extract text from pdfs pretty quick. Rad!
`pdftotext "$file" - | grep "pattern"`
- - flag tells it to not create a file.txt output, and instead send to buffer
`$ for file in *; do echo "\n *** $file ***\n"; pdftotext $file - | rg -i lock; done`

##### Clipboard
Since we have xclip installed, we can use:
- `alias xc="xclip -selection clipboard"` 
So things like `ls | xc` work.

#### Quick text processing
##### Counting Lines: 
`wc -l`
- Process line count. Useful for finding number of matches at the end of a regex loop

##### Translate or delete chars: 
`tr` (1:1 character mapping)
- options for things like `--delete, --squeeze-repeats, --truncate-set1` (or `-d, -s, -t`)
- Has multiple defined sets, like newline (`\n`), or letters (`[:alpha:]`)
- Examples:
	- `tr '[:lower:]' '[:upper:]'` - Caps
	- `tr -d ' '` - Deletes spaces
	- `tr -s '\n'` - Squeezing consec newlines

##### Stream Editor: 
`sed`
- Operates with basic regex: `sed 's/regex/replacement/g`
	- Can use perl-like regex with `-E` flag
	- Can work in place with `sed -i {regex} file.txt`
- Can select lines: `sed '1,5d' file` - Deleted lines 1-5
- Capture groups (dabbing kirby): `\(\)` and `\1` for bringing back

##### Filter/Calculate/Rearrange tabular data
`awk`
- Print processes with >5% CPU usage
	- `ps aux | awk '$3 > 5.0 { print $2, $11 }'`
	- Field 3 is CPU, Field 2 is PID, and Field 11 is the command.
- Calculate size of all log files
	- `ls -l *.log | awk '{ s += $5 } END { print "Total bytes:", s }'`
	- ls -l puts file size in column 5.
- Rearrange names from `First Last` to `Last, First`
	- `echo "Linus Torvalds" | awk '{ print $2 ", " $1 }'`
`$0` is the whole lines, `$1, $2, ...` columns
`$NF`, number of fields or the last column

##### Present columnar data
`cat data.csv | column -t -s ','`
- T(able), S(eparator) which here is comma. By default is whitespace


