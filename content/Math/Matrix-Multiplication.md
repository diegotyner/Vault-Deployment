

Linked for backlink: [[Latex-Reference]]
### Quick Refresher
#### Matrix Demonstration
$$
\begin{bmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{bmatrix}
\begin{bmatrix}
b_{11} & b_{12} \\
b_{21} & b_{22}
\end{bmatrix}
=
\begin{bmatrix}
a_{11}b_{11} + a_{12}b_{21} & a_{11}b_{12} + a_{12}b_{22} \\
a_{21}b_{11} + a_{22}b_{21} & a_{21}b_{12} + a_{22}b_{22}
\end{bmatrix}
$$
#### Intuition
$C_{ij}​=\sum^n_{k=1}​A_{ik}​B_{kj}​$
- $C_{ij}$​: The element in the i-th row and j-th column of the result matrix C.
- $A_{ik}$​: The element in the i-th row and k-th column of A.
- $B_{kj}$​: The element in the k-th row and j-th column of B.
##### Widths and Heights
- i: Corresponds to the **height of A** (its rows) and is used to determine the rows of C.
- j: Corresponds to the **width of B** (its columns) and is used to determine the columns of C.
- k: Corresponds to the **width of A** (or the height of B), which must be the same for multiplication to be defined.
