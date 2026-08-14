/**
 * Program - 4 
 */


/**
 * Absolutely. These are all good examples of **finite, predefined values**, which is where `switch` can be useful.

Below are practical **JavaScript + Playwright/SDET-style examples** for each case.

---

## 1. Cross Browser

```javascript
let browser = 'chrome';

switch (browser) {

    case 'chrome':
        console.log('Launch Chrome browser');
        break;

    case 'ff':
        console.log('Launch Firefox browser');
        break;

    case 'safari':
        console.log('Launch Safari browser');
        break;

    case 'brave':
        console.log('Launch Brave browser');
        break;

    default:
        console.log('Unsupported browser');
}
```

Possible values:

```text
chrome
ff
safari
brave
```

---

# 2. Multiple Environments

```javascript
let environment = 'QA';

switch (environment) {

    case 'DEV':
        console.log('Execute tests on Development environment');
        break;

    case 'QA':
        console.log('Execute tests on QA environment');
        break;

    case 'STAGE':
        console.log('Execute tests on Stage environment');
        break;

    case 'UAT':
        console.log('Execute tests on UAT environment');
        break;

    case 'PROD':
        console.log('Execute tests on Production environment');
        break;

    default:
        console.log('Invalid environment');
}
```

---

# 3. Multi User / RBAC

**RBAC = Role-Based Access Control**

```javascript
let role = 'admin';

switch (role) {

    case 'user':
        console.log('Open user dashboard');
        break;

    case 'admin':
        console.log('Open admin dashboard');
        break;

    case 'customer':
        console.log('Open customer dashboard');
        break;

    case 'vendor':
        console.log('Open vendor dashboard');
        break;

    case 'partner':
        console.log('Open partner dashboard');
        break;

    default:
        console.log('Invalid role');
}
```

---

# 4. Localization

```javascript
let language = 'spanish';

switch (language) {

    case 'eng':
        console.log('Display English content');
        break;

    case 'spanish':
        console.log('Display Spanish content');
        break;

    case 'arabic':
        console.log('Display Arabic content');
        break;

    case 'chinese':
        console.log('Display Chinese content');
        break;

    default:
        console.log('Language not supported');
}
```

---

# 5. Uber / Cab Booking

```javascript
let cabType = 'suv';

switch (cabType) {

    case 'mini':
        console.log('Book Mini cab');
        break;

    case 'sedan':
        console.log('Book Sedan cab');
        break;

    case 'suv':
        console.log('Book SUV cab');
        break;

    case 'luxury':
        console.log('Book Luxury cab');
        break;

    default:
        console.log('Invalid cab type');
}
```

---

# 6. Payment Methods

```javascript
let paymentMethod = 'upi';

switch (paymentMethod) {

    case 'upi':
        console.log('Process UPI payment');
        break;

    case 'cc':
        console.log('Process Credit Card payment');
        break;

    case 'db':
        console.log('Process Debit Card payment');
        break;

    case 'paypal':
        console.log('Process PayPal payment');
        break;

    case 'stripe':
        console.log('Process Stripe payment');
        break;

    case 'wire':
        console.log('Process Wire Transfer');
        break;

    default:
        console.log('Unsupported payment method');
}
```

---

# 7. API Status Codes

This is a **very good automation example**.

```javascript
let statusCode = 200;

switch (statusCode) {

    case 200:
        console.log('Request successful');
        // expect(response.status()).toBe(200);
        break;

    case 300:
        console.log('Redirection response');
        // assertion for 3xx
        break;

    case 400:
        console.log('Bad request');
        // assertion for 400
        break;

    case 500:
        console.log('Internal server error');
        // assertion for 500
        break;

    default:
        console.log('Unknown status code');
}
```

For Playwright API testing, you could do something like:

```javascript
const statusCode = response.status();

switch (statusCode) {

    case 200:
        expect(statusCode).toBe(200);
        break;

    case 400:
        expect(statusCode).toBe(400);
        break;

    case 500:
        expect(statusCode).toBe(500);
        break;

    default:
        throw new Error(`Unexpected status code: ${statusCode}`);
}
```

---

# 8. Operating System

```javascript
let os = 'windows';

switch (os) {

    case 'windows':
        console.log('Execute Windows-specific tests');
        break;

    case 'mac':
        console.log('Execute Mac-specific tests');
        break;

    case 'linux':
        console.log('Execute Linux-specific tests');
        break;

    case 'cloud':
        console.log('Execute tests on cloud infrastructure');
        break;

    case 'server':
        console.log('Execute tests on server environment');
        break;

    default:
        console.log('Unsupported OS/environment');
}
```

---

# 9. Loan Type

```javascript
let loanType = 'home';

switch (loanType) {

    case 'home':
        console.log('Process Home Loan');
        break;

    case 'car':
        console.log('Process Car Loan');
        break;

    case 'edu':
        console.log('Process Education Loan');
        break;

    default:
        console.log('Invalid loan type');
}
```

---

# 10. A/B Testing

Suppose you have two versions of a website:

```text
A → Old checkout
B → New checkout
```

You can use:

```javascript
let version = 'B';

switch (version) {

    case 'A':
        console.log('Execute tests for Version A');
        break;

    case 'B':
        console.log('Execute tests for Version B');
        break;

    default:
        console.log('Invalid experiment version');
}
```

---

# ⭐ Common Pattern

Notice that **all your examples follow the same structure**:

```javascript
switch (variable) {

    case 'value1':
        // action
        break;

    case 'value2':
        // action
        break;

    case 'value3':
        // action
        break;

    default:
        // fallback
}
```

For example:

```text
Variable
   ↓
browser
   ↓
┌──────────┬──────────┬──────────┐
│ chrome   │ firefox  │ safari   │
└──────────┴──────────┴──────────┘
     ↓          ↓          ↓
   Action     Action     Action
```

### The key idea

> **Use `switch` when you have one value and multiple predefined/discrete possibilities for that value.**

That's why these are good `switch` use cases:

```text
Browser       → chrome / firefox / safari
Environment   → DEV / QA / UAT / PROD
Role          → user / admin / vendor
Language      → English / Spanish / Arabic
Cab type      → Mini / Sedan / SUV
Payment       → UPI / Card / PayPal
Status code   → 200 / 400 / 500
OS            → Windows / Mac / Linux
Loan          → Home / Car / Education
A/B test      → A / B
```

Whereas something like **marks, age, salary, price, temperature**, etc. often involves **ranges**, so `if-else` is usually more appropriate.

 */