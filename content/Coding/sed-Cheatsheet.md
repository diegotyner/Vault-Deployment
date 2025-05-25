
[sed Video](https://www.youtube.com/watch?v=QaGhpqRll_k)

### Description
Sed is a stream editor. A stream editor is used to perform basic text transformations on an input stream (a file or input from a pipeline). While in some ways similar to an editor which permits scripted edits (such as ed), sed works by making only one pass over the input(s), and is consequently more ef‐ ficient. But it is sed's ability to filter text in a pipeline which particu‐ larly distinguishes it from other types of editors.


### Sed Options:
> watch out for -i. This modifies files in place

- `-E/-r/--regexp-extended` - Recommended to use -E. Use extended regex
- `-s/--seperate` - Consider files to be seperate rather than a single continuous stream

- `sed "" file` - Outputs entire file
- `sed "s/c/C/g" file` - Substitutes pattern. c->C globally in file
- `sed "s/\s*#.*/g file` - Substitutes all characters after a # with nothing and all whitespaces before #. Comment deleter
- `sed "s/c/C/g;s/g/G/g" file` - Does two susbtitutions: c->C and g->G
- `sed "/match/ q" file` - Quits file when match is found
- `sed "/match/ d" file` - Deletes all lines from a file where match is found