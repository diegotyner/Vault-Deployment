

### Cramming for final

Basically saying, if we have 2 signals combined in any order. A signal, B signal, or carry in signal
$$
\begin{align*}
C_{o0} &= A_0B_0 + C_{i0}(A_0+B_0) \\
C_{o1} &= A_1B_1 + C_{i1}(A_1+B_1) \\
C_{o1} &= A_1B_1 + (A_0+B_0 + C_{i0}(A_0+B_0))(A_1+B_1) \\
C_{o2} &= A_2B_2 + C_{i2}(A_2+B_2) \\
\end{align*}
$$


Separately we will define a propagate as:
- $P=A+B$
- $G=A\cdot B$
combined with the fact that: $C_{in}(i) = C_{out}(i-1)$

Allows us to simplify our equations to:
$$
\begin{align*}
C_{o0} &= G_0 + P_0(C_{i0}) \text{ <- Key}\\
C_{o1} &= G_1 + P_1(C_{o0}) \\
C_{o1} &= G_1 + P_1(G_0 + P_0(C_{i0})) \\
C_{o1} &= G_1 + P_1G_0 + P_1P_0(C_{i0})) \text{ <- Key}\\
C_{o2} &= G_2 + P_2(C_{o1}) \\
C_{o2} &= G_2 + P_2G_1 + P_2P_1G_0 + P_2P_1P_0(C_{i0})) \text{ <- Key}\\
\end{align*}
$$
Or generally:
- $C_{out_i} = G_i + P_i(C_{in_i})$
