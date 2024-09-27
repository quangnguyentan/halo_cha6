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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mongodb */ \"(rsc)/./mongodb/index.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models/User */ \"(rsc)/./models/User.js\");\n// import NextAuth from \"next-auth\";\n// import CredentialsProvider from \"next-auth/providers/credentials\";\n// import { compare } from \"bcryptjs\";\n// import { connectToDB } from \"@mongodb\";\n// import User from \"@models/User\";\n// const handler = NextAuth({\n//   providers: [\n//     CredentialsProvider({\n//       name: \"Credentials\",\n//       async authorize(credentials, req) {\n//         if (!credentials.email || !credentials.password) {\n//           throw new Error(\"Sai email hoặc mật khẩu\");\n//         }\n//         await connectToDB();\n//         const user = await User.findOne({ email: credentials.email });\n//         if (!user || !user?.password) {\n//           throw new Error(\"Sai email hoặc mật khẩu\");\n//         }\n//         const isMatch = await compare(credentials.password, user.password);\n//         if (!isMatch) {\n//           throw new Error(\"Không đúng mật khẩu\");\n//         }\n//         // Trả về thông tin người dùng bao gồm vai trò\n//         return { ...user._doc, id: user._id.toString() };\n//       },\n//     }),\n//   ],\n//   secret: process.env.NEXTAUTH_SECRET,\n//   callbacks: {\n//     async jwt({ token, user }) {\n//       if (user) {\n//         token.id = user.id;\n//         token.role = user.role; // Lưu vai trò vào token\n//         token.email = user.email; // Lưu vai trò vào token\n//         token.profileImage = user.profileImage; // Lưu vai trò vào token\n//         token.username = user.username; // Lưu vai trò vào token\n//         token.chats = user.chats; // Lưu vai trò vào token\n//         token.code = user.code; // Lưu vai trò vào token\n//         token.codeAddFriends = user.codeAddFriends; // Lưu vai trò vào token\n//         console.log(token);\n//       }\n//       return token;\n//     },\n//     async session({ session, token }) {\n//       session.user.id = token.id;\n//       session.user.role = token.role; // Thêm vai trò vào session\n//       session.user.name = token.username; // Thêm vai trò vào session\n//       session.user.image = token.profileImage; // Thêm vai trò vào session\n//       session.user.chats = token.chats; // Thêm vai trò vào session\n//       session.user.email = token.email; // Thêm vai trò vào session\n//       session.user.code = token.code; // Thêm vai trò vào session\n//       session.user.codeAddFriends = token.codeAddFriends; // Thêm vai trò vào session\n//       console.log(session);\n//       return session;\n//     },\n//   },\n// });\n// export { handler as GET, handler as POST };\n\n\n\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            async authorize (credentials, req) {\n                if (!credentials.username || !credentials.password) {\n                    throw new Error(\"Sai t\\xean đăng nhập hoặc mật khẩu\");\n                }\n                await (0,_mongodb__WEBPACK_IMPORTED_MODULE_3__.connectToDB)();\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                    username: credentials.username\n                });\n                if (!user || !user?.password) {\n                    throw new Error(\"Sai t\\xean đăng nhập hoặc mật khẩu\");\n                }\n                const isMatch = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_2__.compare)(credentials.password, user.password);\n                if (!isMatch) {\n                    throw new Error(\"Kh\\xf4ng đ\\xfang mật khẩu\");\n                }\n                return user;\n            }\n        })\n    ],\n    // A secret key use to deploy the application\n    secret: process.env.NEXTAUTH_SECRET,\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.role = user.role; // Lưu vai trò vào token\n                token.name = user.username;\n            }\n            return token;\n        },\n        async session ({ session }) {\n            const mongodbUser = await _models_User__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                username: session.user.name\n            });\n            session.user.id = mongodbUser._id.toString();\n            session.user = {\n                ...session.user,\n                ...mongodbUser._doc\n            };\n            return session;\n        }\n    }\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBb0M7QUFDcEMscUVBQXFFO0FBQ3JFLHNDQUFzQztBQUN0QywwQ0FBMEM7QUFDMUMsbUNBQW1DO0FBRW5DLDZCQUE2QjtBQUM3QixpQkFBaUI7QUFDakIsNEJBQTRCO0FBQzVCLDZCQUE2QjtBQUM3Qiw0Q0FBNEM7QUFDNUMsNkRBQTZEO0FBQzdELHdEQUF3RDtBQUN4RCxZQUFZO0FBRVosK0JBQStCO0FBQy9CLHlFQUF5RTtBQUV6RSwwQ0FBMEM7QUFDMUMsd0RBQXdEO0FBQ3hELFlBQVk7QUFFWiw4RUFBOEU7QUFFOUUsMEJBQTBCO0FBQzFCLG9EQUFvRDtBQUNwRCxZQUFZO0FBQ1oseURBQXlEO0FBQ3pELDREQUE0RDtBQUM1RCxXQUFXO0FBQ1gsVUFBVTtBQUNWLE9BQU87QUFDUCx5Q0FBeUM7QUFFekMsaUJBQWlCO0FBQ2pCLG1DQUFtQztBQUNuQyxvQkFBb0I7QUFDcEIsOEJBQThCO0FBQzlCLDJEQUEyRDtBQUMzRCw2REFBNkQ7QUFDN0QsMkVBQTJFO0FBQzNFLG1FQUFtRTtBQUNuRSw2REFBNkQ7QUFDN0QsMkRBQTJEO0FBQzNELCtFQUErRTtBQUUvRSw4QkFBOEI7QUFDOUIsVUFBVTtBQUNWLHNCQUFzQjtBQUN0QixTQUFTO0FBQ1QsMENBQTBDO0FBQzFDLG9DQUFvQztBQUNwQyxvRUFBb0U7QUFDcEUsd0VBQXdFO0FBQ3hFLDZFQUE2RTtBQUM3RSxzRUFBc0U7QUFDdEUsc0VBQXNFO0FBQ3RFLG9FQUFvRTtBQUNwRSx3RkFBd0Y7QUFFeEYsOEJBQThCO0FBQzlCLHdCQUF3QjtBQUN4QixTQUFTO0FBQ1QsT0FBTztBQUNQLE1BQU07QUFFTiw4Q0FBOEM7QUFFYjtBQUNpQztBQUMvQjtBQUVJO0FBQ1A7QUFFaEMsTUFBTUssVUFBVUwsZ0RBQVFBLENBQUM7SUFDdkJNLFdBQVc7UUFDVEwsMkVBQW1CQSxDQUFDO1lBQ2xCTSxNQUFNO1lBQ04sTUFBTUMsV0FBVUMsV0FBVyxFQUFFQyxHQUFHO2dCQUM5QixJQUFJLENBQUNELFlBQVlFLFFBQVEsSUFBSSxDQUFDRixZQUFZRyxRQUFRLEVBQUU7b0JBQ2xELE1BQU0sSUFBSUMsTUFBTTtnQkFDbEI7Z0JBRUEsTUFBTVYscURBQVdBO2dCQUVqQixNQUFNVyxPQUFPLE1BQU1WLG9EQUFJQSxDQUFDVyxPQUFPLENBQUM7b0JBQUVKLFVBQVVGLFlBQVlFLFFBQVE7Z0JBQUM7Z0JBRWpFLElBQUksQ0FBQ0csUUFBUSxDQUFDQSxNQUFNRixVQUFVO29CQUM1QixNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUVBLE1BQU1HLFVBQVUsTUFBTWQsaURBQU9BLENBQUNPLFlBQVlHLFFBQVEsRUFBRUUsS0FBS0YsUUFBUTtnQkFFakUsSUFBSSxDQUFDSSxTQUFTO29CQUNaLE1BQU0sSUFBSUgsTUFBTTtnQkFDbEI7Z0JBRUEsT0FBT0M7WUFDVDtRQUNGO0tBQ0Q7SUFDRCw2Q0FBNkM7SUFDN0NHLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtJQUVuQ0MsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFVCxJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTTtnQkFDUlMsTUFBTUMsRUFBRSxHQUFHVixLQUFLVSxFQUFFO2dCQUNsQkQsTUFBTUUsSUFBSSxHQUFHWCxLQUFLVyxJQUFJLEVBQUUsd0JBQXdCO2dCQUNoREYsTUFBTWhCLElBQUksR0FBR08sS0FBS0gsUUFBUTtZQUM1QjtZQUNBLE9BQU9ZO1FBQ1Q7UUFFQSxNQUFNRyxTQUFRLEVBQUVBLE9BQU8sRUFBRTtZQUN2QixNQUFNQyxjQUFjLE1BQU12QixvREFBSUEsQ0FBQ1csT0FBTyxDQUFDO2dCQUNyQ0osVUFBVWUsUUFBUVosSUFBSSxDQUFDUCxJQUFJO1lBQzdCO1lBQ0FtQixRQUFRWixJQUFJLENBQUNVLEVBQUUsR0FBR0csWUFBWUMsR0FBRyxDQUFDQyxRQUFRO1lBQzFDSCxRQUFRWixJQUFJLEdBQUc7Z0JBQUUsR0FBR1ksUUFBUVosSUFBSTtnQkFBRSxHQUFHYSxZQUFZRyxJQUFJO1lBQUM7WUFDdEQsT0FBT0o7UUFDVDtJQUNGO0FBQ0Y7QUFFMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWxvY2hhdC8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzP2RhMWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuLy8gaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuLy8gaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCJiY3J5cHRqc1wiO1xyXG4vLyBpbXBvcnQgeyBjb25uZWN0VG9EQiB9IGZyb20gXCJAbW9uZ29kYlwiO1xyXG4vLyBpbXBvcnQgVXNlciBmcm9tIFwiQG1vZGVscy9Vc2VyXCI7XHJcblxyXG4vLyBjb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoe1xyXG4vLyAgIHByb3ZpZGVyczogW1xyXG4vLyAgICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbi8vICAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcclxuLy8gICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcclxuLy8gICAgICAgICBpZiAoIWNyZWRlbnRpYWxzLmVtYWlsIHx8ICFjcmVkZW50aWFscy5wYXNzd29yZCkge1xyXG4vLyAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2FpIGVtYWlsIGhv4bq3YyBt4bqtdCBraOG6qXVcIik7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBhd2FpdCBjb25uZWN0VG9EQigpO1xyXG4vLyAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwgfSk7XHJcblxyXG4vLyAgICAgICAgIGlmICghdXNlciB8fCAhdXNlcj8ucGFzc3dvcmQpIHtcclxuLy8gICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNhaSBlbWFpbCBob+G6t2MgbeG6rXQga2jhuql1XCIpO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgY29uc3QgaXNNYXRjaCA9IGF3YWl0IGNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xyXG5cclxuLy8gICAgICAgICBpZiAoIWlzTWF0Y2gpIHtcclxuLy8gICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIktow7RuZyDEkcO6bmcgbeG6rXQga2jhuql1XCIpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICAvLyBUcuG6oyB24buBIHRow7RuZyB0aW4gbmfGsOG7nWkgZMO5bmcgYmFvIGfhu5NtIHZhaSB0csOyXHJcbi8vICAgICAgICAgcmV0dXJuIHsgLi4udXNlci5fZG9jLCBpZDogdXNlci5faWQudG9TdHJpbmcoKSB9O1xyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgfSksXHJcbi8vICAgXSxcclxuLy8gICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcclxuXHJcbi8vICAgY2FsbGJhY2tzOiB7XHJcbi8vICAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XHJcbi8vICAgICAgIGlmICh1c2VyKSB7XHJcbi8vICAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkO1xyXG4vLyAgICAgICAgIHRva2VuLnJvbGUgPSB1c2VyLnJvbGU7IC8vIEzGsHUgdmFpIHRyw7IgdsOgbyB0b2tlblxyXG4vLyAgICAgICAgIHRva2VuLmVtYWlsID0gdXNlci5lbWFpbDsgLy8gTMawdSB2YWkgdHLDsiB2w6BvIHRva2VuXHJcbi8vICAgICAgICAgdG9rZW4ucHJvZmlsZUltYWdlID0gdXNlci5wcm9maWxlSW1hZ2U7IC8vIEzGsHUgdmFpIHRyw7IgdsOgbyB0b2tlblxyXG4vLyAgICAgICAgIHRva2VuLnVzZXJuYW1lID0gdXNlci51c2VybmFtZTsgLy8gTMawdSB2YWkgdHLDsiB2w6BvIHRva2VuXHJcbi8vICAgICAgICAgdG9rZW4uY2hhdHMgPSB1c2VyLmNoYXRzOyAvLyBMxrB1IHZhaSB0csOyIHbDoG8gdG9rZW5cclxuLy8gICAgICAgICB0b2tlbi5jb2RlID0gdXNlci5jb2RlOyAvLyBMxrB1IHZhaSB0csOyIHbDoG8gdG9rZW5cclxuLy8gICAgICAgICB0b2tlbi5jb2RlQWRkRnJpZW5kcyA9IHVzZXIuY29kZUFkZEZyaWVuZHM7IC8vIEzGsHUgdmFpIHRyw7IgdsOgbyB0b2tlblxyXG5cclxuLy8gICAgICAgICBjb25zb2xlLmxvZyh0b2tlbik7XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgcmV0dXJuIHRva2VuO1xyXG4vLyAgICAgfSxcclxuLy8gICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XHJcbi8vICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLmlkO1xyXG4vLyAgICAgICBzZXNzaW9uLnVzZXIucm9sZSA9IHRva2VuLnJvbGU7IC8vIFRow6ptIHZhaSB0csOyIHbDoG8gc2Vzc2lvblxyXG4vLyAgICAgICBzZXNzaW9uLnVzZXIubmFtZSA9IHRva2VuLnVzZXJuYW1lOyAvLyBUaMOqbSB2YWkgdHLDsiB2w6BvIHNlc3Npb25cclxuLy8gICAgICAgc2Vzc2lvbi51c2VyLmltYWdlID0gdG9rZW4ucHJvZmlsZUltYWdlOyAvLyBUaMOqbSB2YWkgdHLDsiB2w6BvIHNlc3Npb25cclxuLy8gICAgICAgc2Vzc2lvbi51c2VyLmNoYXRzID0gdG9rZW4uY2hhdHM7IC8vIFRow6ptIHZhaSB0csOyIHbDoG8gc2Vzc2lvblxyXG4vLyAgICAgICBzZXNzaW9uLnVzZXIuZW1haWwgPSB0b2tlbi5lbWFpbDsgLy8gVGjDqm0gdmFpIHRyw7IgdsOgbyBzZXNzaW9uXHJcbi8vICAgICAgIHNlc3Npb24udXNlci5jb2RlID0gdG9rZW4uY29kZTsgLy8gVGjDqm0gdmFpIHRyw7IgdsOgbyBzZXNzaW9uXHJcbi8vICAgICAgIHNlc3Npb24udXNlci5jb2RlQWRkRnJpZW5kcyA9IHRva2VuLmNvZGVBZGRGcmllbmRzOyAvLyBUaMOqbSB2YWkgdHLDsiB2w6BvIHNlc3Npb25cclxuXHJcbi8vICAgICAgIGNvbnNvbGUubG9nKHNlc3Npb24pO1xyXG4vLyAgICAgICByZXR1cm4gc2Vzc2lvbjtcclxuLy8gICAgIH0sXHJcbi8vICAgfSxcclxuLy8gfSk7XHJcblxyXG4vLyBleHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XHJcblxyXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcImJjcnlwdGpzXCI7XHJcblxyXG5pbXBvcnQgeyBjb25uZWN0VG9EQiB9IGZyb20gXCJAbW9uZ29kYlwiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiQG1vZGVscy9Vc2VyXCI7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoe1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcclxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcclxuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzLnVzZXJuYW1lIHx8ICFjcmVkZW50aWFscy5wYXNzd29yZCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2FpIHTDqm4gxJHEg25nIG5o4bqtcCBob+G6t2MgbeG6rXQga2jhuql1XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgY29ubmVjdFRvREIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IHVzZXJuYW1lOiBjcmVkZW50aWFscy51c2VybmFtZSB9KTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyPy5wYXNzd29yZCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2FpIHTDqm4gxJHEg25nIG5o4bqtcCBob+G6t2MgbeG6rXQga2jhuql1XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXNNYXRjaCA9IGF3YWl0IGNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xyXG5cclxuICAgICAgICBpZiAoIWlzTWF0Y2gpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIktow7RuZyDEkcO6bmcgbeG6rXQga2jhuql1XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIC8vIEEgc2VjcmV0IGtleSB1c2UgdG8gZGVwbG95IHRoZSBhcHBsaWNhdGlvblxyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG5cclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWQ7XHJcbiAgICAgICAgdG9rZW4ucm9sZSA9IHVzZXIucm9sZTsgLy8gTMawdSB2YWkgdHLDsiB2w6BvIHRva2VuXHJcbiAgICAgICAgdG9rZW4ubmFtZSA9IHVzZXIudXNlcm5hbWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiB9KSB7XHJcbiAgICAgIGNvbnN0IG1vbmdvZGJVc2VyID0gYXdhaXQgVXNlci5maW5kT25lKHtcclxuICAgICAgICB1c2VybmFtZTogc2Vzc2lvbi51c2VyLm5hbWUsXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXNzaW9uLnVzZXIuaWQgPSBtb25nb2RiVXNlci5faWQudG9TdHJpbmcoKTtcclxuICAgICAgc2Vzc2lvbi51c2VyID0geyAuLi5zZXNzaW9uLnVzZXIsIC4uLm1vbmdvZGJVc2VyLl9kb2MgfTtcclxuICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xyXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiY29tcGFyZSIsImNvbm5lY3RUb0RCIiwiVXNlciIsImhhbmRsZXIiLCJwcm92aWRlcnMiLCJuYW1lIiwiYXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJyZXEiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiRXJyb3IiLCJ1c2VyIiwiZmluZE9uZSIsImlzTWF0Y2giLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJpZCIsInJvbGUiLCJzZXNzaW9uIiwibW9uZ29kYlVzZXIiLCJfaWQiLCJ0b1N0cmluZyIsIl9kb2MiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: true\n    },\n    fullName: {\n        type: String,\n        required: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    profileImage: {\n        type: String,\n        default: \"\"\n    },\n    role: {\n        type: String,\n        default: \"user\"\n    },\n    chats: {\n        type: [\n            {\n                type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n                ref: \"Chat\"\n            }\n        ],\n        default: []\n    },\n    code: {\n        type: String\n    },\n    codeAddFriends: {\n        type: String\n    }\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ3JDRyxVQUFVO1FBQ1JDLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBQyxVQUFVO1FBQ1JILE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBRSxVQUFVO1FBQ1JKLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBRyxjQUFjO1FBQ1pMLE1BQU1DO1FBQ05LLFNBQVM7SUFDWDtJQUNBQyxNQUFNO1FBQ0pQLE1BQU1DO1FBQ05LLFNBQVM7SUFDWDtJQUNBRSxPQUFPO1FBQ0xSLE1BQU07WUFBQztnQkFBRUEsTUFBTUosd0RBQWUsQ0FBQ2EsS0FBSyxDQUFDQyxRQUFRO2dCQUFFQyxLQUFLO1lBQU87U0FBRTtRQUM3REwsU0FBUyxFQUFFO0lBQ2I7SUFDQU0sTUFBTTtRQUNKWixNQUFNQztJQUNSO0lBQ0FZLGdCQUFnQjtRQUNkYixNQUFNQztJQUNSO0FBQ0Y7QUFFQSxNQUFNYSxPQUFPbEIsd0RBQWUsQ0FBQ2tCLElBQUksSUFBSWxCLHFEQUFjLENBQUMsUUFBUUM7QUFFNUQsaUVBQWVpQixJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFsb2NoYXQvLi9tb2RlbHMvVXNlci5qcz83MzY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICB1c2VybmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBmdWxsTmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBwYXNzd29yZDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBwcm9maWxlSW1hZ2U6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIGRlZmF1bHQ6IFwiXCIsXHJcbiAgfSxcclxuICByb2xlOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBkZWZhdWx0OiBcInVzZXJcIixcclxuICB9LFxyXG4gIGNoYXRzOiB7XHJcbiAgICB0eXBlOiBbeyB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjogXCJDaGF0XCIgfV0sXHJcbiAgICBkZWZhdWx0OiBbXSxcclxuICB9LFxyXG4gIGNvZGU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICB9LFxyXG4gIGNvZGVBZGRGcmllbmRzOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsIFVzZXJTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiVXNlclNjaGVtYSIsIlNjaGVtYSIsInVzZXJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZnVsbE5hbWUiLCJwYXNzd29yZCIsInByb2ZpbGVJbWFnZSIsImRlZmF1bHQiLCJyb2xlIiwiY2hhdHMiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwiY29kZSIsImNvZGVBZGRGcmllbmRzIiwiVXNlciIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/User.js\n");

/***/ }),

/***/ "(rsc)/./mongodb/index.js":
/*!**************************!*\
  !*** ./mongodb/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDB: () => (/* binding */ connectToDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false;\nconst connectToDB = async ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", true);\n    if (isConnected) {\n        console.log(\"MongoDB is already connected\");\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://tanquanga6k10:CpdAVLjkbtX5chAq@shopdientu.l5fgtvm.mongodb.net/shopdientu?retryWrites=true&w=majority\", {\n            dbName: \"HaloChat\",\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        isConnected = true;\n        console.log(\"MongoDB is connected successfully\");\n    } catch (error) {\n        console.log(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb25nb2RiL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxJQUFJQyxjQUFjO0FBRVgsTUFBTUMsY0FBYztJQUN6QkYsbURBQVksQ0FBQyxlQUFlO0lBRTVCLElBQUlDLGFBQWE7UUFDZkcsUUFBUUMsR0FBRyxDQUFDO1FBQ1o7SUFDRjtJQUVBLElBQUk7UUFDRixNQUFNTCx1REFBZ0IsQ0FDcEIsc0hBQ0E7WUFDRU8sUUFBUTtZQUNSQyxpQkFBaUI7WUFDakJDLG9CQUFvQjtRQUN0QjtRQUdGUixjQUFjO1FBRWRHLFFBQVFDLEdBQUcsQ0FBQztJQUNkLEVBQUUsT0FBT0ssT0FBTztRQUNkTixRQUFRQyxHQUFHLENBQUNLO0lBQ2Q7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFsb2NoYXQvLi9tb25nb2RiL2luZGV4LmpzPzMyMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxubGV0IGlzQ29ubmVjdGVkID0gZmFsc2U7XHJcblxyXG5leHBvcnQgY29uc3QgY29ubmVjdFRvREIgPSBhc3luYyAoKSA9PiB7XHJcbiAgbW9uZ29vc2Uuc2V0KFwic3RyaWN0UXVlcnlcIiwgdHJ1ZSk7XHJcblxyXG4gIGlmIChpc0Nvbm5lY3RlZCkge1xyXG4gICAgY29uc29sZS5sb2coXCJNb25nb0RCIGlzIGFscmVhZHkgY29ubmVjdGVkXCIpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoXHJcbiAgICAgIFwibW9uZ29kYitzcnY6Ly90YW5xdWFuZ2E2azEwOkNwZEFWTGprYnRYNWNoQXFAc2hvcGRpZW50dS5sNWZndHZtLm1vbmdvZGIubmV0L3Nob3BkaWVudHU/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIsXHJcbiAgICAgIHtcclxuICAgICAgICBkYk5hbWU6IFwiSGFsb0NoYXRcIixcclxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGlzQ29ubmVjdGVkID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIk1vbmdvREIgaXMgY29ubmVjdGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiaXNDb25uZWN0ZWQiLCJjb25uZWN0VG9EQiIsInNldCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwiZGJOYW1lIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./mongodb/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/bcryptjs","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/preact","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=D%3A%5Ccompany%5Chalo_cha6%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Ccompany%5Chalo_cha6&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();