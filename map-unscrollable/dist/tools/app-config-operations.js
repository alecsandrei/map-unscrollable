System.register([], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {


	return {

		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************************************************************************!*\
  !*** ./your-extensions/widgets/map-unscrollable/src/tools/app-config-operations.ts ***!
  \*************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppConfigOperation)
/* harmony export */ });
class AppConfigOperation {
    constructor() {
        this.id = 'map-app-config-operation';
    }
    afterWidgetCopied(sourceWidgetId, sourceAppConfig, destWidgetId, destAppConfig, widgetMap) {
        var _a;
        if (!widgetMap) { // no need to change widget linkage if it is not performed during a page copying
            return destAppConfig;
        }
        let newAppConfig = destAppConfig;
        const sourceWidgetJson = sourceAppConfig.widgets[sourceWidgetId];
        const sourceWidgetConfig = sourceWidgetJson === null || sourceWidgetJson === void 0 ? void 0 : sourceWidgetJson.config;
        const destWidgetJson = newAppConfig.widgets[destWidgetId];
        const destWidgetConfig = destWidgetJson === null || destWidgetJson === void 0 ? void 0 : destWidgetJson.config;
        if (sourceWidgetConfig && destWidgetConfig && ((_a = sourceWidgetConfig.clientQueryDataSourceIds) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            // client query should be enabled by only one map widget for one webmap data source
            newAppConfig = newAppConfig.setIn(['widgets', destWidgetId, 'config', 'clientQueryDataSourceIds'], []);
        }
        return newAppConfig;
    }
    /**
     * Do some cleanup operations before current widget is removed.
     * @returns The updated appConfig
     */
    widgetWillRemove(appConfig) {
        return appConfig;
    }
}

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXAtdW5zY3JvbGxhYmxlL2Rpc3QvdG9vbHMvYXBwLWNvbmZpZy1vcGVyYXRpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ0hlLE1BQU0sa0JBQWtCO0lBQXZDO1FBQ0UsT0FBRSxHQUFHLDBCQUEwQjtJQW1DakMsQ0FBQztJQWpDQyxpQkFBaUIsQ0FDZixjQUFzQixFQUN0QixlQUE0QixFQUM1QixZQUFvQixFQUNwQixhQUEwQixFQUMxQixTQUFxQzs7UUFFckMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsZ0ZBQWdGO1lBQ2hHLE9BQU8sYUFBYTtRQUN0QixDQUFDO1FBRUQsSUFBSSxZQUFZLEdBQUcsYUFBYTtRQUNoQyxNQUFNLGdCQUFnQixHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2hFLE1BQU0sa0JBQWtCLEdBQWEsZ0JBQWdCLGFBQWhCLGdCQUFnQix1QkFBaEIsZ0JBQWdCLENBQUUsTUFBTTtRQUU3RCxNQUFNLGNBQWMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUN6RCxNQUFNLGdCQUFnQixHQUFhLGNBQWMsYUFBZCxjQUFjLHVCQUFkLGNBQWMsQ0FBRSxNQUFNO1FBRXpELElBQUksa0JBQWtCLElBQUksZ0JBQWdCLElBQUkseUJBQWtCLENBQUMsd0JBQXdCLDBDQUFFLE1BQU0sSUFBRyxDQUFDLEVBQUUsQ0FBQztZQUN0RyxtRkFBbUY7WUFDbkYsWUFBWSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSwwQkFBMEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUN4RyxDQUFDO1FBRUQsT0FBTyxZQUFZO0lBQ3JCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxnQkFBZ0IsQ0FBRSxTQUFzQjtRQUN0QyxPQUFPLFNBQVM7SUFDbEIsQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXAtdW5zY3JvbGxhYmxlL3NyYy90b29scy9hcHAtY29uZmlnLW9wZXJhdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0eXBlIGV4dGVuc2lvblNwZWMsIHR5cGUgSU1BcHBDb25maWcgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBDb25maWdPcGVyYXRpb24gaW1wbGVtZW50cyBleHRlbnNpb25TcGVjLkFwcENvbmZpZ09wZXJhdGlvbnNFeHRlbnNpb24ge1xyXG4gIGlkID0gJ21hcC1hcHAtY29uZmlnLW9wZXJhdGlvbidcclxuXHJcbiAgYWZ0ZXJXaWRnZXRDb3BpZWQgKFxyXG4gICAgc291cmNlV2lkZ2V0SWQ6IHN0cmluZyxcclxuICAgIHNvdXJjZUFwcENvbmZpZzogSU1BcHBDb25maWcsXHJcbiAgICBkZXN0V2lkZ2V0SWQ6IHN0cmluZyxcclxuICAgIGRlc3RBcHBDb25maWc6IElNQXBwQ29uZmlnLFxyXG4gICAgd2lkZ2V0TWFwPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxyXG4gICk6IElNQXBwQ29uZmlnIHtcclxuICAgIGlmICghd2lkZ2V0TWFwKSB7IC8vIG5vIG5lZWQgdG8gY2hhbmdlIHdpZGdldCBsaW5rYWdlIGlmIGl0IGlzIG5vdCBwZXJmb3JtZWQgZHVyaW5nIGEgcGFnZSBjb3B5aW5nXHJcbiAgICAgIHJldHVybiBkZXN0QXBwQ29uZmlnXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5ld0FwcENvbmZpZyA9IGRlc3RBcHBDb25maWdcclxuICAgIGNvbnN0IHNvdXJjZVdpZGdldEpzb24gPSBzb3VyY2VBcHBDb25maWcud2lkZ2V0c1tzb3VyY2VXaWRnZXRJZF1cclxuICAgIGNvbnN0IHNvdXJjZVdpZGdldENvbmZpZzogSU1Db25maWcgPSBzb3VyY2VXaWRnZXRKc29uPy5jb25maWdcclxuXHJcbiAgICBjb25zdCBkZXN0V2lkZ2V0SnNvbiA9IG5ld0FwcENvbmZpZy53aWRnZXRzW2Rlc3RXaWRnZXRJZF1cclxuICAgIGNvbnN0IGRlc3RXaWRnZXRDb25maWc6IElNQ29uZmlnID0gZGVzdFdpZGdldEpzb24/LmNvbmZpZ1xyXG5cclxuICAgIGlmIChzb3VyY2VXaWRnZXRDb25maWcgJiYgZGVzdFdpZGdldENvbmZpZyAmJiBzb3VyY2VXaWRnZXRDb25maWcuY2xpZW50UXVlcnlEYXRhU291cmNlSWRzPy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIC8vIGNsaWVudCBxdWVyeSBzaG91bGQgYmUgZW5hYmxlZCBieSBvbmx5IG9uZSBtYXAgd2lkZ2V0IGZvciBvbmUgd2VibWFwIGRhdGEgc291cmNlXHJcbiAgICAgIG5ld0FwcENvbmZpZyA9IG5ld0FwcENvbmZpZy5zZXRJbihbJ3dpZGdldHMnLCBkZXN0V2lkZ2V0SWQsICdjb25maWcnLCAnY2xpZW50UXVlcnlEYXRhU291cmNlSWRzJ10sIFtdKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXdBcHBDb25maWdcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERvIHNvbWUgY2xlYW51cCBvcGVyYXRpb25zIGJlZm9yZSBjdXJyZW50IHdpZGdldCBpcyByZW1vdmVkLlxyXG4gICAqIEByZXR1cm5zIFRoZSB1cGRhdGVkIGFwcENvbmZpZ1xyXG4gICAqL1xyXG4gIHdpZGdldFdpbGxSZW1vdmUgKGFwcENvbmZpZzogSU1BcHBDb25maWcpOiBJTUFwcENvbmZpZyB7XHJcbiAgICByZXR1cm4gYXBwQ29uZmlnXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==