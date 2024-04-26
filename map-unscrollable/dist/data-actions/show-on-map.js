System.register(["jimu-core","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/map-unscrollable/src/runtime/translations/default.ts":
/*!**************************************************************************************!*\
  !*** ./your-extensions/widgets/map-unscrollable/src/runtime/translations/default.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Unscrollable map',
    _action_displayFeatureSet_label: 'Display feature set',
    _action_panTo_label: 'Pan to',
    _action_zoomToFeature_label: 'Zoom to',
    _action_selectFeature_label: 'Select feature',
    _action_flash_label: 'Flash',
    _action_filter_label: 'Filter',
    _action_showOnMap_label: 'Show on map',
    _action_addToMap_label: 'Add to map',
    showOnMapData: 'Show on map data',
    addedData: 'added data',
    failToAddTheDataOnMap: 'Fail to add the data.',
    addToMapData: 'Add to map data',
    mapCurrentRecord: '{layerName} map current record',
    _url_params_viewpoint_label: 'Viewpoint',
    _url_params_viewpoint_tooltip: "Viewpoint describes the point of view for a web map or web scene.",
    _url_params_center_label: 'Center',
    _url_params_scale_label: 'Scale',
    _url_params_rotation_label: 'Rotation',
    _url_params_layer_visibility_label: 'Layer visibility'
});


/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

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
/******/ 			// no module.id needed
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************************************************************!*\
  !*** ./your-extensions/widgets/map-unscrollable/src/data-actions/show-on-map.ts ***!
  \**********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShowOnMap)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _runtime_translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../runtime/translations/default */ "./your-extensions/widgets/map-unscrollable/src/runtime/translations/default.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class ShowOnMap extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractDataAction {
    constructor() {
        super(...arguments);
        this._viewManager = jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.MapViewManager.getInstance();
    }
    /**
     * ShowOnMap data action only supports DataLevel.RECORDS data, doesn't support DataLevel.DATA_SOURCE data.
     */
    isSupported(dataSets, dataLevel) {
        return __awaiter(this, void 0, void 0, function* () {
            if (dataSets.length > 1) {
                return false;
            }
            const dataSet = dataSets[0];
            const { records, dataSource } = dataSet;
            if (!dataSource || dataSource.getStatus() === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotReady) {
                return false;
            }
            // @ts-expect-error
            return dataLevel === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataLevel.Records && (records === null || records === void 0 ? void 0 : records.length) > 0 && records.some(record => { var _a; return (_a = record.feature) === null || _a === void 0 ? void 0 : _a.geometry; });
        });
    }
    onExecute(dataSets, dataLevel, widgetId, actionConfig) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const activeViewId = this._getActiveViewId(this.widgetId, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().jimuMapViewsInfo);
            const showOnMapDatas = ((_a = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.widgetId])) === null || _a === void 0 ? void 0 : _a.showOnMapDatas) || {};
            const dataSet = dataSets[0];
            const titleCountInfo = this.getUniqueTitleCountInfo(dataSet, activeViewId, showOnMapDatas);
            // save action data
            const id = `${jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.SHOW_ON_MAP_DATA_ID_PREFIX}dataAction_${jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.getUUID()}`;
            // use code to maintain 'symbolOption' compatibility here
            // For app was created before online10.1 (inlcude 10.1), actionConfig is undefined, the final 'symbolOption' is undefined.
            // For app was created or saved after online10.1, actionConfig is a object,
            //  if actionConfig.isUseCustomSymbol is true, means check 'Use custom symbols' option, the final 'symbolOption' is actionConfig.symbolOption
            //  if actionConfig.isUseCustomSymbol is false, means uncheck 'Use layer-defined symbols' option, the final 'symbolOption' is null
            // Summary:
            // for 'symbolOption', the difference between the values 'undefined' and 'null':
            //   undefined: app was created before online10.1 (inlcude 10.1), use default symbol;
            //   null: app was created or saved after online10.1, use default renderer of layer.
            // symbolOption: actionConfig?.isUseCustomSymbol ? actionConfig.symbolOption : (actionConfig?.isUseCustomSymbol === false ? null : undefined),
            let symbolOption;
            if (actionConfig) {
                // > online 10.1
                if (actionConfig.isUseCustomSymbol) {
                    // 'Use custom symbols' option
                    symbolOption = actionConfig.symbolOption;
                }
                else if (actionConfig.isUseCustomSymbol === false) {
                    // 'Use layer-defined symbols' option
                    symbolOption = null;
                }
                else {
                    // should not goes here
                    symbolOption = undefined;
                }
            }
            else {
                // <= online 10.1
                // use featureUtils.getDefaultSymbol() to create default 2D symbol
                symbolOption = undefined;
            }
            const newShowOnMapData = {
                mapWidgetId: this.widgetId,
                // messageWidgetId is only available for message action, so keep it empty for data action
                messageWidgetId: undefined,
                jimuMapViewId: activeViewId,
                dataSet,
                type: jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ActionType.DataAction,
                symbolOption,
                title: titleCountInfo.finalTitle,
                titleCountInfo
            };
            showOnMapDatas[id] = newShowOnMapData;
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'showOnMapDatas', showOnMapDatas);
            return yield Promise.resolve(true);
        });
    }
    getUniqueTitleCountInfo(dataSet, activeViewId, showOnMapDatas) {
        const intl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.getIntl();
        const rawTitle = dataSet.name || intl.formatMessage({ id: 'showOnMapData', defaultMessage: _runtime_translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].showOnMapData });
        // #16798, If Query widget sends data action with same data source and data records multiple times, we will create multiple layers with same title.
        // To avoid this case, we need to make name unique.
        const existingTitleCounts = [];
        Object.values(showOnMapDatas).forEach((showOnMap) => {
            const titleCountInfo = showOnMap.titleCountInfo;
            if (showOnMap.jimuMapViewId === activeViewId && showOnMap.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ActionType.DataAction && titleCountInfo && titleCountInfo.rawTitle === rawTitle && titleCountInfo.count >= 0) {
                existingTitleCounts.push(titleCountInfo.count);
            }
        });
        let titleCountInfo = null;
        if (existingTitleCounts.length > 0) {
            const maxCount = Math.max(...existingTitleCounts);
            const count = maxCount + 1;
            const finalTitle = `${rawTitle} ${maxCount + 1}`;
            titleCountInfo = {
                rawTitle,
                finalTitle,
                count
            };
        }
        else {
            const count = 1;
            const finalTitle = rawTitle;
            titleCountInfo = {
                rawTitle,
                finalTitle,
                count
            };
        }
        return titleCountInfo;
    }
    _getActiveViewId(mapWidgetId, infos) {
        let activeViewId = Object.keys(infos || {}).find(viewId => infos[viewId].mapWidgetId === mapWidgetId && infos[viewId].isActive);
        // using a default map view as active map view if the widget hasn't been loaded.
        if (!activeViewId) {
            activeViewId = Object.keys(infos || {}).find(viewId => infos[viewId].mapWidgetId === mapWidgetId);
        }
        return activeViewId;
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXAtdW5zY3JvbGxhYmxlL2Rpc3QvZGF0YS1hY3Rpb25zL3Nob3ctb24tbWFwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtJQUNiLFlBQVksRUFBRSxrQkFBa0I7SUFDaEMsK0JBQStCLEVBQUUscUJBQXFCO0lBQ3RELG1CQUFtQixFQUFFLFFBQVE7SUFDN0IsMkJBQTJCLEVBQUUsU0FBUztJQUN0QywyQkFBMkIsRUFBRSxnQkFBZ0I7SUFDN0MsbUJBQW1CLEVBQUUsT0FBTztJQUM1QixvQkFBb0IsRUFBRSxRQUFRO0lBQzlCLHVCQUF1QixFQUFFLGFBQWE7SUFDdEMsc0JBQXNCLEVBQUUsWUFBWTtJQUNwQyxhQUFhLEVBQUUsa0JBQWtCO0lBQ2pDLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLHFCQUFxQixFQUFFLHVCQUF1QjtJQUM5QyxZQUFZLEVBQUUsaUJBQWlCO0lBQy9CLGdCQUFnQixFQUFFLGdDQUFnQztJQUNsRCwyQkFBMkIsRUFBRSxXQUFXO0lBQ3hDLDZCQUE2QixFQUFFLG1FQUFtRTtJQUNsRyx3QkFBd0IsRUFBRSxRQUFRO0lBQ2xDLHVCQUF1QixFQUFFLE9BQU87SUFDaEMsMEJBQTBCLEVBQUUsVUFBVTtJQUN0QyxrQ0FBa0MsRUFBRSxrQkFBa0I7Q0FDdkQ7Ozs7Ozs7Ozs7O0FDckJEOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7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LENBQUMsR0FBRyxtQkFBbUIsQ0FBQztZQUNqRCxNQUFNLEtBQUssR0FBRyxRQUFRLEdBQUcsQ0FBQztZQUMxQixNQUFNLFVBQVUsR0FBRyxHQUFHLFFBQVEsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lBRWhELGNBQWMsR0FBRztnQkFDZixRQUFRO2dCQUNSLFVBQVU7Z0JBQ1YsS0FBSzthQUNOO1FBQ0gsQ0FBQzthQUFNLENBQUM7WUFDTixNQUFNLEtBQUssR0FBRyxDQUFDO1lBQ2YsTUFBTSxVQUFVLEdBQUcsUUFBUTtZQUUzQixjQUFjLEdBQUc7Z0JBQ2YsUUFBUTtnQkFDUixVQUFVO2dCQUNWLEtBQUs7YUFDTjtRQUNILENBQUM7UUFFRCxPQUFPLGNBQWM7SUFDdkIsQ0FBQztJQUVPLGdCQUFnQixDQUFFLFdBQW1CLEVBQUUsS0FBb0U7UUFDakgsSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsS0FBSyxXQUFXLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUMvSCxnRkFBZ0Y7UUFDaEYsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ2xCLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQztRQUNuRyxDQUFDO1FBQ0QsT0FBTyxZQUFZO0lBQ3JCLENBQUM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXAtdW5zY3JvbGxhYmxlL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWFwLXVuc2Nyb2xsYWJsZS9zcmMvZGF0YS1hY3Rpb25zL3Nob3ctb24tbWFwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICBfd2lkZ2V0TGFiZWw6ICdVbnNjcm9sbGFibGUgbWFwJyxcclxuICBfYWN0aW9uX2Rpc3BsYXlGZWF0dXJlU2V0X2xhYmVsOiAnRGlzcGxheSBmZWF0dXJlIHNldCcsXHJcbiAgX2FjdGlvbl9wYW5Ub19sYWJlbDogJ1BhbiB0bycsXHJcbiAgX2FjdGlvbl96b29tVG9GZWF0dXJlX2xhYmVsOiAnWm9vbSB0bycsXHJcbiAgX2FjdGlvbl9zZWxlY3RGZWF0dXJlX2xhYmVsOiAnU2VsZWN0IGZlYXR1cmUnLFxyXG4gIF9hY3Rpb25fZmxhc2hfbGFiZWw6ICdGbGFzaCcsXHJcbiAgX2FjdGlvbl9maWx0ZXJfbGFiZWw6ICdGaWx0ZXInLFxyXG4gIF9hY3Rpb25fc2hvd09uTWFwX2xhYmVsOiAnU2hvdyBvbiBtYXAnLFxyXG4gIF9hY3Rpb25fYWRkVG9NYXBfbGFiZWw6ICdBZGQgdG8gbWFwJyxcclxuICBzaG93T25NYXBEYXRhOiAnU2hvdyBvbiBtYXAgZGF0YScsXHJcbiAgYWRkZWREYXRhOiAnYWRkZWQgZGF0YScsXHJcbiAgZmFpbFRvQWRkVGhlRGF0YU9uTWFwOiAnRmFpbCB0byBhZGQgdGhlIGRhdGEuJyxcclxuICBhZGRUb01hcERhdGE6ICdBZGQgdG8gbWFwIGRhdGEnLFxyXG4gIG1hcEN1cnJlbnRSZWNvcmQ6ICd7bGF5ZXJOYW1lfSBtYXAgY3VycmVudCByZWNvcmQnLFxyXG4gIF91cmxfcGFyYW1zX3ZpZXdwb2ludF9sYWJlbDogJ1ZpZXdwb2ludCcsXHJcbiAgX3VybF9wYXJhbXNfdmlld3BvaW50X3Rvb2x0aXA6IFwiVmlld3BvaW50IGRlc2NyaWJlcyB0aGUgcG9pbnQgb2YgdmlldyBmb3IgYSB3ZWIgbWFwIG9yIHdlYiBzY2VuZS5cIixcclxuICBfdXJsX3BhcmFtc19jZW50ZXJfbGFiZWw6ICdDZW50ZXInLFxyXG4gIF91cmxfcGFyYW1zX3NjYWxlX2xhYmVsOiAnU2NhbGUnLFxyXG4gIF91cmxfcGFyYW1zX3JvdGF0aW9uX2xhYmVsOiAnUm90YXRpb24nLFxyXG4gIF91cmxfcGFyYW1zX2xheWVyX3Zpc2liaWxpdHlfbGFiZWw6ICdMYXllciB2aXNpYmlsaXR5J1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XHJcbiAgdHlwZSBEYXRhUmVjb3JkU2V0LFxyXG4gIHR5cGUgSW1tdXRhYmxlT2JqZWN0LFxyXG4gIHR5cGUgSmltdU1hcFZpZXdJbmZvLFxyXG4gIEFic3RyYWN0RGF0YUFjdGlvbixcclxuICBnZXRBcHBTdG9yZSxcclxuICBEYXRhU291cmNlU3RhdHVzLFxyXG4gIE11dGFibGVTdG9yZU1hbmFnZXIsXHJcbiAgdXRpbHMsXHJcbiAgaTE4bixcclxuICBEYXRhTGV2ZWxcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IE1hcFZpZXdNYW5hZ2VyLCBTSE9XX09OX01BUF9EQVRBX0lEX1BSRUZJWCwgQWN0aW9uVHlwZSwgdHlwZSBTaG93T25NYXBEYXRhcywgdHlwZSBTaG93T25NYXBEYXRhIH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi4vcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdCdcclxuXHJcbmludGVyZmFjZSBUaXRsZUNvdW50SW5mbyB7XHJcbiAgY291bnQ6IG51bWJlciAvLyAxIGJhc2VkXHJcbiAgcmF3VGl0bGU6IHN0cmluZ1xyXG4gIGZpbmFsVGl0bGU6IHN0cmluZ1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU2hvd09uTWFwRGF0YVdpdGhUaXRsZUNvdW50SW5mbyBleHRlbmRzIFNob3dPbk1hcERhdGEge1xyXG4gIHRpdGxlQ291bnRJbmZvPzogVGl0bGVDb3VudEluZm9cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvd09uTWFwIGV4dGVuZHMgQWJzdHJhY3REYXRhQWN0aW9uIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IF92aWV3TWFuYWdlciA9IE1hcFZpZXdNYW5hZ2VyLmdldEluc3RhbmNlKClcclxuXHJcbiAgLyoqXHJcbiAgICogU2hvd09uTWFwIGRhdGEgYWN0aW9uIG9ubHkgc3VwcG9ydHMgRGF0YUxldmVsLlJFQ09SRFMgZGF0YSwgZG9lc24ndCBzdXBwb3J0IERhdGFMZXZlbC5EQVRBX1NPVVJDRSBkYXRhLlxyXG4gICAqL1xyXG4gIGFzeW5jIGlzU3VwcG9ydGVkIChkYXRhU2V0czogRGF0YVJlY29yZFNldFtdLCBkYXRhTGV2ZWw6IERhdGFMZXZlbCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgaWYgKGRhdGFTZXRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhU2V0ID0gZGF0YVNldHNbMF1cclxuICAgIGNvbnN0IHsgcmVjb3JkcywgZGF0YVNvdXJjZSB9ID0gZGF0YVNldFxyXG4gICAgaWYgKCFkYXRhU291cmNlIHx8IGRhdGFTb3VyY2UuZ2V0U3RhdHVzKCkgPT09IERhdGFTb3VyY2VTdGF0dXMuTm90UmVhZHkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICByZXR1cm4gZGF0YUxldmVsID09PSBEYXRhTGV2ZWwuUmVjb3JkcyAmJiByZWNvcmRzPy5sZW5ndGggPiAwICYmIHJlY29yZHMuc29tZShyZWNvcmQgPT4gcmVjb3JkLmZlYXR1cmU/Lmdlb21ldHJ5KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25FeGVjdXRlIChkYXRhU2V0czogRGF0YVJlY29yZFNldFtdLCBkYXRhTGV2ZWw6IERhdGFMZXZlbCwgd2lkZ2V0SWQ6IHN0cmluZywgYWN0aW9uQ29uZmlnPzogYW55KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBjb25zdCBhY3RpdmVWaWV3SWQgPSB0aGlzLl9nZXRBY3RpdmVWaWV3SWQodGhpcy53aWRnZXRJZCwgZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmppbXVNYXBWaWV3c0luZm8pXHJcbiAgICBjb25zdCBzaG93T25NYXBEYXRhczogU2hvd09uTWFwRGF0YXMgPSBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0U3RhdGVWYWx1ZShbdGhpcy53aWRnZXRJZF0pPy5zaG93T25NYXBEYXRhcyB8fCB7fVxyXG5cclxuICAgIGNvbnN0IGRhdGFTZXQgPSBkYXRhU2V0c1swXVxyXG4gICAgY29uc3QgdGl0bGVDb3VudEluZm8gPSB0aGlzLmdldFVuaXF1ZVRpdGxlQ291bnRJbmZvKGRhdGFTZXQsIGFjdGl2ZVZpZXdJZCwgc2hvd09uTWFwRGF0YXMpXHJcblxyXG4gICAgLy8gc2F2ZSBhY3Rpb24gZGF0YVxyXG4gICAgY29uc3QgaWQgPSBgJHtTSE9XX09OX01BUF9EQVRBX0lEX1BSRUZJWH1kYXRhQWN0aW9uXyR7dXRpbHMuZ2V0VVVJRCgpfWBcclxuXHJcbiAgICAvLyB1c2UgY29kZSB0byBtYWludGFpbiAnc3ltYm9sT3B0aW9uJyBjb21wYXRpYmlsaXR5IGhlcmVcclxuICAgIC8vIEZvciBhcHAgd2FzIGNyZWF0ZWQgYmVmb3JlIG9ubGluZTEwLjEgKGlubGN1ZGUgMTAuMSksIGFjdGlvbkNvbmZpZyBpcyB1bmRlZmluZWQsIHRoZSBmaW5hbCAnc3ltYm9sT3B0aW9uJyBpcyB1bmRlZmluZWQuXHJcbiAgICAvLyBGb3IgYXBwIHdhcyBjcmVhdGVkIG9yIHNhdmVkIGFmdGVyIG9ubGluZTEwLjEsIGFjdGlvbkNvbmZpZyBpcyBhIG9iamVjdCxcclxuICAgIC8vICBpZiBhY3Rpb25Db25maWcuaXNVc2VDdXN0b21TeW1ib2wgaXMgdHJ1ZSwgbWVhbnMgY2hlY2sgJ1VzZSBjdXN0b20gc3ltYm9scycgb3B0aW9uLCB0aGUgZmluYWwgJ3N5bWJvbE9wdGlvbicgaXMgYWN0aW9uQ29uZmlnLnN5bWJvbE9wdGlvblxyXG4gICAgLy8gIGlmIGFjdGlvbkNvbmZpZy5pc1VzZUN1c3RvbVN5bWJvbCBpcyBmYWxzZSwgbWVhbnMgdW5jaGVjayAnVXNlIGxheWVyLWRlZmluZWQgc3ltYm9scycgb3B0aW9uLCB0aGUgZmluYWwgJ3N5bWJvbE9wdGlvbicgaXMgbnVsbFxyXG5cclxuICAgIC8vIFN1bW1hcnk6XHJcbiAgICAvLyBmb3IgJ3N5bWJvbE9wdGlvbicsIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHZhbHVlcyAndW5kZWZpbmVkJyBhbmQgJ251bGwnOlxyXG4gICAgLy8gICB1bmRlZmluZWQ6IGFwcCB3YXMgY3JlYXRlZCBiZWZvcmUgb25saW5lMTAuMSAoaW5sY3VkZSAxMC4xKSwgdXNlIGRlZmF1bHQgc3ltYm9sO1xyXG4gICAgLy8gICBudWxsOiBhcHAgd2FzIGNyZWF0ZWQgb3Igc2F2ZWQgYWZ0ZXIgb25saW5lMTAuMSwgdXNlIGRlZmF1bHQgcmVuZGVyZXIgb2YgbGF5ZXIuXHJcbiAgICAvLyBzeW1ib2xPcHRpb246IGFjdGlvbkNvbmZpZz8uaXNVc2VDdXN0b21TeW1ib2wgPyBhY3Rpb25Db25maWcuc3ltYm9sT3B0aW9uIDogKGFjdGlvbkNvbmZpZz8uaXNVc2VDdXN0b21TeW1ib2wgPT09IGZhbHNlID8gbnVsbCA6IHVuZGVmaW5lZCksXHJcbiAgICBsZXQgc3ltYm9sT3B0aW9uXHJcblxyXG4gICAgaWYgKGFjdGlvbkNvbmZpZykge1xyXG4gICAgICAvLyA+IG9ubGluZSAxMC4xXHJcbiAgICAgIGlmIChhY3Rpb25Db25maWcuaXNVc2VDdXN0b21TeW1ib2wpIHtcclxuICAgICAgICAvLyAnVXNlIGN1c3RvbSBzeW1ib2xzJyBvcHRpb25cclxuICAgICAgICBzeW1ib2xPcHRpb24gPSBhY3Rpb25Db25maWcuc3ltYm9sT3B0aW9uXHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uQ29uZmlnLmlzVXNlQ3VzdG9tU3ltYm9sID09PSBmYWxzZSkge1xyXG4gICAgICAgIC8vICdVc2UgbGF5ZXItZGVmaW5lZCBzeW1ib2xzJyBvcHRpb25cclxuICAgICAgICBzeW1ib2xPcHRpb24gPSBudWxsXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gc2hvdWxkIG5vdCBnb2VzIGhlcmVcclxuICAgICAgICBzeW1ib2xPcHRpb24gPSB1bmRlZmluZWRcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gPD0gb25saW5lIDEwLjFcclxuICAgICAgLy8gdXNlIGZlYXR1cmVVdGlscy5nZXREZWZhdWx0U3ltYm9sKCkgdG8gY3JlYXRlIGRlZmF1bHQgMkQgc3ltYm9sXHJcbiAgICAgIHN5bWJvbE9wdGlvbiA9IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld1Nob3dPbk1hcERhdGE6IFNob3dPbk1hcERhdGFXaXRoVGl0bGVDb3VudEluZm8gPSB7XHJcbiAgICAgIG1hcFdpZGdldElkOiB0aGlzLndpZGdldElkLFxyXG4gICAgICAvLyBtZXNzYWdlV2lkZ2V0SWQgaXMgb25seSBhdmFpbGFibGUgZm9yIG1lc3NhZ2UgYWN0aW9uLCBzbyBrZWVwIGl0IGVtcHR5IGZvciBkYXRhIGFjdGlvblxyXG4gICAgICBtZXNzYWdlV2lkZ2V0SWQ6IHVuZGVmaW5lZCxcclxuICAgICAgamltdU1hcFZpZXdJZDogYWN0aXZlVmlld0lkLFxyXG4gICAgICBkYXRhU2V0LFxyXG4gICAgICB0eXBlOiBBY3Rpb25UeXBlLkRhdGFBY3Rpb24sXHJcbiAgICAgIHN5bWJvbE9wdGlvbixcclxuICAgICAgdGl0bGU6IHRpdGxlQ291bnRJbmZvLmZpbmFsVGl0bGUsXHJcbiAgICAgIHRpdGxlQ291bnRJbmZvXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd09uTWFwRGF0YXNbaWRdID0gbmV3U2hvd09uTWFwRGF0YVxyXG4gICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgJ3Nob3dPbk1hcERhdGFzJywgc2hvd09uTWFwRGF0YXMpXHJcblxyXG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZSh0cnVlKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRVbmlxdWVUaXRsZUNvdW50SW5mbyAoZGF0YVNldDogRGF0YVJlY29yZFNldCwgYWN0aXZlVmlld0lkOiBzdHJpbmcsIHNob3dPbk1hcERhdGFzOiBTaG93T25NYXBEYXRhcyk6IFRpdGxlQ291bnRJbmZvIHtcclxuICAgIGNvbnN0IGludGwgPSBpMThuLmdldEludGwoKVxyXG4gICAgY29uc3QgcmF3VGl0bGUgPSBkYXRhU2V0Lm5hbWUgfHwgaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdzaG93T25NYXBEYXRhJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5zaG93T25NYXBEYXRhIH0pXHJcblxyXG4gICAgLy8gIzE2Nzk4LCBJZiBRdWVyeSB3aWRnZXQgc2VuZHMgZGF0YSBhY3Rpb24gd2l0aCBzYW1lIGRhdGEgc291cmNlIGFuZCBkYXRhIHJlY29yZHMgbXVsdGlwbGUgdGltZXMsIHdlIHdpbGwgY3JlYXRlIG11bHRpcGxlIGxheWVycyB3aXRoIHNhbWUgdGl0bGUuXHJcbiAgICAvLyBUbyBhdm9pZCB0aGlzIGNhc2UsIHdlIG5lZWQgdG8gbWFrZSBuYW1lIHVuaXF1ZS5cclxuICAgIGNvbnN0IGV4aXN0aW5nVGl0bGVDb3VudHM6IG51bWJlcltdID0gW11cclxuICAgIE9iamVjdC52YWx1ZXMoc2hvd09uTWFwRGF0YXMpLmZvckVhY2goKHNob3dPbk1hcDogU2hvd09uTWFwRGF0YVdpdGhUaXRsZUNvdW50SW5mbykgPT4ge1xyXG4gICAgICBjb25zdCB0aXRsZUNvdW50SW5mbyA9IHNob3dPbk1hcC50aXRsZUNvdW50SW5mb1xyXG5cclxuICAgICAgaWYgKHNob3dPbk1hcC5qaW11TWFwVmlld0lkID09PSBhY3RpdmVWaWV3SWQgJiYgc2hvd09uTWFwLnR5cGUgPT09IEFjdGlvblR5cGUuRGF0YUFjdGlvbiAmJiB0aXRsZUNvdW50SW5mbyAmJiB0aXRsZUNvdW50SW5mby5yYXdUaXRsZSA9PT0gcmF3VGl0bGUgJiYgdGl0bGVDb3VudEluZm8uY291bnQgPj0gMCkge1xyXG4gICAgICAgIGV4aXN0aW5nVGl0bGVDb3VudHMucHVzaCh0aXRsZUNvdW50SW5mby5jb3VudClcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgdGl0bGVDb3VudEluZm86IFRpdGxlQ291bnRJbmZvID0gbnVsbFxyXG5cclxuICAgIGlmIChleGlzdGluZ1RpdGxlQ291bnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgbWF4Q291bnQgPSBNYXRoLm1heCguLi5leGlzdGluZ1RpdGxlQ291bnRzKVxyXG4gICAgICBjb25zdCBjb3VudCA9IG1heENvdW50ICsgMVxyXG4gICAgICBjb25zdCBmaW5hbFRpdGxlID0gYCR7cmF3VGl0bGV9ICR7bWF4Q291bnQgKyAxfWBcclxuXHJcbiAgICAgIHRpdGxlQ291bnRJbmZvID0ge1xyXG4gICAgICAgIHJhd1RpdGxlLFxyXG4gICAgICAgIGZpbmFsVGl0bGUsXHJcbiAgICAgICAgY291bnRcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgY291bnQgPSAxXHJcbiAgICAgIGNvbnN0IGZpbmFsVGl0bGUgPSByYXdUaXRsZVxyXG5cclxuICAgICAgdGl0bGVDb3VudEluZm8gPSB7XHJcbiAgICAgICAgcmF3VGl0bGUsXHJcbiAgICAgICAgZmluYWxUaXRsZSxcclxuICAgICAgICBjb3VudFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRpdGxlQ291bnRJbmZvXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRBY3RpdmVWaWV3SWQgKG1hcFdpZGdldElkOiBzdHJpbmcsIGluZm9zOiBJbW11dGFibGVPYmplY3Q8eyBbamltdU1hcFZpZXdJZDogc3RyaW5nXTogSmltdU1hcFZpZXdJbmZvIH0+KTogc3RyaW5nIHtcclxuICAgIGxldCBhY3RpdmVWaWV3SWQgPSBPYmplY3Qua2V5cyhpbmZvcyB8fCB7fSkuZmluZCh2aWV3SWQgPT4gaW5mb3Nbdmlld0lkXS5tYXBXaWRnZXRJZCA9PT0gbWFwV2lkZ2V0SWQgJiYgaW5mb3Nbdmlld0lkXS5pc0FjdGl2ZSlcclxuICAgIC8vIHVzaW5nIGEgZGVmYXVsdCBtYXAgdmlldyBhcyBhY3RpdmUgbWFwIHZpZXcgaWYgdGhlIHdpZGdldCBoYXNuJ3QgYmVlbiBsb2FkZWQuXHJcbiAgICBpZiAoIWFjdGl2ZVZpZXdJZCkge1xyXG4gICAgICBhY3RpdmVWaWV3SWQgPSBPYmplY3Qua2V5cyhpbmZvcyB8fCB7fSkuZmluZCh2aWV3SWQgPT4gaW5mb3Nbdmlld0lkXS5tYXBXaWRnZXRJZCA9PT0gbWFwV2lkZ2V0SWQpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWN0aXZlVmlld0lkXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==