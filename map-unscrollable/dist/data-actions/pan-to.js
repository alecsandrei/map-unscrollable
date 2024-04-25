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
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/map-unscrollable/src/data-actions/pan-to.ts ***!
  \*****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanTo)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _runtime_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../runtime/utils */ "./your-extensions/widgets/map-unscrollable/src/runtime/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class PanTo extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractDataAction {
    /**
     * PanTo data action supports both DataSource data level and Records data level.
     * supported cases:
     * case1: dataSets.length === 1 and dataLevel is DATA_SOURCE
     * case2: dataSets.length === 1 and dataLevel is RECORDS
     * case3: dataSets.length >= 2 and dataLevel is RECORDS
     */
    isSupported(dataSets, dataLevel) {
        return __awaiter(this, void 0, void 0, function* () {
            const supportedDataSets = this.getSupportedDataSets(dataSets, dataLevel);
            if (supportedDataSets.length === 1) {
                // case1, case2
                return true;
            }
            else if (supportedDataSets.length >= 2) {
                // case3
                return dataLevel === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataLevel.Records;
            }
            return false;
        });
    }
    getSupportedDataSets(dataSets, dataLevel) {
        const supportedDataSets = dataSets.filter(dataSet => {
            const dataSource = dataSet.dataSource;
            if (!dataSource || dataSource.getStatus() === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotReady) {
                return false;
            }
            // records maybe come from a table, so we need to check if the dataSource has geometry or not
            const supportSpatialInfo = (dataSource === null || dataSource === void 0 ? void 0 : dataSource.supportSpatialInfo) && (dataSource === null || dataSource === void 0 ? void 0 : dataSource.supportSpatialInfo());
            if (!supportSpatialInfo) {
                return false;
            }
            if (dataLevel === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataLevel.Records) {
                // pan to graphics
                const records = this.getRecords(dataSet, dataLevel);
                return records.length > 0;
            }
            else if (dataLevel === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataLevel.DataSource) {
                // pan to layer
                return !!(dataSource === null || dataSource === void 0 ? void 0 : dataSource.createJSAPILayerByDataSource);
            }
            return false;
        });
        return supportedDataSets;
    }
    getRecords(dataSet, dataLevel) {
        var _a;
        let result = [];
        if (dataLevel === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataLevel.DataSource) {
            result = [];
        }
        else if (dataLevel === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataLevel.Records && ((_a = dataSet.records) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            result = dataSet.records.filter((record) => { var _a; return !!((_a = record.feature) === null || _a === void 0 ? void 0 : _a.geometry); });
        }
        return result;
    }
    getClonedGeometries(dataSet, dataLevel, Graphic) {
        const clonedGeometries = [];
        const records = this.getRecords(dataSet, dataLevel);
        records.forEach(record => {
            const feature = (0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.cloneFeature)(record.feature, Graphic);
            if (feature && feature.geometry) {
                clonedGeometries.push(feature.geometry);
            }
        });
        return clonedGeometries;
    }
    onExecute(dataSets, dataLevel) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const modules = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)(['esri/Graphic']);
            const [Graphic] = modules;
            const supportedDataSets = this.getSupportedDataSets(dataSets, dataLevel);
            if (supportedDataSets.length === 1) {
                // case1, case2
                const dataSet = dataSets[0];
                let panToActionValue = null;
                const geometries = this.getClonedGeometries(dataSet, dataLevel, Graphic);
                if (geometries.length > 0) {
                    // case2
                    panToActionValue = {
                        type: 'pan-to-geometries',
                        geometries
                    };
                }
                else {
                    // case1
                    panToActionValue = {
                        type: 'pan-to-layer',
                        dataSourceId: ((_a = dataSet.dataSource) === null || _a === void 0 ? void 0 : _a.id) || null
                    };
                }
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', panToActionValue);
            }
            else if (supportedDataSets.length >= 2) {
                // case3
                const allGeometries = [];
                supportedDataSets.forEach(dataSet => {
                    const geometries = this.getClonedGeometries(dataSet, dataLevel, Graphic);
                    allGeometries.push(...geometries);
                });
                if (allGeometries.length > 0) {
                    const panToActionValue = {
                        type: 'pan-to-geometries',
                        geometries: allGeometries
                    };
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', panToActionValue);
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXAtdW5zY3JvbGxhYmxlL2Rpc3QvZGF0YS1hY3Rpb25zL3Bhbi10by5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQWlDO0FBSWY7QUFJd0k7QUFFbkosU0FBZSxxQkFBcUIsQ0FBRSxXQUE4QyxFQUFFLGtCQUE2RDs7UUFDeEosTUFBTSxnQkFBZ0IsR0FBRyxFQUFFO1FBQzNCLGtCQUFrQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdEUsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUM7WUFDeEUsSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFDVixPQUFPLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxDQUFDO2dCQUNwRCxPQUFNO1lBQ1IsQ0FBQztZQUNELGdCQUFnQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUYsQ0FBQyxDQUFDO1FBRUYsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDbEMsT0FBTyxJQUFJO1FBQ2IsQ0FBQzthQUFNLENBQUM7WUFDTixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7UUFDdEMsQ0FBQztJQUNILENBQUM7Q0FBQTtBQUVNLFNBQWUsa0JBQWtCLENBQUUsV0FBOEMsRUFBRSxzQkFBaUU7O1FBQ3pKLE1BQU0sY0FBYyxHQUFHLEVBQUU7UUFDekIsc0JBQXNCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FB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WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hcC11bnNjcm9sbGFibGUvc3JjL3J1bnRpbWUvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXAtdW5zY3JvbGxhYmxlL3NyYy9kYXRhLWFjdGlvbnMvcGFuLXRvLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1jb25zdCAqL1xyXG5pbXBvcnQge1xyXG4gIEFwcE1vZGUsIGRhdGFTb3VyY2VVdGlscywgRGF0YVNvdXJjZU1hbmFnZXIsIHR5cGUgSlNBUElMYXllck1peGluLCBnZW9tZXRyeVV0aWxzLFxyXG4gIGdldEFwcFN0b3JlLCB0eXBlIE1lc3NhZ2VzSnNvbiwgdHlwZSBJbW11dGFibGVPYmplY3QsIE1lc3NhZ2VUeXBlLCBVcmxNYW5hZ2VyXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIEhpZ2hMaWdodEhhbmRsZSwgdHlwZSBNYXBiYXNlUmVzdG9yZURhdGEsIHR5cGUgTWFwYmFzZVZpZXcgfSBmcm9tICcuL2NvbXBvbmVudHMvbWFwYmFzZSdcclxuaW1wb3J0IHR5cGUgTWFwQmFzZSBmcm9tICcuL2NvbXBvbmVudHMvbWFwYmFzZSdcclxuaW1wb3J0IHsgdHlwZSBJRmVhdHVyZSB9IGZyb20gJ0Blc3JpL2FyY2dpcy1yZXN0LXR5cGVzJ1xyXG5pbXBvcnQgeyBsb2FkQXJjR0lTSlNBUElNb2R1bGVzLCB0eXBlIEppbXVNYXBWaWV3LCBMYXllclR5cGVzLCB0eXBlIEppbXVGZWF0dXJlTGF5ZXJWaWV3LCB0eXBlIEppbXVTY2VuZUxheWVyVmlldywgdHlwZSBKaW11TGF5ZXJWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTmV3RmVhdHVyZWxheWVyIChtYXBCYXNlVmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBuZXdGZWF0dXJlU2V0VmFsdWU/OiB7IFtsYXllcklEOiBzdHJpbmddOiBfX2VzcmkuRmVhdHVyZVNldCB9KTogUHJvbWlzZTxhbnk+IHtcclxuICBjb25zdCBuZXdMYXllclByb21pc2VzID0gW11cclxuICBuZXdGZWF0dXJlU2V0VmFsdWUgJiYgT2JqZWN0LmtleXMobmV3RmVhdHVyZVNldFZhbHVlKS5mb3JFYWNoKGxheWVySWQgPT4ge1xyXG4gICAgY29uc3QgbGF5ZXIgPSBtYXBCYXNlVmlldy5tYXAubGF5ZXJzLmZpbmQobGF5ZXIgPT4gbGF5ZXIuaWQgPT09IGxheWVySWQpXHJcbiAgICBpZiAobGF5ZXIpIHtcclxuICAgICAgY29uc29sZS53YXJuKCd0aGUgZmVhdHVyZSBsYXllciBpcyBhbHJlYWR5IGNyZWF0ZWQnKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIG5ld0xheWVyUHJvbWlzZXMucHVzaChhZGRGZWF0dXJlU2V0VG9NYXAobWFwQmFzZVZpZXcsIG5ld0ZlYXR1cmVTZXRWYWx1ZVtsYXllcklkXSwgbGF5ZXJJZCkpXHJcbiAgfSlcclxuXHJcbiAgaWYgKG5ld0xheWVyUHJvbWlzZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwobmV3TGF5ZXJQcm9taXNlcylcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVGZWF0dXJlbGF5ZXIgKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIGNoYW5nZWRGZWF0dXJlU2V0VmFsdWU/OiB7IFtsYXllcklEOiBzdHJpbmddOiBfX2VzcmkuRmVhdHVyZVNldCB9KTogUHJvbWlzZTxhbnk+IHtcclxuICBjb25zdCB1cGRhdGVQcm9taXNlcyA9IFtdXHJcbiAgY2hhbmdlZEZlYXR1cmVTZXRWYWx1ZSAmJiBPYmplY3Qua2V5cyhjaGFuZ2VkRmVhdHVyZVNldFZhbHVlKS5mb3JFYWNoKGxheWVySWQgPT4ge1xyXG4gICAgY29uc3QgbGF5ZXIgPSBtYXBCYXNlVmlldy5tYXAubGF5ZXJzLmZpbmQobGF5ZXIgPT4gbGF5ZXIuaWQgPT09IGxheWVySWQpXHJcbiAgICBpZiAobGF5ZXIpIHtcclxuICAgICAgbWFwQmFzZVZpZXcubWFwLnJlbW92ZShsYXllcilcclxuICAgICAgdXBkYXRlUHJvbWlzZXMucHVzaChhZGRGZWF0dXJlU2V0VG9NYXAobWFwQmFzZVZpZXcsIGNoYW5nZWRGZWF0dXJlU2V0VmFsdWVbbGF5ZXJJZF0sIGxheWVySWQpKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGlmICh1cGRhdGVQcm9taXNlcy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBQcm9taXNlLmFsbCh1cGRhdGVQcm9taXNlcylcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFkZEZlYXR1cmVTZXRUb01hcCAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgZmVhdHVyZVNldDogX19lc3JpLkZlYXR1cmVTZXQsIGxheWVySWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHJldHVybiBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcidcclxuICAgIF0pLnRoZW4obW9kdWxlcyA9PiB7XHJcbiAgICAgIGlmIChmZWF0dXJlU2V0LmZlYXR1cmVzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICByZXNvbHZlKG51bGwpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gbGV0IEZlYXR1cmVTZXQ6IHR5cGVvZiAgX19lc3JpLkZlYXR1cmVTZXQ7XHJcbiAgICAgICAgbGV0IEZlYXR1cmVMYXllcjogdHlwZW9mIF9fZXNyaS5GZWF0dXJlTGF5ZXI7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgW0ZlYXR1cmVMYXllcl0gPSBtb2R1bGVzO1xyXG5cclxuICAgICAgICBjb25zdCBsYXllckZyb21GZWF0dXJlU2V0ID0gZmVhdHVyZVNldC5mZWF0dXJlc1swXS5sYXllciBhcyBhbnlcclxuICAgICAgICBjb25zdCBmaWVsZHNJbkZlYXR1cmVsYXllciA9IFtdXHJcbiAgICAgICAgY29uc3QgZmllbGRNYXAgPSB7fVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxheWVyRnJvbUZlYXR1cmVTZXQuZmllbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBjb25zdCBmaWVsZHNJdGVtID0gZ2V0UmVhc29uYWJsZUZpZWxkKGxheWVyRnJvbUZlYXR1cmVTZXQuZmllbGRzW2ldKVxyXG4gICAgICAgICAgZmllbGRNYXBbbGF5ZXJGcm9tRmVhdHVyZVNldC5maWVsZHNbaV0ubmFtZV0gPSBmaWVsZHNJdGVtLm5hbWVcclxuICAgICAgICAgIGZpZWxkc0luRmVhdHVyZWxheWVyLnB1c2goZmllbGRzSXRlbSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZpZWxkc0luUG9wdXBUZW1wbGF0ZSA9IFtdXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZmVhdHVyZVNldC5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICBpZiAoZmllbGRNYXBba2V5XSkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZHNJdGVtID0ge1xyXG4gICAgICAgICAgICAgIGZpZWxkTmFtZTogZmllbGRNYXBba2V5XSxcclxuICAgICAgICAgICAgICBsYWJlbDoga2V5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmllbGRzSW5Qb3B1cFRlbXBsYXRlLnB1c2goZmllbGRzSXRlbSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNvdXJjZUZlYXR1cmVzID0gW11cclxuICAgICAgICBmZWF0dXJlU2V0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0ZW1wRmVhdHVyZSA9IGZlYXR1cmVcclxuICAgICAgICAgIGlmICh0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICB0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzW2ZpZWxkTWFwW2tleV1dID0gdGVtcEZlYXR1cmUuYXR0cmlidXRlc1trZXldXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXMuZXhiZmlkID0gaW5kZXhcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXMgPSB7XHJcbiAgICAgICAgICAgICAgZXhiZmlkOiBpbmRleFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzb3VyY2VGZWF0dXJlcy5wdXNoKHRlbXBGZWF0dXJlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XHJcbiAgICAgICAgICBpZDogbGF5ZXJJZCxcclxuICAgICAgICAgIHRpdGxlOiBsYXllckZyb21GZWF0dXJlU2V0LnRpdGxlLFxyXG4gICAgICAgICAgc291cmNlOiBzb3VyY2VGZWF0dXJlcyxcclxuICAgICAgICAgIGZpZWxkczogZmllbGRzSW5GZWF0dXJlbGF5ZXIsXHJcbiAgICAgICAgICBvdXRGaWVsZHM6IFsnKiddLFxyXG4gICAgICAgICAgb2JqZWN0SWRGaWVsZDogJ2V4YmZpZCcsXHJcbiAgICAgICAgICByZW5kZXJlcjogbGF5ZXJGcm9tRmVhdHVyZVNldC5yZW5kZXJlcixcclxuICAgICAgICAgIHBvcHVwRW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgIHBvcHVwVGVtcGxhdGU6IHtcclxuICAgICAgICAgICAgdGl0bGU6ICdpbmZvcm1hdGlvbicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFt7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ2ZpZWxkcycsXHJcbiAgICAgICAgICAgICAgZmllbGRJbmZvczogZmllbGRzSW5Qb3B1cFRlbXBsYXRlXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbWFwQmFzZVZpZXcubWFwLmFkZChsYXllcilcclxuXHJcbiAgICAgICAgbGF5ZXIub24oJ2xheWVydmlldy1jcmVhdGUnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKG51bGwpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZWFzb25hYmxlRmllbGQgKGZpZWxkOiBfX2VzcmkuRmllbGQpOiBfX2VzcmkuRmllbGQge1xyXG4gIC8vIHRoZSBmdW5jdGlvbiBpcyBzdXBwb3J0ZWQgdG8gbm9ybWFsaXplIHRoZSBmaWVsZC5uYW1lXHJcbiAgY29uc3QgZmllbGROYW1lID0gZmllbGQubmFtZVxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiBmaWVsZE5hbWUucmVwbGFjZSgvXFwuL2csICdfJykucmVwbGFjZSgvXFwoL2csICdfJykucmVwbGFjZSgvXFwpL2csICdfJyksXHJcbiAgICBhbGlhczogZmllbGQuYWxpYXMsXHJcbiAgICB0eXBlOiBmaWVsZC50eXBlXHJcbiAgfSBhcyBhbnlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEZlYXR1cmUgKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIHRhcmdldDogX19lc3JpLkdyYXBoaWMgfCBfX2VzcmkuR3JhcGhpY1tdIHwgSUZlYXR1cmUgfCBJRmVhdHVyZVtdLCBsYXllcklkPzogc3RyaW5nKTogSGlnaExpZ2h0SGFuZGxlIHtcclxuICAvLyBJbiB0aGlzIGZ1bmN0aW9uLCB3ZSBhc3N1bWUgdGhhdCBmZWF0dXJlcyBjb21lIGZyb20gdGhlIHNhbWUgbGF5ZXJcclxuICBsZXQgZmVhdHVyZUxheWVySWQgPSBsYXllcklkXHJcbiAgbGV0IGZlYXR1cmVMYXllclZpZXcgPSBudWxsXHJcbiAgbGV0IHRlbXBGZWF0dXJlID0gbnVsbFxyXG5cclxuICAvLyBpZiBsYXllcklkIGRvZXNuJ3QgZXhpc3QsIHdlIGdldCBsYXllcklkIGJ5IGZlYXR1cmVcclxuICBpZiAoIWZlYXR1cmVMYXllcklkKSB7XHJcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgdGVtcEZlYXR1cmUgPSB0YXJnZXRbMF0gYXMgX19lc3JpLkdyYXBoaWNcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRlbXBGZWF0dXJlID0gdGFyZ2V0IGFzIF9fZXNyaS5HcmFwaGljXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRlbXBGZWF0dXJlKSB7XHJcbiAgICAgIGZlYXR1cmVMYXllcklkID0gdGVtcEZlYXR1cmUubGF5ZXIgJiYgdGVtcEZlYXR1cmUubGF5ZXIuaWRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChmZWF0dXJlTGF5ZXJJZCkge1xyXG4gICAgY29uc3QgbGF5ZXJWaWV3cyA9IG1hcEJhc2VWaWV3LmFsbExheWVyVmlld3NcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGF5ZXJWaWV3cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAobGF5ZXJWaWV3cy5nZXRJdGVtQXQoaSkubGF5ZXIuaWQgPT09IGZlYXR1cmVMYXllcklkKSB7XHJcbiAgICAgICAgZmVhdHVyZUxheWVyVmlldyA9IGxheWVyVmlld3MuZ2V0SXRlbUF0KGkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmVhdHVyZUxheWVyVmlldykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxheWVySWQ6IGZlYXR1cmVMYXllcklkLFxyXG4gICAgICAgIGhhbmRsZTogZmVhdHVyZUxheWVyVmlldy5oaWdobGlnaHQodGFyZ2V0KVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdvVG9UYXJnZXRJbW1lZGlhdGVseSAodmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBfdGFyZ2V0OiBfX2VzcmkuR2VvbWV0cnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICBjb25zdCB2aWV3U1IgPSB2aWV3LnNwYXRpYWxSZWZlcmVuY2VcclxuICBjb25zdCBnZW9tZXRyaWVzID0gYXdhaXQgcHJvamVjdEdlb21ldHJpZXMoW190YXJnZXRdLCB2aWV3U1IpXHJcblxyXG4gIGlmIChnZW9tZXRyaWVzICYmIGdlb21ldHJpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZ2VvbWV0cmllc1swXVxyXG4gICAgdmlldy5nb1RvKHRhcmdldCwgeyBhbmltYXRlOiBmYWxzZSB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdvVG9WaWV3cG9pbnRJbW1lZGlhdGVseSAodmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBfdmlld3BvaW50OiBfX2VzcmkuVmlld3BvaW50KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgY29uc3Qgdmlld1NSID0gdmlldy5zcGF0aWFsUmVmZXJlbmNlXHJcbiAgY29uc3Qgdmlld3BvaW50ID0gYXdhaXQgcHJvamVjdFZpZXdwb2ludChfdmlld3BvaW50LCB2aWV3U1IpXHJcbiAgLy8gdmlldy5nb1RvKHZpZXdwb2ludCwgeyBhbmltYXRlOiBmYWxzZSB9KVxyXG4gIHZpZXcudmlld3BvaW50ID0gdmlld3BvaW50XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc05lZWRQcm9qZWN0Vmlld3BvaW50ICh2aWV3cG9pbnQ6IF9fZXNyaS5WaWV3cG9pbnQsIHZpZXdTUjogX19lc3JpLlNwYXRpYWxSZWZlcmVuY2UpOiBib29sZWFuIHtcclxuICBjb25zdCBzcjEgPSB2aWV3cG9pbnQudGFyZ2V0R2VvbWV0cnk/LnNwYXRpYWxSZWZlcmVuY2VcclxuXHJcbiAgaWYgKHNyMSAmJiBpc05lZWRQcm9qZWN0U3BhdGlhbFJlZmVyZW5jZShzcjEsIHZpZXdTUikpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBjb25zdCBzcjIgPSB2aWV3cG9pbnQuY2FtZXJhPy5wb3NpdGlvbj8uc3BhdGlhbFJlZmVyZW5jZVxyXG5cclxuICBpZiAoc3IyICYmIGlzTmVlZFByb2plY3RTcGF0aWFsUmVmZXJlbmNlKHNyMiwgdmlld1NSKSkge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOZWVkUHJvamVjdFNwYXRpYWxSZWZlcmVuY2UgKHNyMTogX19lc3JpLlNwYXRpYWxSZWZlcmVuY2UsIHNyMjogX19lc3JpLlNwYXRpYWxSZWZlcmVuY2UpOiBib29sZWFuIHtcclxuICBjb25zdCBpc1NhbWUgPSBzcjEud2tpZCA9PT0gc3IyLndraWQgfHwgc3IxLmVxdWFscyhzcjIpXHJcbiAgLy8gIEluIEpTIEFQSSA0LngsIHRoZSB2aWV3IGNhbiBoYW5kbGUgV2ViTWVyY2F0b3IgYW5kIFdHUzg0IHNwYXRpYWxSZWZlcmVuY2UgYXV0b1xyXG4gIGNvbnN0IGlzTGlrZSA9IChzcjEuaXNXZWJNZXJjYXRvciB8fCBzcjEuaXNXR1M4NCkgJiYgKHNyMi5pc1dlYk1lcmNhdG9yIHx8IHNyMi5pc1dHUzg0KVxyXG4gIHJldHVybiAhaXNTYW1lICYmICFpc0xpa2VcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2plY3RWaWV3cG9pbnQgKF92aWV3cG9pbnQ6IF9fZXNyaS5WaWV3cG9pbnQsIHZpZXdTUjogX19lc3JpLlNwYXRpYWxSZWZlcmVuY2UpOiBQcm9taXNlPF9fZXNyaS5WaWV3cG9pbnQ+IHtcclxuICBjb25zdCB2aWV3cG9pbnQgPSBfdmlld3BvaW50LmNsb25lKClcclxuICBjb25zdCB0YXJnZXRHZW9tZXRyeSA9IHZpZXdwb2ludC50YXJnZXRHZW9tZXRyeVxyXG4gIGNvbnN0IGNhbWVyYVBvc2l0b24gPSB2aWV3cG9pbnQuY2FtZXJhPy5wb3NpdGlvblxyXG5cclxuICBjb25zdCB0b1Byb2plY3RHZW9tZXRyaWVzOiBfX2VzcmkuR2VvbWV0cnlbXSA9IFtdXHJcbiAgbGV0IGlzUHJvamVjdFRhcmdldEdlb21ldHJ5OiBib29sZWFuID0gZmFsc2VcclxuICBsZXQgaXNQcm9qZWN0Q2FtZXJhUG9zaXRpb246IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICBpZiAodGFyZ2V0R2VvbWV0cnkgJiYgaXNOZWVkUHJvamVjdFNwYXRpYWxSZWZlcmVuY2UodGFyZ2V0R2VvbWV0cnkuc3BhdGlhbFJlZmVyZW5jZSwgdmlld1NSKSkge1xyXG4gICAgaXNQcm9qZWN0VGFyZ2V0R2VvbWV0cnkgPSB0cnVlXHJcbiAgICB0b1Byb2plY3RHZW9tZXRyaWVzLnB1c2godGFyZ2V0R2VvbWV0cnkpXHJcbiAgfVxyXG5cclxuICBpZiAoY2FtZXJhUG9zaXRvbiAmJiBpc05lZWRQcm9qZWN0U3BhdGlhbFJlZmVyZW5jZShjYW1lcmFQb3NpdG9uLnNwYXRpYWxSZWZlcmVuY2UsIHZpZXdTUikpIHtcclxuICAgIGlzUHJvamVjdENhbWVyYVBvc2l0aW9uID0gdHJ1ZVxyXG4gICAgdG9Qcm9qZWN0R2VvbWV0cmllcy5wdXNoKGNhbWVyYVBvc2l0b24pXHJcbiAgfVxyXG5cclxuICBpZiAodG9Qcm9qZWN0R2VvbWV0cmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ZWRHZW9tZXRyaWVzID0gYXdhaXQgcHJvamVjdEdlb21ldHJpZXModG9Qcm9qZWN0R2VvbWV0cmllcywgdmlld1NSKVxyXG5cclxuICAgIGlmIChpc1Byb2plY3RUYXJnZXRHZW9tZXRyeSkge1xyXG4gICAgICB2aWV3cG9pbnQudGFyZ2V0R2VvbWV0cnkgPSBwcm9qZWN0ZWRHZW9tZXRyaWVzWzBdXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzUHJvamVjdENhbWVyYVBvc2l0aW9uKSB7XHJcbiAgICAgIHZpZXdwb2ludC5jYW1lcmEucG9zaXRpb24gPSBwcm9qZWN0ZWRHZW9tZXRyaWVzW3Byb2plY3RlZEdlb21ldHJpZXMubGVuZ3RoIC0gMV0gYXMgX19lc3JpLlBvaW50XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdmlld3BvaW50XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYXBQYW50byAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgdGFyZ2V0OiBfX2VzcmkuR2VvbWV0cnkgfCBfX2VzcmkuR2VvbWV0cnlbXSB8XHJcbl9fZXNyaS5HcmFwaGljIHwgX19lc3JpLkdyYXBoaWNbXSB8IF9fZXNyaS5FeHRlbnQpOiBQcm9taXNlPGFueT4ge1xyXG4gIGNvbnN0IHBhblRvVGFyZ2V0ID0gdGFyZ2V0IGFzIGFueVxyXG4gIGNvbnN0IHRlbXBCYXNlTWFwVmlldyA9IG1hcEJhc2VWaWV3IGFzIGFueVxyXG4gIGlmIChwYW5Ub1RhcmdldCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICBpZiAocGFuVG9UYXJnZXQubGVuZ3RoID09PSAwKSB7IGF3YWl0IFByb21pc2UucmVzb2x2ZSgpOyByZXR1cm4gfVxyXG5cclxuICAgIGlmIChwYW5Ub1RhcmdldFswXS5nZW9tZXRyeSkge1xyXG4gICAgICBjb25zdCBnZW9tZXRyeUFycjogX19lc3JpLkdlb21ldHJ5W10gPSBbXVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhblRvVGFyZ2V0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZ2VvbWV0cnlBcnIucHVzaChwYW5Ub1RhcmdldFtpXS5nZW9tZXRyeSlcclxuICAgICAgfVxyXG5cclxuICAgICAgYXdhaXQgZ2V0R2VvbWV0cmllc0V4dGVudChnZW9tZXRyeUFycikudGhlbigoZXh0ZW50KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGdvVG8odGVtcEJhc2VNYXBWaWV3LCBleHRlbnQuY2VudGVyKVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGdldEdlb21ldHJpZXNFeHRlbnQocGFuVG9UYXJnZXQpLnRoZW4oKGV4dGVudCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBnb1RvKHRlbXBCYXNlTWFwVmlldywgZXh0ZW50LmNlbnRlcilcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKHBhblRvVGFyZ2V0Lmdlb21ldHJ5KSB7XHJcbiAgICAgIGNvbnN0IGdldG1ldHJ5ID0gcGFuVG9UYXJnZXQuZ2VvbWV0cnkgYXMgX19lc3JpLkdlb21ldHJ5XHJcbiAgICAgIHJldHVybiBnb1RvKHRlbXBCYXNlTWFwVmlldywgZ2V0Q2VudGVyUG9pbnQoZ2V0bWV0cnkpKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGdvVG8odGVtcEJhc2VNYXBWaWV3LCBnZXRDZW50ZXJQb2ludChwYW5Ub1RhcmdldCkpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnb1RvICh2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIHRhcmdldDogYW55KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIC8vIGRlbGF5IGJlZm9yZSB1cGRhdGluZyBvZiB2aWV3IHR1cm5zIHRydWUsIDQwMG1zIGlzIGEgdGVtcG9yYXJ5IHNvbHV0aW9uLlxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIC8vLy8gdGhlcmUgaXMgYSBjb25mbGljdCBmb3IgcGFuaW5nIHdoZW4gdGhlIGxheWVyIHZpZXcgaXMgdXBkYXRpbmcsIHN1Y2ggYXMgJ3BhbiB0bycgYW5kICdmaWx0ZXInLlxyXG4gICAgICAvLy8vIHRoaXMgaXMgYSB0ZW1wb3Jhcnkgc29sdXRpb24sIGl0IGNhbiByZWR1Y2UgdGhlIGZyZXF1ZW5jeSBvZiB0aGUgcHJvYmxlbSByYXRoZXIgdGhhbiBzb2x2ZSBpdCBjb21wbGV0ZWx5LlxyXG4gICAgICAvL2lmICh2aWV3LnVwZGF0aW5nKSB7XHJcbiAgICAgIC8vICBjb25zdCBoYW5kbGVyID0gdmlldy53YXRjaCgndXBkYXRpbmcnLCB2YWx1ZSA9PiB7XHJcbiAgICAgIC8vICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgLy8gICAgICB2aWV3LmdvVG8odGFyZ2V0KS50aGVuKCgpID0+IHJlc29sdmUoKSkuY2F0Y2goKCkgPT4gcmVqZWN0KCkpXHJcbiAgICAgIC8vICAgICAgaGFuZGxlci5yZW1vdmUoKVxyXG4gICAgICAvLyAgICB9XHJcbiAgICAgIC8vICB9KVxyXG4gICAgICAvL30gZWxzZSB7XHJcbiAgICAgIC8vICB2aWV3LmdvVG8odGFyZ2V0KS50aGVuKCgpID0+IHJlc29sdmUoKSkuY2F0Y2goKCkgPT4gcmVqZWN0KCkpXHJcbiAgICAgIC8vfVxyXG4gICAgICB2aWV3LmdvVG8odGFyZ2V0KS50aGVuKCgpID0+IHsgcmVzb2x2ZSgpIH0pLmNhdGNoKCgpID0+IHsgcmVqZWN0KCkgfSlcclxuICAgIH0sIDQwMClcclxuICB9KVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRHZW9tZXRyaWVzRXh0ZW50IChnZW9tZXRyaWVzOiBfX2VzcmkuR2VvbWV0cnlbXSk6IFByb21pc2U8X19lc3JpLkV4dGVudD4ge1xyXG4gIHJldHVybiBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICdlc3JpL2dlb21ldHJ5L0V4dGVudCdcclxuICBdKS50aGVuKGFzeW5jIG1vZHVsZXMgPT4ge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICBsZXQgRXh0ZW50OiB0eXBlb2YgX19lc3JpLkV4dGVudDtcclxuICAgIFtFeHRlbnRdID0gbW9kdWxlc1xyXG5cclxuICAgIGlmICghZ2VvbWV0cmllcyB8fCAhZ2VvbWV0cmllcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShudWxsKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBmdWxsRXh0ZW50OiBfX2VzcmkuRXh0ZW50ID0gbnVsbFxyXG4gICAgbGV0IGluZGV4XHJcbiAgICBjb25zdCBudW1HZW9tZXRyaWVzID0gZ2VvbWV0cmllcy5sZW5ndGhcclxuXHJcbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBudW1HZW9tZXRyaWVzOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGdlb21ldHJ5ID0gZ2VvbWV0cmllc1tpbmRleF1cclxuICAgICAgaWYgKCFnZW9tZXRyeSkge1xyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBleHRlbnQgPSBnZW9tZXRyeS5leHRlbnRcclxuXHJcbiAgICAgIGlmICghZXh0ZW50ICYmIGdlb21ldHJ5LnR5cGUgPT09ICdwb2ludCcpIHtcclxuICAgICAgICBjb25zdCBwb2ludEdlb21ldHJ5ID0gZ2VvbWV0cnkgYXMgYW55XHJcblxyXG4gICAgICAgIGlmIChwb2ludEdlb21ldHJ5LnggJiYgcG9pbnRHZW9tZXRyeS55KSB7XHJcbiAgICAgICAgICBleHRlbnQgPSBuZXcgRXh0ZW50KHtcclxuICAgICAgICAgICAgeG1heDogcG9pbnRHZW9tZXRyeS54LFxyXG4gICAgICAgICAgICB4bWluOiBwb2ludEdlb21ldHJ5LngsXHJcbiAgICAgICAgICAgIHltYXg6IHBvaW50R2VvbWV0cnkueSxcclxuICAgICAgICAgICAgeW1pbjogcG9pbnRHZW9tZXRyeS55LFxyXG4gICAgICAgICAgICB6bWF4OiBwb2ludEdlb21ldHJ5LnosXHJcbiAgICAgICAgICAgIHptaW46IHBvaW50R2VvbWV0cnkueixcclxuICAgICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogcG9pbnRHZW9tZXRyeS5zcGF0aWFsUmVmZXJlbmNlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFleHRlbnQpIHtcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZnVsbEV4dGVudCkge1xyXG4gICAgICAgIGZ1bGxFeHRlbnQgPSBmdWxsRXh0ZW50LnVuaW9uKGV4dGVudClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmdWxsRXh0ZW50ID0gZXh0ZW50XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZnVsbEV4dGVudC53aWR0aCA8IDAgJiYgZnVsbEV4dGVudC5oZWlnaHQgPCAwKSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUobnVsbClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGZ1bGxFeHRlbnQpXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbHRlckZlYXR1cmVzQnlRdWVyeSAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LCBhY3Rpb25MYXllckRhdGFTb3VyY2VJZDogc3RyaW5nLCBxdWVyeVNRTDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgaWYgKCFhY3Rpb25MYXllckRhdGFTb3VyY2VJZCkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBjb25zdCBkYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGFjdGlvbkxheWVyRGF0YVNvdXJjZUlkKVxyXG5cclxuICBpZiAoIWRhdGFTb3VyY2UpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgbGV0IGppbXVMYXllclZpZXc6IEppbXVMYXllclZpZXcgPSBudWxsXHJcblxyXG4gIHRyeSB7XHJcbiAgICBqaW11TGF5ZXJWaWV3ID0gYXdhaXQgamltdU1hcFZpZXcud2hlbkppbXVMYXllclZpZXdMb2FkZWRCeURhdGFTb3VyY2UoZGF0YVNvdXJjZSlcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGppbXVMYXllclZpZXcgPSBudWxsXHJcbiAgICBjb25zb2xlLmVycm9yKCdjYW5cXCd0IGdldCBqaW11TGF5ZXJWaWV3IGJ5IGRhdGFTb3VyY2UnLCBkYXRhU291cmNlLCBlcnIpXHJcbiAgfVxyXG5cclxuICBpZiAoamltdUxheWVyVmlldyAmJiBqaW11TGF5ZXJWaWV3LmxheWVyICYmIChqaW11TGF5ZXJWaWV3LnR5cGUgPT09IExheWVyVHlwZXMuRmVhdHVyZUxheWVyIHx8IGppbXVMYXllclZpZXcudHlwZSA9PT0gTGF5ZXJUeXBlcy5TY2VuZUxheWVyKSkge1xyXG4gICAgKGppbXVMYXllclZpZXcgYXMgSmltdUZlYXR1cmVMYXllclZpZXcgfCBKaW11U2NlbmVMYXllclZpZXcpLnNldERlZmluaXRpb25FeHByZXNzaW9uKHF1ZXJ5U1FMKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcXVlcnlGZWF0dXJlcyAobGF5ZXJPYmplY3QsIHF1ZXJ5U1FMOiBzdHJpbmcsIG91dEZpZWxkczogc3RyaW5nW10pIHtcclxuICByZXR1cm4gbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAnZXNyaS9yZXN0L3N1cHBvcnQvUXVlcnknXHJcbiAgXSkudGhlbihtb2R1bGVzID0+IHtcclxuICAgIGxldCBRdWVyeTogdHlwZW9mIF9fZXNyaS5RdWVyeTtcclxuICAgIFtRdWVyeV0gPSBtb2R1bGVzXHJcbiAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSgpXHJcbiAgICBxdWVyeS53aGVyZSA9IHF1ZXJ5U1FMXHJcbiAgICBxdWVyeS5vdXRGaWVsZHMgPSBvdXRGaWVsZHMgfHwgW11cclxuICAgIHF1ZXJ5LnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxyXG4gICAgcmV0dXJuIGxheWVyT2JqZWN0LnF1ZXJ5RmVhdHVyZXMocXVlcnkpLnRoZW4oZmVhdHVyZVNldCA9PiB7XHJcbiAgICAgIHJldHVybiBmZWF0dXJlU2V0XHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZsYXNoT25GZWF0dXJlTGF5ZXIgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldywgcXVlcnlTUUw6IHN0cmluZywgdGVtcEppbXVMYXllclZpZXc6IEppbXVGZWF0dXJlTGF5ZXJWaWV3KSB7XHJcbiAgaWYgKCh0ZW1wSmltdUxheWVyVmlldykudmlldykge1xyXG4gICAgbGV0IGZlYXR1cmVMYXllclZpZXc6IF9fZXNyaS5GZWF0dXJlTGF5ZXJWaWV3ID0gKHRlbXBKaW11TGF5ZXJWaWV3KS52aWV3XHJcbiAgICBpZiAoZmVhdHVyZUxheWVyVmlldykge1xyXG4gICAgICBxdWVyeUZlYXR1cmVzKGZlYXR1cmVMYXllclZpZXcubGF5ZXIsIHF1ZXJ5U1FMLCBbXSkudGhlbihmZWF0dXJlU2V0ID0+IHtcclxuICAgICAgICBpZiAoZmVhdHVyZVNldCAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzICYmIGZlYXR1cmVTZXQuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY29uc3Qgc3ltYm9sID0gZ2V0Rmxhc2hTeW1ib2woZmVhdHVyZUxheWVyVmlldy5sYXllci5nZW9tZXRyeVR5cGUpXHJcbiAgICAgICAgICBzdGFydEZsYXNoKGppbXVNYXBWaWV3LnZpZXcsIGZlYXR1cmVTZXQuZmVhdHVyZXMsIHN5bWJvbClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcidcclxuICAgIF0pLnRoZW4obW9kdWxlcyA9PiB7XHJcbiAgICAgIGxldCBGZWF0dXJlTGF5ZXI6IHR5cGVvZiBfX2VzcmkuRmVhdHVyZUxheWVyO1xyXG4gICAgICBbRmVhdHVyZUxheWVyXSA9IG1vZHVsZXNcclxuXHJcbiAgICAgIGxldCB0ZW1wRmVhdHVyZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XHJcbiAgICAgICAgdXJsOiBkYXRhU291cmNlVXRpbHMuZ2V0VXJsQnlMYXllcigodGVtcEppbXVMYXllclZpZXcgYXMgSmltdUZlYXR1cmVMYXllclZpZXcgfCBKaW11U2NlbmVMYXllclZpZXcpLmxheWVyKVxyXG4gICAgICB9KVxyXG4gICAgICB0ZW1wRmVhdHVyZUxheWVyLmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICBxdWVyeUZlYXR1cmVzKHRlbXBGZWF0dXJlTGF5ZXIsIHF1ZXJ5U1FMLCBbXSkudGhlbihmZWF0dXJlU2V0ID0+IHtcclxuICAgICAgICAgIGlmIChmZWF0dXJlU2V0ICYmIGZlYXR1cmVTZXQuZmVhdHVyZXMgJiYgZmVhdHVyZVNldC5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IGdldEZsYXNoU3ltYm9sKGZlYXR1cmVTZXQuZmVhdHVyZXNbMF0uZ2VvbWV0cnkudHlwZSlcclxuICAgICAgICAgICAgc3RhcnRGbGFzaChqaW11TWFwVmlldy52aWV3LCBmZWF0dXJlU2V0LmZlYXR1cmVzLCBzeW1ib2wpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5sZXQgc2NlbmVIaWdodGxpZ2h0SGFuZGxlID0gbnVsbFxyXG5mdW5jdGlvbiBmbGFzaE9uU2NlbmVMYXllciAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LCBxdWVyeVNRTDogc3RyaW5nLCB0ZW1wSmltdUxheWVyVmlldzogSmltdVNjZW5lTGF5ZXJWaWV3KSB7XHJcbiAgaWYgKCh0ZW1wSmltdUxheWVyVmlldykudmlldykge1xyXG4gICAgbGV0IHNjZW5lTGF5ZXJWaWV3OiBfX2VzcmkuU2NlbmVMYXllclZpZXcgPSAodGVtcEppbXVMYXllclZpZXcpLnZpZXdcclxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIHF1ZXJ5RmVhdHVyZXMoc2NlbmVMYXllclZpZXc/LmxheWVyPy5hc3NvY2lhdGVkTGF5ZXIsIHF1ZXJ5U1FMLCBbXSkudGhlbihmZWF0dXJlU2V0ID0+IHtcclxuICAgICAgaWYgKGZlYXR1cmVTZXQgJiYgZmVhdHVyZVNldC5mZWF0dXJlcyAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBvYmplY3RJZEZpZWxkID0gc2NlbmVMYXllclZpZXcubGF5ZXIub2JqZWN0SWRGaWVsZFxyXG4gICAgICAgIGNvbnN0IG9iamVjdElkcyA9IGZlYXR1cmVTZXQuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4gZmVhdHVyZS5hdHRyaWJ1dGVzW29iamVjdElkRmllbGRdKVxyXG5cclxuICAgICAgICBsZXQgaSA9IDBcclxuICAgICAgICBjb25zdCBtYXhGbGFzaENvdW50ID0gNlxyXG4gICAgICAgIGxldCBoaWdobGlnaHRDb2xvciA9IFsyNTUsIDI1NSwgMCwgMC44XVxyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsSGlnaGxpZ2h0T3B0aW9ucyA9IGppbXVNYXBWaWV3LnZpZXcuaGlnaGxpZ2h0T3B0aW9uc1xyXG5cclxuICAgICAgICBjb25zdCBmbGFzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmIChpIDwgbWF4Rmxhc2hDb3VudCkge1xyXG4gICAgICAgICAgICBpKytcclxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodENvbG9yKSB7XHJcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0Q29sb3IgPSBudWxsXHJcbiAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgICAgICAgICAgIGppbXVNYXBWaWV3LnZpZXcuaGlnaGxpZ2h0T3B0aW9ucyA9IHsgY29sb3I6IFswLCAwLCAwLCAwXSB9XHJcbiAgICAgICAgICAgICAgc2NlbmVIaWdodGxpZ2h0SGFuZGxlICYmIHNjZW5lSGlnaHRsaWdodEhhbmRsZS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgIHNjZW5lSGlnaHRsaWdodEhhbmRsZSA9IHNjZW5lTGF5ZXJWaWV3LmhpZ2hsaWdodChvYmplY3RJZHMpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0Q29sb3IgPSBbMjU1LCAyNTUsIDAsIDAuOF1cclxuICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICAgICAgICAgICAgamltdU1hcFZpZXcudmlldy5oaWdobGlnaHRPcHRpb25zID0geyBjb2xvcjogaGlnaGxpZ2h0Q29sb3IgfVxyXG4gICAgICAgICAgICAgIHNjZW5lSGlnaHRsaWdodEhhbmRsZSAmJiBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUucmVtb3ZlKClcclxuICAgICAgICAgICAgICBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgPSBzY2VuZUxheWVyVmlldy5oaWdobGlnaHQob2JqZWN0SWRzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZmxhc2gsIDUwMClcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGppbXVNYXBWaWV3LnZpZXcuaGlnaGxpZ2h0T3B0aW9ucyA9IG9yaWdpbmFsSGlnaGxpZ2h0T3B0aW9uc1xyXG4gICAgICAgICAgICBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgJiYgc2NlbmVIaWdodGxpZ2h0SGFuZGxlLnJlbW92ZSgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoZmxhc2gsIDUwMClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmbGFzaEZlYXR1cmVzQnlRdWVyeSAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LCBsYXllckRhdGFTb3VyY2VJZDogc3RyaW5nLCBxdWVyeVNRTDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgaWYgKCFsYXllckRhdGFTb3VyY2VJZCkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBjb25zdCBkYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGxheWVyRGF0YVNvdXJjZUlkKVxyXG5cclxuICBpZiAoIWRhdGFTb3VyY2UpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgbGV0IGppbXVMYXllclZpZXc6IEppbXVMYXllclZpZXcgPSBudWxsXHJcblxyXG4gIHRyeSB7XHJcbiAgICBqaW11TGF5ZXJWaWV3ID0gYXdhaXQgamltdU1hcFZpZXcud2hlbkppbXVMYXllclZpZXdMb2FkZWRCeURhdGFTb3VyY2UoZGF0YVNvdXJjZSlcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGppbXVMYXllclZpZXcgPSBudWxsXHJcbiAgICBjb25zb2xlLmVycm9yKCdjYW5cXCd0IGdldCBqaW11TGF5ZXJWaWV3IGJ5IGRhdGFTb3VyY2UnLCBkYXRhU291cmNlLCBlcnIpXHJcbiAgfVxyXG5cclxuICBpZiAoamltdUxheWVyVmlldyAmJiBqaW11TGF5ZXJWaWV3LmxheWVyKSB7XHJcbiAgICBpZiAoamltdUxheWVyVmlldy50eXBlID09PSBMYXllclR5cGVzLkZlYXR1cmVMYXllcikge1xyXG4gICAgICBmbGFzaE9uRmVhdHVyZUxheWVyKGppbXVNYXBWaWV3LCBxdWVyeVNRTCwgamltdUxheWVyVmlldyBhcyBKaW11RmVhdHVyZUxheWVyVmlldylcclxuICAgIH0gZWxzZSBpZiAoamltdUxheWVyVmlldy50eXBlID09PSBMYXllclR5cGVzLlNjZW5lTGF5ZXIpIHtcclxuICAgICAgZmxhc2hPblNjZW5lTGF5ZXIoamltdU1hcFZpZXcsIHF1ZXJ5U1FMLCBqaW11TGF5ZXJWaWV3IGFzIEppbXVTY2VuZUxheWVyVmlldylcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0Rmxhc2ggKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIGZlYXR1cmVzOiBfX2VzcmkuR3JhcGhpY1tdLCBzeW1ib2wpIHtcclxuICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICdlc3JpL0dyYXBoaWMnXHJcbiAgXSkudGhlbihtb2R1bGVzID0+IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgbGV0IEdyYXBoaWM6IHR5cGVvZiBfX2VzcmkuR3JhcGhpYztcclxuICAgIFtHcmFwaGljXSA9IG1vZHVsZXNcclxuXHJcbiAgICBjb25zdCBmbGFzaEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVzOiBfX2VzcmkuR3JhcGhpY1tdLCBtYXhGbGFzaENvdW50OiBudW1iZXIpIHtcclxuICAgICAgY29uc3QgZ3JhcGhpY3MgPSBbXVxyXG4gICAgICBsZXQgZmxhc2hDb3VudCA9IDBcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHRlbXBHcmFwaGljID0gbmV3IEdyYXBoaWMoe1xyXG4gICAgICAgICAgZ2VvbWV0cnk6IGZlYXR1cmVzW2ldLmdlb21ldHJ5LFxyXG4gICAgICAgICAgc3ltYm9sOiBzeW1ib2wsXHJcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBmZWF0dXJlc1tpXS5hdHRyaWJ1dGVzXHJcbiAgICAgICAgfSlcclxuICAgICAgICBncmFwaGljcy5wdXNoKHRlbXBHcmFwaGljKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzaW5nbGVGbGFzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBtYXBCYXNlVmlldy5ncmFwaGljcy5hZGRNYW55KGdyYXBoaWNzKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgbWFwQmFzZVZpZXcuZ3JhcGhpY3MucmVtb3ZlTWFueShncmFwaGljcylcclxuICAgICAgICAgIGZsYXNoQ291bnQgPSBmbGFzaENvdW50ICsgMVxyXG4gICAgICAgICAgaWYgKGZsYXNoQ291bnQgPCBtYXhGbGFzaENvdW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNpbmdsZUZsYXNoKClcclxuICAgICAgICAgICAgfSwgNTAwKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDUwMClcclxuICAgICAgfVxyXG5cclxuICAgICAgc2luZ2xlRmxhc2goKVxyXG4gICAgfVxyXG5cclxuICAgIGZsYXNoRmVhdHVyZXMoZmVhdHVyZXMsIDMpXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Rmxhc2hTeW1ib2wgKGdlb21ldHJ5VHlwZTogc3RyaW5nKSB7XHJcbiAgaWYgKFsncG9pbnQnLCAnbXVsdGlwb2ludCddLmluY2x1ZGVzKGdlb21ldHJ5VHlwZSkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6ICdzaW1wbGUtbWFya2VyJyxcclxuICAgICAgc3R5bGU6ICdjaXJjbGUnLFxyXG4gICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjhdLFxyXG4gICAgICBzaXplOiAnMTZweCcsXHJcbiAgICAgIG91dGxpbmU6IHtcclxuICAgICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjhdLFxyXG4gICAgICAgIHdpZHRoOiAzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2UgaWYgKFsncG9seWxpbmUnXS5pbmNsdWRlcyhnZW9tZXRyeVR5cGUpKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiAnc2ltcGxlLWxpbmUnLFxyXG4gICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjhdLFxyXG4gICAgICB3aWR0aDogMyxcclxuICAgICAgc3R5bGU6ICdzb2xpZCdcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKFsncG9seWdvbicsICdleHRlbnQnXS5pbmNsdWRlcyhnZW9tZXRyeVR5cGUpKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLCAvLyBhdXRvY2FzdHMgYXMgbmV3IFNpbXBsZUZpbGxTeW1ib2woKVxyXG4gICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjVdLFxyXG4gICAgICBzdHlsZTogJ3NvbGlkJyxcclxuICAgICAgb3V0bGluZTogeyAvLyBhdXRvY2FzdHMgYXMgbmV3IFNpbXBsZUxpbmVTeW1ib2woKVxyXG4gICAgICAgIGNvbG9yOiBbMjU1LCAyNTUsIDAsIDAuOF0sXHJcbiAgICAgICAgd2lkdGg6IDNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoWydtZXNoJ10uaW5jbHVkZXMoZ2VvbWV0cnlUeXBlKSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogJ21lc2gtM2QnLCAvLyBhdXRvY2FzdHMgYXMgbmV3IE1lc2hTeW1ib2wzRCgpXHJcbiAgICAgIHN5bWJvbExheWVyczogW3tcclxuICAgICAgICB0eXBlOiAnZmlsbCcsIC8vIGF1dG9jYXN0cyBhcyBuZXcgRmlsbFN5bWJvbDNETGF5ZXIoKVxyXG4gICAgICAgIG1hdGVyaWFsOiB7IGNvbG9yOiBbMjU1LCAyNTUsIDAsIDAuOF0gfVxyXG4gICAgICB9XVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2VudGVyUG9pbnQgKGdlb21ldHJ5OiBfX2VzcmkuR2VvbWV0cnkpOiBfX2VzcmkuUG9pbnQge1xyXG4gIC8vIHBvaW50IHwgbXVsdGlwb2ludCB8IHBvbHlsaW5lIHwgcG9seWdvbiB8IGV4dGVudCB8IG1lc2hcclxuICBzd2l0Y2ggKGdlb21ldHJ5LnR5cGUpIHtcclxuICAgIGNhc2UgJ3BvaW50JzpcclxuICAgICAgcmV0dXJuIGdlb21ldHJ5IGFzIF9fZXNyaS5Qb2ludFxyXG4gICAgY2FzZSAnZXh0ZW50JzpcclxuICAgICAgcmV0dXJuIChnZW9tZXRyeSBhcyBfX2VzcmkuRXh0ZW50KS5jZW50ZXJcclxuICAgIGNhc2UgJ3BvbHlnb24nOlxyXG4gICAgICByZXR1cm4gKGdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uKS5jZW50cm9pZFxyXG4gICAgY2FzZSAncG9seWxpbmUnOlxyXG4gICAgICByZXR1cm4gKGdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5bGluZSkuZXh0ZW50LmNlbnRlclxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIGdlb21ldHJ5ICYmIGdlb21ldHJ5LmV4dGVudCA/IGdlb21ldHJ5LmV4dGVudC5jZW50ZXIgOiB1bmRlZmluZWRcclxuICAgIC8vIHRvZG9cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUZlYXR1cmUgKGZlYXR1cmU6IElGZWF0dXJlIHwgX19lc3JpLkdyYXBoaWMsIEdyYXBoaWM6IHR5cGVvZiBfX2VzcmkuR3JhcGhpYyk6IF9fZXNyaS5HcmFwaGljIHtcclxuICBsZXQgdGVtcEZlYXR1cmUgPSBudWxsXHJcbiAgaWYgKChmZWF0dXJlIGFzIGFueSkuY2xvbmUpIHtcclxuICAgIHRlbXBGZWF0dXJlID0gKGZlYXR1cmUgYXMgYW55KS5jbG9uZSgpXHJcbiAgfSBlbHNlIHtcclxuICAgIHRlbXBGZWF0dXJlID0gR3JhcGhpYy5mcm9tSlNPTihPYmplY3QuYXNzaWduKHt9LCBmZWF0dXJlKSlcclxuICAgIHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBmZWF0dXJlLmF0dHJpYnV0ZXMpXHJcbiAgfVxyXG4gIHJldHVybiB0ZW1wRmVhdHVyZVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvamVjdEdlb21ldHJpZXMgKGdlb21ldHJpZXM6IF9fZXNyaS5HZW9tZXRyeVtdLCBzcGF0aWFsUmVmZXJlbmNlOiBfX2VzcmkuU3BhdGlhbFJlZmVyZW5jZSk6IFByb21pc2U8X19lc3JpLkdlb21ldHJ5W10+IHtcclxuICBpZiAoIWdlb21ldHJpZXMgfHwgZ2VvbWV0cmllcy5sZW5ndGggPT09IDAgfHwgIWdlb21ldHJpZXNbMF0gfHxcclxuICAgIHNwYXRpYWxSZWZlcmVuY2Uud2tpZCA9PT0gZ2VvbWV0cmllc1swXS5zcGF0aWFsUmVmZXJlbmNlLndraWQgfHwgKHNwYXRpYWxSZWZlcmVuY2UuZXF1YWxzKGdlb21ldHJpZXNbMF0uc3BhdGlhbFJlZmVyZW5jZSkpKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGdlb21ldHJpZXMpXHJcbiAgfSBlbHNlIGlmIChzcGF0aWFsUmVmZXJlbmNlLmlzV2ViTWVyY2F0b3IgJiYgZ2VvbWV0cmllc1swXS5zcGF0aWFsUmVmZXJlbmNlLmlzV0dTODQpIHtcclxuICAgIC8vIEluIGpzIGFwaSA0LngsIHRoZSB2aWV3IGNhbiBoYW5kbGUgV2ViTWVyY2F0b3IgYW5kIFdHUzg0IHNwYXRpYWxSZWZlcmVuY2UgYXV0b1xyXG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShnZW9tZXRyaWVzKVxyXG4gIH0gZWxzZSBpZiAoc3BhdGlhbFJlZmVyZW5jZS5pc1dHUzg0ICYmIGdlb21ldHJpZXNbMF0uc3BhdGlhbFJlZmVyZW5jZS5pc1dlYk1lcmNhdG9yKSB7XHJcbiAgICAvLyBJbiBqcyBhcGkgNC54LCB0aGUgdmlldyBjYW4gaGFuZGxlIFdlYk1lcmNhdG9yIGFuZCBXR1M4NCBzcGF0aWFsUmVmZXJlbmNlIGF1dG9cclxuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZ2VvbWV0cmllcylcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGF3YWl0IGdlb21ldHJ5VXRpbHMucHJvamVjdFRvU3BhdGlhbFJlZmVyZW5jZShnZW9tZXRyaWVzLCBzcGF0aWFsUmVmZXJlbmNlKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3Nab29tVG9GZWF0dXJlcyAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgbGF5ZXI6IGFueSwgZmVhdHVyZXM6IF9fZXNyaS5HcmFwaGljW10pOiBQcm9taXNlPF9fZXNyaS5HcmFwaGljW10+IHtcclxuICBpZiAobWFwQmFzZVZpZXcgJiYgbWFwQmFzZVZpZXcudHlwZSA9PT0gJzNkJyAmJiBsYXllciAmJiBsYXllci5xdWVyeUZlYXR1cmVzICYmIGZlYXR1cmVzKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAgICdlc3JpL3Jlc3Qvc3VwcG9ydC9RdWVyeSdcclxuICAgIF0pLnRoZW4oKG1vZHVsZXMpID0+IHtcclxuICAgICAgY29uc3QgW1F1ZXJ5XSA9IG1vZHVsZXNcclxuICAgICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKVxyXG4gICAgICBxdWVyeS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcclxuICAgICAgcXVlcnkub3V0RmllbGRzID0gWycqJ11cclxuICAgICAgcXVlcnkub2JqZWN0SWRzID0gZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4gZmVhdHVyZS5hdHRyaWJ1dGVzW2xheWVyLm9iamVjdElkRmllbGRdKVxyXG4gICAgICByZXR1cm4gbGF5ZXIucXVlcnlGZWF0dXJlcyhxdWVyeSkudGhlbihhc3luYyAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuZmVhdHVyZXMgJiYgcmVzdWx0LmZlYXR1cmVzLmxlbmd0aCA9PT0gZmVhdHVyZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKHJlc3VsdC5mZWF0dXJlcylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShmZWF0dXJlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0sIGFzeW5jICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGZlYXR1cmVzKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShmZWF0dXJlcylcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lzTGl2ZSAoYXBwTW9kZTogQXBwTW9kZSk6IGJvb2xlYW4ge1xyXG4gIGlmICh3aW5kb3cuamltdUNvbmZpZy5pc0luQnVpbGRlcikge1xyXG4gICAgaWYgKGFwcE1vZGUgPT09IEFwcE1vZGUuRGVzaWduKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXllcnNGcm9tRGF0YVNvdXJjZUlkcyAoZGF0YVNvdXJjZUlkczogc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xyXG4gIGNvbnN0IGxheWVyUHJvbWlzZXMgPSBbXVxyXG4gIGRhdGFTb3VyY2VJZHMuZm9yRWFjaChkYXRhU291cmNlSWQgPT4ge1xyXG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShkYXRhU291cmNlSWQpIGFzIHVua25vd24gYXMgSlNBUElMYXllck1peGluXHJcbiAgICBsZXQgbGF5ZXJQcm9taXNlXHJcbiAgICBpZiAoZGF0YVNvdXJjZT8ubGF5ZXIpIHtcclxuICAgICAgbGF5ZXJQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGRhdGFTb3VyY2UubGF5ZXIpXHJcbiAgICB9IGVsc2UgaWYgKGRhdGFTb3VyY2U/LmNyZWF0ZUpTQVBJTGF5ZXJCeURhdGFTb3VyY2UpIHtcclxuICAgICAgbGF5ZXJQcm9taXNlID0gZGF0YVNvdXJjZS5jcmVhdGVKU0FQSUxheWVyQnlEYXRhU291cmNlKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxheWVyUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShudWxsKVxyXG4gICAgfVxyXG4gICAgbGF5ZXJQcm9taXNlcy5wdXNoKGxheWVyUHJvbWlzZSlcclxuICB9KVxyXG4gIHJldHVybiBQcm9taXNlLmFsbChsYXllclByb21pc2VzKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SmltdU1hcFZpZXdJZCAod2lkZ2V0SWQ6IHN0cmluZywgZGF0YVNvdXJjZUlkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIC8vIElmIGRhdGFTb3VyY2VJZCBpcyBudWxsLCBtYWtlIHN1cmUgaXQgY29udmVydHMgdG8gZW1wdHkgc3RyaW5nLlxyXG4gIGNvbnN0IGRzSWQgPSBkYXRhU291cmNlSWQgfHwgJydcclxuICByZXR1cm4gYCR7d2lkZ2V0SWR9LSR7ZHNJZH1gXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXBCYXNlUmVzdG9yZURhdGEgKG1hcEluc3RhbmNlOiBNYXBCYXNlKTogTWFwYmFzZVJlc3RvcmVEYXRhIHtcclxuICBjb25zdCB7XHJcbiAgICBtYXBDb250YWluZXIsXHJcbiAgICBzdGF0ZSxcclxuICAgIEdlb21ldHJ5LFxyXG4gICAgSW5pdGlhbFZpZXdQcm9wZXJ0aWVzLFxyXG4gICAgVGlsZUxheWVyLFxyXG4gICAgQmFzZW1hcCxcclxuICAgIE1hcFZpZXcsXHJcbiAgICBTY2VuZVZpZXcsXHJcbiAgICBFeHRlbnQsXHJcbiAgICBWaWV3cG9pbnQsXHJcbiAgICBQb3J0YWxJdGVtLFxyXG4gICAgUG9ydGFsLFxyXG4gICAgV2ViTWFwLFxyXG4gICAgV2ViU2NlbmUsXHJcbiAgICBDb2xvcixcclxuICAgIFNwYXRpYWxSZWZlcmVuY2UsXHJcbiAgICBQb2ludCxcclxuICAgIGV4cGVjdGVkRGF0YVNvdXJjZUluZm8sXHJcbiAgICBtYXBDcmVhdGluZ0luZm8sXHJcbiAgICB2aWV3LFxyXG4gICAgbGFzdFVwZGF0ZVZpZXdDb25maWcsXHJcbiAgICBtYXBEcyxcclxuICAgIGRzTWFuYWdlcixcclxuICAgIGlzRmlyc3RSZWNlaXZlTWVzc2FnZVxyXG4gIH0gPSBtYXBJbnN0YW5jZVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbWFwQ29udGFpbmVyLFxyXG4gICAgc3RhdGUsXHJcblxyXG4gICAgR2VvbWV0cnksXHJcbiAgICBJbml0aWFsVmlld1Byb3BlcnRpZXMsXHJcbiAgICBUaWxlTGF5ZXIsXHJcbiAgICBCYXNlbWFwLFxyXG4gICAgTWFwVmlldyxcclxuICAgIFNjZW5lVmlldyxcclxuICAgIEV4dGVudCxcclxuICAgIFZpZXdwb2ludCxcclxuICAgIFBvcnRhbEl0ZW0sXHJcbiAgICBQb3J0YWwsXHJcbiAgICBXZWJNYXAsXHJcbiAgICBXZWJTY2VuZSxcclxuICAgIENvbG9yLFxyXG4gICAgU3BhdGlhbFJlZmVyZW5jZSxcclxuICAgIFBvaW50LFxyXG5cclxuICAgIGV4cGVjdGVkRGF0YVNvdXJjZUluZm8sXHJcbiAgICBtYXBDcmVhdGluZ0luZm8sXHJcbiAgICB2aWV3LFxyXG4gICAgbGFzdFVwZGF0ZVZpZXdDb25maWcsXHJcbiAgICBtYXBEcyxcclxuXHJcbiAgICBkc01hbmFnZXIsXHJcbiAgICBpc0ZpcnN0UmVjZWl2ZU1lc3NhZ2VcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXN0b3JlTWFwQmFzZSAobWFwSW5zdGFuY2U6IE1hcEJhc2UsIHJlc3RvcmVEYXRhOiBNYXBiYXNlUmVzdG9yZURhdGEpOiB2b2lkIHtcclxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVzdG9yZURhdGEpXHJcblxyXG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcclxuICAgIG1hcEluc3RhbmNlW2tleV0gPSByZXN0b3JlRGF0YVtrZXldXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNUd29XaWRnZXRzTXV0dWFsbHlFeHRlbnRDaGFuZ2UgKHdpZGdldElkMTogc3RyaW5nLCB3aWRnZXRJZDI6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIGlmICh3aWRnZXRJZDEgJiYgd2lkZ2V0SWQyKSB7XHJcbiAgICBjb25zdCBtZXNzYWdlQ29uZmlncyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBDb25maWcubWVzc2FnZUNvbmZpZ3NcclxuXHJcbiAgICBpZiAobWVzc2FnZUNvbmZpZ3MpIHtcclxuICAgICAgY29uc3QgYWN0aW9uTmFtZXM6IHN0cmluZ1tdID0gWydwYW5UbycsICd6b29tVG9GZWF0dXJlJ11cclxuICAgICAgY29uc3QgbWVzc2FnZVR5cGUgPSBNZXNzYWdlVHlwZS5FeHRlbnRDaGFuZ2VcclxuXHJcbiAgICAgIGlmIChpc1dpZGdldFNlbmRBY3Rpb25zVG9Bbm90aGVyKHdpZGdldElkMSwgd2lkZ2V0SWQyLCBtZXNzYWdlQ29uZmlncywgbWVzc2FnZVR5cGUsIGFjdGlvbk5hbWVzKSAmJlxyXG4gICAgICAgICBpc1dpZGdldFNlbmRBY3Rpb25zVG9Bbm90aGVyKHdpZGdldElkMiwgd2lkZ2V0SWQxLCBtZXNzYWdlQ29uZmlncywgbWVzc2FnZVR5cGUsIGFjdGlvbk5hbWVzKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNXaWRnZXRTZW5kWm9vbVRvQWN0aW9uVG9Bbm90aGVyIChzZW5kTWVzc2FnZVdpZGdldElkOiBzdHJpbmcsIGFjdGlvbldpZGdldElkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSk6IGJvb2xlYW4ge1xyXG4gIGlmIChzZW5kTWVzc2FnZVdpZGdldElkICYmIGFjdGlvbldpZGdldElkKSB7XHJcbiAgICBjb25zdCBtZXNzYWdlQ29uZmlncyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBDb25maWcubWVzc2FnZUNvbmZpZ3NcclxuXHJcbiAgICBpZiAobWVzc2FnZUNvbmZpZ3MpIHtcclxuICAgICAgY29uc3QgYWN0aW9uTmFtZXM6IHN0cmluZ1tdID0gWyd6b29tVG9GZWF0dXJlJ11cclxuXHJcbiAgICAgIHJldHVybiBpc1dpZGdldFNlbmRBY3Rpb25zVG9Bbm90aGVyKHNlbmRNZXNzYWdlV2lkZ2V0SWQsIGFjdGlvbldpZGdldElkLCBtZXNzYWdlQ29uZmlncywgbWVzc2FnZVR5cGUsIGFjdGlvbk5hbWVzKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzV2lkZ2V0U2VuZEFjdGlvbnNUb0Fub3RoZXIgKFxyXG4gIHNlbmRNZXNzYWdlV2lkZ2V0SWQ6IHN0cmluZyxcclxuICBhY3Rpb25XaWRnZXRJZDogc3RyaW5nLFxyXG4gIG1lc3NhZ2VDb25maWdzOiBJbW11dGFibGVPYmplY3Q8TWVzc2FnZXNKc29uPixcclxuICBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsXHJcbiAgYWN0aW9uTmFtZXM6IHN0cmluZ1tdXHJcbik6IGJvb2xlYW4ge1xyXG4gIGlmIChtZXNzYWdlQ29uZmlncykge1xyXG4gICAgY29uc3QgbWVzc2FnZUpzb25BcnJheSA9IE9iamVjdC52YWx1ZXMobWVzc2FnZUNvbmZpZ3MpXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlSnNvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2VKc29uID0gbWVzc2FnZUpzb25BcnJheVtpXVxyXG5cclxuICAgICAgaWYgKG1lc3NhZ2VKc29uLndpZGdldElkID09PSBzZW5kTWVzc2FnZVdpZGdldElkICYmIG1lc3NhZ2VKc29uLm1lc3NhZ2VUeXBlID09PSBtZXNzYWdlVHlwZSkge1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSBtZXNzYWdlSnNvbi5hY3Rpb25zXHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWN0aW9ucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgY29uc3QgYWN0aW9uID0gYWN0aW9uc1tqXVxyXG5cclxuICAgICAgICAgIGlmIChhY3Rpb24ud2lkZ2V0SWQgPT09IGFjdGlvbldpZGdldElkKSB7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb25OYW1lcy5pbmNsdWRlcyhhY3Rpb24uYWN0aW9uTmFtZSkpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZWxpa2VWaWV3cG9pbnRzICh2aWV3OiBNYXBiYXNlVmlldywgdnAxOiBfX2VzcmkuVmlld3BvaW50LCB2cDI6IF9fZXNyaS5WaWV3cG9pbnQpOiBib29sZWFuIHtcclxuICBpZiAoIXZwMSkge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICBpZiAoIXZwMikge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICAvLyBXZSBuZWVkIHRvIGNoZWNrIGJvdGggdGFyZ2V0R2VvbWV0cnkgYW5kIGNhbWVyYS5cclxuICBpZiAodnAxLnRhcmdldEdlb21ldHJ5ICYmIHZwMS50YXJnZXRHZW9tZXRyeS5kZWNsYXJlZENsYXNzID09PSAnZXNyaS5nZW9tZXRyeS5Qb2ludCcgJiYgdnAyLnRhcmdldEdlb21ldHJ5ICYmIHZwMi50YXJnZXRHZW9tZXRyeS5kZWNsYXJlZENsYXNzID09PSAnZXNyaS5nZW9tZXRyeS5Qb2ludCcpIHtcclxuICAgIGNvbnN0IHNjcmVlblBvaW50MSA9IHZpZXcudG9TY3JlZW4odnAxLnRhcmdldEdlb21ldHJ5IGFzIF9fZXNyaS5Qb2ludClcclxuICAgIGNvbnN0IHNjcmVlblBvaW50MiA9IHZpZXcudG9TY3JlZW4odnAyLnRhcmdldEdlb21ldHJ5IGFzIF9fZXNyaS5Qb2ludClcclxuICAgIGNvbnN0IGRlbHRhWCA9IHNjcmVlblBvaW50MS54IC0gc2NyZWVuUG9pbnQyLnhcclxuICAgIGNvbnN0IGRlbHRhWSA9IHNjcmVlblBvaW50MS55IC0gc2NyZWVuUG9pbnQyLnlcclxuICAgIGNvbnN0IGRpc3QgPSBNYXRoLnNxcnQoZGVsdGFYICogZGVsdGFYICsgZGVsdGFZICogZGVsdGFZKVxyXG5cclxuICAgIGlmIChkaXN0ID49IDUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjYW1lcmExID0gdnAxLmNhbWVyYVxyXG4gIGNvbnN0IGNhbWVyYTIgPSB2cDIuY2FtZXJhXHJcblxyXG4gIGlmIChjYW1lcmExICYmIGNhbWVyYTIpIHtcclxuICAgIC8vIGNvbXBhcmUgdmlld3BvaW50IGZvciBTY2VuZVZpZXdcclxuICAgIGNvbnN0IGhlYWRpbmcxID0gcGFyc2VGbG9hdChjYW1lcmExLmhlYWRpbmcudG9GaXhlZCgyKSlcclxuICAgIGNvbnN0IGhlYWRpbmcyID0gcGFyc2VGbG9hdChjYW1lcmEyLmhlYWRpbmcudG9GaXhlZCgyKSlcclxuXHJcbiAgICBpZiAoaGVhZGluZzEgIT09IGhlYWRpbmcyKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRpbHQxID0gcGFyc2VGbG9hdChjYW1lcmExLnRpbHQudG9GaXhlZCgyKSlcclxuICAgIGNvbnN0IHRpbHQyID0gcGFyc2VGbG9hdChjYW1lcmEyLnRpbHQudG9GaXhlZCgyKSlcclxuXHJcbiAgICBpZiAodGlsdDEgIT09IHRpbHQyKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBvc2l0aW9uRGlzdCA9IGNhbWVyYTEucG9zaXRpb24uZGlzdGFuY2UoY2FtZXJhMi5wb3NpdGlvbilcclxuXHJcbiAgICBpZiAocG9zaXRpb25EaXN0ID49IDEpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGNvbXBhcmUgdmlld3BvaW50IGZvciBNYXBWaWV3XHJcbiAgICBjb25zdCByb3RhdGlvbjEgPSBwYXJzZUZsb2F0KHZwMS5yb3RhdGlvbi50b0ZpeGVkKDIpKVxyXG4gICAgY29uc3Qgcm90YXRpb24yID0gcGFyc2VGbG9hdCh2cDIucm90YXRpb24udG9GaXhlZCgyKSlcclxuXHJcbiAgICBpZiAocm90YXRpb24xICE9PSByb3RhdGlvbjIpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsdGFTY2FsZSA9IHZwMS5zY2FsZSAtIHZwMi5zY2FsZVxyXG5cclxuICAgIGlmIChNYXRoLmFicyhkZWx0YVNjYWxlKSA+PSAxKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZpZXdwb2ludEluc3RhbmNlRnJvbUhpc3RvcnkgKHZpZXc6IE1hcGJhc2VWaWV3LCB2aWV3cG9pbnRJbmRleDogbnVtYmVyKTogX19lc3JpLlZpZXdwb2ludCB7XHJcbiAgaWYgKHZpZXcudmlld3BvaW50SGlzdG9yeS5sZW5ndGggPiAwKSB7XHJcbiAgICBjb25zdCBsYXN0SW5kZXggPSB2aWV3LnZpZXdwb2ludEhpc3RvcnkubGVuZ3RoIC0gMVxyXG5cclxuICAgIGlmICh2aWV3cG9pbnRJbmRleCA+PSAwICYmIHZpZXdwb2ludEluZGV4IDw9IGxhc3RJbmRleCkge1xyXG4gICAgICBjb25zdCB2aWV3cG9pbnQgPSB2aWV3LnZpZXdwb2ludEhpc3Rvcnlbdmlld3BvaW50SW5kZXhdXHJcbiAgICAgIHJldHVybiB2aWV3cG9pbnQuY2xvbmUoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bGxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYXBVcmxIYXNoUGFyYW1zIHtcclxuICBhY3RpdmVfZGF0YXNvdXJjZV9pZD86IHN0cmluZ1xyXG4gIHZpZXdwb2ludD86IHN0cmluZ1xyXG4gIGNlbnRlcj86IHN0cmluZyAvLyB4LHksd2tpZFxyXG4gIHNjYWxlPzogc3RyaW5nXHJcbiAgcm90YXRpb24/OiBzdHJpbmdcclxuICBsYXllcl92aXNpYmlsaXR5Pzogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVVcmxIYXNoUGFyYW1zRm9yQWN0aXZlSmltdU1hcFZpZXcgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldykge1xyXG4gIGlmIChqaW11TWFwVmlldyAmJiBqaW11TWFwVmlldy5pc0FjdGl2ZSAmJiBqaW11TWFwVmlldy52aWV3ICYmICFqaW11TWFwVmlldy52aWV3LmRlc3Ryb3llZCkge1xyXG4gICAgY29uc3QgdmlldyA9IGppbXVNYXBWaWV3LnZpZXcgYXMgTWFwYmFzZVZpZXdcclxuICAgIGNvbnN0IHVybE1hbmFnZXIgPSBVcmxNYW5hZ2VyLmdldEluc3RhbmNlKClcclxuICAgIGNvbnN0IHZpZXdwb2ludEpzb24gPSB2aWV3LnZpZXdwb2ludCA/IHZpZXcudmlld3BvaW50LnRvSlNPTigpIDogbnVsbFxyXG5cclxuICAgIGxldCB2aWV3cG9pbnRTdHI6IHN0cmluZyA9IG51bGxcclxuICAgIGxldCBjZW50ZXJTdHI6IHN0cmluZyA9IG51bGxcclxuICAgIGxldCBzY2FsZVN0cjogc3RyaW5nID0gbnVsbFxyXG4gICAgbGV0IHJvdGF0aW9uU3RyOiBzdHJpbmcgPSBudWxsXHJcblxyXG4gICAgaWYgKHZpZXdwb2ludEpzb24pIHtcclxuICAgICAgdmlld3BvaW50U3RyID0gSlNPTi5zdHJpbmdpZnkodmlld3BvaW50SnNvbilcclxuICAgIH1cclxuXHJcbiAgICAvLyBXZSBvbmx5IHN1cHBvcnQgY2VudGVyLCBzY2FsZSBhbmQgcm90YWlvbiBmb3IgTWFwVmlldy5cclxuICAgIGlmICh2aWV3LnR5cGUgPT09ICcyZCcpIHtcclxuICAgICAgY29uc3Qgd2tpZCA9IHZpZXcuc3BhdGlhbFJlZmVyZW5jZT8ud2tpZFxyXG5cclxuICAgICAgaWYgKHdraWQpIHtcclxuICAgICAgICBjb25zdCB2aWV3Q2VudGVyID0gdmlldy5jZW50ZXJcclxuICAgICAgICBjZW50ZXJTdHIgPSBgJHt2aWV3Q2VudGVyLnh9LCR7dmlld0NlbnRlci55fSwke3draWR9YFxyXG4gICAgICB9XHJcblxyXG4gICAgICBzY2FsZVN0ciA9IFN0cmluZyh2aWV3LnNjYWxlKVxyXG4gICAgICByb3RhdGlvblN0ciA9IFN0cmluZyh2aWV3LnJvdGF0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIHZpZXcubGFzdFZpZXdwb2ludFRvVXBkYXRlVXJsUGFyYW1zID0gdmlldy52aWV3cG9pbnQgPyB2aWV3LnZpZXdwb2ludC5jbG9uZSgpIDogbnVsbFxyXG4gICAgdmlldy5sYXN0Vmlld3BvaW50VXJsUGFyYW1VcGRhdGVUaW1lc3RhbXAgPSBEYXRlLm5vdygpXHJcblxyXG4gICAgY29uc3QgYWN0aXZlRGF0YXNvdXJjZUlkID0gamltdU1hcFZpZXcuZGF0YVNvdXJjZUlkIHx8IG51bGxcclxuXHJcbiAgICBjb25zdCBtYXBVcmxIYXNoUGFyYW1zOiBNYXBVcmxIYXNoUGFyYW1zID0ge1xyXG4gICAgICBhY3RpdmVfZGF0YXNvdXJjZV9pZDogYWN0aXZlRGF0YXNvdXJjZUlkLFxyXG4gICAgICBjZW50ZXI6IGNlbnRlclN0cixcclxuICAgICAgc2NhbGU6IHNjYWxlU3RyLFxyXG4gICAgICByb3RhdGlvbjogcm90YXRpb25TdHIsXHJcbiAgICAgIC8vIGlmIHZpZXdwb2ludFN0ciBpcyBudWxsLCBVcmxNYW5hZ2VyIHdpbGwgcmVtb3ZlIGl0IGZyb20gdXJsXHJcbiAgICAgIHZpZXdwb2ludDogdmlld3BvaW50U3RyXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coJ3NldFdpZGdldFVybFBhcmFtcycsIERhdGUubm93KCkpXHJcbiAgICB1cmxNYW5hZ2VyLnNldFdpZGdldFVybFBhcmFtcyhqaW11TWFwVmlldy5tYXBXaWRnZXRJZCwgbWFwVXJsSGFzaFBhcmFtcylcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXJsUGFyYW1zTWFwT3B0aW9ucyB7XHJcbiAgdmlld3BvaW50PzogX19lc3JpLlZpZXdwb2ludFxyXG4gIGNlbnRlcj86IF9fZXNyaS5Qb2ludFxyXG4gIHNjYWxlPzogbnVtYmVyXHJcbiAgcm90YXRpb24/OiBudW1iZXJcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBjaGFuZ2VkIHZpZXdwb2ludCBieSB2aWV3IGFuZCB1cmwgaGFzaCBwYXJhbXMuXHJcbiAqIFJldHVybiBudWxsIGlmIHZpZXdwb2ludCBub3QgY2hhbmdlZC5cclxuICogQHBhcmFtIHZpZXdcclxuICogQHBhcmFtIHJ1bnRpbWVVcmxIYXNoUGFyYW1zXHJcbiAqIEBwYXJhbSBwYXJzZVZpZXdwb2ludFxyXG4gKiBAcGFyYW0gcGFyc2VDZW50ZXJcclxuICogQHBhcmFtIHBhcnNlU2NhbGVcclxuICogQHBhcmFtIHBhcnNlUm90YXRpb25cclxuICogQHBhcmFtIFZpZXdwb2ludFxyXG4gKiBAcGFyYW0gUG9pbnRcclxuICogQHBhcmFtIFNwYXRpYWxSZWZlcmVuY2VcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGFuZ2VkVmlld3BvaW50QnlWaWV3QW5kVXJsSGFzaFBhcmFtcyAoXHJcbiAgdmlldzogTWFwYmFzZVZpZXcsXHJcbiAgcnVudGltZVVybEhhc2hQYXJhbXM6IE1hcFVybEhhc2hQYXJhbXMsXHJcbiAgcGFyc2VWaWV3cG9pbnQ6IGJvb2xlYW4sXHJcbiAgcGFyc2VDZW50ZXI6IGJvb2xlYW4sXHJcbiAgcGFyc2VTY2FsZTogYm9vbGVhbixcclxuICBwYXJzZVJvdGF0aW9uOiBib29sZWFuLFxyXG4gIFZpZXdwb2ludDogdHlwZW9mIF9fZXNyaS5WaWV3cG9pbnQsXHJcbiAgUG9pbnQ6IHR5cGVvZiBfX2VzcmkuUG9pbnQsXHJcbiAgU3BhdGlhbFJlZmVyZW5jZTogdHlwZW9mIF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlXHJcbik6IF9fZXNyaS5WaWV3cG9pbnQge1xyXG4gIGxldCByZXN1bHQ6IF9fZXNyaS5WaWV3cG9pbnQgPSBudWxsXHJcbiAgY29uc3QgY3VyclZpZXdwb2ludCA9IHZpZXcudmlld3BvaW50Py5jbG9uZSgpXHJcbiAgY29uc3QgaXMyRCA9IHZpZXcudHlwZSA9PT0gJzJkJ1xyXG5cclxuICBpZiAoIWlzMkQpIHtcclxuICAgIHBhcnNlQ2VudGVyID0gZmFsc2VcclxuICAgIHBhcnNlU2NhbGUgPSBmYWxzZVxyXG4gICAgcGFyc2VSb3RhdGlvbiA9IGZhbHNlXHJcbiAgfVxyXG5cclxuICBjb25zdCB1cmxQYXJhbXNNYXBPcHRpb25zID0gZ2V0TWFwT3B0aW9uc0J5VXJsSGFzaFBhcmFtcyhydW50aW1lVXJsSGFzaFBhcmFtcywgaXMyRCwgVmlld3BvaW50LCBQb2ludCwgU3BhdGlhbFJlZmVyZW5jZSlcclxuXHJcbiAgaWYgKHVybFBhcmFtc01hcE9wdGlvbnMpIHtcclxuICAgIGlmICghcGFyc2VWaWV3cG9pbnQpIHtcclxuICAgICAgZGVsZXRlIHVybFBhcmFtc01hcE9wdGlvbnMudmlld3BvaW50XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFwYXJzZUNlbnRlcikge1xyXG4gICAgICBkZWxldGUgdXJsUGFyYW1zTWFwT3B0aW9ucy5jZW50ZXJcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXBhcnNlU2NhbGUpIHtcclxuICAgICAgZGVsZXRlIHVybFBhcmFtc01hcE9wdGlvbnMuc2NhbGVcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXBhcnNlUm90YXRpb24pIHtcclxuICAgICAgZGVsZXRlIHVybFBhcmFtc01hcE9wdGlvbnMucm90YXRpb25cclxuICAgIH1cclxuXHJcbiAgICBpZiAoT2JqZWN0LmtleXModXJsUGFyYW1zTWFwT3B0aW9ucykubGVuZ3RoID4gMCkge1xyXG4gICAgICBpZiAoaXMyRCkge1xyXG4gICAgICAgIHJlc3VsdCA9IHVybFBhcmFtc01hcE9wdGlvbnMudmlld3BvaW50IHx8IGN1cnJWaWV3cG9pbnRcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgaWYgKHVybFBhcmFtc01hcE9wdGlvbnMuY2VudGVyKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC50YXJnZXRHZW9tZXRyeSA9IHVybFBhcmFtc01hcE9wdGlvbnMuY2VudGVyXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKCdzY2FsZScgaW4gdXJsUGFyYW1zTWFwT3B0aW9ucykge1xyXG4gICAgICAgICAgICByZXN1bHQuc2NhbGUgPSB1cmxQYXJhbXNNYXBPcHRpb25zLnNjYWxlXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKCdyb3RhdGlvbicgaW4gdXJsUGFyYW1zTWFwT3B0aW9ucykge1xyXG4gICAgICAgICAgICByZXN1bHQucm90YXRpb24gPSB1cmxQYXJhbXNNYXBPcHRpb25zLnJvdGF0aW9uXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCA9IHVybFBhcmFtc01hcE9wdGlvbnMudmlld3BvaW50XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1hcE9wdGlvbnNCeVVybEhhc2hQYXJhbXMgKFxyXG4gIHJ1bnRpbWVVcmxIYXNoUGFyYW1zOiBNYXBVcmxIYXNoUGFyYW1zLFxyXG4gIGlzMkQ6IGJvb2xlYW4sXHJcbiAgVmlld3BvaW50OiB0eXBlb2YgX19lc3JpLlZpZXdwb2ludCxcclxuICBQb2ludDogdHlwZW9mIF9fZXNyaS5Qb2ludCxcclxuICBTcGF0aWFsUmVmZXJlbmNlOiB0eXBlb2YgX19lc3JpLlNwYXRpYWxSZWZlcmVuY2VcclxuKTogVXJsUGFyYW1zTWFwT3B0aW9ucyB7XHJcbiAgbGV0IHJlc3VsdDogVXJsUGFyYW1zTWFwT3B0aW9ucyA9IHt9XHJcbiAgbGV0IHZpZXdwb2ludDogX19lc3JpLlZpZXdwb2ludCA9IG51bGxcclxuICBsZXQgY2VudGVyOiBfX2VzcmkuUG9pbnQgPSBudWxsXHJcbiAgbGV0IHNjYWxlOiBudW1iZXIgPSBudWxsXHJcbiAgbGV0IHJvdGF0aW9uOiBudW1iZXIgPSBudWxsXHJcblxyXG4gIGlmIChydW50aW1lVXJsSGFzaFBhcmFtcykge1xyXG4gICAgLy8gcGFyc2Ugdmlld3BvaW50XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAocnVudGltZVVybEhhc2hQYXJhbXMudmlld3BvaW50KSB7XHJcbiAgICAgICAgY29uc3Qgdmlld3BvaW50SnNvbiA9IEpTT04ucGFyc2UocnVudGltZVVybEhhc2hQYXJhbXMudmlld3BvaW50KVxyXG5cclxuICAgICAgICBpZiAodmlld3BvaW50SnNvbikge1xyXG4gICAgICAgICAgdmlld3BvaW50ID0gVmlld3BvaW50LmZyb21KU09OKHZpZXdwb2ludEpzb24pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3BhcnNlIHZpZXdwb2ludCBmcm9tIHVybCBoYXNoIHBhcmFtcyBlcnJvcicsIGUpXHJcbiAgICAgIHZpZXdwb2ludCA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICAvLyBvbmx5IHN1cHBvcnQgY2VudGVyLCBzY2FsZSBhbmQgcm90YXRpb24gZm9yIE1hcFZpZXdcclxuICAgIGlmIChpczJEKSB7XHJcbiAgICAgIC8vIHBhcnNlIGNlbnRlclxyXG4gICAgICAvLyBjZW50ZXIgZm9ybWF0OiB4LHksd2tpZFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmIChydW50aW1lVXJsSGFzaFBhcmFtcy5jZW50ZXIpIHtcclxuICAgICAgICAgIGNvbnN0IHNwbGl0cyA9IHJ1bnRpbWVVcmxIYXNoUGFyYW1zLmNlbnRlci5zcGxpdCgnLCcpXHJcblxyXG4gICAgICAgICAgaWYgKHNwbGl0cy5sZW5ndGggPj0gMykge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gcGFyc2VGbG9hdChzcGxpdHNbMF0pXHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBwYXJzZUZsb2F0KHNwbGl0c1sxXSlcclxuICAgICAgICAgICAgY29uc3Qgd2tpZCA9IHBhcnNlRmxvYXQoc3BsaXRzWzJdKVxyXG5cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWROdW0oeCkgJiYgaXNWYWxpZE51bSh5KSAmJiBpc1ZhbGlkTnVtKHdraWQpKSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc3BhdGlhbFJlZmVyZW5jZSA9IG5ldyBTcGF0aWFsUmVmZXJlbmNlKHtcclxuICAgICAgICAgICAgICAgIHdraWRcclxuICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICBjZW50ZXIgPSBuZXcgUG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgeCxcclxuICAgICAgICAgICAgICAgIHksXHJcbiAgICAgICAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3BhcnNlIGNlbnRlciBmcm9tIHVybCBoYXNoIHBhcmFtcyBlcnJvcicsIGUpXHJcbiAgICAgICAgY2VudGVyID0gbnVsbFxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBwYXJzZSBzY2FsZVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmICgnc2NhbGUnIGluIHJ1bnRpbWVVcmxIYXNoUGFyYW1zKSB7XHJcbiAgICAgICAgICBjb25zdCBzY2FsZU51bSA9IHBhcnNlRmxvYXQocnVudGltZVVybEhhc2hQYXJhbXMuc2NhbGUpXHJcblxyXG4gICAgICAgICAgaWYgKGlzVmFsaWROdW0oc2NhbGVOdW0pICYmIHNjYWxlTnVtID49IDApIHtcclxuICAgICAgICAgICAgc2NhbGUgPSBzY2FsZU51bVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHNjYWxlID0gbnVsbFxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3BhcnNlIHNjYWxlIGZyb20gdXJsIGhhc2ggcGFyYW1zIGVycm9yJywgZSlcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gcGFyc2Ugcm90YXRpb25cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAoJ3JvdGF0aW9uJyBpbiBydW50aW1lVXJsSGFzaFBhcmFtcykge1xyXG4gICAgICAgICAgY29uc3Qgcm90YXRpb25OdW0gPSBwYXJzZUZsb2F0KHJ1bnRpbWVVcmxIYXNoUGFyYW1zLnJvdGF0aW9uKVxyXG5cclxuICAgICAgICAgIGlmIChpc1ZhbGlkTnVtKHJvdGF0aW9uTnVtKSAmJiByb3RhdGlvbk51bSA+PSAwICYmIHJvdGF0aW9uTnVtIDw9IDM2MCkge1xyXG4gICAgICAgICAgICByb3RhdGlvbiA9IHJvdGF0aW9uTnVtXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcm90YXRpb24gPSBudWxsXHJcbiAgICAgICAgY29uc29sZS5lcnJvcigncGFyc2Ugcm90YXRpb24gZnJvbSB1cmwgaGFzaCBwYXJhbXMgZXJyb3InLCBlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAodmlld3BvaW50KSB7XHJcbiAgICByZXN1bHQudmlld3BvaW50ID0gdmlld3BvaW50XHJcbiAgfVxyXG5cclxuICAvLyBvbmx5IHN1cHBvcnQgY2VudGVyLCBzY2FsZSBhbmQgcm90YXRpb24gZm9yIE1hcFZpZXdcclxuICBpZiAoaXMyRCkge1xyXG4gICAgaWYgKGNlbnRlcikge1xyXG4gICAgICByZXN1bHQuY2VudGVyID0gY2VudGVyXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzVmFsaWROdW0oc2NhbGUpKSB7XHJcbiAgICAgIHJlc3VsdC5zY2FsZSA9IHNjYWxlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzVmFsaWROdW0ocm90YXRpb24pKSB7XHJcbiAgICAgIHJlc3VsdC5yb3RhdGlvbiA9IHJvdGF0aW9uXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoT2JqZWN0LmtleXMocmVzdWx0KS5sZW5ndGggPT09IDApIHtcclxuICAgIHJlc3VsdCA9IG51bGxcclxuICB9XHJcblxyXG4gIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuZnVuY3Rpb24gaXNWYWxpZE51bSAodmFsdWU6IG51bWJlcikge1xyXG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmICFpc05hTih2YWx1ZSlcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xyXG4gIHR5cGUgRGF0YVJlY29yZFNldCxcclxuICB0eXBlIEZlYXR1cmVEYXRhUmVjb3JkLFxyXG4gIHR5cGUgSlNBUElMYXllck1peGluLFxyXG4gIHR5cGUgRGF0YVNvdXJjZSxcclxuICB0eXBlIERhdGFSZWNvcmQsXHJcbiAgQWJzdHJhY3REYXRhQWN0aW9uLFxyXG4gIERhdGFTb3VyY2VTdGF0dXMsXHJcbiAgTXV0YWJsZVN0b3JlTWFuYWdlcixcclxuICBEYXRhTGV2ZWxcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHsgY2xvbmVGZWF0dXJlIH0gZnJvbSAnLi4vcnVudGltZS91dGlscydcclxuaW1wb3J0IHsgdHlwZSBQYW5Ub0dlb21ldHJpZXNJbnRlcm5hbFZhbHVlLCB0eXBlIFBhblRvTGF5ZXJJbnRlcm5hbFZhbHVlIH0gZnJvbSAnLi4vbWVzc2FnZS1hY3Rpb25zL3Bhbi10by1hY3Rpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5UbyBleHRlbmRzIEFic3RyYWN0RGF0YUFjdGlvbiB7XHJcbiAgLyoqXHJcbiAgICogUGFuVG8gZGF0YSBhY3Rpb24gc3VwcG9ydHMgYm90aCBEYXRhU291cmNlIGRhdGEgbGV2ZWwgYW5kIFJlY29yZHMgZGF0YSBsZXZlbC5cclxuICAgKiBzdXBwb3J0ZWQgY2FzZXM6XHJcbiAgICogY2FzZTE6IGRhdGFTZXRzLmxlbmd0aCA9PT0gMSBhbmQgZGF0YUxldmVsIGlzIERBVEFfU09VUkNFXHJcbiAgICogY2FzZTI6IGRhdGFTZXRzLmxlbmd0aCA9PT0gMSBhbmQgZGF0YUxldmVsIGlzIFJFQ09SRFNcclxuICAgKiBjYXNlMzogZGF0YVNldHMubGVuZ3RoID49IDIgYW5kIGRhdGFMZXZlbCBpcyBSRUNPUkRTXHJcbiAgICovXHJcbiAgYXN5bmMgaXNTdXBwb3J0ZWQgKGRhdGFTZXRzOiBEYXRhUmVjb3JkU2V0W10sIGRhdGFMZXZlbDogRGF0YUxldmVsKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBjb25zdCBzdXBwb3J0ZWREYXRhU2V0cyA9IHRoaXMuZ2V0U3VwcG9ydGVkRGF0YVNldHMoZGF0YVNldHMsIGRhdGFMZXZlbClcclxuXHJcbiAgICBpZiAoc3VwcG9ydGVkRGF0YVNldHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIC8vIGNhc2UxLCBjYXNlMlxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSBlbHNlIGlmIChzdXBwb3J0ZWREYXRhU2V0cy5sZW5ndGggPj0gMikge1xyXG4gICAgICAvLyBjYXNlM1xyXG4gICAgICByZXR1cm4gZGF0YUxldmVsID09PSBEYXRhTGV2ZWwuUmVjb3Jkc1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRTdXBwb3J0ZWREYXRhU2V0cyAoZGF0YVNldHM6IERhdGFSZWNvcmRTZXRbXSwgZGF0YUxldmVsOiBEYXRhTGV2ZWwpOiBEYXRhUmVjb3JkU2V0W10ge1xyXG4gICAgY29uc3Qgc3VwcG9ydGVkRGF0YVNldHMgPSBkYXRhU2V0cy5maWx0ZXIoZGF0YVNldCA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBkYXRhU2V0LmRhdGFTb3VyY2UgYXMgRGF0YVNvdXJjZSAmIEpTQVBJTGF5ZXJNaXhpblxyXG5cclxuICAgICAgaWYgKCFkYXRhU291cmNlIHx8IGRhdGFTb3VyY2UuZ2V0U3RhdHVzKCkgPT09IERhdGFTb3VyY2VTdGF0dXMuTm90UmVhZHkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gcmVjb3JkcyBtYXliZSBjb21lIGZyb20gYSB0YWJsZSwgc28gd2UgbmVlZCB0byBjaGVjayBpZiB0aGUgZGF0YVNvdXJjZSBoYXMgZ2VvbWV0cnkgb3Igbm90XHJcbiAgICAgIGNvbnN0IHN1cHBvcnRTcGF0aWFsSW5mbyA9IGRhdGFTb3VyY2U/LnN1cHBvcnRTcGF0aWFsSW5mbyAmJiBkYXRhU291cmNlPy5zdXBwb3J0U3BhdGlhbEluZm8oKVxyXG5cclxuICAgICAgaWYgKCFzdXBwb3J0U3BhdGlhbEluZm8pIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGRhdGFMZXZlbCA9PT0gRGF0YUxldmVsLlJlY29yZHMpIHtcclxuICAgICAgICAvLyBwYW4gdG8gZ3JhcGhpY3NcclxuICAgICAgICBjb25zdCByZWNvcmRzID0gdGhpcy5nZXRSZWNvcmRzKGRhdGFTZXQsIGRhdGFMZXZlbClcclxuICAgICAgICByZXR1cm4gcmVjb3Jkcy5sZW5ndGggPiAwXHJcbiAgICAgIH0gZWxzZSBpZiAoZGF0YUxldmVsID09PSBEYXRhTGV2ZWwuRGF0YVNvdXJjZSkge1xyXG4gICAgICAgIC8vIHBhbiB0byBsYXllclxyXG4gICAgICAgIHJldHVybiAhIWRhdGFTb3VyY2U/LmNyZWF0ZUpTQVBJTGF5ZXJCeURhdGFTb3VyY2VcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBzdXBwb3J0ZWREYXRhU2V0c1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRSZWNvcmRzIChkYXRhU2V0OiBEYXRhUmVjb3JkU2V0LCBkYXRhTGV2ZWw6IERhdGFMZXZlbCk6IERhdGFSZWNvcmRbXSB7XHJcbiAgICBsZXQgcmVzdWx0OiBEYXRhUmVjb3JkW10gPSBbXVxyXG5cclxuICAgIGlmIChkYXRhTGV2ZWwgPT09IERhdGFMZXZlbC5EYXRhU291cmNlKSB7XHJcbiAgICAgIHJlc3VsdCA9IFtdXHJcbiAgICB9IGVsc2UgaWYgKGRhdGFMZXZlbCA9PT0gRGF0YUxldmVsLlJlY29yZHMgJiYgZGF0YVNldC5yZWNvcmRzPy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJlc3VsdCA9IGRhdGFTZXQucmVjb3Jkcy5maWx0ZXIoKHJlY29yZDogRmVhdHVyZURhdGFSZWNvcmQpID0+ICEhcmVjb3JkLmZlYXR1cmU/Lmdlb21ldHJ5KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q2xvbmVkR2VvbWV0cmllcyAoZGF0YVNldDogRGF0YVJlY29yZFNldCwgZGF0YUxldmVsOiBEYXRhTGV2ZWwsIEdyYXBoaWM6IHR5cGVvZiBfX2VzcmkuR3JhcGhpYyk6IF9fZXNyaS5HZW9tZXRyeVtdIHtcclxuICAgIGNvbnN0IGNsb25lZEdlb21ldHJpZXM6IF9fZXNyaS5HZW9tZXRyeVtdID0gW11cclxuICAgIGNvbnN0IHJlY29yZHMgPSB0aGlzLmdldFJlY29yZHMoZGF0YVNldCwgZGF0YUxldmVsKVxyXG5cclxuICAgIHJlY29yZHMuZm9yRWFjaChyZWNvcmQgPT4ge1xyXG4gICAgICBjb25zdCBmZWF0dXJlID0gY2xvbmVGZWF0dXJlKChyZWNvcmQgYXMgRmVhdHVyZURhdGFSZWNvcmQpLmZlYXR1cmUsIEdyYXBoaWMpXHJcblxyXG4gICAgICBpZiAoZmVhdHVyZSAmJiBmZWF0dXJlLmdlb21ldHJ5KSB7XHJcbiAgICAgICAgY2xvbmVkR2VvbWV0cmllcy5wdXNoKGZlYXR1cmUuZ2VvbWV0cnkpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGNsb25lZEdlb21ldHJpZXNcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uRXhlY3V0ZSAoZGF0YVNldHM6IERhdGFSZWNvcmRTZXRbXSwgZGF0YUxldmVsOiBEYXRhTGV2ZWwpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IG1vZHVsZXMgPSBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFsnZXNyaS9HcmFwaGljJ10pXHJcbiAgICBjb25zdCBbR3JhcGhpY10gPSBtb2R1bGVzIGFzIFt0eXBlb2YgX19lc3JpLkdyYXBoaWNdXHJcbiAgICBjb25zdCBzdXBwb3J0ZWREYXRhU2V0cyA9IHRoaXMuZ2V0U3VwcG9ydGVkRGF0YVNldHMoZGF0YVNldHMsIGRhdGFMZXZlbClcclxuXHJcbiAgICBpZiAoc3VwcG9ydGVkRGF0YVNldHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIC8vIGNhc2UxLCBjYXNlMlxyXG4gICAgICBjb25zdCBkYXRhU2V0ID0gZGF0YVNldHNbMF1cclxuICAgICAgbGV0IHBhblRvQWN0aW9uVmFsdWU6IFBhblRvR2VvbWV0cmllc0ludGVybmFsVmFsdWUgfCBQYW5Ub0xheWVySW50ZXJuYWxWYWx1ZSA9IG51bGxcclxuICAgICAgY29uc3QgZ2VvbWV0cmllcyA9IHRoaXMuZ2V0Q2xvbmVkR2VvbWV0cmllcyhkYXRhU2V0LCBkYXRhTGV2ZWwsIEdyYXBoaWMpXHJcblxyXG4gICAgICBpZiAoZ2VvbWV0cmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gY2FzZTJcclxuICAgICAgICBwYW5Ub0FjdGlvblZhbHVlID0ge1xyXG4gICAgICAgICAgdHlwZTogJ3Bhbi10by1nZW9tZXRyaWVzJyxcclxuICAgICAgICAgIGdlb21ldHJpZXNcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gY2FzZTFcclxuICAgICAgICBwYW5Ub0FjdGlvblZhbHVlID0ge1xyXG4gICAgICAgICAgdHlwZTogJ3Bhbi10by1sYXllcicsXHJcbiAgICAgICAgICBkYXRhU291cmNlSWQ6IGRhdGFTZXQuZGF0YVNvdXJjZT8uaWQgfHwgbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgJ3BhblRvQWN0aW9uVmFsdWUudmFsdWUnLCBwYW5Ub0FjdGlvblZhbHVlKVxyXG4gICAgfSBlbHNlIGlmIChzdXBwb3J0ZWREYXRhU2V0cy5sZW5ndGggPj0gMikge1xyXG4gICAgICAvLyBjYXNlM1xyXG4gICAgICBjb25zdCBhbGxHZW9tZXRyaWVzOiBfX2VzcmkuR2VvbWV0cnlbXSA9IFtdXHJcblxyXG4gICAgICBzdXBwb3J0ZWREYXRhU2V0cy5mb3JFYWNoKGRhdGFTZXQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdlb21ldHJpZXMgPSB0aGlzLmdldENsb25lZEdlb21ldHJpZXMoZGF0YVNldCwgZGF0YUxldmVsLCBHcmFwaGljKVxyXG4gICAgICAgIGFsbEdlb21ldHJpZXMucHVzaCguLi5nZW9tZXRyaWVzKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKGFsbEdlb21ldHJpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IHBhblRvQWN0aW9uVmFsdWU6IFBhblRvR2VvbWV0cmllc0ludGVybmFsVmFsdWUgPSB7XHJcbiAgICAgICAgICB0eXBlOiAncGFuLXRvLWdlb21ldHJpZXMnLFxyXG4gICAgICAgICAgZ2VvbWV0cmllczogYWxsR2VvbWV0cmllc1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgJ3BhblRvQWN0aW9uVmFsdWUudmFsdWUnLCBwYW5Ub0FjdGlvblZhbHVlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9