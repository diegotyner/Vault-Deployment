---
created:
  - " 02-18-2026 22:25"
tags:
---




> Develop the true suffix tree using Ukkonen’s algorithm for S=“abxadaaddx”. Illustrate all the intermediate phases of constructing the tree along with the extensions for each phase using the notion of suffix links. Use the following tool to compare your answer with the tree created using the tool: https://brenden.github.io/ukkonen-animation/
> 
> Make sure to create suffix links while constructing the suffix tree. Provide the complete illustration of all the suffix links included in your work and verify if the suffix links follow the definition provided in the lecture.




# Q1.1- Create suffix tree

Note: Active node is indicated by tildes '~'

## 1. Current String: a

```
(~0~)──a
```

## 2. Current String: ab

```
(~0~)┬─ab
     └─b
```
   
## 3. Current String: abx

```
(~0~)┬─abx
     ├─bx
     └─x
```

## 4. Current String: abxa

- At this stage, we already have 'a', so we set the active edge to '^a'

```
(~0~)┬─(a)bxa
     ├─bxa
     └─xa
```
   
## 5. Current String: abxad

- 5.1 - 'ad' is not a match for the 'ab' we have, so we create a node '^a' for the split, and insert 'ad'
- 5.2 - Add suffix 'd'

```
(~0~)┬─(a)─┬─bxad
     |	   └─d
     ├─bxad
     ├─xad
     └─d
```
   
   
## 6. Current String: abxada

- 'a' is a repeated start, we move active node to the one pointed to by '^a'

```
(0)┬─(~a~)─┬─bxada
   |	   └─da
   ├─bxada
   ├─xada
   └─da
```

## 7. Current String: abxadaa

- 7.1 - 'aa' not a suffix found yet, so we insert it and reset active node 
- 7.2 - Immediately after we deal with 'a' as a suffix, which is a repeat so we reactivate the node pointer '^a'

```
(0)┬─(~a~)─┬─bxadaa
   |	   ├─daa
   |       └─a
   ├─bxadaa
   ├─xadaa
   └─daa
```

   
## 8. Current String: abxadaad

- 8.1 - 'ad' is another repeat, so we stay on active node '^a' and create active edge '^ad' 
- 8.2 -'d' is also a repeat, create active edge on '^d' as well

```
(0)┬─(~a~)─┬─bxadaad
   |	   ├─(d)aad
   |       └─ad
   ├─bxadaad
   ├─xadaad
   └─(d)aad
```
   
## 9. Current String: abxadaadd

- 9.1 - 'add' is new, so we insert it as a new suffix after adding node '^a->d' 
- 9.2 - 'dd' is new as well, create node '^d' and add the suffix link from the previous match
- 9.3 - 'd' is a repeated start, set active node to the newly created '^d'

```
(0)┬─(a)─┬─bxadaadd
   |     ├─add
   |     └─(d)─┬─aadd
   |   ┌ ── ┘  └─d
   |   \/
   ├─(~d~)─┬─aadd
   |	   └─d
   ├─xadaadd
   └─bxadaadd
```

## 10. Current String: abxadaaddx 

- 10.1 - 'dx' is new, so we add it as suffix to node '^d'
- 10.2 - '^x' is an existing suffix, so we set active edge to x

```
(~0~)┬─(a)─┬─bxadaaddx
     |     ├─addx
     |     └─(d)─┬─aaddx
     |  ┌ ─ ─ ┘  └─dx
     |  \/
     ├─(d)─┬─aaddx
	 |     ├─dx
     |	   └─x
     ├─(x)adaaddx
     └─bxadaaddx
```
   
# 11. Current String: abxadaaddx$

- 11.1 - Create node '^x' and add the new suffix 'x$'
- 11.2 - Create the suffix '\$' 

```
(~0~)┬─(a)─┬─bxadaaddx$
     |     ├─addx$
     |     └─(d)─┬─aaddx$
     |  ┌ ─ ─ ┘  └─dx$
     |  \/
     ├─(d)─┬─aaddx$
	 |     ├─dx$
     |	   └─x$
     ├─(x)─┬─adaaddx$
     |	   └─$
     ├─bxadaaddx$
     |
     └─$
```
   

# Q1.2 - Suffix Links and Verification

Suffix links included in creation of suffix tree, and tree was verified against the tree created using https://brenden.github.io/ukkonen-animation/.