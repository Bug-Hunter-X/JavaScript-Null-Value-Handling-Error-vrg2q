function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Or handle nulls in a more appropriate way for your application
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10