System.register(["jimu-core","jimu-ui","jimu-ui/advanced/map","jimu-ui/advanced/setting-components","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_map__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_map__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_map__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
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

/***/ "./your-extensions/widgets/map-unscrollable/src/setting/translations/default.ts":
/*!**************************************************************************************!*\
  !*** ./your-extensions/widgets/map-unscrollable/src/setting/translations/default.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    sourceLabel: 'Source',
    sourceDescript: 'A web map or web scene, or any combination of the two.',
    selectThirdMapHint: 'Please unselect a map or scene before you choose another one. Up to two are supported.',
    initialMap: 'Initial map',
    initialMapView: 'Initial view',
    selectMap: 'Select map',
    setMapView: 'Modify initial view',
    defaultView: 'Default',
    defaultViewTip: 'Initial position of the map inherited from the web map or web scene',
    customView: 'Custom',
    customViewTip: 'Create a new position of the map',
    customViewSet: 'Modify',
    toolLabel: 'Tools',
    selectionHighlightColor: 'Selection highlight',
    featureSelectionColor: 'Feature selection colors',
    featureHighlightFill: 'Highlight fill',
    featureHighlightOutline: 'Highlight outline',
    disableScrollZoom: 'Disable scroll zooming',
    enableScrollZoom: 'Enable scroll zooming',
    disablePopUp: 'Disable pop-up',
    enablePopUp: 'Enable pop-up',
    showPopupUponSelection: 'Show pop-up upon feature selection',
    showPopupUponSelectionTooltip: 'Selection made interactively from the map is excluded.',
    dockPopup: 'Dock the pop-up',
    sceneQualityMode: 'Scene quality mode',
    chooseALayer: 'Select a layer',
    dataRelationShip: 'Data relationship',
    mapNone: 'none',
    messageField: 'Message field',
    mapLayout: 'Tools layout',
    mapLayout_LargeAndMedium: 'Large and medium size',
    mapLayout_Small: 'Small size',
    enableClientSideQuery: 'Enable client-side query',
    clientQueryHelpTip1: 'Enable client-side queries to alleviate server demand and enhance application performance. Be advised that it may take longer before you can see the features since the map will query more fields. Web scenes are not yet supported. See {link}.',
    clientQueryHelpTip2: 'One web map only needs to be enabled once in any map widget. Web scenes do not support client-side queries.',
    clientQueryDisabledTip: 'This web map has the client-side query already enabled in another map widget.',
    mapAction_TriggerLayer: 'Trigger data',
    mapAction_SetData: 'Select data',
    mapAction_ActionLayer: 'Action data',
    mapAction_Conditions: 'Conditions',
    mapAction_RelateMessage: 'Trigger / action connection',
    mapAction_TriggerLayerField: 'Select a trigger field',
    mapAction_None: 'none',
    mapAction_Equals: 'equals',
    mapAction_ActionLayerField: 'Select an action field',
    mapAction_MoreConditions: 'More conditions',
    mapAction_SetExpression: 'Please set your expression first.',
    mapAction_ChooseLayer: 'Select data',
    mapAction_AutoBind: 'Auto bound.',
    mapAction_NoLayer: 'No data.',
    mapAction_Point: 'Point',
    mapAction_Polyline: 'Polyline',
    mapAction_Polygon: 'Polygon',
    mapAction_UseLayerDefinedSymbols: 'Use layer-defined symbols',
    mapAction_UseCustomSymbols: 'Use custom symbols',
    mapZoomToAction_ZoomScale: 'Zoom scale',
    mapZoomToAction_Automatic: 'Automatic',
    mapZoomToAction_Custom: 'Custom',
    mapZoomToAction_TypeScale: 'Type a scale'
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

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/map":
/*!***************************************!*\
  !*** external "jimu-ui/advanced/map" ***!
  \***************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_map__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
/*!*******************************************************************************************!*\
  !*** ./your-extensions/widgets/map-unscrollable/src/data-actions/show-on-map-setting.tsx ***!
  \*******************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/map */ "jimu-ui/advanced/map");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../setting/translations/default */ "./your-extensions/widgets/map-unscrollable/src/setting/translations/default.ts");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");

//import { TextInput } from 'jimu-ui'





class _ShowOnMapSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.handleIsUseCustomSymbolOption = (isUseCustomSymbol) => {
            this.props.onSettingChange(Object.assign({}, this.props.config.set('isUseCustomSymbol', isUseCustomSymbol).set('symbolOption', null)));
        };
        this.onSymbolCreated = (symbol, type) => {
            this.defaultSymbolOption = this.defaultSymbolOption.set(type, symbol === null || symbol === void 0 ? void 0 : symbol.toJSON());
            if (!this.props.config.symbolOption &&
                this.defaultSymbolOption.pointSymbol &&
                this.defaultSymbolOption.polylineSymbol &&
                this.defaultSymbolOption.polygonSymbol) {
                this.props.onSettingChange(Object.assign({}, this.props.config.set('symbolOption', this.defaultSymbolOption)));
            }
        };
        this.onSymbolChanged = (symbol, type) => {
            this.props.onSettingChange(Object.assign({}, this.props.config.setIn(['symbolOption', type], symbol.toJSON())));
        };
        this.getInitSymbolFromConfig = (jimuSymbolType) => {
            let symbol;
            const symbolOption = this.props.config.symbolOption;
            if (this.jsonUtils) {
                if (jimuSymbolType === jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Point) {
                    symbol = (symbolOption === null || symbolOption === void 0 ? void 0 : symbolOption.pointSymbol) ? symbolOption.pointSymbol : jimu_arcgis__WEBPACK_IMPORTED_MODULE_5__.featureUtils.getDefaultSymbol('point');
                }
                else if (jimuSymbolType === jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polyline) {
                    symbol = (symbolOption === null || symbolOption === void 0 ? void 0 : symbolOption.polylineSymbol) ? symbolOption.polylineSymbol : jimu_arcgis__WEBPACK_IMPORTED_MODULE_5__.featureUtils.getDefaultSymbol('polyline');
                }
                else if (jimuSymbolType === jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polygon) {
                    symbol = (symbolOption === null || symbolOption === void 0 ? void 0 : symbolOption.polygonSymbol) ? symbolOption.polygonSymbol : jimu_arcgis__WEBPACK_IMPORTED_MODULE_5__.featureUtils.getDefaultSymbol('polygon');
                }
            }
            // @ts-expect-error
            return symbol ? this.jsonUtils.fromJSON(symbol) : null;
        };
        this.jsonUtils = null;
        this.defaultSymbolOption = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
        this.state = {
            isModulesLoaded: false
        };
    }
    componentDidMount() {
        (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_5__.loadArcGISJSAPIModules)([
            'esri/symbols/support/jsonUtils'
        ]).then(modules => {
            [this.jsonUtils] = modules;
            this.setState({
                isModulesLoaded: true
            });
        });
    }
    render() {
        const pointLabel = this.props.intl.formatMessage({ id: 'mapAction_Point', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_Point });
        const polylineLabel = this.props.intl.formatMessage({ id: 'mapAction_Polyline', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_Polyline });
        const polygonLabel = this.props.intl.formatMessage({ id: 'mapAction_Polygon', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_Polygon });
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100' },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'd-flex justify-content-between w-100 align-items-center' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'align-items-center d-flex' },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { style: { cursor: 'pointer' }, checked: !this.props.config.isUseCustomSymbol, onChange: () => { this.handleIsUseCustomSymbolOption(false); }, "aria-labelledby": 'useLayerDefinedLabel' }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { id: 'useLayerDefinedLabel', className: 'm-0 ml-2', style: { cursor: 'pointer' } }, this.props.intl.formatMessage({ id: 'mapAction_UseLayerDefinedSymbols', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_UseLayerDefinedSymbols }))))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'd-flex justify-content-between w-100 align-items-center' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'align-items-center d-flex' },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { style: { cursor: 'pointer' }, checked: this.props.config.isUseCustomSymbol, onChange: () => { this.handleIsUseCustomSymbolOption(true); }, "aria-labelledby": 'useCustomLabel' }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { id: 'useCustomLabel', className: 'm-0 ml-2', style: { cursor: 'pointer' } }, this.props.intl.formatMessage({ id: 'mapAction_UseCustomSymbols', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_UseCustomSymbols }))))),
                this.props.config.isUseCustomSymbol && this.jsonUtils && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, { className: 'pb-0' },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { className: 'd-flex justify-content-around' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'symbol-selector d-flex flex-column align-items-center w-25', title: pointLabel },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.SymbolSelector, { jimuSymbolType: jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Point, symbol: this.getInitSymbolFromConfig(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Point), onCreated: (symbolParam) => { this.onSymbolCreated(symbolParam.symbol, 'pointSymbol'); }, onPointSymbolChanged: (symbol) => { this.onSymbolChanged(symbol, 'pointSymbol'); } }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { className: 'm-0 ml-0 w-100 d-block text-center', style: { cursor: 'pointer', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, pointLabel)),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'symbol-selector d-flex flex-column align-items-center w-25', title: polylineLabel },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.SymbolSelector, { jimuSymbolType: jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polyline, symbol: this.getInitSymbolFromConfig(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polyline), onCreated: (symbolParam) => { this.onSymbolCreated(symbolParam.symbol, 'polylineSymbol'); }, onPolylineSymbolChanged: (symbol) => { this.onSymbolChanged(symbol, 'polylineSymbol'); } }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { className: 'm-0 ml-0 w-100 d-block text-center', style: { cursor: 'pointer', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, polylineLabel)),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'symbol-selector d-flex flex-column align-items-center w-25', title: polygonLabel },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.SymbolSelector, { jimuSymbolType: jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polygon, symbol: this.getInitSymbolFromConfig(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polygon), onCreated: (symbolParam) => { this.onSymbolCreated(symbolParam.symbol, 'polygonSymbol'); }, onPolygonSymbolChanged: (symbol) => { this.onSymbolChanged(symbol, 'polygonSymbol'); } }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { className: 'm-0 ml-0 w-100 d-block text-center', style: { cursor: 'pointer', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, polygonLabel)))))));
    }
}
_ShowOnMapSetting.defaultProps = {
    config: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
        isUseCustomSymbol: true
    })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)(_ShowOnMapSetting));

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXAtdW5zY3JvbGxhYmxlL2Rpc3QvZGF0YS1hY3Rpb25zL3Nob3ctb24tbWFwLXNldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsV0FBVyxFQUFFLFFBQVE7SUFDckIsY0FBYyxFQUFFLHdEQUF3RDtJQUN4RSxrQkFBa0IsRUFBRSx3RkFBd0Y7SUFDNUcsVUFBVSxFQUFFLGFBQWE7SUFDekIsY0FBYyxFQUFFLGNBQWM7SUFDOUIsU0FBUyxFQUFFLFlBQVk7SUFDdkIsVUFBVSxFQUFFLHFCQUFxQjtJQUNqQyxXQUFXLEVBQUUsU0FBUztJQUN0QixjQUFjLEVBQUUscUVBQXFFO0lBQ3JGLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLGFBQWEsRUFBRSxrQ0FBa0M7SUFDakQsYUFBYSxFQUFFLFFBQVE7SUFDdkIsU0FBUyxFQUFFLE9BQU87SUFDbEIsdUJBQXVCLEVBQUUscUJBQXFCO0lBQzlDLHFCQUFxQixFQUFFLDBCQUEwQjtJQUNqRCxvQkFBb0IsRUFBRSxnQkFBZ0I7SUFDdEMsdUJBQXVCLEVBQUUsbUJBQW1CO0lBQzVDLGlCQUFpQixFQUFFLHdCQUF3QjtJQUMzQyxnQkFBZ0IsRUFBRSx1QkFBdUI7SUFDekMsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixXQUFXLEVBQUUsZUFBZTtJQUM1QixzQkFBc0IsRUFBRSxvQ0FBb0M7SUFDNUQsNkJBQTZCLEVBQUUsd0RBQXdEO0lBQ3ZGLFNBQVMsRUFBRSxpQkFBaUI7SUFDNUIsZ0JBQWdCLEVBQUUsb0JBQW9CO0lBQ3RDLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsZ0JBQWdCLEVBQUUsbUJBQW1CO0lBQ3JDLE9BQU8sRUFBRSxNQUFNO0lBQ2YsWUFBWSxFQUFFLGVBQWU7SUFDN0IsU0FBUyxFQUFFLGNBQWM7SUFDekIsd0JBQXdCLEVBQUUsdUJBQXVCO0lBQ2pELGVBQWUsRUFBRSxZQUFZO0lB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QWpJTSw4QkFBWSxHQUFHO0lBQ3BCLE1BQU0sRUFBRSxvREFBUyxDQUFDO1FBQ2hCLGlCQUFpQixFQUFFLElBQUk7S0FDeEIsQ0FBQztDQUNIO0FBZ0lILGlFQUFlLHFEQUFVLENBQUMsaUJBQWlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWFwLXVuc2Nyb2xsYWJsZS9zcmMvc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvbWFwXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWFwLXVuc2Nyb2xsYWJsZS9zcmMvZGF0YS1hY3Rpb25zL3Nob3ctb24tbWFwLXNldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICBzb3VyY2VMYWJlbDogJ1NvdXJjZScsXHJcbiAgc291cmNlRGVzY3JpcHQ6ICdBIHdlYiBtYXAgb3Igd2ViIHNjZW5lLCBvciBhbnkgY29tYmluYXRpb24gb2YgdGhlIHR3by4nLFxyXG4gIHNlbGVjdFRoaXJkTWFwSGludDogJ1BsZWFzZSB1bnNlbGVjdCBhIG1hcCBvciBzY2VuZSBiZWZvcmUgeW91IGNob29zZSBhbm90aGVyIG9uZS4gVXAgdG8gdHdvIGFyZSBzdXBwb3J0ZWQuJyxcclxuICBpbml0aWFsTWFwOiAnSW5pdGlhbCBtYXAnLFxyXG4gIGluaXRpYWxNYXBWaWV3OiAnSW5pdGlhbCB2aWV3JyxcclxuICBzZWxlY3RNYXA6ICdTZWxlY3QgbWFwJyxcclxuICBzZXRNYXBWaWV3OiAnTW9kaWZ5IGluaXRpYWwgdmlldycsXHJcbiAgZGVmYXVsdFZpZXc6ICdEZWZhdWx0JyxcclxuICBkZWZhdWx0Vmlld1RpcDogJ0luaXRpYWwgcG9zaXRpb24gb2YgdGhlIG1hcCBpbmhlcml0ZWQgZnJvbSB0aGUgd2ViIG1hcCBvciB3ZWIgc2NlbmUnLFxyXG4gIGN1c3RvbVZpZXc6ICdDdXN0b20nLFxyXG4gIGN1c3RvbVZpZXdUaXA6ICdDcmVhdGUgYSBuZXcgcG9zaXRpb24gb2YgdGhlIG1hcCcsXHJcbiAgY3VzdG9tVmlld1NldDogJ01vZGlmeScsXHJcbiAgdG9vbExhYmVsOiAnVG9vbHMnLFxyXG4gIHNlbGVjdGlvbkhpZ2hsaWdodENvbG9yOiAnU2VsZWN0aW9uIGhpZ2hsaWdodCcsXHJcbiAgZmVhdHVyZVNlbGVjdGlvbkNvbG9yOiAnRmVhdHVyZSBzZWxlY3Rpb24gY29sb3JzJyxcclxuICBmZWF0dXJlSGlnaGxpZ2h0RmlsbDogJ0hpZ2hsaWdodCBmaWxsJyxcclxuICBmZWF0dXJlSGlnaGxpZ2h0T3V0bGluZTogJ0hpZ2hsaWdodCBvdXRsaW5lJyxcclxuICBkaXNhYmxlU2Nyb2xsWm9vbTogJ0Rpc2FibGUgc2Nyb2xsIHpvb21pbmcnLFxyXG4gIGVuYWJsZVNjcm9sbFpvb206ICdFbmFibGUgc2Nyb2xsIHpvb21pbmcnLFxyXG4gIGRpc2FibGVQb3BVcDogJ0Rpc2FibGUgcG9wLXVwJyxcclxuICBlbmFibGVQb3BVcDogJ0VuYWJsZSBwb3AtdXAnLFxyXG4gIHNob3dQb3B1cFVwb25TZWxlY3Rpb246ICdTaG93IHBvcC11cCB1cG9uIGZlYXR1cmUgc2VsZWN0aW9uJyxcclxuICBzaG93UG9wdXBVcG9uU2VsZWN0aW9uVG9vbHRpcDogJ1NlbGVjdGlvbiBtYWRlIGludGVyYWN0aXZlbHkgZnJvbSB0aGUgbWFwIGlzIGV4Y2x1ZGVkLicsXHJcbiAgZG9ja1BvcHVwOiAnRG9jayB0aGUgcG9wLXVwJyxcclxuICBzY2VuZVF1YWxpdHlNb2RlOiAnU2NlbmUgcXVhbGl0eSBtb2RlJyxcclxuICBjaG9vc2VBTGF5ZXI6ICdTZWxlY3QgYSBsYXllcicsXHJcbiAgZGF0YVJlbGF0aW9uU2hpcDogJ0RhdGEgcmVsYXRpb25zaGlwJyxcclxuICBtYXBOb25lOiAnbm9uZScsXHJcbiAgbWVzc2FnZUZpZWxkOiAnTWVzc2FnZSBmaWVsZCcsXHJcbiAgbWFwTGF5b3V0OiAnVG9vbHMgbGF5b3V0JyxcclxuICBtYXBMYXlvdXRfTGFyZ2VBbmRNZWRpdW06ICdMYXJnZSBhbmQgbWVkaXVtIHNpemUnLFxyXG4gIG1hcExheW91dF9TbWFsbDogJ1NtYWxsIHNpemUnLFxyXG4gIGVuYWJsZUNsaWVudFNpZGVRdWVyeTogJ0VuYWJsZSBjbGllbnQtc2lkZSBxdWVyeScsXHJcbiAgY2xpZW50UXVlcnlIZWxwVGlwMTogJ0VuYWJsZSBjbGllbnQtc2lkZSBxdWVyaWVzIHRvIGFsbGV2aWF0ZSBzZXJ2ZXIgZGVtYW5kIGFuZCBlbmhhbmNlIGFwcGxpY2F0aW9uIHBlcmZvcm1hbmNlLiBCZSBhZHZpc2VkIHRoYXQgaXQgbWF5IHRha2UgbG9uZ2VyIGJlZm9yZSB5b3UgY2FuIHNlZSB0aGUgZmVhdHVyZXMgc2luY2UgdGhlIG1hcCB3aWxsIHF1ZXJ5IG1vcmUgZmllbGRzLiBXZWIgc2NlbmVzIGFyZSBub3QgeWV0IHN1cHBvcnRlZC4gU2VlIHtsaW5rfS4nLFxyXG4gIGNsaWVudFF1ZXJ5SGVscFRpcDI6ICdPbmUgd2ViIG1hcCBvbmx5IG5lZWRzIHRvIGJlIGVuYWJsZWQgb25jZSBpbiBhbnkgbWFwIHdpZGdldC4gV2ViIHNjZW5lcyBkbyBub3Qgc3VwcG9ydCBjbGllbnQtc2lkZSBxdWVyaWVzLicsXHJcbiAgY2xpZW50UXVlcnlEaXNhYmxlZFRpcDogJ1RoaXMgd2ViIG1hcCBoYXMgdGhlIGNsaWVudC1zaWRlIHF1ZXJ5IGFscmVhZHkgZW5hYmxlZCBpbiBhbm90aGVyIG1hcCB3aWRnZXQuJyxcclxuXHJcbiAgbWFwQWN0aW9uX1RyaWdnZXJMYXllcjogJ1RyaWdnZXIgZGF0YScsXHJcbiAgbWFwQWN0aW9uX1NldERhdGE6ICdTZWxlY3QgZGF0YScsXHJcbiAgbWFwQWN0aW9uX0FjdGlvbkxheWVyOiAnQWN0aW9uIGRhdGEnLFxyXG4gIG1hcEFjdGlvbl9Db25kaXRpb25zOiAnQ29uZGl0aW9ucycsXHJcbiAgbWFwQWN0aW9uX1JlbGF0ZU1lc3NhZ2U6ICdUcmlnZ2VyIC8gYWN0aW9uIGNvbm5lY3Rpb24nLFxyXG4gIG1hcEFjdGlvbl9UcmlnZ2VyTGF5ZXJGaWVsZDogJ1NlbGVjdCBhIHRyaWdnZXIgZmllbGQnLFxyXG4gIG1hcEFjdGlvbl9Ob25lOiAnbm9uZScsXHJcbiAgbWFwQWN0aW9uX0VxdWFsczogJ2VxdWFscycsXHJcbiAgbWFwQWN0aW9uX0FjdGlvbkxheWVyRmllbGQ6ICdTZWxlY3QgYW4gYWN0aW9uIGZpZWxkJyxcclxuICBtYXBBY3Rpb25fTW9yZUNvbmRpdGlvbnM6ICdNb3JlIGNvbmRpdGlvbnMnLFxyXG4gIG1hcEFjdGlvbl9TZXRFeHByZXNzaW9uOiAnUGxlYXNlIHNldCB5b3VyIGV4cHJlc3Npb24gZmlyc3QuJyxcclxuICBtYXBBY3Rpb25fQ2hvb3NlTGF5ZXI6ICdTZWxlY3QgZGF0YScsXHJcbiAgbWFwQWN0aW9uX0F1dG9CaW5kOiAnQXV0byBib3VuZC4nLFxyXG4gIG1hcEFjdGlvbl9Ob0xheWVyOiAnTm8gZGF0YS4nLFxyXG4gIG1hcEFjdGlvbl9Qb2ludDogJ1BvaW50JyxcclxuICBtYXBBY3Rpb25fUG9seWxpbmU6ICdQb2x5bGluZScsXHJcbiAgbWFwQWN0aW9uX1BvbHlnb246ICdQb2x5Z29uJyxcclxuICBtYXBBY3Rpb25fVXNlTGF5ZXJEZWZpbmVkU3ltYm9sczogJ1VzZSBsYXllci1kZWZpbmVkIHN5bWJvbHMnLFxyXG4gIG1hcEFjdGlvbl9Vc2VDdXN0b21TeW1ib2xzOiAnVXNlIGN1c3RvbSBzeW1ib2xzJyxcclxuICBtYXBab29tVG9BY3Rpb25fWm9vbVNjYWxlOiAnWm9vbSBzY2FsZScsXHJcbiAgbWFwWm9vbVRvQWN0aW9uX0F1dG9tYXRpYzogJ0F1dG9tYXRpYycsXHJcbiAgbWFwWm9vbVRvQWN0aW9uX0N1c3RvbTogJ0N1c3RvbScsXHJcbiAgbWFwWm9vbVRvQWN0aW9uX1R5cGVTY2FsZTogJ1R5cGUgYSBzY2FsZSdcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9tYXBfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9zZXR0aW5nX2NvbXBvbmVudHNfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFJlYWN0LCB0eXBlIERhdGFBY3Rpb25TZXR0aW5nUHJvcHMsIGluamVjdEludGwsIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCBJbW11dGFibGUgfSBmcm9tICdqaW11LWNvcmUnXHJcbi8vaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSAnamltdS11aSdcclxuXHJcbmltcG9ydCB7IFJhZGlvIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHsgU3ltYm9sU2VsZWN0b3IsIEppbXVTeW1ib2xUeXBlLCB0eXBlIEppbXVTeW1ib2wgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL21hcCdcclxuaW1wb3J0IHsgU2V0dGluZ1NlY3Rpb24sIFNldHRpbmdSb3cgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcclxuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuLi9zZXR0aW5nL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xyXG5pbXBvcnQgeyB0eXBlIFN5bWJvbE9wdGlvbiwgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcywgZmVhdHVyZVV0aWxzIH0gZnJvbSAnamltdS1hcmNnaXMnXHJcblxyXG5pbnRlcmZhY2UgU3RhdGVzIHtcclxuICBpc01vZHVsZXNMb2FkZWQ/OiBib29sZWFuXHJcbn1cclxuXHJcbmludGVyZmFjZSBDb25maWcge1xyXG4gIGlzVXNlQ3VzdG9tU3ltYm9sPzogYm9vbGVhblxyXG4gIHN5bWJvbE9wdGlvbj86IFN5bWJvbE9wdGlvblxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJTUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxDb25maWc+XHJcblxyXG5jbGFzcyBfU2hvd09uTWFwU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RGF0YUFjdGlvblNldHRpbmdQcm9wczxJTUNvbmZpZz4sIFN0YXRlcz4ge1xyXG4gIGpzb25VdGlsczogdHlwZW9mIF9fZXNyaS5qc29uVXRpbHNcclxuICBkZWZhdWx0U3ltYm9sT3B0aW9uOiBJbW11dGFibGVPYmplY3Q8U3ltYm9sT3B0aW9uPlxyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY29uZmlnOiBJbW11dGFibGUoe1xyXG4gICAgICBpc1VzZUN1c3RvbVN5bWJvbDogdHJ1ZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLmpzb25VdGlscyA9IG51bGxcclxuICAgIHRoaXMuZGVmYXVsdFN5bWJvbE9wdGlvbiA9IEltbXV0YWJsZSh7fSlcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlzTW9kdWxlc0xvYWRlZDogZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAnZXNyaS9zeW1ib2xzL3N1cHBvcnQvanNvblV0aWxzJ1xyXG4gICAgXSkudGhlbihtb2R1bGVzID0+IHtcclxuICAgICAgW3RoaXMuanNvblV0aWxzXSA9IG1vZHVsZXNcclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGlzTW9kdWxlc0xvYWRlZDogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGhhbmRsZUlzVXNlQ3VzdG9tU3ltYm9sT3B0aW9uID0gKGlzVXNlQ3VzdG9tU3ltYm9sOiBib29sZWFuKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7IC4uLnRoaXMucHJvcHMuY29uZmlnLnNldCgnaXNVc2VDdXN0b21TeW1ib2wnLCBpc1VzZUN1c3RvbVN5bWJvbCkuc2V0KCdzeW1ib2xPcHRpb24nLCBudWxsKSB9KVxyXG4gIH1cclxuXHJcbiAgb25TeW1ib2xDcmVhdGVkID0gKHN5bWJvbDogSmltdVN5bWJvbCwgdHlwZTogc3RyaW5nKSA9PiB7XHJcbiAgICB0aGlzLmRlZmF1bHRTeW1ib2xPcHRpb24gPSB0aGlzLmRlZmF1bHRTeW1ib2xPcHRpb24uc2V0KHR5cGUsIHN5bWJvbD8udG9KU09OKCkpXHJcbiAgICBpZiAoIXRoaXMucHJvcHMuY29uZmlnLnN5bWJvbE9wdGlvbiAmJlxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFN5bWJvbE9wdGlvbi5wb2ludFN5bWJvbCAmJlxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFN5bWJvbE9wdGlvbi5wb2x5bGluZVN5bWJvbCAmJlxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFN5bWJvbE9wdGlvbi5wb2x5Z29uU3ltYm9sKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgLi4udGhpcy5wcm9wcy5jb25maWcuc2V0KCdzeW1ib2xPcHRpb24nLCB0aGlzLmRlZmF1bHRTeW1ib2xPcHRpb24pIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblN5bWJvbENoYW5nZWQgPSAoc3ltYm9sOiBKaW11U3ltYm9sLCB0eXBlOiBzdHJpbmcpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgLi4udGhpcy5wcm9wcy5jb25maWcuc2V0SW4oWydzeW1ib2xPcHRpb24nLCB0eXBlXSwgc3ltYm9sLnRvSlNPTigpKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldEluaXRTeW1ib2xGcm9tQ29uZmlnID0gKGppbXVTeW1ib2xUeXBlOiBKaW11U3ltYm9sVHlwZSk6IEppbXVTeW1ib2wgPT4ge1xyXG4gICAgbGV0IHN5bWJvbFxyXG4gICAgY29uc3Qgc3ltYm9sT3B0aW9uID0gdGhpcy5wcm9wcy5jb25maWcuc3ltYm9sT3B0aW9uXHJcbiAgICBpZiAodGhpcy5qc29uVXRpbHMpIHtcclxuICAgICAgaWYgKGppbXVTeW1ib2xUeXBlID09PSBKaW11U3ltYm9sVHlwZS5Qb2ludCkge1xyXG4gICAgICAgIHN5bWJvbCA9IHN5bWJvbE9wdGlvbj8ucG9pbnRTeW1ib2wgPyBzeW1ib2xPcHRpb24ucG9pbnRTeW1ib2wgOiBmZWF0dXJlVXRpbHMuZ2V0RGVmYXVsdFN5bWJvbCgncG9pbnQnKVxyXG4gICAgICB9IGVsc2UgaWYgKGppbXVTeW1ib2xUeXBlID09PSBKaW11U3ltYm9sVHlwZS5Qb2x5bGluZSkge1xyXG4gICAgICAgIHN5bWJvbCA9IHN5bWJvbE9wdGlvbj8ucG9seWxpbmVTeW1ib2wgPyBzeW1ib2xPcHRpb24ucG9seWxpbmVTeW1ib2wgOiBmZWF0dXJlVXRpbHMuZ2V0RGVmYXVsdFN5bWJvbCgncG9seWxpbmUnKVxyXG4gICAgICB9IGVsc2UgaWYgKGppbXVTeW1ib2xUeXBlID09PSBKaW11U3ltYm9sVHlwZS5Qb2x5Z29uKSB7XHJcbiAgICAgICAgc3ltYm9sID0gc3ltYm9sT3B0aW9uPy5wb2x5Z29uU3ltYm9sID8gc3ltYm9sT3B0aW9uLnBvbHlnb25TeW1ib2wgOiBmZWF0dXJlVXRpbHMuZ2V0RGVmYXVsdFN5bWJvbCgncG9seWdvbicpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIHJldHVybiBzeW1ib2wgPyB0aGlzLmpzb25VdGlscy5mcm9tSlNPTihzeW1ib2wpIDogbnVsbFxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHBvaW50TGFiZWwgPSB0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX1BvaW50JywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fUG9pbnQgfSlcclxuICAgIGNvbnN0IHBvbHlsaW5lTGFiZWwgPSB0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX1BvbHlsaW5lJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fUG9seWxpbmUgfSlcclxuICAgIGNvbnN0IHBvbHlnb25MYWJlbCA9IHRoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fUG9seWdvbicsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX1BvbHlnb24gfSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTEwMCc+XHJcbiAgICAgICAgPFNldHRpbmdTZWN0aW9uPlxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gdy0xMDAgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCc+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gY2hlY2tlZD17IXRoaXMucHJvcHMuY29uZmlnLmlzVXNlQ3VzdG9tU3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4geyB0aGlzLmhhbmRsZUlzVXNlQ3VzdG9tU3ltYm9sT3B0aW9uKGZhbHNlKSB9fVxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9J3VzZUxheWVyRGVmaW5lZExhYmVsJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBpZD0ndXNlTGF5ZXJEZWZpbmVkTGFiZWwnIGNsYXNzTmFtZT0nbS0wIG1sLTInIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9Vc2VMYXllckRlZmluZWRTeW1ib2xzJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fVXNlTGF5ZXJEZWZpbmVkU3ltYm9scyB9KX1cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gdy0xMDAgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCc+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gY2hlY2tlZD17dGhpcy5wcm9wcy5jb25maWcuaXNVc2VDdXN0b21TeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7IHRoaXMuaGFuZGxlSXNVc2VDdXN0b21TeW1ib2xPcHRpb24odHJ1ZSkgfX1cclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PSd1c2VDdXN0b21MYWJlbCdcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaWQ9J3VzZUN1c3RvbUxhYmVsJyBjbGFzc05hbWU9J20tMCBtbC0yJyBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fVXNlQ3VzdG9tU3ltYm9scycsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX1VzZUN1c3RvbVN5bWJvbHMgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmNvbmZpZy5pc1VzZUN1c3RvbVN5bWJvbCAmJiB0aGlzLmpzb25VdGlscyAmJiA8U2V0dGluZ1NlY3Rpb24gY2xhc3NOYW1lPSdwYi0wJz5cclxuICAgICAgICAgICAgPFNldHRpbmdSb3cgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWFyb3VuZCc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N5bWJvbC1zZWxlY3RvciBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIHctMjUnIHRpdGxlID17cG9pbnRMYWJlbH0+XHJcbiAgICAgICAgICAgICAgICA8U3ltYm9sU2VsZWN0b3IgamltdVN5bWJvbFR5cGU9e0ppbXVTeW1ib2xUeXBlLlBvaW50fSBzeW1ib2w9e3RoaXMuZ2V0SW5pdFN5bWJvbEZyb21Db25maWcoSmltdVN5bWJvbFR5cGUuUG9pbnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DcmVhdGVkPXsgKHN5bWJvbFBhcmFtKSA9PiB7IHRoaXMub25TeW1ib2xDcmVhdGVkKHN5bWJvbFBhcmFtLnN5bWJvbCwgJ3BvaW50U3ltYm9sJykgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50U3ltYm9sQ2hhbmdlZD17IChzeW1ib2wpID0+IHsgdGhpcy5vblN5bWJvbENoYW5nZWQoc3ltYm9sLCAncG9pbnRTeW1ib2wnKSB9IH0vPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbS0wIG1sLTAgdy0xMDAgZC1ibG9jayB0ZXh0LWNlbnRlcicgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIG92ZXJmbG93OiAnaGlkZGVuJywgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fT5cclxuICAgICAgICAgICAgICAgICAge3BvaW50TGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzeW1ib2wtc2VsZWN0b3IgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciB3LTI1JyB0aXRsZT17cG9seWxpbmVMYWJlbH0+XHJcbiAgICAgICAgICAgICAgICA8U3ltYm9sU2VsZWN0b3IgamltdVN5bWJvbFR5cGU9e0ppbXVTeW1ib2xUeXBlLlBvbHlsaW5lfSBzeW1ib2w9e3RoaXMuZ2V0SW5pdFN5bWJvbEZyb21Db25maWcoSmltdVN5bWJvbFR5cGUuUG9seWxpbmUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DcmVhdGVkPXsgKHN5bWJvbFBhcmFtKSA9PiB7IHRoaXMub25TeW1ib2xDcmVhdGVkKHN5bWJvbFBhcmFtLnN5bWJvbCwgJ3BvbHlsaW5lU3ltYm9sJykgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvbHlsaW5lU3ltYm9sQ2hhbmdlZD17IChzeW1ib2wpID0+IHsgdGhpcy5vblN5bWJvbENoYW5nZWQoc3ltYm9sLCAncG9seWxpbmVTeW1ib2wnKSB9IH0vPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbS0wIG1sLTAgdy0xMDAgZC1ibG9jayB0ZXh0LWNlbnRlcicgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIG92ZXJmbG93OiAnaGlkZGVuJywgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fT5cclxuICAgICAgICAgICAgICAgICAge3BvbHlsaW5lTGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzeW1ib2wtc2VsZWN0b3IgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciB3LTI1JyB0aXRsZT17cG9seWdvbkxhYmVsfT5cclxuICAgICAgICAgICAgICAgIDxTeW1ib2xTZWxlY3RvciBqaW11U3ltYm9sVHlwZT17SmltdVN5bWJvbFR5cGUuUG9seWdvbn0gc3ltYm9sPXt0aGlzLmdldEluaXRTeW1ib2xGcm9tQ29uZmlnKEppbXVTeW1ib2xUeXBlLlBvbHlnb24pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNyZWF0ZWQ9eyAoc3ltYm9sUGFyYW0pID0+IHsgdGhpcy5vblN5bWJvbENyZWF0ZWQoc3ltYm9sUGFyYW0uc3ltYm9sLCAncG9seWdvblN5bWJvbCcpIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvbHlnb25TeW1ib2xDaGFuZ2VkPXsgKHN5bWJvbCkgPT4geyB0aGlzLm9uU3ltYm9sQ2hhbmdlZChzeW1ib2wsICdwb2x5Z29uU3ltYm9sJykgfSB9Lz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J20tMCBtbC0wIHctMTAwIGQtYmxvY2sgdGV4dC1jZW50ZXInIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBvdmVyZmxvdzogJ2hpZGRlbicsIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtwb2x5Z29uTGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICA8L1NldHRpbmdTZWN0aW9uPn1cclxuICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluamVjdEludGwoX1Nob3dPbk1hcFNldHRpbmcpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==