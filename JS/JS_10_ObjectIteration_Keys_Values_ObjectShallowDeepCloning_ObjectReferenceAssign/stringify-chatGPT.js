
/**
 * Absolutely. Since you're learning JavaScript for **automation testing**, let's understand `JSON.stringify()` from the **parameters' perspective**, rather than just memorizing the syntax.

The method signature you're seeing in VS Code is:

```text
stringify(
    value: any,
    replacer?: (this: any, key: string, value: any) => any,
    space?: string | number
): string
```

This means:

```text
JSON.stringify(value, replacer, space)
                  ↑         ↑       ↑
              parameter  parameter parameter
```

There are **3 parameters**, and only the first one is required.

---

# 1. `value: any`

This is the **data you want to convert into JSON string format**.

Example:

```javascript
const user = {
    name: "Dhaval",
    age: 28,
    city: "Pune"
};

const result = JSON.stringify(user);

console.log(result);
```

Output:

```text
{"name":"Dhaval","age":28,"city":"Pune"}
```

### What does `any` mean?

```text
value: any
       ↑
```

`any` means the parameter can accept **different types of values**.

For example:

```javascript
JSON.stringify("Dhaval");
JSON.stringify(28);
JSON.stringify(true);
JSON.stringify([10, 20, 30]);
JSON.stringify({name: "Dhaval"});
```

All are valid.

So:

```text
value: any
```

means:

> **The first parameter can accept any JavaScript value.**

---

# 2. `replacer?`

This is where the syntax becomes interesting:

```text
replacer?
        ↑
```

The `?` means:

> **This parameter is optional.**

You don't have to provide it.

For normal automation work, you'll frequently do:

```javascript
JSON.stringify(testData);
```

and leave `replacer` out.

---

## What is `replacer`?

`replacer` allows you to **control what gets converted into JSON**.

It can be a function:

```text
replacer:
(this: any, key: string, value: any) => any
```

Don't worry about the complicated-looking syntax yet.

It basically means:

> `replacer` can be a function that receives each property and its value.

Example:

```javascript
const user = {
    name: "Dhaval",
    age: 28,
    password: "12345"
};

const result = JSON.stringify(user, (key, value) => {
    if (key === "password") {
        return undefined;
    }

    return value;
});

console.log(result);
```

Output:

```text
{"name":"Dhaval","age":28}
```

We used `replacer` to **remove the password**.

---

# 3. Understanding the replacer function parameters

This part:

```text
(this: any, key: string, value: any) => any
```

can look scary.

Break it down:

```text
(this: any, key: string, value: any) => any
   ↓          ↓          ↓          ↓
 context     key       value     return type
```

For example:

```javascript
(key, value) => {
    console.log(key);
    console.log(value);

    return value;
}
```

For this object:

```javascript
const user = {
    name: "Dhaval",
    age: 28
};
```

the replacer function gets called for properties such as:

```text
key       value
--------------------
""        object
"name"    "Dhaval"
"age"     28
```

You can use this to modify/filter data.

---

# 4. `space?`

The third parameter:

```text
space?: string | number
```

is also **optional**.

Its purpose is:

> **Control the formatting/indentation of the resulting JSON string.**

### Without `space`

```javascript
const user = {
    name: "Dhaval",
    age: 28,
    city: "Pune"
};

console.log(JSON.stringify(user));
```

Output:

```text
{"name":"Dhaval","age":28,"city":"Pune"}
```

Everything is on one line.

---

## Using a number

```javascript
JSON.stringify(user, null, 2);
```

Here:

```text
value   = user
replacer = null
space   = 2
```

Output:

```json
{
  "name": "Dhaval",
  "age": 28,
  "city": "Pune"
}
```

`2` means approximately **2 spaces of indentation**.

You might see this frequently in automation when logging API/test data.

---

# 5. Why `null` is used as the second parameter

This is very common:

```javascript
JSON.stringify(user, null, 2);
```

You're basically saying:

```text
1st parameter → What to convert?
                 user

2nd parameter → Do you want to filter/modify anything?
                 No → null

3rd parameter → How should it be formatted?
                 2 spaces
```

So:

```javascript
JSON.stringify(user, null, 2);
```

means:

> **Convert `user` to JSON, don't use a replacer, and format it with 2-space indentation.**

---

# 6. Real automation example

Suppose you're testing an API:

```javascript
const testData = {
    username: "Dhaval",
    password: "Test@123",
    role: "admin"
};
```

You might want to print the request body:

```javascript
console.log(JSON.stringify(testData, null, 2));
```

Output:

```json
{
  "username": "Dhaval",
  "password": "Test@123",
  "role": "admin"
}
```

This is much easier to read in your test execution logs.

---

# 7. Very important: `JSON.stringify()` returns a STRING

Look at the signature again:

```text
stringify(...): string
             ↑
```

The `: string` at the end means:

> **The method returns a string.**

Example:

```javascript
const user = {
    name: "Dhaval",
    age: 28
};

const result = JSON.stringify(user);

console.log(typeof result);
```

Output:

```text
string
```

Even though you started with an object:

```text
Object
  ↓
JSON.stringify()
  ↓
String
```

---

# 8. Think of the entire signature this way

Your VS Code signature:

```text
stringify(
    value: any,
    replacer?: (this: any, key: string, value: any) => any,
    space?: string | number
): string
```

can be translated into plain English as:

```text
JSON.stringify(
    WHAT_TO_CONVERT,
    OPTIONAL_FILTER_FUNCTION,
    OPTIONAL_FORMATTING
)
↓
returns a STRING
```

### Quick reference

| Parameter    | Required?  | What does it do?                  |
| ------------ | ---------- | --------------------------------- |
| `value`      | ✅ Yes      | Data to convert                   |
| `replacer`   | ❌ Optional | Filter/modify what gets converted |
| `space`      | ❌ Optional | Pretty-print/indent JSON          |
| Return value | —          | `string`                          |

### For automation testing, remember these 3 patterns

```javascript
// 1. Most common
JSON.stringify(testData);

// 2. Pretty JSON for logs/debugging
JSON.stringify(testData, null, 2);

// 3. Filter sensitive/unwanted fields
JSON.stringify(testData, (key, value) => {
    if (key === "password") return undefined;
    return value;
});
```

**The key thing to understand about the VS Code signature is that `?` means optional, `:` tells you the type, `|` means OR, and `=>` describes a function.**

 */

/**
 * Absolutely. Let's go **line by line and step by step**, especially focusing on how the **`replacer` function** works.

## The complete program

```javascript
const user = {
    name: "Dhaval",
    age: 28,
    password: "12345"
};

const result = JSON.stringify(user, (key, value) => {
    if (key === "password") {
        return undefined;
    }

    return value;
});

console.log(result);
```

---

# Step 1: Create the object

```javascript
const user = {
    name: "Dhaval",
    age: 28,
    password: "12345"
};
```

We create an object called `user`.

Think of it as:

```text
user
 │
 ▼
┌─────────────────────┐
│ name     → "Dhaval" │
│ age      → 28       │
│ password → "12345"  │
└─────────────────────┘
```

So:

```javascript
user.name
```

gives:

```text
Dhaval
```

and:

```javascript
user.password
```

gives:

```text
12345
```

---

# Step 2: Call `JSON.stringify()`

```javascript
const result = JSON.stringify(user, (key, value) => {
```

Remember the signature we discussed:

```text
JSON.stringify(value, replacer, space)
```

In our program:

```text
                    1st parameter      2nd parameter
                         ↓                    ↓
JSON.stringify(        user,          (key, value) => {...}
                         ↑                    ↑
                       value               replacer
```

We are providing:

```text
value    → user
replacer → function
space    → not provided
```

So we're saying:

> "Convert the `user` object into a JSON string, but before converting it, use this function to decide what should happen to each property."

---

# Step 3: Understand `(key, value)`

This function:

```javascript
(key, value) => {
```

receives **two important pieces of information**:

```text
key
 ↓
property name

value
 ↓
property value
```

For our object:

```javascript
const user = {
    name: "Dhaval",
    age: 28,
    password: "12345"
};
```

The function will be called for the properties.

Conceptually:

```text
key          value
-------------------------
"name"       "Dhaval"
"age"        28
"password"   "12345"
```

There is also a special **initial call** where `key` is an empty string (`""`) and `value` is the whole `user` object. We'll come back to that because it's important for understanding exactly how `JSON.stringify()` works.

---

# Step 4: First call — the whole object

Before processing the individual properties, the replacer is effectively called with:

```javascript
key = ""
value = user object
```

So:

```text
key   → ""
value → {
          name: "Dhaval",
          age: 28,
          password: "12345"
        }
```

Now this condition runs:

```javascript
if (key === "password") {
```

Currently:

```text
key = ""
```

Therefore:

```text
"" === "password"
```

is:

```text
false
```

So JavaScript skips:

```javascript
return undefined;
```

and reaches:

```javascript
return value;
```

Therefore the **whole object is returned unchanged**.

---

# Step 5: Process `name`

Now the replacer processes:

```javascript
name: "Dhaval"
```

The function receives:

```text
key   = "name"
value = "Dhaval"
```

So this executes:

```javascript
if (key === "password")
```

which becomes:

```javascript
if ("name" === "password")
```

That's:

```text
false
```

So it skips:

```javascript
return undefined;
```

and executes:

```javascript
return value;
```

Therefore:

```javascript
return "Dhaval";
```

The property stays:

```text
name: "Dhaval"
```

---

# Step 6: Process `age`

Next:

```javascript
age: 28
```

The function receives:

```text
key   = "age"
value = 28
```

The condition becomes:

```javascript
if ("age" === "password")
```

Result:

```text
false
```

So:

```javascript
return value;
```

means:

```javascript
return 28;
```

The property stays:

```text
age: 28
```

---

# Step 7: Process `password`

Now we reach:

```javascript
password: "12345"
```

The function receives:

```text
key   = "password"
value = "12345"
```

The condition becomes:

```javascript
if ("password" === "password")
```

Result:

```text
true
```

Therefore JavaScript executes:

```javascript
return undefined;
```

This is the **most important part**.

When a replacer function returns `undefined` for an **object property**, `JSON.stringify()` **omits that property from the resulting JSON**.

So:

```text
password: "12345"
```

is removed from the JSON output.

---

# Step 8: Final JSON string

The original object was:

```javascript
{
    name: "Dhaval",
    age: 28,
    password: "12345"
}
```

The replacer says:

```text
name     → keep
age      → keep
password → remove
```

Therefore the resulting JSON is:

```json
{"name":"Dhaval","age":28}
```

And because `JSON.stringify()` returns a **string**, `result` contains:

```text
'{"name":"Dhaval","age":28}'
```

---

# Step 9: `console.log(result)`

Finally:

```javascript
console.log(result);
```

Output:

```text
{"name":"Dhaval","age":28}
```

Notice that `password` is missing.

---

# The entire execution

You can visualize the replacer calls like this:

```text
Original object
      ↓
JSON.stringify()
      ↓
Replacer function
      ↓
┌────────────────────────────────────┐
│ key = ""                            │
│ value = entire user object         │
│ return value                       │
└────────────────────────────────────┘
      ↓
┌────────────────────────────────────┐
│ key = "name"                       │
│ value = "Dhaval"                   │
│ return "Dhaval"                    │
└────────────────────────────────────┘
      ↓
┌────────────────────────────────────┐
│ key = "age"                        │
│ value = 28                         │
│ return 28                          │
└────────────────────────────────────┘
      ↓
┌────────────────────────────────────┐
│ key = "password"                   │
│ value = "12345"                    │
│ return undefined                   │
└────────────────────────────────────┘
      ↓
Password omitted
      ↓
'{"name":"Dhaval","age":28}'
```

## Why do we return `value`?

This line:

```javascript
return value;
```

means:

> **"Keep this property/value in the JSON."**

For example:

```text
"name" → "Dhaval" → return "Dhaval" → KEEP
"age"  → 28       → return 28       → KEEP
```

But:

```text
"password" → "12345"
              ↓
       return undefined
              ↓
            REMOVE
```

---

## Real automation use case 🔥

This can be very useful when you're logging API request/response data and don't want to expose sensitive fields.

For example:

```javascript
const testData = {
    username: "Dhaval",
    password: "Test@123",
    token: "ABC123XYZ",
    role: "admin"
};

const safeData = JSON.stringify(testData, (key, value) => {

    if (key === "password" || key === "token") {
        return undefined;
    }

    return value;
});

console.log(safeData);
```

Output:

```text
{"username":"Dhaval","role":"admin"}
```

So the **core concept** is:

```text
                 replacer
                    ↓
JSON.stringify → Check every property
                    ↓
          ┌─────────┴─────────┐
          ↓                   ↓
    return value       return undefined
          ↓                   ↓
        KEEP                REMOVE
```

**One sentence to remember:**

> `JSON.stringify()` calls the replacer for each property, and if the replacer returns `undefined` for an object property, that property is excluded from the resulting JSON string.

 */