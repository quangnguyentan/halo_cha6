"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist\\client\\components\\action-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist\\client\\components\\request-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!*********************************************************************************************!*\
  !*** external "next/dist\\client\\components\\static-generation-async-storage.external.js" ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=D%3A%5Ccompany%5Chalo_cha6%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ccompany%5Chalo_cha6&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=D%3A%5Ccompany%5Chalo_cha6%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ccompany%5Chalo_cha6&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_company_halo_cha6_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"D:\\\\company\\\\halo_cha6\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: D_company_halo_cha6_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDY29tcGFueSU1Q2hhbG9fY2hhNiU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q2NvbXBhbnklNUNoYWxvX2NoYTYmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDZTtBQUM1RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL2hhbG9jaGF0Lz9hZTU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXGNvbXBhbnlcXFxcaGFsb19jaGE2XFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXGNvbXBhbnlcXFxcaGFsb19jaGE2XFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=D%3A%5Ccompany%5Chalo_cha6%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ccompany%5Chalo_cha6&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mongodb */ \"(rsc)/./mongodb/index.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models/User */ \"(rsc)/./models/User.js\");\n// import NextAuth from \"next-auth\";\n// import CredentialsProvider from \"next-auth/providers/credentials\";\n// import { compare } from \"bcryptjs\";\n// import { connectToDB } from \"@mongodb\";\n// import User from \"@models/User\";\n// const handler = NextAuth({\n//   providers: [\n//     CredentialsProvider({\n//       name: \"Credentials\",\n//       async authorize(credentials, req) {\n//         if (!credentials.email || !credentials.password) {\n//           throw new Error(\"Sai email hoặc mật khẩu\");\n//         }\n//         await connectToDB();\n//         const user = await User.findOne({ email: credentials.email });\n//         if (!user || !user?.password) {\n//           throw new Error(\"Sai email hoặc mật khẩu\");\n//         }\n//         const isMatch = await compare(credentials.password, user.password);\n//         if (!isMatch) {\n//           throw new Error(\"Không đúng mật khẩu\");\n//         }\n//         // Trả về thông tin người dùng bao gồm vai trò\n//         return { ...user._doc, id: user._id.toString() };\n//       },\n//     }),\n//   ],\n//   secret: process.env.NEXTAUTH_SECRET,\n//   callbacks: {\n//     async jwt({ token, user }) {\n//       if (user) {\n//         token.id = user.id;\n//         token.role = user.role; // Lưu vai trò vào token\n//         token.email = user.email; // Lưu vai trò vào token\n//         token.profileImage = user.profileImage; // Lưu vai trò vào token\n//         token.username = user.username; // Lưu vai trò vào token\n//         token.chats = user.chats; // Lưu vai trò vào token\n//         token.code = user.code; // Lưu vai trò vào token\n//         token.codeAddFriends = user.codeAddFriends; // Lưu vai trò vào token\n//         console.log(token);\n//       }\n//       return token;\n//     },\n//     async session({ session, token }) {\n//       session.user.id = token.id;\n//       session.user.role = token.role; // Thêm vai trò vào session\n//       session.user.name = token.username; // Thêm vai trò vào session\n//       session.user.image = token.profileImage; // Thêm vai trò vào session\n//       session.user.chats = token.chats; // Thêm vai trò vào session\n//       session.user.email = token.email; // Thêm vai trò vào session\n//       session.user.code = token.code; // Thêm vai trò vào session\n//       session.user.codeAddFriends = token.codeAddFriends; // Thêm vai trò vào session\n//       console.log(session);\n//       return session;\n//     },\n//   },\n// });\n// export { handler as GET, handler as POST };\n\n\n\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            async authorize (credentials, req) {\n                if (!credentials.email || !credentials.password) {\n                    throw new Error(\"Sai email hoặc mật khẩu\");\n                }\n                await (0,_mongodb__WEBPACK_IMPORTED_MODULE_3__.connectToDB)();\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                    email: credentials.email\n                });\n                if (!user || !user?.password) {\n                    throw new Error(\"Sai email hoặc mật khẩu\");\n                }\n                const isMatch = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_2__.compare)(credentials.password, user.password);\n                if (!isMatch) {\n                    throw new Error(\"Kh\\xf4ng đ\\xfang mật khẩu\");\n                }\n                return user;\n            }\n        })\n    ],\n    // A secret key use to deploy the application\n    secret: process.env.NEXTAUTH_SECRET,\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.role = user.role; // Lưu vai trò vào token\n                token.email = user.email; // Lưu vai trò vào token\n                console.log(token);\n            }\n            return token;\n        },\n        async session ({ session }) {\n            const mongodbUser = await _models_User__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                email: session.user.email\n            });\n            session.user.id = mongodbUser._id.toString();\n            session.user = {\n                ...session.user,\n                ...mongodbUser._doc\n            };\n            return session;\n        }\n    }\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBb0M7QUFDcEMscUVBQXFFO0FBQ3JFLHNDQUFzQztBQUN0QywwQ0FBMEM7QUFDMUMsbUNBQW1DO0FBRW5DLDZCQUE2QjtBQUM3QixpQkFBaUI7QUFDakIsNEJBQTRCO0FBQzVCLDZCQUE2QjtBQUM3Qiw0Q0FBNEM7QUFDNUMsNkRBQTZEO0FBQzdELHdEQUF3RDtBQUN4RCxZQUFZO0FBRVosK0JBQStCO0FBQy9CLHlFQUF5RTtBQUV6RSwwQ0FBMEM7QUFDMUMsd0RBQXdEO0FBQ3hELFlBQVk7QUFFWiw4RUFBOEU7QUFFOUUsMEJBQTBCO0FBQzFCLG9EQUFvRDtBQUNwRCxZQUFZO0FBQ1oseURBQXlEO0FBQ3pELDREQUE0RDtBQUM1RCxXQUFXO0FBQ1gsVUFBVTtBQUNWLE9BQU87QUFDUCx5Q0FBeUM7QUFFekMsaUJBQWlCO0FBQ2pCLG1DQUFtQztBQUNuQyxvQkFBb0I7QUFDcEIsOEJBQThCO0FBQzlCLDJEQUEyRDtBQUMzRCw2REFBNkQ7QUFDN0QsMkVBQTJFO0FBQzNFLG1FQUFtRTtBQUNuRSw2REFBNkQ7QUFDN0QsMkRBQTJEO0FBQzNELCtFQUErRTtBQUUvRSw4QkFBOEI7QUFDOUIsVUFBVTtBQUNWLHNCQUFzQjtBQUN0QixTQUFTO0FBQ1QsMENBQTBDO0FBQzFDLG9DQUFvQztBQUNwQyxvRUFBb0U7QUFDcEUsd0VBQXdFO0FBQ3hFLDZFQUE2RTtBQUM3RSxzRUFBc0U7QUFDdEUsc0VBQXNFO0FBQ3RFLG9FQUFvRTtBQUNwRSx3RkFBd0Y7QUFFeEYsOEJBQThCO0FBQzlCLHdCQUF3QjtBQUN4QixTQUFTO0FBQ1QsT0FBTztBQUNQLE1BQU07QUFFTiw4Q0FBOEM7QUFFYjtBQUNpQztBQUMvQjtBQUVJO0FBQ1A7QUFFaEMsTUFBTUssVUFBVUwsZ0RBQVFBLENBQUM7SUFDdkJNLFdBQVc7UUFDVEwsMkVBQW1CQSxDQUFDO1lBQ2xCTSxNQUFNO1lBQ04sTUFBTUMsV0FBVUMsV0FBVyxFQUFFQyxHQUFHO2dCQUM5QixJQUFJLENBQUNELFlBQVlFLEtBQUssSUFBSSxDQUFDRixZQUFZRyxRQUFRLEVBQUU7b0JBQy9DLE1BQU0sSUFBSUMsTUFBTTtnQkFDbEI7Z0JBRUEsTUFBTVYscURBQVdBO2dCQUVqQixNQUFNVyxPQUFPLE1BQU1WLG9EQUFJQSxDQUFDVyxPQUFPLENBQUM7b0JBQUVKLE9BQU9GLFlBQVlFLEtBQUs7Z0JBQUM7Z0JBRTNELElBQUksQ0FBQ0csUUFBUSxDQUFDQSxNQUFNRixVQUFVO29CQUM1QixNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUVBLE1BQU1HLFVBQVUsTUFBTWQsaURBQU9BLENBQUNPLFlBQVlHLFFBQVEsRUFBRUUsS0FBS0YsUUFBUTtnQkFFakUsSUFBSSxDQUFDSSxTQUFTO29CQUNaLE1BQU0sSUFBSUgsTUFBTTtnQkFDbEI7Z0JBRUEsT0FBT0M7WUFDVDtRQUNGO0tBQ0Q7SUFDRCw2Q0FBNkM7SUFDN0NHLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtJQUVuQ0MsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFVCxJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTTtnQkFDUlMsTUFBTUMsRUFBRSxHQUFHVixLQUFLVSxFQUFFO2dCQUNsQkQsTUFBTUUsSUFBSSxHQUFHWCxLQUFLVyxJQUFJLEVBQUUsd0JBQXdCO2dCQUNoREYsTUFBTVosS0FBSyxHQUFHRyxLQUFLSCxLQUFLLEVBQUUsd0JBQXdCO2dCQUVsRGUsUUFBUUMsR0FBRyxDQUFDSjtZQUNkO1lBQ0EsT0FBT0E7UUFDVDtRQUVBLE1BQU1LLFNBQVEsRUFBRUEsT0FBTyxFQUFFO1lBQ3ZCLE1BQU1DLGNBQWMsTUFBTXpCLG9EQUFJQSxDQUFDVyxPQUFPLENBQUM7Z0JBQUVKLE9BQU9pQixRQUFRZCxJQUFJLENBQUNILEtBQUs7WUFBQztZQUNuRWlCLFFBQVFkLElBQUksQ0FBQ1UsRUFBRSxHQUFHSyxZQUFZQyxHQUFHLENBQUNDLFFBQVE7WUFDMUNILFFBQVFkLElBQUksR0FBRztnQkFBRSxHQUFHYyxRQUFRZCxJQUFJO2dCQUFFLEdBQUdlLFlBQVlHLElBQUk7WUFBQztZQUN0RCxPQUFPSjtRQUNUO0lBQ0Y7QUFDRjtBQUUyQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hhbG9jaGF0Ly4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanM/ZGExYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG4vLyBpbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG4vLyBpbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcImJjcnlwdGpzXCI7XHJcbi8vIGltcG9ydCB7IGNvbm5lY3RUb0RCIH0gZnJvbSBcIkBtb25nb2RiXCI7XHJcbi8vIGltcG9ydCBVc2VyIGZyb20gXCJAbW9kZWxzL1VzZXJcIjtcclxuXHJcbi8vIGNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aCh7XHJcbi8vICAgcHJvdmlkZXJzOiBbXHJcbi8vICAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuLy8gICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxyXG4vLyAgICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xyXG4vLyAgICAgICAgIGlmICghY3JlZGVudGlhbHMuZW1haWwgfHwgIWNyZWRlbnRpYWxzLnBhc3N3b3JkKSB7XHJcbi8vICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTYWkgZW1haWwgaG/hurdjIG3huq10IGto4bqpdVwiKTtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGF3YWl0IGNvbm5lY3RUb0RCKCk7XHJcbi8vICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCB9KTtcclxuXHJcbi8vICAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyPy5wYXNzd29yZCkge1xyXG4vLyAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2FpIGVtYWlsIGhv4bq3YyBt4bqtdCBraOG6qXVcIik7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBjb25zdCBpc01hdGNoID0gYXdhaXQgY29tcGFyZShjcmVkZW50aWFscy5wYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XHJcblxyXG4vLyAgICAgICAgIGlmICghaXNNYXRjaCkge1xyXG4vLyAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiS2jDtG5nIMSRw7puZyBt4bqtdCBraOG6qXVcIik7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIC8vIFRy4bqjIHbhu4EgdGjDtG5nIHRpbiBuZ8aw4budaSBkw7luZyBiYW8gZ+G7k20gdmFpIHRyw7JcclxuLy8gICAgICAgICByZXR1cm4geyAuLi51c2VyLl9kb2MsIGlkOiB1c2VyLl9pZC50b1N0cmluZygpIH07XHJcbi8vICAgICAgIH0sXHJcbi8vICAgICB9KSxcclxuLy8gICBdLFxyXG4vLyAgIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG5cclxuLy8gICBjYWxsYmFja3M6IHtcclxuLy8gICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcclxuLy8gICAgICAgaWYgKHVzZXIpIHtcclxuLy8gICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWQ7XHJcbi8vICAgICAgICAgdG9rZW4ucm9sZSA9IHVzZXIucm9sZTsgLy8gTMawdSB2YWkgdHLDsiB2w6BvIHRva2VuXHJcbi8vICAgICAgICAgdG9rZW4uZW1haWwgPSB1c2VyLmVtYWlsOyAvLyBMxrB1IHZhaSB0csOyIHbDoG8gdG9rZW5cclxuLy8gICAgICAgICB0b2tlbi5wcm9maWxlSW1hZ2UgPSB1c2VyLnByb2ZpbGVJbWFnZTsgLy8gTMawdSB2YWkgdHLDsiB2w6BvIHRva2VuXHJcbi8vICAgICAgICAgdG9rZW4udXNlcm5hbWUgPSB1c2VyLnVzZXJuYW1lOyAvLyBMxrB1IHZhaSB0csOyIHbDoG8gdG9rZW5cclxuLy8gICAgICAgICB0b2tlbi5jaGF0cyA9IHVzZXIuY2hhdHM7IC8vIEzGsHUgdmFpIHRyw7IgdsOgbyB0b2tlblxyXG4vLyAgICAgICAgIHRva2VuLmNvZGUgPSB1c2VyLmNvZGU7IC8vIEzGsHUgdmFpIHRyw7IgdsOgbyB0b2tlblxyXG4vLyAgICAgICAgIHRva2VuLmNvZGVBZGRGcmllbmRzID0gdXNlci5jb2RlQWRkRnJpZW5kczsgLy8gTMawdSB2YWkgdHLDsiB2w6BvIHRva2VuXHJcblxyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICByZXR1cm4gdG9rZW47XHJcbi8vICAgICB9LFxyXG4vLyAgICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuLy8gICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWQ7XHJcbi8vICAgICAgIHNlc3Npb24udXNlci5yb2xlID0gdG9rZW4ucm9sZTsgLy8gVGjDqm0gdmFpIHRyw7IgdsOgbyBzZXNzaW9uXHJcbi8vICAgICAgIHNlc3Npb24udXNlci5uYW1lID0gdG9rZW4udXNlcm5hbWU7IC8vIFRow6ptIHZhaSB0csOyIHbDoG8gc2Vzc2lvblxyXG4vLyAgICAgICBzZXNzaW9uLnVzZXIuaW1hZ2UgPSB0b2tlbi5wcm9maWxlSW1hZ2U7IC8vIFRow6ptIHZhaSB0csOyIHbDoG8gc2Vzc2lvblxyXG4vLyAgICAgICBzZXNzaW9uLnVzZXIuY2hhdHMgPSB0b2tlbi5jaGF0czsgLy8gVGjDqm0gdmFpIHRyw7IgdsOgbyBzZXNzaW9uXHJcbi8vICAgICAgIHNlc3Npb24udXNlci5lbWFpbCA9IHRva2VuLmVtYWlsOyAvLyBUaMOqbSB2YWkgdHLDsiB2w6BvIHNlc3Npb25cclxuLy8gICAgICAgc2Vzc2lvbi51c2VyLmNvZGUgPSB0b2tlbi5jb2RlOyAvLyBUaMOqbSB2YWkgdHLDsiB2w6BvIHNlc3Npb25cclxuLy8gICAgICAgc2Vzc2lvbi51c2VyLmNvZGVBZGRGcmllbmRzID0gdG9rZW4uY29kZUFkZEZyaWVuZHM7IC8vIFRow6ptIHZhaSB0csOyIHbDoG8gc2Vzc2lvblxyXG5cclxuLy8gICAgICAgY29uc29sZS5sb2coc2Vzc2lvbik7XHJcbi8vICAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4vLyAgICAgfSxcclxuLy8gICB9LFxyXG4vLyB9KTtcclxuXHJcbi8vIGV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTtcclxuXHJcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiYmNyeXB0anNcIjtcclxuXHJcbmltcG9ydCB7IGNvbm5lY3RUb0RCIH0gZnJvbSBcIkBtb25nb2RiXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCJAbW9kZWxzL1VzZXJcIjtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aCh7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xyXG4gICAgICAgIGlmICghY3JlZGVudGlhbHMuZW1haWwgfHwgIWNyZWRlbnRpYWxzLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTYWkgZW1haWwgaG/hurdjIG3huq10IGto4bqpdVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IGNvbm5lY3RUb0RCKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwgfSk7XHJcblxyXG4gICAgICAgIGlmICghdXNlciB8fCAhdXNlcj8ucGFzc3dvcmQpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNhaSBlbWFpbCBob+G6t2MgbeG6rXQga2jhuql1XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXNNYXRjaCA9IGF3YWl0IGNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xyXG5cclxuICAgICAgICBpZiAoIWlzTWF0Y2gpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIktow7RuZyDEkcO6bmcgbeG6rXQga2jhuql1XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIC8vIEEgc2VjcmV0IGtleSB1c2UgdG8gZGVwbG95IHRoZSBhcHBsaWNhdGlvblxyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG5cclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWQ7XHJcbiAgICAgICAgdG9rZW4ucm9sZSA9IHVzZXIucm9sZTsgLy8gTMawdSB2YWkgdHLDsiB2w6BvIHRva2VuXHJcbiAgICAgICAgdG9rZW4uZW1haWwgPSB1c2VyLmVtYWlsOyAvLyBMxrB1IHZhaSB0csOyIHbDoG8gdG9rZW5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24gfSkge1xyXG4gICAgICBjb25zdCBtb25nb2RiVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwgfSk7XHJcbiAgICAgIHNlc3Npb24udXNlci5pZCA9IG1vbmdvZGJVc2VyLl9pZC50b1N0cmluZygpO1xyXG4gICAgICBzZXNzaW9uLnVzZXIgPSB7IC4uLnNlc3Npb24udXNlciwgLi4ubW9uZ29kYlVzZXIuX2RvYyB9O1xyXG4gICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XHJcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJjb21wYXJlIiwiY29ubmVjdFRvREIiLCJVc2VyIiwiaGFuZGxlciIsInByb3ZpZGVycyIsIm5hbWUiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsInJlcSIsImVtYWlsIiwicGFzc3dvcmQiLCJFcnJvciIsInVzZXIiLCJmaW5kT25lIiwiaXNNYXRjaCIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsImlkIiwicm9sZSIsImNvbnNvbGUiLCJsb2ciLCJzZXNzaW9uIiwibW9uZ29kYlVzZXIiLCJfaWQiLCJ0b1N0cmluZyIsIl9kb2MiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    profileImage: {\n        type: String,\n        default: \"\"\n    },\n    role: {\n        type: String,\n        default: \"user\"\n    },\n    chats: {\n        type: [\n            {\n                type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n                ref: \"Chat\"\n            }\n        ],\n        default: []\n    },\n    code: {\n        type: String\n    },\n    codeAddFriends: {\n        type: String\n    }\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ3JDRyxVQUFVO1FBQ1JDLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBQyxPQUFPO1FBQ0xILE1BQU1DO1FBQ05DLFVBQVU7UUFDVkUsUUFBUTtJQUNWO0lBQ0FDLFVBQVU7UUFDUkwsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FJLGNBQWM7UUFDWk4sTUFBTUM7UUFDTk0sU0FBUztJQUNYO0lBQ0FDLE1BQU07UUFDSlIsTUFBTUM7UUFDTk0sU0FBUztJQUNYO0lBQ0FFLE9BQU87UUFDTFQsTUFBTTtZQUFDO2dCQUFFQSxNQUFNSix3REFBZSxDQUFDYyxLQUFLLENBQUNDLFFBQVE7Z0JBQUVDLEtBQUs7WUFBTztTQUFFO1FBQzdETCxTQUFTLEVBQUU7SUFDYjtJQUNBTSxNQUFNO1FBQ0piLE1BQU1DO0lBQ1I7SUFDQWEsZ0JBQWdCO1FBQ2RkLE1BQU1DO0lBQ1I7QUFDRjtBQUVBLE1BQU1jLE9BQU9uQix3REFBZSxDQUFDbUIsSUFBSSxJQUFJbkIscURBQWMsQ0FBQyxRQUFRQztBQUU1RCxpRUFBZWtCLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWxvY2hhdC8uL21vZGVscy9Vc2VyLmpzPzczNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIHVzZXJuYW1lOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICB9LFxyXG4gIGVtYWlsOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIHVuaXF1ZTogdHJ1ZSxcclxuICB9LFxyXG4gIHBhc3N3b3JkOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICB9LFxyXG4gIHByb2ZpbGVJbWFnZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgZGVmYXVsdDogXCJcIixcclxuICB9LFxyXG4gIHJvbGU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIGRlZmF1bHQ6IFwidXNlclwiLFxyXG4gIH0sXHJcbiAgY2hhdHM6IHtcclxuICAgIHR5cGU6IFt7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiBcIkNoYXRcIiB9XSxcclxuICAgIGRlZmF1bHQ6IFtdLFxyXG4gIH0sXHJcbiAgY29kZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gIH0sXHJcbiAgY29kZUFkZEZyaWVuZHM6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgVXNlclNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJVc2VyU2NoZW1hIiwiU2NoZW1hIiwidXNlcm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwicHJvZmlsZUltYWdlIiwiZGVmYXVsdCIsInJvbGUiLCJjaGF0cyIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJjb2RlIiwiY29kZUFkZEZyaWVuZHMiLCJVc2VyIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/User.js\n");

/***/ }),

/***/ "(rsc)/./mongodb/index.js":
/*!**************************!*\
  !*** ./mongodb/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDB: () => (/* binding */ connectToDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false;\nconst connectToDB = async ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", true);\n    if (isConnected) {\n        console.log(\"MongoDB is already connected\");\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URL, {\n            dbName: \"HaloChat\",\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        isConnected = true;\n        console.log(\"MongoDB is connected successfully\");\n    } catch (error) {\n        console.log(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb25nb2RiL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxJQUFJQyxjQUFjO0FBRVgsTUFBTUMsY0FBYztJQUN6QkYsbURBQVksQ0FBQyxlQUFlO0lBRTVCLElBQUlDLGFBQWE7UUFDZkcsUUFBUUMsR0FBRyxDQUFDO1FBQ1o7SUFDRjtJQUVBLElBQUk7UUFDRixNQUFNTCx1REFBZ0IsQ0FBQ08sUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7WUFDOUNDLFFBQVE7WUFDUkMsaUJBQWlCO1lBQ2pCQyxvQkFBb0I7UUFDdEI7UUFFQVgsY0FBYztRQUVkRyxRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9RLE9BQU87UUFDZFQsUUFBUUMsR0FBRyxDQUFDUTtJQUNkO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2hhbG9jaGF0Ly4vbW9uZ29kYi9pbmRleC5qcz8zMjAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmxldCBpc0Nvbm5lY3RlZCA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbm5lY3RUb0RCID0gYXN5bmMgKCkgPT4ge1xyXG4gIG1vbmdvb3NlLnNldChcInN0cmljdFF1ZXJ5XCIsIHRydWUpO1xyXG5cclxuICBpZiAoaXNDb25uZWN0ZWQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTW9uZ29EQiBpcyBhbHJlYWR5IGNvbm5lY3RlZFwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMLCB7XHJcbiAgICAgIGRiTmFtZTogXCJIYWxvQ2hhdFwiLFxyXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlzQ29ubmVjdGVkID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIk1vbmdvREIgaXMgY29ubmVjdGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiaXNDb25uZWN0ZWQiLCJjb25uZWN0VG9EQiIsInNldCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJMIiwiZGJOYW1lIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./mongodb/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/bcryptjs","vendor-chunks/preact","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=D%3A%5Ccompany%5Chalo_cha6%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ccompany%5Chalo_cha6&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();