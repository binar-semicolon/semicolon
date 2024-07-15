"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/image-type";
exports.ids = ["vendor-chunks/image-type"];
exports.modules = {

/***/ "(action-browser)/../../node_modules/image-type/index.js":
/*!**********************************************!*\
  !*** ../../node_modules/image-type/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ imageType),\n/* harmony export */   minimumBytes: () => (/* binding */ minimumBytes)\n/* harmony export */ });\n/* harmony import */ var file_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-type */ \"(action-browser)/../../node_modules/file-type/index.js\");\n\n\nconst imageExtensions = new Set([\n\t'jpg',\n\t'png',\n\t'gif',\n\t'webp',\n\t'flif',\n\t'cr2',\n\t'tif',\n\t'bmp',\n\t'jxr',\n\t'psd',\n\t'ico',\n\t'bpg',\n\t'jp2',\n\t'jpm',\n\t'jpx',\n\t'heic',\n\t'cur',\n\t'dcm',\n\t'avif',\n]);\n\nasync function imageType(input) {\n\tconst result = await (0,file_type__WEBPACK_IMPORTED_MODULE_0__.fileTypeFromBuffer)(input);\n\treturn imageExtensions.has(result?.ext) && result;\n}\n\nconst minimumBytes = 4100;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uLi8uLi9ub2RlX21vZHVsZXMvaW1hZ2UtdHlwZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLHNCQUFzQiw2REFBa0I7QUFDeEM7QUFDQTs7QUFFTyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uLi8uLi9ub2RlX21vZHVsZXMvaW1hZ2UtdHlwZS9pbmRleC5qcz9iZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZmlsZVR5cGVGcm9tQnVmZmVyfSBmcm9tICdmaWxlLXR5cGUnO1xuXG5jb25zdCBpbWFnZUV4dGVuc2lvbnMgPSBuZXcgU2V0KFtcblx0J2pwZycsXG5cdCdwbmcnLFxuXHQnZ2lmJyxcblx0J3dlYnAnLFxuXHQnZmxpZicsXG5cdCdjcjInLFxuXHQndGlmJyxcblx0J2JtcCcsXG5cdCdqeHInLFxuXHQncHNkJyxcblx0J2ljbycsXG5cdCdicGcnLFxuXHQnanAyJyxcblx0J2pwbScsXG5cdCdqcHgnLFxuXHQnaGVpYycsXG5cdCdjdXInLFxuXHQnZGNtJyxcblx0J2F2aWYnLFxuXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGltYWdlVHlwZShpbnB1dCkge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBmaWxlVHlwZUZyb21CdWZmZXIoaW5wdXQpO1xuXHRyZXR1cm4gaW1hZ2VFeHRlbnNpb25zLmhhcyhyZXN1bHQ/LmV4dCkgJiYgcmVzdWx0O1xufVxuXG5leHBvcnQgY29uc3QgbWluaW11bUJ5dGVzID0gNDEwMDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(action-browser)/../../node_modules/image-type/index.js\n");

/***/ })

};
;