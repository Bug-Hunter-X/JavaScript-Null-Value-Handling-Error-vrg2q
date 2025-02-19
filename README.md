# JavaScript Null Value Handling Error

This repository demonstrates a common error in JavaScript: incorrect handling of `null` values.  The `bug.js` file shows code that fails when encountering `null` inputs.  The `bugSolution.js` file provides a corrected version that explicitly checks for and handles `null` values.

## Bug Description
The original code doesn't check for `null` values before performing an arithmetic operation, leading to potential errors or unexpected results.  The solution adds explicit `null` checks to prevent this.

## How to reproduce
1. Clone this repository.
2. Run `bug.js` using Node.js. Note the unexpected behavior when `null` is passed as an argument.
3. Run `bugSolution.js` to see the corrected behavior.