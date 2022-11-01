// declare a function
function sum(n) {
    // Create a base code
    if (n <= 0) {
        return 0;
    }
    // Call the function
    return n + sum(n - 1);
        }
    
    console.log(sum(3));
    // return the sum of the integer and the function