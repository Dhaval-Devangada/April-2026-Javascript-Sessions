```javascript
/**
 * ============================================================
 * 📘 JAVASCRIPT NOTES: FALSY VALUES
 * ============================================================
 *
 *
 * 1. WHAT ARE FALSY VALUES?
 * ------------------------------------------------------------
 *
 * In JavaScript, falsy values are values that are treated as
 * false when evaluated in a Boolean context.
 *
 * JavaScript automatically converts these values to false when
 * they are used in conditions like if, while, or the ternary
 * operator.
 *
 *
 * Example:
 */

let value = 0;

if (value) {
    console.log("Value is truthy");
} else {
    console.log("Value is falsy");
}

/**
 * Output:
 * Value is falsy
 *
 * Why?
 * Because 0 is a falsy value in JavaScript.
 *
 *
 * 2. LIST OF ALL FALSY VALUES
 * ------------------------------------------------------------
 *
 * JavaScript has 8 falsy values:
 *
 * 1. false      -> Boolean false
 * 2. 0          -> Positive zero
 * 3. -0         -> Negative zero
 * 4. 0n         -> BigInt zero
 * 5. ""         -> Empty string
 * 6. null       -> Absence of a value
 * 7. undefined  -> Value not assigned
 * 8. NaN        -> Not a Number
 *
 * IMPORTANT:
 * These values are falsy. Almost everything else in JavaScript
 * is truthy.
 *
 *
 * 3. PRACTICAL EXAMPLES
 * ------------------------------------------------------------
 *
 *
 * Example 1: 0
 */

let age = 0;

if (age) {
    console.log("Age is available");
} else {
    console.log("Age is not available");
}

/**
 * Output:
 * Age is not available
 *
 * Because 0 is falsy.
 *
 *
 * Example 2: Empty String ("")
 */

let name = "";

if (name) {
    console.log("Name is provided");
} else {
    console.log("Name is empty");
}

/**
 * Output:
 * Name is empty
 *
 * An empty string is falsy.
 *
 *
 * Example 3: undefined
 */

let salary;

if (salary) {
    console.log("Salary is available");
} else {
    console.log("Salary is not available");
}

/**
 * Output:
 * Salary is not available
 *
 * Because salary has the value undefined, which is falsy.
 *
 *
 * 4. TRUTHY VS FALSY VALUES
 * ------------------------------------------------------------
 *
 * Value          Boolean Conversion
 *
 * 0              false
 * 1              true
 * ""             false
 * "Hello"        true
 * null           false
 * undefined      false
 * []             true
 * {}             true
 *
 *
 * IMPORTANT CONCEPT:
 *
 * Empty arrays and empty objects are truthy in JavaScript!
 *
 */

if ([]) {
    console.log("Array is truthy");
}

if ({}) {
    console.log("Object is truthy");
}

/**
 * Output:
 * Array is truthy
 * Object is truthy
 *
 *
 * 5. HOW TO CHECK WHETHER A VALUE IS FALSY
 * ------------------------------------------------------------
 *
 * Use the Boolean() function:
 */

console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false

console.log(Boolean(10));         // true
console.log(Boolean("Hello"));    // true
console.log(Boolean([]));         // true

/**
 * You can also use the logical NOT operator (!):
 */

console.log(!0);        // true
console.log(!"");       // true
console.log(!"Hello");  // false

/**
 *
 * 6. REAL-TIME USE CASE: DEFAULT VALUES
 * ------------------------------------------------------------
 *
 * Suppose you are getting a user's name from an API.
 */

let userName = "";

let displayName = userName || "Guest";

console.log(displayName);

/**
 * Output:
 * Guest
 *
 *
 * HOW DOES IT WORK?
 *
 * Expression:
 *
 * "" || "Guest"
 *
 * 1. JavaScript checks the left-hand value: "".
 * 2. The empty string is falsy.
 * 3. Therefore, the || operator returns "Guest".
 *
 *
 * REMEMBER:
 *
 * || returns the first truthy value, or the last value if none
 * is truthy.
 *
 *
 * ============================================================
 * 🧠 QUICK REVISION
 * ============================================================
 *
 * 1. Falsy values are values treated as false in Boolean
 *    contexts.
 *
 * 2. JavaScript has 8 falsy values.
 *
 * 3. 0, "", null, undefined, and NaN are common examples.
 *
 * 4. Empty arrays [] and empty objects {} are truthy.
 *
 * 5. Use Boolean(value) to convert a value into true or false.
 *
 * 6. The || operator can be used to provide fallback values.
 *
 * ============================================================
 */
```
