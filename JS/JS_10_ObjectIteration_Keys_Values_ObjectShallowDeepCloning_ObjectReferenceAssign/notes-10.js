/**
 * # ✍️ PROGRAM 2 — OBJECT CLONING IN JAVASCRIPT

---

## 1️⃣ What is Object Cloning?

### 📌 Meaning of Cloning

**Cloning = Creating an exact copy of an object with a new reference.**

Suppose we have:

```javascript
let user = {
    name: 'Vinay',
    age: 30,
    city: 'Pune',
    zip: 1212
};
```

The object is created in **Heap Memory**.

```text
user
  │
  │ reference
  ▼
┌─────────────────────────┐
│ name : "Vinay"          │
│ age  : 30               │
│ city : "Pune"           │
│ zip  : 1212             │
└─────────────────────────┘
```

If we create a clone:

```javascript
let myUser = { ...user };
```

Then a **new object** is created.

```text
user                         myUser
 │                             │
 ▼                             ▼
┌───────────────┐          ┌───────────────┐
│ name : Vinay  │          │ name : Vinay  │
│ age  : 30     │          │ age  : 30     │
│ city : Pune   │          │ city : Pune   │
│ zip  : 1212   │          │ zip  : 1212   │
└───────────────┘          └───────────────┘
     Object 1                   Object 2
```

✅ Same key-value pairs
✅ Different objects
✅ Different references

---

# 2️⃣ SHALLOW COPY / SHALLOW CLONING

### ⭐ Using Spread Syntax `...`

We can create a shallow copy using:

```javascript
let myUser = { ...user };
```

> ⚠️ Technically, `...` here is called **spread syntax**, not a "spread parameter."

---

### Example

```javascript
let user = {
    name: 'Vinay',
    age: 30,
    city: 'Pune',
    zip: 1212
};

let myUser = { ...user };

console.log(user);
console.log(myUser);
```

### Output

```text
user:
{ name: 'Vinay', age: 30, city: 'Pune', zip: 1212 }

myUser:
{ name: 'Vinay', age: 30, city: 'Pune', zip: 1212 }
```

Initially, both objects look exactly the same.

---

# 3️⃣ What happens after updating the ORIGINAL object?

```javascript
user.age = 35;
```

Now:

```javascript
console.log(user);
console.log(myUser);
```

### Output

```text
user
{ name: 'Vinay', age: 35, city: 'Pune', zip: 1212 }

myUser
{ name: 'Vinay', age: 30, city: 'Pune', zip: 1212 }
```

### ⭐ Important

Changing:

```javascript
user.age = 35;
```

does **NOT** affect:

```javascript
myUser.age
```

### Why?

Because:

```text
user ───────► Object 1

myUser ─────► Object 2
```

They are **two different objects**.

---

# 4️⃣ IMPORTANT — SHALLOW COPY PROBLEM

The problem occurs when we have a **nested object**.

Example:

```javascript
let customer = {

    name: 'Manish',
    age: 25,

    address: {
        flat: 101,
        building: 'New Building',
        city: 'Bangalore',
        zip: 10101
    }
};
```

Here:

```text
customer
   │
   ├── name
   ├── age
   │
   └── address
          │
          ├── flat
          ├── building
          ├── city
          └── zip
```

`address` is a **nested object**.

---

# 5️⃣ Creating Shallow Copy of Nested Object

```javascript
let newCustomer = { ...customer };
```

At first:

```javascript
console.log(customer);
console.log(newCustomer);
```

Both look the same.

But internally:

```text
customer
   │
   └──────────────┐
                  ▼
             ┌──────────────┐
             │   address    │
             │ city:Pune    │
             └──────────────┘
                  ▲
   ┌──────────────┘
   │
newCustomer
```

⚠️ **The nested `address` object is still shared.**

---

# 6️⃣ The Shallow Copy Problem

Now execute:

```javascript
newCustomer.address.city = 'Pune';
```

Then:

```javascript
console.log(newCustomer.address.city);
```

Output:

```text
Pune
```

But if we check the original:

```javascript
console.log(customer.address.city);
```

Output:

```text
Pune
```

😮 **Why did the original object change?**

Because both objects are referring to the **same nested `address` object**.

---

# 7️⃣ VERY IMPORTANT CONCEPT

### Shallow Copy

```javascript
let newCustomer = { ...customer };
```

Only the **top-level object** is copied independently.

```text
LEVEL 1 ✅ Separate

customer ─────► Object 1
newCustomer ──► Object 2


NESTED LEVEL ❌ Shared

Object 1
   │
   └────► address ◄────┐
                       │
Object 2 ──────────────┘
```

Therefore:

### Level 1 property

```javascript
newCustomer.name = 'Rahul';
```

✅ Original is NOT affected.

### Nested property

```javascript
newCustomer.address.city = 'Pune';
```

❌ Original IS affected.

---

# 8️⃣ Is this a JavaScript Bug?

❌ **No.**

This is a normal and expected behavior of **shallow copying**.

JavaScript is intentionally copying the reference to the nested object rather than recursively cloning every nested object.

---

# 9️⃣ DEEP COPY / DEEP CLONING

To create an independent copy of nested objects, we can use:

```javascript
structuredClone()
```

### Syntax

```javascript
let newCustomer = structuredClone(customer);
```

Meaning:

> "Create a completely independent clone of this object, including its nested objects."

---

# 🔟 Example — `structuredClone()`

```javascript
let customer = {

    name: 'Manish',
    age: 25,

    address: {
        flat: 101,
        building: 'New Building',
        city: 'Bangalore',
        zip: 10101
    }
};

let newCustomer = structuredClone(customer);
```

Now:

```text
customer
   │
   ▼
┌──────────────────┐
│ name : Manish    │
│ age  : 25        │
│ address ─────────┼────► Address Object 1
└──────────────────┘


newCustomer
   │
   ▼
┌──────────────────┐
│ name : Manish    │
│ age  : 25        │
│ address ─────────┼────► Address Object 2
└──────────────────┘
```

### ⭐ Important

`Address Object 1` and `Address Object 2` are **different objects**.

---

# 1️⃣1️⃣ Update Nested Object After `structuredClone()`

```javascript
newCustomer.address.city = 'Pune';
```

Now:

```javascript
console.log(newCustomer.address.city);
```

Output:

```text
Pune
```

But:

```javascript
console.log(customer.address.city);
```

Output:

```text
Bangalore
```

🎯 **Original object is safe!**

---

# 1️⃣2️⃣ SHALLOW vs DEEP COPY

|                                  | Shallow Copy    | Deep Copy                 |
| -------------------------------- | --------------- | ------------------------- |
| Method                           | `{ ...object }` | `structuredClone(object)` |
| New top-level object             | ✅               | ✅                         |
| Top-level properties independent | ✅               | ✅                         |
| Nested objects independent       | ❌               | ✅                         |
| Nested changes affect original   | ⚠️ Yes          | ❌ No                      |
| Simple object                    | ✅ Good          | ✅ Good                    |
| Nested object                    | ⚠️ Be careful   | ✅ Suitable                |

---

# 🧠 QUICK MEMORY TRICK

```text
          OBJECT CLONING
                │
        ┌───────┴────────┐
        ▼                ▼
    SHALLOW            DEEP
        │                │
        ▼                ▼
   { ...object }   structuredClone()
        │                │
        ▼                ▼
   Level 1 only      All nested levels
        │                │
        ▼                ▼
   Nested objects     Nested objects
      SHARED            COPIED
```

---

# ⭐ FINAL NOTES

### `...` → Shallow Copy

```javascript
let copy = { ...original };
```

➡️ Creates a **new top-level object**.

➡️ Nested objects can still share references.

---

### `structuredClone()` → Deep Copy

```javascript
let copy = structuredClone(original);
```

➡️ Creates a **new object**.

➡️ Nested objects are also independently cloned.

➡️ Changes in the cloned object don't affect the original.

---

## 🎯 ONE-LINE INTERVIEW ANSWER

> **Shallow copy creates a new top-level object but nested objects may still share references, whereas deep copy creates an independent copy of the object and its nested objects.**

### 🔥 Most important point to remember

```text
Simple object
     ↓
{ ...object }  → Usually enough

Nested object
     ↓
structuredClone(object) → Deep independent copy
```

**Note:** `structuredClone()` is not a universal clone for every JavaScript value (for example, functions cannot be cloned), but for normal object/array data it is a convenient modern deep-cloning option.


Use structuredClone() when you need a deep copy of ordinary JavaScript data. Just don't assume it can copy every possible JavaScript value—functions, for example, cannot be cloned.
 

Why "not a universal clone"?

Because some JavaScript values cannot be cloned.

For example, functions:

const obj = {
  name: "John",
  greet: function () {
    console.log("Hello");
  }
};

structuredClone(obj);

This throws a DataCloneError.

Why? A function isn't just data—it contains executable code and its surrounding execution context. structuredClone() doesn't try to duplicate that.


*/