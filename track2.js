Algorithm: SumOfDistinctElements(set1, set2)
Input: set1 and set2 (arrays containing sets of elements)

Variables:
    sum = 0

For each element e in set1:
    If e is not present in set2:
        Add e to sum

For each element e in set2:
    If e is not present in set1:
        Add e to sum

Output: sum
