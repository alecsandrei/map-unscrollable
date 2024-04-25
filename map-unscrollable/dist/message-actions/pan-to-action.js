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

/***/ "./your-extensions/widgets/map-unscrollable/src/runtime/utils.ts":
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/map-unscrollable/src/runtime/utils.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkIsLive: () => (/* binding */ checkIsLive),
/* harmony export */   cloneFeature: () => (/* binding */ cloneFeature),
/* harmony export */   createNewFeaturelayer: () => (/* binding */ createNewFeaturelayer),
/* harmony export */   filterFeaturesByQuery: () => (/* binding */ filterFeaturesByQuery),
/* harmony export */   flashFeaturesByQuery: () => (/* binding */ flashFeaturesByQuery),
/* harmony export */   getChangedViewpointByViewAndUrlHashParams: () => (/* binding */ getChangedViewpointByViewAndUrlHashParams),
/* harmony export */   getJimuMapViewId: () => (/* binding */ getJimuMapViewId),
/* harmony export */   getLayersFromDataSourceIds: () => (/* binding */ getLayersFromDataSourceIds),
/* harmony export */   getMapBaseRestoreData: () => (/* binding */ getMapBaseRestoreData),
/* harmony export */   getMapOptionsByUrlHashParams: () => (/* binding */ getMapOptionsByUrlHashParams),
/* harmony export */   getViewpointInstanceFromHistory: () => (/* binding */ getViewpointInstanceFromHistory),
/* harmony export */   goToTargetImmediately: () => (/* binding */ goToTargetImmediately),
/* harmony export */   goToViewpointImmediately: () => (/* binding */ goToViewpointImmediately),
/* harmony export */   isNeedProjectSpatialReference: () => (/* binding */ isNeedProjectSpatialReference),
/* harmony export */   isNeedProjectViewpoint: () => (/* binding */ isNeedProjectViewpoint),
/* harmony export */   isSamelikeViewpoints: () => (/* binding */ isSamelikeViewpoints),
/* harmony export */   isTwoWidgetsMutuallyExtentChange: () => (/* binding */ isTwoWidgetsMutuallyExtentChange),
/* harmony export */   isWidgetSendZoomToActionToAnother: () => (/* binding */ isWidgetSendZoomToActionToAnother),
/* harmony export */   mapPanto: () => (/* binding */ mapPanto),
/* harmony export */   processZoomToFeatures: () => (/* binding */ processZoomToFeatures),
/* harmony export */   projectGeometries: () => (/* binding */ projectGeometries),
/* harmony export */   projectViewpoint: () => (/* binding */ projectViewpoint),
/* harmony export */   restoreMapBase: () => (/* binding */ restoreMapBase),
/* harmony export */   selectFeature: () => (/* binding */ selectFeature),
/* harmony export */   updateFeaturelayer: () => (/* binding */ updateFeaturelayer),
/* harmony export */   updateUrlHashParamsForActiveJimuMapView: () => (/* binding */ updateUrlHashParamsForActiveJimuMapView)
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
/* eslint-disable prefer-const */


function createNewFeaturelayer(mapBaseView, newFeatureSetValue) {
    return __awaiter(this, void 0, void 0, function* () {
        const newLayerPromises = [];
        newFeatureSetValue && Object.keys(newFeatureSetValue).forEach(layerId => {
            const layer = mapBaseView.map.layers.find(layer => layer.id === layerId);
            if (layer) {
                console.warn('the feature layer is already created');
                return;
            }
            newLayerPromises.push(addFeatureSetToMap(mapBaseView, newFeatureSetValue[layerId], layerId));
        });
        if (newLayerPromises.length === 0) {
            return null;
        }
        else {
            return Promise.all(newLayerPromises);
        }
    });
}
function updateFeaturelayer(mapBaseView, changedFeatureSetValue) {
    return __awaiter(this, void 0, void 0, function* () {
        const updatePromises = [];
        changedFeatureSetValue && Object.keys(changedFeatureSetValue).forEach(layerId => {
            const layer = mapBaseView.map.layers.find(layer => layer.id === layerId);
            if (layer) {
                mapBaseView.map.remove(layer);
                updatePromises.push(addFeatureSetToMap(mapBaseView, changedFeatureSetValue[layerId], layerId));
            }
        });
        if (updatePromises.length === 0) {
            return null;
        }
        else {
            return Promise.all(updatePromises);
        }
    });
}
function addFeatureSetToMap(mapBaseView, featureSet, layerId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve, reject) => {
            return (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                'esri/layers/FeatureLayer'
            ]).then(modules => {
                if (featureSet.features.length < 1) {
                    resolve(null);
                }
                else {
                    // let FeatureSet: typeof  __esri.FeatureSet;
                    let FeatureLayer;
                    // eslint-disable-next-line
                    [FeatureLayer] = modules;
                    const layerFromFeatureSet = featureSet.features[0].layer;
                    const fieldsInFeaturelayer = [];
                    const fieldMap = {};
                    for (let i = 0; i < layerFromFeatureSet.fields.length; i++) {
                        const fieldsItem = getReasonableField(layerFromFeatureSet.fields[i]);
                        fieldMap[layerFromFeatureSet.fields[i].name] = fieldsItem.name;
                        fieldsInFeaturelayer.push(fieldsItem);
                    }
                    const fieldsInPopupTemplate = [];
                    for (const key in featureSet.features[0].attributes) {
                        if (fieldMap[key]) {
                            const fieldsItem = {
                                fieldName: fieldMap[key],
                                label: key
                            };
                            fieldsInPopupTemplate.push(fieldsItem);
                        }
                    }
                    const sourceFeatures = [];
                    featureSet.features.forEach((feature, index) => {
                        const tempFeature = feature;
                        if (tempFeature.attributes) {
                            for (const key in tempFeature.attributes) {
                                tempFeature.attributes[fieldMap[key]] = tempFeature.attributes[key];
                            }
                            tempFeature.attributes.exbfid = index;
                        }
                        else {
                            tempFeature.attributes = {
                                exbfid: index
                            };
                        }
                        sourceFeatures.push(tempFeature);
                    });
                    const layer = new FeatureLayer({
                        id: layerId,
                        title: layerFromFeatureSet.title,
                        source: sourceFeatures,
                        fields: fieldsInFeaturelayer,
                        outFields: ['*'],
                        objectIdField: 'exbfid',
                        renderer: layerFromFeatureSet.renderer,
                        popupEnabled: true,
                        popupTemplate: {
                            title: 'information',
                            content: [{
                                    type: 'fields',
                                    fieldInfos: fieldsInPopupTemplate
                                }]
                        }
                    });
                    mapBaseView.map.add(layer);
                    layer.on('layerview-create', event => {
                        resolve(null);
                    });
                }
            });
        });
    });
}
function getReasonableField(field) {
    // the function is supported to normalize the field.name
    const fieldName = field.name;
    return {
        name: fieldName.replace(/\./g, '_').replace(/\(/g, '_').replace(/\)/g, '_'),
        alias: field.alias,
        type: field.type
    };
}
function selectFeature(mapBaseView, target, layerId) {
    // In this function, we assume that features come from the same layer
    let featureLayerId = layerId;
    let featureLayerView = null;
    let tempFeature = null;
    // if layerId doesn't exist, we get layerId by feature
    if (!featureLayerId) {
        if (target instanceof Array) {
            tempFeature = target[0];
        }
        else {
            tempFeature = target;
        }
        if (tempFeature) {
            featureLayerId = tempFeature.layer && tempFeature.layer.id;
        }
    }
    if (featureLayerId) {
        const layerViews = mapBaseView.allLayerViews;
        for (let i = 0; i < layerViews.length; i++) {
            if (layerViews.getItemAt(i).layer.id === featureLayerId) {
                featureLayerView = layerViews.getItemAt(i);
            }
        }
        if (featureLayerView) {
            return {
                layerId: featureLayerId,
                handle: featureLayerView.highlight(target)
            };
        }
        else {
            return null;
        }
    }
}
function goToTargetImmediately(view, _target) {
    return __awaiter(this, void 0, void 0, function* () {
        const viewSR = view.spatialReference;
        const geometries = yield projectGeometries([_target], viewSR);
        if (geometries && geometries.length > 0) {
            const target = geometries[0];
            view.goTo(target, { animate: false });
        }
    });
}
function goToViewpointImmediately(view, _viewpoint) {
    return __awaiter(this, void 0, void 0, function* () {
        const viewSR = view.spatialReference;
        const viewpoint = yield projectViewpoint(_viewpoint, viewSR);
        // view.goTo(viewpoint, { animate: false })
        view.viewpoint = viewpoint;
    });
}
function isNeedProjectViewpoint(viewpoint, viewSR) {
    var _a, _b, _c;
    const sr1 = (_a = viewpoint.targetGeometry) === null || _a === void 0 ? void 0 : _a.spatialReference;
    if (sr1 && isNeedProjectSpatialReference(sr1, viewSR)) {
        return true;
    }
    const sr2 = (_c = (_b = viewpoint.camera) === null || _b === void 0 ? void 0 : _b.position) === null || _c === void 0 ? void 0 : _c.spatialReference;
    if (sr2 && isNeedProjectSpatialReference(sr2, viewSR)) {
        return true;
    }
    return false;
}
function isNeedProjectSpatialReference(sr1, sr2) {
    const isSame = sr1.wkid === sr2.wkid || sr1.equals(sr2);
    //  In JS API 4.x, the view can handle WebMercator and WGS84 spatialReference auto
    const isLike = (sr1.isWebMercator || sr1.isWGS84) && (sr2.isWebMercator || sr2.isWGS84);
    return !isSame && !isLike;
}
function projectViewpoint(_viewpoint, viewSR) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const viewpoint = _viewpoint.clone();
        const targetGeometry = viewpoint.targetGeometry;
        const cameraPositon = (_a = viewpoint.camera) === null || _a === void 0 ? void 0 : _a.position;
        const toProjectGeometries = [];
        let isProjectTargetGeometry = false;
        let isProjectCameraPosition = false;
        if (targetGeometry && isNeedProjectSpatialReference(targetGeometry.spatialReference, viewSR)) {
            isProjectTargetGeometry = true;
            toProjectGeometries.push(targetGeometry);
        }
        if (cameraPositon && isNeedProjectSpatialReference(cameraPositon.spatialReference, viewSR)) {
            isProjectCameraPosition = true;
            toProjectGeometries.push(cameraPositon);
        }
        if (toProjectGeometries.length > 0) {
            const projectedGeometries = yield projectGeometries(toProjectGeometries, viewSR);
            if (isProjectTargetGeometry) {
                viewpoint.targetGeometry = projectedGeometries[0];
            }
            if (isProjectCameraPosition) {
                viewpoint.camera.position = projectedGeometries[projectedGeometries.length - 1];
            }
        }
        return viewpoint;
    });
}
function mapPanto(mapBaseView, target) {
    return __awaiter(this, void 0, void 0, function* () {
        const panToTarget = target;
        const tempBaseMapView = mapBaseView;
        if (panToTarget instanceof Array) {
            if (panToTarget.length === 0) {
                yield Promise.resolve();
                return;
            }
            if (panToTarget[0].geometry) {
                const geometryArr = [];
                for (let i = 0; i < panToTarget.length; i++) {
                    geometryArr.push(panToTarget[i].geometry);
                }
                yield getGeometriesExtent(geometryArr).then((extent) => {
                    return goTo(tempBaseMapView, extent.center);
                });
            }
            else {
                return getGeometriesExtent(panToTarget).then((extent) => {
                    return goTo(tempBaseMapView, extent.center);
                });
            }
        }
        else {
            if (panToTarget.geometry) {
                const getmetry = panToTarget.geometry;
                return goTo(tempBaseMapView, getCenterPoint(getmetry));
            }
            else {
                return goTo(tempBaseMapView, getCenterPoint(panToTarget));
            }
        }
    });
}
function goTo(view, target) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            // delay before updating of view turns true, 400ms is a temporary solution.
            setTimeout(() => {
                //// there is a conflict for paning when the layer view is updating, such as 'pan to' and 'filter'.
                //// this is a temporary solution, it can reduce the frequency of the problem rather than solve it completely.
                //if (view.updating) {
                //  const handler = view.watch('updating', value => {
                //    if (!value) {
                //      view.goTo(target).then(() => resolve()).catch(() => reject())
                //      handler.remove()
                //    }
                //  })
                //} else {
                //  view.goTo(target).then(() => resolve()).catch(() => reject())
                //}
                view.goTo(target).then(() => { resolve(); }).catch(() => { reject(); });
            }, 400);
        });
    });
}
function getGeometriesExtent(geometries) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
            'esri/geometry/Extent'
        ]).then((modules) => __awaiter(this, void 0, void 0, function* () {
            // eslint-disable-next-line
            let Extent;
            [Extent] = modules;
            if (!geometries || !geometries.length) {
                return yield Promise.resolve(null);
            }
            let fullExtent = null;
            let index;
            const numGeometries = geometries.length;
            for (index = 0; index < numGeometries; index++) {
                const geometry = geometries[index];
                if (!geometry) {
                    continue;
                }
                let extent = geometry.extent;
                if (!extent && geometry.type === 'point') {
                    const pointGeometry = geometry;
                    if (pointGeometry.x && pointGeometry.y) {
                        extent = new Extent({
                            xmax: pointGeometry.x,
                            xmin: pointGeometry.x,
                            ymax: pointGeometry.y,
                            ymin: pointGeometry.y,
                            zmax: pointGeometry.z,
                            zmin: pointGeometry.z,
                            spatialReference: pointGeometry.spatialReference
                        });
                    }
                }
                if (!extent) {
                    continue;
                }
                if (fullExtent) {
                    fullExtent = fullExtent.union(extent);
                }
                else {
                    fullExtent = extent;
                }
            }
            if (fullExtent.width < 0 && fullExtent.height < 0) {
                return yield Promise.resolve(null);
            }
            return yield Promise.resolve(fullExtent);
        }));
    });
}
function filterFeaturesByQuery(jimuMapView, actionLayerDataSourceId, querySQL) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!actionLayerDataSourceId) {
            return;
        }
        const dataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(actionLayerDataSourceId);
        if (!dataSource) {
            return;
        }
        let jimuLayerView = null;
        try {
            jimuLayerView = yield jimuMapView.whenJimuLayerViewLoadedByDataSource(dataSource);
        }
        catch (err) {
            jimuLayerView = null;
            console.error('can\'t get jimuLayerView by dataSource', dataSource, err);
        }
        if (jimuLayerView && jimuLayerView.layer && (jimuLayerView.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.LayerTypes.FeatureLayer || jimuLayerView.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.LayerTypes.SceneLayer)) {
            jimuLayerView.setDefinitionExpression(querySQL);
        }
    });
}
function queryFeatures(layerObject, querySQL, outFields) {
    return (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
        'esri/rest/support/Query'
    ]).then(modules => {
        let Query;
        [Query] = modules;
        const query = new Query();
        query.where = querySQL;
        query.outFields = outFields || [];
        query.returnGeometry = true;
        return layerObject.queryFeatures(query).then(featureSet => {
            return featureSet;
        });
    });
}
function flashOnFeatureLayer(jimuMapView, querySQL, tempJimuLayerView) {
    if ((tempJimuLayerView).view) {
        let featureLayerView = (tempJimuLayerView).view;
        if (featureLayerView) {
            queryFeatures(featureLayerView.layer, querySQL, []).then(featureSet => {
                if (featureSet && featureSet.features && featureSet.features.length > 0) {
                    const symbol = getFlashSymbol(featureLayerView.layer.geometryType);
                    startFlash(jimuMapView.view, featureSet.features, symbol);
                }
            });
        }
        else {
            return null;
        }
    }
    else {
        (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
            'esri/layers/FeatureLayer'
        ]).then(modules => {
            let FeatureLayer;
            [FeatureLayer] = modules;
            let tempFeatureLayer = new FeatureLayer({
                url: jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getUrlByLayer(tempJimuLayerView.layer)
            });
            tempFeatureLayer.load().then(() => {
                queryFeatures(tempFeatureLayer, querySQL, []).then(featureSet => {
                    if (featureSet && featureSet.features && featureSet.features.length > 0) {
                        const symbol = getFlashSymbol(featureSet.features[0].geometry.type);
                        startFlash(jimuMapView.view, featureSet.features, symbol);
                    }
                });
            });
        });
    }
}
let sceneHightlightHandle = null;
function flashOnSceneLayer(jimuMapView, querySQL, tempJimuLayerView) {
    var _a;
    if ((tempJimuLayerView).view) {
        let sceneLayerView = (tempJimuLayerView).view;
        // @ts-expect-error
        queryFeatures((_a = sceneLayerView === null || sceneLayerView === void 0 ? void 0 : sceneLayerView.layer) === null || _a === void 0 ? void 0 : _a.associatedLayer, querySQL, []).then(featureSet => {
            if (featureSet && featureSet.features && featureSet.features.length > 0) {
                const objectIdField = sceneLayerView.layer.objectIdField;
                const objectIds = featureSet.features.map(feature => feature.attributes[objectIdField]);
                let i = 0;
                const maxFlashCount = 6;
                let highlightColor = [255, 255, 0, 0.8];
                const originalHighlightOptions = jimuMapView.view.highlightOptions;
                const flash = function () {
                    if (i < maxFlashCount) {
                        i++;
                        if (highlightColor) {
                            highlightColor = null;
                            // @ts-expect-error
                            jimuMapView.view.highlightOptions = { color: [0, 0, 0, 0] };
                            sceneHightlightHandle && sceneHightlightHandle.remove();
                            sceneHightlightHandle = sceneLayerView.highlight(objectIds);
                        }
                        else {
                            highlightColor = [255, 255, 0, 0.8];
                            // @ts-expect-error
                            jimuMapView.view.highlightOptions = { color: highlightColor };
                            sceneHightlightHandle && sceneHightlightHandle.remove();
                            sceneHightlightHandle = sceneLayerView.highlight(objectIds);
                        }
                        setTimeout(flash, 500);
                    }
                    else {
                        jimuMapView.view.highlightOptions = originalHighlightOptions;
                        sceneHightlightHandle && sceneHightlightHandle.remove();
                    }
                };
                setTimeout(flash, 500);
            }
        });
    }
}
function flashFeaturesByQuery(jimuMapView, layerDataSourceId, querySQL) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!layerDataSourceId) {
            return;
        }
        const dataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(layerDataSourceId);
        if (!dataSource) {
            return;
        }
        let jimuLayerView = null;
        try {
            jimuLayerView = yield jimuMapView.whenJimuLayerViewLoadedByDataSource(dataSource);
        }
        catch (err) {
            jimuLayerView = null;
            console.error('can\'t get jimuLayerView by dataSource', dataSource, err);
        }
        if (jimuLayerView && jimuLayerView.layer) {
            if (jimuLayerView.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.LayerTypes.FeatureLayer) {
                flashOnFeatureLayer(jimuMapView, querySQL, jimuLayerView);
            }
            else if (jimuLayerView.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.LayerTypes.SceneLayer) {
                flashOnSceneLayer(jimuMapView, querySQL, jimuLayerView);
            }
        }
    });
}
function startFlash(mapBaseView, features, symbol) {
    (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
        'esri/Graphic'
    ]).then(modules => {
        // eslint-disable-next-line
        let Graphic;
        [Graphic] = modules;
        const flashFeatures = function (features, maxFlashCount) {
            const graphics = [];
            let flashCount = 0;
            for (let i = 0; i < features.length; i++) {
                const tempGraphic = new Graphic({
                    geometry: features[i].geometry,
                    symbol: symbol,
                    attributes: features[i].attributes
                });
                graphics.push(tempGraphic);
            }
            const singleFlash = function () {
                mapBaseView.graphics.addMany(graphics);
                setTimeout(() => {
                    mapBaseView.graphics.removeMany(graphics);
                    flashCount = flashCount + 1;
                    if (flashCount < maxFlashCount) {
                        setTimeout(() => {
                            singleFlash();
                        }, 500);
                    }
                }, 500);
            };
            singleFlash();
        };
        flashFeatures(features, 3);
    });
}
function getFlashSymbol(geometryType) {
    if (['point', 'multipoint'].includes(geometryType)) {
        return {
            type: 'simple-marker',
            style: 'circle',
            color: [255, 255, 0, 0.8],
            size: '16px',
            outline: {
                color: [255, 255, 0, 0.8],
                width: 3
            }
        };
    }
    else if (['polyline'].includes(geometryType)) {
        return {
            type: 'simple-line',
            color: [255, 255, 0, 0.8],
            width: 3,
            style: 'solid'
        };
    }
    else if (['polygon', 'extent'].includes(geometryType)) {
        return {
            type: 'simple-fill', // autocasts as new SimpleFillSymbol()
            color: [255, 255, 0, 0.5],
            style: 'solid',
            outline: {
                color: [255, 255, 0, 0.8],
                width: 3
            }
        };
    }
    else if (['mesh'].includes(geometryType)) {
        return {
            type: 'mesh-3d', // autocasts as new MeshSymbol3D()
            symbolLayers: [{
                    type: 'fill', // autocasts as new FillSymbol3DLayer()
                    material: { color: [255, 255, 0, 0.8] }
                }]
        };
    }
    else {
        return null;
    }
}
function getCenterPoint(geometry) {
    // point | multipoint | polyline | polygon | extent | mesh
    switch (geometry.type) {
        case 'point':
            return geometry;
        case 'extent':
            return geometry.center;
        case 'polygon':
            return geometry.centroid;
        case 'polyline':
            return geometry.extent.center;
        default:
            return geometry && geometry.extent ? geometry.extent.center : undefined;
        // todo
    }
}
function cloneFeature(feature, Graphic) {
    let tempFeature = null;
    if (feature.clone) {
        tempFeature = feature.clone();
    }
    else {
        tempFeature = Graphic.fromJSON(Object.assign({}, feature));
        tempFeature.attributes = Object.assign({}, feature.attributes);
    }
    return tempFeature;
}
function projectGeometries(geometries, spatialReference) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!geometries || geometries.length === 0 || !geometries[0] ||
            spatialReference.wkid === geometries[0].spatialReference.wkid || (spatialReference.equals(geometries[0].spatialReference))) {
            return yield Promise.resolve(geometries);
        }
        else if (spatialReference.isWebMercator && geometries[0].spatialReference.isWGS84) {
            // In js api 4.x, the view can handle WebMercator and WGS84 spatialReference auto
            return yield Promise.resolve(geometries);
        }
        else if (spatialReference.isWGS84 && geometries[0].spatialReference.isWebMercator) {
            // In js api 4.x, the view can handle WebMercator and WGS84 spatialReference auto
            return yield Promise.resolve(geometries);
        }
        else {
            return yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.geometryUtils.projectToSpatialReference(geometries, spatialReference);
        }
    });
}
function processZoomToFeatures(mapBaseView, layer, features) {
    return __awaiter(this, void 0, void 0, function* () {
        if (mapBaseView && mapBaseView.type === '3d' && layer && layer.queryFeatures && features) {
            return yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                'esri/rest/support/Query'
            ]).then((modules) => {
                const [Query] = modules;
                const query = new Query();
                query.returnGeometry = true;
                query.outFields = ['*'];
                query.objectIds = features.map(feature => feature.attributes[layer.objectIdField]);
                return layer.queryFeatures(query).then((result) => __awaiter(this, void 0, void 0, function* () {
                    if (result && result.features && result.features.length === features.length) {
                        return yield Promise.resolve(result.features);
                    }
                    else {
                        return yield Promise.resolve(features);
                    }
                }), () => __awaiter(this, void 0, void 0, function* () {
                    return yield Promise.resolve(features);
                }));
            });
        }
        else {
            return yield Promise.resolve(features);
        }
    });
}
function checkIsLive(appMode) {
    if (window.jimuConfig.isInBuilder) {
        if (appMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Design) {
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return true;
    }
}
function getLayersFromDataSourceIds(dataSourceIds) {
    const layerPromises = [];
    dataSourceIds.forEach(dataSourceId => {
        const dataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(dataSourceId);
        let layerPromise;
        if (dataSource === null || dataSource === void 0 ? void 0 : dataSource.layer) {
            layerPromise = Promise.resolve(dataSource.layer);
        }
        else if (dataSource === null || dataSource === void 0 ? void 0 : dataSource.createJSAPILayerByDataSource) {
            layerPromise = dataSource.createJSAPILayerByDataSource();
        }
        else {
            layerPromise = Promise.resolve(null);
        }
        layerPromises.push(layerPromise);
    });
    return Promise.all(layerPromises);
}
function getJimuMapViewId(widgetId, dataSourceId) {
    // If dataSourceId is null, make sure it converts to empty string.
    const dsId = dataSourceId || '';
    return `${widgetId}-${dsId}`;
}
function getMapBaseRestoreData(mapInstance) {
    const { mapContainer, state, Geometry, InitialViewProperties, TileLayer, Basemap, MapView, SceneView, Extent, Viewpoint, PortalItem, Portal, WebMap, WebScene, Color, SpatialReference, Point, expectedDataSourceInfo, mapCreatingInfo, view, lastUpdateViewConfig, mapDs, dsManager, isFirstReceiveMessage } = mapInstance;
    return {
        mapContainer,
        state,
        Geometry,
        InitialViewProperties,
        TileLayer,
        Basemap,
        MapView,
        SceneView,
        Extent,
        Viewpoint,
        PortalItem,
        Portal,
        WebMap,
        WebScene,
        Color,
        SpatialReference,
        Point,
        expectedDataSourceInfo,
        mapCreatingInfo,
        view,
        lastUpdateViewConfig,
        mapDs,
        dsManager,
        isFirstReceiveMessage
    };
}
function restoreMapBase(mapInstance, restoreData) {
    const keys = Object.keys(restoreData);
    for (const key of keys) {
        mapInstance[key] = restoreData[key];
    }
}
function isTwoWidgetsMutuallyExtentChange(widgetId1, widgetId2) {
    if (widgetId1 && widgetId2) {
        const messageConfigs = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig.messageConfigs;
        if (messageConfigs) {
            const actionNames = ['panTo', 'zoomToFeature'];
            const messageType = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange;
            if (isWidgetSendActionsToAnother(widgetId1, widgetId2, messageConfigs, messageType, actionNames) &&
                isWidgetSendActionsToAnother(widgetId2, widgetId1, messageConfigs, messageType, actionNames)) {
                return true;
            }
        }
    }
    return false;
}
function isWidgetSendZoomToActionToAnother(sendMessageWidgetId, actionWidgetId, messageType) {
    if (sendMessageWidgetId && actionWidgetId) {
        const messageConfigs = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig.messageConfigs;
        if (messageConfigs) {
            const actionNames = ['zoomToFeature'];
            return isWidgetSendActionsToAnother(sendMessageWidgetId, actionWidgetId, messageConfigs, messageType, actionNames);
        }
    }
    return false;
}
function isWidgetSendActionsToAnother(sendMessageWidgetId, actionWidgetId, messageConfigs, messageType, actionNames) {
    if (messageConfigs) {
        const messageJsonArray = Object.values(messageConfigs);
        for (let i = 0; i < messageJsonArray.length; i++) {
            const messageJson = messageJsonArray[i];
            if (messageJson.widgetId === sendMessageWidgetId && messageJson.messageType === messageType) {
                const actions = messageJson.actions;
                for (let j = 0; j < actions.length; j++) {
                    const action = actions[j];
                    if (action.widgetId === actionWidgetId) {
                        if (actionNames.includes(action.actionName)) {
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false;
}
function isSamelikeViewpoints(view, vp1, vp2) {
    if (!vp1) {
        return false;
    }
    if (!vp2) {
        return false;
    }
    // We need to check both targetGeometry and camera.
    if (vp1.targetGeometry && vp1.targetGeometry.declaredClass === 'esri.geometry.Point' && vp2.targetGeometry && vp2.targetGeometry.declaredClass === 'esri.geometry.Point') {
        const screenPoint1 = view.toScreen(vp1.targetGeometry);
        const screenPoint2 = view.toScreen(vp2.targetGeometry);
        const deltaX = screenPoint1.x - screenPoint2.x;
        const deltaY = screenPoint1.y - screenPoint2.y;
        const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        if (dist >= 5) {
            return false;
        }
    }
    const camera1 = vp1.camera;
    const camera2 = vp2.camera;
    if (camera1 && camera2) {
        // compare viewpoint for SceneView
        const heading1 = parseFloat(camera1.heading.toFixed(2));
        const heading2 = parseFloat(camera2.heading.toFixed(2));
        if (heading1 !== heading2) {
            return false;
        }
        const tilt1 = parseFloat(camera1.tilt.toFixed(2));
        const tilt2 = parseFloat(camera2.tilt.toFixed(2));
        if (tilt1 !== tilt2) {
            return false;
        }
        const positionDist = camera1.position.distance(camera2.position);
        if (positionDist >= 1) {
            return false;
        }
    }
    else {
        // compare viewpoint for MapView
        const rotation1 = parseFloat(vp1.rotation.toFixed(2));
        const rotation2 = parseFloat(vp2.rotation.toFixed(2));
        if (rotation1 !== rotation2) {
            return false;
        }
        const deltaScale = vp1.scale - vp2.scale;
        if (Math.abs(deltaScale) >= 1) {
            return false;
        }
    }
    return true;
}
function getViewpointInstanceFromHistory(view, viewpointIndex) {
    if (view.viewpointHistory.length > 0) {
        const lastIndex = view.viewpointHistory.length - 1;
        if (viewpointIndex >= 0 && viewpointIndex <= lastIndex) {
            const viewpoint = view.viewpointHistory[viewpointIndex];
            return viewpoint.clone();
        }
    }
    return null;
}
function updateUrlHashParamsForActiveJimuMapView(jimuMapView) {
    var _a;
    if (jimuMapView && jimuMapView.isActive && jimuMapView.view && !jimuMapView.view.destroyed) {
        const view = jimuMapView.view;
        const urlManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.UrlManager.getInstance();
        const viewpointJson = view.viewpoint ? view.viewpoint.toJSON() : null;
        let viewpointStr = null;
        let centerStr = null;
        let scaleStr = null;
        let rotationStr = null;
        if (viewpointJson) {
            viewpointStr = JSON.stringify(viewpointJson);
        }
        // We only support center, scale and rotaion for MapView.
        if (view.type === '2d') {
            const wkid = (_a = view.spatialReference) === null || _a === void 0 ? void 0 : _a.wkid;
            if (wkid) {
                const viewCenter = view.center;
                centerStr = `${viewCenter.x},${viewCenter.y},${wkid}`;
            }
            scaleStr = String(view.scale);
            rotationStr = String(view.rotation);
        }
        view.lastViewpointToUpdateUrlParams = view.viewpoint ? view.viewpoint.clone() : null;
        view.lastViewpointUrlParamUpdateTimestamp = Date.now();
        const activeDatasourceId = jimuMapView.dataSourceId || null;
        const mapUrlHashParams = {
            active_datasource_id: activeDatasourceId,
            center: centerStr,
            scale: scaleStr,
            rotation: rotationStr,
            // if viewpointStr is null, UrlManager will remove it from url
            viewpoint: viewpointStr
        };
        // console.log('setWidgetUrlParams', Date.now())
        urlManager.setWidgetUrlParams(jimuMapView.mapWidgetId, mapUrlHashParams);
    }
}
/**
 * Get changed viewpoint by view and url hash params.
 * Return null if viewpoint not changed.
 * @param view
 * @param runtimeUrlHashParams
 * @param parseViewpoint
 * @param parseCenter
 * @param parseScale
 * @param parseRotation
 * @param Viewpoint
 * @param Point
 * @param SpatialReference
 * @returns
 */
function getChangedViewpointByViewAndUrlHashParams(view, runtimeUrlHashParams, parseViewpoint, parseCenter, parseScale, parseRotation, Viewpoint, Point, SpatialReference) {
    var _a;
    let result = null;
    const currViewpoint = (_a = view.viewpoint) === null || _a === void 0 ? void 0 : _a.clone();
    const is2D = view.type === '2d';
    if (!is2D) {
        parseCenter = false;
        parseScale = false;
        parseRotation = false;
    }
    const urlParamsMapOptions = getMapOptionsByUrlHashParams(runtimeUrlHashParams, is2D, Viewpoint, Point, SpatialReference);
    if (urlParamsMapOptions) {
        if (!parseViewpoint) {
            delete urlParamsMapOptions.viewpoint;
        }
        if (!parseCenter) {
            delete urlParamsMapOptions.center;
        }
        if (!parseScale) {
            delete urlParamsMapOptions.scale;
        }
        if (!parseRotation) {
            delete urlParamsMapOptions.rotation;
        }
        if (Object.keys(urlParamsMapOptions).length > 0) {
            if (is2D) {
                result = urlParamsMapOptions.viewpoint || currViewpoint;
                if (result) {
                    if (urlParamsMapOptions.center) {
                        result.targetGeometry = urlParamsMapOptions.center;
                    }
                    if ('scale' in urlParamsMapOptions) {
                        result.scale = urlParamsMapOptions.scale;
                    }
                    if ('rotation' in urlParamsMapOptions) {
                        result.rotation = urlParamsMapOptions.rotation;
                    }
                }
            }
            else {
                result = urlParamsMapOptions.viewpoint;
            }
        }
    }
    return result;
}
function getMapOptionsByUrlHashParams(runtimeUrlHashParams, is2D, Viewpoint, Point, SpatialReference) {
    let result = {};
    let viewpoint = null;
    let center = null;
    let scale = null;
    let rotation = null;
    if (runtimeUrlHashParams) {
        // parse viewpoint
        try {
            if (runtimeUrlHashParams.viewpoint) {
                const viewpointJson = JSON.parse(runtimeUrlHashParams.viewpoint);
                if (viewpointJson) {
                    viewpoint = Viewpoint.fromJSON(viewpointJson);
                }
            }
        }
        catch (e) {
            console.error('parse viewpoint from url hash params error', e);
            viewpoint = null;
        }
        // only support center, scale and rotation for MapView
        if (is2D) {
            // parse center
            // center format: x,y,wkid
            try {
                if (runtimeUrlHashParams.center) {
                    const splits = runtimeUrlHashParams.center.split(',');
                    if (splits.length >= 3) {
                        const x = parseFloat(splits[0]);
                        const y = parseFloat(splits[1]);
                        const wkid = parseFloat(splits[2]);
                        if (isValidNum(x) && isValidNum(y) && isValidNum(wkid)) {
                            const spatialReference = new SpatialReference({
                                wkid
                            });
                            center = new Point({
                                x,
                                y,
                                spatialReference
                            });
                        }
                    }
                }
            }
            catch (e) {
                console.error('parse center from url hash params error', e);
                center = null;
            }
            // parse scale
            try {
                if ('scale' in runtimeUrlHashParams) {
                    const scaleNum = parseFloat(runtimeUrlHashParams.scale);
                    if (isValidNum(scaleNum) && scaleNum >= 0) {
                        scale = scaleNum;
                    }
                }
            }
            catch (e) {
                scale = null;
                console.error('parse scale from url hash params error', e);
            }
            // parse rotation
            try {
                if ('rotation' in runtimeUrlHashParams) {
                    const rotationNum = parseFloat(runtimeUrlHashParams.rotation);
                    if (isValidNum(rotationNum) && rotationNum >= 0 && rotationNum <= 360) {
                        rotation = rotationNum;
                    }
                }
            }
            catch (e) {
                rotation = null;
                console.error('parse rotation from url hash params error', e);
            }
        }
    }
    if (viewpoint) {
        result.viewpoint = viewpoint;
    }
    // only support center, scale and rotation for MapView
    if (is2D) {
        if (center) {
            result.center = center;
        }
        if (isValidNum(scale)) {
            result.scale = scale;
        }
        if (isValidNum(rotation)) {
            result.rotation = rotation;
        }
    }
    if (Object.keys(result).length === 0) {
        result = null;
    }
    return result;
}
function isValidNum(value) {
    return typeof value === 'number' && !isNaN(value);
}


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
/*!***************************************************************************************!*\
  !*** ./your-extensions/widgets/map-unscrollable/src/message-actions/pan-to-action.ts ***!
  \***************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanToAction)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _runtime_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../runtime/utils */ "./your-extensions/widgets/map-unscrollable/src/runtime/utils.ts");
/* harmony import */ var _action_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-utils */ "./your-extensions/widgets/map-unscrollable/src/message-actions/action-utils.ts");




class PanToAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {
    constructor() {
        super(...arguments);
        this.NoLockTriggerLayerWidgets = ['Map'];
    }
    filterMessageDescription(messageDescription) {
        if (messageDescription.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange) {
            return true;
        }
        else if (messageDescription.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourcesChange) {
            return true;
        }
        else if (messageDescription.messageType !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordSetChange &&
            messageDescription.messageType !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange &&
            messageDescription.messageType !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange) {
            return false;
        }
        else {
            const dataSourceManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
            const messageWidgetUseDataSources = (0,_action_utils__WEBPACK_IMPORTED_MODULE_3__.getDsByWidgetId)(messageDescription.widgetId, messageDescription.messageType);
            return messageWidgetUseDataSources.some(useDataSource => {
                const ds = dataSourceManager.getDataSource(useDataSource.dataSourceId);
                // widget1 send message to map widget, ds comes from widget1.useDataSources.
                if (ds) {
                    // #16835, ds maybe not ready when the ExB app is opened and add the message action immediately in widget action setting
                    if (ds.type === 'WEB_MAP' || ds.type === 'WEB_SCENE') {
                        // If ds.type is WEB_MAP or WEB_SCENE, means widget1 is also a map widget.
                        return true;
                    }
                    else {
                        // widget1 is not map widget, like list widget uses a layer ds.
                        return !!ds.getGeometryType();
                    }
                }
                return false;
            });
        }
    }
    filterMessage(message) {
        return true;
    }
    getSettingComponentUri(messageType, messageWidgetId) {
        //const config = getAppStore().getState().appStateInBuilder ? getAppStore().getState().appStateInBuilder.appConfig : getAppStore().getState().appConfig
        //const messageWidgetJson = config.widgets[messageWidgetId]
        if (messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange ||
            messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange) {
            return 'message-actions/pan-to-action-setting';
        }
        else {
            return null;
        }
    }
    onExecute(message, actionConfig) {
        // message.widgetId is message sender, this.widgetId is message receiver
        return (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)(['esri/Graphic']).then(modules => {
            var _a;
            let Graphic = null;
            [Graphic] = modules;
            switch (message.type) {
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordSetChange:
                    if ((0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.isWidgetSendZoomToActionToAnother)(message.widgetId, this.widgetId, jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordSetChange)) {
                        // message.widgetId sends both panTo and zoomTo actions to this.widgetId, we should not execute panTo action to avoid conflict with zoomTo action.
                        break;
                    }
                    const dataRecordSetChangeMessage = message;
                    if (dataRecordSetChangeMessage.changeType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.RecordSetChangeType.CreateUpdate) {
                        const geometries = [];
                        dataRecordSetChangeMessage.dataRecordSets.forEach(dataRecordSet => {
                            if (dataRecordSet && dataRecordSet.records) {
                                for (let i = 0; i < dataRecordSet.records.length; i++) {
                                    const dataRecordFeature = dataRecordSet.records[i].feature;
                                    if (dataRecordFeature) {
                                        geometries.push((0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.cloneFeature)(dataRecordFeature, Graphic).geometry);
                                    }
                                }
                            }
                        });
                        const panToValue = {
                            type: 'pan-to-geometries',
                            geometries: geometries
                        };
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', panToValue);
                    }
                    break;
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange:
                    if ((0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.isWidgetSendZoomToActionToAnother)(message.widgetId, this.widgetId, jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange)) {
                        // message.widgetId sends both panTo and zoomTo actions to this.widgetId, we should not execute panTo action to avoid conflict with zoomTo action.
                        break;
                    }
                    const config = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig;
                    const messageWidgetJson = config.widgets[message.widgetId];
                    const messageWidgetLabel = messageWidgetJson.manifest.label;
                    const dataRecordsSelectionChangeMessage = message;
                    const geometries = [];
                    if (dataRecordsSelectionChangeMessage.records) {
                        if (dataRecordsSelectionChangeMessage.records[0]) {
                            //if (!actionConfig.useDataSource || (dataRecordsSelectionChangeMessage.records[0].dataSource.getMainDataSource().id !== actionConfig.useDataSource.mainDataSourceId)) {
                            //  break
                            //}
                            if (this.NoLockTriggerLayerWidgets.includes(messageWidgetLabel)) {
                                const mainDataSourceOfSelection = dataRecordsSelectionChangeMessage.records[0].dataSource.getMainDataSource();
                                if (!((_a = actionConfig === null || actionConfig === void 0 ? void 0 : actionConfig.useDataSources) === null || _a === void 0 ? void 0 : _a.some(useDataSource => (useDataSource === null || useDataSource === void 0 ? void 0 : useDataSource.mainDataSourceId) === mainDataSourceOfSelection.id))) {
                                    break;
                                }
                            }
                            else {
                                const selectionChangeDS = dataRecordsSelectionChangeMessage.records[0].dataSource;
                                const selectionChangeMainDS = selectionChangeDS === null || selectionChangeDS === void 0 ? void 0 : selectionChangeDS.getMainDataSource();
                                // check dsId of mainDS currently, will support view in the future.
                                if (!actionConfig.useDataSources.some(useDataSource => (useDataSource === null || useDataSource === void 0 ? void 0 : useDataSource.mainDataSourceId) === selectionChangeMainDS.id)) {
                                    break;
                                }
                            }
                        }
                        for (let i = 0; i < dataRecordsSelectionChangeMessage.records.length; i++) {
                            const dataRecordFeature = dataRecordsSelectionChangeMessage.records[i].feature;
                            if (dataRecordFeature) {
                                geometries.push((0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.cloneFeature)(dataRecordFeature, Graphic).geometry);
                            }
                        }
                    }
                    const panToValue = {
                        type: 'pan-to-geometries',
                        geometries: geometries
                    };
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', panToValue);
                    break;
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange:
                    if ((0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.isWidgetSendZoomToActionToAnother)(message.widgetId, this.widgetId, jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange)) {
                        // message.widgetId sends both panTo and zoomTo actions to this.widgetId, we should not execute panTo action to avoid conflict with zoomTo action.
                        // isWidgetSendZoomToActionToAnother() can only handle simple panTo and zoomTo conflict.
                        // To avoid more complicated panTo and zoomTo conflict cases, we do it in handleActionForPanToActionValue of mapbase.
                        break;
                    }
                    const extentChangeMessage = message;
                    const relatedWidgetIds = extentChangeMessage.getRelatedWidgetIds();
                    if (relatedWidgetIds.includes(this.widgetId)) {
                        break;
                    }
                    const extentValue = {
                        type: 'pan-to-extent',
                        geometries: [extentChangeMessage.extent],
                        stationary: extentChangeMessage.stationary,
                        publishTime: extentChangeMessage.publishTime,
                        publishWidgetId: extentChangeMessage.widgetId
                    };
                    const panToFeatureActionValue = {
                        value: extentValue,
                        relatedWidgets: relatedWidgetIds
                    };
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue', panToFeatureActionValue);
                    break;
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange:
                    if ((0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.isWidgetSendZoomToActionToAnother)(message.widgetId, this.widgetId, jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange)) {
                        // message.widgetId sends both panTo and zoomTo actions to this.widgetId, we should not execute panTo action to avoid conflict with zoomTo action.
                        break;
                    }
                    const filterChangeMessage = message;
                    // support view.
                    if (!actionConfig.useDataSources.some(useDataSource => filterChangeMessage.dataSourceIds.some(dataSourceId => (useDataSource === null || useDataSource === void 0 ? void 0 : useDataSource.dataSourceId) === dataSourceId))) {
                        break;
                    }
                    const filterChangeActionValue = {
                        type: 'pan-to-query-params',
                        dataSourceIds: filterChangeMessage.dataSourceIds,
                        useDataSources: actionConfig.useDataSources || []
                    };
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', filterChangeActionValue);
                    break;
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourcesChange:
                    if ((0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.isWidgetSendZoomToActionToAnother)(message.widgetId, this.widgetId, jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourcesChange)) {
                        // message.widgetId sends both panTo and zoomTo actions to this.widgetId, we should not execute panTo action to avoid conflict with zoomTo action.
                        break;
                    }
                    const dataSourcesChangeMessage = message;
                    if (dataSourcesChangeMessage.changeType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourcesChangeType.Create) {
                        const dataSourceIds = [];
                        dataSourcesChangeMessage.dataSources.forEach(dataSource => {
                            dataSourceIds.push(dataSource.id);
                        });
                        const panToFeatureActionValueForLayers = {
                            type: 'pan-to-layers',
                            dataSourceIds: dataSourceIds
                        };
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', panToFeatureActionValueForLayers);
                    }
                    break;
            }
            return true;
        });
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXAtdW5zY3JvbGxhYmxlL2Rpc3QvbWVzc2FnZS1hY3Rpb25zL3Bhbi10by1hY3Rpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyTDtBQUN4STtBQUU1QyxTQUFTLHNCQUFzQixDQUFFLEdBQVcsRUFBRSxXQUF3QjtJQUMzRSxNQUFNLGdCQUFnQixHQUFHLDZCQUE2QixDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUM7SUFDeEUsT0FBTyxnQkFBZ0IsS0FBSyx1REFBZ0IsQ0FBQyxnQkFBZ0I7QUFDL0QsQ0FBQztBQUVNLFNBQVMsNkJBQTZCLENBQUUsR0FBVyxFQUFFLFdBQXdCOztJQUNsRixNQUFNLFNBQVMsR0FBRyxZQUFZLEVBQUU7SUFDaEMsTUFBTSxVQUFVLEdBQUcsZUFBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLE9BQU8sMENBQUcsR0FBRyxDQUFDO0lBQzVDLE1BQU0sZUFBZSxHQUFHLGdCQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsUUFBUSwwQ0FBRSxlQUFlO0lBQzdELElBQUksZ0JBQWdCLEdBQUcsdURBQWdCLENBQUMsYUFBYTtJQUNyRCxlQUFlLGFBQWYsZUFBZSx1QkFBZixlQUFlLENBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQzVCLE1BQU0sc0JBQXNCLEdBQUcsRUFBUztRQUN4QyxJQUFJLHVCQUFzQixhQUF0QixzQkFBc0IsdUJBQXRCLHNCQUFzQixDQUFFLGdCQUFnQixLQUFJLHVCQUFzQixhQUF0QixzQkFBc0IsdUJBQXRCLHNCQUFzQixDQUFFLFdBQVcsTUFBSyxXQUFXLEVBQUUsQ0FBQztZQUNwRyxnQkFBZ0IsR0FBRyxzQkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxnQkFBZ0I7UUFDN0QsQ0FBQztJQUNILENBQUMsQ0FBQztJQUNGLE9BQU8sZ0JBQWdCO0FBQ3pCLENBQUM7QUFPTSxTQUFTLG9CQUFv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QUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxnQ0FBZ0MsQ0FBQztvQkFDL0gsQ0FBQztvQkFDRCxNQUFLO1lBQ1QsQ0FBQztZQUNELE9BQU8sSUFBSTtRQUNiLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXAtdW5zY3JvbGxhYmxlL3NyYy9tZXNzYWdlLWFjdGlvbnMvYWN0aW9uLXV0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXAtdW5zY3JvbGxhYmxlL3NyYy9ydW50aW1lL3V0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWFwLXVuc2Nyb2xsYWJsZS9zcmMvbWVzc2FnZS1hY3Rpb25zL3Bhbi10by1hY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QXBwU3RvcmUsIHR5cGUgTWVzc2FnZVR5cGUsIE1lc3NhZ2VDYXJyeURhdGEsIHR5cGUgVXNlRGF0YVNvdXJjZSwgdHlwZSBJTVVzZURhdGFTb3VyY2UsIEltbXV0YWJsZSwgRGF0YVNvdXJjZU1hbmFnZXIsIHR5cGUgSW1tdXRhYmxlQXJyYXksIHR5cGUgSU1XaWRnZXRKc29uIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBBcmNHSVNEYXRhU291cmNlVHlwZXMgfSBmcm9tICdqaW11LWFyY2dpcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VzZU91dHB1dERhdGFTb3VyY2VzICh3SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgbWVzc2FnZUNhcnJ5RGF0YSA9IGdldE1lc3NhZ2VDYXJyeURhdGFCeVdpZGdldElkKHdJZCwgbWVzc2FnZVR5cGUpXHJcbiAgcmV0dXJuIG1lc3NhZ2VDYXJyeURhdGEgPT09IE1lc3NhZ2VDYXJyeURhdGEuT3V0cHV0RGF0YVNvdXJjZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpOiBNZXNzYWdlQ2FycnlEYXRhIHtcclxuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3SWRdXHJcbiAgY29uc3QgcHVibGlzaE1lc3NhZ2VzID0gd2lkZ2V0SnNvbj8ubWFuaWZlc3Q/LnB1Ymxpc2hNZXNzYWdlc1xyXG4gIGxldCBtZXNzYWdlQ2FycnlEYXRhID0gTWVzc2FnZUNhcnJ5RGF0YS5Vc2VEYXRhU291cmNlXHJcbiAgcHVibGlzaE1lc3NhZ2VzPy5mb3JFYWNoKGVsID0+IHtcclxuICAgIGNvbnN0IHB1Ymxpc2hNZXNzYWdlUHJvcGVydHkgPSBlbCBhcyBhbnlcclxuICAgIGlmIChwdWJsaXNoTWVzc2FnZVByb3BlcnR5Py5tZXNzYWdlQ2FycnlEYXRhICYmIHB1Ymxpc2hNZXNzYWdlUHJvcGVydHk/Lm1lc3NhZ2VUeXBlID09PSBtZXNzYWdlVHlwZSkge1xyXG4gICAgICBtZXNzYWdlQ2FycnlEYXRhID0gcHVibGlzaE1lc3NhZ2VQcm9wZXJ0eT8ubWVzc2FnZUNhcnJ5RGF0YVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIG1lc3NhZ2VDYXJyeURhdGFcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25Db25maWcge1xyXG4gIHVzZURhdGFTb3VyY2U6IFVzZURhdGFTb3VyY2VcclxuICB1c2VEYXRhU291cmNlcz86IFVzZURhdGFTb3VyY2VbXVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tPdXRBY3Rpb25Db25maWcgKGFjdGlvbkNvbmZpZzogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxBY3Rpb25Db25maWc+LCBtZXNzYWdlV2lkZ2V0SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XHJcbiAgY29uc3QgY29uZmlnID0gZ2V0QXBwQ29uZmlnKClcclxuICAvL2NvbnN0IG1lc3NhZ2VXaWRnZXRKc29uID0gY29uZmlnLndpZGdldHNbbWVzc2FnZVdpZGdldElkXVxyXG5cclxuICBsZXQgdXNlRGF0YVNvdXJjZTogSU1Vc2VEYXRhU291cmNlID0gbnVsbFxyXG4gIGNvbnN0IHVzZURhdGFTb3VyY2VzOiBJTVVzZURhdGFTb3VyY2VbXSA9IFtdXHJcbiAgaWYgKCFhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZSkge1xyXG4gICAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKG1lc3NhZ2VXaWRnZXRJZCwgbWVzc2FnZVR5cGUpXHJcbiAgICAvL2lmIChtZXNzYWdlV2lkZ2V0SnNvbiAmJiBtZXNzYWdlV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcyAmJiBtZXNzYWdlV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmZvckVhY2goKHVzZURTLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRzSnNvbiA9IGNvbmZpZy5kYXRhU291cmNlc1t1c2VEUy5kYXRhU291cmNlSWRdXHJcbiAgICAgICAgbGV0IHRlbXBVc2VEYXRhU291cmNlXHJcbiAgICAgICAgaWYgKGRzSnNvbiAmJiAoKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwKSB8fCAoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkpKSB7XHJcbiAgICAgICAgICB0ZW1wVXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGVtcFVzZURhdGFTb3VyY2UgPSBJbW11dGFibGUoe1xyXG4gICAgICAgICAgICBkYXRhU291cmNlSWQ6IHVzZURTLmRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogdXNlRFMubWFpbkRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogdXNlRFMucm9vdERhdGFTb3VyY2VJZCxcclxuICAgICAgICAgICAgZGF0YVZpZXdJZDogdXNlRFMuZGF0YVZpZXdJZFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGlmICghdXNlRGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICB1c2VEYXRhU291cmNlID0gdGVtcFVzZURhdGFTb3VyY2VcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVzZURhdGFTb3VyY2VzLnB1c2godGVtcFVzZURhdGFTb3VyY2UpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB1c2VEYXRhU291cmNlID0gY2hlY2tPdXRVc2VEYXRhU291cmNlKG1lc3NhZ2VXaWRnZXRJZCwgYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2UsIG1lc3NhZ2VUeXBlKVxyXG4gICAgaWYgKGFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlcykge1xyXG4gICAgICBhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZXMuZm9yRWFjaCh1c2VEUyA9PiB7XHJcbiAgICAgICAgY29uc3QgdGVtcFVzZURhdGFTb3VyY2UgPSBjaGVja091dFVzZURhdGFTb3VyY2UobWVzc2FnZVdpZGdldElkLCB1c2VEUywgbWVzc2FnZVR5cGUpXHJcbiAgICAgICAgdGVtcFVzZURhdGFTb3VyY2UgJiYgdXNlRGF0YVNvdXJjZXMucHVzaCh0ZW1wVXNlRGF0YVNvdXJjZSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB1c2VEYXRhU291cmNlOiB1c2VEYXRhU291cmNlLFxyXG4gICAgdXNlRGF0YVNvdXJjZXM6IHVzZURhdGFTb3VyY2VzXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja091dFVzZURhdGFTb3VyY2UgKG1lc3NhZ2VXaWRnZXRJZDogc3RyaW5nLCBvbGRVc2VEYXRhU291cmNlOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+LCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcclxuICBjb25zdCBjb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIC8vY29uc3Qgd2lkZ2V0SnNvbiA9IGNvbmZpZy53aWRnZXRzW21lc3NhZ2VXaWRnZXRJZF1cclxuICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQobWVzc2FnZVdpZGdldElkLCBtZXNzYWdlVHlwZSlcclxuICBsZXQgaW5pdFVzZURhdGFTb3VyY2UgPSBudWxsXHJcbiAgbGV0IGlzTWFwRHMgPSBmYWxzZVxyXG5cclxuICBjb25zdCBkc0lkID0gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzICYmIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXSAmJiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbMF0uZGF0YVNvdXJjZUlkXHJcbiAgaWYgKCFkc0lkKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZHNKc29uID0gY29uZmlnLmRhdGFTb3VyY2VzW2RzSWRdXHJcbiAgaWYgKGRzSnNvbiAmJiAoKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwKSB8fCAoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkpKSB7XHJcbiAgICBpc01hcERzID0gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZHNNID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxyXG4gIGNvbnN0IGlzb2xkVXNlRGF0YVNvdXJjZUlzT3V0cHV0RHMgPSBkc00uZ2V0RGF0YVNvdXJjZShvbGRVc2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZCk/LmdldERhdGFTb3VyY2VKc29uKCk/LmlzT3V0cHV0RnJvbVdpZGdldFxyXG5cclxuICBpZiAoaXNNYXBEcykge1xyXG4gICAgLy8gd2VibWFwIG9yIHdlYnNjZW5lIGRzXHJcbiAgICBsZXQgaXNVc2VPbGREcyA9IGZhbHNlXHJcbiAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1tpXS5kYXRhU291cmNlSWQgPT09IG9sZFVzZURhdGFTb3VyY2Uucm9vdERhdGFTb3VyY2VJZCkge1xyXG4gICAgICAgICAgaXNVc2VPbGREcyA9IHRydWVcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzVXNlT2xkRHMpIHtcclxuICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBvbGRVc2VEYXRhU291cmNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgLy8gZmVhdHVyZWxheWVyIGRzXHJcbiAgICBsZXQgaXNVc2VPbGREcyA9IGZhbHNlXHJcbiAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgb2xkVXNlRGF0YVNvdXJjZUlkID0gaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA/IG9sZFVzZURhdGFTb3VyY2U/Lm1haW5EYXRhU291cmNlSWQgOiBvbGRVc2VEYXRhU291cmNlPy5kYXRhU291cmNlSWRcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlRGF0YVNvdXJjZUlkID0gaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA/IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1tpXT8ubWFpbkRhdGFTb3VyY2VJZCA6IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1tpXT8uZGF0YVNvdXJjZUlkXHJcbiAgICAgICAgLy8gc3VwcG9ydCBkYXRhIHZpZXdcclxuICAgICAgICBpZiAoY3VycmVudFVzZURhdGFTb3VyY2VJZCA9PT0gb2xkVXNlRGF0YVNvdXJjZUlkKSB7XHJcbiAgICAgICAgICBpc1VzZU9sZERzID0gdHJ1ZVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNVc2VPbGREcykge1xyXG4gICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG9sZFVzZURhdGFTb3VyY2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgJiYgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGluaXRVc2VEYXRhU291cmNlID0gSW1tdXRhYmxlKHtcclxuICAgICAgICAgIGRhdGFTb3VyY2VJZDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgIG1haW5EYXRhU291cmNlSWQ6IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXS5tYWluRGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLnJvb3REYXRhU291cmNlSWRcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGluaXRVc2VEYXRhU291cmNlID0gbnVsbFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaW5pdFVzZURhdGFTb3VyY2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZURhdGFTb3VyY2VJbmZvICh3aWRnZXRJZDogc3RyaW5nLCB1c2VEYXRhU291cmNlOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+LCB1c2VEYXRhU291cmNlczogSW1tdXRhYmxlLkltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+LCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcclxuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3aWRnZXRJZF1cclxuICBsZXQgaXNSZWFkT25seSA9IGZhbHNlXHJcbiAgY29uc3QgZHNSb290SWRzID0gZ2V0RHNSb290SWRzQnlXaWRnZXRJZCh3aWRnZXRJZClcclxuICAvL2lmIChkc1Jvb3RJZHMgJiYgZHNSb290SWRzLmxlbmd0aCA9PT0gMCAmJiAod2lkZ2V0SnNvbiAmJiB3aWRnZXRKc29uLnVzZURhdGFTb3VyY2VzICYmIHdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMubGVuZ3RoID09PSAxKSkge1xyXG4gIC8vICBpc1JlYWRPbmx5ID0gdHJ1ZVxyXG4gIC8vfVxyXG5cclxuICAvL2lmICghZHNSb290SWRzICYmICh3aWRnZXRKc29uICYmIHdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMgJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEpKSB7XHJcbiAgLy8gIGlzUmVhZE9ubHkgPSB0cnVlXHJcbiAgLy99XHJcblxyXG4gIGlmICghZHNSb290SWRzIHx8IGRzUm9vdElkcz8ubGVuZ3RoID09PSAwKSB7XHJcbiAgICBpc1JlYWRPbmx5ID0gY2hlY2tJc09ubHlPbmVEcyh3aWRnZXRKc29uLCBtZXNzYWdlVHlwZSwgZHNSb290SWRzKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZnJvbURzSWRzID0gZHNSb290SWRzID8gdW5kZWZpbmVkIDogZ2V0RHNJZHNCeVdpZGdldElkKHdpZGdldElkLCBtZXNzYWdlVHlwZSlcclxuICBjb25zdCBkc1NlbGVjdG9yU291cmNlID0ge1xyXG4gICAgaXNSZWFkT25seTogaXNSZWFkT25seSxcclxuICAgIHVzZURhdGFTb3VyY2U6IHVzZURhdGFTb3VyY2UsXHJcbiAgICB1c2VEYXRhU291cmNlczogdXNlRGF0YVNvdXJjZXMgfHwgW10sXHJcbiAgICBmcm9tUm9vdERzSWRzOiBkc1Jvb3RJZHMsXHJcbiAgICBmcm9tRHNJZHM6IGZyb21Ec0lkc1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRzU2VsZWN0b3JTb3VyY2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERzQnlXaWRnZXRJZCAod0lkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSk6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+IHtcclxuICBjb25zdCBtZXNzYWdlQ2FycnlEYXRhID0gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQod0lkLCBtZXNzYWdlVHlwZSlcclxuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3SWRdXHJcbiAgY29uc3QgdXNlRGF0YVNvdXJjZXMgPSB3aWRnZXRKc29uPy51c2VEYXRhU291cmNlcyB8fCBJbW11dGFibGUoW10pXHJcbiAgY29uc3Qgb3V0cHV0RGF0YVNvdXJjZXMgPSBpbml0T3V0cHV0RGF0YVNvdXJjZXMod2lkZ2V0SnNvbj8ub3V0cHV0RGF0YVNvdXJjZXMpIHx8IEltbXV0YWJsZShbXSlcclxuICBjb25zdCBib3RoRGF0YXNvdXJjZSA9IHVzZURhdGFTb3VyY2VzPy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pLmNvbmNhdChvdXRwdXREYXRhU291cmNlcz8uYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KSlcclxuICBzd2l0Y2ggKG1lc3NhZ2VDYXJyeURhdGEpIHtcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5PdXRwdXREYXRhU291cmNlOlxyXG4gICAgICByZXR1cm4gb3V0cHV0RGF0YVNvdXJjZXNcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5Vc2VEYXRhU291cmNlOlxyXG4gICAgICByZXR1cm4gdXNlRGF0YVNvdXJjZXNcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5Cb3RoRGF0YVNvdXJjZTpcclxuICAgICAgcmV0dXJuIEltbXV0YWJsZShib3RoRGF0YXNvdXJjZSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0T3V0cHV0RGF0YVNvdXJjZXMgKG91dHB1dERhdGFTb3VyY2VzKTogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4ge1xyXG4gIGNvbnN0IGRzID0gb3V0cHV0RGF0YVNvdXJjZXM/Lm1hcChkc0lkID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGFTb3VyY2VJZDogZHNJZCxcclxuICAgICAgbWFpbkRhdGFTb3VyY2VJZDogZHNJZCxcclxuICAgICAgcm9vdERhdGFTb3VyY2VJZDogbnVsbFxyXG4gICAgfVxyXG4gIH0pID8/IFtdXHJcbiAgcmV0dXJuIEltbXV0YWJsZShkcylcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNPbmx5T25lRHMgKHdpZGdldEpzb246IElNV2lkZ2V0SnNvbiwgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlLCBkc1Jvb3RJZHM6IEltbXV0YWJsZUFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcclxuICBjb25zdCBtZXNzYWdlQ2FycnlEYXRhID0gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQod2lkZ2V0SnNvbj8uaWQsIG1lc3NhZ2VUeXBlKVxyXG4gIGNvbnN0IG91dHB1dERzID0gd2lkZ2V0SnNvbj8ub3V0cHV0RGF0YVNvdXJjZXMgfHwgW11cclxuICBjb25zdCB1c2VEcyA9IHdpZGdldEpzb24/LnVzZURhdGFTb3VyY2VzIHx8IFtdXHJcbiAgaWYgKGRzUm9vdElkcykge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIHN3aXRjaCAobWVzc2FnZUNhcnJ5RGF0YSkge1xyXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLk91dHB1dERhdGFTb3VyY2U6XHJcbiAgICAgIHJldHVybiBvdXRwdXREcz8ubGVuZ3RoID09PSAxXHJcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuVXNlRGF0YVNvdXJjZTpcclxuICAgICAgcmV0dXJuIHVzZURzPy5sZW5ndGggPT09IDFcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5Cb3RoRGF0YVNvdXJjZTpcclxuICAgICAgY29uc3QgZHNMZW5ndGggPSBvdXRwdXREcy5sZW5ndGggKyB1c2VEcy5sZW5ndGhcclxuICAgICAgcmV0dXJuIGRzTGVuZ3RoID09PSAxXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBwQ29uZmlnICgpIHtcclxuICByZXR1cm4gd2luZG93LmppbXVDb25maWcuaXNCdWlsZGVyID8gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5hcHBTdGF0ZUluQnVpbGRlcj8uYXBwQ29uZmlnIDogZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5hcHBDb25maWdcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RHNSb290SWRzQnlXaWRnZXRJZCAod0lkOiBzdHJpbmcpIHtcclxuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3SWRdXHJcbiAgY29uc3Qgcm9vdElkcyA9IFtdXHJcbiAgY29uc3QgZHNNID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxyXG4gIHdpZGdldEpzb24/LnVzZURhdGFTb3VyY2VzPy5mb3JFYWNoKCh1c2VEUzogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPikgPT4ge1xyXG4gICAgY29uc3QgZHMgPSBkc00uZ2V0RGF0YVNvdXJjZSh1c2VEUy5kYXRhU291cmNlSWQpXHJcbiAgICBpZiAoZHM/LnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXAgfHwgZHM/LnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkgeyAvLyBpcyByb290IGRzXHJcbiAgICAgIHJvb3RJZHMucHVzaCh1c2VEUy5kYXRhU291cmNlSWQpXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gcm9vdElkcy5sZW5ndGggPiAwID8gSW1tdXRhYmxlKHJvb3RJZHMpIDogdW5kZWZpbmVkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERzSWRzQnlXaWRnZXRJZCAod0lkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xyXG4gIGNvbnN0IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyA9IGdldERzQnlXaWRnZXRJZCh3SWQsIG1lc3NhZ2VUeXBlKVxyXG4gIHJldHVybiBJbW11dGFibGUobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLm1hcCgodXNlRFM6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4pID0+IHtcclxuICAgIGNvbnN0IGRzTSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcclxuICAgIGNvbnN0IGRzID0gZHNNLmdldERhdGFTb3VyY2UodXNlRFMuZGF0YVNvdXJjZUlkKVxyXG4gICAgbGV0IHJlc3VsdERzXHJcbiAgICBpZiAoZHMgJiYgZHMuaXNEYXRhVmlldykge1xyXG4gICAgICAvLyBzdXBwb3J0IGRhdGEgdmlld1xyXG4gICAgICByZXN1bHREcyA9IGRzPy5nZXRNYWluRGF0YVNvdXJjZSgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHREcyA9IGRzXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0RHM/LmlkXHJcbiAgfSkgPz8gW10pXHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWNvbnN0ICovXHJcbmltcG9ydCB7XHJcbiAgQXBwTW9kZSwgZGF0YVNvdXJjZVV0aWxzLCBEYXRhU291cmNlTWFuYWdlciwgdHlwZSBKU0FQSUxheWVyTWl4aW4sIGdlb21ldHJ5VXRpbHMsXHJcbiAgZ2V0QXBwU3RvcmUsIHR5cGUgTWVzc2FnZXNKc29uLCB0eXBlIEltbXV0YWJsZU9iamVjdCwgTWVzc2FnZVR5cGUsIFVybE1hbmFnZXJcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgSGlnaExpZ2h0SGFuZGxlLCB0eXBlIE1hcGJhc2VSZXN0b3JlRGF0YSwgdHlwZSBNYXBiYXNlVmlldyB9IGZyb20gJy4vY29tcG9uZW50cy9tYXBiYXNlJ1xyXG5pbXBvcnQgdHlwZSBNYXBCYXNlIGZyb20gJy4vY29tcG9uZW50cy9tYXBiYXNlJ1xyXG5pbXBvcnQgeyB0eXBlIElGZWF0dXJlIH0gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtdHlwZXMnXHJcbmltcG9ydCB7IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMsIHR5cGUgSmltdU1hcFZpZXcsIExheWVyVHlwZXMsIHR5cGUgSmltdUZlYXR1cmVMYXllclZpZXcsIHR5cGUgSmltdVNjZW5lTGF5ZXJWaWV3LCB0eXBlIEppbXVMYXllclZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVOZXdGZWF0dXJlbGF5ZXIgKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIG5ld0ZlYXR1cmVTZXRWYWx1ZT86IHsgW2xheWVySUQ6IHN0cmluZ106IF9fZXNyaS5GZWF0dXJlU2V0IH0pOiBQcm9taXNlPGFueT4ge1xyXG4gIGNvbnN0IG5ld0xheWVyUHJvbWlzZXMgPSBbXVxyXG4gIG5ld0ZlYXR1cmVTZXRWYWx1ZSAmJiBPYmplY3Qua2V5cyhuZXdGZWF0dXJlU2V0VmFsdWUpLmZvckVhY2gobGF5ZXJJZCA9PiB7XHJcbiAgICBjb25zdCBsYXllciA9IG1hcEJhc2VWaWV3Lm1hcC5sYXllcnMuZmluZChsYXllciA9PiBsYXllci5pZCA9PT0gbGF5ZXJJZClcclxuICAgIGlmIChsYXllcikge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ3RoZSBmZWF0dXJlIGxheWVyIGlzIGFscmVhZHkgY3JlYXRlZCcpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbmV3TGF5ZXJQcm9taXNlcy5wdXNoKGFkZEZlYXR1cmVTZXRUb01hcChtYXBCYXNlVmlldywgbmV3RmVhdHVyZVNldFZhbHVlW2xheWVySWRdLCBsYXllcklkKSlcclxuICB9KVxyXG5cclxuICBpZiAobmV3TGF5ZXJQcm9taXNlcy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChuZXdMYXllclByb21pc2VzKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUZlYXR1cmVsYXllciAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgY2hhbmdlZEZlYXR1cmVTZXRWYWx1ZT86IHsgW2xheWVySUQ6IHN0cmluZ106IF9fZXNyaS5GZWF0dXJlU2V0IH0pOiBQcm9taXNlPGFueT4ge1xyXG4gIGNvbnN0IHVwZGF0ZVByb21pc2VzID0gW11cclxuICBjaGFuZ2VkRmVhdHVyZVNldFZhbHVlICYmIE9iamVjdC5rZXlzKGNoYW5nZWRGZWF0dXJlU2V0VmFsdWUpLmZvckVhY2gobGF5ZXJJZCA9PiB7XHJcbiAgICBjb25zdCBsYXllciA9IG1hcEJhc2VWaWV3Lm1hcC5sYXllcnMuZmluZChsYXllciA9PiBsYXllci5pZCA9PT0gbGF5ZXJJZClcclxuICAgIGlmIChsYXllcikge1xyXG4gICAgICBtYXBCYXNlVmlldy5tYXAucmVtb3ZlKGxheWVyKVxyXG4gICAgICB1cGRhdGVQcm9taXNlcy5wdXNoKGFkZEZlYXR1cmVTZXRUb01hcChtYXBCYXNlVmlldywgY2hhbmdlZEZlYXR1cmVTZXRWYWx1ZVtsYXllcklkXSwgbGF5ZXJJZCkpXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgaWYgKHVwZGF0ZVByb21pc2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHVwZGF0ZVByb21pc2VzKVxyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkRmVhdHVyZVNldFRvTWFwIChtYXBCYXNlVmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBmZWF0dXJlU2V0OiBfX2VzcmkuRmVhdHVyZVNldCwgbGF5ZXJJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgcmV0dXJuIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJ1xyXG4gICAgXSkudGhlbihtb2R1bGVzID0+IHtcclxuICAgICAgaWYgKGZlYXR1cmVTZXQuZmVhdHVyZXMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgIHJlc29sdmUobnVsbClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBsZXQgRmVhdHVyZVNldDogdHlwZW9mICBfX2VzcmkuRmVhdHVyZVNldDtcclxuICAgICAgICBsZXQgRmVhdHVyZUxheWVyOiB0eXBlb2YgX19lc3JpLkZlYXR1cmVMYXllcjtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICBbRmVhdHVyZUxheWVyXSA9IG1vZHVsZXM7XHJcblxyXG4gICAgICAgIGNvbnN0IGxheWVyRnJvbUZlYXR1cmVTZXQgPSBmZWF0dXJlU2V0LmZlYXR1cmVzWzBdLmxheWVyIGFzIGFueVxyXG4gICAgICAgIGNvbnN0IGZpZWxkc0luRmVhdHVyZWxheWVyID0gW11cclxuICAgICAgICBjb25zdCBmaWVsZE1hcCA9IHt9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGF5ZXJGcm9tRmVhdHVyZVNldC5maWVsZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IGZpZWxkc0l0ZW0gPSBnZXRSZWFzb25hYmxlRmllbGQobGF5ZXJGcm9tRmVhdHVyZVNldC5maWVsZHNbaV0pXHJcbiAgICAgICAgICBmaWVsZE1hcFtsYXllckZyb21GZWF0dXJlU2V0LmZpZWxkc1tpXS5uYW1lXSA9IGZpZWxkc0l0ZW0ubmFtZVxyXG4gICAgICAgICAgZmllbGRzSW5GZWF0dXJlbGF5ZXIucHVzaChmaWVsZHNJdGVtKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZmllbGRzSW5Qb3B1cFRlbXBsYXRlID0gW11cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBmZWF0dXJlU2V0LmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgIGlmIChmaWVsZE1hcFtrZXldKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkc0l0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgZmllbGROYW1lOiBmaWVsZE1hcFtrZXldLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiBrZXlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaWVsZHNJblBvcHVwVGVtcGxhdGUucHVzaChmaWVsZHNJdGVtKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc291cmNlRmVhdHVyZXMgPSBbXVxyXG4gICAgICAgIGZlYXR1cmVTZXQuZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRlbXBGZWF0dXJlID0gZmVhdHVyZVxyXG4gICAgICAgICAgaWYgKHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGVtcEZlYXR1cmUuYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgIHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXNbZmllbGRNYXBba2V5XV0gPSB0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzW2tleV1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGVtcEZlYXR1cmUuYXR0cmlidXRlcy5leGJmaWQgPSBpbmRleFxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGVtcEZlYXR1cmUuYXR0cmlidXRlcyA9IHtcclxuICAgICAgICAgICAgICBleGJmaWQ6IGluZGV4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNvdXJjZUZlYXR1cmVzLnB1c2godGVtcEZlYXR1cmUpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgICAgICAgIGlkOiBsYXllcklkLFxyXG4gICAgICAgICAgdGl0bGU6IGxheWVyRnJvbUZlYXR1cmVTZXQudGl0bGUsXHJcbiAgICAgICAgICBzb3VyY2U6IHNvdXJjZUZlYXR1cmVzLFxyXG4gICAgICAgICAgZmllbGRzOiBmaWVsZHNJbkZlYXR1cmVsYXllcixcclxuICAgICAgICAgIG91dEZpZWxkczogWycqJ10sXHJcbiAgICAgICAgICBvYmplY3RJZEZpZWxkOiAnZXhiZmlkJyxcclxuICAgICAgICAgIHJlbmRlcmVyOiBsYXllckZyb21GZWF0dXJlU2V0LnJlbmRlcmVyLFxyXG4gICAgICAgICAgcG9wdXBFbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgcG9wdXBUZW1wbGF0ZToge1xyXG4gICAgICAgICAgICB0aXRsZTogJ2luZm9ybWF0aW9uJyxcclxuICAgICAgICAgICAgY29udGVudDogW3tcclxuICAgICAgICAgICAgICB0eXBlOiAnZmllbGRzJyxcclxuICAgICAgICAgICAgICBmaWVsZEluZm9zOiBmaWVsZHNJblBvcHVwVGVtcGxhdGVcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBtYXBCYXNlVmlldy5tYXAuYWRkKGxheWVyKVxyXG5cclxuICAgICAgICBsYXllci5vbignbGF5ZXJ2aWV3LWNyZWF0ZScsIGV2ZW50ID0+IHtcclxuICAgICAgICAgIHJlc29sdmUobnVsbClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJlYXNvbmFibGVGaWVsZCAoZmllbGQ6IF9fZXNyaS5GaWVsZCk6IF9fZXNyaS5GaWVsZCB7XHJcbiAgLy8gdGhlIGZ1bmN0aW9uIGlzIHN1cHBvcnRlZCB0byBub3JtYWxpemUgdGhlIGZpZWxkLm5hbWVcclxuICBjb25zdCBmaWVsZE5hbWUgPSBmaWVsZC5uYW1lXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IGZpZWxkTmFtZS5yZXBsYWNlKC9cXC4vZywgJ18nKS5yZXBsYWNlKC9cXCgvZywgJ18nKS5yZXBsYWNlKC9cXCkvZywgJ18nKSxcclxuICAgIGFsaWFzOiBmaWVsZC5hbGlhcyxcclxuICAgIHR5cGU6IGZpZWxkLnR5cGVcclxuICB9IGFzIGFueVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0RmVhdHVyZSAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgdGFyZ2V0OiBfX2VzcmkuR3JhcGhpYyB8IF9fZXNyaS5HcmFwaGljW10gfCBJRmVhdHVyZSB8IElGZWF0dXJlW10sIGxheWVySWQ/OiBzdHJpbmcpOiBIaWdoTGlnaHRIYW5kbGUge1xyXG4gIC8vIEluIHRoaXMgZnVuY3Rpb24sIHdlIGFzc3VtZSB0aGF0IGZlYXR1cmVzIGNvbWUgZnJvbSB0aGUgc2FtZSBsYXllclxyXG4gIGxldCBmZWF0dXJlTGF5ZXJJZCA9IGxheWVySWRcclxuICBsZXQgZmVhdHVyZUxheWVyVmlldyA9IG51bGxcclxuICBsZXQgdGVtcEZlYXR1cmUgPSBudWxsXHJcblxyXG4gIC8vIGlmIGxheWVySWQgZG9lc24ndCBleGlzdCwgd2UgZ2V0IGxheWVySWQgYnkgZmVhdHVyZVxyXG4gIGlmICghZmVhdHVyZUxheWVySWQpIHtcclxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICB0ZW1wRmVhdHVyZSA9IHRhcmdldFswXSBhcyBfX2VzcmkuR3JhcGhpY1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGVtcEZlYXR1cmUgPSB0YXJnZXQgYXMgX19lc3JpLkdyYXBoaWNcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGVtcEZlYXR1cmUpIHtcclxuICAgICAgZmVhdHVyZUxheWVySWQgPSB0ZW1wRmVhdHVyZS5sYXllciAmJiB0ZW1wRmVhdHVyZS5sYXllci5pZFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGZlYXR1cmVMYXllcklkKSB7XHJcbiAgICBjb25zdCBsYXllclZpZXdzID0gbWFwQmFzZVZpZXcuYWxsTGF5ZXJWaWV3c1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXllclZpZXdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChsYXllclZpZXdzLmdldEl0ZW1BdChpKS5sYXllci5pZCA9PT0gZmVhdHVyZUxheWVySWQpIHtcclxuICAgICAgICBmZWF0dXJlTGF5ZXJWaWV3ID0gbGF5ZXJWaWV3cy5nZXRJdGVtQXQoaSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChmZWF0dXJlTGF5ZXJWaWV3KSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGF5ZXJJZDogZmVhdHVyZUxheWVySWQsXHJcbiAgICAgICAgaGFuZGxlOiBmZWF0dXJlTGF5ZXJWaWV3LmhpZ2hsaWdodCh0YXJnZXQpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ29Ub1RhcmdldEltbWVkaWF0ZWx5ICh2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIF90YXJnZXQ6IF9fZXNyaS5HZW9tZXRyeSk6IFByb21pc2U8dm9pZD4ge1xyXG4gIGNvbnN0IHZpZXdTUiA9IHZpZXcuc3BhdGlhbFJlZmVyZW5jZVxyXG4gIGNvbnN0IGdlb21ldHJpZXMgPSBhd2FpdCBwcm9qZWN0R2VvbWV0cmllcyhbX3RhcmdldF0sIHZpZXdTUilcclxuXHJcbiAgaWYgKGdlb21ldHJpZXMgJiYgZ2VvbWV0cmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBnZW9tZXRyaWVzWzBdXHJcbiAgICB2aWV3LmdvVG8odGFyZ2V0LCB7IGFuaW1hdGU6IGZhbHNlIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ29Ub1ZpZXdwb2ludEltbWVkaWF0ZWx5ICh2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIF92aWV3cG9pbnQ6IF9fZXNyaS5WaWV3cG9pbnQpOiBQcm9taXNlPHZvaWQ+IHtcclxuICBjb25zdCB2aWV3U1IgPSB2aWV3LnNwYXRpYWxSZWZlcmVuY2VcclxuICBjb25zdCB2aWV3cG9pbnQgPSBhd2FpdCBwcm9qZWN0Vmlld3BvaW50KF92aWV3cG9pbnQsIHZpZXdTUilcclxuICAvLyB2aWV3LmdvVG8odmlld3BvaW50LCB7IGFuaW1hdGU6IGZhbHNlIH0pXHJcbiAgdmlldy52aWV3cG9pbnQgPSB2aWV3cG9pbnRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTmVlZFByb2plY3RWaWV3cG9pbnQgKHZpZXdwb2ludDogX19lc3JpLlZpZXdwb2ludCwgdmlld1NSOiBfX2VzcmkuU3BhdGlhbFJlZmVyZW5jZSk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IHNyMSA9IHZpZXdwb2ludC50YXJnZXRHZW9tZXRyeT8uc3BhdGlhbFJlZmVyZW5jZVxyXG5cclxuICBpZiAoc3IxICYmIGlzTmVlZFByb2plY3RTcGF0aWFsUmVmZXJlbmNlKHNyMSwgdmlld1NSKSkge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGNvbnN0IHNyMiA9IHZpZXdwb2ludC5jYW1lcmE/LnBvc2l0aW9uPy5zcGF0aWFsUmVmZXJlbmNlXHJcblxyXG4gIGlmIChzcjIgJiYgaXNOZWVkUHJvamVjdFNwYXRpYWxSZWZlcmVuY2Uoc3IyLCB2aWV3U1IpKSB7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc05lZWRQcm9qZWN0U3BhdGlhbFJlZmVyZW5jZSAoc3IxOiBfX2VzcmkuU3BhdGlhbFJlZmVyZW5jZSwgc3IyOiBfX2VzcmkuU3BhdGlhbFJlZmVyZW5jZSk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IGlzU2FtZSA9IHNyMS53a2lkID09PSBzcjIud2tpZCB8fCBzcjEuZXF1YWxzKHNyMilcclxuICAvLyAgSW4gSlMgQVBJIDQueCwgdGhlIHZpZXcgY2FuIGhhbmRsZSBXZWJNZXJjYXRvciBhbmQgV0dTODQgc3BhdGlhbFJlZmVyZW5jZSBhdXRvXHJcbiAgY29uc3QgaXNMaWtlID0gKHNyMS5pc1dlYk1lcmNhdG9yIHx8IHNyMS5pc1dHUzg0KSAmJiAoc3IyLmlzV2ViTWVyY2F0b3IgfHwgc3IyLmlzV0dTODQpXHJcbiAgcmV0dXJuICFpc1NhbWUgJiYgIWlzTGlrZVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvamVjdFZpZXdwb2ludCAoX3ZpZXdwb2ludDogX19lc3JpLlZpZXdwb2ludCwgdmlld1NSOiBfX2VzcmkuU3BhdGlhbFJlZmVyZW5jZSk6IFByb21pc2U8X19lc3JpLlZpZXdwb2ludD4ge1xyXG4gIGNvbnN0IHZpZXdwb2ludCA9IF92aWV3cG9pbnQuY2xvbmUoKVxyXG4gIGNvbnN0IHRhcmdldEdlb21ldHJ5ID0gdmlld3BvaW50LnRhcmdldEdlb21ldHJ5XHJcbiAgY29uc3QgY2FtZXJhUG9zaXRvbiA9IHZpZXdwb2ludC5jYW1lcmE/LnBvc2l0aW9uXHJcblxyXG4gIGNvbnN0IHRvUHJvamVjdEdlb21ldHJpZXM6IF9fZXNyaS5HZW9tZXRyeVtdID0gW11cclxuICBsZXQgaXNQcm9qZWN0VGFyZ2V0R2VvbWV0cnk6IGJvb2xlYW4gPSBmYWxzZVxyXG4gIGxldCBpc1Byb2plY3RDYW1lcmFQb3NpdGlvbjogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gIGlmICh0YXJnZXRHZW9tZXRyeSAmJiBpc05lZWRQcm9qZWN0U3BhdGlhbFJlZmVyZW5jZSh0YXJnZXRHZW9tZXRyeS5zcGF0aWFsUmVmZXJlbmNlLCB2aWV3U1IpKSB7XHJcbiAgICBpc1Byb2plY3RUYXJnZXRHZW9tZXRyeSA9IHRydWVcclxuICAgIHRvUHJvamVjdEdlb21ldHJpZXMucHVzaCh0YXJnZXRHZW9tZXRyeSlcclxuICB9XHJcblxyXG4gIGlmIChjYW1lcmFQb3NpdG9uICYmIGlzTmVlZFByb2plY3RTcGF0aWFsUmVmZXJlbmNlKGNhbWVyYVBvc2l0b24uc3BhdGlhbFJlZmVyZW5jZSwgdmlld1NSKSkge1xyXG4gICAgaXNQcm9qZWN0Q2FtZXJhUG9zaXRpb24gPSB0cnVlXHJcbiAgICB0b1Byb2plY3RHZW9tZXRyaWVzLnB1c2goY2FtZXJhUG9zaXRvbilcclxuICB9XHJcblxyXG4gIGlmICh0b1Byb2plY3RHZW9tZXRyaWVzLmxlbmd0aCA+IDApIHtcclxuICAgIGNvbnN0IHByb2plY3RlZEdlb21ldHJpZXMgPSBhd2FpdCBwcm9qZWN0R2VvbWV0cmllcyh0b1Byb2plY3RHZW9tZXRyaWVzLCB2aWV3U1IpXHJcblxyXG4gICAgaWYgKGlzUHJvamVjdFRhcmdldEdlb21ldHJ5KSB7XHJcbiAgICAgIHZpZXdwb2ludC50YXJnZXRHZW9tZXRyeSA9IHByb2plY3RlZEdlb21ldHJpZXNbMF1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNQcm9qZWN0Q2FtZXJhUG9zaXRpb24pIHtcclxuICAgICAgdmlld3BvaW50LmNhbWVyYS5wb3NpdGlvbiA9IHByb2plY3RlZEdlb21ldHJpZXNbcHJvamVjdGVkR2VvbWV0cmllcy5sZW5ndGggLSAxXSBhcyBfX2VzcmkuUG9pbnRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB2aWV3cG9pbnRcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1hcFBhbnRvIChtYXBCYXNlVmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCB0YXJnZXQ6IF9fZXNyaS5HZW9tZXRyeSB8IF9fZXNyaS5HZW9tZXRyeVtdIHxcclxuX19lc3JpLkdyYXBoaWMgfCBfX2VzcmkuR3JhcGhpY1tdIHwgX19lc3JpLkV4dGVudCk6IFByb21pc2U8YW55PiB7XHJcbiAgY29uc3QgcGFuVG9UYXJnZXQgPSB0YXJnZXQgYXMgYW55XHJcbiAgY29uc3QgdGVtcEJhc2VNYXBWaWV3ID0gbWFwQmFzZVZpZXcgYXMgYW55XHJcbiAgaWYgKHBhblRvVGFyZ2V0IGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgIGlmIChwYW5Ub1RhcmdldC5sZW5ndGggPT09IDApIHsgYXdhaXQgUHJvbWlzZS5yZXNvbHZlKCk7IHJldHVybiB9XHJcblxyXG4gICAgaWYgKHBhblRvVGFyZ2V0WzBdLmdlb21ldHJ5KSB7XHJcbiAgICAgIGNvbnN0IGdlb21ldHJ5QXJyOiBfX2VzcmkuR2VvbWV0cnlbXSA9IFtdXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFuVG9UYXJnZXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBnZW9tZXRyeUFyci5wdXNoKHBhblRvVGFyZ2V0W2ldLmdlb21ldHJ5KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBhd2FpdCBnZXRHZW9tZXRyaWVzRXh0ZW50KGdlb21ldHJ5QXJyKS50aGVuKChleHRlbnQpID0+IHtcclxuICAgICAgICByZXR1cm4gZ29Ubyh0ZW1wQmFzZU1hcFZpZXcsIGV4dGVudC5jZW50ZXIpXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZ2V0R2VvbWV0cmllc0V4dGVudChwYW5Ub1RhcmdldCkudGhlbigoZXh0ZW50KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGdvVG8odGVtcEJhc2VNYXBWaWV3LCBleHRlbnQuY2VudGVyKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAocGFuVG9UYXJnZXQuZ2VvbWV0cnkpIHtcclxuICAgICAgY29uc3QgZ2V0bWV0cnkgPSBwYW5Ub1RhcmdldC5nZW9tZXRyeSBhcyBfX2VzcmkuR2VvbWV0cnlcclxuICAgICAgcmV0dXJuIGdvVG8odGVtcEJhc2VNYXBWaWV3LCBnZXRDZW50ZXJQb2ludChnZXRtZXRyeSkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZ29Ubyh0ZW1wQmFzZU1hcFZpZXcsIGdldENlbnRlclBvaW50KHBhblRvVGFyZ2V0KSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdvVG8gKHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgdGFyZ2V0OiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgLy8gZGVsYXkgYmVmb3JlIHVwZGF0aW5nIG9mIHZpZXcgdHVybnMgdHJ1ZSwgNDAwbXMgaXMgYSB0ZW1wb3Jhcnkgc29sdXRpb24uXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgLy8vLyB0aGVyZSBpcyBhIGNvbmZsaWN0IGZvciBwYW5pbmcgd2hlbiB0aGUgbGF5ZXIgdmlldyBpcyB1cGRhdGluZywgc3VjaCBhcyAncGFuIHRvJyBhbmQgJ2ZpbHRlcicuXHJcbiAgICAgIC8vLy8gdGhpcyBpcyBhIHRlbXBvcmFyeSBzb2x1dGlvbiwgaXQgY2FuIHJlZHVjZSB0aGUgZnJlcXVlbmN5IG9mIHRoZSBwcm9ibGVtIHJhdGhlciB0aGFuIHNvbHZlIGl0IGNvbXBsZXRlbHkuXHJcbiAgICAgIC8vaWYgKHZpZXcudXBkYXRpbmcpIHtcclxuICAgICAgLy8gIGNvbnN0IGhhbmRsZXIgPSB2aWV3LndhdGNoKCd1cGRhdGluZycsIHZhbHVlID0+IHtcclxuICAgICAgLy8gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAvLyAgICAgIHZpZXcuZ29Ubyh0YXJnZXQpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKS5jYXRjaCgoKSA9PiByZWplY3QoKSlcclxuICAgICAgLy8gICAgICBoYW5kbGVyLnJlbW92ZSgpXHJcbiAgICAgIC8vICAgIH1cclxuICAgICAgLy8gIH0pXHJcbiAgICAgIC8vfSBlbHNlIHtcclxuICAgICAgLy8gIHZpZXcuZ29Ubyh0YXJnZXQpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKS5jYXRjaCgoKSA9PiByZWplY3QoKSlcclxuICAgICAgLy99XHJcbiAgICAgIHZpZXcuZ29Ubyh0YXJnZXQpLnRoZW4oKCkgPT4geyByZXNvbHZlKCkgfSkuY2F0Y2goKCkgPT4geyByZWplY3QoKSB9KVxyXG4gICAgfSwgNDAwKVxyXG4gIH0pXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEdlb21ldHJpZXNFeHRlbnQgKGdlb21ldHJpZXM6IF9fZXNyaS5HZW9tZXRyeVtdKTogUHJvbWlzZTxfX2VzcmkuRXh0ZW50PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgJ2VzcmkvZ2VvbWV0cnkvRXh0ZW50J1xyXG4gIF0pLnRoZW4oYXN5bmMgbW9kdWxlcyA9PiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIGxldCBFeHRlbnQ6IHR5cGVvZiBfX2VzcmkuRXh0ZW50O1xyXG4gICAgW0V4dGVudF0gPSBtb2R1bGVzXHJcblxyXG4gICAgaWYgKCFnZW9tZXRyaWVzIHx8ICFnZW9tZXRyaWVzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKG51bGwpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZ1bGxFeHRlbnQ6IF9fZXNyaS5FeHRlbnQgPSBudWxsXHJcbiAgICBsZXQgaW5kZXhcclxuICAgIGNvbnN0IG51bUdlb21ldHJpZXMgPSBnZW9tZXRyaWVzLmxlbmd0aFxyXG5cclxuICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IG51bUdlb21ldHJpZXM7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgZ2VvbWV0cnkgPSBnZW9tZXRyaWVzW2luZGV4XVxyXG4gICAgICBpZiAoIWdlb21ldHJ5KSB7XHJcbiAgICAgICAgY29udGludWVcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGV4dGVudCA9IGdlb21ldHJ5LmV4dGVudFxyXG5cclxuICAgICAgaWYgKCFleHRlbnQgJiYgZ2VvbWV0cnkudHlwZSA9PT0gJ3BvaW50Jykge1xyXG4gICAgICAgIGNvbnN0IHBvaW50R2VvbWV0cnkgPSBnZW9tZXRyeSBhcyBhbnlcclxuXHJcbiAgICAgICAgaWYgKHBvaW50R2VvbWV0cnkueCAmJiBwb2ludEdlb21ldHJ5LnkpIHtcclxuICAgICAgICAgIGV4dGVudCA9IG5ldyBFeHRlbnQoe1xyXG4gICAgICAgICAgICB4bWF4OiBwb2ludEdlb21ldHJ5LngsXHJcbiAgICAgICAgICAgIHhtaW46IHBvaW50R2VvbWV0cnkueCxcclxuICAgICAgICAgICAgeW1heDogcG9pbnRHZW9tZXRyeS55LFxyXG4gICAgICAgICAgICB5bWluOiBwb2ludEdlb21ldHJ5LnksXHJcbiAgICAgICAgICAgIHptYXg6IHBvaW50R2VvbWV0cnkueixcclxuICAgICAgICAgICAgem1pbjogcG9pbnRHZW9tZXRyeS56LFxyXG4gICAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiBwb2ludEdlb21ldHJ5LnNwYXRpYWxSZWZlcmVuY2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWV4dGVudCkge1xyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmdWxsRXh0ZW50KSB7XHJcbiAgICAgICAgZnVsbEV4dGVudCA9IGZ1bGxFeHRlbnQudW5pb24oZXh0ZW50KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZ1bGxFeHRlbnQgPSBleHRlbnRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChmdWxsRXh0ZW50LndpZHRoIDwgMCAmJiBmdWxsRXh0ZW50LmhlaWdodCA8IDApIHtcclxuICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShudWxsKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZnVsbEV4dGVudClcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmlsdGVyRmVhdHVyZXNCeVF1ZXJ5IChqaW11TWFwVmlldzogSmltdU1hcFZpZXcsIGFjdGlvbkxheWVyRGF0YVNvdXJjZUlkOiBzdHJpbmcsIHF1ZXJ5U1FMOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICBpZiAoIWFjdGlvbkxheWVyRGF0YVNvdXJjZUlkKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGNvbnN0IGRhdGFTb3VyY2UgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UoYWN0aW9uTGF5ZXJEYXRhU291cmNlSWQpXHJcblxyXG4gIGlmICghZGF0YVNvdXJjZSkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBsZXQgamltdUxheWVyVmlldzogSmltdUxheWVyVmlldyA9IG51bGxcclxuXHJcbiAgdHJ5IHtcclxuICAgIGppbXVMYXllclZpZXcgPSBhd2FpdCBqaW11TWFwVmlldy53aGVuSmltdUxheWVyVmlld0xvYWRlZEJ5RGF0YVNvdXJjZShkYXRhU291cmNlKVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgamltdUxheWVyVmlldyA9IG51bGxcclxuICAgIGNvbnNvbGUuZXJyb3IoJ2NhblxcJ3QgZ2V0IGppbXVMYXllclZpZXcgYnkgZGF0YVNvdXJjZScsIGRhdGFTb3VyY2UsIGVycilcclxuICB9XHJcblxyXG4gIGlmIChqaW11TGF5ZXJWaWV3ICYmIGppbXVMYXllclZpZXcubGF5ZXIgJiYgKGppbXVMYXllclZpZXcudHlwZSA9PT0gTGF5ZXJUeXBlcy5GZWF0dXJlTGF5ZXIgfHwgamltdUxheWVyVmlldy50eXBlID09PSBMYXllclR5cGVzLlNjZW5lTGF5ZXIpKSB7XHJcbiAgICAoamltdUxheWVyVmlldyBhcyBKaW11RmVhdHVyZUxheWVyVmlldyB8IEppbXVTY2VuZUxheWVyVmlldykuc2V0RGVmaW5pdGlvbkV4cHJlc3Npb24ocXVlcnlTUUwpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBxdWVyeUZlYXR1cmVzIChsYXllck9iamVjdCwgcXVlcnlTUUw6IHN0cmluZywgb3V0RmllbGRzOiBzdHJpbmdbXSkge1xyXG4gIHJldHVybiBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICdlc3JpL3Jlc3Qvc3VwcG9ydC9RdWVyeSdcclxuICBdKS50aGVuKG1vZHVsZXMgPT4ge1xyXG4gICAgbGV0IFF1ZXJ5OiB0eXBlb2YgX19lc3JpLlF1ZXJ5O1xyXG4gICAgW1F1ZXJ5XSA9IG1vZHVsZXNcclxuICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KClcclxuICAgIHF1ZXJ5LndoZXJlID0gcXVlcnlTUUxcclxuICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IG91dEZpZWxkcyB8fCBbXVxyXG4gICAgcXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlXHJcbiAgICByZXR1cm4gbGF5ZXJPYmplY3QucXVlcnlGZWF0dXJlcyhxdWVyeSkudGhlbihmZWF0dXJlU2V0ID0+IHtcclxuICAgICAgcmV0dXJuIGZlYXR1cmVTZXRcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZmxhc2hPbkZlYXR1cmVMYXllciAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LCBxdWVyeVNRTDogc3RyaW5nLCB0ZW1wSmltdUxheWVyVmlldzogSmltdUZlYXR1cmVMYXllclZpZXcpIHtcclxuICBpZiAoKHRlbXBKaW11TGF5ZXJWaWV3KS52aWV3KSB7XHJcbiAgICBsZXQgZmVhdHVyZUxheWVyVmlldzogX19lc3JpLkZlYXR1cmVMYXllclZpZXcgPSAodGVtcEppbXVMYXllclZpZXcpLnZpZXdcclxuICAgIGlmIChmZWF0dXJlTGF5ZXJWaWV3KSB7XHJcbiAgICAgIHF1ZXJ5RmVhdHVyZXMoZmVhdHVyZUxheWVyVmlldy5sYXllciwgcXVlcnlTUUwsIFtdKS50aGVuKGZlYXR1cmVTZXQgPT4ge1xyXG4gICAgICAgIGlmIChmZWF0dXJlU2V0ICYmIGZlYXR1cmVTZXQuZmVhdHVyZXMgJiYgZmVhdHVyZVNldC5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjb25zdCBzeW1ib2wgPSBnZXRGbGFzaFN5bWJvbChmZWF0dXJlTGF5ZXJWaWV3LmxheWVyLmdlb21ldHJ5VHlwZSlcclxuICAgICAgICAgIHN0YXJ0Rmxhc2goamltdU1hcFZpZXcudmlldywgZmVhdHVyZVNldC5mZWF0dXJlcywgc3ltYm9sKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJ1xyXG4gICAgXSkudGhlbihtb2R1bGVzID0+IHtcclxuICAgICAgbGV0IEZlYXR1cmVMYXllcjogdHlwZW9mIF9fZXNyaS5GZWF0dXJlTGF5ZXI7XHJcbiAgICAgIFtGZWF0dXJlTGF5ZXJdID0gbW9kdWxlc1xyXG5cclxuICAgICAgbGV0IHRlbXBGZWF0dXJlTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgICAgICB1cmw6IGRhdGFTb3VyY2VVdGlscy5nZXRVcmxCeUxheWVyKCh0ZW1wSmltdUxheWVyVmlldyBhcyBKaW11RmVhdHVyZUxheWVyVmlldyB8IEppbXVTY2VuZUxheWVyVmlldykubGF5ZXIpXHJcbiAgICAgIH0pXHJcbiAgICAgIHRlbXBGZWF0dXJlTGF5ZXIubG9hZCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHF1ZXJ5RmVhdHVyZXModGVtcEZlYXR1cmVMYXllciwgcXVlcnlTUUwsIFtdKS50aGVuKGZlYXR1cmVTZXQgPT4ge1xyXG4gICAgICAgICAgaWYgKGZlYXR1cmVTZXQgJiYgZmVhdHVyZVNldC5mZWF0dXJlcyAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gZ2V0Rmxhc2hTeW1ib2woZmVhdHVyZVNldC5mZWF0dXJlc1swXS5nZW9tZXRyeS50eXBlKVxyXG4gICAgICAgICAgICBzdGFydEZsYXNoKGppbXVNYXBWaWV3LnZpZXcsIGZlYXR1cmVTZXQuZmVhdHVyZXMsIHN5bWJvbClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmxldCBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgPSBudWxsXHJcbmZ1bmN0aW9uIGZsYXNoT25TY2VuZUxheWVyIChqaW11TWFwVmlldzogSmltdU1hcFZpZXcsIHF1ZXJ5U1FMOiBzdHJpbmcsIHRlbXBKaW11TGF5ZXJWaWV3OiBKaW11U2NlbmVMYXllclZpZXcpIHtcclxuICBpZiAoKHRlbXBKaW11TGF5ZXJWaWV3KS52aWV3KSB7XHJcbiAgICBsZXQgc2NlbmVMYXllclZpZXc6IF9fZXNyaS5TY2VuZUxheWVyVmlldyA9ICh0ZW1wSmltdUxheWVyVmlldykudmlld1xyXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgcXVlcnlGZWF0dXJlcyhzY2VuZUxheWVyVmlldz8ubGF5ZXI/LmFzc29jaWF0ZWRMYXllciwgcXVlcnlTUUwsIFtdKS50aGVuKGZlYXR1cmVTZXQgPT4ge1xyXG4gICAgICBpZiAoZmVhdHVyZVNldCAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzICYmIGZlYXR1cmVTZXQuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IG9iamVjdElkRmllbGQgPSBzY2VuZUxheWVyVmlldy5sYXllci5vYmplY3RJZEZpZWxkXHJcbiAgICAgICAgY29uc3Qgb2JqZWN0SWRzID0gZmVhdHVyZVNldC5mZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiBmZWF0dXJlLmF0dHJpYnV0ZXNbb2JqZWN0SWRGaWVsZF0pXHJcblxyXG4gICAgICAgIGxldCBpID0gMFxyXG4gICAgICAgIGNvbnN0IG1heEZsYXNoQ291bnQgPSA2XHJcbiAgICAgICAgbGV0IGhpZ2hsaWdodENvbG9yID0gWzI1NSwgMjU1LCAwLCAwLjhdXHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxIaWdobGlnaHRPcHRpb25zID0gamltdU1hcFZpZXcudmlldy5oaWdobGlnaHRPcHRpb25zXHJcblxyXG4gICAgICAgIGNvbnN0IGZsYXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaWYgKGkgPCBtYXhGbGFzaENvdW50KSB7XHJcbiAgICAgICAgICAgIGkrK1xyXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0Q29sb3IpIHtcclxuICAgICAgICAgICAgICBoaWdobGlnaHRDb2xvciA9IG51bGxcclxuICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICAgICAgICAgICAgamltdU1hcFZpZXcudmlldy5oaWdobGlnaHRPcHRpb25zID0geyBjb2xvcjogWzAsIDAsIDAsIDBdIH1cclxuICAgICAgICAgICAgICBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgJiYgc2NlbmVIaWdodGxpZ2h0SGFuZGxlLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgc2NlbmVIaWdodGxpZ2h0SGFuZGxlID0gc2NlbmVMYXllclZpZXcuaGlnaGxpZ2h0KG9iamVjdElkcylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBoaWdobGlnaHRDb2xvciA9IFsyNTUsIDI1NSwgMCwgMC44XVxyXG4gICAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgICAgICAgICAgICBqaW11TWFwVmlldy52aWV3LmhpZ2hsaWdodE9wdGlvbnMgPSB7IGNvbG9yOiBoaWdobGlnaHRDb2xvciB9XHJcbiAgICAgICAgICAgICAgc2NlbmVIaWdodGxpZ2h0SGFuZGxlICYmIHNjZW5lSGlnaHRsaWdodEhhbmRsZS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgIHNjZW5lSGlnaHRsaWdodEhhbmRsZSA9IHNjZW5lTGF5ZXJWaWV3LmhpZ2hsaWdodChvYmplY3RJZHMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0VGltZW91dChmbGFzaCwgNTAwKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgamltdU1hcFZpZXcudmlldy5oaWdobGlnaHRPcHRpb25zID0gb3JpZ2luYWxIaWdobGlnaHRPcHRpb25zXHJcbiAgICAgICAgICAgIHNjZW5lSGlnaHRsaWdodEhhbmRsZSAmJiBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUucmVtb3ZlKClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dChmbGFzaCwgNTAwKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZsYXNoRmVhdHVyZXNCeVF1ZXJ5IChqaW11TWFwVmlldzogSmltdU1hcFZpZXcsIGxheWVyRGF0YVNvdXJjZUlkOiBzdHJpbmcsIHF1ZXJ5U1FMOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICBpZiAoIWxheWVyRGF0YVNvdXJjZUlkKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGNvbnN0IGRhdGFTb3VyY2UgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UobGF5ZXJEYXRhU291cmNlSWQpXHJcblxyXG4gIGlmICghZGF0YVNvdXJjZSkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBsZXQgamltdUxheWVyVmlldzogSmltdUxheWVyVmlldyA9IG51bGxcclxuXHJcbiAgdHJ5IHtcclxuICAgIGppbXVMYXllclZpZXcgPSBhd2FpdCBqaW11TWFwVmlldy53aGVuSmltdUxheWVyVmlld0xvYWRlZEJ5RGF0YVNvdXJjZShkYXRhU291cmNlKVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgamltdUxheWVyVmlldyA9IG51bGxcclxuICAgIGNvbnNvbGUuZXJyb3IoJ2NhblxcJ3QgZ2V0IGppbXVMYXllclZpZXcgYnkgZGF0YVNvdXJjZScsIGRhdGFTb3VyY2UsIGVycilcclxuICB9XHJcblxyXG4gIGlmIChqaW11TGF5ZXJWaWV3ICYmIGppbXVMYXllclZpZXcubGF5ZXIpIHtcclxuICAgIGlmIChqaW11TGF5ZXJWaWV3LnR5cGUgPT09IExheWVyVHlwZXMuRmVhdHVyZUxheWVyKSB7XHJcbiAgICAgIGZsYXNoT25GZWF0dXJlTGF5ZXIoamltdU1hcFZpZXcsIHF1ZXJ5U1FMLCBqaW11TGF5ZXJWaWV3IGFzIEppbXVGZWF0dXJlTGF5ZXJWaWV3KVxyXG4gICAgfSBlbHNlIGlmIChqaW11TGF5ZXJWaWV3LnR5cGUgPT09IExheWVyVHlwZXMuU2NlbmVMYXllcikge1xyXG4gICAgICBmbGFzaE9uU2NlbmVMYXllcihqaW11TWFwVmlldywgcXVlcnlTUUwsIGppbXVMYXllclZpZXcgYXMgSmltdVNjZW5lTGF5ZXJWaWV3KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRGbGFzaCAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgZmVhdHVyZXM6IF9fZXNyaS5HcmFwaGljW10sIHN5bWJvbCkge1xyXG4gIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgJ2VzcmkvR3JhcGhpYydcclxuICBdKS50aGVuKG1vZHVsZXMgPT4ge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICBsZXQgR3JhcGhpYzogdHlwZW9mIF9fZXNyaS5HcmFwaGljO1xyXG4gICAgW0dyYXBoaWNdID0gbW9kdWxlc1xyXG5cclxuICAgIGNvbnN0IGZsYXNoRmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZXM6IF9fZXNyaS5HcmFwaGljW10sIG1heEZsYXNoQ291bnQ6IG51bWJlcikge1xyXG4gICAgICBjb25zdCBncmFwaGljcyA9IFtdXHJcbiAgICAgIGxldCBmbGFzaENvdW50ID0gMFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdGVtcEdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7XHJcbiAgICAgICAgICBnZW9tZXRyeTogZmVhdHVyZXNbaV0uZ2VvbWV0cnksXHJcbiAgICAgICAgICBzeW1ib2w6IHN5bWJvbCxcclxuICAgICAgICAgIGF0dHJpYnV0ZXM6IGZlYXR1cmVzW2ldLmF0dHJpYnV0ZXNcclxuICAgICAgICB9KVxyXG4gICAgICAgIGdyYXBoaWNzLnB1c2godGVtcEdyYXBoaWMpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHNpbmdsZUZsYXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1hcEJhc2VWaWV3LmdyYXBoaWNzLmFkZE1hbnkoZ3JhcGhpY3MpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBtYXBCYXNlVmlldy5ncmFwaGljcy5yZW1vdmVNYW55KGdyYXBoaWNzKVxyXG4gICAgICAgICAgZmxhc2hDb3VudCA9IGZsYXNoQ291bnQgKyAxXHJcbiAgICAgICAgICBpZiAoZmxhc2hDb3VudCA8IG1heEZsYXNoQ291bnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2luZ2xlRmxhc2goKVxyXG4gICAgICAgICAgICB9LCA1MDApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNTAwKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzaW5nbGVGbGFzaCgpXHJcbiAgICB9XHJcblxyXG4gICAgZmxhc2hGZWF0dXJlcyhmZWF0dXJlcywgMylcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGbGFzaFN5bWJvbCAoZ2VvbWV0cnlUeXBlOiBzdHJpbmcpIHtcclxuICBpZiAoWydwb2ludCcsICdtdWx0aXBvaW50J10uaW5jbHVkZXMoZ2VvbWV0cnlUeXBlKSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogJ3NpbXBsZS1tYXJrZXInLFxyXG4gICAgICBzdHlsZTogJ2NpcmNsZScsXHJcbiAgICAgIGNvbG9yOiBbMjU1LCAyNTUsIDAsIDAuOF0sXHJcbiAgICAgIHNpemU6ICcxNnB4JyxcclxuICAgICAgb3V0bGluZToge1xyXG4gICAgICAgIGNvbG9yOiBbMjU1LCAyNTUsIDAsIDAuOF0sXHJcbiAgICAgICAgd2lkdGg6IDNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoWydwb2x5bGluZSddLmluY2x1ZGVzKGdlb21ldHJ5VHlwZSkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6ICdzaW1wbGUtbGluZScsXHJcbiAgICAgIGNvbG9yOiBbMjU1LCAyNTUsIDAsIDAuOF0sXHJcbiAgICAgIHdpZHRoOiAzLFxyXG4gICAgICBzdHlsZTogJ3NvbGlkJ1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoWydwb2x5Z29uJywgJ2V4dGVudCddLmluY2x1ZGVzKGdlb21ldHJ5VHlwZSkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6ICdzaW1wbGUtZmlsbCcsIC8vIGF1dG9jYXN0cyBhcyBuZXcgU2ltcGxlRmlsbFN5bWJvbCgpXHJcbiAgICAgIGNvbG9yOiBbMjU1LCAyNTUsIDAsIDAuNV0sXHJcbiAgICAgIHN0eWxlOiAnc29saWQnLFxyXG4gICAgICBvdXRsaW5lOiB7IC8vIGF1dG9jYXN0cyBhcyBuZXcgU2ltcGxlTGluZVN5bWJvbCgpXHJcbiAgICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMCwgMC44XSxcclxuICAgICAgICB3aWR0aDogM1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChbJ21lc2gnXS5pbmNsdWRlcyhnZW9tZXRyeVR5cGUpKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiAnbWVzaC0zZCcsIC8vIGF1dG9jYXN0cyBhcyBuZXcgTWVzaFN5bWJvbDNEKClcclxuICAgICAgc3ltYm9sTGF5ZXJzOiBbe1xyXG4gICAgICAgIHR5cGU6ICdmaWxsJywgLy8gYXV0b2Nhc3RzIGFzIG5ldyBGaWxsU3ltYm9sM0RMYXllcigpXHJcbiAgICAgICAgbWF0ZXJpYWw6IHsgY29sb3I6IFsyNTUsIDI1NSwgMCwgMC44XSB9XHJcbiAgICAgIH1dXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDZW50ZXJQb2ludCAoZ2VvbWV0cnk6IF9fZXNyaS5HZW9tZXRyeSk6IF9fZXNyaS5Qb2ludCB7XHJcbiAgLy8gcG9pbnQgfCBtdWx0aXBvaW50IHwgcG9seWxpbmUgfCBwb2x5Z29uIHwgZXh0ZW50IHwgbWVzaFxyXG4gIHN3aXRjaCAoZ2VvbWV0cnkudHlwZSkge1xyXG4gICAgY2FzZSAncG9pbnQnOlxyXG4gICAgICByZXR1cm4gZ2VvbWV0cnkgYXMgX19lc3JpLlBvaW50XHJcbiAgICBjYXNlICdleHRlbnQnOlxyXG4gICAgICByZXR1cm4gKGdlb21ldHJ5IGFzIF9fZXNyaS5FeHRlbnQpLmNlbnRlclxyXG4gICAgY2FzZSAncG9seWdvbic6XHJcbiAgICAgIHJldHVybiAoZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlnb24pLmNlbnRyb2lkXHJcbiAgICBjYXNlICdwb2x5bGluZSc6XHJcbiAgICAgIHJldHVybiAoZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlsaW5lKS5leHRlbnQuY2VudGVyXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gZ2VvbWV0cnkgJiYgZ2VvbWV0cnkuZXh0ZW50ID8gZ2VvbWV0cnkuZXh0ZW50LmNlbnRlciA6IHVuZGVmaW5lZFxyXG4gICAgLy8gdG9kb1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRmVhdHVyZSAoZmVhdHVyZTogSUZlYXR1cmUgfCBfX2VzcmkuR3JhcGhpYywgR3JhcGhpYzogdHlwZW9mIF9fZXNyaS5HcmFwaGljKTogX19lc3JpLkdyYXBoaWMge1xyXG4gIGxldCB0ZW1wRmVhdHVyZSA9IG51bGxcclxuICBpZiAoKGZlYXR1cmUgYXMgYW55KS5jbG9uZSkge1xyXG4gICAgdGVtcEZlYXR1cmUgPSAoZmVhdHVyZSBhcyBhbnkpLmNsb25lKClcclxuICB9IGVsc2Uge1xyXG4gICAgdGVtcEZlYXR1cmUgPSBHcmFwaGljLmZyb21KU09OKE9iamVjdC5hc3NpZ24oe30sIGZlYXR1cmUpKVxyXG4gICAgdGVtcEZlYXR1cmUuYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe30sIGZlYXR1cmUuYXR0cmlidXRlcylcclxuICB9XHJcbiAgcmV0dXJuIHRlbXBGZWF0dXJlXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9qZWN0R2VvbWV0cmllcyAoZ2VvbWV0cmllczogX19lc3JpLkdlb21ldHJ5W10sIHNwYXRpYWxSZWZlcmVuY2U6IF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlKTogUHJvbWlzZTxfX2VzcmkuR2VvbWV0cnlbXT4ge1xyXG4gIGlmICghZ2VvbWV0cmllcyB8fCBnZW9tZXRyaWVzLmxlbmd0aCA9PT0gMCB8fCAhZ2VvbWV0cmllc1swXSB8fFxyXG4gICAgc3BhdGlhbFJlZmVyZW5jZS53a2lkID09PSBnZW9tZXRyaWVzWzBdLnNwYXRpYWxSZWZlcmVuY2Uud2tpZCB8fCAoc3BhdGlhbFJlZmVyZW5jZS5lcXVhbHMoZ2VvbWV0cmllc1swXS5zcGF0aWFsUmVmZXJlbmNlKSkpIHtcclxuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZ2VvbWV0cmllcylcclxuICB9IGVsc2UgaWYgKHNwYXRpYWxSZWZlcmVuY2UuaXNXZWJNZXJjYXRvciAmJiBnZW9tZXRyaWVzWzBdLnNwYXRpYWxSZWZlcmVuY2UuaXNXR1M4NCkge1xyXG4gICAgLy8gSW4ganMgYXBpIDQueCwgdGhlIHZpZXcgY2FuIGhhbmRsZSBXZWJNZXJjYXRvciBhbmQgV0dTODQgc3BhdGlhbFJlZmVyZW5jZSBhdXRvXHJcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGdlb21ldHJpZXMpXHJcbiAgfSBlbHNlIGlmIChzcGF0aWFsUmVmZXJlbmNlLmlzV0dTODQgJiYgZ2VvbWV0cmllc1swXS5zcGF0aWFsUmVmZXJlbmNlLmlzV2ViTWVyY2F0b3IpIHtcclxuICAgIC8vIEluIGpzIGFwaSA0LngsIHRoZSB2aWV3IGNhbiBoYW5kbGUgV2ViTWVyY2F0b3IgYW5kIFdHUzg0IHNwYXRpYWxSZWZlcmVuY2UgYXV0b1xyXG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShnZW9tZXRyaWVzKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gYXdhaXQgZ2VvbWV0cnlVdGlscy5wcm9qZWN0VG9TcGF0aWFsUmVmZXJlbmNlKGdlb21ldHJpZXMsIHNwYXRpYWxSZWZlcmVuY2UpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc1pvb21Ub0ZlYXR1cmVzIChtYXBCYXNlVmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBsYXllcjogYW55LCBmZWF0dXJlczogX19lc3JpLkdyYXBoaWNbXSk6IFByb21pc2U8X19lc3JpLkdyYXBoaWNbXT4ge1xyXG4gIGlmIChtYXBCYXNlVmlldyAmJiBtYXBCYXNlVmlldy50eXBlID09PSAnM2QnICYmIGxheWVyICYmIGxheWVyLnF1ZXJ5RmVhdHVyZXMgJiYgZmVhdHVyZXMpIHtcclxuICAgIHJldHVybiBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgJ2VzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5J1xyXG4gICAgXSkudGhlbigobW9kdWxlcykgPT4ge1xyXG4gICAgICBjb25zdCBbUXVlcnldID0gbW9kdWxlc1xyXG4gICAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSgpXHJcbiAgICAgIHF1ZXJ5LnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxyXG4gICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbJyonXVxyXG4gICAgICBxdWVyeS5vYmplY3RJZHMgPSBmZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiBmZWF0dXJlLmF0dHJpYnV0ZXNbbGF5ZXIub2JqZWN0SWRGaWVsZF0pXHJcbiAgICAgIHJldHVybiBsYXllci5xdWVyeUZlYXR1cmVzKHF1ZXJ5KS50aGVuKGFzeW5jIChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5mZWF0dXJlcyAmJiByZXN1bHQuZmVhdHVyZXMubGVuZ3RoID09PSBmZWF0dXJlcy5sZW5ndGgpIHtcclxuICAgICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUocmVzdWx0LmZlYXR1cmVzKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGZlYXR1cmVzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZmVhdHVyZXMpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGZlYXR1cmVzKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNMaXZlIChhcHBNb2RlOiBBcHBNb2RlKTogYm9vbGVhbiB7XHJcbiAgaWYgKHdpbmRvdy5qaW11Q29uZmlnLmlzSW5CdWlsZGVyKSB7XHJcbiAgICBpZiAoYXBwTW9kZSA9PT0gQXBwTW9kZS5EZXNpZ24pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExheWVyc0Zyb21EYXRhU291cmNlSWRzIChkYXRhU291cmNlSWRzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XHJcbiAgY29uc3QgbGF5ZXJQcm9taXNlcyA9IFtdXHJcbiAgZGF0YVNvdXJjZUlkcy5mb3JFYWNoKGRhdGFTb3VyY2VJZCA9PiB7XHJcbiAgICBjb25zdCBkYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGRhdGFTb3VyY2VJZCkgYXMgdW5rbm93biBhcyBKU0FQSUxheWVyTWl4aW5cclxuICAgIGxldCBsYXllclByb21pc2VcclxuICAgIGlmIChkYXRhU291cmNlPy5sYXllcikge1xyXG4gICAgICBsYXllclByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoZGF0YVNvdXJjZS5sYXllcilcclxuICAgIH0gZWxzZSBpZiAoZGF0YVNvdXJjZT8uY3JlYXRlSlNBUElMYXllckJ5RGF0YVNvdXJjZSkge1xyXG4gICAgICBsYXllclByb21pc2UgPSBkYXRhU291cmNlLmNyZWF0ZUpTQVBJTGF5ZXJCeURhdGFTb3VyY2UoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGF5ZXJQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKG51bGwpXHJcbiAgICB9XHJcbiAgICBsYXllclByb21pc2VzLnB1c2gobGF5ZXJQcm9taXNlKVxyXG4gIH0pXHJcbiAgcmV0dXJuIFByb21pc2UuYWxsKGxheWVyUHJvbWlzZXMpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRKaW11TWFwVmlld0lkICh3aWRnZXRJZDogc3RyaW5nLCBkYXRhU291cmNlSWQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgLy8gSWYgZGF0YVNvdXJjZUlkIGlzIG51bGwsIG1ha2Ugc3VyZSBpdCBjb252ZXJ0cyB0byBlbXB0eSBzdHJpbmcuXHJcbiAgY29uc3QgZHNJZCA9IGRhdGFTb3VyY2VJZCB8fCAnJ1xyXG4gIHJldHVybiBgJHt3aWRnZXRJZH0tJHtkc0lkfWBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1hcEJhc2VSZXN0b3JlRGF0YSAobWFwSW5zdGFuY2U6IE1hcEJhc2UpOiBNYXBiYXNlUmVzdG9yZURhdGEge1xyXG4gIGNvbnN0IHtcclxuICAgIG1hcENvbnRhaW5lcixcclxuICAgIHN0YXRlLFxyXG4gICAgR2VvbWV0cnksXHJcbiAgICBJbml0aWFsVmlld1Byb3BlcnRpZXMsXHJcbiAgICBUaWxlTGF5ZXIsXHJcbiAgICBCYXNlbWFwLFxyXG4gICAgTWFwVmlldyxcclxuICAgIFNjZW5lVmlldyxcclxuICAgIEV4dGVudCxcclxuICAgIFZpZXdwb2ludCxcclxuICAgIFBvcnRhbEl0ZW0sXHJcbiAgICBQb3J0YWwsXHJcbiAgICBXZWJNYXAsXHJcbiAgICBXZWJTY2VuZSxcclxuICAgIENvbG9yLFxyXG4gICAgU3BhdGlhbFJlZmVyZW5jZSxcclxuICAgIFBvaW50LFxyXG4gICAgZXhwZWN0ZWREYXRhU291cmNlSW5mbyxcclxuICAgIG1hcENyZWF0aW5nSW5mbyxcclxuICAgIHZpZXcsXHJcbiAgICBsYXN0VXBkYXRlVmlld0NvbmZpZyxcclxuICAgIG1hcERzLFxyXG4gICAgZHNNYW5hZ2VyLFxyXG4gICAgaXNGaXJzdFJlY2VpdmVNZXNzYWdlXHJcbiAgfSA9IG1hcEluc3RhbmNlXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBtYXBDb250YWluZXIsXHJcbiAgICBzdGF0ZSxcclxuXHJcbiAgICBHZW9tZXRyeSxcclxuICAgIEluaXRpYWxWaWV3UHJvcGVydGllcyxcclxuICAgIFRpbGVMYXllcixcclxuICAgIEJhc2VtYXAsXHJcbiAgICBNYXBWaWV3LFxyXG4gICAgU2NlbmVWaWV3LFxyXG4gICAgRXh0ZW50LFxyXG4gICAgVmlld3BvaW50LFxyXG4gICAgUG9ydGFsSXRlbSxcclxuICAgIFBvcnRhbCxcclxuICAgIFdlYk1hcCxcclxuICAgIFdlYlNjZW5lLFxyXG4gICAgQ29sb3IsXHJcbiAgICBTcGF0aWFsUmVmZXJlbmNlLFxyXG4gICAgUG9pbnQsXHJcblxyXG4gICAgZXhwZWN0ZWREYXRhU291cmNlSW5mbyxcclxuICAgIG1hcENyZWF0aW5nSW5mbyxcclxuICAgIHZpZXcsXHJcbiAgICBsYXN0VXBkYXRlVmlld0NvbmZpZyxcclxuICAgIG1hcERzLFxyXG5cclxuICAgIGRzTWFuYWdlcixcclxuICAgIGlzRmlyc3RSZWNlaXZlTWVzc2FnZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmVNYXBCYXNlIChtYXBJbnN0YW5jZTogTWFwQmFzZSwgcmVzdG9yZURhdGE6IE1hcGJhc2VSZXN0b3JlRGF0YSk6IHZvaWQge1xyXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyZXN0b3JlRGF0YSlcclxuXHJcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xyXG4gICAgbWFwSW5zdGFuY2Vba2V5XSA9IHJlc3RvcmVEYXRhW2tleV1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1R3b1dpZGdldHNNdXR1YWxseUV4dGVudENoYW5nZSAod2lkZ2V0SWQxOiBzdHJpbmcsIHdpZGdldElkMjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgaWYgKHdpZGdldElkMSAmJiB3aWRnZXRJZDIpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2VDb25maWdzID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbmZpZy5tZXNzYWdlQ29uZmlnc1xyXG5cclxuICAgIGlmIChtZXNzYWdlQ29uZmlncykge1xyXG4gICAgICBjb25zdCBhY3Rpb25OYW1lczogc3RyaW5nW10gPSBbJ3BhblRvJywgJ3pvb21Ub0ZlYXR1cmUnXVxyXG4gICAgICBjb25zdCBtZXNzYWdlVHlwZSA9IE1lc3NhZ2VUeXBlLkV4dGVudENoYW5nZVxyXG5cclxuICAgICAgaWYgKGlzV2lkZ2V0U2VuZEFjdGlvbnNUb0Fub3RoZXIod2lkZ2V0SWQxLCB3aWRnZXRJZDIsIG1lc3NhZ2VDb25maWdzLCBtZXNzYWdlVHlwZSwgYWN0aW9uTmFtZXMpICYmXHJcbiAgICAgICAgIGlzV2lkZ2V0U2VuZEFjdGlvbnNUb0Fub3RoZXIod2lkZ2V0SWQyLCB3aWRnZXRJZDEsIG1lc3NhZ2VDb25maWdzLCBtZXNzYWdlVHlwZSwgYWN0aW9uTmFtZXMpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1dpZGdldFNlbmRab29tVG9BY3Rpb25Ub0Fub3RoZXIgKHNlbmRNZXNzYWdlV2lkZ2V0SWQ6IHN0cmluZywgYWN0aW9uV2lkZ2V0SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKTogYm9vbGVhbiB7XHJcbiAgaWYgKHNlbmRNZXNzYWdlV2lkZ2V0SWQgJiYgYWN0aW9uV2lkZ2V0SWQpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2VDb25maWdzID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbmZpZy5tZXNzYWdlQ29uZmlnc1xyXG5cclxuICAgIGlmIChtZXNzYWdlQ29uZmlncykge1xyXG4gICAgICBjb25zdCBhY3Rpb25OYW1lczogc3RyaW5nW10gPSBbJ3pvb21Ub0ZlYXR1cmUnXVxyXG5cclxuICAgICAgcmV0dXJuIGlzV2lkZ2V0U2VuZEFjdGlvbnNUb0Fub3RoZXIoc2VuZE1lc3NhZ2VXaWRnZXRJZCwgYWN0aW9uV2lkZ2V0SWQsIG1lc3NhZ2VDb25maWdzLCBtZXNzYWdlVHlwZSwgYWN0aW9uTmFtZXMpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuZnVuY3Rpb24gaXNXaWRnZXRTZW5kQWN0aW9uc1RvQW5vdGhlciAoXHJcbiAgc2VuZE1lc3NhZ2VXaWRnZXRJZDogc3RyaW5nLFxyXG4gIGFjdGlvbldpZGdldElkOiBzdHJpbmcsXHJcbiAgbWVzc2FnZUNvbmZpZ3M6IEltbXV0YWJsZU9iamVjdDxNZXNzYWdlc0pzb24+LFxyXG4gIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSxcclxuICBhY3Rpb25OYW1lczogc3RyaW5nW11cclxuKTogYm9vbGVhbiB7XHJcbiAgaWYgKG1lc3NhZ2VDb25maWdzKSB7XHJcbiAgICBjb25zdCBtZXNzYWdlSnNvbkFycmF5ID0gT2JqZWN0LnZhbHVlcyhtZXNzYWdlQ29uZmlncylcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VKc29uQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgbWVzc2FnZUpzb24gPSBtZXNzYWdlSnNvbkFycmF5W2ldXHJcblxyXG4gICAgICBpZiAobWVzc2FnZUpzb24ud2lkZ2V0SWQgPT09IHNlbmRNZXNzYWdlV2lkZ2V0SWQgJiYgbWVzc2FnZUpzb24ubWVzc2FnZVR5cGUgPT09IG1lc3NhZ2VUeXBlKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IG1lc3NhZ2VKc29uLmFjdGlvbnNcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhY3Rpb25zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25zW2pdXHJcblxyXG4gICAgICAgICAgaWYgKGFjdGlvbi53aWRnZXRJZCA9PT0gYWN0aW9uV2lkZ2V0SWQpIHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbk5hbWVzLmluY2x1ZGVzKGFjdGlvbi5hY3Rpb25OYW1lKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lbGlrZVZpZXdwb2ludHMgKHZpZXc6IE1hcGJhc2VWaWV3LCB2cDE6IF9fZXNyaS5WaWV3cG9pbnQsIHZwMjogX19lc3JpLlZpZXdwb2ludCk6IGJvb2xlYW4ge1xyXG4gIGlmICghdnAxKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGlmICghdnAyKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIC8vIFdlIG5lZWQgdG8gY2hlY2sgYm90aCB0YXJnZXRHZW9tZXRyeSBhbmQgY2FtZXJhLlxyXG4gIGlmICh2cDEudGFyZ2V0R2VvbWV0cnkgJiYgdnAxLnRhcmdldEdlb21ldHJ5LmRlY2xhcmVkQ2xhc3MgPT09ICdlc3JpLmdlb21ldHJ5LlBvaW50JyAmJiB2cDIudGFyZ2V0R2VvbWV0cnkgJiYgdnAyLnRhcmdldEdlb21ldHJ5LmRlY2xhcmVkQ2xhc3MgPT09ICdlc3JpLmdlb21ldHJ5LlBvaW50Jykge1xyXG4gICAgY29uc3Qgc2NyZWVuUG9pbnQxID0gdmlldy50b1NjcmVlbih2cDEudGFyZ2V0R2VvbWV0cnkgYXMgX19lc3JpLlBvaW50KVxyXG4gICAgY29uc3Qgc2NyZWVuUG9pbnQyID0gdmlldy50b1NjcmVlbih2cDIudGFyZ2V0R2VvbWV0cnkgYXMgX19lc3JpLlBvaW50KVxyXG4gICAgY29uc3QgZGVsdGFYID0gc2NyZWVuUG9pbnQxLnggLSBzY3JlZW5Qb2ludDIueFxyXG4gICAgY29uc3QgZGVsdGFZID0gc2NyZWVuUG9pbnQxLnkgLSBzY3JlZW5Qb2ludDIueVxyXG4gICAgY29uc3QgZGlzdCA9IE1hdGguc3FydChkZWx0YVggKiBkZWx0YVggKyBkZWx0YVkgKiBkZWx0YVkpXHJcblxyXG4gICAgaWYgKGRpc3QgPj0gNSkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNhbWVyYTEgPSB2cDEuY2FtZXJhXHJcbiAgY29uc3QgY2FtZXJhMiA9IHZwMi5jYW1lcmFcclxuXHJcbiAgaWYgKGNhbWVyYTEgJiYgY2FtZXJhMikge1xyXG4gICAgLy8gY29tcGFyZSB2aWV3cG9pbnQgZm9yIFNjZW5lVmlld1xyXG4gICAgY29uc3QgaGVhZGluZzEgPSBwYXJzZUZsb2F0KGNhbWVyYTEuaGVhZGluZy50b0ZpeGVkKDIpKVxyXG4gICAgY29uc3QgaGVhZGluZzIgPSBwYXJzZUZsb2F0KGNhbWVyYTIuaGVhZGluZy50b0ZpeGVkKDIpKVxyXG5cclxuICAgIGlmIChoZWFkaW5nMSAhPT0gaGVhZGluZzIpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGlsdDEgPSBwYXJzZUZsb2F0KGNhbWVyYTEudGlsdC50b0ZpeGVkKDIpKVxyXG4gICAgY29uc3QgdGlsdDIgPSBwYXJzZUZsb2F0KGNhbWVyYTIudGlsdC50b0ZpeGVkKDIpKVxyXG5cclxuICAgIGlmICh0aWx0MSAhPT0gdGlsdDIpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcG9zaXRpb25EaXN0ID0gY2FtZXJhMS5wb3NpdGlvbi5kaXN0YW5jZShjYW1lcmEyLnBvc2l0aW9uKVxyXG5cclxuICAgIGlmIChwb3NpdGlvbkRpc3QgPj0gMSkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgLy8gY29tcGFyZSB2aWV3cG9pbnQgZm9yIE1hcFZpZXdcclxuICAgIGNvbnN0IHJvdGF0aW9uMSA9IHBhcnNlRmxvYXQodnAxLnJvdGF0aW9uLnRvRml4ZWQoMikpXHJcbiAgICBjb25zdCByb3RhdGlvbjIgPSBwYXJzZUZsb2F0KHZwMi5yb3RhdGlvbi50b0ZpeGVkKDIpKVxyXG5cclxuICAgIGlmIChyb3RhdGlvbjEgIT09IHJvdGF0aW9uMikge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWx0YVNjYWxlID0gdnAxLnNjYWxlIC0gdnAyLnNjYWxlXHJcblxyXG4gICAgaWYgKE1hdGguYWJzKGRlbHRhU2NhbGUpID49IDEpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Vmlld3BvaW50SW5zdGFuY2VGcm9tSGlzdG9yeSAodmlldzogTWFwYmFzZVZpZXcsIHZpZXdwb2ludEluZGV4OiBudW1iZXIpOiBfX2VzcmkuVmlld3BvaW50IHtcclxuICBpZiAodmlldy52aWV3cG9pbnRIaXN0b3J5Lmxlbmd0aCA+IDApIHtcclxuICAgIGNvbnN0IGxhc3RJbmRleCA9IHZpZXcudmlld3BvaW50SGlzdG9yeS5sZW5ndGggLSAxXHJcblxyXG4gICAgaWYgKHZpZXdwb2ludEluZGV4ID49IDAgJiYgdmlld3BvaW50SW5kZXggPD0gbGFzdEluZGV4KSB7XHJcbiAgICAgIGNvbnN0IHZpZXdwb2ludCA9IHZpZXcudmlld3BvaW50SGlzdG9yeVt2aWV3cG9pbnRJbmRleF1cclxuICAgICAgcmV0dXJuIHZpZXdwb2ludC5jbG9uZSgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1hcFVybEhhc2hQYXJhbXMge1xyXG4gIGFjdGl2ZV9kYXRhc291cmNlX2lkPzogc3RyaW5nXHJcbiAgdmlld3BvaW50Pzogc3RyaW5nXHJcbiAgY2VudGVyPzogc3RyaW5nIC8vIHgseSx3a2lkXHJcbiAgc2NhbGU/OiBzdHJpbmdcclxuICByb3RhdGlvbj86IHN0cmluZ1xyXG4gIGxheWVyX3Zpc2liaWxpdHk/OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVVybEhhc2hQYXJhbXNGb3JBY3RpdmVKaW11TWFwVmlldyAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3KSB7XHJcbiAgaWYgKGppbXVNYXBWaWV3ICYmIGppbXVNYXBWaWV3LmlzQWN0aXZlICYmIGppbXVNYXBWaWV3LnZpZXcgJiYgIWppbXVNYXBWaWV3LnZpZXcuZGVzdHJveWVkKSB7XHJcbiAgICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXcudmlldyBhcyBNYXBiYXNlVmlld1xyXG4gICAgY29uc3QgdXJsTWFuYWdlciA9IFVybE1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxyXG4gICAgY29uc3Qgdmlld3BvaW50SnNvbiA9IHZpZXcudmlld3BvaW50ID8gdmlldy52aWV3cG9pbnQudG9KU09OKCkgOiBudWxsXHJcblxyXG4gICAgbGV0IHZpZXdwb2ludFN0cjogc3RyaW5nID0gbnVsbFxyXG4gICAgbGV0IGNlbnRlclN0cjogc3RyaW5nID0gbnVsbFxyXG4gICAgbGV0IHNjYWxlU3RyOiBzdHJpbmcgPSBudWxsXHJcbiAgICBsZXQgcm90YXRpb25TdHI6IHN0cmluZyA9IG51bGxcclxuXHJcbiAgICBpZiAodmlld3BvaW50SnNvbikge1xyXG4gICAgICB2aWV3cG9pbnRTdHIgPSBKU09OLnN0cmluZ2lmeSh2aWV3cG9pbnRKc29uKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFdlIG9ubHkgc3VwcG9ydCBjZW50ZXIsIHNjYWxlIGFuZCByb3RhaW9uIGZvciBNYXBWaWV3LlxyXG4gICAgaWYgKHZpZXcudHlwZSA9PT0gJzJkJykge1xyXG4gICAgICBjb25zdCB3a2lkID0gdmlldy5zcGF0aWFsUmVmZXJlbmNlPy53a2lkXHJcblxyXG4gICAgICBpZiAod2tpZCkge1xyXG4gICAgICAgIGNvbnN0IHZpZXdDZW50ZXIgPSB2aWV3LmNlbnRlclxyXG4gICAgICAgIGNlbnRlclN0ciA9IGAke3ZpZXdDZW50ZXIueH0sJHt2aWV3Q2VudGVyLnl9LCR7d2tpZH1gXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNjYWxlU3RyID0gU3RyaW5nKHZpZXcuc2NhbGUpXHJcbiAgICAgIHJvdGF0aW9uU3RyID0gU3RyaW5nKHZpZXcucm90YXRpb24pXHJcbiAgICB9XHJcblxyXG4gICAgdmlldy5sYXN0Vmlld3BvaW50VG9VcGRhdGVVcmxQYXJhbXMgPSB2aWV3LnZpZXdwb2ludCA/IHZpZXcudmlld3BvaW50LmNsb25lKCkgOiBudWxsXHJcbiAgICB2aWV3Lmxhc3RWaWV3cG9pbnRVcmxQYXJhbVVwZGF0ZVRpbWVzdGFtcCA9IERhdGUubm93KClcclxuXHJcbiAgICBjb25zdCBhY3RpdmVEYXRhc291cmNlSWQgPSBqaW11TWFwVmlldy5kYXRhU291cmNlSWQgfHwgbnVsbFxyXG5cclxuICAgIGNvbnN0IG1hcFVybEhhc2hQYXJhbXM6IE1hcFVybEhhc2hQYXJhbXMgPSB7XHJcbiAgICAgIGFjdGl2ZV9kYXRhc291cmNlX2lkOiBhY3RpdmVEYXRhc291cmNlSWQsXHJcbiAgICAgIGNlbnRlcjogY2VudGVyU3RyLFxyXG4gICAgICBzY2FsZTogc2NhbGVTdHIsXHJcbiAgICAgIHJvdGF0aW9uOiByb3RhdGlvblN0cixcclxuICAgICAgLy8gaWYgdmlld3BvaW50U3RyIGlzIG51bGwsIFVybE1hbmFnZXIgd2lsbCByZW1vdmUgaXQgZnJvbSB1cmxcclxuICAgICAgdmlld3BvaW50OiB2aWV3cG9pbnRTdHJcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygnc2V0V2lkZ2V0VXJsUGFyYW1zJywgRGF0ZS5ub3coKSlcclxuICAgIHVybE1hbmFnZXIuc2V0V2lkZ2V0VXJsUGFyYW1zKGppbXVNYXBWaWV3Lm1hcFdpZGdldElkLCBtYXBVcmxIYXNoUGFyYW1zKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVcmxQYXJhbXNNYXBPcHRpb25zIHtcclxuICB2aWV3cG9pbnQ/OiBfX2VzcmkuVmlld3BvaW50XHJcbiAgY2VudGVyPzogX19lc3JpLlBvaW50XHJcbiAgc2NhbGU/OiBudW1iZXJcclxuICByb3RhdGlvbj86IG51bWJlclxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGNoYW5nZWQgdmlld3BvaW50IGJ5IHZpZXcgYW5kIHVybCBoYXNoIHBhcmFtcy5cclxuICogUmV0dXJuIG51bGwgaWYgdmlld3BvaW50IG5vdCBjaGFuZ2VkLlxyXG4gKiBAcGFyYW0gdmlld1xyXG4gKiBAcGFyYW0gcnVudGltZVVybEhhc2hQYXJhbXNcclxuICogQHBhcmFtIHBhcnNlVmlld3BvaW50XHJcbiAqIEBwYXJhbSBwYXJzZUNlbnRlclxyXG4gKiBAcGFyYW0gcGFyc2VTY2FsZVxyXG4gKiBAcGFyYW0gcGFyc2VSb3RhdGlvblxyXG4gKiBAcGFyYW0gVmlld3BvaW50XHJcbiAqIEBwYXJhbSBQb2ludFxyXG4gKiBAcGFyYW0gU3BhdGlhbFJlZmVyZW5jZVxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENoYW5nZWRWaWV3cG9pbnRCeVZpZXdBbmRVcmxIYXNoUGFyYW1zIChcclxuICB2aWV3OiBNYXBiYXNlVmlldyxcclxuICBydW50aW1lVXJsSGFzaFBhcmFtczogTWFwVXJsSGFzaFBhcmFtcyxcclxuICBwYXJzZVZpZXdwb2ludDogYm9vbGVhbixcclxuICBwYXJzZUNlbnRlcjogYm9vbGVhbixcclxuICBwYXJzZVNjYWxlOiBib29sZWFuLFxyXG4gIHBhcnNlUm90YXRpb246IGJvb2xlYW4sXHJcbiAgVmlld3BvaW50OiB0eXBlb2YgX19lc3JpLlZpZXdwb2ludCxcclxuICBQb2ludDogdHlwZW9mIF9fZXNyaS5Qb2ludCxcclxuICBTcGF0aWFsUmVmZXJlbmNlOiB0eXBlb2YgX19lc3JpLlNwYXRpYWxSZWZlcmVuY2VcclxuKTogX19lc3JpLlZpZXdwb2ludCB7XHJcbiAgbGV0IHJlc3VsdDogX19lc3JpLlZpZXdwb2ludCA9IG51bGxcclxuICBjb25zdCBjdXJyVmlld3BvaW50ID0gdmlldy52aWV3cG9pbnQ/LmNsb25lKClcclxuICBjb25zdCBpczJEID0gdmlldy50eXBlID09PSAnMmQnXHJcblxyXG4gIGlmICghaXMyRCkge1xyXG4gICAgcGFyc2VDZW50ZXIgPSBmYWxzZVxyXG4gICAgcGFyc2VTY2FsZSA9IGZhbHNlXHJcbiAgICBwYXJzZVJvdGF0aW9uID0gZmFsc2VcclxuICB9XHJcblxyXG4gIGNvbnN0IHVybFBhcmFtc01hcE9wdGlvbnMgPSBnZXRNYXBPcHRpb25zQnlVcmxIYXNoUGFyYW1zKHJ1bnRpbWVVcmxIYXNoUGFyYW1zLCBpczJELCBWaWV3cG9pbnQsIFBvaW50LCBTcGF0aWFsUmVmZXJlbmNlKVxyXG5cclxuICBpZiAodXJsUGFyYW1zTWFwT3B0aW9ucykge1xyXG4gICAgaWYgKCFwYXJzZVZpZXdwb2ludCkge1xyXG4gICAgICBkZWxldGUgdXJsUGFyYW1zTWFwT3B0aW9ucy52aWV3cG9pbnRcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXBhcnNlQ2VudGVyKSB7XHJcbiAgICAgIGRlbGV0ZSB1cmxQYXJhbXNNYXBPcHRpb25zLmNlbnRlclxyXG4gICAgfVxyXG5cclxuICAgIGlmICghcGFyc2VTY2FsZSkge1xyXG4gICAgICBkZWxldGUgdXJsUGFyYW1zTWFwT3B0aW9ucy5zY2FsZVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghcGFyc2VSb3RhdGlvbikge1xyXG4gICAgICBkZWxldGUgdXJsUGFyYW1zTWFwT3B0aW9ucy5yb3RhdGlvblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChPYmplY3Qua2V5cyh1cmxQYXJhbXNNYXBPcHRpb25zKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGlmIChpczJEKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gdXJsUGFyYW1zTWFwT3B0aW9ucy52aWV3cG9pbnQgfHwgY3VyclZpZXdwb2ludFxyXG5cclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICBpZiAodXJsUGFyYW1zTWFwT3B0aW9ucy5jZW50ZXIpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnRhcmdldEdlb21ldHJ5ID0gdXJsUGFyYW1zTWFwT3B0aW9ucy5jZW50ZXJcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoJ3NjYWxlJyBpbiB1cmxQYXJhbXNNYXBPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5zY2FsZSA9IHVybFBhcmFtc01hcE9wdGlvbnMuc2NhbGVcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoJ3JvdGF0aW9uJyBpbiB1cmxQYXJhbXNNYXBPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5yb3RhdGlvbiA9IHVybFBhcmFtc01hcE9wdGlvbnMucm90YXRpb25cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ID0gdXJsUGFyYW1zTWFwT3B0aW9ucy52aWV3cG9pbnRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWFwT3B0aW9uc0J5VXJsSGFzaFBhcmFtcyAoXHJcbiAgcnVudGltZVVybEhhc2hQYXJhbXM6IE1hcFVybEhhc2hQYXJhbXMsXHJcbiAgaXMyRDogYm9vbGVhbixcclxuICBWaWV3cG9pbnQ6IHR5cGVvZiBfX2VzcmkuVmlld3BvaW50LFxyXG4gIFBvaW50OiB0eXBlb2YgX19lc3JpLlBvaW50LFxyXG4gIFNwYXRpYWxSZWZlcmVuY2U6IHR5cGVvZiBfX2VzcmkuU3BhdGlhbFJlZmVyZW5jZVxyXG4pOiBVcmxQYXJhbXNNYXBPcHRpb25zIHtcclxuICBsZXQgcmVzdWx0OiBVcmxQYXJhbXNNYXBPcHRpb25zID0ge31cclxuICBsZXQgdmlld3BvaW50OiBfX2VzcmkuVmlld3BvaW50ID0gbnVsbFxyXG4gIGxldCBjZW50ZXI6IF9fZXNyaS5Qb2ludCA9IG51bGxcclxuICBsZXQgc2NhbGU6IG51bWJlciA9IG51bGxcclxuICBsZXQgcm90YXRpb246IG51bWJlciA9IG51bGxcclxuXHJcbiAgaWYgKHJ1bnRpbWVVcmxIYXNoUGFyYW1zKSB7XHJcbiAgICAvLyBwYXJzZSB2aWV3cG9pbnRcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChydW50aW1lVXJsSGFzaFBhcmFtcy52aWV3cG9pbnQpIHtcclxuICAgICAgICBjb25zdCB2aWV3cG9pbnRKc29uID0gSlNPTi5wYXJzZShydW50aW1lVXJsSGFzaFBhcmFtcy52aWV3cG9pbnQpXHJcblxyXG4gICAgICAgIGlmICh2aWV3cG9pbnRKc29uKSB7XHJcbiAgICAgICAgICB2aWV3cG9pbnQgPSBWaWV3cG9pbnQuZnJvbUpTT04odmlld3BvaW50SnNvbilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcigncGFyc2Ugdmlld3BvaW50IGZyb20gdXJsIGhhc2ggcGFyYW1zIGVycm9yJywgZSlcclxuICAgICAgdmlld3BvaW50ID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIC8vIG9ubHkgc3VwcG9ydCBjZW50ZXIsIHNjYWxlIGFuZCByb3RhdGlvbiBmb3IgTWFwVmlld1xyXG4gICAgaWYgKGlzMkQpIHtcclxuICAgICAgLy8gcGFyc2UgY2VudGVyXHJcbiAgICAgIC8vIGNlbnRlciBmb3JtYXQ6IHgseSx3a2lkXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHJ1bnRpbWVVcmxIYXNoUGFyYW1zLmNlbnRlcikge1xyXG4gICAgICAgICAgY29uc3Qgc3BsaXRzID0gcnVudGltZVVybEhhc2hQYXJhbXMuY2VudGVyLnNwbGl0KCcsJylcclxuXHJcbiAgICAgICAgICBpZiAoc3BsaXRzLmxlbmd0aCA+PSAzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBwYXJzZUZsb2F0KHNwbGl0c1swXSlcclxuICAgICAgICAgICAgY29uc3QgeSA9IHBhcnNlRmxvYXQoc3BsaXRzWzFdKVxyXG4gICAgICAgICAgICBjb25zdCB3a2lkID0gcGFyc2VGbG9hdChzcGxpdHNbMl0pXHJcblxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZE51bSh4KSAmJiBpc1ZhbGlkTnVtKHkpICYmIGlzVmFsaWROdW0od2tpZCkpIHtcclxuICAgICAgICAgICAgICBjb25zdCBzcGF0aWFsUmVmZXJlbmNlID0gbmV3IFNwYXRpYWxSZWZlcmVuY2Uoe1xyXG4gICAgICAgICAgICAgICAgd2tpZFxyXG4gICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgIGNlbnRlciA9IG5ldyBQb2ludCh7XHJcbiAgICAgICAgICAgICAgICB4LFxyXG4gICAgICAgICAgICAgICAgeSxcclxuICAgICAgICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2VcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcigncGFyc2UgY2VudGVyIGZyb20gdXJsIGhhc2ggcGFyYW1zIGVycm9yJywgZSlcclxuICAgICAgICBjZW50ZXIgPSBudWxsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHBhcnNlIHNjYWxlXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKCdzY2FsZScgaW4gcnVudGltZVVybEhhc2hQYXJhbXMpIHtcclxuICAgICAgICAgIGNvbnN0IHNjYWxlTnVtID0gcGFyc2VGbG9hdChydW50aW1lVXJsSGFzaFBhcmFtcy5zY2FsZSlcclxuXHJcbiAgICAgICAgICBpZiAoaXNWYWxpZE51bShzY2FsZU51bSkgJiYgc2NhbGVOdW0gPj0gMCkge1xyXG4gICAgICAgICAgICBzY2FsZSA9IHNjYWxlTnVtXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgc2NhbGUgPSBudWxsXHJcbiAgICAgICAgY29uc29sZS5lcnJvcigncGFyc2Ugc2NhbGUgZnJvbSB1cmwgaGFzaCBwYXJhbXMgZXJyb3InLCBlKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBwYXJzZSByb3RhdGlvblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmICgncm90YXRpb24nIGluIHJ1bnRpbWVVcmxIYXNoUGFyYW1zKSB7XHJcbiAgICAgICAgICBjb25zdCByb3RhdGlvbk51bSA9IHBhcnNlRmxvYXQocnVudGltZVVybEhhc2hQYXJhbXMucm90YXRpb24pXHJcblxyXG4gICAgICAgICAgaWYgKGlzVmFsaWROdW0ocm90YXRpb25OdW0pICYmIHJvdGF0aW9uTnVtID49IDAgJiYgcm90YXRpb25OdW0gPD0gMzYwKSB7XHJcbiAgICAgICAgICAgIHJvdGF0aW9uID0gcm90YXRpb25OdW1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByb3RhdGlvbiA9IG51bGxcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdwYXJzZSByb3RhdGlvbiBmcm9tIHVybCBoYXNoIHBhcmFtcyBlcnJvcicsIGUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICh2aWV3cG9pbnQpIHtcclxuICAgIHJlc3VsdC52aWV3cG9pbnQgPSB2aWV3cG9pbnRcclxuICB9XHJcblxyXG4gIC8vIG9ubHkgc3VwcG9ydCBjZW50ZXIsIHNjYWxlIGFuZCByb3RhdGlvbiBmb3IgTWFwVmlld1xyXG4gIGlmIChpczJEKSB7XHJcbiAgICBpZiAoY2VudGVyKSB7XHJcbiAgICAgIHJlc3VsdC5jZW50ZXIgPSBjZW50ZXJcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNWYWxpZE51bShzY2FsZSkpIHtcclxuICAgICAgcmVzdWx0LnNjYWxlID0gc2NhbGVcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNWYWxpZE51bShyb3RhdGlvbikpIHtcclxuICAgICAgcmVzdWx0LnJvdGF0aW9uID0gcm90YXRpb25cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChPYmplY3Qua2V5cyhyZXN1bHQpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmVzdWx0ID0gbnVsbFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1ZhbGlkTnVtICh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHZhbHVlKVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XHJcbiAgQWJzdHJhY3RNZXNzYWdlQWN0aW9uLCBNZXNzYWdlVHlwZSwgdHlwZSBNZXNzYWdlLCBnZXRBcHBTdG9yZSwgdHlwZSBEYXRhUmVjb3JkU2V0Q2hhbmdlTWVzc2FnZSwgUmVjb3JkU2V0Q2hhbmdlVHlwZSwgdHlwZSBEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZSxcclxuICB0eXBlIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSwgdHlwZSBFeHRlbnRDaGFuZ2VNZXNzYWdlLCB0eXBlIEZlYXR1cmVEYXRhUmVjb3JkIGFzIEZlYXR1cmVRdWVyeURhdGFSZWNvcmQsIE11dGFibGVTdG9yZU1hbmFnZXIsIERhdGFTb3VyY2VNYW5hZ2VyLCB0eXBlIE1lc3NhZ2VEZXNjcmlwdGlvbixcclxuICB0eXBlIERhdGFTb3VyY2VzQ2hhbmdlTWVzc2FnZSwgRGF0YVNvdXJjZXNDaGFuZ2VUeXBlLCB0eXBlIFVzZURhdGFTb3VyY2UsIHR5cGUgSW1tdXRhYmxlQXJyYXlcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgRmVhdHVyZURhdGFSZWNvcmQgYXMgRmVhdHVyZUxheWVyRGF0YVJlY29yZCwgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgeyBjbG9uZUZlYXR1cmUsIGlzV2lkZ2V0U2VuZFpvb21Ub0FjdGlvblRvQW5vdGhlciB9IGZyb20gJy4uL3J1bnRpbWUvdXRpbHMnXHJcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuL3Bhbi10by1hY3Rpb24tc2V0dGluZydcclxuaW1wb3J0IHsgZ2V0RHNCeVdpZGdldElkIH0gZnJvbSAnLi9hY3Rpb24tdXRpbHMnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhblRvR2VvbWV0cmllc0ludGVybmFsVmFsdWUge1xyXG4gIHR5cGU6ICdwYW4tdG8tZ2VvbWV0cmllcydcclxuICBnZW9tZXRyaWVzOiBfX2VzcmkuR2VvbWV0cnlbXVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhblRvRXh0ZW50SW50ZXJuYWxWYWx1ZSB7XHJcbiAgdHlwZTogJ3Bhbi10by1leHRlbnQnXHJcbiAgZ2VvbWV0cmllczogW19fZXNyaS5FeHRlbnRdXHJcbiAgc3RhdGlvbmFyeTogYm9vbGVhblxyXG4gIHB1Ymxpc2hUaW1lOiBudW1iZXJcclxuICBwdWJsaXNoV2lkZ2V0SWQ6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhblRvUXVlcnlQYXJhbXNJbnRlcm5hbFZhbHVlIHtcclxuICB0eXBlOiAncGFuLXRvLXF1ZXJ5LXBhcmFtcydcclxuICBkYXRhU291cmNlSWRzOiBzdHJpbmdbXVxyXG4gIHVzZURhdGFTb3VyY2VzOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPlxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhblRvTGF5ZXJJbnRlcm5hbFZhbHVlIHtcclxuICB0eXBlOiAncGFuLXRvLWxheWVyJ1xyXG4gIGRhdGFTb3VyY2VJZDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFuVG9MYXllcnNJbnRlcm5hbFZhbHVlIHtcclxuICB0eXBlOiAncGFuLXRvLWxheWVycydcclxuICBkYXRhU291cmNlSWRzOiBzdHJpbmdbXVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhblRvQWN0aW9uVmFsdWUge1xyXG4gIHZhbHVlOiBQYW5Ub0dlb21ldHJpZXNJbnRlcm5hbFZhbHVlIHwgUGFuVG9FeHRlbnRJbnRlcm5hbFZhbHVlIHwgUGFuVG9RdWVyeVBhcmFtc0ludGVybmFsVmFsdWUgfCBQYW5Ub0xheWVySW50ZXJuYWxWYWx1ZSB8IFBhblRvTGF5ZXJzSW50ZXJuYWxWYWx1ZVxyXG4gIHJlbGF0ZWRXaWRnZXRzOiBzdHJpbmdbXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5Ub0FjdGlvbiBleHRlbmRzIEFic3RyYWN0TWVzc2FnZUFjdGlvbiB7XHJcbiAgTm9Mb2NrVHJpZ2dlckxheWVyV2lkZ2V0cyA9IFsnTWFwJ11cclxuXHJcbiAgZmlsdGVyTWVzc2FnZURlc2NyaXB0aW9uIChtZXNzYWdlRGVzY3JpcHRpb246IE1lc3NhZ2VEZXNjcmlwdGlvbik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKG1lc3NhZ2VEZXNjcmlwdGlvbi5tZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRXh0ZW50Q2hhbmdlKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEZXNjcmlwdGlvbi5tZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRGF0YVNvdXJjZXNDaGFuZ2UpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0gZWxzZSBpZiAobWVzc2FnZURlc2NyaXB0aW9uLm1lc3NhZ2VUeXBlICE9PSBNZXNzYWdlVHlwZS5EYXRhUmVjb3JkU2V0Q2hhbmdlICYmXHJcbiAgICAgICAgbWVzc2FnZURlc2NyaXB0aW9uLm1lc3NhZ2VUeXBlICE9PSBNZXNzYWdlVHlwZS5EYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZSAmJlxyXG4gICAgICAgIG1lc3NhZ2VEZXNjcmlwdGlvbi5tZXNzYWdlVHlwZSAhPT0gTWVzc2FnZVR5cGUuRGF0YVNvdXJjZUZpbHRlckNoYW5nZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGRhdGFTb3VyY2VNYW5hZ2VyID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxyXG4gICAgICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQobWVzc2FnZURlc2NyaXB0aW9uLndpZGdldElkLCBtZXNzYWdlRGVzY3JpcHRpb24ubWVzc2FnZVR5cGUpXHJcbiAgICAgIHJldHVybiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMuc29tZSh1c2VEYXRhU291cmNlID0+IHtcclxuICAgICAgICBjb25zdCBkcyA9IGRhdGFTb3VyY2VNYW5hZ2VyLmdldERhdGFTb3VyY2UodXNlRGF0YVNvdXJjZS5kYXRhU291cmNlSWQpXHJcblxyXG4gICAgICAgIC8vIHdpZGdldDEgc2VuZCBtZXNzYWdlIHRvIG1hcCB3aWRnZXQsIGRzIGNvbWVzIGZyb20gd2lkZ2V0MS51c2VEYXRhU291cmNlcy5cclxuXHJcbiAgICAgICAgaWYgKGRzKSB7XHJcbiAgICAgICAgICAvLyAjMTY4MzUsIGRzIG1heWJlIG5vdCByZWFkeSB3aGVuIHRoZSBFeEIgYXBwIGlzIG9wZW5lZCBhbmQgYWRkIHRoZSBtZXNzYWdlIGFjdGlvbiBpbW1lZGlhdGVseSBpbiB3aWRnZXQgYWN0aW9uIHNldHRpbmdcclxuICAgICAgICAgIGlmIChkcy50eXBlID09PSAnV0VCX01BUCcgfHwgZHMudHlwZSA9PT0gJ1dFQl9TQ0VORScpIHtcclxuICAgICAgICAgICAgLy8gSWYgZHMudHlwZSBpcyBXRUJfTUFQIG9yIFdFQl9TQ0VORSwgbWVhbnMgd2lkZ2V0MSBpcyBhbHNvIGEgbWFwIHdpZGdldC5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHdpZGdldDEgaXMgbm90IG1hcCB3aWRnZXQsIGxpa2UgbGlzdCB3aWRnZXQgdXNlcyBhIGxheWVyIGRzLlxyXG4gICAgICAgICAgICByZXR1cm4gISFkcy5nZXRHZW9tZXRyeVR5cGUoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJNZXNzYWdlIChtZXNzYWdlOiBNZXNzYWdlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgZ2V0U2V0dGluZ0NvbXBvbmVudFVyaSAobWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlLCBtZXNzYWdlV2lkZ2V0SWQ/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgLy9jb25zdCBjb25maWcgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwU3RhdGVJbkJ1aWxkZXIgPyBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwU3RhdGVJbkJ1aWxkZXIuYXBwQ29uZmlnIDogZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbmZpZ1xyXG4gICAgLy9jb25zdCBtZXNzYWdlV2lkZ2V0SnNvbiA9IGNvbmZpZy53aWRnZXRzW21lc3NhZ2VXaWRnZXRJZF1cclxuICAgIGlmIChtZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2UgfHxcclxuICAgICAgICAgIG1lc3NhZ2VUeXBlID09PSBNZXNzYWdlVHlwZS5EYXRhU291cmNlRmlsdGVyQ2hhbmdlKSB7XHJcbiAgICAgIHJldHVybiAnbWVzc2FnZS1hY3Rpb25zL3Bhbi10by1hY3Rpb24tc2V0dGluZydcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkV4ZWN1dGUgKG1lc3NhZ2U6IE1lc3NhZ2UsIGFjdGlvbkNvbmZpZz86IElNQ29uZmlnKTogUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xyXG4gICAgLy8gbWVzc2FnZS53aWRnZXRJZCBpcyBtZXNzYWdlIHNlbmRlciwgdGhpcy53aWRnZXRJZCBpcyBtZXNzYWdlIHJlY2VpdmVyXHJcblxyXG4gICAgcmV0dXJuIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoWydlc3JpL0dyYXBoaWMnXSkudGhlbihtb2R1bGVzID0+IHtcclxuICAgICAgbGV0IEdyYXBoaWM6IHR5cGVvZiBfX2VzcmkuR3JhcGhpYyA9IG51bGw7XHJcbiAgICAgIFtHcmFwaGljXSA9IG1vZHVsZXNcclxuXHJcbiAgICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5EYXRhUmVjb3JkU2V0Q2hhbmdlOlxyXG4gICAgICAgICAgaWYgKGlzV2lkZ2V0U2VuZFpvb21Ub0FjdGlvblRvQW5vdGhlcihtZXNzYWdlLndpZGdldElkLCB0aGlzLndpZGdldElkLCBNZXNzYWdlVHlwZS5EYXRhUmVjb3JkU2V0Q2hhbmdlKSkge1xyXG4gICAgICAgICAgICAvLyBtZXNzYWdlLndpZGdldElkIHNlbmRzIGJvdGggcGFuVG8gYW5kIHpvb21UbyBhY3Rpb25zIHRvIHRoaXMud2lkZ2V0SWQsIHdlIHNob3VsZCBub3QgZXhlY3V0ZSBwYW5UbyBhY3Rpb24gdG8gYXZvaWQgY29uZmxpY3Qgd2l0aCB6b29tVG8gYWN0aW9uLlxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IGRhdGFSZWNvcmRTZXRDaGFuZ2VNZXNzYWdlID0gbWVzc2FnZSBhcyBEYXRhUmVjb3JkU2V0Q2hhbmdlTWVzc2FnZVxyXG4gICAgICAgICAgaWYgKGRhdGFSZWNvcmRTZXRDaGFuZ2VNZXNzYWdlLmNoYW5nZVR5cGUgPT09IFJlY29yZFNldENoYW5nZVR5cGUuQ3JlYXRlVXBkYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdlb21ldHJpZXM6IF9fZXNyaS5HZW9tZXRyeVtdID0gW11cclxuICAgICAgICAgICAgZGF0YVJlY29yZFNldENoYW5nZU1lc3NhZ2UuZGF0YVJlY29yZFNldHMuZm9yRWFjaChkYXRhUmVjb3JkU2V0ID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZGF0YVJlY29yZFNldCAmJiBkYXRhUmVjb3JkU2V0LnJlY29yZHMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVJlY29yZFNldC5yZWNvcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFSZWNvcmRGZWF0dXJlID0gKGRhdGFSZWNvcmRTZXQucmVjb3Jkc1tpXSBhc1xyXG4gICAgICAgICAgICAgICAgICAgIChGZWF0dXJlUXVlcnlEYXRhUmVjb3JkIHwgRmVhdHVyZUxheWVyRGF0YVJlY29yZCkpLmZlYXR1cmVcclxuICAgICAgICAgICAgICAgICAgaWYgKGRhdGFSZWNvcmRGZWF0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cmllcy5wdXNoKGNsb25lRmVhdHVyZShkYXRhUmVjb3JkRmVhdHVyZSwgR3JhcGhpYykuZ2VvbWV0cnkpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IHBhblRvVmFsdWU6IFBhblRvR2VvbWV0cmllc0ludGVybmFsVmFsdWUgPSB7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ3Bhbi10by1nZW9tZXRyaWVzJyxcclxuICAgICAgICAgICAgICBnZW9tZXRyaWVzOiBnZW9tZXRyaWVzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgJ3BhblRvQWN0aW9uVmFsdWUudmFsdWUnLCBwYW5Ub1ZhbHVlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlOlxyXG4gICAgICAgICAgaWYgKGlzV2lkZ2V0U2VuZFpvb21Ub0FjdGlvblRvQW5vdGhlcihtZXNzYWdlLndpZGdldElkLCB0aGlzLndpZGdldElkLCBNZXNzYWdlVHlwZS5EYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZSkpIHtcclxuICAgICAgICAgICAgLy8gbWVzc2FnZS53aWRnZXRJZCBzZW5kcyBib3RoIHBhblRvIGFuZCB6b29tVG8gYWN0aW9ucyB0byB0aGlzLndpZGdldElkLCB3ZSBzaG91bGQgbm90IGV4ZWN1dGUgcGFuVG8gYWN0aW9uIHRvIGF2b2lkIGNvbmZsaWN0IHdpdGggem9vbVRvIGFjdGlvbi5cclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb25zdCBjb25maWcgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwQ29uZmlnXHJcbiAgICAgICAgICBjb25zdCBtZXNzYWdlV2lkZ2V0SnNvbiA9IGNvbmZpZy53aWRnZXRzW21lc3NhZ2Uud2lkZ2V0SWRdXHJcbiAgICAgICAgICBjb25zdCBtZXNzYWdlV2lkZ2V0TGFiZWwgPSBtZXNzYWdlV2lkZ2V0SnNvbi5tYW5pZmVzdC5sYWJlbFxyXG4gICAgICAgICAgY29uc3QgZGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlID0gbWVzc2FnZSBhcyBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2VcclxuXHJcbiAgICAgICAgICBjb25zdCBnZW9tZXRyaWVzOiBfX2VzcmkuR2VvbWV0cnlbXSA9IFtdXHJcbiAgICAgICAgICBpZiAoZGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlLnJlY29yZHMpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZS5yZWNvcmRzWzBdKSB7XHJcbiAgICAgICAgICAgICAgLy9pZiAoIWFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlIHx8IChkYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UucmVjb3Jkc1swXS5kYXRhU291cmNlLmdldE1haW5EYXRhU291cmNlKCkuaWQgIT09IGFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlLm1haW5EYXRhU291cmNlSWQpKSB7XHJcbiAgICAgICAgICAgICAgLy8gIGJyZWFrXHJcbiAgICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuTm9Mb2NrVHJpZ2dlckxheWVyV2lkZ2V0cy5pbmNsdWRlcyhtZXNzYWdlV2lkZ2V0TGFiZWwpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYWluRGF0YVNvdXJjZU9mU2VsZWN0aW9uID0gZGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlLnJlY29yZHNbMF0uZGF0YVNvdXJjZS5nZXRNYWluRGF0YVNvdXJjZSgpXHJcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbkNvbmZpZz8udXNlRGF0YVNvdXJjZXM/LnNvbWUodXNlRGF0YVNvdXJjZSA9PiB1c2VEYXRhU291cmNlPy5tYWluRGF0YVNvdXJjZUlkID09PSBtYWluRGF0YVNvdXJjZU9mU2VsZWN0aW9uLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25DaGFuZ2VEUyA9IGRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZS5yZWNvcmRzWzBdLmRhdGFTb3VyY2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbkNoYW5nZU1haW5EUyA9IHNlbGVjdGlvbkNoYW5nZURTPy5nZXRNYWluRGF0YVNvdXJjZSgpXHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBkc0lkIG9mIG1haW5EUyBjdXJyZW50bHksIHdpbGwgc3VwcG9ydCB2aWV3IGluIHRoZSBmdXR1cmUuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlcy5zb21lKHVzZURhdGFTb3VyY2UgPT4gdXNlRGF0YVNvdXJjZT8ubWFpbkRhdGFTb3VyY2VJZCA9PT0gc2VsZWN0aW9uQ2hhbmdlTWFpbkRTLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UucmVjb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGFSZWNvcmRGZWF0dXJlID0gKGRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZS5yZWNvcmRzW2ldIGFzXHJcbiAgICAgICAgICAgICAgICAoRmVhdHVyZVF1ZXJ5RGF0YVJlY29yZCB8IEZlYXR1cmVMYXllckRhdGFSZWNvcmQpKS5mZWF0dXJlXHJcbiAgICAgICAgICAgICAgaWYgKGRhdGFSZWNvcmRGZWF0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBnZW9tZXRyaWVzLnB1c2goY2xvbmVGZWF0dXJlKGRhdGFSZWNvcmRGZWF0dXJlLCBHcmFwaGljKS5nZW9tZXRyeSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb25zdCBwYW5Ub1ZhbHVlOiBQYW5Ub0dlb21ldHJpZXNJbnRlcm5hbFZhbHVlID0ge1xyXG4gICAgICAgICAgICB0eXBlOiAncGFuLXRvLWdlb21ldHJpZXMnLFxyXG4gICAgICAgICAgICBnZW9tZXRyaWVzOiBnZW9tZXRyaWVzXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgJ3BhblRvQWN0aW9uVmFsdWUudmFsdWUnLCBwYW5Ub1ZhbHVlKVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLkV4dGVudENoYW5nZTpcclxuICAgICAgICAgIGlmIChpc1dpZGdldFNlbmRab29tVG9BY3Rpb25Ub0Fub3RoZXIobWVzc2FnZS53aWRnZXRJZCwgdGhpcy53aWRnZXRJZCwgTWVzc2FnZVR5cGUuRXh0ZW50Q2hhbmdlKSkge1xyXG4gICAgICAgICAgICAvLyBtZXNzYWdlLndpZGdldElkIHNlbmRzIGJvdGggcGFuVG8gYW5kIHpvb21UbyBhY3Rpb25zIHRvIHRoaXMud2lkZ2V0SWQsIHdlIHNob3VsZCBub3QgZXhlY3V0ZSBwYW5UbyBhY3Rpb24gdG8gYXZvaWQgY29uZmxpY3Qgd2l0aCB6b29tVG8gYWN0aW9uLlxyXG4gICAgICAgICAgICAvLyBpc1dpZGdldFNlbmRab29tVG9BY3Rpb25Ub0Fub3RoZXIoKSBjYW4gb25seSBoYW5kbGUgc2ltcGxlIHBhblRvIGFuZCB6b29tVG8gY29uZmxpY3QuXHJcbiAgICAgICAgICAgIC8vIFRvIGF2b2lkIG1vcmUgY29tcGxpY2F0ZWQgcGFuVG8gYW5kIHpvb21UbyBjb25mbGljdCBjYXNlcywgd2UgZG8gaXQgaW4gaGFuZGxlQWN0aW9uRm9yUGFuVG9BY3Rpb25WYWx1ZSBvZiBtYXBiYXNlLlxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IGV4dGVudENoYW5nZU1lc3NhZ2UgPSBtZXNzYWdlIGFzIEV4dGVudENoYW5nZU1lc3NhZ2VcclxuICAgICAgICAgIGNvbnN0IHJlbGF0ZWRXaWRnZXRJZHMgPSBleHRlbnRDaGFuZ2VNZXNzYWdlLmdldFJlbGF0ZWRXaWRnZXRJZHMoKVxyXG5cclxuICAgICAgICAgIGlmIChyZWxhdGVkV2lkZ2V0SWRzLmluY2x1ZGVzKHRoaXMud2lkZ2V0SWQpKSB7XHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3QgZXh0ZW50VmFsdWU6IFBhblRvRXh0ZW50SW50ZXJuYWxWYWx1ZSA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ3Bhbi10by1leHRlbnQnLFxyXG4gICAgICAgICAgICBnZW9tZXRyaWVzOiBbZXh0ZW50Q2hhbmdlTWVzc2FnZS5leHRlbnRdLFxyXG4gICAgICAgICAgICBzdGF0aW9uYXJ5OiBleHRlbnRDaGFuZ2VNZXNzYWdlLnN0YXRpb25hcnksXHJcbiAgICAgICAgICAgIHB1Ymxpc2hUaW1lOiBleHRlbnRDaGFuZ2VNZXNzYWdlLnB1Ymxpc2hUaW1lLFxyXG4gICAgICAgICAgICBwdWJsaXNoV2lkZ2V0SWQ6IGV4dGVudENoYW5nZU1lc3NhZ2Uud2lkZ2V0SWRcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb25zdCBwYW5Ub0ZlYXR1cmVBY3Rpb25WYWx1ZTogUGFuVG9BY3Rpb25WYWx1ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IGV4dGVudFZhbHVlLFxyXG4gICAgICAgICAgICByZWxhdGVkV2lkZ2V0czogcmVsYXRlZFdpZGdldElkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgJ3BhblRvQWN0aW9uVmFsdWUnLCBwYW5Ub0ZlYXR1cmVBY3Rpb25WYWx1ZSlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5EYXRhU291cmNlRmlsdGVyQ2hhbmdlOlxyXG4gICAgICAgICAgaWYgKGlzV2lkZ2V0U2VuZFpvb21Ub0FjdGlvblRvQW5vdGhlcihtZXNzYWdlLndpZGdldElkLCB0aGlzLndpZGdldElkLCBNZXNzYWdlVHlwZS5EYXRhU291cmNlRmlsdGVyQ2hhbmdlKSkge1xyXG4gICAgICAgICAgICAvLyBtZXNzYWdlLndpZGdldElkIHNlbmRzIGJvdGggcGFuVG8gYW5kIHpvb21UbyBhY3Rpb25zIHRvIHRoaXMud2lkZ2V0SWQsIHdlIHNob3VsZCBub3QgZXhlY3V0ZSBwYW5UbyBhY3Rpb24gdG8gYXZvaWQgY29uZmxpY3Qgd2l0aCB6b29tVG8gYWN0aW9uLlxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IGZpbHRlckNoYW5nZU1lc3NhZ2UgPSBtZXNzYWdlIGFzIERhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlXHJcbiAgICAgICAgICAvLyBzdXBwb3J0IHZpZXcuXHJcbiAgICAgICAgICBpZiAoIWFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlcy5zb21lKHVzZURhdGFTb3VyY2UgPT4gZmlsdGVyQ2hhbmdlTWVzc2FnZS5kYXRhU291cmNlSWRzLnNvbWUoZGF0YVNvdXJjZUlkID0+IHVzZURhdGFTb3VyY2U/LmRhdGFTb3VyY2VJZCA9PT0gZGF0YVNvdXJjZUlkKSkpIHtcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb25zdCBmaWx0ZXJDaGFuZ2VBY3Rpb25WYWx1ZTogUGFuVG9RdWVyeVBhcmFtc0ludGVybmFsVmFsdWUgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYW4tdG8tcXVlcnktcGFyYW1zJyxcclxuICAgICAgICAgICAgZGF0YVNvdXJjZUlkczogZmlsdGVyQ2hhbmdlTWVzc2FnZS5kYXRhU291cmNlSWRzLFxyXG4gICAgICAgICAgICB1c2VEYXRhU291cmNlczogYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2VzIHx8IChbXSBhcyB1bmtub3duIGFzIEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+KVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsICdwYW5Ub0FjdGlvblZhbHVlLnZhbHVlJywgZmlsdGVyQ2hhbmdlQWN0aW9uVmFsdWUpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuRGF0YVNvdXJjZXNDaGFuZ2U6XHJcbiAgICAgICAgICBpZiAoaXNXaWRnZXRTZW5kWm9vbVRvQWN0aW9uVG9Bbm90aGVyKG1lc3NhZ2Uud2lkZ2V0SWQsIHRoaXMud2lkZ2V0SWQsIE1lc3NhZ2VUeXBlLkRhdGFTb3VyY2VzQ2hhbmdlKSkge1xyXG4gICAgICAgICAgICAvLyBtZXNzYWdlLndpZGdldElkIHNlbmRzIGJvdGggcGFuVG8gYW5kIHpvb21UbyBhY3Rpb25zIHRvIHRoaXMud2lkZ2V0SWQsIHdlIHNob3VsZCBub3QgZXhlY3V0ZSBwYW5UbyBhY3Rpb24gdG8gYXZvaWQgY29uZmxpY3Qgd2l0aCB6b29tVG8gYWN0aW9uLlxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IGRhdGFTb3VyY2VzQ2hhbmdlTWVzc2FnZSA9IG1lc3NhZ2UgYXMgRGF0YVNvdXJjZXNDaGFuZ2VNZXNzYWdlXHJcbiAgICAgICAgICBpZiAoZGF0YVNvdXJjZXNDaGFuZ2VNZXNzYWdlLmNoYW5nZVR5cGUgPT09IERhdGFTb3VyY2VzQ2hhbmdlVHlwZS5DcmVhdGUpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YVNvdXJjZUlkcyA9IFtdXHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2VzQ2hhbmdlTWVzc2FnZS5kYXRhU291cmNlcy5mb3JFYWNoKGRhdGFTb3VyY2UgPT4ge1xyXG4gICAgICAgICAgICAgIGRhdGFTb3VyY2VJZHMucHVzaChkYXRhU291cmNlLmlkKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCBwYW5Ub0ZlYXR1cmVBY3Rpb25WYWx1ZUZvckxheWVyczogUGFuVG9MYXllcnNJbnRlcm5hbFZhbHVlID0ge1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdwYW4tdG8tbGF5ZXJzJyxcclxuICAgICAgICAgICAgICBkYXRhU291cmNlSWRzOiBkYXRhU291cmNlSWRzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgJ3BhblRvQWN0aW9uVmFsdWUudmFsdWUnLCBwYW5Ub0ZlYXR1cmVBY3Rpb25WYWx1ZUZvckxheWVycylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==