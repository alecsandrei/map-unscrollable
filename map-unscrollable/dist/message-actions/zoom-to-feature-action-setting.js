System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector","jimu-theme","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_theme__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_theme__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_theme__[key] = module[key];
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

/***/ "./your-extensions/widgets/map-unscrollable/src/message-actions/action-utils.ts":
/*!**************************************************************************************!*\
  !*** ./your-extensions/widgets/map-unscrollable/src/message-actions/action-utils.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkIsOnlyOneDs: () => (/* binding */ checkIsOnlyOneDs),
/* harmony export */   checkOutActionConfig: () => (/* binding */ checkOutActionConfig),
/* harmony export */   getAppConfig: () => (/* binding */ getAppConfig),
/* harmony export */   getDsByWidgetId: () => (/* binding */ getDsByWidgetId),
/* harmony export */   getMessageCarryDataByWidgetId: () => (/* binding */ getMessageCarryDataByWidgetId),
/* harmony export */   getUseDataSourceInfo: () => (/* binding */ getUseDataSourceInfo),
/* harmony export */   initOutputDataSources: () => (/* binding */ initOutputDataSources),
/* harmony export */   isUseOutputDataSources: () => (/* binding */ isUseOutputDataSources)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");


function isUseOutputDataSources(wId, messageType) {
    const messageCarryData = getMessageCarryDataByWidgetId(wId, messageType);
    return messageCarryData === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageCarryData.OutputDataSource;
}
function getMessageCarryDataByWidgetId(wId, messageType) {
    var _a, _b;
    const appConfig = getAppConfig();
    const widgetJson = (_a = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _a === void 0 ? void 0 : _a[wId];
    const publishMessages = (_b = widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.manifest) === null || _b === void 0 ? void 0 : _b.publishMessages;
    let messageCarryData = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageCarryData.UseDataSource;
    publishMessages === null || publishMessages === void 0 ? void 0 : publishMessages.forEach(el => {
        const publishMessageProperty = el;
        if ((publishMessageProperty === null || publishMessageProperty === void 0 ? void 0 : publishMessageProperty.messageCarryData) && (publishMessageProperty === null || publishMessageProperty === void 0 ? void 0 : publishMessageProperty.messageType) === messageType) {
            messageCarryData = publishMessageProperty === null || publishMessageProperty === void 0 ? void 0 : publishMessageProperty.messageCarryData;
        }
    });
    return messageCarryData;
}
function checkOutActionConfig(actionConfig, messageWidgetId, messageType) {
    const config = getAppConfig();
    //const messageWidgetJson = config.widgets[messageWidgetId]
    let useDataSource = null;
    const useDataSources = [];
    if (!actionConfig.useDataSource) {
        const messageWidgetUseDataSources = getDsByWidgetId(messageWidgetId, messageType);
        //if (messageWidgetJson && messageWidgetJson.useDataSources && messageWidgetJson.useDataSources.length > 0) {
        if (messageWidgetUseDataSources.length > 0) {
            messageWidgetUseDataSources.forEach((useDS, index) => {
                const dsJson = config.dataSources[useDS.dataSourceId];
                let tempUseDataSource;
                if (dsJson && ((dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ArcGISDataSourceTypes.WebMap) || (dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ArcGISDataSourceTypes.WebScene))) {
                    tempUseDataSource = null;
                }
                else {
                    tempUseDataSource = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                        dataSourceId: useDS.dataSourceId,
                        mainDataSourceId: useDS.mainDataSourceId,
                        rootDataSourceId: useDS.rootDataSourceId,
                        dataViewId: useDS.dataViewId
                    });
                    if (!useDataSource) {
                        useDataSource = tempUseDataSource;
                    }
                    useDataSources.push(tempUseDataSource);
                }
            });
        }
    }
    else {
        useDataSource = checkOutUseDataSource(messageWidgetId, actionConfig.useDataSource, messageType);
        if (actionConfig.useDataSources) {
            actionConfig.useDataSources.forEach(useDS => {
                const tempUseDataSource = checkOutUseDataSource(messageWidgetId, useDS, messageType);
                tempUseDataSource && useDataSources.push(tempUseDataSource);
            });
        }
    }
    return {
        useDataSource: useDataSource,
        useDataSources: useDataSources
    };
}
function checkOutUseDataSource(messageWidgetId, oldUseDataSource, messageType) {
    var _a, _b, _c, _d;
    const config = getAppConfig();
    //const widgetJson = config.widgets[messageWidgetId]
    const messageWidgetUseDataSources = getDsByWidgetId(messageWidgetId, messageType);
    let initUseDataSource = null;
    let isMapDs = false;
    const dsId = messageWidgetUseDataSources && messageWidgetUseDataSources[0] && messageWidgetUseDataSources[0].dataSourceId;
    if (!dsId) {
        return null;
    }
    const dsJson = config.dataSources[dsId];
    if (dsJson && ((dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ArcGISDataSourceTypes.WebMap) || (dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ArcGISDataSourceTypes.WebScene))) {
        isMapDs = true;
    }
    const dsM = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
    const isoldUseDataSourceIsOutputDs = (_b = (_a = dsM.getDataSource(oldUseDataSource.dataSourceId)) === null || _a === void 0 ? void 0 : _a.getDataSourceJson()) === null || _b === void 0 ? void 0 : _b.isOutputFromWidget;
    if (isMapDs) {
        // webmap or webscene ds
        let isUseOldDs = false;
        if (messageWidgetUseDataSources) {
            for (let i = 0; i < messageWidgetUseDataSources.length; i++) {
                if (messageWidgetUseDataSources[i].dataSourceId === oldUseDataSource.rootDataSourceId) {
                    isUseOldDs = true;
                    break;
                }
            }
        }
        if (isUseOldDs) {
            initUseDataSource = oldUseDataSource;
        }
        else {
            initUseDataSource = null;
        }
    }
    else {
        // featurelayer ds
        let isUseOldDs = false;
        if (messageWidgetUseDataSources) {
            for (let i = 0; i < messageWidgetUseDataSources.length; i++) {
                const oldUseDataSourceId = isoldUseDataSourceIsOutputDs ? oldUseDataSource === null || oldUseDataSource === void 0 ? void 0 : oldUseDataSource.mainDataSourceId : oldUseDataSource === null || oldUseDataSource === void 0 ? void 0 : oldUseDataSource.dataSourceId;
                const currentUseDataSourceId = isoldUseDataSourceIsOutputDs ? (_c = messageWidgetUseDataSources[i]) === null || _c === void 0 ? void 0 : _c.mainDataSourceId : (_d = messageWidgetUseDataSources[i]) === null || _d === void 0 ? void 0 : _d.dataSourceId;
                // support data view
                if (currentUseDataSourceId === oldUseDataSourceId) {
                    isUseOldDs = true;
                    break;
                }
            }
        }
        if (isUseOldDs) {
            initUseDataSource = oldUseDataSource;
        }
        else {
            if (messageWidgetUseDataSources && messageWidgetUseDataSources.length === 1) {
                initUseDataSource = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                    dataSourceId: messageWidgetUseDataSources[0].dataSourceId,
                    mainDataSourceId: messageWidgetUseDataSources[0].mainDataSourceId,
                    rootDataSourceId: messageWidgetUseDataSources[0].rootDataSourceId
                });
            }
            else {
                initUseDataSource = null;
            }
        }
    }
    return initUseDataSource;
}
function getUseDataSourceInfo(widgetId, useDataSource, useDataSources, messageType) {
    var _a;
    const appConfig = getAppConfig();
    const widgetJson = (_a = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _a === void 0 ? void 0 : _a[widgetId];
    let isReadOnly = false;
    const dsRootIds = getDsRootIdsByWidgetId(widgetId);
    //if (dsRootIds && dsRootIds.length === 0 && (widgetJson && widgetJson.useDataSources && widgetJson.useDataSources.length === 1)) {
    //  isReadOnly = true
    //}
    //if (!dsRootIds && (widgetJson && widgetJson.useDataSources && widgetJson.useDataSources.length === 1)) {
    //  isReadOnly = true
    //}
    if (!dsRootIds || (dsRootIds === null || dsRootIds === void 0 ? void 0 : dsRootIds.length) === 0) {
        isReadOnly = checkIsOnlyOneDs(widgetJson, messageType, dsRootIds);
    }
    const fromDsIds = dsRootIds ? undefined : getDsIdsByWidgetId(widgetId, messageType);
    const dsSelectorSource = {
        isReadOnly: isReadOnly,
        useDataSource: useDataSource,
        useDataSources: useDataSources || [],
        fromRootDsIds: dsRootIds,
        fromDsIds: fromDsIds
    };
    return dsSelectorSource;
}
function getDsByWidgetId(wId, messageType) {
    var _a;
    const messageCarryData = getMessageCarryDataByWidgetId(wId, messageType);
    const appConfig = getAppConfig();
    const widgetJson = (_a = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _a === void 0 ? void 0 : _a[wId];
    const useDataSources = (widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.useDataSources) || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
    const outputDataSources = initOutputDataSources(widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.outputDataSources) || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
    const bothDatasource = useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources.asMutable({ deep: true }).concat(outputDataSources === null || outputDataSources === void 0 ? void 0 : outputDataSources.asMutable({ deep: true }));
    switch (messageCarryData) {
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageCarryData.OutputDataSource:
            return outputDataSources;
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageCarryData.UseDataSource:
            return useDataSources;
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageCarryData.BothDataSource:
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(bothDatasource);
    }
}
function initOutputDataSources(outputDataSources) {
    var _a;
    const ds = (_a = outputDataSources === null || outputDataSources === void 0 ? void 0 : outputDataSources.map(dsId => {
        return {
            dataSourceId: dsId,
            mainDataSourceId: dsId,
            rootDataSourceId: null
        };
    })) !== null && _a !== void 0 ? _a : [];
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(ds);
}
function checkIsOnlyOneDs(widgetJson, messageType, dsRootIds) {
    const messageCarryData = getMessageCarryDataByWidgetId(widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.id, messageType);
    const outputDs = (widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.outputDataSources) || [];
    const useDs = (widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.useDataSources) || [];
    if (dsRootIds) {
        return false;
    }
    switch (messageCarryData) {
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageCarryData.OutputDataSource:
            return (outputDs === null || outputDs === void 0 ? void 0 : outputDs.length) === 1;
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageCarryData.UseDataSource:
            return (useDs === null || useDs === void 0 ? void 0 : useDs.length) === 1;
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageCarryData.BothDataSource:
            const dsLength = outputDs.length + useDs.length;
            return dsLength === 1;
    }
}
function getAppConfig() {
    var _a, _b, _c;
    return window.jimuConfig.isBuilder ? (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appStateInBuilder) === null || _b === void 0 ? void 0 : _b.appConfig : (_c = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _c === void 0 ? void 0 : _c.appConfig;
}
function getDsRootIdsByWidgetId(wId) {
    var _a, _b;
    const appConfig = getAppConfig();
    const widgetJson = (_a = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _a === void 0 ? void 0 : _a[wId];
    const rootIds = [];
    const dsM = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
    (_b = widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.useDataSources) === null || _b === void 0 ? void 0 : _b.forEach((useDS) => {
        const ds = dsM.getDataSource(useDS.dataSourceId);
        if ((ds === null || ds === void 0 ? void 0 : ds.type) === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ArcGISDataSourceTypes.WebMap || (ds === null || ds === void 0 ? void 0 : ds.type) === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ArcGISDataSourceTypes.WebScene) { // is root ds
            rootIds.push(useDS.dataSourceId);
        }
    });
    return rootIds.length > 0 ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(rootIds) : undefined;
}
function getDsIdsByWidgetId(wId, messageType) {
    var _a;
    const messageWidgetUseDataSources = getDsByWidgetId(wId, messageType);
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)((_a = messageWidgetUseDataSources.map((useDS) => {
        const dsM = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
        const ds = dsM.getDataSource(useDS.dataSourceId);
        let resultDs;
        if (ds && ds.isDataView) {
            // support data view
            resultDs = ds === null || ds === void 0 ? void 0 : ds.getMainDataSource();
        }
        else {
            resultDs = ds;
        }
        return resultDs === null || resultDs === void 0 ? void 0 : resultDs.id;
    })) !== null && _a !== void 0 ? _a : []);
}


/***/ }),

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

/***/ "jimu-theme":
/*!*****************************!*\
  !*** external "jimu-theme" ***!
  \*****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_theme__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

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
/*!*********************************************************************************************************!*\
  !*** ./your-extensions/widgets/map-unscrollable/src/message-actions/zoom-to-feature-action-setting.tsx ***!
  \*********************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../setting/translations/default */ "./your-extensions/widgets/map-unscrollable/src/setting/translations/default.ts");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _action_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action-utils */ "./your-extensions/widgets/map-unscrollable/src/message-actions/action-utils.ts");
/** @jsx jsx */







const DSSelectorTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.FeatureLayer, jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.SceneLayer]);
class _ZoomToFeatureActionSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.NoLockTriggerLayerWidgets = ['Map'];
        this.modalStyle = {
            position: 'absolute',
            top: '0',
            bottom: '0',
            width: '259px',
            height: 'auto',
            borderRight: '',
            borderBottom: '',
            paddingBottom: '1px'
        };
        this.handleTriggerLayerChange = (useDataSources) => {
            if (useDataSources && useDataSources.length > 0) {
                this.handleTriggerLayerSelected(useDataSources);
            }
            else {
                this.handleRemoveLayerForTriggerLayer();
            }
        };
        this.handleTriggerLayerSelected = (currentSelectedDs) => {
            // messageWidgetUseDataSources is widgets.widget_2.useDataSources.
            const messageWidgetUseDataSources = (0,_action_utils__WEBPACK_IMPORTED_MODULE_6__.getDsByWidgetId)(this.props.messageWidgetId, this.props.messageType);
            let finalSelectedDs = null;
            const appConfig = (0,_action_utils__WEBPACK_IMPORTED_MODULE_6__.getAppConfig)();
            const widgetsInfo = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets;
            const messageWidgetInfo = widgetsInfo && widgetsInfo[this.props.messageWidgetId];
            if (this.props.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange && messageWidgetInfo && messageWidgetInfo.uri && messageWidgetInfo.uri.includes('arcgis-map')) {
                // Map widget supports publishing 'EXTENT_CHANGE' and 'DATA_RECORDS_SELECTION_CHANGE' messages and Map widget only stores WebMap or WebScene data sources in useDataSources.
                // So if the message widget is Map widget, we can't filter messageWidgetUseDataSources (WebMap or WebScene ds) by currentSelectedDs(layer ds).
                finalSelectedDs = currentSelectedDs;
            }
            else {
                // The following code logic will filter messageWidgetUseDataSources by currentSelectedDs.
                // supports data view
                // finalSelectedDs is used to update appConfig.messageConfigs.messageConfig_1.actions[0].config.useDataSources and we must make sure finalSelectedDs is the subset of messageWidgetUseDataSources.
                // When the user selects a new data source from the DataSourceSelector, the DataSourceSelector.onChange(currentSelectedDs) event will be triggered.
                // currentSelectedDs contains the newly selected data source, but the newly selected data source must be the default view.
                // But the useDataSources configured in the widget may not be default view, so we can't use currentSelectedDs as finalSelectedDs directly.
                // To make sure finalSelectedDs is the subset of messageWidgetUseDataSources, it is necessary to filter messageWidgetUseDataSources by currentSelectedDs.
                finalSelectedDs = messageWidgetUseDataSources.filter(messageWidgetUseDataSource => {
                    const dataSource = currentSelectedDs.find(ds => {
                        var _a;
                        if ((!ds.dataViewId || ds.dataViewId === jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.OUTPUT_DATA_VIEW_ID) && !((_a = this.props.config.useDataSources) === null || _a === void 0 ? void 0 : _a.find(preDs => ds.mainDataSourceId === preDs.mainDataSourceId))) {
                            // select ds from ds list
                            return ds.mainDataSourceId === messageWidgetUseDataSource.mainDataSourceId;
                        }
                        else {
                            // select ds from data view check box
                            return ds.dataSourceId === messageWidgetUseDataSource.dataSourceId;
                        }
                    });
                    if (dataSource) {
                        return true;
                    }
                    else {
                        return false;
                    }
                });
            }
            let config = this.props.config.set('useDataSource', finalSelectedDs[0]);
            // supports multiple trigger
            config = config.set('useDataSources', finalSelectedDs);
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: config
            });
        };
        this.handleRemoveLayerForTriggerLayer = () => {
            let config = this.props.config.set('useDataSource', null);
            // supports multiple trigger
            config = config.set('useDataSources', []);
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: config
            });
        };
        this.handleIsUseCustomZoomToOption = (isUseCustomZoomToOption) => {
            if (isUseCustomZoomToOption) {
                if (!this.props.config.zoomToOption || !this.props.config.zoomToOption.scale) {
                    this.props.onSettingChange({
                        actionId: this.props.actionId,
                        config: this.props.config.set('isUseCustomZoomToOption', isUseCustomZoomToOption).setIn(['zoomToOption', 'scale'], 5000)
                    });
                    return;
                }
            }
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: this.props.config.set('isUseCustomZoomToOption', isUseCustomZoomToOption)
            });
        };
        this.handleSetCustomZoomScale = (value) => {
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: this.props.config.setIn(['zoomToOption', 'scale'], value)
            });
        };
        this.getTriggerLayerContent = () => {
            //const triggerDsSelectorSourceData = this.getDsSelectorSourceData(this.props.messageWidgetId, this.props.config.useDataSource, this.props.config.useDataSources)
            const triggerDsSelectorSourceData = (0,_action_utils__WEBPACK_IMPORTED_MODULE_6__.getUseDataSourceInfo)(this.props.messageWidgetId, this.props.config.useDataSource, this.props.config.useDataSources, this.props.messageType);
            let useDataSources;
            if (this.checkIsSupportMultipleTriggerDataSources(this.props.messageWidgetId) || triggerDsSelectorSourceData.useDataSources) {
                useDataSources = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(triggerDsSelectorSourceData.useDataSources);
            }
            else {
                useDataSources = triggerDsSelectorSourceData.useDataSource ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([triggerDsSelectorSourceData.useDataSource]) : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
            }
            const isDisableDataView = this.checkIsDisableDataView(this.props.messageWidgetId);
            const isDisableDataSourceList = triggerDsSelectorSourceData.isReadOnly && isDisableDataView;
            // if DataSourceSelector.props.disableDataSourceList is true, means DataSourceSelector's 'Select data' button is disabled.
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__.DataSourceSelector, { types: DSSelectorTypes, useDataSources: useDataSources, fromRootDsIds: triggerDsSelectorSourceData.fromRootDsIds, fromDsIds: triggerDsSelectorSourceData.fromDsIds, hideAddDataButton: true, hideTypeDropdown: true, mustUseDataSource: true, disableRemove: () => triggerDsSelectorSourceData.isReadOnly, disableDataSourceList: isDisableDataSourceList, onChange: this.handleTriggerLayerChange, widgetId: this.props.messageWidgetId, disableDataView: false, hideDataView: ((dataViewJson, mainDataSourceId) => {
                    const messageWidgetUseDataSources = (0,_action_utils__WEBPACK_IMPORTED_MODULE_6__.getDsByWidgetId)(this.props.messageWidgetId, this.props.messageType);
                    const filteredMessageWidgetUseDataSources = messageWidgetUseDataSources.filter(messageWidgetUseDataSource => {
                        return messageWidgetUseDataSource.mainDataSourceId === mainDataSourceId;
                    });
                    const targetDsView = filteredMessageWidgetUseDataSources.find(messageWidgetUseDataSource => {
                        let messageWidgetUseDataSourceDataViewId;
                        if (messageWidgetUseDataSource.dataViewId) {
                            messageWidgetUseDataSourceDataViewId = messageWidgetUseDataSource.dataViewId;
                        }
                        else {
                            messageWidgetUseDataSourceDataViewId = jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_DATA_VIEW_ID;
                        }
                        return messageWidgetUseDataSourceDataViewId === dataViewJson.id;
                    });
                    return !targetDsView;
                }), isMultiple: this.checkIsSupportMultipleTriggerDataSources(this.props.messageWidgetId), isMultipleDataView: true, hideCreateViewButton: true, enableToSelectOutputDsFromSelf: true }));
        };
        this.checkIsSupportMultipleTriggerDataSources = (widgetId) => {
            var _a, _b, _c, _d;
            const appConfig = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appStateInBuilder) === null || _b === void 0 ? void 0 : _b.appConfig;
            const widgetJson = (_c = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _c === void 0 ? void 0 : _c[widgetId];
            const messageWidgetUseDataSources = (0,_action_utils__WEBPACK_IMPORTED_MODULE_6__.getDsByWidgetId)(this.props.messageWidgetId, this.props.messageType);
            const widgetLabel = (_d = widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.manifest) === null || _d === void 0 ? void 0 : _d.label;
            if (widgetLabel === 'Map') {
                return true;
            }
            else {
                if (messageWidgetUseDataSources.length > 1) {
                    return this.props.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange || this.props.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange;
                }
                else {
                    return false;
                }
            }
        };
        this.checkIsDisableDataView = (widgetId) => {
            if (this.props.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange) {
                return true;
            }
            //const appConfig = getAppStore().getState()?.appStateInBuilder?.appConfig
            //const widgetJson = appConfig?.widgets?.[widgetId]
            //if (widgetJson) {
            //  const widgetLabel = widgetJson?.manifest?.label
            //  if (widgetLabel === 'Map') {
            //    return true
            //  } else {
            //    return false
            //  }
            //} else {
            //  return false
            //}
        };
        this.modalStyle.borderRight = '1px solid black';
        this.modalStyle.borderBottom = '1px solid black';
        this.state = {
            isShowLayerList: false,
            disableDataTrigger: props.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordSetChange
        };
    }
    componentDidMount() {
        //const initConfig = this.getInitConfig()
        const initConfig = (0,_action_utils__WEBPACK_IMPORTED_MODULE_6__.checkOutActionConfig)(this.props.config, this.props.messageWidgetId, this.props.messageType);
        let config = this.props.config.set('useDataSource', initConfig.useDataSource);
        config = config.set('useDataSources', initConfig.useDataSources);
        this.props.onSettingChange({
            actionId: this.props.actionId,
            config: config
        });
    }
    getStyle(theme) {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      .setting-header {
        padding: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(10)} ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(16)} ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(0)} ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(16)}
      }

      .deleteIcon {
        cursor: pointer;
        opacity: .8;
      }

      .deleteIcon:hover {
        opacity: 1;
      }
    `;
    }
    render() {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: this.getStyle(this.props.theme) },
            !this.state.disableDataTrigger && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: this.props.intl.formatMessage({ id: 'mapAction_TriggerLayer', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_TriggerLayer }) }, this.getTriggerLayerContent()),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: this.props.intl.formatMessage({ id: 'mapZoomToAction_ZoomScale', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapZoomToAction_ZoomScale }) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-between w-100 align-items-center' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'align-items-center d-flex' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { style: { cursor: 'pointer' }, checked: !this.props.config.isUseCustomZoomToOption, onChange: () => { this.handleIsUseCustomZoomToOption(false); } }),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: 'm-0 ml-2', style: { cursor: 'pointer' } }, this.props.intl.formatMessage({ id: 'mapZoomToAction_Automatic', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapZoomToAction_Automatic }))))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-between w-100 align-items-center' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'align-items-center d-flex' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { style: { cursor: 'pointer' }, checked: this.props.config.isUseCustomZoomToOption, onChange: () => { this.handleIsUseCustomZoomToOption(true); } }),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: 'm-0 ml-2', style: { cursor: 'pointer' } }, this.props.intl.formatMessage({ id: 'mapZoomToAction_Custom', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapZoomToAction_Custom }))))),
                this.props.config.isUseCustomZoomToOption && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { className: 'w-100', placeholder: this.props.intl.formatMessage({ id: 'mapZoomToAction_TypeScale', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapZoomToAction_TypeScale }), value: this.props.config.zoomToOption && this.props.config.zoomToOption.scale, onChange: this.handleSetCustomZoomScale })))));
    }
}
_ZoomToFeatureActionSetting.defaultProps = {
    config: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
        useDataSource: null
    })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,jimu_theme__WEBPACK_IMPORTED_MODULE_5__.withTheme)(_ZoomToFeatureActionSetting));

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXAtdW5zY3JvbGxhYmxlL2Rpc3QvbWVzc2FnZS1hY3Rpb25zL3pvb20tdG8tZmVhdHVyZS1hY3Rpb24tc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyTDtBQUN4STtBQUU1QyxTQUFTLHNCQUFzQixDQUFFLEdBQVcsRUFBRSxXQUF3QjtJQUMzRSxNQUFNLGdCQUFnQixHQUFHLDZCQUE2QixDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUM7SUFDeEUsT0FBTyxnQkFBZ0IsS0FBSyx1REFBZ0IsQ0FBQyxnQkFBZ0I7QUFDL0QsQ0FBQztBQUVNLFNBQVMsNkJBQTZCLENBQUUsR0FBVyxFQUFFLFdBQXdCOztJQUNsRixNQUFNLFNBQVMsR0FBRyxZQUFZLEVBQUU7SUFDaEMsTUFBTSxVQUFVLEdBQUcsZUFBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLE9BQU8sMENBQUcsR0FBRyxDQUFDO0lBQzVDLE1BQU0sZUFBZSxHQUFHLGdCQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsUUFBUSwwQ0FBRSxlQUFlO0lBQzdELElBQUksZ0JBQWdCLEdBQUcsdURBQWdCLENBQUMsYUFBYTtJQUNyRCxlQUFlLGFBQWYsZUFBZSx1QkFBZixlQUFlLENBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQzVCLE1BQU0sc0JBQXNCLEdBQUcsRUFBUztRQUN4QyxJQUFJLHVCQUFzQixhQUF0QixzQkFBc0IsdUJBQXRCLHNCQUFzQixDQUFFLGdCQUFnQixLQUFJLHVCQUFzQixhQUF0QixzQkFBc0IsdUJBQXRCLHNCQUFzQixDQUFFLFdBQVcsTUFBSyxXQUFXLEVBQUUsQ0FBQztZQUNwRyxnQkFBZ0IsR0FBRyxzQkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxnQkFBZ0I7UUFDN0QsQ0FBQztJQUNILENBQUMsQ0FBQztJQUNGLE9BQU8sZ0JBQWdCO0FBQ3pCLENBQUM7QUFPTSxTQUFTLG9CQUFvQixDQUFFLFlBQXFELEVBQUUsZUFBdUIsRUFBRSxXQUF3QjtJQUM1SSxNQUFNLE1BQU0sR0FBRyxZQUFZLEVBQUU7SUFDN0IsMkRBQTJEO0lBRTNELElBQUksYUFBYSxHQUFvQixJQUFJO0lBQ3pDLE1BQU0sY0FBYyxHQUFzQixFQUFFO0lBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDaEMsTUFBTSwyQkFBMkIsR0FBRyxlQUFlLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQztRQUNqRiw2R0FBNkc7UUFDN0csSUFBSSwyQkFBMkIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDM0MsMkJBQTJCLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUNuRCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7Z0JBQ3JELElBQUksaUJBQWlCO2dCQUNyQixJQUFJLE1BQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyw4REFBcUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssOERBQXFCLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUNuSCxpQkFBaUIsR0FBRyxJQUFJO2dCQUMxQixDQUFDO3FCQUFNLENBQUM7b0JBQ04saUJBQWlCLEdBQUcsb0RBQVMsQ0FBQzt3QkFDNUIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO3dCQUNoQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO3dCQUN4QyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO3dCQUN4QyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7cUJBQzdCLENBQUM7b0JBQ0YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO3dCQUNuQixhQUFhLEdBQUcsaUJBQWlCO29CQUNuQyxDQUFDO29CQUNELGNBQWMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3hDLENBQUM7WUFDSCxDQUFDLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztTQUFNLENBQUM7UUFDTixhQUFhLEdBQUcscUJBQXFCLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDO1FBQy9GLElBQUksWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2hDLFlBQVksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMxQyxNQUFNLGlCQUFpQixHQUFHLHFCQUFxQixDQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDO2dCQUNwRixpQkFBaUIsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQzdELENBQUMsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNMLGFBQWEsRUFBRSxhQUFhO1FBQzVCLGNBQWMsRUFBRSxjQUFjO0tBQy9CO0FBQ0gsQ0FBQztBQUVELFNBQVMscUJBQXFCLENBQUUsZUFBdUIsRUFBRSxnQkFBMEQsRUFBRSxXQUF3Qjs7SUFDM0ksTUFBTSxNQUFNLEdBQUcsWUFBWSxFQUFFO0lBQzdCLG9EQUFvRDtJQUNwRCxNQUFNLDJCQUEyQixHQUFHLGVBQWUsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDO0lBQ2pGLElBQUksaUJBQWlCLEdBQUcsSUFBSTtJQUM1QixJQUFJLE9BQU8sR0FBRyxLQUFLO0lBRW5CLE1BQU0sSUFBSSxHQUFHLDJCQUEyQixJQUFJLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxJQUFJLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVk7SUFDekgsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1YsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUVELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3ZDLElBQUksTUFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLDhEQUFxQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyw4REFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbkgsT0FBTyxHQUFHLElBQUk7SUFDaEIsQ0FBQztJQUVELE1BQU0sR0FBRyxHQUFHLHdEQUFpQixDQUFDLFdBQVcsRUFBRTtJQUMzQyxNQUFNLDRCQUE0QixHQUFHLGVBQUcsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLDBDQUFFLGlCQUFpQixFQUFFLDBDQUFFLGtCQUFrQjtJQUU5SCxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ1osd0JBQXdCO1FBQ3hCLElBQUksVUFBVSxHQUFHLEtBQUs7UUFDdEIsSUFBSSwyQkFBMkIsRUFBRSxDQUFDO1lBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRywyQkFBMkIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDNUQsSUFBSSwyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEtBQUssZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztvQkFDdEYsVUFBVSxHQUFHLElBQUk7b0JBQ2pCLE1BQUs7Z0JBQ1AsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUNmLGlCQUFpQixHQUFHLGdCQUFnQjtRQUN0QyxDQUFDO2FBQU0sQ0FBQztZQUNOLGlCQUFpQixHQUFHLElBQUk7UUFDMUIsQ0FBQztJQUNILENBQUM7U0FBTSxDQUFDO1FBQ04sa0JBQWtCO1FBQ2xCLElBQUksVUFBVSxHQUFHLEtBQUs7UUFDdEIsSUFBSSwyQkFBMkIsRUFBRSxDQUFDO1lBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRywyQkFBMkIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDNUQsTUFBTSxrQkFBa0IsR0FBRyw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLGFBQWhCLGdCQUFnQix1QkFBaEIsZ0JBQWdCLENBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixhQUFoQixnQkFBZ0IsdUJBQWhCLGdCQUFnQixDQUFFLFlBQVk7Z0JBQzdILE1BQU0sc0JBQXNCLEdBQUcsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLGlDQUEyQixDQUFDLENBQUMsQ0FBQywwQ0FBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsaUNBQTJCLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFlBQVk7Z0JBQzdKLG9CQUFvQjtnQkFDcEIsSUFBSSxzQkFBc0IsS0FBSyxrQkFBa0IsRUFBRSxDQUFDO29CQUNsRCxVQUFVLEdBQUcsSUFBSTtvQkFDakIsTUFBSztnQkFDUCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQ2YsaUJBQWlCLEdBQUcsZ0JBQWdCO1FBQ3RDLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSwyQkFBMkIsSUFBSSwyQkFBMkIsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQzVFLGlCQUFpQixHQUFHLG9EQUFTLENBQUM7b0JBQzVCLFlBQVksRUFBRSwyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO29CQUN6RCxnQkFBZ0IsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7b0JBQ2pFLGdCQUFnQixFQUFFLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjtpQkFDbEUsQ0FBQztZQUNKLENBQUM7aUJBQU0sQ0FBQztnQkFDTixpQkFBaUIsR0FBRyxJQUFJO1lBQzFCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU8saUJBQWlCO0FBQzFCLENBQUM7QUFFTSxTQUFTLG9CQUFvQixDQUFFLFFBQWdCLEVBQUUsYUFBdUQsRUFBRSxjQUF1RCxFQUFFLFdBQXdCOztJQUNoTSxNQUFNLFNBQVMsR0FBRyxZQUFZLEVBQUU7SUFDaEMsTUFBTSxVQUFVLEdBQUcsZUFBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLE9BQU8sMENBQUcsUUFBUSxDQUFDO0lBQ2pELElBQUksVUFBVSxHQUFHLEtBQUs7SUFDdEIsTUFBTSxTQUFTLEdBQUcsc0JBQXNCLENBQUMsUUFBUSxDQUFDO0lBQ2xELG1JQUFtSTtJQUNuSSxxQkFBcUI7SUFDckIsR0FBRztJQUVILDBHQUEwRztJQUMxRyxxQkFBcUI7SUFDckIsR0FBRztJQUVILElBQUksQ0FBQyxTQUFTLElBQUksVUFBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLE1BQU0sTUFBSyxDQUFDLEVBQUUsQ0FBQztRQUMxQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUM7SUFDbkUsQ0FBQztJQUVELE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDO0lBQ25GLE1BQU0sZ0JBQWdCLEdBQUc7UUFDdkIsVUFBVSxFQUFFLFVBQVU7UUFDdEIsYUFBYSxFQUFFLGFBQWE7UUFDNUIsY0FBYyxFQUFFLGNBQWMsSUFBSSxFQUFFO1FBQ3BDLGFBQWEsRUFBRSxTQUFTO1FBQ3hCLFNBQVMsRUFBRSxTQUFTO0tBQ3JCO0lBRUQsT0FBTyxnQkFBZ0I7QUFDekIsQ0FBQztBQUVNLFNBQVMsZUFBZSxDQUFFLEdBQVcsRUFBRSxXQUF3Qjs7SUFDcEUsTUFBTSxnQkFBZ0IsR0FBRyw2QkFBNkIsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDO0lBQ3hFLE1BQU0sU0FBUyxHQUFHLFlBQVksRUFBRTtJQUNoQyxNQUFNLFVBQVUsR0FBRyxlQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsT0FBTywwQ0FBRyxHQUFHLENBQUM7SUFDNUMsTUFBTSxjQUFjLEdBQUcsV0FBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLGNBQWMsS0FBSSxvREFBUyxDQUFDLEVBQUUsQ0FBQztJQUNsRSxNQUFNLGlCQUFpQixHQUFHLHFCQUFxQixDQUFDLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxpQkFBaUIsQ0FBQyxJQUFJLG9EQUFTLENBQUMsRUFBRSxDQUFDO0lBQy9GLE1BQU0sY0FBYyxHQUFHLGNBQWMsYUFBZCxjQUFjLHVCQUFkLGNBQWMsQ0FBRSxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsTUFBTSxDQUFDLGlCQUFpQixhQUFqQixpQkFBaUIsdUJBQWpCLGlCQUFpQixDQUFFLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JILFFBQVEsZ0JBQWdCLEVBQUUsQ0FBQztRQUN6QixLQUFLLHVEQUFnQixDQUFDLGdCQUFnQjtZQUNwQyxPQUFPLGlCQUFpQjtRQUMxQixLQUFLLHVEQUFnQixDQUFDLGFBQWE7WUFDakMsT0FBTyxjQUFjO1FBQ3ZCLEtBQUssdURBQWdCLENBQUMsY0FBYztZQUNsQyxPQUFPLG9EQUFTLENBQUMsY0FBYyxDQUFDO0lBQ3BDLENBQUM7QUFDSCxDQUFDO0FBRU0sU0FBUyxxQkFBcUIsQ0FBRSxpQkFBaUI7O0lBQ3RELE1BQU0sRUFBRSxHQUFHLHVCQUFpQixhQUFqQixpQkFBaUIsdUJBQWpCLGlCQUFpQixDQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN2QyxPQUFPO1lBQ0wsWUFBWSxFQUFFLElBQUk7WUFDbEIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixnQkFBZ0IsRUFBRSxJQUFJO1NBQ3ZCO0lBQ0gsQ0FBQyxDQUFDLG1DQUFJLEVBQUU7SUFDUixPQUFPLG9EQUFTLENBQUMsRUFBRSxDQUFDO0FBQ3RCLENBQUM7QUFFTSxTQUFTLGdCQUFnQixDQUFFLFVBQXdCLEVBQUUsV0FBd0IsRUFBRSxTQUFpQztJQUNySCxNQUFNLGdCQUFnQixHQUFHLDZCQUE2QixDQUFDLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxFQUFFLEVBQUUsV0FBVyxDQUFDO0lBQ25GLE1BQU0sUUFBUSxHQUFHLFdBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxpQkFBaUIsS0FBSSxFQUFFO0lBQ3BELE1BQU0sS0FBSyxHQUFHLFdBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxjQUFjLEtBQUksRUFBRTtJQUM5QyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ2QsT0FBTyxLQUFLO0lBQ2QsQ0FBQztJQUNELFFBQVEsZ0JBQWdCLEVBQUUsQ0FBQztRQUN6QixLQUFLLHVEQUFnQixDQUFDLGdCQUFnQjtZQUNwQyxPQUFPLFNBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxNQUFNLE1BQUssQ0FBQztRQUMvQixLQUFLLHVEQUFnQixDQUFDLGFBQWE7WUFDakMsT0FBTyxNQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsTUFBTSxNQUFLLENBQUM7UUFDNUIsS0FBSyx1REFBZ0IsQ0FBQyxjQUFjO1lBQ2xDLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU07WUFDL0MsT0FBTyxRQUFRLEtBQUssQ0FBQztJQUN6QixDQUFDO0FBQ0gsQ0FBQztBQUVNLFNBQVMsWUFBWTs7SUFDMUIsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsa0VBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSwwQ0FBRSxpQkFBaUIsMENBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyw0REFBVyxFQUFFLENBQUMsUUFBUSxFQUFFLDBDQUFFLFNBQVM7QUFDbkksQ0FBQztBQUVELFNBQVMsc0JBQXNCLENBQUUsR0FBVzs7SUFDMUMsTUFBTSxTQUFTLEdBQUcsWUFBWSxFQUFFO0lBQ2hDLE1BQU0sVUFBVSxHQUFHLGVBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxPQUFPLDBDQUFHLEdBQUcsQ0FBQztJQUM1QyxNQUFNLE9BQU8sR0FBRyxFQUFFO0lBQ2xCLE1BQU0sR0FBRyxHQUFHLHdEQUFpQixDQUFDLFdBQVcsRUFBRTtJQUMzQyxnQkFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLGNBQWMsMENBQUUsT0FBTyxDQUFDLENBQUMsS0FBK0MsRUFBRSxFQUFFO1FBQ3RGLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUNoRCxJQUFJLEdBQUUsYUFBRixFQUFFLHVCQUFGLEVBQUUsQ0FBRSxJQUFJLE1BQUssOERBQXFCLENBQUMsTUFBTSxJQUFJLEdBQUUsYUFBRixFQUFFLHVCQUFGLEVBQUUsQ0FBRSxJQUFJLE1BQUssOERBQXFCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxhQUFhO1lBQzNHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsb0RBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztBQUM1RCxDQUFDO0FBRUQsU0FBUyxrQkFBa0IsQ0FBRSxHQUFXLEVBQUUsV0FBd0I7O0lBQ2hFLE1BQU0sMkJBQTJCLEdBQUcsZUFBZSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUM7SUFDckUsT0FBTyxvREFBUyxDQUFDLGlDQUEyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQStDLEVBQUUsRUFBRTtRQUNuRyxNQUFNLEdBQUcsR0FBRyx3REFBaUIsQ0FBQyxXQUFXLEVBQUU7UUFDM0MsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ2hELElBQUksUUFBUTtRQUNaLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN4QixvQkFBb0I7WUFDcEIsUUFBUSxHQUFHLEVBQUUsYUFBRixFQUFFLHVCQUFGLEVBQUUsQ0FBRSxpQkFBaUIsRUFBRTtRQUNwQyxDQUFDO2FBQU0sQ0FBQztZQUNOLFFBQVEsR0FBRyxFQUFFO1FBQ2YsQ0FBQztRQUNELE9BQU8sUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLEVBQUU7SUFDckIsQ0FBQyxDQUFDLG1DQUFJLEVBQUUsQ0FBQztBQUNYLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pQRCxpRUFBZTtJQUNiLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLGNBQWMsRUFBRSx3REFBd0Q7SUFDeEUsa0JBQWtCLEVBQUUsd0ZBQXdGO0lBQzVHLFVBQVUsRUFBRSxhQUFhO0lBQ3pCLGNBQWMsRUFBRSxjQUFjO0lBQzlCLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLFVBQVUsRUFBRSxxQkFBcUI7SUFDakMsV0FBVyxFQUFFLFNBQVM7SUFDdEIsY0FBYyxFQUFFLHFFQUFxRTtJQUNyRixVQUFVLEVBQUUsUUFBUTtJQUNwQixhQUFhLEVBQUUsa0NBQWtDO0lBQ2pELGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLFNBQVMsRUFBRSxPQUFPO0lBQ2xCLHVCQUF1QixFQUFFLHFCQUFxQjtJQUM5QyxxQkFBcUIsRUFBRSwwQkFBMEI7SUFDakQsb0JBQW9CLEVBQUUsZ0JBQWdCO0lBQ3RDLHVCQUF1QixFQUFFLG1CQUFtQjtJQUM1QyxpQkFBaUIsRUFBRSx3QkFBd0I7SUFDM0MsZ0JBQWdCLEVBQUUsdUJBQXVCO0lBQ3pDLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsV0FBVyxFQUFFLGVBQWU7SUFDNUIsc0JBQXNCLEVBQUUsb0NBQW9DO0lBQzVELDZCQUE2QixFQUFFLHdEQUF3RDtJQUN2RixTQUFTLEVBQUUsaUJBQWlCO0lBQzVCLGdCQUFnQixFQUFFLG9CQUFvQjtJQUN0QyxZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLGdCQUFnQixFQUFFLG1CQUFtQjtJQUNyQyxPQUFPLEVBQUUsTUFBTTtJQUNmLFlBQVksRUFBRSxlQUFlO0lBQzdCLFNBQVMsRUFBRSxjQUFjO0lBQ3pCLHdCQUF3QixFQUFFLHVCQUF1QjtJQUNqRCxlQUFlLEVBQUUsWUFBWTtJQUM3QixxQkFBcUIsRUFBRSwwQkFBMEI7SUFDakQsbUJBQW1CLEVBQUUsbVBBQW1QO0lBQ3hRLG1CQUFtQixFQUFFLDZHQUE2RztJQUNsSSxzQkFBc0IsRUFBRSwrRUFBK0U7SUFFdkcsc0JBQXNCLEVBQUUsY0FBYztJQUN0QyxpQkFBaUIsRUFBRSxhQUFhO0lBQ2hDLHFCQUFxQixFQUFFLGFBQWE7SUFDcEMsb0JBQW9CLEVBQUUsWUFBWTtJQUNsQyx1QkFBdUIsRUFBRSw2QkFBNkI7SUFDdEQsMkJBQTJCLEVBQUUsd0JBQXdCO0lBQ3JELGNBQWMsRUFBRSxNQUFNO0lBQ3RCLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsMEJBQTBCLEVBQUUsd0JBQXdCO0lBQ3BELHdCQUF3QixFQUFFLGlCQUFpQjtJQUMzQyx1QkFBdUIsRUFBRSxtQ0FBbUM7SUFDNUQscUJBQXFCLEVBQUUsYUFBYTtJQUNwQyxrQkFBa0IsRUFBRSxhQUFhO0lBQ2pDLGlCQUFpQixFQUFFLFVBQVU7SUFDN0IsZUFBZSxFQUFFLE9BQU87SUFDeEIsa0JBQWtCLEVBQUUsVUFBVTtJQUM5QixpQkFBaUIsRUFBRSxTQUFTO0lBQzVCLGdDQUFnQyxFQUFFLDJCQUEyQjtJQUM3RCwwQkFBMEIsRUFBRSxvQkFBb0I7SUFDaEQseUJBQXlCLEVBQUUsWUFBWTtJQUN2Qyx5QkFBeUIsRUFBRSxXQUFXO0lBQ3RDLHNCQUFzQixFQUFFLFFBQVE7SUFDaEMseUJBQXlCLEVBQUUsY0FBYztDQUMxQzs7Ozs7Ozs7Ozs7QUM3REQ7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsZUFBZTtBQUlHO0FBQzJCO0FBQ21DO0FBQ2dCO0FBQ25DO0FBQ3ZCO0FBQ3VGO0FBc0I3SCxNQUFNLGVBQWUsR0FBRyxvREFBUyxDQUFDLENBQUMseURBQWtCLENBQUMsWUFBWSxFQUFFLHlEQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRW5HLE1BQU0sMkJBQTRCLFNBQVEsNENBQUssQ0FBQyxhQUFnRTtJQWM5RyxZQUFhLEtBQUs7UUFDaEIsS0FBSyxDQUFDLEtBQUssQ0FBQztRQWRkLDhCQUF5QixHQUFHLENBQUMsS0FBSyxDQUFDO1FBRW5DLGVBQVUsR0FBUTtZQUNoQixRQUFRLEVBQUUsVUFBVTtZQUNwQixHQUFHLEVBQUUsR0FBRztZQUNSLE1BQU0sRUFBRSxHQUFHO1lBQ1gsS0FBSyxFQUFFLE9BQU87WUFDZCxNQUFNLEVBQUUsTUFBTTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsYUFBYSxFQUFFLEtBQUs7U0FDckI7UUFrREQsNkJBQXdCLEdBQUcsQ0FBQyxjQUErQixFQUFFLEVBQUU7WUFDN0QsSUFBSSxjQUFjLElBQUksY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLDBCQUEwQixDQUFDLGNBQWMsQ0FBQztZQUNqRCxDQUFDO2lCQUFNLENBQUM7Z0JBQ04sSUFBSSxDQUFDLGdDQUFnQyxFQUFFO1lBQ3pDLENBQUM7UUFDSCxDQUFDO1FBRUQsK0JBQTBCLEdBQUcsQ0FBQyxpQkFBa0MsRUFBRSxFQUFFO1lBQ2xFLGtFQUFrRTtZQUNsRSxNQUFNLDJCQUEyQixHQUFHLDhEQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFFdkcsSUFBSSxlQUFlLEdBQUcsSUFBSTtZQUUxQixNQUFNLFNBQVMsR0FBRywyREFBWSxFQUFFO1lBQ2hDLE1BQU0sV0FBVyxHQUFHLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxPQUFPO1lBQ3RDLE1BQU0saUJBQWlCLEdBQUcsV0FBVyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztZQUNoRixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxLQUFLLGtEQUFXLENBQUMsMEJBQTBCLElBQUksaUJBQWlCLElBQUksaUJBQWlCLENBQUMsR0FBRyxJQUFJLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztnQkFDcEssNEtBQTRLO2dCQUM1Syw4SUFBOEk7Z0JBQzlJLGVBQWUsR0FBRyxpQkFBaUI7WUFDckMsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLHlGQUF5RjtnQkFDekYscUJBQXFCO2dCQUNyQixrTUFBa007Z0JBQ2xNLG1KQUFtSjtnQkFDbkosMEhBQTBIO2dCQUMxSCwwSUFBMEk7Z0JBQzFJLHlKQUF5SjtnQkFDekosZUFBZSxHQUFHLDJCQUEyQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxFQUFFO29CQUNoRixNQUFNLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7O3dCQUM3QyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxVQUFVLEtBQUssZ0RBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYywwQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEtBQUssS0FBSyxDQUFDLGdCQUFnQixDQUFDLEdBQUUsQ0FBQzs0QkFDNUsseUJBQXlCOzRCQUN6QixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsS0FBSywwQkFBMEIsQ0FBQyxnQkFBZ0I7d0JBQzVFLENBQUM7NkJBQU0sQ0FBQzs0QkFDTixxQ0FBcUM7NEJBQ3JDLE9BQU8sRUFBRSxDQUFDLFlBQVksS0FBSywwQkFBMEIsQ0FBQyxZQUFZO3dCQUNwRSxDQUFDO29CQUNILENBQUMsQ0FBQztvQkFFRixJQUFJLFVBQVUsRUFBRSxDQUFDO3dCQUNmLE9BQU8sSUFBSTtvQkFDYixDQUFDO3lCQUFNLENBQUM7d0JBQ04sT0FBTyxLQUFLO29CQUNkLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDO1lBQ0osQ0FBQztZQUVELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLDRCQUE0QjtZQUM1QixNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxlQUFlLENBQUM7WUFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7Z0JBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7Z0JBQzdCLE1BQU0sRUFBRSxNQUFNO2FBQ2YsQ0FBQztRQUNKLENBQUM7UUFFRCxxQ0FBZ0MsR0FBRyxHQUFHLEVBQUU7WUFDdEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUM7WUFDekQsNEJBQTRCO1lBQzVCLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztnQkFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtnQkFDN0IsTUFBTSxFQUFFLE1BQU07YUFDZixDQUFDO1FBQ0osQ0FBQztRQUVELGtDQUE2QixHQUFHLENBQUMsdUJBQWdDLEVBQUUsRUFBRTtZQUNuRSxJQUFJLHVCQUF1QixFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzdFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO3dCQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO3dCQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLHVCQUF1QixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQztxQkFDekgsQ0FBQztvQkFDRixPQUFNO2dCQUNSLENBQUM7WUFDSCxDQUFDO1lBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7Z0JBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7Z0JBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsdUJBQXVCLENBQUM7YUFDbEYsQ0FBQztRQUNKLENBQUM7UUFFRCw2QkFBd0IsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2dCQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO2dCQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxFQUFFLEtBQUssQ0FBQzthQUNsRSxDQUFDO1FBQ0osQ0FBQztRQUVELDJCQUFzQixHQUFHLEdBQUcsRUFBRTtZQUM1QixpS0FBaUs7WUFDakssTUFBTSwyQkFBMkIsR0FBRyxtRUFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBRS9LLElBQUksY0FBYztZQUNsQixJQUFJLElBQUksQ0FBQyx3Q0FBd0MsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLDJCQUEyQixDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUM1SCxjQUFjLEdBQUcsb0RBQVMsQ0FBQywyQkFBMkIsQ0FBQyxjQUFjLENBQUM7WUFDeEUsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLGNBQWMsR0FBRywyQkFBMkIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLG9EQUFTLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvREFBUyxDQUFDLEVBQUUsQ0FBQztZQUNySSxDQUFDO1lBQ0QsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDakYsTUFBTSx1QkFBdUIsR0FBRywyQkFBMkIsQ0FBQyxVQUFVLElBQUksaUJBQWlCO1lBQzNGLDBIQUEwSDtZQUMxSCxPQUFPLENBQ0wsK0NBQUMscUZBQWtCLElBQ2pCLEtBQUssRUFBRSxlQUFlLEVBQ3RCLGNBQWMsRUFBRSxjQUFjLEVBQzlCLGFBQWEsRUFBRSwyQkFBMkIsQ0FBQyxhQUFhLEVBQ3hELFNBQVMsRUFBRSwyQkFBMkIsQ0FBQyxTQUFTLEVBQ2hELGlCQUFpQixRQUNqQixnQkFBZ0IsUUFDaEIsaUJBQWlCLFFBQ2pCLGFBQWEsRUFBRSxHQUFHLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxVQUFVLEVBQzNELHFCQUFxQixFQUFFLHVCQUF1QixFQUM5QyxRQUFRLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixFQUN2QyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQ3BDLGVBQWUsRUFBRSxLQUFLLEVBQ3RCLFlBQVksRUFBRSxDQUFDLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLEVBQUU7b0JBQ2hELE1BQU0sMkJBQTJCLEdBQUcsOERBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztvQkFDdkcsTUFBTSxtQ0FBbUMsR0FBRywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsRUFBRTt3QkFDMUcsT0FBTywwQkFBMEIsQ0FBQyxnQkFBZ0IsS0FBSyxnQkFBZ0I7b0JBQ3pFLENBQUMsQ0FBQztvQkFDRixNQUFNLFlBQVksR0FBRyxtQ0FBbUMsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsRUFBRTt3QkFDekYsSUFBSSxvQ0FBb0M7d0JBQ3hDLElBQUksMEJBQTBCLENBQUMsVUFBVSxFQUFFLENBQUM7NEJBQzFDLG9DQUFvQyxHQUFHLDBCQUEwQixDQUFDLFVBQVU7d0JBQzlFLENBQUM7NkJBQU0sQ0FBQzs0QkFDTixvQ0FBb0MsR0FBRyx1RkFBb0I7d0JBQzdELENBQUM7d0JBQ0QsT0FBTyxvQ0FBb0MsS0FBSyxZQUFZLENBQUMsRUFBRTtvQkFDakUsQ0FBQyxDQUFDO29CQUNGLE9BQU8sQ0FBQyxZQUFZO2dCQUN0QixDQUFDLENBQUMsRUFDRixVQUFVLEVBQUUsSUFBSSxDQUFDLHdDQUF3QyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQ3JGLGtCQUFrQixFQUFFLElBQUksRUFDeEIsb0JBQW9CLFFBQ3BCLDhCQUE4QixFQUFFLElBQUksR0FDcEMsQ0FDSDtRQUNILENBQUM7UUFFRCw2Q0FBd0MsR0FBRyxDQUFDLFFBQWdCLEVBQVcsRUFBRTs7WUFDdkUsTUFBTSxTQUFTLEdBQUcsa0VBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSwwQ0FBRSxpQkFBaUIsMENBQUUsU0FBUztZQUN4RSxNQUFNLFVBQVUsR0FBRyxlQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsT0FBTywwQ0FBRyxRQUFRLENBQUM7WUFDakQsTUFBTSwyQkFBMkIsR0FBRyw4REFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBQ3ZHLE1BQU0sV0FBVyxHQUFHLGdCQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsUUFBUSwwQ0FBRSxLQUFLO1lBQy9DLElBQUksV0FBVyxLQUFLLEtBQUssRUFBRSxDQUFDO2dCQUMxQixPQUFPLElBQUk7WUFDYixDQUFDO2lCQUFNLENBQUM7Z0JBQ04sSUFBSSwyQkFBMkIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7b0JBQzNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEtBQUssa0RBQVcsQ0FBQyxzQkFBc0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsS0FBSyxrREFBVyxDQUFDLDBCQUEwQjtnQkFDM0ksQ0FBQztxQkFBTSxDQUFDO29CQUNOLE9BQU8sS0FBSztnQkFDZCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFFRCwyQkFBc0IsR0FBRyxDQUFDLFFBQWdCLEVBQVcsRUFBRTtZQUNyRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxLQUFLLGtEQUFXLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztnQkFDdEUsT0FBTyxJQUFJO1lBQ2IsQ0FBQztZQUNELDBFQUEwRTtZQUMxRSxtREFBbUQ7WUFDbkQsbUJBQW1CO1lBQ25CLG1EQUFtRDtZQUNuRCxnQ0FBZ0M7WUFDaEMsaUJBQWlCO1lBQ2pCLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsS0FBSztZQUNMLFVBQVU7WUFDVixnQkFBZ0I7WUFDaEIsR0FBRztRQUNMLENBQUM7UUEzTkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsaUJBQWlCO1FBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLGlCQUFpQjtRQUVoRCxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsZUFBZSxFQUFFLEtBQUs7WUFDdEIsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLFdBQVcsS0FBSyxrREFBVyxDQUFDLG1CQUFtQjtTQUMxRTtJQUNILENBQUM7SUFRRCxpQkFBaUI7UUFDZix5Q0FBeUM7UUFDekMsTUFBTSxVQUFVLEdBQUcsbUVBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFFOUcsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQzdFLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxjQUFjLENBQUM7UUFFaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtZQUM3QixNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUSxDQUFFLEtBQXVCO1FBQy9CLE9BQU8sOENBQUc7O21CQUVLLCtDQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLCtDQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLCtDQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLCtDQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7S0FXekY7SUFDSCxDQUFDO0lBa0xELE1BQU07UUFDSixPQUFPLENBQ0wsd0RBQUssR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDdEMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixJQUFJLCtDQUFDLCtFQUFjLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSx3QkFBd0IsRUFBRSxjQUFjLEVBQUUscUVBQWUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLElBQzlLLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUNmO1lBQ2pCLCtDQUFDLCtFQUFjLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSwyQkFBMkIsRUFBRSxjQUFjLEVBQUUscUVBQWUsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO2dCQUNsSiwrQ0FBQywyRUFBVTtvQkFDVCx3REFBSyxTQUFTLEVBQUMseURBQXlEO3dCQUN0RSx3REFBSyxTQUFTLEVBQUMsMkJBQTJCOzRCQUN4QywrQ0FBQywwQ0FBSyxJQUNKLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsRUFDakYsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLEdBQzdEOzRCQUNGLDBEQUFPLFNBQVMsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsMkJBQTJCLEVBQUUsY0FBYyxFQUFFLHFFQUFlLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxDQUN4SCxDQUNKLENBQ0YsQ0FDSztnQkFDYiwrQ0FBQywyRUFBVTtvQkFDVCx3REFBSyxTQUFTLEVBQUMseURBQXlEO3dCQUN0RSx3REFBSyxTQUFTLEVBQUMsMkJBQTJCOzRCQUN4QywrQ0FBQywwQ0FBSyxJQUNKLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQ2hGLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxHQUM1RDs0QkFDRiwwREFBTyxTQUFTLEVBQUMsVUFBVSxFQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLHdCQUF3QixFQUFFLGNBQWMsRUFBRSxxRUFBZSxDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FDbEgsQ0FDSixDQUNGLENBQ0s7Z0JBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsdUJBQXVCLElBQUksK0NBQUMsMkVBQVU7b0JBQ3ZELCtDQUFDLGlEQUFZLElBQ1gsU0FBUyxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLDJCQUEyQixFQUFFLGNBQWMsRUFBRSxxRUFBZSxDQUFDLHlCQUF5QixFQUFFLENBQUMsRUFDNUosS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUM3RSxRQUFRLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixHQUN2QyxDQUNTLENBQ0UsQ0FDYixDQUNQO0lBQ0gsQ0FBQzs7QUEvUE0sd0NBQVksR0FBRztJQUNwQixNQUFNLEVBQUUsb0RBQVMsQ0FBQztRQUNoQixhQUFhLEVBQUUsSUFBSTtLQUNwQixDQUFDO0NBQ0g7QUE4UEgsaUVBQWUscURBQVMsQ0FBQywyQkFBMkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXAtdW5zY3JvbGxhYmxlL3NyYy9tZXNzYWdlLWFjdGlvbnMvYWN0aW9uLXV0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXAtdW5zY3JvbGxhYmxlL3NyYy9zZXR0aW5nL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS10aGVtZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hcC11bnNjcm9sbGFibGUvc3JjL21lc3NhZ2UtYWN0aW9ucy96b29tLXRvLWZlYXR1cmUtYWN0aW9uLXNldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEFwcFN0b3JlLCB0eXBlIE1lc3NhZ2VUeXBlLCBNZXNzYWdlQ2FycnlEYXRhLCB0eXBlIFVzZURhdGFTb3VyY2UsIHR5cGUgSU1Vc2VEYXRhU291cmNlLCBJbW11dGFibGUsIERhdGFTb3VyY2VNYW5hZ2VyLCB0eXBlIEltbXV0YWJsZUFycmF5LCB0eXBlIElNV2lkZ2V0SnNvbiB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgQXJjR0lTRGF0YVNvdXJjZVR5cGVzIH0gZnJvbSAnamltdS1hcmNnaXMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNVc2VPdXRwdXREYXRhU291cmNlcyAod0lkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IG1lc3NhZ2VDYXJyeURhdGEgPSBnZXRNZXNzYWdlQ2FycnlEYXRhQnlXaWRnZXRJZCh3SWQsIG1lc3NhZ2VUeXBlKVxyXG4gIHJldHVybiBtZXNzYWdlQ2FycnlEYXRhID09PSBNZXNzYWdlQ2FycnlEYXRhLk91dHB1dERhdGFTb3VyY2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lc3NhZ2VDYXJyeURhdGFCeVdpZGdldElkICh3SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKTogTWVzc2FnZUNhcnJ5RGF0YSB7XHJcbiAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnKClcclxuICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd0lkXVxyXG4gIGNvbnN0IHB1Ymxpc2hNZXNzYWdlcyA9IHdpZGdldEpzb24/Lm1hbmlmZXN0Py5wdWJsaXNoTWVzc2FnZXNcclxuICBsZXQgbWVzc2FnZUNhcnJ5RGF0YSA9IE1lc3NhZ2VDYXJyeURhdGEuVXNlRGF0YVNvdXJjZVxyXG4gIHB1Ymxpc2hNZXNzYWdlcz8uZm9yRWFjaChlbCA9PiB7XHJcbiAgICBjb25zdCBwdWJsaXNoTWVzc2FnZVByb3BlcnR5ID0gZWwgYXMgYW55XHJcbiAgICBpZiAocHVibGlzaE1lc3NhZ2VQcm9wZXJ0eT8ubWVzc2FnZUNhcnJ5RGF0YSAmJiBwdWJsaXNoTWVzc2FnZVByb3BlcnR5Py5tZXNzYWdlVHlwZSA9PT0gbWVzc2FnZVR5cGUpIHtcclxuICAgICAgbWVzc2FnZUNhcnJ5RGF0YSA9IHB1Ymxpc2hNZXNzYWdlUHJvcGVydHk/Lm1lc3NhZ2VDYXJyeURhdGFcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBtZXNzYWdlQ2FycnlEYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uQ29uZmlnIHtcclxuICB1c2VEYXRhU291cmNlOiBVc2VEYXRhU291cmNlXHJcbiAgdXNlRGF0YVNvdXJjZXM/OiBVc2VEYXRhU291cmNlW11cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrT3V0QWN0aW9uQ29uZmlnIChhY3Rpb25Db25maWc6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8QWN0aW9uQ29uZmlnPiwgbWVzc2FnZVdpZGdldElkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xyXG4gIGNvbnN0IGNvbmZpZyA9IGdldEFwcENvbmZpZygpXHJcbiAgLy9jb25zdCBtZXNzYWdlV2lkZ2V0SnNvbiA9IGNvbmZpZy53aWRnZXRzW21lc3NhZ2VXaWRnZXRJZF1cclxuXHJcbiAgbGV0IHVzZURhdGFTb3VyY2U6IElNVXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICBjb25zdCB1c2VEYXRhU291cmNlczogSU1Vc2VEYXRhU291cmNlW10gPSBbXVxyXG4gIGlmICghYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2UpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyA9IGdldERzQnlXaWRnZXRJZChtZXNzYWdlV2lkZ2V0SWQsIG1lc3NhZ2VUeXBlKVxyXG4gICAgLy9pZiAobWVzc2FnZVdpZGdldEpzb24gJiYgbWVzc2FnZVdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMgJiYgbWVzc2FnZVdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMCkge1xyXG4gICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5mb3JFYWNoKCh1c2VEUywgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBkc0pzb24gPSBjb25maWcuZGF0YVNvdXJjZXNbdXNlRFMuZGF0YVNvdXJjZUlkXVxyXG4gICAgICAgIGxldCB0ZW1wVXNlRGF0YVNvdXJjZVxyXG4gICAgICAgIGlmIChkc0pzb24gJiYgKChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYk1hcCkgfHwgKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViU2NlbmUpKSkge1xyXG4gICAgICAgICAgdGVtcFVzZURhdGFTb3VyY2UgPSBudWxsXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRlbXBVc2VEYXRhU291cmNlID0gSW1tdXRhYmxlKHtcclxuICAgICAgICAgICAgZGF0YVNvdXJjZUlkOiB1c2VEUy5kYXRhU291cmNlSWQsXHJcbiAgICAgICAgICAgIG1haW5EYXRhU291cmNlSWQ6IHVzZURTLm1haW5EYXRhU291cmNlSWQsXHJcbiAgICAgICAgICAgIHJvb3REYXRhU291cmNlSWQ6IHVzZURTLnJvb3REYXRhU291cmNlSWQsXHJcbiAgICAgICAgICAgIGRhdGFWaWV3SWQ6IHVzZURTLmRhdGFWaWV3SWRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBpZiAoIXVzZURhdGFTb3VyY2UpIHtcclxuICAgICAgICAgICAgdXNlRGF0YVNvdXJjZSA9IHRlbXBVc2VEYXRhU291cmNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1c2VEYXRhU291cmNlcy5wdXNoKHRlbXBVc2VEYXRhU291cmNlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgdXNlRGF0YVNvdXJjZSA9IGNoZWNrT3V0VXNlRGF0YVNvdXJjZShtZXNzYWdlV2lkZ2V0SWQsIGFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlLCBtZXNzYWdlVHlwZSlcclxuICAgIGlmIChhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZXMpIHtcclxuICAgICAgYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2VzLmZvckVhY2godXNlRFMgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRlbXBVc2VEYXRhU291cmNlID0gY2hlY2tPdXRVc2VEYXRhU291cmNlKG1lc3NhZ2VXaWRnZXRJZCwgdXNlRFMsIG1lc3NhZ2VUeXBlKVxyXG4gICAgICAgIHRlbXBVc2VEYXRhU291cmNlICYmIHVzZURhdGFTb3VyY2VzLnB1c2godGVtcFVzZURhdGFTb3VyY2UpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdXNlRGF0YVNvdXJjZTogdXNlRGF0YVNvdXJjZSxcclxuICAgIHVzZURhdGFTb3VyY2VzOiB1c2VEYXRhU291cmNlc1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tPdXRVc2VEYXRhU291cmNlIChtZXNzYWdlV2lkZ2V0SWQ6IHN0cmluZywgb2xkVXNlRGF0YVNvdXJjZTogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPiwgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XHJcbiAgY29uc3QgY29uZmlnID0gZ2V0QXBwQ29uZmlnKClcclxuICAvL2NvbnN0IHdpZGdldEpzb24gPSBjb25maWcud2lkZ2V0c1ttZXNzYWdlV2lkZ2V0SWRdXHJcbiAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKG1lc3NhZ2VXaWRnZXRJZCwgbWVzc2FnZVR5cGUpXHJcbiAgbGV0IGluaXRVc2VEYXRhU291cmNlID0gbnVsbFxyXG4gIGxldCBpc01hcERzID0gZmFsc2VcclxuXHJcbiAgY29uc3QgZHNJZCA9IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyAmJiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbMF0gJiYgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZFxyXG4gIGlmICghZHNJZCkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0IGRzSnNvbiA9IGNvbmZpZy5kYXRhU291cmNlc1tkc0lkXVxyXG4gIGlmIChkc0pzb24gJiYgKChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYk1hcCkgfHwgKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViU2NlbmUpKSkge1xyXG4gICAgaXNNYXBEcyA9IHRydWVcclxuICB9XHJcblxyXG4gIGNvbnN0IGRzTSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcclxuICBjb25zdCBpc29sZFVzZURhdGFTb3VyY2VJc091dHB1dERzID0gZHNNLmdldERhdGFTb3VyY2Uob2xkVXNlRGF0YVNvdXJjZS5kYXRhU291cmNlSWQpPy5nZXREYXRhU291cmNlSnNvbigpPy5pc091dHB1dEZyb21XaWRnZXRcclxuXHJcbiAgaWYgKGlzTWFwRHMpIHtcclxuICAgIC8vIHdlYm1hcCBvciB3ZWJzY2VuZSBkc1xyXG4gICAgbGV0IGlzVXNlT2xkRHMgPSBmYWxzZVxyXG4gICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcykge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbaV0uZGF0YVNvdXJjZUlkID09PSBvbGRVc2VEYXRhU291cmNlLnJvb3REYXRhU291cmNlSWQpIHtcclxuICAgICAgICAgIGlzVXNlT2xkRHMgPSB0cnVlXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1VzZU9sZERzKSB7XHJcbiAgICAgIGluaXRVc2VEYXRhU291cmNlID0gb2xkVXNlRGF0YVNvdXJjZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBudWxsXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGZlYXR1cmVsYXllciBkc1xyXG4gICAgbGV0IGlzVXNlT2xkRHMgPSBmYWxzZVxyXG4gICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcykge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG9sZFVzZURhdGFTb3VyY2VJZCA9IGlzb2xkVXNlRGF0YVNvdXJjZUlzT3V0cHV0RHMgPyBvbGRVc2VEYXRhU291cmNlPy5tYWluRGF0YVNvdXJjZUlkIDogb2xkVXNlRGF0YVNvdXJjZT8uZGF0YVNvdXJjZUlkXHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZURhdGFTb3VyY2VJZCA9IGlzb2xkVXNlRGF0YVNvdXJjZUlzT3V0cHV0RHMgPyBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbaV0/Lm1haW5EYXRhU291cmNlSWQgOiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbaV0/LmRhdGFTb3VyY2VJZFxyXG4gICAgICAgIC8vIHN1cHBvcnQgZGF0YSB2aWV3XHJcbiAgICAgICAgaWYgKGN1cnJlbnRVc2VEYXRhU291cmNlSWQgPT09IG9sZFVzZURhdGFTb3VyY2VJZCkge1xyXG4gICAgICAgICAgaXNVc2VPbGREcyA9IHRydWVcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzVXNlT2xkRHMpIHtcclxuICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBvbGRVc2VEYXRhU291cmNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzICYmIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IEltbXV0YWJsZSh7XHJcbiAgICAgICAgICBkYXRhU291cmNlSWQ6IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWQsXHJcbiAgICAgICAgICBtYWluRGF0YVNvdXJjZUlkOiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbMF0ubWFpbkRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgIHJvb3REYXRhU291cmNlSWQ6IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXS5yb290RGF0YVNvdXJjZUlkXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGluaXRVc2VEYXRhU291cmNlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VEYXRhU291cmNlSW5mbyAod2lkZ2V0SWQ6IHN0cmluZywgdXNlRGF0YVNvdXJjZTogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPiwgdXNlRGF0YVNvdXJjZXM6IEltbXV0YWJsZS5JbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPiwgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XHJcbiAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnKClcclxuICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd2lkZ2V0SWRdXHJcbiAgbGV0IGlzUmVhZE9ubHkgPSBmYWxzZVxyXG4gIGNvbnN0IGRzUm9vdElkcyA9IGdldERzUm9vdElkc0J5V2lkZ2V0SWQod2lkZ2V0SWQpXHJcbiAgLy9pZiAoZHNSb290SWRzICYmIGRzUm9vdElkcy5sZW5ndGggPT09IDAgJiYgKHdpZGdldEpzb24gJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcyAmJiB3aWRnZXRKc29uLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMSkpIHtcclxuICAvLyAgaXNSZWFkT25seSA9IHRydWVcclxuICAvL31cclxuXHJcbiAgLy9pZiAoIWRzUm9vdElkcyAmJiAod2lkZ2V0SnNvbiAmJiB3aWRnZXRKc29uLnVzZURhdGFTb3VyY2VzICYmIHdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMubGVuZ3RoID09PSAxKSkge1xyXG4gIC8vICBpc1JlYWRPbmx5ID0gdHJ1ZVxyXG4gIC8vfVxyXG5cclxuICBpZiAoIWRzUm9vdElkcyB8fCBkc1Jvb3RJZHM/Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgaXNSZWFkT25seSA9IGNoZWNrSXNPbmx5T25lRHMod2lkZ2V0SnNvbiwgbWVzc2FnZVR5cGUsIGRzUm9vdElkcylcclxuICB9XHJcblxyXG4gIGNvbnN0IGZyb21Ec0lkcyA9IGRzUm9vdElkcyA/IHVuZGVmaW5lZCA6IGdldERzSWRzQnlXaWRnZXRJZCh3aWRnZXRJZCwgbWVzc2FnZVR5cGUpXHJcbiAgY29uc3QgZHNTZWxlY3RvclNvdXJjZSA9IHtcclxuICAgIGlzUmVhZE9ubHk6IGlzUmVhZE9ubHksXHJcbiAgICB1c2VEYXRhU291cmNlOiB1c2VEYXRhU291cmNlLFxyXG4gICAgdXNlRGF0YVNvdXJjZXM6IHVzZURhdGFTb3VyY2VzIHx8IFtdLFxyXG4gICAgZnJvbVJvb3REc0lkczogZHNSb290SWRzLFxyXG4gICAgZnJvbURzSWRzOiBmcm9tRHNJZHNcclxuICB9XHJcblxyXG4gIHJldHVybiBkc1NlbGVjdG9yU291cmNlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREc0J5V2lkZ2V0SWQgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPiB7XHJcbiAgY29uc3QgbWVzc2FnZUNhcnJ5RGF0YSA9IGdldE1lc3NhZ2VDYXJyeURhdGFCeVdpZGdldElkKHdJZCwgbWVzc2FnZVR5cGUpXHJcbiAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnKClcclxuICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd0lkXVxyXG4gIGNvbnN0IHVzZURhdGFTb3VyY2VzID0gd2lkZ2V0SnNvbj8udXNlRGF0YVNvdXJjZXMgfHwgSW1tdXRhYmxlKFtdKVxyXG4gIGNvbnN0IG91dHB1dERhdGFTb3VyY2VzID0gaW5pdE91dHB1dERhdGFTb3VyY2VzKHdpZGdldEpzb24/Lm91dHB1dERhdGFTb3VyY2VzKSB8fCBJbW11dGFibGUoW10pXHJcbiAgY29uc3QgYm90aERhdGFzb3VyY2UgPSB1c2VEYXRhU291cmNlcz8uYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KS5jb25jYXQob3V0cHV0RGF0YVNvdXJjZXM/LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSkpXHJcbiAgc3dpdGNoIChtZXNzYWdlQ2FycnlEYXRhKSB7XHJcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuT3V0cHV0RGF0YVNvdXJjZTpcclxuICAgICAgcmV0dXJuIG91dHB1dERhdGFTb3VyY2VzXHJcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuVXNlRGF0YVNvdXJjZTpcclxuICAgICAgcmV0dXJuIHVzZURhdGFTb3VyY2VzXHJcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuQm90aERhdGFTb3VyY2U6XHJcbiAgICAgIHJldHVybiBJbW11dGFibGUoYm90aERhdGFzb3VyY2UpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdE91dHB1dERhdGFTb3VyY2VzIChvdXRwdXREYXRhU291cmNlcyk6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+IHtcclxuICBjb25zdCBkcyA9IG91dHB1dERhdGFTb3VyY2VzPy5tYXAoZHNJZCA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhU291cmNlSWQ6IGRzSWQsXHJcbiAgICAgIG1haW5EYXRhU291cmNlSWQ6IGRzSWQsXHJcbiAgICAgIHJvb3REYXRhU291cmNlSWQ6IG51bGxcclxuICAgIH1cclxuICB9KSA/PyBbXVxyXG4gIHJldHVybiBJbW11dGFibGUoZHMpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lzT25seU9uZURzICh3aWRnZXRKc29uOiBJTVdpZGdldEpzb24sIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSwgZHNSb290SWRzOiBJbW11dGFibGVBcnJheTxzdHJpbmc+KTogYm9vbGVhbiB7XHJcbiAgY29uc3QgbWVzc2FnZUNhcnJ5RGF0YSA9IGdldE1lc3NhZ2VDYXJyeURhdGFCeVdpZGdldElkKHdpZGdldEpzb24/LmlkLCBtZXNzYWdlVHlwZSlcclxuICBjb25zdCBvdXRwdXREcyA9IHdpZGdldEpzb24/Lm91dHB1dERhdGFTb3VyY2VzIHx8IFtdXHJcbiAgY29uc3QgdXNlRHMgPSB3aWRnZXRKc29uPy51c2VEYXRhU291cmNlcyB8fCBbXVxyXG4gIGlmIChkc1Jvb3RJZHMpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICBzd2l0Y2ggKG1lc3NhZ2VDYXJyeURhdGEpIHtcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5PdXRwdXREYXRhU291cmNlOlxyXG4gICAgICByZXR1cm4gb3V0cHV0RHM/Lmxlbmd0aCA9PT0gMVxyXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLlVzZURhdGFTb3VyY2U6XHJcbiAgICAgIHJldHVybiB1c2VEcz8ubGVuZ3RoID09PSAxXHJcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuQm90aERhdGFTb3VyY2U6XHJcbiAgICAgIGNvbnN0IGRzTGVuZ3RoID0gb3V0cHV0RHMubGVuZ3RoICsgdXNlRHMubGVuZ3RoXHJcbiAgICAgIHJldHVybiBkc0xlbmd0aCA9PT0gMVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFwcENvbmZpZyAoKSB7XHJcbiAgcmV0dXJuIHdpbmRvdy5qaW11Q29uZmlnLmlzQnVpbGRlciA/IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwU3RhdGVJbkJ1aWxkZXI/LmFwcENvbmZpZyA6IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwQ29uZmlnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERzUm9vdElkc0J5V2lkZ2V0SWQgKHdJZDogc3RyaW5nKSB7XHJcbiAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnKClcclxuICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd0lkXVxyXG4gIGNvbnN0IHJvb3RJZHMgPSBbXVxyXG4gIGNvbnN0IGRzTSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcclxuICB3aWRnZXRKc29uPy51c2VEYXRhU291cmNlcz8uZm9yRWFjaCgodXNlRFM6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4pID0+IHtcclxuICAgIGNvbnN0IGRzID0gZHNNLmdldERhdGFTb3VyY2UodXNlRFMuZGF0YVNvdXJjZUlkKVxyXG4gICAgaWYgKGRzPy50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwIHx8IGRzPy50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViU2NlbmUpIHsgLy8gaXMgcm9vdCBkc1xyXG4gICAgICByb290SWRzLnB1c2godXNlRFMuZGF0YVNvdXJjZUlkKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIHJvb3RJZHMubGVuZ3RoID4gMCA/IEltbXV0YWJsZShyb290SWRzKSA6IHVuZGVmaW5lZFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREc0lkc0J5V2lkZ2V0SWQgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcclxuICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQod0lkLCBtZXNzYWdlVHlwZSlcclxuICByZXR1cm4gSW1tdXRhYmxlKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5tYXAoKHVzZURTOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+KSA9PiB7XHJcbiAgICBjb25zdCBkc00gPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXHJcbiAgICBjb25zdCBkcyA9IGRzTS5nZXREYXRhU291cmNlKHVzZURTLmRhdGFTb3VyY2VJZClcclxuICAgIGxldCByZXN1bHREc1xyXG4gICAgaWYgKGRzICYmIGRzLmlzRGF0YVZpZXcpIHtcclxuICAgICAgLy8gc3VwcG9ydCBkYXRhIHZpZXdcclxuICAgICAgcmVzdWx0RHMgPSBkcz8uZ2V0TWFpbkRhdGFTb3VyY2UoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0RHMgPSBkc1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdERzPy5pZFxyXG4gIH0pID8/IFtdKVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBzb3VyY2VMYWJlbDogJ1NvdXJjZScsXHJcbiAgc291cmNlRGVzY3JpcHQ6ICdBIHdlYiBtYXAgb3Igd2ViIHNjZW5lLCBvciBhbnkgY29tYmluYXRpb24gb2YgdGhlIHR3by4nLFxyXG4gIHNlbGVjdFRoaXJkTWFwSGludDogJ1BsZWFzZSB1bnNlbGVjdCBhIG1hcCBvciBzY2VuZSBiZWZvcmUgeW91IGNob29zZSBhbm90aGVyIG9uZS4gVXAgdG8gdHdvIGFyZSBzdXBwb3J0ZWQuJyxcclxuICBpbml0aWFsTWFwOiAnSW5pdGlhbCBtYXAnLFxyXG4gIGluaXRpYWxNYXBWaWV3OiAnSW5pdGlhbCB2aWV3JyxcclxuICBzZWxlY3RNYXA6ICdTZWxlY3QgbWFwJyxcclxuICBzZXRNYXBWaWV3OiAnTW9kaWZ5IGluaXRpYWwgdmlldycsXHJcbiAgZGVmYXVsdFZpZXc6ICdEZWZhdWx0JyxcclxuICBkZWZhdWx0Vmlld1RpcDogJ0luaXRpYWwgcG9zaXRpb24gb2YgdGhlIG1hcCBpbmhlcml0ZWQgZnJvbSB0aGUgd2ViIG1hcCBvciB3ZWIgc2NlbmUnLFxyXG4gIGN1c3RvbVZpZXc6ICdDdXN0b20nLFxyXG4gIGN1c3RvbVZpZXdUaXA6ICdDcmVhdGUgYSBuZXcgcG9zaXRpb24gb2YgdGhlIG1hcCcsXHJcbiAgY3VzdG9tVmlld1NldDogJ01vZGlmeScsXHJcbiAgdG9vbExhYmVsOiAnVG9vbHMnLFxyXG4gIHNlbGVjdGlvbkhpZ2hsaWdodENvbG9yOiAnU2VsZWN0aW9uIGhpZ2hsaWdodCcsXHJcbiAgZmVhdHVyZVNlbGVjdGlvbkNvbG9yOiAnRmVhdHVyZSBzZWxlY3Rpb24gY29sb3JzJyxcclxuICBmZWF0dXJlSGlnaGxpZ2h0RmlsbDogJ0hpZ2hsaWdodCBmaWxsJyxcclxuICBmZWF0dXJlSGlnaGxpZ2h0T3V0bGluZTogJ0hpZ2hsaWdodCBvdXRsaW5lJyxcclxuICBkaXNhYmxlU2Nyb2xsWm9vbTogJ0Rpc2FibGUgc2Nyb2xsIHpvb21pbmcnLFxyXG4gIGVuYWJsZVNjcm9sbFpvb206ICdFbmFibGUgc2Nyb2xsIHpvb21pbmcnLFxyXG4gIGRpc2FibGVQb3BVcDogJ0Rpc2FibGUgcG9wLXVwJyxcclxuICBlbmFibGVQb3BVcDogJ0VuYWJsZSBwb3AtdXAnLFxyXG4gIHNob3dQb3B1cFVwb25TZWxlY3Rpb246ICdTaG93IHBvcC11cCB1cG9uIGZlYXR1cmUgc2VsZWN0aW9uJyxcclxuICBzaG93UG9wdXBVcG9uU2VsZWN0aW9uVG9vbHRpcDogJ1NlbGVjdGlvbiBtYWRlIGludGVyYWN0aXZlbHkgZnJvbSB0aGUgbWFwIGlzIGV4Y2x1ZGVkLicsXHJcbiAgZG9ja1BvcHVwOiAnRG9jayB0aGUgcG9wLXVwJyxcclxuICBzY2VuZVF1YWxpdHlNb2RlOiAnU2NlbmUgcXVhbGl0eSBtb2RlJyxcclxuICBjaG9vc2VBTGF5ZXI6ICdTZWxlY3QgYSBsYXllcicsXHJcbiAgZGF0YVJlbGF0aW9uU2hpcDogJ0RhdGEgcmVsYXRpb25zaGlwJyxcclxuICBtYXBOb25lOiAnbm9uZScsXHJcbiAgbWVzc2FnZUZpZWxkOiAnTWVzc2FnZSBmaWVsZCcsXHJcbiAgbWFwTGF5b3V0OiAnVG9vbHMgbGF5b3V0JyxcclxuICBtYXBMYXlvdXRfTGFyZ2VBbmRNZWRpdW06ICdMYXJnZSBhbmQgbWVkaXVtIHNpemUnLFxyXG4gIG1hcExheW91dF9TbWFsbDogJ1NtYWxsIHNpemUnLFxyXG4gIGVuYWJsZUNsaWVudFNpZGVRdWVyeTogJ0VuYWJsZSBjbGllbnQtc2lkZSBxdWVyeScsXHJcbiAgY2xpZW50UXVlcnlIZWxwVGlwMTogJ0VuYWJsZSBjbGllbnQtc2lkZSBxdWVyaWVzIHRvIGFsbGV2aWF0ZSBzZXJ2ZXIgZGVtYW5kIGFuZCBlbmhhbmNlIGFwcGxpY2F0aW9uIHBlcmZvcm1hbmNlLiBCZSBhZHZpc2VkIHRoYXQgaXQgbWF5IHRha2UgbG9uZ2VyIGJlZm9yZSB5b3UgY2FuIHNlZSB0aGUgZmVhdHVyZXMgc2luY2UgdGhlIG1hcCB3aWxsIHF1ZXJ5IG1vcmUgZmllbGRzLiBXZWIgc2NlbmVzIGFyZSBub3QgeWV0IHN1cHBvcnRlZC4gU2VlIHtsaW5rfS4nLFxyXG4gIGNsaWVudFF1ZXJ5SGVscFRpcDI6ICdPbmUgd2ViIG1hcCBvbmx5IG5lZWRzIHRvIGJlIGVuYWJsZWQgb25jZSBpbiBhbnkgbWFwIHdpZGdldC4gV2ViIHNjZW5lcyBkbyBub3Qgc3VwcG9ydCBjbGllbnQtc2lkZSBxdWVyaWVzLicsXHJcbiAgY2xpZW50UXVlcnlEaXNhYmxlZFRpcDogJ1RoaXMgd2ViIG1hcCBoYXMgdGhlIGNsaWVudC1zaWRlIHF1ZXJ5IGFscmVhZHkgZW5hYmxlZCBpbiBhbm90aGVyIG1hcCB3aWRnZXQuJyxcclxuXHJcbiAgbWFwQWN0aW9uX1RyaWdnZXJMYXllcjogJ1RyaWdnZXIgZGF0YScsXHJcbiAgbWFwQWN0aW9uX1NldERhdGE6ICdTZWxlY3QgZGF0YScsXHJcbiAgbWFwQWN0aW9uX0FjdGlvbkxheWVyOiAnQWN0aW9uIGRhdGEnLFxyXG4gIG1hcEFjdGlvbl9Db25kaXRpb25zOiAnQ29uZGl0aW9ucycsXHJcbiAgbWFwQWN0aW9uX1JlbGF0ZU1lc3NhZ2U6ICdUcmlnZ2VyIC8gYWN0aW9uIGNvbm5lY3Rpb24nLFxyXG4gIG1hcEFjdGlvbl9UcmlnZ2VyTGF5ZXJGaWVsZDogJ1NlbGVjdCBhIHRyaWdnZXIgZmllbGQnLFxyXG4gIG1hcEFjdGlvbl9Ob25lOiAnbm9uZScsXHJcbiAgbWFwQWN0aW9uX0VxdWFsczogJ2VxdWFscycsXHJcbiAgbWFwQWN0aW9uX0FjdGlvbkxheWVyRmllbGQ6ICdTZWxlY3QgYW4gYWN0aW9uIGZpZWxkJyxcclxuICBtYXBBY3Rpb25fTW9yZUNvbmRpdGlvbnM6ICdNb3JlIGNvbmRpdGlvbnMnLFxyXG4gIG1hcEFjdGlvbl9TZXRFeHByZXNzaW9uOiAnUGxlYXNlIHNldCB5b3VyIGV4cHJlc3Npb24gZmlyc3QuJyxcclxuICBtYXBBY3Rpb25fQ2hvb3NlTGF5ZXI6ICdTZWxlY3QgZGF0YScsXHJcbiAgbWFwQWN0aW9uX0F1dG9CaW5kOiAnQXV0byBib3VuZC4nLFxyXG4gIG1hcEFjdGlvbl9Ob0xheWVyOiAnTm8gZGF0YS4nLFxyXG4gIG1hcEFjdGlvbl9Qb2ludDogJ1BvaW50JyxcclxuICBtYXBBY3Rpb25fUG9seWxpbmU6ICdQb2x5bGluZScsXHJcbiAgbWFwQWN0aW9uX1BvbHlnb246ICdQb2x5Z29uJyxcclxuICBtYXBBY3Rpb25fVXNlTGF5ZXJEZWZpbmVkU3ltYm9sczogJ1VzZSBsYXllci1kZWZpbmVkIHN5bWJvbHMnLFxyXG4gIG1hcEFjdGlvbl9Vc2VDdXN0b21TeW1ib2xzOiAnVXNlIGN1c3RvbSBzeW1ib2xzJyxcclxuICBtYXBab29tVG9BY3Rpb25fWm9vbVNjYWxlOiAnWm9vbSBzY2FsZScsXHJcbiAgbWFwWm9vbVRvQWN0aW9uX0F1dG9tYXRpYzogJ0F1dG9tYXRpYycsXHJcbiAgbWFwWm9vbVRvQWN0aW9uX0N1c3RvbTogJ0N1c3RvbScsXHJcbiAgbWFwWm9vbVRvQWN0aW9uX1R5cGVTY2FsZTogJ1R5cGUgYSBzY2FsZSdcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdGhlbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX2RhdGFfc291cmNlX3NlbGVjdG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHtcclxuICBSZWFjdCwgY3NzLCBqc3gsIHR5cGUgQWN0aW9uU2V0dGluZ1Byb3BzLCB0eXBlIFNlcmlhbGl6ZWRTdHlsZXMsIHR5cGUgSW1tdXRhYmxlT2JqZWN0LFxyXG4gIHR5cGUgSU1UaGVtZVZhcmlhYmxlcywgcG9saXNoZWQsIGdldEFwcFN0b3JlLCBJbW11dGFibGUsIHR5cGUgVXNlRGF0YVNvdXJjZSwgTWVzc2FnZVR5cGUsIENPTlNUQU5UUywgQWxsRGF0YVNvdXJjZVR5cGVzXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBSYWRpbywgTnVtZXJpY0lucHV0IH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHsgU2V0dGluZ1NlY3Rpb24sIFNldHRpbmdSb3cgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcclxuaW1wb3J0IHsgRGF0YVNvdXJjZVNlbGVjdG9yLCBERUZBVUxUX0RBVEFfVklFV19JRCB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3InXHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi4vc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdCdcclxuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnamltdS10aGVtZSdcclxuaW1wb3J0IHsgdHlwZSBBY3Rpb25Db25maWcsIGNoZWNrT3V0QWN0aW9uQ29uZmlnLCBnZXRVc2VEYXRhU291cmNlSW5mbywgZ2V0RHNCeVdpZGdldElkLCBnZXRBcHBDb25maWcgfSBmcm9tICcuL2FjdGlvbi11dGlscydcclxuXHJcbmludGVyZmFjZSBFeHRyYVByb3BzIHtcclxuICB0aGVtZT86IElNVGhlbWVWYXJpYWJsZXNcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlcyB7XHJcbiAgaXNTaG93TGF5ZXJMaXN0OiBib29sZWFuXHJcbiAgZGlzYWJsZURhdGFUcmlnZ2VyOiBib29sZWFuXHJcbn1cclxuXHJcbmludGVyZmFjZSBDb25maWcgZXh0ZW5kcyBBY3Rpb25Db25maWcge1xyXG4gIC8vdXNlRGF0YVNvdXJjZTogVXNlRGF0YVNvdXJjZVxyXG4gIC8vdXNlRGF0YVNvdXJjZXM/OiBVc2VEYXRhU291cmNlW11cclxuICBpc1VzZUN1c3RvbVpvb21Ub09wdGlvbj86IGJvb2xlYW5cclxuICB6b29tVG9PcHRpb24/OiB7XHJcbiAgICBzY2FsZTogbnVtYmVyXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJTUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxDb25maWc+XHJcblxyXG5jb25zdCBEU1NlbGVjdG9yVHlwZXMgPSBJbW11dGFibGUoW0FsbERhdGFTb3VyY2VUeXBlcy5GZWF0dXJlTGF5ZXIsIEFsbERhdGFTb3VyY2VUeXBlcy5TY2VuZUxheWVyXSlcclxuXHJcbmNsYXNzIF9ab29tVG9GZWF0dXJlQWN0aW9uU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QWN0aW9uU2V0dGluZ1Byb3BzPElNQ29uZmlnPiAmIEV4dHJhUHJvcHMsIFN0YXRlcz4ge1xyXG4gIE5vTG9ja1RyaWdnZXJMYXllcldpZGdldHMgPSBbJ01hcCddXHJcblxyXG4gIG1vZGFsU3R5bGU6IGFueSA9IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAnMCcsXHJcbiAgICBib3R0b206ICcwJyxcclxuICAgIHdpZHRoOiAnMjU5cHgnLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBib3JkZXJSaWdodDogJycsXHJcbiAgICBib3JkZXJCb3R0b206ICcnLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogJzFweCdcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgdGhpcy5tb2RhbFN0eWxlLmJvcmRlclJpZ2h0ID0gJzFweCBzb2xpZCBibGFjaydcclxuICAgIHRoaXMubW9kYWxTdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkIGJsYWNrJ1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlzU2hvd0xheWVyTGlzdDogZmFsc2UsXHJcbiAgICAgIGRpc2FibGVEYXRhVHJpZ2dlcjogcHJvcHMubWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRTZXRDaGFuZ2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjb25maWc6IEltbXV0YWJsZSh7XHJcbiAgICAgIHVzZURhdGFTb3VyY2U6IG51bGxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgICAvL2NvbnN0IGluaXRDb25maWcgPSB0aGlzLmdldEluaXRDb25maWcoKVxyXG4gICAgY29uc3QgaW5pdENvbmZpZyA9IGNoZWNrT3V0QWN0aW9uQ29uZmlnKHRoaXMucHJvcHMuY29uZmlnLCB0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZCwgdGhpcy5wcm9wcy5tZXNzYWdlVHlwZSlcclxuXHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy5wcm9wcy5jb25maWcuc2V0KCd1c2VEYXRhU291cmNlJywgaW5pdENvbmZpZy51c2VEYXRhU291cmNlKVxyXG4gICAgY29uZmlnID0gY29uZmlnLnNldCgndXNlRGF0YVNvdXJjZXMnLCBpbml0Q29uZmlnLnVzZURhdGFTb3VyY2VzKVxyXG5cclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXHJcbiAgICAgIGNvbmZpZzogY29uZmlnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0U3R5bGUgKHRoZW1lOiBJTVRoZW1lVmFyaWFibGVzKTogU2VyaWFsaXplZFN0eWxlcyB7XHJcbiAgICByZXR1cm4gY3NzYFxyXG4gICAgICAuc2V0dGluZy1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6ICR7cG9saXNoZWQucmVtKDEwKX0gJHtwb2xpc2hlZC5yZW0oMTYpfSAke3BvbGlzaGVkLnJlbSgwKX0gJHtwb2xpc2hlZC5yZW0oMTYpfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGVsZXRlSWNvbiB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG9wYWNpdHk6IC44O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGVsZXRlSWNvbjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIH1cclxuXHJcbiAgaGFuZGxlVHJpZ2dlckxheWVyQ2hhbmdlID0gKHVzZURhdGFTb3VyY2VzOiBVc2VEYXRhU291cmNlW10pID0+IHtcclxuICAgIGlmICh1c2VEYXRhU291cmNlcyAmJiB1c2VEYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlVHJpZ2dlckxheWVyU2VsZWN0ZWQodXNlRGF0YVNvdXJjZXMpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhbmRsZVJlbW92ZUxheWVyRm9yVHJpZ2dlckxheWVyKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVRyaWdnZXJMYXllclNlbGVjdGVkID0gKGN1cnJlbnRTZWxlY3RlZERzOiBVc2VEYXRhU291cmNlW10pID0+IHtcclxuICAgIC8vIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyBpcyB3aWRnZXRzLndpZGdldF8yLnVzZURhdGFTb3VyY2VzLlxyXG4gICAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKHRoaXMucHJvcHMubWVzc2FnZVdpZGdldElkLCB0aGlzLnByb3BzLm1lc3NhZ2VUeXBlKVxyXG5cclxuICAgIGxldCBmaW5hbFNlbGVjdGVkRHMgPSBudWxsXHJcblxyXG4gICAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnKClcclxuICAgIGNvbnN0IHdpZGdldHNJbmZvID0gYXBwQ29uZmlnPy53aWRnZXRzXHJcbiAgICBjb25zdCBtZXNzYWdlV2lkZ2V0SW5mbyA9IHdpZGdldHNJbmZvICYmIHdpZGdldHNJbmZvW3RoaXMucHJvcHMubWVzc2FnZVdpZGdldElkXVxyXG4gICAgaWYgKHRoaXMucHJvcHMubWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlICYmIG1lc3NhZ2VXaWRnZXRJbmZvICYmIG1lc3NhZ2VXaWRnZXRJbmZvLnVyaSAmJiBtZXNzYWdlV2lkZ2V0SW5mby51cmkuaW5jbHVkZXMoJ2FyY2dpcy1tYXAnKSkge1xyXG4gICAgICAvLyBNYXAgd2lkZ2V0IHN1cHBvcnRzIHB1Ymxpc2hpbmcgJ0VYVEVOVF9DSEFOR0UnIGFuZCAnREFUQV9SRUNPUkRTX1NFTEVDVElPTl9DSEFOR0UnIG1lc3NhZ2VzIGFuZCBNYXAgd2lkZ2V0IG9ubHkgc3RvcmVzIFdlYk1hcCBvciBXZWJTY2VuZSBkYXRhIHNvdXJjZXMgaW4gdXNlRGF0YVNvdXJjZXMuXHJcbiAgICAgIC8vIFNvIGlmIHRoZSBtZXNzYWdlIHdpZGdldCBpcyBNYXAgd2lkZ2V0LCB3ZSBjYW4ndCBmaWx0ZXIgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzIChXZWJNYXAgb3IgV2ViU2NlbmUgZHMpIGJ5IGN1cnJlbnRTZWxlY3RlZERzKGxheWVyIGRzKS5cclxuICAgICAgZmluYWxTZWxlY3RlZERzID0gY3VycmVudFNlbGVjdGVkRHNcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFRoZSBmb2xsb3dpbmcgY29kZSBsb2dpYyB3aWxsIGZpbHRlciBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgYnkgY3VycmVudFNlbGVjdGVkRHMuXHJcbiAgICAgIC8vIHN1cHBvcnRzIGRhdGEgdmlld1xyXG4gICAgICAvLyBmaW5hbFNlbGVjdGVkRHMgaXMgdXNlZCB0byB1cGRhdGUgYXBwQ29uZmlnLm1lc3NhZ2VDb25maWdzLm1lc3NhZ2VDb25maWdfMS5hY3Rpb25zWzBdLmNvbmZpZy51c2VEYXRhU291cmNlcyBhbmQgd2UgbXVzdCBtYWtlIHN1cmUgZmluYWxTZWxlY3RlZERzIGlzIHRoZSBzdWJzZXQgb2YgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLlxyXG4gICAgICAvLyBXaGVuIHRoZSB1c2VyIHNlbGVjdHMgYSBuZXcgZGF0YSBzb3VyY2UgZnJvbSB0aGUgRGF0YVNvdXJjZVNlbGVjdG9yLCB0aGUgRGF0YVNvdXJjZVNlbGVjdG9yLm9uQ2hhbmdlKGN1cnJlbnRTZWxlY3RlZERzKSBldmVudCB3aWxsIGJlIHRyaWdnZXJlZC5cclxuICAgICAgLy8gY3VycmVudFNlbGVjdGVkRHMgY29udGFpbnMgdGhlIG5ld2x5IHNlbGVjdGVkIGRhdGEgc291cmNlLCBidXQgdGhlIG5ld2x5IHNlbGVjdGVkIGRhdGEgc291cmNlIG11c3QgYmUgdGhlIGRlZmF1bHQgdmlldy5cclxuICAgICAgLy8gQnV0IHRoZSB1c2VEYXRhU291cmNlcyBjb25maWd1cmVkIGluIHRoZSB3aWRnZXQgbWF5IG5vdCBiZSBkZWZhdWx0IHZpZXcsIHNvIHdlIGNhbid0IHVzZSBjdXJyZW50U2VsZWN0ZWREcyBhcyBmaW5hbFNlbGVjdGVkRHMgZGlyZWN0bHkuXHJcbiAgICAgIC8vIFRvIG1ha2Ugc3VyZSBmaW5hbFNlbGVjdGVkRHMgaXMgdGhlIHN1YnNldCBvZiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMsIGl0IGlzIG5lY2Vzc2FyeSB0byBmaWx0ZXIgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzIGJ5IGN1cnJlbnRTZWxlY3RlZERzLlxyXG4gICAgICBmaW5hbFNlbGVjdGVkRHMgPSBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMuZmlsdGVyKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhU291cmNlID0gY3VycmVudFNlbGVjdGVkRHMuZmluZChkcyA9PiB7XHJcbiAgICAgICAgICBpZiAoKCFkcy5kYXRhVmlld0lkIHx8IGRzLmRhdGFWaWV3SWQgPT09IENPTlNUQU5UUy5PVVRQVVRfREFUQV9WSUVXX0lEKSAmJiAhdGhpcy5wcm9wcy5jb25maWcudXNlRGF0YVNvdXJjZXM/LmZpbmQocHJlRHMgPT4gZHMubWFpbkRhdGFTb3VyY2VJZCA9PT0gcHJlRHMubWFpbkRhdGFTb3VyY2VJZCkpIHtcclxuICAgICAgICAgICAgLy8gc2VsZWN0IGRzIGZyb20gZHMgbGlzdFxyXG4gICAgICAgICAgICByZXR1cm4gZHMubWFpbkRhdGFTb3VyY2VJZCA9PT0gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2UubWFpbkRhdGFTb3VyY2VJZFxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gc2VsZWN0IGRzIGZyb20gZGF0YSB2aWV3IGNoZWNrIGJveFxyXG4gICAgICAgICAgICByZXR1cm4gZHMuZGF0YVNvdXJjZUlkID09PSBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZS5kYXRhU291cmNlSWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoZGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBjb25maWcgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ3VzZURhdGFTb3VyY2UnLCBmaW5hbFNlbGVjdGVkRHNbMF0pXHJcbiAgICAvLyBzdXBwb3J0cyBtdWx0aXBsZSB0cmlnZ2VyXHJcbiAgICBjb25maWcgPSBjb25maWcuc2V0KCd1c2VEYXRhU291cmNlcycsIGZpbmFsU2VsZWN0ZWREcylcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXHJcbiAgICAgIGNvbmZpZzogY29uZmlnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlUmVtb3ZlTGF5ZXJGb3JUcmlnZ2VyTGF5ZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy5wcm9wcy5jb25maWcuc2V0KCd1c2VEYXRhU291cmNlJywgbnVsbClcclxuICAgIC8vIHN1cHBvcnRzIG11bHRpcGxlIHRyaWdnZXJcclxuICAgIGNvbmZpZyA9IGNvbmZpZy5zZXQoJ3VzZURhdGFTb3VyY2VzJywgW10pXHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxyXG4gICAgICBjb25maWc6IGNvbmZpZ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGhhbmRsZUlzVXNlQ3VzdG9tWm9vbVRvT3B0aW9uID0gKGlzVXNlQ3VzdG9tWm9vbVRvT3B0aW9uOiBib29sZWFuKSA9PiB7XHJcbiAgICBpZiAoaXNVc2VDdXN0b21ab29tVG9PcHRpb24pIHtcclxuICAgICAgaWYgKCF0aGlzLnByb3BzLmNvbmZpZy56b29tVG9PcHRpb24gfHwgIXRoaXMucHJvcHMuY29uZmlnLnpvb21Ub09wdGlvbi5zY2FsZSkge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxyXG4gICAgICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2lzVXNlQ3VzdG9tWm9vbVRvT3B0aW9uJywgaXNVc2VDdXN0b21ab29tVG9PcHRpb24pLnNldEluKFsnem9vbVRvT3B0aW9uJywgJ3NjYWxlJ10sIDUwMDApXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdpc1VzZUN1c3RvbVpvb21Ub09wdGlvbicsIGlzVXNlQ3VzdG9tWm9vbVRvT3B0aW9uKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGhhbmRsZVNldEN1c3RvbVpvb21TY2FsZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXRJbihbJ3pvb21Ub09wdGlvbicsICdzY2FsZSddLCB2YWx1ZSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRUcmlnZ2VyTGF5ZXJDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgLy9jb25zdCB0cmlnZ2VyRHNTZWxlY3RvclNvdXJjZURhdGEgPSB0aGlzLmdldERzU2VsZWN0b3JTb3VyY2VEYXRhKHRoaXMucHJvcHMubWVzc2FnZVdpZGdldElkLCB0aGlzLnByb3BzLmNvbmZpZy51c2VEYXRhU291cmNlLCB0aGlzLnByb3BzLmNvbmZpZy51c2VEYXRhU291cmNlcylcclxuICAgIGNvbnN0IHRyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YSA9IGdldFVzZURhdGFTb3VyY2VJbmZvKHRoaXMucHJvcHMubWVzc2FnZVdpZGdldElkLCB0aGlzLnByb3BzLmNvbmZpZy51c2VEYXRhU291cmNlLCB0aGlzLnByb3BzLmNvbmZpZy51c2VEYXRhU291cmNlcywgdGhpcy5wcm9wcy5tZXNzYWdlVHlwZSlcclxuXHJcbiAgICBsZXQgdXNlRGF0YVNvdXJjZXNcclxuICAgIGlmICh0aGlzLmNoZWNrSXNTdXBwb3J0TXVsdGlwbGVUcmlnZ2VyRGF0YVNvdXJjZXModGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWQpIHx8IHRyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YS51c2VEYXRhU291cmNlcykge1xyXG4gICAgICB1c2VEYXRhU291cmNlcyA9IEltbXV0YWJsZSh0cmlnZ2VyRHNTZWxlY3RvclNvdXJjZURhdGEudXNlRGF0YVNvdXJjZXMpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1c2VEYXRhU291cmNlcyA9IHRyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YS51c2VEYXRhU291cmNlID8gSW1tdXRhYmxlKFt0cmlnZ2VyRHNTZWxlY3RvclNvdXJjZURhdGEudXNlRGF0YVNvdXJjZV0pIDogSW1tdXRhYmxlKFtdKVxyXG4gICAgfVxyXG4gICAgY29uc3QgaXNEaXNhYmxlRGF0YVZpZXcgPSB0aGlzLmNoZWNrSXNEaXNhYmxlRGF0YVZpZXcodGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWQpXHJcbiAgICBjb25zdCBpc0Rpc2FibGVEYXRhU291cmNlTGlzdCA9IHRyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YS5pc1JlYWRPbmx5ICYmIGlzRGlzYWJsZURhdGFWaWV3XHJcbiAgICAvLyBpZiBEYXRhU291cmNlU2VsZWN0b3IucHJvcHMuZGlzYWJsZURhdGFTb3VyY2VMaXN0IGlzIHRydWUsIG1lYW5zIERhdGFTb3VyY2VTZWxlY3RvcidzICdTZWxlY3QgZGF0YScgYnV0dG9uIGlzIGRpc2FibGVkLlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPERhdGFTb3VyY2VTZWxlY3RvclxyXG4gICAgICAgIHR5cGVzPXtEU1NlbGVjdG9yVHlwZXN9XHJcbiAgICAgICAgdXNlRGF0YVNvdXJjZXM9e3VzZURhdGFTb3VyY2VzfVxyXG4gICAgICAgIGZyb21Sb290RHNJZHM9e3RyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YS5mcm9tUm9vdERzSWRzfVxyXG4gICAgICAgIGZyb21Ec0lkcz17dHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhLmZyb21Ec0lkc31cclxuICAgICAgICBoaWRlQWRkRGF0YUJ1dHRvblxyXG4gICAgICAgIGhpZGVUeXBlRHJvcGRvd25cclxuICAgICAgICBtdXN0VXNlRGF0YVNvdXJjZVxyXG4gICAgICAgIGRpc2FibGVSZW1vdmU9eygpID0+IHRyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YS5pc1JlYWRPbmx5fVxyXG4gICAgICAgIGRpc2FibGVEYXRhU291cmNlTGlzdD17aXNEaXNhYmxlRGF0YVNvdXJjZUxpc3R9XHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVHJpZ2dlckxheWVyQ2hhbmdlfVxyXG4gICAgICAgIHdpZGdldElkPXt0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZH1cclxuICAgICAgICBkaXNhYmxlRGF0YVZpZXc9e2ZhbHNlfVxyXG4gICAgICAgIGhpZGVEYXRhVmlldz17KChkYXRhVmlld0pzb24sIG1haW5EYXRhU291cmNlSWQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyA9IGdldERzQnlXaWRnZXRJZCh0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZCwgdGhpcy5wcm9wcy5tZXNzYWdlVHlwZSlcclxuICAgICAgICAgIGNvbnN0IGZpbHRlcmVkTWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmZpbHRlcihtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkID09PSBtYWluRGF0YVNvdXJjZUlkXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0RHNWaWV3ID0gZmlsdGVyZWRNZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMuZmluZChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZURhdGFWaWV3SWRcclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlLmRhdGFWaWV3SWQpIHtcclxuICAgICAgICAgICAgICBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZURhdGFWaWV3SWQgPSBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZS5kYXRhVmlld0lkXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VEYXRhVmlld0lkID0gREVGQVVMVF9EQVRBX1ZJRVdfSURcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VEYXRhVmlld0lkID09PSBkYXRhVmlld0pzb24uaWRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm4gIXRhcmdldERzVmlld1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIGlzTXVsdGlwbGU9e3RoaXMuY2hlY2tJc1N1cHBvcnRNdWx0aXBsZVRyaWdnZXJEYXRhU291cmNlcyh0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZCl9XHJcbiAgICAgICAgaXNNdWx0aXBsZURhdGFWaWV3PXt0cnVlfVxyXG4gICAgICAgIGhpZGVDcmVhdGVWaWV3QnV0dG9uXHJcbiAgICAgICAgZW5hYmxlVG9TZWxlY3RPdXRwdXREc0Zyb21TZWxmPXt0cnVlfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY2hlY2tJc1N1cHBvcnRNdWx0aXBsZVRyaWdnZXJEYXRhU291cmNlcyA9ICh3aWRnZXRJZDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XHJcbiAgICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk/LmFwcFN0YXRlSW5CdWlsZGVyPy5hcHBDb25maWdcclxuICAgIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3aWRnZXRJZF1cclxuICAgIGNvbnN0IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyA9IGdldERzQnlXaWRnZXRJZCh0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZCwgdGhpcy5wcm9wcy5tZXNzYWdlVHlwZSlcclxuICAgIGNvbnN0IHdpZGdldExhYmVsID0gd2lkZ2V0SnNvbj8ubWFuaWZlc3Q/LmxhYmVsXHJcbiAgICBpZiAod2lkZ2V0TGFiZWwgPT09ICdNYXAnKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5tZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRGF0YVNvdXJjZUZpbHRlckNoYW5nZSB8fCB0aGlzLnByb3BzLm1lc3NhZ2VUeXBlID09PSBNZXNzYWdlVHlwZS5EYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0lzRGlzYWJsZURhdGFWaWV3ID0gKHdpZGdldElkOiBzdHJpbmcpOiBib29sZWFuID0+IHtcclxuICAgIGlmICh0aGlzLnByb3BzLm1lc3NhZ2VUeXBlID09PSBNZXNzYWdlVHlwZS5EYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgLy9jb25zdCBhcHBDb25maWcgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk/LmFwcFN0YXRlSW5CdWlsZGVyPy5hcHBDb25maWdcclxuICAgIC8vY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dpZGdldElkXVxyXG4gICAgLy9pZiAod2lkZ2V0SnNvbikge1xyXG4gICAgLy8gIGNvbnN0IHdpZGdldExhYmVsID0gd2lkZ2V0SnNvbj8ubWFuaWZlc3Q/LmxhYmVsXHJcbiAgICAvLyAgaWYgKHdpZGdldExhYmVsID09PSAnTWFwJykge1xyXG4gICAgLy8gICAgcmV0dXJuIHRydWVcclxuICAgIC8vICB9IGVsc2Uge1xyXG4gICAgLy8gICAgcmV0dXJuIGZhbHNlXHJcbiAgICAvLyAgfVxyXG4gICAgLy99IGVsc2Uge1xyXG4gICAgLy8gIHJldHVybiBmYWxzZVxyXG4gICAgLy99XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjc3M9e3RoaXMuZ2V0U3R5bGUodGhpcy5wcm9wcy50aGVtZSl9PlxyXG4gICAgICAgIHshdGhpcy5zdGF0ZS5kaXNhYmxlRGF0YVRyaWdnZXIgJiYgPFNldHRpbmdTZWN0aW9uIHRpdGxlPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX1RyaWdnZXJMYXllcicsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX1RyaWdnZXJMYXllciB9KX0+XHJcbiAgICAgICAgICB7dGhpcy5nZXRUcmlnZ2VyTGF5ZXJDb250ZW50KCl9XHJcbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj59XHJcbiAgICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwWm9vbVRvQWN0aW9uX1pvb21TY2FsZScsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwWm9vbVRvQWN0aW9uX1pvb21TY2FsZSB9KX0+XHJcbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3LTEwMCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4Jz5cclxuICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBjaGVja2VkPXshdGhpcy5wcm9wcy5jb25maWcuaXNVc2VDdXN0b21ab29tVG9PcHRpb259XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7IHRoaXMuaGFuZGxlSXNVc2VDdXN0b21ab29tVG9PcHRpb24oZmFsc2UpIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbS0wIG1sLTInIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcFpvb21Ub0FjdGlvbl9BdXRvbWF0aWMnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcFpvb21Ub0FjdGlvbl9BdXRvbWF0aWMgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHctMTAwIGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsaWduLWl0ZW1zLWNlbnRlciBkLWZsZXgnPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IGNoZWNrZWQ9e3RoaXMucHJvcHMuY29uZmlnLmlzVXNlQ3VzdG9tWm9vbVRvT3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4geyB0aGlzLmhhbmRsZUlzVXNlQ3VzdG9tWm9vbVRvT3B0aW9uKHRydWUpIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbS0wIG1sLTInIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcFpvb21Ub0FjdGlvbl9DdXN0b20nLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcFpvb21Ub0FjdGlvbl9DdXN0b20gfSl9XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmNvbmZpZy5pc1VzZUN1c3RvbVpvb21Ub09wdGlvbiAmJiA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPE51bWVyaWNJbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0xMDAnIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwWm9vbVRvQWN0aW9uX1R5cGVTY2FsZScsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwWm9vbVRvQWN0aW9uX1R5cGVTY2FsZSB9KX1cclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5jb25maWcuem9vbVRvT3B0aW9uICYmIHRoaXMucHJvcHMuY29uZmlnLnpvb21Ub09wdGlvbi5zY2FsZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZXRDdXN0b21ab29tU2NhbGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+fVxyXG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKF9ab29tVG9GZWF0dXJlQWN0aW9uU2V0dGluZylcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9