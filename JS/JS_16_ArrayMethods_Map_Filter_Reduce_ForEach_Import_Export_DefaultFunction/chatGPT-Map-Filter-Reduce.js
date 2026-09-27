/**
 * ==========================================
 * DIFFERENCE BETWEEN map(), filter() & reduce()
 * ==========================================
 *
 * Easy way to remember:
 *
 * map()    -> CHANGE
 * filter() -> SELECT
 * reduce() -> COMBINE
 *
 *
 * Think of an array like a bucket of items:
 *
 * Original Array
 *      |
 *      +----> map()    -> CHANGE
 *      |
 *      +----> filter() -> SELECT
 *      |
 *      +----> reduce() -> COMBINE
 *
 */


/**
 * ==========================================
 * 1. map() - TRANSFORM EVERY ELEMENT
 * ==========================================
 *
 * map() goes to EVERY element of the array
 * and transforms each element.
 *
 * map() will ALWAYS return a NEW ARRAY.
 *
 * Normally, the number of elements remains the same.
 *
 *
 * Example:
 *
 * [1, 2, 3, 4, 5]
 *       |
 *       | map(e => e * 2)
 *       v
 * [2, 4, 6, 8, 10]
 *
 */

let numbersMap = [1, 2, 3, 4, 5];

let newNumbersMap = numbersMap.map(e => e * 2);

console.log(newNumbersMap);
// [2, 4, 6, 8, 10]


/**
 * map() visits every element:
 *
 * 1 -> 1 * 2 -> 2
 * 2 -> 2 * 2 -> 4
 * 3 -> 3 * 2 -> 6
 * 4 -> 4 * 2 -> 8
 * 5 -> 5 * 2 -> 10
 *
 *
 * Before:
 * [1, 2, 3, 4, 5]
 *  5 elements
 *
 * After map():
 * [2, 4, 6, 8, 10]
 *  5 elements
 *
 *
 * So:
 *
 * map()
 *   |
 *   v
 * TRANSFORM
 *   |
 *   v
 * EVERY ELEMENT
 *   |
 *   v
 * NEW ARRAY
 */


/**
 * ==========================================
 * REAL-TIME USE CASE OF map()
 * ==========================================
 *
 * Suppose we have product names:
 */

let productsMap = [
    "iphone 17",
    "samsung galaxy",
    "motorola edge"
];

/**
 * Requirement:
 *
 * Convert every product name to uppercase.
 */

let upperProducts = productsMap.map(e => e.toUpperCase());

console.log(upperProducts);

/**
 * Output:
 *
 * [
 *   "IPHONE 17",
 *   "SAMSUNG GALAXY",
 *   "MOTOROLA EDGE"
 * ]
 *
 *
 * Real-time use:
 *
 * In automation testing, we may get multiple
 * product names from a webpage and then transform
 * all the product names into uppercase before
 * performing comparison/assertion.
 */


/**
 * ==========================================
 * 2. filter() - SELECT ELEMENTS
 * ==========================================
 *
 * filter() is used when we want to SELECT
 * specific elements from an array.
 *
 * It works on the basis of a CONDITION.
 *
 * filter() will ALWAYS return a NEW ARRAY.
 *
 *
 * Example:
 *
 * [10, 20, 30, 40, 50]
 *
 * Condition:
 * e > 30
 *
 * 10 -> 10 > 30 -> false -> REMOVE
 * 20 -> 20 > 30 -> false -> REMOVE
 * 30 -> 30 > 30 -> false -> REMOVE
 * 40 -> 40 > 30 -> true  -> KEEP
 * 50 -> 50 > 30 -> true  -> KEEP
 *
 * Result:
 *
 * [40, 50]
 *
 */

let numbersFilter = [10, 20, 30, 40, 50];

let resultFilter = numbersFilter.filter(e => e > 30);

console.log(resultFilter);
// [40, 50]


/**
 * Important:
 *
 * Unlike map(), filter() can reduce the number
 * of elements in the array.
 *
 *
 * Before:
 *
 * [10, 20, 30, 40, 50]
 *  5 elements
 *
 * After filter():
 *
 * [40, 50]
 *  2 elements
 *
 *
 * So:
 *
 * filter()
 *    |
 *    v
 * CONDITION
 *    |
 *    v
 * KEEP / REMOVE
 *    |
 *    v
 * NEW ARRAY
 */


/**
 * ==========================================
 * REAL-TIME USE CASE OF filter()
 * ==========================================
 *
 * Suppose we have products:
 */

let productsFilter = [
    "iPhone 17",
    "Samsung Galaxy",
    "MacBook",
    "Motorola Edge",
    "AirPods"
];

/**
 * Requirement:
 *
 * Give me only those products which contain
 * the word "iPhone".
 */

let iphoneProducts = productsFilter.filter(e => e.includes("iPhone"));

console.log(iphoneProducts);

/**
 * Output:
 *
 * ["iPhone 17"]
 *
 *
 * Another real-time example:
 *
 * Suppose we have employees:
 */

let employees = [
    { name: "Dhaval", experience: 5 },
    { name: "Rahul", experience: 2 },
    { name: "Amit", experience: 6 },
    { name: "Jay", experience: 1 }
];

/**
 * Requirement:
 *
 * Give me employees having more than 3 years
 * of experience.
 */

let experiencedEmployees =
    employees.filter(e => e.experience > 3);

console.log(experiencedEmployees);

/**
 * Output:
 *
 * [
 *   { name: "Dhaval", experience: 5 },
 *   { name: "Amit", experience: 6 }
 * ]
 */


/**
 * ==========================================
 * 3. reduce() - COMBINE EVERYTHING
 * ==========================================
 *
 * reduce() is used when we want to take
 * MANY values and combine them into ONE
 * final result.
 *
 *
 * Think:
 *
 * [10, 20, 30, 40, 50]
 *       |
 *       | reduce()
 *       v
 *      150
 *
 *
 * So:
 *
 * MANY VALUES
 *      |
 *      v
 *   reduce()
 *      |
 *      v
 * ONE FINAL RESULT
 */


/**
 * Example:
 *
 * Add all numbers in an array.
 */

let numbersReduce = [10, 20, 30, 40, 50];

let totalReduce = numbersReduce.reduce((sum, e) => {
    return sum + e;
}, 0);

console.log(totalReduce);
// 150


/**
 * ==========================================
 * HOW reduce() WORKS
 * ==========================================
 *
 * Here:
 *
 * sum = accumulator
 * e   = current element
 * 0   = initial value
 *
 *
 * Array:
 *
 * [10, 20, 30]
 *
 *
 * Initial value:
 *
 * sum = 0
 *
 *
 * First element:
 *
 * sum = 0 + 10
 *     = 10
 *
 *
 * Second element:
 *
 * sum = 10 + 20
 *     = 30
 *
 *
 * Third element:
 *
 * sum = 30 + 30
 *     = 60
 *
 *
 * Final result:
 *
 * 60
 *
 *
 * Flow:
 *
 * Initial sum = 0
 *       |
 *       v
 * 0 + 10 = 10
 *       |
 *       v
 * 10 + 20 = 30
 *       |
 *       v
 * 30 + 30 = 60
 *       |
 *       v
 * Final result = 60
 */


/**
 * ==========================================
 * REAL-TIME USE CASE OF reduce()
 * ==========================================
 *
 * Shopping Cart Example
 *
 * Suppose we have:
 */

let cart = [
    { product: "iPhone", price: 80000 },
    { product: "AirPods", price: 20000 },
    { product: "Case", price: 2000 }
];

/**
 * Requirement:
 *
 * Calculate the total shopping cart amount.
 */

let cartTotal = cart.reduce((sum, product) => {
    return sum + product.price;
}, 0);

console.log(cartTotal);
// 102000


/**
 * reduce() calculation:
 *
 * 0
 *  |
 * 0 + 80000
 *  |
 * 80000
 *  |
 * 80000 + 20000
 *  |
 * 100000
 *  |
 * 100000 + 2000
 *  |
 * 102000
 *
 *
 * Final result:
 *
 * 102000
 */


/**
 * ==========================================
 * BIGGEST DIFFERENCE BETWEEN ALL 3
 * ==========================================
 *
 *
 * map()
 *
 * MANY ELEMENTS
 *      |
 *      v
 * TRANSFORM EVERY ELEMENT
 *      |
 *      v
 * MANY ELEMENTS
 *
 *
 *
 * filter()
 *
 * MANY ELEMENTS
 *      |
 *      v
 * APPLY CONDITION
 *      |
 *      v
 * SELECT SOME ELEMENTS
 *
 *
 *
 * reduce()
 *
 * MANY ELEMENTS
 *      |
 *      v
 * COMBINE
 *      |
 *      v
 * ONE FINAL RESULT
 */


/**
 * ==========================================
 * SIMPLE EXAMPLE OF ALL 3
 * ==========================================
 */

let numbers = [10, 20, 30, 40, 50];


/**
 * map()
 *
 * Multiply every number by 2.
 */

let mapResult = numbers.map(e => e * 2);

console.log(mapResult);

// [20, 40, 60, 80, 100]


/**
 * filter()
 *
 * Get only numbers greater than 30.
 */

let filterResult = numbers.filter(e => e > 30);

console.log(filterResult);

// [40, 50]


/**
 * reduce()
 *
 * Calculate the total of all numbers.
 */

let reduceResult = numbers.reduce((sum, e) => sum + e, 0);

console.log(reduceResult);

// 150


/**
 * ==========================================
 * ONE-LINE MEMORY TRICK
 * ==========================================
 *
 * map()    -> CHANGE
 *
 * filter() -> SELECT
 *
 * reduce() -> COMBINE
 *
 *
 * MAP
 *  |
 *  v
 * Change every element
 *
 *
 * FILTER
 *  |
 *  v
 * Select required elements
 *
 *
 * REDUCE
 *  |
 *  v
 * Combine all elements into one result
 */


/**
 * ==========================================
 * METHOD CHAINING - map + filter + reduce
 * ==========================================
 *
 * This is a very important real-time use case.
 *
 * Suppose we have products:
 */

let products = [
    { name: "iPhone", price: 80000, available: true },
    { name: "MacBook", price: 120000, available: false },
    { name: "AirPods", price: 20000, available: true },
    { name: "iPad", price: 50000, available: true }
];


/**
 * Step 1:
 *
 * filter()
 *
 * Get only available products.
 *
 *
 * Step 2:
 *
 * map()
 *
 * Get only the prices.
 *
 *
 * Step 3:
 *
 * reduce()
 *
 * Calculate the total price.
 */

let total = products
    .filter(e => e.available)
    .map(e => e.price)
    .reduce((sum, e) => sum + e, 0);

console.log(total);

// 150000


/**
 * ==========================================
 * COMPLETE FLOW
 * ==========================================
 *
 *
 * ALL PRODUCTS
 *      |
 *      v
 *   filter()
 *      |
 *      v
 * AVAILABLE PRODUCTS
 *      |
 *      v
 *    map()
 *      |
 *      v
 *     PRICES
 *      |
 *      v
 *   reduce()
 *      |
 *      v
 * TOTAL PRICE
 *
 *
 *
 * So remember:
 *
 * filter() -> Which items do I want?
 *
 * map()    -> What do I want to change
 *             each item into?
 *
 * reduce() -> How can I combine everything
 *             into one final result?
 */


/**
 * ==========================================
 * FINAL REVISION
 * ==========================================
 *
 * | Method | Main Question | Result |
 * |--------|---------------|--------|
 * | map() | What should I change each item into? |
 *         | New Array |
 *
 * | filter() | Which items should I keep? |
 *            | New Array |
 *
 * | reduce() | How can I combine all items? |
 *            | Single value |
 *
 *
 * MAP    = CHANGE
 *
 * FILTER = SELECT
 *
 * REDUCE = COMBINE
 *
 */