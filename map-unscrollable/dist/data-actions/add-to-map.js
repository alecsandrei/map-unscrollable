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
/*!*********************************************************************************!*\
  !*** ./your-extensions/widgets/map-unscrollable/src/data-actions/add-to-map.ts ***!
  \*********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddToMap)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class AddToMap extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractDataAction {
    constructor() {
        super(...arguments);
        this._viewManager = jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.MapViewManager.getInstance();
    }
    /**
     * AddToMap data action only supports DataLevel.DATA_SOURCE data, doesn't support DataLevel.RECORDS data.
     */
    isSupported(dataSets, dataLevel) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (dataSets.length > 1) {
                return false;
            }
            const dataSet = dataSets[0];
            const dataSource = dataSet === null || dataSet === void 0 ? void 0 : dataSet.dataSource;
            const activeViewId = this._getActiveViewId(this.widgetId, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().jimuMapViewsInfo);
            const jimuMapView = this._viewManager.getJimuMapViewById(activeViewId);
            if (!dataSource || dataSource.getStatus() === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotReady) {
                return false;
            }
            if (dataLevel !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataLevel.DataSource) {
                return false;
            }
            if ((dataSource.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SceneLayer || dataSource.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SceneService) && ((_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.type) === '2d') {
                // add a scene layer to a 2d map
                return false;
            }
            // #16797, avoid add multiple layers for the same dataSource
            if (jimuMapView && jimuMapView.view) {
                const addToMapLayers = jimuMapView.view.map.layers.toArray().filter(layer => layer.id && layer.id.includes(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ADD_TO_MAP_DATA_ID_PREFIX));
                if (addToMapLayers.length > 0) {
                    const isDsAlreadAddLayer = addToMapLayers.some((layer) => {
                        const jimuLayerView = jimuMapView.getJimuLayerViewByAPILayer(layer);
                        if (jimuLayerView && jimuLayerView.getLayerDataSource() === dataSource) {
                            return true;
                        }
                        return false;
                    });
                    if (isDsAlreadAddLayer) {
                        return false;
                    }
                }
            }
            const canDsCreateLayer = dataSource.supportSpatialInfo &&
                dataSource.supportSpatialInfo() &&
                !!dataSource.createJSAPILayerByDataSource &&
                !dataSource.isInAppConfig() &&
                ((_b = dataSet.records) === null || _b === void 0 ? void 0 : _b.length) === 0;
            return canDsCreateLayer;
        });
    }
    onExecute(dataSets, dataLevel) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const activeViewId = this._getActiveViewId(this.widgetId, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().jimuMapViewsInfo);
            const addToMapDatas = ((_a = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.widgetId])) === null || _a === void 0 ? void 0 : _a.addToMapDatas) || {};
            const intl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.getIntl();
            const dataSet = dataSets[0];
            const dataSetName = dataSet.name || '';
            const name = intl.formatMessage({ id: 'action_addedData', defaultMessage: jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages.action_addedData }, { label: dataSetName });
            // save action data
            const id = `${jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ADD_TO_MAP_DATA_ID_PREFIX}dataAction_${jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.getUUID()}`;
            addToMapDatas[id] = {
                mapWidgetId: this.widgetId,
                jimuMapViewId: activeViewId,
                dataSourceId: dataSet.dataSource.id,
                type: jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ActionType.DataAction,
                dataChangeType: jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataChangeType.Create,
                dataChangeStatus: jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataChangeStatus.Pending,
                title: name
            };
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'addToMapDatas', addToMapDatas);
            const jimuMapView = this._viewManager.getJimuMapViewById(activeViewId);
            if (jimuMapView) {
                (_b = dataSet.dataSource) === null || _b === void 0 ? void 0 : _b.createJSAPILayerByDataSource().then(layer => {
                    jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.zoomToUtils.zoomTo(jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view, layer, {
                        padding: {
                            left: 50,
                            right: 50,
                            top: 50,
                            bottom: 50
                        }
                    });
                });
            }
            return yield Promise.resolve(true);
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXAtdW5zY3JvbGxhYmxlL2Rpc3QvZGF0YS1hY3Rpb25zL2FkZC10by1tYXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNTa0I7QUFDZ0g7QUFFbkgsTUFBTSxRQUFTLFNBQVEseURBQWtCO0lBQXhEOztRQUNtQixpQkFBWSxHQUFHLHVEQUFjLENBQUMsV0FBVyxFQUFFO0lBb0c5RCxDQUFDO0lBbEdDOztPQUVHO0lBQ0csV0FBVyxDQUFFLFFBQXlCLEVBQUUsU0FBb0I7OztZQUNoRSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ3hCLE9BQU8sS0FBSztZQUNkLENBQUM7WUFDRCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sVUFBVSxHQUFHLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxVQUEwQztZQUN0RSxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxzREFBVyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7WUFDcEcsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUM7WUFDdEUsSUFB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LFdBQVcsS0FBSyxXQUFXLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUMvSCxnRkFBZ0Y7UUFDaEYsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ2xCLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQztRQUNuRyxDQUFDO1FBQ0QsT0FBTyxZQUFZO0lBQ3JCLENBQUM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWFwLXVuc2Nyb2xsYWJsZS9zcmMvZGF0YS1hY3Rpb25zL2FkZC10by1tYXAudHMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcclxuICB0eXBlIERhdGFSZWNvcmRTZXQsXHJcbiAgdHlwZSBJbW11dGFibGVPYmplY3QsXHJcbiAgdHlwZSBKaW11TWFwVmlld0luZm8sXHJcbiAgdHlwZSBKU0FQSUxheWVyTWl4aW4sXHJcbiAgdHlwZSBEYXRhU291cmNlLFxyXG4gIEFic3RyYWN0RGF0YUFjdGlvbixcclxuICBnZXRBcHBTdG9yZSxcclxuICBkZWZhdWx0TWVzc2FnZXMsXHJcbiAgTXV0YWJsZVN0b3JlTWFuYWdlcixcclxuICB1dGlscyxcclxuICBpMThuLFxyXG4gIERhdGFTb3VyY2VUeXBlcyxcclxuICBEYXRhU291cmNlU3RhdHVzLFxyXG4gIERhdGFMZXZlbFxyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgTWFwVmlld01hbmFnZXIsIEFERF9UT19NQVBfREFUQV9JRF9QUkVGSVgsIEFjdGlvblR5cGUsIERhdGFDaGFuZ2VUeXBlLCBEYXRhQ2hhbmdlU3RhdHVzLCB6b29tVG9VdGlscyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkVG9NYXAgZXh0ZW5kcyBBYnN0cmFjdERhdGFBY3Rpb24ge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX3ZpZXdNYW5hZ2VyID0gTWFwVmlld01hbmFnZXIuZ2V0SW5zdGFuY2UoKVxyXG5cclxuICAvKipcclxuICAgKiBBZGRUb01hcCBkYXRhIGFjdGlvbiBvbmx5IHN1cHBvcnRzIERhdGFMZXZlbC5EQVRBX1NPVVJDRSBkYXRhLCBkb2Vzbid0IHN1cHBvcnQgRGF0YUxldmVsLlJFQ09SRFMgZGF0YS5cclxuICAgKi9cclxuICBhc3luYyBpc1N1cHBvcnRlZCAoZGF0YVNldHM6IERhdGFSZWNvcmRTZXRbXSwgZGF0YUxldmVsOiBEYXRhTGV2ZWwpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGlmIChkYXRhU2V0cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0YVNldCA9IGRhdGFTZXRzWzBdXHJcbiAgICBjb25zdCBkYXRhU291cmNlID0gZGF0YVNldD8uZGF0YVNvdXJjZSBhcyBEYXRhU291cmNlICYgSlNBUElMYXllck1peGluXHJcbiAgICBjb25zdCBhY3RpdmVWaWV3SWQgPSB0aGlzLl9nZXRBY3RpdmVWaWV3SWQodGhpcy53aWRnZXRJZCwgZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmppbXVNYXBWaWV3c0luZm8pXHJcbiAgICBjb25zdCBqaW11TWFwVmlldyA9IHRoaXMuX3ZpZXdNYW5hZ2VyLmdldEppbXVNYXBWaWV3QnlJZChhY3RpdmVWaWV3SWQpXHJcbiAgICBpZiAoIWRhdGFTb3VyY2UgfHwgZGF0YVNvdXJjZS5nZXRTdGF0dXMoKSA9PT0gRGF0YVNvdXJjZVN0YXR1cy5Ob3RSZWFkeSkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YUxldmVsICE9PSBEYXRhTGV2ZWwuRGF0YVNvdXJjZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKGRhdGFTb3VyY2UudHlwZSA9PT0gRGF0YVNvdXJjZVR5cGVzLlNjZW5lTGF5ZXIgfHwgZGF0YVNvdXJjZS50eXBlID09PSBEYXRhU291cmNlVHlwZXMuU2NlbmVTZXJ2aWNlKSAmJiBqaW11TWFwVmlldz8udmlldz8udHlwZSA9PT0gJzJkJykge1xyXG4gICAgICAvLyBhZGQgYSBzY2VuZSBsYXllciB0byBhIDJkIG1hcFxyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICAvLyAjMTY3OTcsIGF2b2lkIGFkZCBtdWx0aXBsZSBsYXllcnMgZm9yIHRoZSBzYW1lIGRhdGFTb3VyY2VcclxuICAgIGlmIChqaW11TWFwVmlldyAmJiBqaW11TWFwVmlldy52aWV3KSB7XHJcbiAgICAgIGNvbnN0IGFkZFRvTWFwTGF5ZXJzID0gamltdU1hcFZpZXcudmlldy5tYXAubGF5ZXJzLnRvQXJyYXkoKS5maWx0ZXIobGF5ZXIgPT4gbGF5ZXIuaWQgJiYgbGF5ZXIuaWQuaW5jbHVkZXMoQUREX1RPX01BUF9EQVRBX0lEX1BSRUZJWCkpXHJcblxyXG4gICAgICBpZiAoYWRkVG9NYXBMYXllcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGlzRHNBbHJlYWRBZGRMYXllciA9IGFkZFRvTWFwTGF5ZXJzLnNvbWUoKGxheWVyKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBqaW11TGF5ZXJWaWV3ID0gamltdU1hcFZpZXcuZ2V0SmltdUxheWVyVmlld0J5QVBJTGF5ZXIobGF5ZXIpXHJcblxyXG4gICAgICAgICAgaWYgKGppbXVMYXllclZpZXcgJiYgamltdUxheWVyVmlldy5nZXRMYXllckRhdGFTb3VyY2UoKSA9PT0gZGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChpc0RzQWxyZWFkQWRkTGF5ZXIpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbkRzQ3JlYXRlTGF5ZXIgPSBkYXRhU291cmNlLnN1cHBvcnRTcGF0aWFsSW5mbyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2Uuc3VwcG9ydFNwYXRpYWxJbmZvKCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWRhdGFTb3VyY2UuY3JlYXRlSlNBUElMYXllckJ5RGF0YVNvdXJjZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICFkYXRhU291cmNlLmlzSW5BcHBDb25maWcoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTZXQucmVjb3Jkcz8ubGVuZ3RoID09PSAwXHJcblxyXG4gICAgcmV0dXJuIGNhbkRzQ3JlYXRlTGF5ZXJcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uRXhlY3V0ZSAoZGF0YVNldHM6IERhdGFSZWNvcmRTZXRbXSwgZGF0YUxldmVsOiBEYXRhTGV2ZWwpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IGFjdGl2ZVZpZXdJZCA9IHRoaXMuX2dldEFjdGl2ZVZpZXdJZCh0aGlzLndpZGdldElkLCBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuamltdU1hcFZpZXdzSW5mbylcclxuICAgIGNvbnN0IGFkZFRvTWFwRGF0YXMgPSBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0U3RhdGVWYWx1ZShbdGhpcy53aWRnZXRJZF0pPy5hZGRUb01hcERhdGFzIHx8IHt9XHJcbiAgICBjb25zdCBpbnRsID0gaTE4bi5nZXRJbnRsKClcclxuICAgIGNvbnN0IGRhdGFTZXQgPSBkYXRhU2V0c1swXVxyXG4gICAgY29uc3QgZGF0YVNldE5hbWUgPSBkYXRhU2V0Lm5hbWUgfHwgJydcclxuICAgIGNvbnN0IG5hbWUgPSBpbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ2FjdGlvbl9hZGRlZERhdGEnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLmFjdGlvbl9hZGRlZERhdGEgfSwgeyBsYWJlbDogZGF0YVNldE5hbWUgfSlcclxuICAgIC8vIHNhdmUgYWN0aW9uIGRhdGFcclxuICAgIGNvbnN0IGlkID0gYCR7QUREX1RPX01BUF9EQVRBX0lEX1BSRUZJWH1kYXRhQWN0aW9uXyR7dXRpbHMuZ2V0VVVJRCgpfWBcclxuICAgIGFkZFRvTWFwRGF0YXNbaWRdID0ge1xyXG4gICAgICBtYXBXaWRnZXRJZDogdGhpcy53aWRnZXRJZCxcclxuICAgICAgamltdU1hcFZpZXdJZDogYWN0aXZlVmlld0lkLFxyXG4gICAgICBkYXRhU291cmNlSWQ6IGRhdGFTZXQuZGF0YVNvdXJjZS5pZCxcclxuICAgICAgdHlwZTogQWN0aW9uVHlwZS5EYXRhQWN0aW9uLFxyXG4gICAgICBkYXRhQ2hhbmdlVHlwZTogRGF0YUNoYW5nZVR5cGUuQ3JlYXRlLFxyXG4gICAgICBkYXRhQ2hhbmdlU3RhdHVzOiBEYXRhQ2hhbmdlU3RhdHVzLlBlbmRpbmcsXHJcbiAgICAgIHRpdGxlOiBuYW1lXHJcbiAgICB9XHJcbiAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZSh0aGlzLndpZGdldElkLCAnYWRkVG9NYXBEYXRhcycsIGFkZFRvTWFwRGF0YXMpXHJcblxyXG4gICAgY29uc3QgamltdU1hcFZpZXcgPSB0aGlzLl92aWV3TWFuYWdlci5nZXRKaW11TWFwVmlld0J5SWQoYWN0aXZlVmlld0lkKVxyXG4gICAgaWYgKGppbXVNYXBWaWV3KSB7XHJcbiAgICAgIChkYXRhU2V0LmRhdGFTb3VyY2UgYXMgdW5rbm93biBhcyBKU0FQSUxheWVyTWl4aW4pPy5jcmVhdGVKU0FQSUxheWVyQnlEYXRhU291cmNlKCkudGhlbihsYXllciA9PiB7XHJcbiAgICAgICAgem9vbVRvVXRpbHMuem9vbVRvKGppbXVNYXBWaWV3Py52aWV3LCBsYXllciwge1xyXG4gICAgICAgICAgcGFkZGluZzoge1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCxcclxuICAgICAgICAgICAgcmlnaHQ6IDUwLFxyXG4gICAgICAgICAgICB0b3A6IDUwLFxyXG4gICAgICAgICAgICBib3R0b206IDUwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUodHJ1ZSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldEFjdGl2ZVZpZXdJZCAobWFwV2lkZ2V0SWQ6IHN0cmluZywgaW5mb3M6IEltbXV0YWJsZU9iamVjdDx7IFtqaW11TWFwVmlld0lkOiBzdHJpbmddOiBKaW11TWFwVmlld0luZm8gfT4pOiBzdHJpbmcge1xyXG4gICAgbGV0IGFjdGl2ZVZpZXdJZCA9IE9iamVjdC5rZXlzKGluZm9zIHx8IHt9KS5maW5kKHZpZXdJZCA9PiBpbmZvc1t2aWV3SWRdLm1hcFdpZGdldElkID09PSBtYXBXaWRnZXRJZCAmJiBpbmZvc1t2aWV3SWRdLmlzQWN0aXZlKVxyXG4gICAgLy8gdXNpbmcgYSBkZWZhdWx0IG1hcCB2aWV3IGFzIGFjdGl2ZSBtYXAgdmlldyBpZiB0aGUgd2lkZ2V0IGhhc24ndCBiZWVuIGxvYWRlZC5cclxuICAgIGlmICghYWN0aXZlVmlld0lkKSB7XHJcbiAgICAgIGFjdGl2ZVZpZXdJZCA9IE9iamVjdC5rZXlzKGluZm9zIHx8IHt9KS5maW5kKHZpZXdJZCA9PiBpbmZvc1t2aWV3SWRdLm1hcFdpZGdldElkID09PSBtYXBXaWRnZXRJZClcclxuICAgIH1cclxuICAgIHJldHVybiBhY3RpdmVWaWV3SWRcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9