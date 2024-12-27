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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Terminal: () => (/* binding */ Terminal)\n/* harmony export */ });\nclass Terminal {\n\n  static fromId(id) {\n    const terminalElement = document.getElementById(id);\n    return new Terminal(terminalElement)\n  }\n\n  constructor(terminalElement) {\n    this.terminalElement = terminalElement;\n  }\n\n  get widthPixels() {\n    return this.terminalElement.offsetWidth\n  }\n\n  get widthCharacters() {\n    // Create a temporary span with a single character\n    const testSpan = document.createElement('span');\n    testSpan.textContent = 'W'; // Use a wide character to ensure accuracy\n    testSpan.style.fontFamily = getComputedStyle(this.terminalElement).fontFamily;\n    testSpan.style.fontSize = getComputedStyle(this.terminalElement).fontSize;\n    testSpan.style.visibility = 'hidden'; // Make it invisible\n    document.body.appendChild(testSpan);\n\n    // Get the width of the single character in pixels\n    const widthCharacters = testSpan.offsetWidth;\n\n    // Remove the test span\n    document.body.removeChild(testSpan);\n\n    // Calculate and return the terminalElement width in characters\n    return Math.floor(this.widthPixels / widthCharacters);\n  }\n\n  get heightPixels() {\n    return this.terminalElement.offsetHeight;\n  }\n\n  get heightCharacters() {\n    // Create a temporary span with a single line of text\n    const testSpan = document.createElement('span');\n    testSpan.textContent = 'W'; // A single character to measure line height\n    testSpan.style.fontFamily = getComputedStyle(this.terminalElement).fontFamily;\n    testSpan.style.fontSize = getComputedStyle(this.terminalElement).fontSize;\n    testSpan.style.visibility = 'hidden'; // Make it invisible\n\n    document.body.appendChild(testSpan);\n\n    // Get the line height of the character in pixels\n    const heightCharacters = testSpan.offsetHeight;\n\n    // Remove the test span\n    document.body.removeChild(testSpan);\n\n    // Calculate and return the terminal height in characters\n    return Math.floor(this.heightPixels / heightCharacters);\n  }\n\n  print(text) {\n    this.terminalElement.textContent = text;\n  }\n\n  clear() {\n    this.terminalElement.textContent = '';\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/terminal.js?");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var www_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! www-wasm */ \"../wasm/pkg/www_wasm.js\");\n/* harmony import */ var _components_terminal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/terminal.js */ \"./src/components/terminal.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([www_wasm__WEBPACK_IMPORTED_MODULE_0__]);\nwww_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst TERMINAL_ID = 'terminal';\n\nconst terminal = _components_terminal_js__WEBPACK_IMPORTED_MODULE_1__.Terminal.fromId(TERMINAL_ID);\nconsole.log(terminal);\n\nwww_wasm__WEBPACK_IMPORTED_MODULE_0__.perlin_animation(TERMINAL_ID, terminal.widthCharacters, terminal.heightCharacters);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///./src/pages/index.js?");

/***/ }),

/***/ "../wasm/pkg/www_wasm.js":
/*!*******************************!*\
  !*** ../wasm/pkg/www_wasm.js ***!
  \*******************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __wbg_call_b0d8e36992d9900d: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_call_b0d8e36992d9900d),\n/* harmony export */   __wbg_document_f11bc4f7c03e1745: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_document_f11bc4f7c03e1745),\n/* harmony export */   __wbg_getElementById_dcc9f1f3cfdca0bc: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_getElementById_dcc9f1f3cfdca0bc),\n/* harmony export */   __wbg_instanceof_Window_d2514c6a7ee7ba60: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_instanceof_Window_d2514c6a7ee7ba60),\n/* harmony export */   __wbg_newnoargs_fd9e4bf8be2bc16d: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_newnoargs_fd9e4bf8be2bc16d),\n/* harmony export */   __wbg_now_62a101fe35b60230: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_now_62a101fe35b60230),\n/* harmony export */   __wbg_performance_2e69ce813a883f21: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_performance_2e69ce813a883f21),\n/* harmony export */   __wbg_requestAnimationFrame_169cbbda5861d9ca: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_requestAnimationFrame_169cbbda5861d9ca),\n/* harmony export */   __wbg_set_wasm: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm),\n/* harmony export */   __wbg_settextContent_0eab7fce6c07d5c9: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_settextContent_0eab7fce6c07d5c9),\n/* harmony export */   __wbg_static_accessor_GLOBAL_0be7472e492ad3e3: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_static_accessor_GLOBAL_0be7472e492ad3e3),\n/* harmony export */   __wbg_static_accessor_GLOBAL_THIS_1a6eb482d12c9bfb: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_static_accessor_GLOBAL_THIS_1a6eb482d12c9bfb),\n/* harmony export */   __wbg_static_accessor_SELF_1dc398a895c82351: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_static_accessor_SELF_1dc398a895c82351),\n/* harmony export */   __wbg_static_accessor_WINDOW_ae1c80c7eea8d64a: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_static_accessor_WINDOW_ae1c80c7eea8d64a),\n/* harmony export */   __wbindgen_cb_drop: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_cb_drop),\n/* harmony export */   __wbindgen_closure_wrapper29: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_closure_wrapper29),\n/* harmony export */   __wbindgen_debug_string: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_debug_string),\n/* harmony export */   __wbindgen_init_externref_table: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_init_externref_table),\n/* harmony export */   __wbindgen_is_undefined: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_is_undefined),\n/* harmony export */   __wbindgen_throw: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_throw),\n/* harmony export */   perlin_animation: () => (/* reexport safe */ _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.perlin_animation)\n/* harmony export */ });\n/* harmony import */ var _www_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./www_wasm_bg.wasm */ \"../wasm/pkg/www_wasm_bg.wasm\");\n/* harmony import */ var _www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./www_wasm_bg.js */ \"../wasm/pkg/www_wasm_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_www_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\n_www_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n(0,_www_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm)(_www_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_1__);\n_www_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_start();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../wasm/pkg/www_wasm.js?");

/***/ }),

/***/ "../wasm/pkg/www_wasm_bg.js":
/*!**********************************!*\
  !*** ../wasm/pkg/www_wasm_bg.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __wbg_call_b0d8e36992d9900d: () => (/* binding */ __wbg_call_b0d8e36992d9900d),\n/* harmony export */   __wbg_document_f11bc4f7c03e1745: () => (/* binding */ __wbg_document_f11bc4f7c03e1745),\n/* harmony export */   __wbg_getElementById_dcc9f1f3cfdca0bc: () => (/* binding */ __wbg_getElementById_dcc9f1f3cfdca0bc),\n/* harmony export */   __wbg_instanceof_Window_d2514c6a7ee7ba60: () => (/* binding */ __wbg_instanceof_Window_d2514c6a7ee7ba60),\n/* harmony export */   __wbg_newnoargs_fd9e4bf8be2bc16d: () => (/* binding */ __wbg_newnoargs_fd9e4bf8be2bc16d),\n/* harmony export */   __wbg_now_62a101fe35b60230: () => (/* binding */ __wbg_now_62a101fe35b60230),\n/* harmony export */   __wbg_performance_2e69ce813a883f21: () => (/* binding */ __wbg_performance_2e69ce813a883f21),\n/* harmony export */   __wbg_requestAnimationFrame_169cbbda5861d9ca: () => (/* binding */ __wbg_requestAnimationFrame_169cbbda5861d9ca),\n/* harmony export */   __wbg_set_wasm: () => (/* binding */ __wbg_set_wasm),\n/* harmony export */   __wbg_settextContent_0eab7fce6c07d5c9: () => (/* binding */ __wbg_settextContent_0eab7fce6c07d5c9),\n/* harmony export */   __wbg_static_accessor_GLOBAL_0be7472e492ad3e3: () => (/* binding */ __wbg_static_accessor_GLOBAL_0be7472e492ad3e3),\n/* harmony export */   __wbg_static_accessor_GLOBAL_THIS_1a6eb482d12c9bfb: () => (/* binding */ __wbg_static_accessor_GLOBAL_THIS_1a6eb482d12c9bfb),\n/* harmony export */   __wbg_static_accessor_SELF_1dc398a895c82351: () => (/* binding */ __wbg_static_accessor_SELF_1dc398a895c82351),\n/* harmony export */   __wbg_static_accessor_WINDOW_ae1c80c7eea8d64a: () => (/* binding */ __wbg_static_accessor_WINDOW_ae1c80c7eea8d64a),\n/* harmony export */   __wbindgen_cb_drop: () => (/* binding */ __wbindgen_cb_drop),\n/* harmony export */   __wbindgen_closure_wrapper29: () => (/* binding */ __wbindgen_closure_wrapper29),\n/* harmony export */   __wbindgen_debug_string: () => (/* binding */ __wbindgen_debug_string),\n/* harmony export */   __wbindgen_init_externref_table: () => (/* binding */ __wbindgen_init_externref_table),\n/* harmony export */   __wbindgen_is_undefined: () => (/* binding */ __wbindgen_is_undefined),\n/* harmony export */   __wbindgen_throw: () => (/* binding */ __wbindgen_throw),\n/* harmony export */   perlin_animation: () => (/* binding */ perlin_animation)\n/* harmony export */ });\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nfunction addToExternrefTable0(obj) {\n    const idx = wasm.__externref_table_alloc();\n    wasm.__wbindgen_export_2.set(idx, obj);\n    return idx;\n}\n\nfunction handleError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        const idx = addToExternrefTable0(e);\n        wasm.__wbindgen_exn_store(idx);\n    }\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8ArrayMemory0 = null;\n\nfunction getUint8ArrayMemory0() {\n    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {\n        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8ArrayMemory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));\n}\n\nconst CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')\n    ? { register: () => {}, unregister: () => {} }\n    : new FinalizationRegistry(state => {\n    wasm.__wbindgen_export_3.get(state.dtor)(state.a, state.b)\n});\n\nfunction makeMutClosure(arg0, arg1, dtor, f) {\n    const state = { a: arg0, b: arg1, cnt: 1, dtor };\n    const real = (...args) => {\n        // First up with a closure we increment the internal reference\n        // count. This ensures that the Rust closure environment won't\n        // be deallocated while we're invoking it.\n        state.cnt++;\n        const a = state.a;\n        state.a = 0;\n        try {\n            return f(a, state.b, ...args);\n        } finally {\n            if (--state.cnt === 0) {\n                wasm.__wbindgen_export_3.get(state.dtor)(a, state.b);\n                CLOSURE_DTORS.unregister(state);\n            } else {\n                state.a = a;\n            }\n        }\n    };\n    real.original = state;\n    CLOSURE_DTORS.register(real, state, state);\n    return real;\n}\n\nfunction debugString(val) {\n    // primitive types\n    const type = typeof val;\n    if (type == 'number' || type == 'boolean' || val == null) {\n        return  `${val}`;\n    }\n    if (type == 'string') {\n        return `\"${val}\"`;\n    }\n    if (type == 'symbol') {\n        const description = val.description;\n        if (description == null) {\n            return 'Symbol';\n        } else {\n            return `Symbol(${description})`;\n        }\n    }\n    if (type == 'function') {\n        const name = val.name;\n        if (typeof name == 'string' && name.length > 0) {\n            return `Function(${name})`;\n        } else {\n            return 'Function';\n        }\n    }\n    // objects\n    if (Array.isArray(val)) {\n        const length = val.length;\n        let debug = '[';\n        if (length > 0) {\n            debug += debugString(val[0]);\n        }\n        for(let i = 1; i < length; i++) {\n            debug += ', ' + debugString(val[i]);\n        }\n        debug += ']';\n        return debug;\n    }\n    // Test for built-in\n    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n    let className;\n    if (builtInMatches && builtInMatches.length > 1) {\n        className = builtInMatches[1];\n    } else {\n        // Failed to match the standard '[object ClassName]'\n        return toString.call(val);\n    }\n    if (className == 'Object') {\n        // we're a user defined class or Object\n        // JSON.stringify avoids problems with cycles, and is generally much\n        // easier than looping through ownProperties of `val`.\n        try {\n            return 'Object(' + JSON.stringify(val) + ')';\n        } catch (_) {\n            return 'Object';\n        }\n    }\n    // errors\n    if (val instanceof Error) {\n        return `${val.name}: ${val.message}\\n${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length, 1) >>> 0;\n        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len, 1) >>> 0;\n\n    const mem = getUint8ArrayMemory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;\n        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n        ptr = realloc(ptr, len, offset, 1) >>> 0;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachedDataViewMemory0 = null;\n\nfunction getDataViewMemory0() {\n    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {\n        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);\n    }\n    return cachedDataViewMemory0;\n}\n/**\n * @param {string} terminal_id\n * @param {number} width_chars\n * @param {number} height_chars\n */\nfunction perlin_animation(terminal_id, width_chars, height_chars) {\n    const ptr0 = passStringToWasm0(terminal_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n    const len0 = WASM_VECTOR_LEN;\n    wasm.perlin_animation(ptr0, len0, width_chars, height_chars);\n}\n\nfunction __wbg_adapter_16(arg0, arg1) {\n    wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0cde9123de1f52e1(arg0, arg1);\n}\n\nfunction __wbg_call_b0d8e36992d9900d() { return handleError(function (arg0, arg1) {\n    const ret = arg0.call(arg1);\n    return ret;\n}, arguments) };\n\nfunction __wbg_document_f11bc4f7c03e1745(arg0) {\n    const ret = arg0.document;\n    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);\n};\n\nfunction __wbg_getElementById_dcc9f1f3cfdca0bc(arg0, arg1, arg2) {\n    const ret = arg0.getElementById(getStringFromWasm0(arg1, arg2));\n    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);\n};\n\nfunction __wbg_instanceof_Window_d2514c6a7ee7ba60(arg0) {\n    let result;\n    try {\n        result = arg0 instanceof Window;\n    } catch (_) {\n        result = false;\n    }\n    const ret = result;\n    return ret;\n};\n\nfunction __wbg_newnoargs_fd9e4bf8be2bc16d(arg0, arg1) {\n    const ret = new Function(getStringFromWasm0(arg0, arg1));\n    return ret;\n};\n\nfunction __wbg_now_62a101fe35b60230(arg0) {\n    const ret = arg0.now();\n    return ret;\n};\n\nfunction __wbg_performance_2e69ce813a883f21(arg0) {\n    const ret = arg0.performance;\n    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);\n};\n\nfunction __wbg_requestAnimationFrame_169cbbda5861d9ca() { return handleError(function (arg0, arg1) {\n    const ret = arg0.requestAnimationFrame(arg1);\n    return ret;\n}, arguments) };\n\nfunction __wbg_settextContent_0eab7fce6c07d5c9(arg0, arg1, arg2) {\n    arg0.textContent = arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2);\n};\n\nfunction __wbg_static_accessor_GLOBAL_0be7472e492ad3e3() {\n    const ret = typeof global === 'undefined' ? null : global;\n    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);\n};\n\nfunction __wbg_static_accessor_GLOBAL_THIS_1a6eb482d12c9bfb() {\n    const ret = typeof globalThis === 'undefined' ? null : globalThis;\n    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);\n};\n\nfunction __wbg_static_accessor_SELF_1dc398a895c82351() {\n    const ret = typeof self === 'undefined' ? null : self;\n    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);\n};\n\nfunction __wbg_static_accessor_WINDOW_ae1c80c7eea8d64a() {\n    const ret = typeof window === 'undefined' ? null : window;\n    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);\n};\n\nfunction __wbindgen_cb_drop(arg0) {\n    const obj = arg0.original;\n    if (obj.cnt-- == 1) {\n        obj.a = 0;\n        return true;\n    }\n    const ret = false;\n    return ret;\n};\n\nfunction __wbindgen_closure_wrapper29(arg0, arg1, arg2) {\n    const ret = makeMutClosure(arg0, arg1, 3, __wbg_adapter_16);\n    return ret;\n};\n\nfunction __wbindgen_debug_string(arg0, arg1) {\n    const ret = debugString(arg1);\n    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n    const len1 = WASM_VECTOR_LEN;\n    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);\n    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);\n};\n\nfunction __wbindgen_init_externref_table() {\n    const table = wasm.__wbindgen_export_2;\n    const offset = table.grow(4);\n    table.set(0, undefined);\n    table.set(offset + 0, undefined);\n    table.set(offset + 1, null);\n    table.set(offset + 2, true);\n    table.set(offset + 3, false);\n    ;\n};\n\nfunction __wbindgen_is_undefined(arg0) {\n    const ret = arg0 === undefined;\n    return ret;\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n\n//# sourceURL=webpack:///../wasm/pkg/www_wasm_bg.js?");

/***/ }),

/***/ "../wasm/pkg/www_wasm_bg.wasm":
/*!************************************!*\
  !*** ../wasm/pkg/www_wasm_bg.wasm ***!
  \************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./www_wasm_bg.js */ \"../wasm/pkg/www_wasm_bg.js\");\nmodule.exports = __webpack_require__.v(exports, module.id, \"d495a9ef4d41352226af\", {\n\t\"./www_wasm_bg.js\": {\n\t\t\"__wbindgen_cb_drop\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_cb_drop,\n\t\t\"__wbg_instanceof_Window_d2514c6a7ee7ba60\": WEBPACK_IMPORTED_MODULE_0.__wbg_instanceof_Window_d2514c6a7ee7ba60,\n\t\t\"__wbg_document_f11bc4f7c03e1745\": WEBPACK_IMPORTED_MODULE_0.__wbg_document_f11bc4f7c03e1745,\n\t\t\"__wbg_performance_2e69ce813a883f21\": WEBPACK_IMPORTED_MODULE_0.__wbg_performance_2e69ce813a883f21,\n\t\t\"__wbg_requestAnimationFrame_169cbbda5861d9ca\": WEBPACK_IMPORTED_MODULE_0.__wbg_requestAnimationFrame_169cbbda5861d9ca,\n\t\t\"__wbg_getElementById_dcc9f1f3cfdca0bc\": WEBPACK_IMPORTED_MODULE_0.__wbg_getElementById_dcc9f1f3cfdca0bc,\n\t\t\"__wbg_settextContent_0eab7fce6c07d5c9\": WEBPACK_IMPORTED_MODULE_0.__wbg_settextContent_0eab7fce6c07d5c9,\n\t\t\"__wbg_now_62a101fe35b60230\": WEBPACK_IMPORTED_MODULE_0.__wbg_now_62a101fe35b60230,\n\t\t\"__wbg_newnoargs_fd9e4bf8be2bc16d\": WEBPACK_IMPORTED_MODULE_0.__wbg_newnoargs_fd9e4bf8be2bc16d,\n\t\t\"__wbg_call_b0d8e36992d9900d\": WEBPACK_IMPORTED_MODULE_0.__wbg_call_b0d8e36992d9900d,\n\t\t\"__wbindgen_is_undefined\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_undefined,\n\t\t\"__wbg_static_accessor_GLOBAL_THIS_1a6eb482d12c9bfb\": WEBPACK_IMPORTED_MODULE_0.__wbg_static_accessor_GLOBAL_THIS_1a6eb482d12c9bfb,\n\t\t\"__wbg_static_accessor_SELF_1dc398a895c82351\": WEBPACK_IMPORTED_MODULE_0.__wbg_static_accessor_SELF_1dc398a895c82351,\n\t\t\"__wbg_static_accessor_WINDOW_ae1c80c7eea8d64a\": WEBPACK_IMPORTED_MODULE_0.__wbg_static_accessor_WINDOW_ae1c80c7eea8d64a,\n\t\t\"__wbg_static_accessor_GLOBAL_0be7472e492ad3e3\": WEBPACK_IMPORTED_MODULE_0.__wbg_static_accessor_GLOBAL_0be7472e492ad3e3,\n\t\t\"__wbindgen_debug_string\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_debug_string,\n\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw,\n\t\t\"__wbindgen_closure_wrapper29\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_closure_wrapper29,\n\t\t\"__wbindgen_init_externref_table\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_init_externref_table\n\t}\n});\n\n//# sourceURL=webpack:///../wasm/pkg/www_wasm_bg.wasm?");

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