|        | XL Array    | L Array     | M Array     | S array     | Tiny Array  |
|--------|-------------|-------------|-------------|-------------|-------------|
| insert | 922.17215 ms| 967.430 ms  | 182.4 μs    | 43.1 μs     | 20.8 μs     |
| append | 3.826492 ms | 453.98 μs   | 143 μs      | 167.5 μs    | 125.5 μs    |
|        |             |             |             |             |             |



In general, it looks like the appended () is working a bit better. You can notice as the array increases for both, the time also increases, however the interested function exponentially increases.  I think the doublerInsert () has a time complexity of 0(n) with a linear growth, and doublerAppened() time complexity of 0(n2). 