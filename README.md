# Unexpected Infinity in JavaScript Division with Zero Check

This repository demonstrates a common JavaScript bug related to division by zero and loose comparison.  The function `foo` is intended to return 0 if either `a` or `b` is 0. However, due to the order of operations, it returns `Infinity` when both `a` and `b` are 0.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file provides the corrected code.

This bug highlights the importance of careful order of operations and the use of strict equality (`===`) when dealing with potential zero values in JavaScript.
