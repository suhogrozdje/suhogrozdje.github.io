---
title: "What's this blog about?"
abstract: "A short explanation of what it is I deem to be purposeful about this blog and a tryout of tools for writing math."
---
Firstly, it's worth mentioning that I am a physics graduate who is currently on his way of getting a master's in mathematics. So this blog will hopefully be heavily permeated with topics from geometry and topology, algebra and analysis.

This category will include short scribblings about my involvement in mathematics. What this mostly means is that I will be discussing mathematical concepts and their connection to physics, the synthesis of the two being called *mathematical physics*. I will sometimes get involved and talk about specific definitions, lemmas, theorems, proofs; at other times, I will be a physicist and only use mathematics to describe a phenomenon. Forgive me if I start talking about philosophy of mathematics at times though -- I will strive to perform better than an average person at your local bar.

Here's a short test to see whether MathJax works correctly. An inline bra-ket: $p_e = \Abs{\braket{e|\psi(t)}}^2 = \sin^2\Omega t$, a Dirac particle creation operator:
\begin{equation}
\\bar\\psi(x) = \\int \\frac{\\mathrm{d}^3\\vec p}{(2\\pi)^3}\\frac{1}{\\sqrt{2E_{\\vec p}}}\\sum_s\\big(b_{\\vec p}^s\\ \\bar v^s(\\vec p)\\,\\eul^{-ipx} + {a_{\\vec p}^s}^\\dagger\\ u^s (\\vec p)\\,\\eul^{-ipx}\\big),
\end{equation}

and Pauli matrices:
\begin{equation}
  \begin{split}
  \sigma_x&=\begin{pmatrix}
    0 & 1 \\\\
    1 & 0
  \end{pmatrix}\\\\
    \sigma_y&=\begin{pmatrix}
      0 & -i \\\\
      i & 0
    \end{pmatrix}\\\\
    \sigma_z&=\begin{pmatrix}
      1 & 0 \\\\
      0 & -1
    \end{pmatrix}.
  \end{split}
  \label{pauli}
\end{equation}

Trying out definitions, lemmas, theorems, proofs:

<div class="definition" data-title="Convexity">
  A set $C$ is <i>convex</i> if for all $x,y \in C$ and for all $\alpha \in [0,1]$ the point $\alpha x + (1-\alpha) y \in C$.
</div>

Note that markdown *doesn't* work in html tags. Watch out for gt/lt signs in theorems. Also, I'm using a reference to \ref{pauli}

Now that we've defined convexity, let's move to **arihtmetics** (markdown works here again). Let's add a named theorem.

<div class="theorem" data-title="Fermat's last theorem">
  There are no three natural numbers $x, y, z \in \mathbb{N}$ such that $x^n + y^n = z^n$, where $n &gt; 2$.
</div>

<div class="proof">
  Yeah right. Still, I make a q.e.d. sign, to see if it works.
</div>

If I now insert a second definition, it should follow in numerical order.

<div class="definition">
  A triangle is called <i>equilateral</i> if its sides are equal.
</div>
