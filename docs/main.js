/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/terminal.js":
/*!************************************!*\
  !*** ./src/components/terminal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Terminal: () => (/* binding */ Terminal)\n/* harmony export */ });\nclass Terminal {\n\n  static fromId(id) {\n    const terminalElement = document.getElementById(id);\n    return new Terminal(terminalElement)\n  }\n\n  constructor(terminalElement) {\n    this.terminalElement = terminalElement;\n  }\n\n  get widthPixels() {\n    return this.terminalElement.offsetWidth\n  }\n\n  get widthCharacters() {\n    // Get the terminal element\n    const terminal = document.getElementById(\"terminal\");\n\n    if (!terminal) {\n        console.error(\"Terminal element not found.\");\n        return null;\n    }\n\n    // Ensure the terminal spans the full page width\n    terminal.style.width = \"100%\";\n\n    // Get the computed style of the terminal\n    const style = window.getComputedStyle(terminal);\n\n    // Get the width of the terminal in pixels, accounting for box-sizing\n    const terminalWidth = terminal.clientWidth;\n\n    // Create a temporary span element to measure the width of a single character\n    const tempSpan = document.createElement(\"span\");\n    tempSpan.textContent = \"M\"; // Use 'M' as it typically has a consistent width in monospaced fonts\n    tempSpan.style.fontFamily = style.fontFamily;\n    tempSpan.style.fontSize = style.fontSize;\n    tempSpan.style.visibility = \"hidden\"; // Make it invisible\n    tempSpan.style.position = \"absolute\"; // Avoid layout interference\n    document.body.appendChild(tempSpan);\n\n    // Get the width of the single character in pixels\n    const charWidth = tempSpan.offsetWidth;\n\n    // Remove the temporary span from the document\n    document.body.removeChild(tempSpan);\n\n    // Calculate the number of characters that fit in the terminal\n    const terminalWidthInChars = Math.floor(terminalWidth / charWidth);\n\n    return terminalWidthInChars;\n  }\n\n  get heightPixels() {\n    return this.terminalElement.offsetHeight;\n  }\n\n  get heightCharacters() {\n    // Create a temporary span with a single line of text\n    const testSpan = document.createElement('span');\n    testSpan.textContent = 'W'; // A single character to measure line height\n    testSpan.style.fontFamily = getComputedStyle(this.terminalElement).fontFamily;\n    testSpan.style.fontSize = getComputedStyle(this.terminalElement).fontSize;\n    testSpan.style.visibility = 'hidden'; // Make it invisible\n\n    document.body.appendChild(testSpan);\n\n    // Get the line height of the character in pixels\n    const heightCharacters = testSpan.offsetHeight;\n\n    // Remove the test span\n    document.body.removeChild(testSpan);\n\n    // Calculate and return the terminal height in characters\n    return Math.floor(this.heightPixels / heightCharacters);\n  }\n\n  print(text) {\n    this.terminalElement.textContent = text;\n  }\n\n  clear() {\n    this.terminalElement.textContent = '';\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/terminal.js?");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var www_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! www-wasm */ \"../wasm/pkg/www_wasm.js\");\n/* harmony import */ var _components_terminal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/terminal.js */ \"./src/components/terminal.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([www_wasm__WEBPACK_IMPORTED_MODULE_0__]);\nwww_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst TERMINAL_ID = 'terminal';\n\nasync function runAnimation() {\n  // Wait for necessary fonts to load, before calling out to WASM.\n  await document.fonts.load('10px \"Iosevka Web\"');\n\n  // Run the animation.\n  const terminal = _components_terminal_js__WEBPACK_IMPORTED_MODULE_1__.Terminal.fromId(TERMINAL_ID);\n  www_wasm__WEBPACK_IMPORTED_MODULE_0__.perlin_animation(TERMINAL_ID, terminal.widthCharacters, terminal.heightCharacters);\n}\n\nrunAnimation();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///./src/pages/index.js?");

/***/ }),

/***/ "../wasm/pkg/www_wasm.js":
/*!*******************************!*\
  !*** ../wasm/pkg/www_wasm.js ***!
  \*******************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __wbg___wbindgen_debug_string_adfb662ae34724b6: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg___wbindgen_debug_string_adfb662ae34724b6),\n/* harmony export */   __wbg___wbindgen_is_undefined_f6b95eab589e0269: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg___wbindgen_is_undefined_f6b95eab589e0269),\n/* harmony export */   __wbg___wbindgen_throw_dd24417ed36fc46e: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg___wbindgen_throw_dd24417ed36fc46e),\n/* harmony export */   __wbg__wbg_cb_unref_87dfb5aaa0cbcea7: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg__wbg_cb_unref_87dfb5aaa0cbcea7),\n/* harmony export */   __wbg_call_abb4ff46ce38be40: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_call_abb4ff46ce38be40),\n/* harmony export */   __wbg_document_5b745e82ba551ca5: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_document_5b745e82ba551ca5),\n/* harmony export */   __wbg_getElementById_e05488d2143c2b21: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_getElementById_e05488d2143c2b21),\n/* harmony export */   __wbg_instanceof_Window_b5cf7783caa68180: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_instanceof_Window_b5cf7783caa68180),\n/* harmony export */   __wbg_new_no_args_cb138f77cf6151ee: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_new_no_args_cb138f77cf6151ee),\n/* harmony export */   __wbg_now_8cf15d6e317793e1: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_now_8cf15d6e317793e1),\n/* harmony export */   __wbg_performance_c77a440eff2efd9b: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_performance_c77a440eff2efd9b),\n/* harmony export */   __wbg_requestAnimationFrame_994dc4ebde22b8d9: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_requestAnimationFrame_994dc4ebde22b8d9),\n/* harmony export */   __wbg_set_textContent_e461237efe237e01: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_textContent_e461237efe237e01),\n/* harmony export */   __wbg_set_wasm: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm),\n/* harmony export */   __wbg_static_accessor_GLOBAL_769e6b65d6557335: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_static_accessor_GLOBAL_769e6b65d6557335),\n/* harmony export */   __wbg_static_accessor_GLOBAL_THIS_60cf02db4de8e1c1: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_static_accessor_GLOBAL_THIS_60cf02db4de8e1c1),\n/* harmony export */   __wbg_static_accessor_SELF_08f5a74c69739274: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_static_accessor_SELF_08f5a74c69739274),\n/* harmony export */   __wbg_static_accessor_WINDOW_a8924b26aa92d024: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_static_accessor_WINDOW_a8924b26aa92d024),\n/* harmony export */   __wbindgen_cast_0268c24e8eb79d38: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_cast_0268c24e8eb79d38),\n/* harmony export */   __wbindgen_init_externref_table: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_init_externref_table),\n/* harmony export */   perlin_animation: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.perlin_animation)\n/* harmony export */ });\n/* harmony import */ var _www_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./www_wasm_bg.wasm */ \"../wasm/pkg/www_wasm_bg.wasm\");\n/* harmony import */ var _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./www_wasm_bg.js */ \"../wasm/pkg/www_wasm_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_www_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\n_www_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n(0,_www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm)(_www_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_1__);\n_www_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_start();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../wasm/pkg/www_wasm.js?");

/***/ }),

/***/ "../wasm/pkg/www_wasm_bg.js":
/*!**********************************!*\
  !*** ../wasm/pkg/www_wasm_bg.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __wbg___wbindgen_debug_string_adfb662ae34724b6: () => (/* binding */ __wbg___wbindgen_debug_string_adfb662ae34724b6),\n/* harmony export */   __wbg___wbindgen_is_undefined_f6b95eab589e0269: () => (/* binding */ __wbg___wbindgen_is_undefined_f6b95eab589e0269),\n/* harmony export */   __wbg___wbindgen_throw_dd24417ed36fc46e: () => (/* binding */ __wbg___wbindgen_throw_dd24417ed36fc46e),\n/* harmony export */   __wbg__wbg_cb_unref_87dfb5aaa0cbcea7: () => (/* binding */ __wbg__wbg_cb_unref_87dfb5aaa0cbcea7),\n/* harmony export */   __wbg_call_abb4ff46ce38be40: () => (/* binding */ __wbg_call_abb4ff46ce38be40),\n/* harmony export */   __wbg_document_5b745e82ba551ca5: () => (/* binding */ __wbg_document_5b745e82ba551ca5),\n/* harmony export */   __wbg_getElementById_e05488d2143c2b21: () => (/* binding */ __wbg_getElementById_e05488d2143c2b21),\n/* harmony export */   __wbg_instanceof_Window_b5cf7783caa68180: () => (/* binding */ __wbg_instanceof_Window_b5cf7783caa68180),\n/* harmony export */   __wbg_new_no_args_cb138f77cf6151ee: () => (/* binding */ __wbg_new_no_args_cb138f77cf6151ee),\n/* harmony export */   __wbg_now_8cf15d6e317793e1: () => (/* binding */ __wbg_now_8cf15d6e317793e1),\n/* harmony export */   __wbg_performance_c77a440eff2efd9b: () => (/* binding */ __wbg_performance_c77a440eff2efd9b),\n/* harmony export */   __wbg_requestAnimationFrame_994dc4ebde22b8d9: () => (/* binding */ __wbg_requestAnimationFrame_994dc4ebde22b8d9),\n/* harmony export */   __wbg_set_textContent_e461237efe237e01: () => (/* binding */ __wbg_set_textContent_e461237efe237e01),\n/* harmony export */   __wbg_set_wasm: () => (/* binding */ __wbg_set_wasm),\n/* harmony export */   __wbg_static_accessor_GLOBAL_769e6b65d6557335: () => (/* binding */ __wbg_static_accessor_GLOBAL_769e6b65d6557335),\n/* harmony export */   __wbg_static_accessor_GLOBAL_THIS_60cf02db4de8e1c1: () => (/* binding */ __wbg_static_accessor_GLOBAL_THIS_60cf02db4de8e1c1),\n/* harmony export */   __wbg_static_accessor_SELF_08f5a74c69739274: () => (/* binding */ __wbg_static_accessor_SELF_08f5a74c69739274),\n/* harmony export */   __wbg_static_accessor_WINDOW_a8924b26aa92d024: () => (/* binding */ __wbg_static_accessor_WINDOW_a8924b26aa92d024),\n/* harmony export */   __wbindgen_cast_0268c24e8eb79d38: () => (/* binding */ __wbindgen_cast_0268c24e8eb79d38),\n/* harmony export */   __wbindgen_init_externref_table: () => (/* binding */ __wbindgen_init_externref_table),\n/* harmony export */   perlin_animation: () => (/* binding */ perlin_animation)\n/* harmony export */ });\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\nfunction addToExternrefTable0(obj) {\n    const idx = wasm.__externref_table_alloc();\n    wasm.__wbindgen_externrefs.set(idx, obj);\n    return idx;\n}\n\nconst CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')\n    ? { register: () => {}, unregister: () => {} }\n    : new FinalizationRegistry(state => state.dtor(state.a, state.b));\n\nfunction debugString(val) {\n    // primitive types\n    const type = typeof val;\n    if (type == 'number' || type == 'boolean' || val == null) {\n        return  `${val}`;\n    }\n    if (type == 'string') {\n        return `\"${val}\"`;\n    }\n    if (type == 'symbol') {\n        const description = val.description;\n        if (description == null) {\n            return 'Symbol';\n        } else {\n            return `Symbol(${description})`;\n        }\n    }\n    if (type == 'function') {\n        const name = val.name;\n        if (typeof name == 'string' && name.length > 0) {\n            return `Function(${name})`;\n        } else {\n            return 'Function';\n        }\n    }\n    // objects\n    if (Array.isArray(val)) {\n        const length = val.length;\n        let debug = '[';\n        if (length > 0) {\n            debug += debugString(val[0]);\n        }\n        for(let i = 1; i < length; i++) {\n            debug += ', ' + debugString(val[i]);\n        }\n        debug += ']';\n        return debug;\n    }\n    // Test for built-in\n    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n    let className;\n    if (builtInMatches && builtInMatches.length > 1) {\n        className = builtInMatches[1];\n    } else {\n        // Failed to match the standard '[object ClassName]'\n        return toString.call(val);\n    }\n    if (className == 'Object') {\n        // we're a user defined class or Object\n        // JSON.stringify avoids problems with cycles, and is generally much\n        // easier than looping through ownProperties of `val`.\n        try {\n            return 'Object(' + JSON.stringify(val) + ')';\n        } catch (_) {\n            return 'Object';\n        }\n    }\n    // errors\n    if (val instanceof Error) {\n        return `${val.name}: ${val.message}\\n${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n\nlet cachedDataViewMemory0 = null;\nfunction getDataViewMemory0() {\n    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {\n        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);\n    }\n    return cachedDataViewMemory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return decodeText(ptr, len);\n}\n\nlet cachedUint8ArrayMemory0 = null;\nfunction getUint8ArrayMemory0() {\n    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {\n        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8ArrayMemory0;\n}\n\nfunction handleError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        const idx = addToExternrefTable0(e);\n        wasm.__wbindgen_exn_store(idx);\n    }\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction makeMutClosure(arg0, arg1, dtor, f) {\n    const state = { a: arg0, b: arg1, cnt: 1, dtor };\n    const real = (...args) => {\n\n        // First up with a closure we increment the internal reference\n        // count. This ensures that the Rust closure environment won't\n        // be deallocated while we're invoking it.\n        state.cnt++;\n        const a = state.a;\n        state.a = 0;\n        try {\n            return f(a, state.b, ...args);\n        } finally {\n            state.a = a;\n            real._wbg_cb_unref();\n        }\n    };\n    real._wbg_cb_unref = () => {\n        if (--state.cnt === 0) {\n            state.dtor(state.a, state.b);\n            state.a = 0;\n            CLOSURE_DTORS.unregister(state);\n        }\n    };\n    CLOSURE_DTORS.register(real, state, state);\n    return real;\n}\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length, 1) >>> 0;\n        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len, 1) >>> 0;\n\n    const mem = getUint8ArrayMemory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;\n        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);\n        const ret = cachedTextEncoder.encodeInto(arg, view);\n\n        offset += ret.written;\n        ptr = realloc(ptr, len, offset, 1) >>> 0;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\ncachedTextDecoder.decode();\nconst MAX_SAFARI_DECODE_BYTES = 2146435072;\nlet numBytesDecoded = 0;\nfunction decodeText(ptr, len) {\n    numBytesDecoded += len;\n    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {\n        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n        cachedTextDecoder.decode();\n        numBytesDecoded = len;\n    }\n    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));\n}\n\nconst cachedTextEncoder = new TextEncoder();\n\nif (!('encodeInto' in cachedTextEncoder)) {\n    cachedTextEncoder.encodeInto = function (arg, view) {\n        const buf = cachedTextEncoder.encode(arg);\n        view.set(buf);\n        return {\n            read: arg.length,\n            written: buf.length\n        };\n    }\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction wasm_bindgen__convert__closures_____invoke__h33f4174360a15ae3(arg0, arg1) {\n    wasm.wasm_bindgen__convert__closures_____invoke__h33f4174360a15ae3(arg0, arg1);\n}\n\n/**\n * @param {string} terminal_id\n * @param {number} width_chars\n * @param {number} height_chars\n */\nfunction perlin_animation(terminal_id, width_chars, height_chars) {\n    const ptr0 = passStringToWasm0(terminal_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n    const len0 = WASM_VECTOR_LEN;\n    wasm.perlin_animation(ptr0, len0, width_chars, height_chars);\n}\n\nfunction __wbg___wbindgen_debug_string_adfb662ae34724b6(arg0, arg1) {\n    const ret = debugString(arg1);\n    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n    const len1 = WASM_VECTOR_LEN;\n    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);\n    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);\n};\n\nfunction __wbg___wbindgen_is_undefined_f6b95eab589e0269(arg0) {\n    const ret = arg0 === undefined;\n    return ret;\n};\n\nfunction __wbg___wbindgen_throw_dd24417ed36fc46e(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbg__wbg_cb_unref_87dfb5aaa0cbcea7(arg0) {\n    arg0._wbg_cb_unref();\n};\n\nfunction __wbg_call_abb4ff46ce38be40() { return handleError(function (arg0, arg1) {\n    const ret = arg0.call(arg1);\n    return ret;\n}, arguments) };\n\nfunction __wbg_document_5b745e82ba551ca5(arg0) {\n    const ret = arg0.document;\n    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);\n};\n\nfunction __wbg_getElementById_e05488d2143c2b21(arg0, arg1, arg2) {\n    const ret = arg0.getElementById(getStringFromWasm0(arg1, arg2));\n    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);\n};\n\nfunction __wbg_instanceof_Window_b5cf7783caa68180(arg0) {\n    let result;\n    try {\n        result = arg0 instanceof Window;\n    } catch (_) {\n        result = false;\n    }\n    const ret = result;\n    return ret;\n};\n\nfunction __wbg_new_no_args_cb138f77cf6151ee(arg0, arg1) {\n    const ret = new Function(getStringFromWasm0(arg0, arg1));\n    return ret;\n};\n\nfunction __wbg_now_8cf15d6e317793e1(arg0) {\n    const ret = arg0.now();\n    return ret;\n};\n\nfunction __wbg_performance_c77a440eff2efd9b(arg0) {\n    const ret = arg0.performance;\n    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);\n};\n\nfunction __wbg_requestAnimationFrame_994dc4ebde22b8d9() { return handleError(function (arg0, arg1) {\n    const ret = arg0.requestAnimationFrame(arg1);\n    return ret;\n}, arguments) };\n\nfunction __wbg_set_textContent_e461237efe237e01(arg0, arg1, arg2) {\n    arg0.textContent = arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2);\n};\n\nfunction __wbg_static_accessor_GLOBAL_769e6b65d6557335() {\n    const ret = typeof global === 'undefined' ? null : global;\n    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);\n};\n\nfunction __wbg_static_accessor_GLOBAL_THIS_60cf02db4de8e1c1() {\n    const ret = typeof globalThis === 'undefined' ? null : globalThis;\n    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);\n};\n\nfunction __wbg_static_accessor_SELF_08f5a74c69739274() {\n    const ret = typeof self === 'undefined' ? null : self;\n    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);\n};\n\nfunction __wbg_static_accessor_WINDOW_a8924b26aa92d024() {\n    const ret = typeof window === 'undefined' ? null : window;\n    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);\n};\n\nfunction __wbindgen_cast_0268c24e8eb79d38(arg0, arg1) {\n    // Cast intrinsic for `Closure(Closure { dtor_idx: 3, function: Function { arguments: [], shim_idx: 4, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.\n    const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__h8edb81ddb8e3fd46, wasm_bindgen__convert__closures_____invoke__h33f4174360a15ae3);\n    return ret;\n};\n\nfunction __wbindgen_init_externref_table() {\n    const table = wasm.__wbindgen_externrefs;\n    const offset = table.grow(4);\n    table.set(0, undefined);\n    table.set(offset + 0, undefined);\n    table.set(offset + 1, null);\n    table.set(offset + 2, true);\n    table.set(offset + 3, false);\n};\n\n\n//# sourceURL=webpack:///../wasm/pkg/www_wasm_bg.js?");

/***/ }),

/***/ "../wasm/pkg/www_wasm_bg.wasm":
/*!************************************!*\
  !*** ../wasm/pkg/www_wasm_bg.wasm ***!
  \************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./www_wasm_bg.js */ \"../wasm/pkg/www_wasm_bg.js\");\nmodule.exports = __webpack_require__.v(exports, module.id, \"76b32acb3c853eaaf911\", {\n\t\"./www_wasm_bg.js\": {\n\t\t\"__wbg_instanceof_Window_b5cf7783caa68180\": WEBPACK_IMPORTED_MODULE_0.__wbg_instanceof_Window_b5cf7783caa68180,\n\t\t\"__wbg_performance_c77a440eff2efd9b\": WEBPACK_IMPORTED_MODULE_0.__wbg_performance_c77a440eff2efd9b,\n\t\t\"__wbg_requestAnimationFrame_994dc4ebde22b8d9\": WEBPACK_IMPORTED_MODULE_0.__wbg_requestAnimationFrame_994dc4ebde22b8d9,\n\t\t\"__wbg_document_5b745e82ba551ca5\": WEBPACK_IMPORTED_MODULE_0.__wbg_document_5b745e82ba551ca5,\n\t\t\"__wbg_getElementById_e05488d2143c2b21\": WEBPACK_IMPORTED_MODULE_0.__wbg_getElementById_e05488d2143c2b21,\n\t\t\"__wbg_now_8cf15d6e317793e1\": WEBPACK_IMPORTED_MODULE_0.__wbg_now_8cf15d6e317793e1,\n\t\t\"__wbg_set_textContent_e461237efe237e01\": WEBPACK_IMPORTED_MODULE_0.__wbg_set_textContent_e461237efe237e01,\n\t\t\"__wbg_new_no_args_cb138f77cf6151ee\": WEBPACK_IMPORTED_MODULE_0.__wbg_new_no_args_cb138f77cf6151ee,\n\t\t\"__wbg_static_accessor_GLOBAL_THIS_60cf02db4de8e1c1\": WEBPACK_IMPORTED_MODULE_0.__wbg_static_accessor_GLOBAL_THIS_60cf02db4de8e1c1,\n\t\t\"__wbg_call_abb4ff46ce38be40\": WEBPACK_IMPORTED_MODULE_0.__wbg_call_abb4ff46ce38be40,\n\t\t\"__wbg_static_accessor_SELF_08f5a74c69739274\": WEBPACK_IMPORTED_MODULE_0.__wbg_static_accessor_SELF_08f5a74c69739274,\n\t\t\"__wbg_static_accessor_GLOBAL_769e6b65d6557335\": WEBPACK_IMPORTED_MODULE_0.__wbg_static_accessor_GLOBAL_769e6b65d6557335,\n\t\t\"__wbg_static_accessor_WINDOW_a8924b26aa92d024\": WEBPACK_IMPORTED_MODULE_0.__wbg_static_accessor_WINDOW_a8924b26aa92d024,\n\t\t\"__wbg___wbindgen_throw_dd24417ed36fc46e\": WEBPACK_IMPORTED_MODULE_0.__wbg___wbindgen_throw_dd24417ed36fc46e,\n\t\t\"__wbg___wbindgen_is_undefined_f6b95eab589e0269\": WEBPACK_IMPORTED_MODULE_0.__wbg___wbindgen_is_undefined_f6b95eab589e0269,\n\t\t\"__wbg___wbindgen_debug_string_adfb662ae34724b6\": WEBPACK_IMPORTED_MODULE_0.__wbg___wbindgen_debug_string_adfb662ae34724b6,\n\t\t\"__wbg__wbg_cb_unref_87dfb5aaa0cbcea7\": WEBPACK_IMPORTED_MODULE_0.__wbg__wbg_cb_unref_87dfb5aaa0cbcea7,\n\t\t\"__wbindgen_init_externref_table\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_init_externref_table,\n\t\t\"__wbindgen_cast_0268c24e8eb79d38\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_cast_0268c24e8eb79d38\n\t}\n});\n\n//# sourceURL=webpack:///../wasm/pkg/www_wasm_bg.wasm?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/wasm loading */
/******/ 	(() => {
/******/ 		__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {
/******/ 		
/******/ 			var req = fetch(__webpack_require__.p + "" + wasmModuleHash + ".module.wasm");
/******/ 			var fallback = () => (req
/******/ 				.then((x) => (x.arrayBuffer()))
/******/ 				.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
/******/ 				.then((res) => (Object.assign(exports, res.instance.exports))));
/******/ 			return req.then((res) => {
/******/ 				if (typeof WebAssembly.instantiateStreaming === "function") {
/******/ 		
/******/ 					return WebAssembly.instantiateStreaming(res, importsObj)
/******/ 						.then(
/******/ 							(res) => (Object.assign(exports, res.instance.exports)),
/******/ 							(e) => {
/******/ 								if(res.headers.get("Content-Type") !== "application/wasm") {
/******/ 									console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
/******/ 									return fallback();
/******/ 								}
/******/ 								throw e;
/******/ 							}
/******/ 						);
/******/ 				}
/******/ 				return fallback();
/******/ 			});
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/index.js");
/******/ 	
/******/ })()
;