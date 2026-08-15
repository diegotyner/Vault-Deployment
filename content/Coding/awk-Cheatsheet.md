


[awk utility vid](https://www.youtube.com/watch?v=az6vd0tGhJI)
[awk vs cat/grep vid](https://www.youtube.com/watch?v=8q8DHmA9puw)

### Description
awk  is an interpreter for the AWK Programming Language.  The AWK language is
useful for manipulation of data files, text retrieval and processing, and  for
prototyping  and  experimenting with algorithms.  mawk is a new awk meaning it
implements the AWK language as defined in Aho, Kernighan and  Weinberger,  The
AWK  Programming Language, Addison-Wesley Publishing, 1988 (hereafter referred
to as the AWK book.)  mawk conforms to the POSIX 1003.2 (draft  11.3)  defini‐
tion  of  the  AWK language which contains a few features not described in the
AWK book, and mawk provides a small number of extensions.

An AWK program is a sequence of pattern {action} pairs  and  function  defini‐
tions.  Short programs are entered on the command line usually enclosed in ' '
to avoid shell interpretation.  Longer programs can be read  in  from  a  file
with the -f option.  Data  input is read from the list of files on the command
line or from standard input when the list is empty.  The input is broken  into
records  as  determined by the record separator variable, RS.  Initially, RS =
“\n” and records are synonymous with lines.  Each record is  compared  against
each pattern and if it matches, the program text for {action} is executed.


### Options
Given:
```
Frank
Testing 1
Hello World
TesT
123 Testing
```

> $0 is whole string, $1, $2, ... are split column numbers


Then:
```
awk '{ print }' test.txt -> Raw output
awk '{ print $1}' test.txt -> First row of every line
awk '{ print $2}' test.txt -> Second row of every line or blank
awk '{ print $1,$2}' test.txt -> First and second row of every line, with ',' indicating a space between
awk '{ print $1.$2}' test.txt -> First and second row of every line, with '.' indicating direct concatenation
awk '/Test/ { print }' test.txt -> Print lines that have "Test" in it as a regex match
awk '{ if ($1 ~ /123/) print }' test.txt -> Print line if the first column matches 123
awk 'tolower($0) ~ /dir' test.txt -> Prints all lines with dir in the first column, caseless check
awk -F: '{print $2}' test.txt -> Uses -F flag to use F to seperate columns instead of whitespace


```
- Supports regex shortening, `[0-9], [a-z], ^, $, `