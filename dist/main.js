/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("async function getCurrentWeather(userLocation) {\n  //api url changes its location based on userLocations value\n  const currentWeatherUrl = `http://api.weatherapi.com/v1/current.json?key=318ddc196cd94dffaab10400243105&q=${userLocation}`;\n\n  //wait for api call to return a response\n  const currentWeather = await fetch(currentWeatherUrl, {\n    mode: \"cors\",\n  });\n\n  try {\n    //wait for response to be converted to json\n    const response = await currentWeather.json();\n\n    console.log(response);\n  } catch (err) {\n    console.error(err);\n  }\n}\ngetCurrentWeather(\"\");\n\n\n//# sourceURL=webpack://webpack-template/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;