```javascript
/**
 * ============================================================
 * JavaScript ES Modules – Fixing ERR_UNSUPPORTED_ESM_URL_SCHEME
 * ============================================================
 *
 * You're getting this error because Node.js ES Modules do not
 * accept a Windows absolute path like C:/Users/... directly
 * as an import URL.
 *
 *
 * Your code:
 *
 * import { PI, driving, print } from 'C:/Users/devangadad/OneDrive - Paul Mason Consulting/April 2026 Javascript Sessions/JS/JS_16_ArrayMethods_Map_Filter_Reduce_ForEach_Import_Export_DefaultFunction/utils.js';
 *
 * console.log(PI);
 *
 *
 * The error occurs because Node.js interprets C: as a URL
 * protocol, rather than as a Windows drive letter.
 */


/**
 * ============================================================
 * SOLUTION 1: Use a relative path (Recommended)
 * ============================================================
 *
 * If your files are in the same folder:
 *
 *
 * Folder structure:
 *
 * JS_16_ArrayMethods_Map_Filter_Reduce_ForEach_Import_Export_DefaultFunction/
 * |
 * |-- main.js
 * |-- utils.js
 *
 *
 * main.js
 *
 * import { PI, driving, print } from './utils.js';
 *
 * console.log(PI);
 *
 *
 * Why does this work?
 *
 * './utils.js'
 *
 * - ./ means the current directory.
 * - utils.js is the file you want to import.
 *
 * This is the recommended approach when working with modules
 * in the same project.
 */


/**
 * ============================================================
 * SOLUTION 2: Use an absolute file:// URL
 * ============================================================
 *
 * If you want to use the full path, convert it into a valid
 * file URL.
 *
 *
 * import {
 *     PI,
 *     driving,
 *     print
 * } from 'file:///C:/Users/devangadad/OneDrive%20-%20Paul%20Mason%20Consulting/April%202026%20Javascript%20Sessions/JS/JS_16_ArrayMethods_Map_Filter_Reduce_ForEach_Import_Export_DefaultFunction/utils.js';
 *
 * console.log(PI);
 *
 *
 * Notice:
 *
 * C:/Users/...         -> Invalid as a module URL
 *
 * file:///C:/Users/... -> Valid file URL format
 *
 *
 * Spaces in the path are encoded as %20.
 *
 * However, using a relative path is easier and more maintainable.
 */


/**
 * ============================================================
 * SOLUTION 3: Use ../ if the file is in a parent folder
 * ============================================================
 *
 * Suppose your folder structure is:
 *
 *
 * JS/
 * |
 * |-- utils.js
 * |
 * |-- JS_16_ArrayMethods_Map_Filter_Reduce_ForEach_Import_Export_DefaultFunction/
 *     |
 *     |-- main.js
 *
 *
 * Then:
 *
 * import { PI, driving, print } from '../utils.js';
 *
 *
 * Here:
 *
 * ../ -> Go one directory up
 */


/**
 * ============================================================
 * UNDERSTANDING THE IMPORT PATH
 * ============================================================
 *
 *
 * Path                  Meaning
 *
 * './utils.js'          -> File in the current directory
 *
 * '../utils.js'         -> File in the parent directory
 *
 * '../../utils.js'      -> Go up two directories
 *
 * 'file:///C:/Users/...' -> Absolute Windows file URL
 */


/**
 * ============================================================
 * MY RECOMMENDATION FOR YOUR PROJECT
 * ============================================================
 *
 * Since you're learning JavaScript modules in VS Code,
 * keep main.js and utils.js in the same folder and use:
 *
 *
 * import { PI, driving, print } from './utils.js';
 *
 * console.log(PI);
 *
 *
 * IMPORTANT:
 *
 * Make sure utils.js exports these names:
 *
 *
 * export const PI = 3.14;
 *
 * export function driving() {
 *     console.log("Driving...");
 * }
 *
 * export function print() {
 *     console.log("Hello!");
 * }
 *
 *
 * This will work with named imports as long as your project
 * is configured to use ES Modules.
 */
```
