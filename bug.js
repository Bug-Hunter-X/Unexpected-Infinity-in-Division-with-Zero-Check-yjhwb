function foo(a,b){  if (a === 0 || b === 0) { return 0; } return a / b;}foo(0,0); //This will return Infinity instead of 0, because it will first evaluate a/b before checking if a or b is equal to 0. 