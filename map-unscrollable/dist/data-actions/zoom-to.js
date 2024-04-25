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
/*!******************************************************************************!*\
  !*** ./your-extensions/widgets/map-unscrollable/src/data-actions/zoom-to.ts ***!
  \******************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZoomTo)
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



class ZoomTo extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractDataAction {
    /**
     * ZoomTo data action supports both DataSource data level and Records data level.
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
                // zoom to graphics
                const records = this.getRecords(dataSet, dataLevel);
                return records.length > 0;
            }
            else if (dataLevel === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataLevel.DataSource) {
                // zoom to layer
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
            result = dataSet.records;
        }
        return result;
    }
    getClonedFeatures(dataSet, dataLevel, Graphic) {
        const records = this.getRecords(dataSet, dataLevel);
        const clonedFeatures = records.map(record => (0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.cloneFeature)(record.feature, Graphic));
        return clonedFeatures;
    }
    onExecute(dataSets, dataLevel) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const modules = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)(['esri/Graphic']);
            const [Graphic] = modules;
            const supportedDataSets = this.getSupportedDataSets(dataSets, dataLevel);
            const zoomToOption = {
                padding: {
                    left: 50,
                    right: 50,
                    top: 50,
                    bottom: 50
                }
            };
            if (supportedDataSets.length === 1) {
                // case1, case2
                const dataSet = supportedDataSets[0];
                const clonedFeatures = this.getClonedFeatures(dataSet, dataLevel, Graphic);
                const featureActionValue = {
                    type: 'zoom-to-graphics',
                    features: clonedFeatures,
                    dataSourceId: ((_a = dataSet.dataSource) === null || _a === void 0 ? void 0 : _a.id) || null,
                    zoomToOption
                };
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue.value', featureActionValue);
            }
            else if (supportedDataSets.length >= 2) {
                // case3
                const arrayFeatures = [];
                supportedDataSets.forEach(dataSet => {
                    const clonedFeatures = this.getClonedFeatures(dataSet, dataLevel, Graphic);
                    arrayFeatures.push(clonedFeatures);
                });
                const featureActionValue = {
                    type: 'zoom-to-array-graphics',
                    arrayFeatures,
                    zoomToOption
                };
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue.value', featureActionValue);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXAtdW5zY3JvbGxhYmxlL2Rpc3QvZGF0YS1hY3Rpb25zL3pvb20tdG8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUFpQztBQUlmO0FBSXdJO0FBRW5KLFNBQWUscUJBQXFCLENBQUUsV0FBOEMsRUFBRSxrQkFBNkQ7O1FBQ3hKLE1BQU0sZ0JBQWdCLEdBQUcsRUFBRTtRQUMzQixrQkFBa0IsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3RFLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFDO1lBQ3hFLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQztnQkFDcEQsT0FBTTtZQUNSLENBQUM7WUFDRCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlGLENBQUMsQ0FBQztRQUVGLElBQUksZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ2xDLE9BQU8sSUFBSTtRQUNiLENBQUM7YUFBTSxDQUFDO1lBQ04sT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDO1FBQ3RDLENBQUM7SUFDSCxDQUFDO0NBQUE7QUFFTSxTQUFlLGtCQUFrQixDQUFFLFdBQThDLEVBQUUsc0JBQWlFOztRQUN6SixNQUFNLGNBQWMsR0FBRyxFQUFFO1FBQ3pCLHNCQUFzQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDOUUsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUM7WUFDeEUsSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFDVixXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQzdCLGNBQWMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2hHLENBQUM7UUFDSCxDQUFDLENBQUM7UUFFRixJQUFJLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDaEMsT0FBTyxJQUFJO1FBQ2IsQ0FBQzthQUFNLENBQUM7WUFDTixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDO0NBQUE7QUFFRCxTQUFlLGtCQUFrQixDQUFFLFdBQThDLEVBQUUsVUFBNkIsRUFBRSxPQUFlOztRQUMvSCxPQUFPLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDM0MsT0FBTyxtRUFBc0IsQ0FBQztnQkFDNUIsMEJBQTBCO2FBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7b0JBQ25DLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ2YsQ0FBQztxQkFBTSxDQUFDO29CQUNOLDZDQUE2QztvQkFDN0MsSUFBSSxZQUF3QyxDQUFDO29CQUM3QywyQkFBMkI7b0JBQzNCLENBQUMsWUFBWSxDQUFDLEdBQUcsT0FBTyxDQUFDO29CQUV6QixNQUFNLG1CQUFtQixHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBWTtvQkFDL0QsTUFBTSxvQkFBb0IsR0FBRyxFQUFFO29CQUMvQixNQUFNLFFBQVEsR0FBRyxFQUFFO29CQUVuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUMzRCxNQUFNLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BFLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUk7d0JBQzlELG9CQUFvQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ3ZDLENBQUM7b0JBRUQsTUFBTSxxQkFBcUIsR0FBRyxFQUFFO29CQUNoQyxLQUFLLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBQ3BELElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7NEJBQ2xCLE1BQU0sVUFBVSxHQUFHO2dDQUNqQixTQUFTLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQztnQ0FDeEIsS0FBSyxFQUFFLEdBQUc7NkJBQ1g7NEJBQ0QscUJBQXFCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzt3QkFDeEMsQ0FBQztvQkFDSCxDQUFDO29CQUVELE1BQU0sY0FBYyxHQUFHLEVBQUU7b0JBQ3pCLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFO3dCQUM3QyxNQUFNLFdBQVcsR0FBRyxPQUFPO3dCQUMzQixJQUFJLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQzs0QkFDM0IsS0FBSyxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7Z0NBQ3pDLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7NEJBQ3JFLENBQUM7NEJBRUQsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSzt3QkFDdkMsQ0FBQzs2QkFBTSxDQUFDOzRCQUNOLFdBQVcsQ0FBQyxVQUFVLEdBQUc7Z0NBQ3ZCLE1BQU0sRUFBRSxLQUFLOzZCQUNkO3dCQUNILENBQUM7d0JBQ0QsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQ2xDLENBQUMsQ0FBQztvQkFFRixNQUFNLEtBQUssR0FBRyxJQUFJLFlBQVksQ0FBQzt3QkFDN0IsRUFBRSxFQUFFLE9BQU87d0JBQ1gsS0FBSyxFQUFFLG1CQUFtQixDQUFDLEtBQUs7d0JBQ2hDLE1BQU0sRUFBRSxjQUFjO3dCQUN0QixNQUFNLEVBQUUsb0JBQW9CO3dCQUM1QixTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUM7d0JBQ2hCLGFBQWEsRUFBRSxRQUFRO3dCQUN2QixRQUFRLEVBQUUsbUJBQW1CLENBQUMsUUFBUTt3QkFDdEMsWUFBWSxFQUFFLElBQUk7d0JBQ2xCLGFBQWEsRUFBRTs0QkFDYixLQUFLLEVBQUUsYUFBYTs0QkFDcEIsT0FBTyxFQUFFLENBQUM7b0NBQ1IsSUFBSSxFQUFFLFFBQVE7b0NBQ2QsVUFBVSxFQUFFLHFCQUFxQjtpQ0FDbEMsQ0FBQzt5QkFDSDtxQkFDRixDQUFDO29CQUVGLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztvQkFFMUIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsRUFBRTt3QkFDbkMsT0FBTyxDQUFDLElBQUksQ0FBQztvQkFDZixDQUFDLENBQUM7Z0JBQ0osQ0FBQztZQUNILENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FBQTtBQUVELFNBQVMsa0JBQWtCLENBQUUsS0FBbUI7SUFDOUMsd0RBQXdEO0lBQ3hELE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJO0lBQzVCLE9BQU87UUFDTCxJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztRQUMzRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7UUFDbEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO0tBQ1Y7QUFDVixDQUFDO0FBRU0sU0FBUyxhQUFhLENBQUUsV0FBOEMsRUFBRSxNQUFpRSxFQUFFLE9BQWdCO0lBQ2hLLHFFQUFxRTtJQUNyRSxJQUFJLGNBQWMsR0FBRyxPQUFPO0lBQzVCLElBQUksZ0JBQWdCLEdBQUcsSUFBSTtJQUMzQixJQUFJLFdBQVcsR0FBRyxJQUFJO0lBRXRCLHNEQUFzRDtJQUN0RCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDcEIsSUFBSSxNQUFNLFlBQVksS0FBSyxFQUFFLENBQUM7WUFDNUIsV0FBVyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQW1CO1FBQzNDLENBQUM7YUFBTSxDQUFDO1lBQ04sV0FBVyxHQUFHLE1BQXdCO1FBQ3hDLENBQUM7UUFFRCxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQ2hCLGNBQWMsR0FBRyxXQUFXLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUM1RCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUksY0FBYyxFQUFFLENBQUM7UUFDbkIsTUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLGFBQWE7UUFDNUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMzQyxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxjQUFjLEVBQUUsQ0FBQztnQkFDeEQsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJLGdCQUFnQixFQUFFLENBQUM7WUFDckIsT0FBTztnQkFDTCxPQUFPLEVBQUUsY0FBYztnQkFDdkIsTUFBTSxFQUFFLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7YUFDM0M7UUFDSCxDQUFDO2FBQU0sQ0FBQztZQUNOLE9BQU8sSUFBSTtRQUNiLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVNLFNBQWUscUJBQXFCLENBQUUsSUFBdUMsRUFBRSxPQUF3Qjs7UUFDNUcsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQjtRQUNwQyxNQUFNLFVBQVUsR0FBRyxNQUFNLGlCQUFpQixDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxDQUFDO1FBRTdELElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDeEMsTUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUN2QyxDQUFDO0lBQ0gsQ0FBQztDQUFBO0FBRU0sU0FBZSx3QkFBd0IsQ0FBRSxJQUF1QyxFQUFFLFVBQTRCOztRQUNuSCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCO1FBQ3BDLE1BQU0sU0FBUyxHQUFHLE1BQU0sZ0JBQWdCLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQztRQUM1RCwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTO0lBQzVCLENBQUM7Q0FBQTtBQUVNLFNBQVMsc0JBQXNCLENBQUUsU0FBMkIsRUFBRSxNQUErQjs7SUFDbEcsTUFBTSxHQUFHLEdBQUcsZUFBUyxDQUFDLGNBQWMsMENBQUUsZ0JBQWdCO0lBRXRELElBQUksR0FBRyxJQUFJLDZCQUE2QixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3RELE9BQU8sSUFBSTtJQUNiLENBQUM7SUFFRCxNQUFNLEdBQUcsR0FBRyxxQkFBUyxDQUFDLE1BQU0sMENBQUUsUUFBUSwwQ0FBRSxnQkFBZ0I7SUFFeEQsSUFBSSxHQUFHLElBQUksNkJBQTZCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDdEQsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUVELE9BQU8sS0FBSztBQUNkLENBQUM7QUFFTSxTQUFTLDZCQUE2QixDQUFFLEdBQTRCLEVBQUUsR0FBNEI7SUFDdkcsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ3ZELGtGQUFrRjtJQUNsRixNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ3ZGLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNO0FBQzNCLENBQUM7QUFFTSxTQUFlLGdCQUFnQixDQUFFLFVBQTRCLEVBQUUsTUFBK0I7OztRQUNuRyxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFO1FBQ3BDLE1BQU0sY0FBYyxHQUFHLFNBQVMsQ0FBQyxjQUFjO1FBQy9DLE1BQU0sYUFBYSxHQUFHLGVBQVMsQ0FBQyxNQUFNLDBDQUFFLFFBQVE7UUFFaEQsTUFBTSxtQkFBbUIsR0FBc0IsRUFBRTtRQUNqRCxJQUFJLHVCQUF1QixHQUFZLEtBQUs7UUFDNUMsSUFBSSx1QkFBdUIsR0FBWSxLQUFLO1FBRTVDLElBQUksY0FBYyxJQUFJLDZCQUE2QixDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQzdGLHVCQUF1QixHQUFHLElBQUk7WUFDOUIsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMxQyxDQUFDO1FBRUQsSUFBSSxhQUFhLElBQUksNkJBQTZCLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDM0YsdUJBQXVCLEdBQUcsSUFBSTtZQUM5QixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3pDLENBQUM7UUFFRCxJQUFJLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNuQyxNQUFNLG1CQUFtQixHQUFHLE1BQU0saUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFDO1lBRWhGLElBQUksdUJBQXVCLEVBQUUsQ0FBQztnQkFDNUIsU0FBUyxDQUFDLGNBQWMsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7WUFDbkQsQ0FBQztZQUVELElBQUksdUJBQXVCLEVBQUUsQ0FBQztnQkFDNUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBaUI7WUFDakcsQ0FBQztRQUNILENBQUM7UUFFRCxPQUFPLFNBQVM7O0NBQ2pCO0FBRU0sU0FBZSxRQUFRLENBQUUsV0FBOEMsRUFBRSxNQUMvQjs7UUFDL0MsTUFBTSxXQUFXLEdBQUcsTUFBYTtRQUNqQyxNQUFNLGVBQWUsR0FBRyxXQUFrQjtRQUMxQyxJQUFJLFdBQVcsWUFBWSxLQUFLLEVBQUUsQ0FBQztZQUNqQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQUMsT0FBTTtZQUFDLENBQUM7WUFFakUsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzVCLE1BQU0sV0FBVyxHQUFzQixFQUFFO2dCQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUM1QyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7Z0JBQzNDLENBQUM7Z0JBRUQsTUFBTSxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtvQkFDckQsT0FBTyxJQUFJLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQzdDLENBQUMsQ0FBQztZQUNKLENBQUM7aUJBQU0sQ0FBQztnQkFDTixPQUFPLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO29CQUN0RCxPQUFPLElBQUksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDN0MsQ0FBQyxDQUFDO1lBQ0osQ0FBQztRQUNILENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3pCLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxRQUEyQjtnQkFDeEQsT0FBTyxJQUFJLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4RCxDQUFDO2lCQUFNLENBQUM7Z0JBQ04sT0FBTyxJQUFJLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMzRCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7Q0FBQTtBQUVELFNBQWUsSUFBSSxDQUFFLElBQXVDLEVBQUUsTUFBVzs7UUFDdkUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQywyRUFBMkU7WUFDM0UsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxtR0FBbUc7Z0JBQ25HLDhHQUE4RztnQkFDOUcsc0JBQXNCO2dCQUN0QixxREFBcUQ7Z0JBQ3JELG1CQUFtQjtnQkFDbkIscUVBQXFFO2dCQUNyRSx3QkFBd0I7Z0JBQ3hCLE9BQU87Z0JBQ1AsTUFBTTtnQkFDTixVQUFVO2dCQUNWLGlFQUFpRTtnQkFDakUsR0FBRztnQkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxPQUFPLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1lBQ3ZFLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDVCxDQUFDLENBQUM7SUFDSixDQUFDO0NBQUE7QUFFRCxTQUFlLG1CQUFtQixDQUFFLFVBQTZCOztRQUMvRCxPQUFPLE1BQU0sbUVBQXNCLENBQUM7WUFDbEMsc0JBQXNCO1NBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBTSxPQUFPLEVBQUMsRUFBRTtZQUN0QiwyQkFBMkI7WUFDM0IsSUFBSSxNQUE0QixDQUFDO1lBQ2pDLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTztZQUVsQixJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN0QyxPQUFPLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDcEMsQ0FBQztZQUVELElBQUksVUFBVSxHQUFrQixJQUFJO1lBQ3BDLElBQUksS0FBSztZQUNULE1BQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxNQUFNO1lBRXZDLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsYUFBYSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7Z0JBQy9DLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDZCxTQUFRO2dCQUNWLENBQUM7Z0JBRUQsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU07Z0JBRTVCLElBQUksQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUUsQ0FBQztvQkFDekMsTUFBTSxhQUFhLEdBQUcsUUFBZTtvQkFFckMsSUFBSSxhQUFhLENBQUMsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDdkMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDOzRCQUNsQixJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7NEJBQ3JCLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQzs0QkFDckIsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDOzRCQUNyQixJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7NEJBQ3JCLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQzs0QkFDckIsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDOzRCQUNyQixnQkFBZ0IsRUFBRSxhQUFhLENBQUMsZ0JBQWdCO3lCQUNqRCxDQUFDO29CQUNKLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ1osU0FBUTtnQkFDVixDQUFDO2dCQUVELElBQUksVUFBVSxFQUFFLENBQUM7b0JBQ2YsVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUN2QyxDQUFDO3FCQUFNLENBQUM7b0JBQ04sVUFBVSxHQUFHLE1BQU07Z0JBQ3JCLENBQUM7WUFDSCxDQUFDO1lBRUQsSUFBSSxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNsRCxPQUFPLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDcEMsQ0FBQztZQUVELE9BQU8sTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUMxQyxDQUFDLEVBQUM7SUFDSixDQUFDO0NBQUE7QUFFTSxTQUFlLHFCQUFxQixDQUFFLFdBQXdCLEVBQUUsdUJBQStCLEVBQUUsUUFBZ0I7O1FBQ3RILElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1lBQzdCLE9BQU07UUFDUixDQUFDO1FBRUQsTUFBTSxVQUFVLEdBQUcsd0RBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDO1FBRXpGLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNoQixPQUFNO1FBQ1IsQ0FBQztRQUVELElBQUksYUFBYSxHQUFrQixJQUFJO1FBRXZDLElBQUksQ0FBQztZQUNILGFBQWEsR0FBRyxNQUFNLFdBQVcsQ0FBQyxtQ0FBbUMsQ0FBQyxVQUFVLENBQUM7UUFDbkYsQ0FBQztRQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDYixhQUFhLEdBQUcsSUFBSTtZQUNwQixPQUFPLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxFQUFFLFVBQVUsRUFBRSxHQUFHLENBQUM7UUFDMUUsQ0FBQztRQUVELElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLG1EQUFVLENBQUMsWUFBWSxJQUFJLGFBQWEsQ0FBQyxJQUFJLEtBQUssbURBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1lBQzVJLGFBQTJELENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDO1FBQ2hHLENBQUM7SUFDSCxDQUFDO0NBQUE7QUFFRCxTQUFTLGFBQWEsQ0FBRSxXQUFXLEVBQUUsUUFBZ0IsRUFBRSxTQUFtQjtJQUN4RSxPQUFPLG1FQUFzQixDQUFDO1FBQzVCLHlCQUF5QjtLQUMxQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ2hCLElBQUksS0FBMEIsQ0FBQztRQUMvQixDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU87UUFDakIsTUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUU7UUFDekIsS0FBSyxDQUFDLEtBQUssR0FBRyxRQUFRO1FBQ3RCLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxJQUFJLEVBQUU7UUFDakMsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJO1FBQzNCLE9BQU8sV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDeEQsT0FBTyxVQUFVO1FBQ25CLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLG1CQUFtQixDQUFFLFdBQXdCLEVBQUUsUUFBZ0IsRUFBRSxpQkFBdUM7SUFDL0csSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsSUFBSSxnQkFBZ0IsR0FBNEIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUk7UUFDeEUsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3JCLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDcEUsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLFFBQVEsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztvQkFDeEUsTUFBTSxNQUFNLEdBQUcsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7b0JBQ2xFLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO2dCQUMzRCxDQUFDO1lBQ0gsQ0FBQyxDQUFDO1FBQ0osQ0FBQzthQUFNLENBQUM7WUFDTixPQUFPLElBQUk7UUFDYixDQUFDO0lBQ0gsQ0FBQztTQUFNLENBQUM7UUFDTixtRUFBc0IsQ0FBQztZQUNyQiwwQkFBMEI7U0FDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNoQixJQUFJLFlBQXdDLENBQUM7WUFDN0MsQ0FBQyxZQUFZLENBQUMsR0FBRyxPQUFPO1lBRXhCLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxZQUFZLENBQUM7Z0JBQ3RDLEdBQUcsRUFBRSxzREFBZSxDQUFDLGFBQWEsQ0FBRSxpQkFBK0QsQ0FBQyxLQUFLLENBQUM7YUFDM0csQ0FBQztZQUNGLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2hDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUM5RCxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsUUFBUSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO3dCQUN4RSxNQUFNLE1BQU0sR0FBRyxjQUFjLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO3dCQUNuRSxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztvQkFDM0QsQ0FBQztnQkFDSCxDQUFDLENBQUM7WUFDSixDQUFDLENBQUM7UUFDSixDQUFDLENBQUM7SUFDSixDQUFDO0FBQ0gsQ0FBQztBQUVELElBQUkscUJBQXFCLEdBQUcsSUFBSTtBQUNoQyxTQUFTLGlCQUFpQixDQUFFLFdBQXdCLEVBQUUsUUFBZ0IsRUFBRSxpQkFBcUM7O0lBQzNHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLElBQUksY0FBYyxHQUEwQixDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSTtRQUNwRSxtQkFBbUI7UUFDbkIsYUFBYSxDQUFDLG9CQUFjLGFBQWQsY0FBYyx1QkFBZCxjQUFjLENBQUUsS0FBSywwQ0FBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNwRixJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsUUFBUSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUN4RSxNQUFNLGFBQWEsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLGFBQWE7Z0JBQ3hELE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFFdkYsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDVCxNQUFNLGFBQWEsR0FBRyxDQUFDO2dCQUN2QixJQUFJLGNBQWMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztnQkFDdkMsTUFBTSx3QkFBd0IsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQjtnQkFFbEUsTUFBTSxLQUFLLEdBQUc7b0JBQ1osSUFBSSxDQUFDLEdBQUcsYUFBYSxFQUFFLENBQUM7d0JBQ3RCLENBQUMsRUFBRTt3QkFDSCxJQUFJLGNBQWMsRUFBRSxDQUFDOzRCQUNuQixjQUFjLEdBQUcsSUFBSTs0QkFDckIsbUJBQW1COzRCQUNuQixXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7NEJBQzNELHFCQUFxQixJQUFJLHFCQUFxQixDQUFDLE1BQU0sRUFBRTs0QkFDdkQscUJBQXFCLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7d0JBQzdELENBQUM7NkJBQU0sQ0FBQzs0QkFDTixjQUFjLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7NEJBQ25DLG1CQUFtQjs0QkFDbkIsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUU7NEJBQzdELHFCQUFxQixJQUFJLHFCQUFxQixDQUFDLE1BQU0sRUFBRTs0QkFDdkQscUJBQXFCLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7d0JBQzdELENBQUM7d0JBQ0QsVUFBVSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7b0JBQ3hCLENBQUM7eUJBQU0sQ0FBQzt3QkFDTixXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLHdCQUF3Qjt3QkFDNUQscUJBQXFCLElBQUkscUJBQXFCLENBQUMsTUFBTSxFQUFFO29CQUN6RCxDQUFDO2dCQUNILENBQUM7Z0JBQ0QsVUFBVSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7WUFDeEIsQ0FBQztRQUNILENBQUMsQ0FBQztJQUNKLENBQUM7QUFDSCxDQUFDO0FBRU0sU0FBZSxvQkFBb0IsQ0FBRSxXQUF3QixFQUFFLGlCQUF5QixFQUFFLFFBQWdCOztRQUMvRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN2QixPQUFNO1FBQ1IsQ0FBQztRQUVELE1BQU0sVUFBVSxHQUFHLHdEQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztRQUVuRixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDaEIsT0FBTTtRQUNSLENBQUM7UUFFRCxJQUFJLGFBQWEsR0FBa0IsSUFBSTtRQUV2QyxJQUFJLENBQUM7WUFDSCxhQUFhLEdBQUcsTUFBTSxXQUFXLENBQUMsbUNBQW1DLENBQUMsVUFBVSxDQUFDO1FBQ25GLENBQUM7UUFBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2IsYUFBYSxHQUFHLElBQUk7WUFDcEIsT0FBTyxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDO1FBQzFFLENBQUM7UUFFRCxJQUFJLGFBQWEsSUFBSSxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDekMsSUFBSSxhQUFhLENBQUMsSUFBSSxLQUFLLG1EQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ25ELG1CQUFtQixDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsYUFBcUMsQ0FBQztZQUNuRixDQUFDO2lCQUFNLElBQUksYUFBYSxDQUFDLElBQUksS0FBSyxtREFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUN4RCxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLGFBQW1DLENBQUM7WUFDL0UsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0NBQUE7QUFFRCxTQUFTLFVBQVUsQ0FBRSxXQUE4QyxFQUFFLFFBQTBCLEVBQUUsTUFBTTtJQUNyRyxtRUFBc0IsQ0FBQztRQUNyQixjQUFjO0tBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNoQiwyQkFBMkI7UUFDM0IsSUFBSSxPQUE4QixDQUFDO1FBQ25DLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTztRQUVuQixNQUFNLGFBQWEsR0FBRyxVQUFVLFFBQTBCLEVBQUUsYUFBcUI7WUFDL0UsTUFBTSxRQUFRLEdBQUcsRUFBRTtZQUNuQixJQUFJLFVBQVUsR0FBRyxDQUFDO1lBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3pDLE1BQU0sV0FBVyxHQUFHLElBQUksT0FBTyxDQUFDO29CQUM5QixRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7b0JBQzlCLE1BQU0sRUFBRSxNQUFNO29CQUNkLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtpQkFDbkMsQ0FBQztnQkFDRixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUM1QixDQUFDO1lBRUQsTUFBTSxXQUFXLEdBQUc7Z0JBQ2xCLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQkFDdEMsVUFBVSxDQUFDLEdBQUcsRUFBRTtvQkFDZCxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7b0JBQ3pDLFVBQVUsR0FBRyxVQUFVLEdBQUcsQ0FBQztvQkFDM0IsSUFBSSxVQUFVLEdBQUcsYUFBYSxFQUFFLENBQUM7d0JBQy9CLFVBQVUsQ0FBQyxHQUFHLEVBQUU7NEJBQ2QsV0FBVyxFQUFFO3dCQUNmLENBQUMsRUFBRSxHQUFHLENBQUM7b0JBQ1QsQ0FBQztnQkFDSCxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ1QsQ0FBQztZQUVELFdBQVcsRUFBRTtRQUNmLENBQUM7UUFFRCxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUUsWUFBb0I7SUFDM0MsSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztRQUNuRCxPQUFPO1lBQ0wsSUFBSSxFQUFFLGVBQWU7WUFDckIsS0FBSyxFQUFFLFFBQVE7WUFDZixLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDekIsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixLQUFLLEVBQUUsQ0FBQzthQUNUO1NBQ0Y7SUFDSCxDQUFDO1NBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO1FBQy9DLE9BQU87WUFDTCxJQUFJLEVBQUUsYUFBYTtZQUNuQixLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDekIsS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUUsT0FBTztTQUNmO0lBQ0gsQ0FBQztTQUFNLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7UUFDeEQsT0FBTztZQUNMLElBQUksRUFBRSxhQUFhLEVBQUUsc0NBQXNDO1lBQzNELEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUN6QixLQUFLLEVBQUUsT0FBTztZQUNkLE9BQU8sRUFBRTtnQkFDUCxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7Z0JBQ3pCLEtBQUssRUFBRSxDQUFDO2FBQ1Q7U0FDRjtJQUNILENBQUM7U0FBTSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7UUFDM0MsT0FBTztZQUNMLElBQUksRUFBRSxTQUFTLEVBQUUsa0NBQWtDO1lBQ25ELFlBQVksRUFBRSxDQUFDO29CQUNiLElBQUksRUFBRSxNQUFNLEVBQUUsdUNBQXVDO29CQUNyRCxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRTtpQkFDeEMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztTQUFNLENBQUM7UUFDTixPQUFPLElBQUk7SUFDYixDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFFLFFBQXlCO0lBQ2hELDBEQUEwRDtJQUMxRCxRQUFRLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixLQUFLLE9BQU87WUFDVixPQUFPLFFBQXdCO1FBQ2pDLEtBQUssUUFBUTtZQUNYLE9BQVEsUUFBMEIsQ0FBQyxNQUFNO1FBQzNDLEtBQUssU0FBUztZQUNaLE9BQVEsUUFBMkIsQ0FBQyxRQUFRO1FBQzlDLEtBQUssVUFBVTtZQUNiLE9BQVEsUUFBNEIsQ0FBQyxNQUFNLENBQUMsTUFBTTtRQUNwRDtZQUNFLE9BQU8sUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBQ3pFLE9BQU87SUFDVCxDQUFDO0FBQ0gsQ0FBQztBQUVNLFNBQVMsWUFBWSxDQUFFLE9BQWtDLEVBQUUsT0FBOEI7SUFDOUYsSUFBSSxXQUFXLEdBQUcsSUFBSTtJQUN0QixJQUFLLE9BQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQixXQUFXLEdBQUksT0FBZSxDQUFDLEtBQUssRUFBRTtJQUN4QyxDQUFDO1NBQU0sQ0FBQztRQUNOLFdBQVcsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFELFdBQVcsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUNoRSxDQUFDO0lBQ0QsT0FBTyxXQUFXO0FBQ3BCLENBQUM7QUFFTSxTQUFlLGlCQUFpQixDQUFFLFVBQTZCLEVBQUUsZ0JBQXlDOztRQUMvRyxJQUFJLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUMxRCxnQkFBZ0IsQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDN0gsT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQzFDLENBQUM7YUFBTSxJQUFJLGdCQUFnQixDQUFDLGFBQWEsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEYsaUZBQWlGO1lBQ2pGLE9BQU8sTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUMxQyxDQUFDO2FBQU0sSUFBSSxnQkFBZ0IsQ0FBQyxPQUFPLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3BGLGlGQUFpRjtZQUNqRixPQUFPLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDMUMsQ0FBQzthQUFNLENBQUM7WUFDTixPQUFPLE1BQU0sb0RBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUM7UUFDcEYsQ0FBQztJQUNILENBQUM7Q0FBQTtBQUVNLFNBQWUscUJBQXFCLENBQUUsV0FBOEMsRUFBRSxLQUFVLEVBQUUsUUFBMEI7O1FBQ2pJLElBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsYUFBYSxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBQ3pGLE9BQU8sTUFBTSxtRUFBc0IsQ0FBQztnQkFDbEMseUJBQXlCO2FBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDbEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU87Z0JBQ3ZCLE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFO2dCQUN6QixLQUFLLENBQUMsY0FBYyxHQUFHLElBQUk7Z0JBQzNCLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0JBQ3ZCLEtBQUssQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNsRixPQUFPLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQU8sTUFBTSxFQUFFLEVBQUU7b0JBQ3RELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUM1RSxPQUFPLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO29CQUMvQyxDQUFDO3lCQUFNLENBQUM7d0JBQ04sT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO29CQUN4QyxDQUFDO2dCQUNILENBQUMsR0FBRSxHQUFTLEVBQUU7b0JBQ1osT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLEVBQUM7WUFDSixDQUFDLENBQUM7UUFDSixDQUFDO2FBQU0sQ0FBQztZQUNOLE9BQU8sTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUN4QyxDQUFDO0lBQ0gsQ0FBQztDQUFBO0FBRU0sU0FBUyxXQUFXLENBQUUsT0FBZ0I7SUFDM0MsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLElBQUksT0FBTyxLQUFLLDhDQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDL0IsT0FBTyxLQUFLO1FBQ2QsQ0FBQzthQUFNLENBQUM7WUFDTixPQUFPLElBQUk7UUFDYixDQUFDO0lBQ0gsQ0FBQztTQUFNLENBQUM7UUFDTixPQUFPLElBQUk7SUFDYixDQUFDO0FBQ0gsQ0FBQztBQUVNLFNBQVMsMEJBQTBCLENBQUUsYUFBdUI7SUFDakUsTUFBTSxhQUFhLEdBQUcsRUFBRTtJQUN4QixhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFO1FBQ25DLE1BQU0sVUFBVSxHQUFHLHdEQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQStCO1FBQzVHLElBQUksWUFBWTtRQUNoQixJQUFJLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxLQUFLLEVBQUUsQ0FBQztZQUN0QixZQUFZLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ2xELENBQUM7YUFBTSxJQUFJLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSw0QkFBNEIsRUFBRSxDQUFDO1lBQ3BELFlBQVksR0FBRyxVQUFVLENBQUMsNEJBQTRCLEVBQUU7UUFDMUQsQ0FBQzthQUFNLENBQUM7WUFDTixZQUFZLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDdEMsQ0FBQztRQUNELGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ2xDLENBQUMsQ0FBQztJQUNGLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7QUFDbkMsQ0FBQztBQUVNLFNBQVMsZ0JBQWdCLENBQUUsUUFBZ0IsRUFBRSxZQUFvQjtJQUN0RSxrRUFBa0U7SUFDbEUsTUFBTSxJQUFJLEdBQUcsWUFBWSxJQUFJLEVBQUU7SUFDL0IsT0FBTyxHQUFHLFFBQVEsSUFBSSxJQUFJLEVBQUU7QUFDOUIsQ0FBQztBQUVNLFNBQVMscUJBQXFCLENBQUUsV0FBb0I7SUFDekQsTUFBTSxFQUNKLFlBQVksRUFDWixLQUFLLEVBQ0wsUUFBUSxFQUNSLHFCQUFxQixFQUNyQixTQUFTLEVBQ1QsT0FBTyxFQUNQLE9BQU8sRUFDUCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUNMLGdCQUFnQixFQUNoQixLQUFLLEVBQ0wsc0JBQXNCLEVBQ3RCLGVBQWUsRUFDZixJQUFJLEVBQ0osb0JBQW9CLEVBQ3BCLEtBQUssRUFDTCxTQUFTLEVBQ1QscUJBQXFCLEVBQ3RCLEdBQUcsV0FBVztJQUVmLE9BQU87UUFDTCxZQUFZO1FBQ1osS0FBSztRQUVMLFFBQVE7UUFDUixxQkFBcUI7UUFDckIsU0FBUztRQUNULE9BQU87UUFDUCxPQUFPO1FBQ1AsU0FBUztRQUNULE1BQU07UUFDTixTQUFTO1FBQ1QsVUFBVTtRQUNWLE1BQU07UUFDTixNQUFNO1FBQ04sUUFBUTtRQUNSLEtBQUs7UUFDTCxnQkFBZ0I7UUFDaEIsS0FBSztRQUVMLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsSUFBSTtRQUNKLG9CQUFvQjtRQUNwQixLQUFLO1FBRUwsU0FBUztRQUNULHFCQUFxQjtLQUN0QjtBQUNILENBQUM7QUFFTSxTQUFTLGNBQWMsQ0FBRSxXQUFvQixFQUFFLFdBQStCO0lBQ25GLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBRXJDLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdkIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUM7SUFDckMsQ0FBQztBQUNILENBQUM7QUFFTSxTQUFTLGdDQUFnQyxDQUFFLFNBQWlCLEVBQUUsU0FBaUI7SUFDcEYsSUFBSSxTQUFTLElBQUksU0FBUyxFQUFFLENBQUM7UUFDM0IsTUFBTSxjQUFjLEdBQUcsc0RBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjO1FBRXhFLElBQUksY0FBYyxFQUFFLENBQUM7WUFDbkIsTUFBTSxXQUFXLEdBQWEsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDO1lBQ3hELE1BQU0sV0FBVyxHQUFHLGtEQUFXLENBQUMsWUFBWTtZQUU1QyxJQUFJLDRCQUE0QixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUM7Z0JBQzdGLDRCQUE0QixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDO2dCQUNoRyxPQUFPLElBQUk7WUFDYixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPLEtBQUs7QUFDZCxDQUFDO0FBRU0sU0FBUyxpQ0FBaUMsQ0FBRSxtQkFBMkIsRUFBRSxjQUFzQixFQUFFLFdBQXdCO0lBQzlILElBQUksbUJBQW1CLElBQUksY0FBYyxFQUFFLENBQUM7UUFDMUMsTUFBTSxjQUFjLEdBQUcsc0RBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjO1FBRXhFLElBQUksY0FBYyxFQUFFLENBQUM7WUFDbkIsTUFBTSxXQUFXLEdBQWEsQ0FBQyxlQUFlLENBQUM7WUFFL0MsT0FBTyw0QkFBNEIsQ0FBQyxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUM7UUFDcEgsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPLEtBQUs7QUFDZCxDQUFDO0FBRUQsU0FBUyw0QkFBNEIsQ0FDbkMsbUJBQTJCLEVBQzNCLGNBQXNCLEVBQ3RCLGNBQTZDLEVBQzdDLFdBQXdCLEVBQ3hCLFdBQXFCO0lBRXJCLElBQUksY0FBYyxFQUFFLENBQUM7UUFDbkIsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUV0RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDakQsTUFBTSxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBRXZDLElBQUksV0FBVyxDQUFDLFFBQVEsS0FBSyxtQkFBbUIsSUFBSSxXQUFXLENBQUMsV0FBVyxLQUFLLFdBQVcsRUFBRSxDQUFDO2dCQUM1RixNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTztnQkFFbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDeEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFFekIsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLGNBQWMsRUFBRSxDQUFDO3dCQUN2QyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7NEJBQzVDLE9BQU8sSUFBSTt3QkFDYixDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU8sS0FBSztBQUNkLENBQUM7QUFFTSxTQUFTLG9CQUFvQixDQUFFLElBQWlCLEVBQUUsR0FBcUIsRUFBRSxHQUFxQjtJQUNuRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDVCxPQUFPLEtBQUs7SUFDZCxDQUFDO0lBRUQsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1QsT0FBTyxLQUFLO0lBQ2QsQ0FBQztJQUVELG1EQUFtRDtJQUNuRCxJQUFJLEdBQUcsQ0FBQyxjQUFjLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxhQUFhLEtBQUsscUJBQXFCLElBQUksR0FBRyxDQUFDLGNBQWMsSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLGFBQWEsS0FBSyxxQkFBcUIsRUFBRSxDQUFDO1FBQ3pLLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGNBQThCLENBQUM7UUFDdEUsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsY0FBOEIsQ0FBQztRQUN0RSxNQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDO1FBQzlDLE1BQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUM7UUFDOUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFekQsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDZCxPQUFPLEtBQUs7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxNQUFNO0lBQzFCLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxNQUFNO0lBRTFCLElBQUksT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3ZCLGtDQUFrQztRQUNsQyxNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXZELElBQUksUUFBUSxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQzFCLE9BQU8sS0FBSztRQUNkLENBQUM7UUFFRCxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWpELElBQUksS0FBSyxLQUFLLEtBQUssRUFBRSxDQUFDO1lBQ3BCLE9BQU8sS0FBSztRQUNkLENBQUM7UUFFRCxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBRWhFLElBQUksWUFBWSxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3RCLE9BQU8sS0FBSztRQUNkLENBQUM7SUFDSCxDQUFDO1NBQU0sQ0FBQztRQUNOLGdDQUFnQztRQUNoQyxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXJELElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzVCLE9BQU8sS0FBSztRQUNkLENBQUM7UUFFRCxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLO1FBRXhDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUM5QixPQUFPLEtBQUs7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU8sSUFBSTtBQUNiLENBQUM7QUFFTSxTQUFTLCtCQUErQixDQUFFLElBQWlCLEVBQUUsY0FBc0I7SUFDeEYsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ3JDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUVsRCxJQUFJLGNBQWMsSUFBSSxDQUFDLElBQUksY0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDO1lBQ3ZELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7WUFDdkQsT0FBTyxTQUFTLENBQUMsS0FBSyxFQUFFO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBTyxJQUFJO0FBQ2IsQ0FBQztBQVdNLFNBQVMsdUNBQXVDLENBQUUsV0FBd0I7O0lBQy9FLElBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxRQUFRLElBQUksV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDM0YsTUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLElBQW1CO1FBQzVDLE1BQU0sVUFBVSxHQUFHLGlEQUFVLENBQUMsV0FBVyxFQUFFO1FBQzNDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFFckUsSUFBSSxZQUFZLEdBQVcsSUFBSTtRQUMvQixJQUFJLFNBQVMsR0FBVyxJQUFJO1FBQzVCLElBQUksUUFBUSxHQUFXLElBQUk7UUFDM0IsSUFBSSxXQUFXLEdBQVcsSUFBSTtRQUU5QixJQUFJLGFBQWEsRUFBRSxDQUFDO1lBQ2xCLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUM5QyxDQUFDO1FBRUQseURBQXlEO1FBQ3pELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUN2QixNQUFNLElBQUksR0FBRyxVQUFJLENBQUMsZ0JBQWdCLDBDQUFFLElBQUk7WUFFeEMsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDVCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTTtnQkFDOUIsU0FBUyxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUN2RCxDQUFDO1lBRUQsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzdCLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNyQyxDQUFDO1FBRUQsSUFBSSxDQUFDLDhCQUE4QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDcEYsSUFBSSxDQUFDLG9DQUFvQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFFdEQsTUFBTSxrQkFBa0IsR0FBRyxXQUFXLENBQUMsWUFBWSxJQUFJLElBQUk7UUFFM0QsTUFBTSxnQkFBZ0IsR0FBcUI7WUFDekMsb0JBQW9CLEVBQUUsa0JBQWtCO1lBQ3hDLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLEtBQUssRUFBRSxRQUFRO1lBQ2YsUUFBUSxFQUFFLFdBQVc7WUFDckIsOERBQThEO1lBQzlELFNBQVMsRUFBRSxZQUFZO1NBQ3hCO1FBRUQsZ0RBQWdEO1FBQ2hELFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDO0lBQzFFLENBQUM7QUFDSCxDQUFDO0FBU0Q7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNJLFNBQVMseUNBQXlDLENBQ3ZELElBQWlCLEVBQ2pCLG9CQUFzQyxFQUN0QyxjQUF1QixFQUN2QixXQUFvQixFQUNwQixVQUFtQixFQUNuQixhQUFzQixFQUN0QixTQUFrQyxFQUNsQyxLQUEwQixFQUMxQixnQkFBZ0Q7O0lBRWhELElBQUksTUFBTSxHQUFxQixJQUFJO0lBQ25DLE1BQU0sYUFBYSxHQUFHLFVBQUksQ0FBQyxTQUFTLDBDQUFFLEtBQUssRUFBRTtJQUM3QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUk7SUFFL0IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1YsV0FBVyxHQUFHLEtBQUs7UUFDbkIsVUFBVSxHQUFHLEtBQUs7UUFDbEIsYUFBYSxHQUFHLEtBQUs7SUFDdkIsQ0FBQztJQUVELE1BQU0sbUJBQW1CLEdBQUcsNEJBQTRCLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLENBQUM7SUFFeEgsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNwQixPQUFPLG1CQUFtQixDQUFDLFNBQVM7UUFDdEMsQ0FBQztRQUVELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNqQixPQUFPLG1CQUFtQixDQUFDLE1BQU07UUFDbkMsQ0FBQztRQUVELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNoQixPQUFPLG1CQUFtQixDQUFDLEtBQUs7UUFDbEMsQ0FBQztRQUVELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNuQixPQUFPLG1CQUFtQixDQUFDLFFBQVE7UUFDckMsQ0FBQztRQUVELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNoRCxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUNULE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLElBQUksYUFBYTtnQkFFdkQsSUFBSSxNQUFNLEVBQUUsQ0FBQztvQkFDWCxJQUFJLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUMvQixNQUFNLENBQUMsY0FBYyxHQUFHLG1CQUFtQixDQUFDLE1BQU07b0JBQ3BELENBQUM7b0JBRUQsSUFBSSxPQUFPLElBQUksbUJBQW1CLEVBQUUsQ0FBQzt3QkFDbkMsTUFBTSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxLQUFLO29CQUMxQyxDQUFDO29CQUVELElBQUksVUFBVSxJQUFJLG1CQUFtQixFQUFFLENBQUM7d0JBQ3RDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUMsUUFBUTtvQkFDaEQsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxTQUFTO1lBQ3hDLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU8sTUFBTTtBQUNmLENBQUM7QUFFTSxTQUFTLDRCQUE0QixDQUMxQyxvQkFBc0MsRUFDdEMsSUFBYSxFQUNiLFNBQWtDLEVBQ2xDLEtBQTBCLEVBQzFCLGdCQUFnRDtJQUVoRCxJQUFJLE1BQU0sR0FBd0IsRUFBRTtJQUNwQyxJQUFJLFNBQVMsR0FBcUIsSUFBSTtJQUN0QyxJQUFJLE1BQU0sR0FBaUIsSUFBSTtJQUMvQixJQUFJLEtBQUssR0FBVyxJQUFJO0lBQ3hCLElBQUksUUFBUSxHQUFXLElBQUk7SUFFM0IsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO1FBQ3pCLGtCQUFrQjtRQUNsQixJQUFJLENBQUM7WUFDSCxJQUFJLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQztnQkFFaEUsSUFBSSxhQUFhLEVBQUUsQ0FBQztvQkFDbEIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO2dCQUMvQyxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsRUFBRSxDQUFDLENBQUM7WUFDOUQsU0FBUyxHQUFHLElBQUk7UUFDbEIsQ0FBQztRQUVELHNEQUFzRDtRQUN0RCxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ1QsZUFBZTtZQUNmLDBCQUEwQjtZQUMxQixJQUFJLENBQUM7Z0JBQ0gsSUFBSSxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDaEMsTUFBTSxNQUFNLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7b0JBRXJELElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQzt3QkFDdkIsTUFBTSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDL0IsTUFBTSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDL0IsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFFbEMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOzRCQUN2RCxNQUFNLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLENBQUM7Z0NBQzVDLElBQUk7NkJBQ0wsQ0FBQzs0QkFFRixNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUM7Z0NBQ2pCLENBQUM7Z0NBQ0QsQ0FBQztnQ0FDRCxnQkFBZ0I7NkJBQ2pCLENBQUM7d0JBQ0osQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDO1lBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxFQUFFLENBQUMsQ0FBQztnQkFDM0QsTUFBTSxHQUFHLElBQUk7WUFDZixDQUFDO1lBRUQsY0FBYztZQUNkLElBQUksQ0FBQztnQkFDSCxJQUFJLE9BQU8sSUFBSSxvQkFBb0IsRUFBRSxDQUFDO29CQUNwQyxNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDO29CQUV2RCxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFLENBQUM7d0JBQzFDLEtBQUssR0FBRyxRQUFRO29CQUNsQixDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDO1lBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDWCxLQUFLLEdBQUcsSUFBSTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxFQUFFLENBQUMsQ0FBQztZQUM1RCxDQUFDO1lBRUQsaUJBQWlCO1lBQ2pCLElBQUksQ0FBQztnQkFDSCxJQUFJLFVBQVUsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO29CQUN2QyxNQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDO29CQUU3RCxJQUFJLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxXQUFXLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxHQUFHLEVBQUUsQ0FBQzt3QkFDdEUsUUFBUSxHQUFHLFdBQVc7b0JBQ3hCLENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7WUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUNYLFFBQVEsR0FBRyxJQUFJO2dCQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkNBQTJDLEVBQUUsQ0FBQyxDQUFDO1lBQy9ELENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUksU0FBUyxFQUFFLENBQUM7UUFDZCxNQUFNLENBQUMsU0FBUyxHQUFHLFNBQVM7SUFDOUIsQ0FBQztJQUVELHNEQUFzRDtJQUN0RCxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ1QsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUNYLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTTtRQUN4QixDQUFDO1FBRUQsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUN0QixNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUs7UUFDdEIsQ0FBQztRQUVELElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDekIsTUFBTSxDQUFDLFFBQVEsR0FBRyxRQUFRO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUNyQyxNQUFNLEdBQUcsSUFBSTtJQUNmLENBQUM7SUFFRCxPQUFPLE1BQU07QUFDZixDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUUsS0FBYTtJQUNoQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7QUFDbkQsQ0FBQzs7Ozs7Ozs7Ozs7QUN2b0NEOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0lrQjtBQUNzRDtBQUN6QjtBQUdoQyxNQUFNLE1BQU8sU0FBUSx5REFBa0I7SUFDcEQ7Ozs7OztPQU1HO0lBQ0csV0FBVyxDQUFFLFFBQXlCLEVBQUUsU0FBb0I7O1lBQ2hFLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUM7WUFFeEUsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLGVBQWU7Z0JBQ2YsT0FBTyxJQUFJO1lBQ2IsQ0FBQztpQkFBTSxJQUFJLGlCQUFpQixDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDekMsUUFBUTtnQkFDUixPQUFPLFNBQVMsS0FBSyxnREFBUyxDQUFDLE9BQU87WUFDeEMsQ0FBQztZQUVELE9BQU8sS0FBSztRQUNkLENBQUM7S0FBQTtJQUVPLG9CQUFvQixDQUFFLFFBQXlCLEVBQUUsU0FBb0I7UUFDM0UsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2xELE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUEwQztZQUVyRSxJQUFJLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxTQUFTLEVBQUUsS0FBSyx1REFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDeEUsT0FBTyxLQUFLO1lBQ2QsQ0FBQztZQUVELDZGQUE2RjtZQUM3RixNQUFNLGtCQUFrQixHQUFHLFdBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxrQkFBa0IsTUFBSSxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsa0JBQWtCLEVBQUU7WUFFN0YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQ3hCLE9BQU8sS0FBSztZQUNkLENBQUM7WUFFRCxJQUFJLFNBQVMsS0FBSyxnREFBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNwQyxtQkFBbUI7Z0JBQ25CLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztnQkFDbkQsT0FBTyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDM0IsQ0FBQztpQkFBTSxJQUFJLFNBQVMsS0FBSyxnREFBUyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUM5QyxnQkFBZ0I7Z0JBQ2hCLE9BQU8sQ0FBQyxDQUFDLFdBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSw0QkFBNEI7WUFDbkQsQ0FBQztZQUVELE9BQU8sS0FBSztRQUNkLENBQUMsQ0FBQztRQUVGLE9BQU8saUJBQWlCO0lBQzFCLENBQUM7SUFFTyxVQUFVLENBQUUsT0FBc0IsRUFBRSxTQUFvQjs7UUFDOUQsSUFBSSxNQUFNLEdBQWlCLEVBQUU7UUFFN0IsSUFBSSxTQUFTLEtBQUssZ0RBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN2QyxNQUFNLEdBQUcsRUFBRTtRQUNiLENBQUM7YUFBTSxJQUFJLFNBQVMsS0FBSyxnREFBUyxDQUFDLE9BQU8sSUFBSSxjQUFPLENBQUMsT0FBTywwQ0FBRSxNQUFNLElBQUcsQ0FBQyxFQUFFLENBQUM7WUFDMUUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxPQUFPO1FBQzFCLENBQUM7UUFFRCxPQUFPLE1BQU07SUFDZixDQUFDO0lBRU8saUJBQWlCLENBQUUsT0FBc0IsRUFBRSxTQUFvQixFQUFFLE9BQThCO1FBQ3JHLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztRQUNuRCxNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsNERBQVksQ0FBRSxNQUE0QixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxRyxPQUFPLGNBQWM7SUFDdkIsQ0FBQztJQUVLLFNBQVMsQ0FBRSxRQUF5QixFQUFFLFNBQW9COzs7WUFDOUQsTUFBTSxPQUFPLEdBQUcsTUFBTSxtRUFBc0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzlELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFrQztZQUNwRCxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDO1lBQ3hFLE1BQU0sWUFBWSxHQUFrQjtnQkFDbEMsT0FBTyxFQUFFO29CQUNQLElBQUksRUFBRSxFQUFFO29CQUNSLEtBQUssRUFBRSxFQUFFO29CQUNULEdBQUcsRUFBRSxFQUFFO29CQUNQLE1BQU0sRUFBRSxFQUFFO2lCQUNYO2FBQ0Y7WUFFRCxJQUFJLGlCQUFpQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsZUFBZTtnQkFDZixNQUFNLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQztnQkFFMUUsTUFBTSxrQkFBa0IsR0FBZ0M7b0JBQ3RELElBQUksRUFBRSxrQkFBa0I7b0JBQ3hCLFFBQVEsRUFBRSxjQUFjO29CQUN4QixZQUFZLEVBQUUsY0FBTyxDQUFDLFVBQVUsMENBQUUsRUFBRSxLQUFJLElBQUk7b0JBQzVDLFlBQVk7aUJBQ2I7Z0JBRUQsMERBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxnQ0FBZ0MsRUFBRSxrQkFBa0IsQ0FBQztZQUN6SCxDQUFDO2lCQUFNLElBQUksaUJBQWlCLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUN6QyxRQUFRO2dCQUNSLE1BQU0sYUFBYSxHQUF1QixFQUFFO2dCQUU1QyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ2xDLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQztvQkFDMUUsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7Z0JBQ3BDLENBQUMsQ0FBQztnQkFFRixNQUFNLGtCQUFrQixHQUFxQztvQkFDM0QsSUFBSSxFQUFFLHdCQUF3QjtvQkFDOUIsYUFBYTtvQkFDYixZQUFZO2lCQUNiO2dCQUVELDBEQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsZ0NBQWdDLEVBQUUsa0JBQWtCLENBQUM7WUFDekgsQ0FBQztZQUVELE9BQU8sSUFBSTs7S0FDWjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hcC11bnNjcm9sbGFibGUvc3JjL3J1bnRpbWUvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXAtdW5zY3JvbGxhYmxlL3NyYy9kYXRhLWFjdGlvbnMvem9vbS10by50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItY29uc3QgKi9cclxuaW1wb3J0IHtcclxuICBBcHBNb2RlLCBkYXRhU291cmNlVXRpbHMsIERhdGFTb3VyY2VNYW5hZ2VyLCB0eXBlIEpTQVBJTGF5ZXJNaXhpbiwgZ2VvbWV0cnlVdGlscyxcclxuICBnZXRBcHBTdG9yZSwgdHlwZSBNZXNzYWdlc0pzb24sIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCBNZXNzYWdlVHlwZSwgVXJsTWFuYWdlclxyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBIaWdoTGlnaHRIYW5kbGUsIHR5cGUgTWFwYmFzZVJlc3RvcmVEYXRhLCB0eXBlIE1hcGJhc2VWaWV3IH0gZnJvbSAnLi9jb21wb25lbnRzL21hcGJhc2UnXHJcbmltcG9ydCB0eXBlIE1hcEJhc2UgZnJvbSAnLi9jb21wb25lbnRzL21hcGJhc2UnXHJcbmltcG9ydCB7IHR5cGUgSUZlYXR1cmUgfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC10eXBlcydcclxuaW1wb3J0IHsgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcywgdHlwZSBKaW11TWFwVmlldywgTGF5ZXJUeXBlcywgdHlwZSBKaW11RmVhdHVyZUxheWVyVmlldywgdHlwZSBKaW11U2NlbmVMYXllclZpZXcsIHR5cGUgSmltdUxheWVyVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU5ld0ZlYXR1cmVsYXllciAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgbmV3RmVhdHVyZVNldFZhbHVlPzogeyBbbGF5ZXJJRDogc3RyaW5nXTogX19lc3JpLkZlYXR1cmVTZXQgfSk6IFByb21pc2U8YW55PiB7XHJcbiAgY29uc3QgbmV3TGF5ZXJQcm9taXNlcyA9IFtdXHJcbiAgbmV3RmVhdHVyZVNldFZhbHVlICYmIE9iamVjdC5rZXlzKG5ld0ZlYXR1cmVTZXRWYWx1ZSkuZm9yRWFjaChsYXllcklkID0+IHtcclxuICAgIGNvbnN0IGxheWVyID0gbWFwQmFzZVZpZXcubWFwLmxheWVycy5maW5kKGxheWVyID0+IGxheWVyLmlkID09PSBsYXllcklkKVxyXG4gICAgaWYgKGxheWVyKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybigndGhlIGZlYXR1cmUgbGF5ZXIgaXMgYWxyZWFkeSBjcmVhdGVkJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBuZXdMYXllclByb21pc2VzLnB1c2goYWRkRmVhdHVyZVNldFRvTWFwKG1hcEJhc2VWaWV3LCBuZXdGZWF0dXJlU2V0VmFsdWVbbGF5ZXJJZF0sIGxheWVySWQpKVxyXG4gIH0pXHJcblxyXG4gIGlmIChuZXdMYXllclByb21pc2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKG5ld0xheWVyUHJvbWlzZXMpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRmVhdHVyZWxheWVyIChtYXBCYXNlVmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBjaGFuZ2VkRmVhdHVyZVNldFZhbHVlPzogeyBbbGF5ZXJJRDogc3RyaW5nXTogX19lc3JpLkZlYXR1cmVTZXQgfSk6IFByb21pc2U8YW55PiB7XHJcbiAgY29uc3QgdXBkYXRlUHJvbWlzZXMgPSBbXVxyXG4gIGNoYW5nZWRGZWF0dXJlU2V0VmFsdWUgJiYgT2JqZWN0LmtleXMoY2hhbmdlZEZlYXR1cmVTZXRWYWx1ZSkuZm9yRWFjaChsYXllcklkID0+IHtcclxuICAgIGNvbnN0IGxheWVyID0gbWFwQmFzZVZpZXcubWFwLmxheWVycy5maW5kKGxheWVyID0+IGxheWVyLmlkID09PSBsYXllcklkKVxyXG4gICAgaWYgKGxheWVyKSB7XHJcbiAgICAgIG1hcEJhc2VWaWV3Lm1hcC5yZW1vdmUobGF5ZXIpXHJcbiAgICAgIHVwZGF0ZVByb21pc2VzLnB1c2goYWRkRmVhdHVyZVNldFRvTWFwKG1hcEJhc2VWaWV3LCBjaGFuZ2VkRmVhdHVyZVNldFZhbHVlW2xheWVySWRdLCBsYXllcklkKSlcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBpZiAodXBkYXRlUHJvbWlzZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodXBkYXRlUHJvbWlzZXMpXHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhZGRGZWF0dXJlU2V0VG9NYXAgKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIGZlYXR1cmVTZXQ6IF9fZXNyaS5GZWF0dXJlU2V0LCBsYXllcklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICByZXR1cm4gbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAgICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInXHJcbiAgICBdKS50aGVuKG1vZHVsZXMgPT4ge1xyXG4gICAgICBpZiAoZmVhdHVyZVNldC5mZWF0dXJlcy5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgcmVzb2x2ZShudWxsKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGxldCBGZWF0dXJlU2V0OiB0eXBlb2YgIF9fZXNyaS5GZWF0dXJlU2V0O1xyXG4gICAgICAgIGxldCBGZWF0dXJlTGF5ZXI6IHR5cGVvZiBfX2VzcmkuRmVhdHVyZUxheWVyO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgIFtGZWF0dXJlTGF5ZXJdID0gbW9kdWxlcztcclxuXHJcbiAgICAgICAgY29uc3QgbGF5ZXJGcm9tRmVhdHVyZVNldCA9IGZlYXR1cmVTZXQuZmVhdHVyZXNbMF0ubGF5ZXIgYXMgYW55XHJcbiAgICAgICAgY29uc3QgZmllbGRzSW5GZWF0dXJlbGF5ZXIgPSBbXVxyXG4gICAgICAgIGNvbnN0IGZpZWxkTWFwID0ge31cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXllckZyb21GZWF0dXJlU2V0LmZpZWxkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3QgZmllbGRzSXRlbSA9IGdldFJlYXNvbmFibGVGaWVsZChsYXllckZyb21GZWF0dXJlU2V0LmZpZWxkc1tpXSlcclxuICAgICAgICAgIGZpZWxkTWFwW2xheWVyRnJvbUZlYXR1cmVTZXQuZmllbGRzW2ldLm5hbWVdID0gZmllbGRzSXRlbS5uYW1lXHJcbiAgICAgICAgICBmaWVsZHNJbkZlYXR1cmVsYXllci5wdXNoKGZpZWxkc0l0ZW0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmaWVsZHNJblBvcHVwVGVtcGxhdGUgPSBbXVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGZlYXR1cmVTZXQuZmVhdHVyZXNbMF0uYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgaWYgKGZpZWxkTWFwW2tleV0pIHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGRzSXRlbSA9IHtcclxuICAgICAgICAgICAgICBmaWVsZE5hbWU6IGZpZWxkTWFwW2tleV0sXHJcbiAgICAgICAgICAgICAgbGFiZWw6IGtleVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpZWxkc0luUG9wdXBUZW1wbGF0ZS5wdXNoKGZpZWxkc0l0ZW0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzb3VyY2VGZWF0dXJlcyA9IFtdXHJcbiAgICAgICAgZmVhdHVyZVNldC5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdGVtcEZlYXR1cmUgPSBmZWF0dXJlXHJcbiAgICAgICAgICBpZiAodGVtcEZlYXR1cmUuYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgdGVtcEZlYXR1cmUuYXR0cmlidXRlc1tmaWVsZE1hcFtrZXldXSA9IHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXNba2V5XVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzLmV4YmZpZCA9IGluZGV4XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzID0ge1xyXG4gICAgICAgICAgICAgIGV4YmZpZDogaW5kZXhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc291cmNlRmVhdHVyZXMucHVzaCh0ZW1wRmVhdHVyZSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBsYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xyXG4gICAgICAgICAgaWQ6IGxheWVySWQsXHJcbiAgICAgICAgICB0aXRsZTogbGF5ZXJGcm9tRmVhdHVyZVNldC50aXRsZSxcclxuICAgICAgICAgIHNvdXJjZTogc291cmNlRmVhdHVyZXMsXHJcbiAgICAgICAgICBmaWVsZHM6IGZpZWxkc0luRmVhdHVyZWxheWVyLFxyXG4gICAgICAgICAgb3V0RmllbGRzOiBbJyonXSxcclxuICAgICAgICAgIG9iamVjdElkRmllbGQ6ICdleGJmaWQnLFxyXG4gICAgICAgICAgcmVuZGVyZXI6IGxheWVyRnJvbUZlYXR1cmVTZXQucmVuZGVyZXIsXHJcbiAgICAgICAgICBwb3B1cEVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICBwb3B1cFRlbXBsYXRlOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnaW5mb3JtYXRpb24nLFxyXG4gICAgICAgICAgICBjb250ZW50OiBbe1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdmaWVsZHMnLFxyXG4gICAgICAgICAgICAgIGZpZWxkSW5mb3M6IGZpZWxkc0luUG9wdXBUZW1wbGF0ZVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIG1hcEJhc2VWaWV3Lm1hcC5hZGQobGF5ZXIpXHJcblxyXG4gICAgICAgIGxheWVyLm9uKCdsYXllcnZpZXctY3JlYXRlJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShudWxsKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVhc29uYWJsZUZpZWxkIChmaWVsZDogX19lc3JpLkZpZWxkKTogX19lc3JpLkZpZWxkIHtcclxuICAvLyB0aGUgZnVuY3Rpb24gaXMgc3VwcG9ydGVkIHRvIG5vcm1hbGl6ZSB0aGUgZmllbGQubmFtZVxyXG4gIGNvbnN0IGZpZWxkTmFtZSA9IGZpZWxkLm5hbWVcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogZmllbGROYW1lLnJlcGxhY2UoL1xcLi9nLCAnXycpLnJlcGxhY2UoL1xcKC9nLCAnXycpLnJlcGxhY2UoL1xcKS9nLCAnXycpLFxyXG4gICAgYWxpYXM6IGZpZWxkLmFsaWFzLFxyXG4gICAgdHlwZTogZmllbGQudHlwZVxyXG4gIH0gYXMgYW55XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RGZWF0dXJlIChtYXBCYXNlVmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCB0YXJnZXQ6IF9fZXNyaS5HcmFwaGljIHwgX19lc3JpLkdyYXBoaWNbXSB8IElGZWF0dXJlIHwgSUZlYXR1cmVbXSwgbGF5ZXJJZD86IHN0cmluZyk6IEhpZ2hMaWdodEhhbmRsZSB7XHJcbiAgLy8gSW4gdGhpcyBmdW5jdGlvbiwgd2UgYXNzdW1lIHRoYXQgZmVhdHVyZXMgY29tZSBmcm9tIHRoZSBzYW1lIGxheWVyXHJcbiAgbGV0IGZlYXR1cmVMYXllcklkID0gbGF5ZXJJZFxyXG4gIGxldCBmZWF0dXJlTGF5ZXJWaWV3ID0gbnVsbFxyXG4gIGxldCB0ZW1wRmVhdHVyZSA9IG51bGxcclxuXHJcbiAgLy8gaWYgbGF5ZXJJZCBkb2Vzbid0IGV4aXN0LCB3ZSBnZXQgbGF5ZXJJZCBieSBmZWF0dXJlXHJcbiAgaWYgKCFmZWF0dXJlTGF5ZXJJZCkge1xyXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgIHRlbXBGZWF0dXJlID0gdGFyZ2V0WzBdIGFzIF9fZXNyaS5HcmFwaGljXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0ZW1wRmVhdHVyZSA9IHRhcmdldCBhcyBfX2VzcmkuR3JhcGhpY1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0ZW1wRmVhdHVyZSkge1xyXG4gICAgICBmZWF0dXJlTGF5ZXJJZCA9IHRlbXBGZWF0dXJlLmxheWVyICYmIHRlbXBGZWF0dXJlLmxheWVyLmlkXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoZmVhdHVyZUxheWVySWQpIHtcclxuICAgIGNvbnN0IGxheWVyVmlld3MgPSBtYXBCYXNlVmlldy5hbGxMYXllclZpZXdzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxheWVyVmlld3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGxheWVyVmlld3MuZ2V0SXRlbUF0KGkpLmxheWVyLmlkID09PSBmZWF0dXJlTGF5ZXJJZCkge1xyXG4gICAgICAgIGZlYXR1cmVMYXllclZpZXcgPSBsYXllclZpZXdzLmdldEl0ZW1BdChpKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZlYXR1cmVMYXllclZpZXcpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsYXllcklkOiBmZWF0dXJlTGF5ZXJJZCxcclxuICAgICAgICBoYW5kbGU6IGZlYXR1cmVMYXllclZpZXcuaGlnaGxpZ2h0KHRhcmdldClcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnb1RvVGFyZ2V0SW1tZWRpYXRlbHkgKHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgX3RhcmdldDogX19lc3JpLkdlb21ldHJ5KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgY29uc3Qgdmlld1NSID0gdmlldy5zcGF0aWFsUmVmZXJlbmNlXHJcbiAgY29uc3QgZ2VvbWV0cmllcyA9IGF3YWl0IHByb2plY3RHZW9tZXRyaWVzKFtfdGFyZ2V0XSwgdmlld1NSKVxyXG5cclxuICBpZiAoZ2VvbWV0cmllcyAmJiBnZW9tZXRyaWVzLmxlbmd0aCA+IDApIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGdlb21ldHJpZXNbMF1cclxuICAgIHZpZXcuZ29Ubyh0YXJnZXQsIHsgYW5pbWF0ZTogZmFsc2UgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnb1RvVmlld3BvaW50SW1tZWRpYXRlbHkgKHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgX3ZpZXdwb2ludDogX19lc3JpLlZpZXdwb2ludCk6IFByb21pc2U8dm9pZD4ge1xyXG4gIGNvbnN0IHZpZXdTUiA9IHZpZXcuc3BhdGlhbFJlZmVyZW5jZVxyXG4gIGNvbnN0IHZpZXdwb2ludCA9IGF3YWl0IHByb2plY3RWaWV3cG9pbnQoX3ZpZXdwb2ludCwgdmlld1NSKVxyXG4gIC8vIHZpZXcuZ29Ubyh2aWV3cG9pbnQsIHsgYW5pbWF0ZTogZmFsc2UgfSlcclxuICB2aWV3LnZpZXdwb2ludCA9IHZpZXdwb2ludFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOZWVkUHJvamVjdFZpZXdwb2ludCAodmlld3BvaW50OiBfX2VzcmkuVmlld3BvaW50LCB2aWV3U1I6IF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlKTogYm9vbGVhbiB7XHJcbiAgY29uc3Qgc3IxID0gdmlld3BvaW50LnRhcmdldEdlb21ldHJ5Py5zcGF0aWFsUmVmZXJlbmNlXHJcblxyXG4gIGlmIChzcjEgJiYgaXNOZWVkUHJvamVjdFNwYXRpYWxSZWZlcmVuY2Uoc3IxLCB2aWV3U1IpKSB7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3IyID0gdmlld3BvaW50LmNhbWVyYT8ucG9zaXRpb24/LnNwYXRpYWxSZWZlcmVuY2VcclxuXHJcbiAgaWYgKHNyMiAmJiBpc05lZWRQcm9qZWN0U3BhdGlhbFJlZmVyZW5jZShzcjIsIHZpZXdTUikpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTmVlZFByb2plY3RTcGF0aWFsUmVmZXJlbmNlIChzcjE6IF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlLCBzcjI6IF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgaXNTYW1lID0gc3IxLndraWQgPT09IHNyMi53a2lkIHx8IHNyMS5lcXVhbHMoc3IyKVxyXG4gIC8vICBJbiBKUyBBUEkgNC54LCB0aGUgdmlldyBjYW4gaGFuZGxlIFdlYk1lcmNhdG9yIGFuZCBXR1M4NCBzcGF0aWFsUmVmZXJlbmNlIGF1dG9cclxuICBjb25zdCBpc0xpa2UgPSAoc3IxLmlzV2ViTWVyY2F0b3IgfHwgc3IxLmlzV0dTODQpICYmIChzcjIuaXNXZWJNZXJjYXRvciB8fCBzcjIuaXNXR1M4NClcclxuICByZXR1cm4gIWlzU2FtZSAmJiAhaXNMaWtlXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9qZWN0Vmlld3BvaW50IChfdmlld3BvaW50OiBfX2VzcmkuVmlld3BvaW50LCB2aWV3U1I6IF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlKTogUHJvbWlzZTxfX2VzcmkuVmlld3BvaW50PiB7XHJcbiAgY29uc3Qgdmlld3BvaW50ID0gX3ZpZXdwb2ludC5jbG9uZSgpXHJcbiAgY29uc3QgdGFyZ2V0R2VvbWV0cnkgPSB2aWV3cG9pbnQudGFyZ2V0R2VvbWV0cnlcclxuICBjb25zdCBjYW1lcmFQb3NpdG9uID0gdmlld3BvaW50LmNhbWVyYT8ucG9zaXRpb25cclxuXHJcbiAgY29uc3QgdG9Qcm9qZWN0R2VvbWV0cmllczogX19lc3JpLkdlb21ldHJ5W10gPSBbXVxyXG4gIGxldCBpc1Byb2plY3RUYXJnZXRHZW9tZXRyeTogYm9vbGVhbiA9IGZhbHNlXHJcbiAgbGV0IGlzUHJvamVjdENhbWVyYVBvc2l0aW9uOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgaWYgKHRhcmdldEdlb21ldHJ5ICYmIGlzTmVlZFByb2plY3RTcGF0aWFsUmVmZXJlbmNlKHRhcmdldEdlb21ldHJ5LnNwYXRpYWxSZWZlcmVuY2UsIHZpZXdTUikpIHtcclxuICAgIGlzUHJvamVjdFRhcmdldEdlb21ldHJ5ID0gdHJ1ZVxyXG4gICAgdG9Qcm9qZWN0R2VvbWV0cmllcy5wdXNoKHRhcmdldEdlb21ldHJ5KVxyXG4gIH1cclxuXHJcbiAgaWYgKGNhbWVyYVBvc2l0b24gJiYgaXNOZWVkUHJvamVjdFNwYXRpYWxSZWZlcmVuY2UoY2FtZXJhUG9zaXRvbi5zcGF0aWFsUmVmZXJlbmNlLCB2aWV3U1IpKSB7XHJcbiAgICBpc1Byb2plY3RDYW1lcmFQb3NpdGlvbiA9IHRydWVcclxuICAgIHRvUHJvamVjdEdlb21ldHJpZXMucHVzaChjYW1lcmFQb3NpdG9uKVxyXG4gIH1cclxuXHJcbiAgaWYgKHRvUHJvamVjdEdlb21ldHJpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgY29uc3QgcHJvamVjdGVkR2VvbWV0cmllcyA9IGF3YWl0IHByb2plY3RHZW9tZXRyaWVzKHRvUHJvamVjdEdlb21ldHJpZXMsIHZpZXdTUilcclxuXHJcbiAgICBpZiAoaXNQcm9qZWN0VGFyZ2V0R2VvbWV0cnkpIHtcclxuICAgICAgdmlld3BvaW50LnRhcmdldEdlb21ldHJ5ID0gcHJvamVjdGVkR2VvbWV0cmllc1swXVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1Byb2plY3RDYW1lcmFQb3NpdGlvbikge1xyXG4gICAgICB2aWV3cG9pbnQuY2FtZXJhLnBvc2l0aW9uID0gcHJvamVjdGVkR2VvbWV0cmllc1twcm9qZWN0ZWRHZW9tZXRyaWVzLmxlbmd0aCAtIDFdIGFzIF9fZXNyaS5Qb2ludFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHZpZXdwb2ludFxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFwUGFudG8gKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIHRhcmdldDogX19lc3JpLkdlb21ldHJ5IHwgX19lc3JpLkdlb21ldHJ5W10gfFxyXG5fX2VzcmkuR3JhcGhpYyB8IF9fZXNyaS5HcmFwaGljW10gfCBfX2VzcmkuRXh0ZW50KTogUHJvbWlzZTxhbnk+IHtcclxuICBjb25zdCBwYW5Ub1RhcmdldCA9IHRhcmdldCBhcyBhbnlcclxuICBjb25zdCB0ZW1wQmFzZU1hcFZpZXcgPSBtYXBCYXNlVmlldyBhcyBhbnlcclxuICBpZiAocGFuVG9UYXJnZXQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgaWYgKHBhblRvVGFyZ2V0Lmxlbmd0aCA9PT0gMCkgeyBhd2FpdCBQcm9taXNlLnJlc29sdmUoKTsgcmV0dXJuIH1cclxuXHJcbiAgICBpZiAocGFuVG9UYXJnZXRbMF0uZ2VvbWV0cnkpIHtcclxuICAgICAgY29uc3QgZ2VvbWV0cnlBcnI6IF9fZXNyaS5HZW9tZXRyeVtdID0gW11cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYW5Ub1RhcmdldC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGdlb21ldHJ5QXJyLnB1c2gocGFuVG9UYXJnZXRbaV0uZ2VvbWV0cnkpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGF3YWl0IGdldEdlb21ldHJpZXNFeHRlbnQoZ2VvbWV0cnlBcnIpLnRoZW4oKGV4dGVudCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBnb1RvKHRlbXBCYXNlTWFwVmlldywgZXh0ZW50LmNlbnRlcilcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBnZXRHZW9tZXRyaWVzRXh0ZW50KHBhblRvVGFyZ2V0KS50aGVuKChleHRlbnQpID0+IHtcclxuICAgICAgICByZXR1cm4gZ29Ubyh0ZW1wQmFzZU1hcFZpZXcsIGV4dGVudC5jZW50ZXIpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChwYW5Ub1RhcmdldC5nZW9tZXRyeSkge1xyXG4gICAgICBjb25zdCBnZXRtZXRyeSA9IHBhblRvVGFyZ2V0Lmdlb21ldHJ5IGFzIF9fZXNyaS5HZW9tZXRyeVxyXG4gICAgICByZXR1cm4gZ29Ubyh0ZW1wQmFzZU1hcFZpZXcsIGdldENlbnRlclBvaW50KGdldG1ldHJ5KSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBnb1RvKHRlbXBCYXNlTWFwVmlldywgZ2V0Q2VudGVyUG9pbnQocGFuVG9UYXJnZXQpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ29UbyAodmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCB0YXJnZXQ6IGFueSk6IFByb21pc2U8dm9pZD4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAvLyBkZWxheSBiZWZvcmUgdXBkYXRpbmcgb2YgdmlldyB0dXJucyB0cnVlLCA0MDBtcyBpcyBhIHRlbXBvcmFyeSBzb2x1dGlvbi5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAvLy8vIHRoZXJlIGlzIGEgY29uZmxpY3QgZm9yIHBhbmluZyB3aGVuIHRoZSBsYXllciB2aWV3IGlzIHVwZGF0aW5nLCBzdWNoIGFzICdwYW4gdG8nIGFuZCAnZmlsdGVyJy5cclxuICAgICAgLy8vLyB0aGlzIGlzIGEgdGVtcG9yYXJ5IHNvbHV0aW9uLCBpdCBjYW4gcmVkdWNlIHRoZSBmcmVxdWVuY3kgb2YgdGhlIHByb2JsZW0gcmF0aGVyIHRoYW4gc29sdmUgaXQgY29tcGxldGVseS5cclxuICAgICAgLy9pZiAodmlldy51cGRhdGluZykge1xyXG4gICAgICAvLyAgY29uc3QgaGFuZGxlciA9IHZpZXcud2F0Y2goJ3VwZGF0aW5nJywgdmFsdWUgPT4ge1xyXG4gICAgICAvLyAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgIC8vICAgICAgdmlldy5nb1RvKHRhcmdldCkudGhlbigoKSA9PiByZXNvbHZlKCkpLmNhdGNoKCgpID0+IHJlamVjdCgpKVxyXG4gICAgICAvLyAgICAgIGhhbmRsZXIucmVtb3ZlKClcclxuICAgICAgLy8gICAgfVxyXG4gICAgICAvLyAgfSlcclxuICAgICAgLy99IGVsc2Uge1xyXG4gICAgICAvLyAgdmlldy5nb1RvKHRhcmdldCkudGhlbigoKSA9PiByZXNvbHZlKCkpLmNhdGNoKCgpID0+IHJlamVjdCgpKVxyXG4gICAgICAvL31cclxuICAgICAgdmlldy5nb1RvKHRhcmdldCkudGhlbigoKSA9PiB7IHJlc29sdmUoKSB9KS5jYXRjaCgoKSA9PiB7IHJlamVjdCgpIH0pXHJcbiAgICB9LCA0MDApXHJcbiAgfSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0R2VvbWV0cmllc0V4dGVudCAoZ2VvbWV0cmllczogX19lc3JpLkdlb21ldHJ5W10pOiBQcm9taXNlPF9fZXNyaS5FeHRlbnQ+IHtcclxuICByZXR1cm4gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAnZXNyaS9nZW9tZXRyeS9FeHRlbnQnXHJcbiAgXSkudGhlbihhc3luYyBtb2R1bGVzID0+IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgbGV0IEV4dGVudDogdHlwZW9mIF9fZXNyaS5FeHRlbnQ7XHJcbiAgICBbRXh0ZW50XSA9IG1vZHVsZXNcclxuXHJcbiAgICBpZiAoIWdlb21ldHJpZXMgfHwgIWdlb21ldHJpZXMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUobnVsbClcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZnVsbEV4dGVudDogX19lc3JpLkV4dGVudCA9IG51bGxcclxuICAgIGxldCBpbmRleFxyXG4gICAgY29uc3QgbnVtR2VvbWV0cmllcyA9IGdlb21ldHJpZXMubGVuZ3RoXHJcblxyXG4gICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgbnVtR2VvbWV0cmllczsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBnZW9tZXRyeSA9IGdlb21ldHJpZXNbaW5kZXhdXHJcbiAgICAgIGlmICghZ2VvbWV0cnkpIHtcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgZXh0ZW50ID0gZ2VvbWV0cnkuZXh0ZW50XHJcblxyXG4gICAgICBpZiAoIWV4dGVudCAmJiBnZW9tZXRyeS50eXBlID09PSAncG9pbnQnKSB7XHJcbiAgICAgICAgY29uc3QgcG9pbnRHZW9tZXRyeSA9IGdlb21ldHJ5IGFzIGFueVxyXG5cclxuICAgICAgICBpZiAocG9pbnRHZW9tZXRyeS54ICYmIHBvaW50R2VvbWV0cnkueSkge1xyXG4gICAgICAgICAgZXh0ZW50ID0gbmV3IEV4dGVudCh7XHJcbiAgICAgICAgICAgIHhtYXg6IHBvaW50R2VvbWV0cnkueCxcclxuICAgICAgICAgICAgeG1pbjogcG9pbnRHZW9tZXRyeS54LFxyXG4gICAgICAgICAgICB5bWF4OiBwb2ludEdlb21ldHJ5LnksXHJcbiAgICAgICAgICAgIHltaW46IHBvaW50R2VvbWV0cnkueSxcclxuICAgICAgICAgICAgem1heDogcG9pbnRHZW9tZXRyeS56LFxyXG4gICAgICAgICAgICB6bWluOiBwb2ludEdlb21ldHJ5LnosXHJcbiAgICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHBvaW50R2VvbWV0cnkuc3BhdGlhbFJlZmVyZW5jZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghZXh0ZW50KSB7XHJcbiAgICAgICAgY29udGludWVcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGZ1bGxFeHRlbnQpIHtcclxuICAgICAgICBmdWxsRXh0ZW50ID0gZnVsbEV4dGVudC51bmlvbihleHRlbnQpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZnVsbEV4dGVudCA9IGV4dGVudFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZ1bGxFeHRlbnQud2lkdGggPCAwICYmIGZ1bGxFeHRlbnQuaGVpZ2h0IDwgMCkge1xyXG4gICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKG51bGwpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShmdWxsRXh0ZW50KVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaWx0ZXJGZWF0dXJlc0J5UXVlcnkgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldywgYWN0aW9uTGF5ZXJEYXRhU291cmNlSWQ6IHN0cmluZywgcXVlcnlTUUw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gIGlmICghYWN0aW9uTGF5ZXJEYXRhU291cmNlSWQpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGF0YVNvdXJjZSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShhY3Rpb25MYXllckRhdGFTb3VyY2VJZClcclxuXHJcbiAgaWYgKCFkYXRhU291cmNlKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGxldCBqaW11TGF5ZXJWaWV3OiBKaW11TGF5ZXJWaWV3ID0gbnVsbFxyXG5cclxuICB0cnkge1xyXG4gICAgamltdUxheWVyVmlldyA9IGF3YWl0IGppbXVNYXBWaWV3LndoZW5KaW11TGF5ZXJWaWV3TG9hZGVkQnlEYXRhU291cmNlKGRhdGFTb3VyY2UpXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBqaW11TGF5ZXJWaWV3ID0gbnVsbFxyXG4gICAgY29uc29sZS5lcnJvcignY2FuXFwndCBnZXQgamltdUxheWVyVmlldyBieSBkYXRhU291cmNlJywgZGF0YVNvdXJjZSwgZXJyKVxyXG4gIH1cclxuXHJcbiAgaWYgKGppbXVMYXllclZpZXcgJiYgamltdUxheWVyVmlldy5sYXllciAmJiAoamltdUxheWVyVmlldy50eXBlID09PSBMYXllclR5cGVzLkZlYXR1cmVMYXllciB8fCBqaW11TGF5ZXJWaWV3LnR5cGUgPT09IExheWVyVHlwZXMuU2NlbmVMYXllcikpIHtcclxuICAgIChqaW11TGF5ZXJWaWV3IGFzIEppbXVGZWF0dXJlTGF5ZXJWaWV3IHwgSmltdVNjZW5lTGF5ZXJWaWV3KS5zZXREZWZpbml0aW9uRXhwcmVzc2lvbihxdWVyeVNRTClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHF1ZXJ5RmVhdHVyZXMgKGxheWVyT2JqZWN0LCBxdWVyeVNRTDogc3RyaW5nLCBvdXRGaWVsZHM6IHN0cmluZ1tdKSB7XHJcbiAgcmV0dXJuIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgJ2VzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5J1xyXG4gIF0pLnRoZW4obW9kdWxlcyA9PiB7XHJcbiAgICBsZXQgUXVlcnk6IHR5cGVvZiBfX2VzcmkuUXVlcnk7XHJcbiAgICBbUXVlcnldID0gbW9kdWxlc1xyXG4gICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKVxyXG4gICAgcXVlcnkud2hlcmUgPSBxdWVyeVNRTFxyXG4gICAgcXVlcnkub3V0RmllbGRzID0gb3V0RmllbGRzIHx8IFtdXHJcbiAgICBxdWVyeS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcclxuICAgIHJldHVybiBsYXllck9iamVjdC5xdWVyeUZlYXR1cmVzKHF1ZXJ5KS50aGVuKGZlYXR1cmVTZXQgPT4ge1xyXG4gICAgICByZXR1cm4gZmVhdHVyZVNldFxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBmbGFzaE9uRmVhdHVyZUxheWVyIChqaW11TWFwVmlldzogSmltdU1hcFZpZXcsIHF1ZXJ5U1FMOiBzdHJpbmcsIHRlbXBKaW11TGF5ZXJWaWV3OiBKaW11RmVhdHVyZUxheWVyVmlldykge1xyXG4gIGlmICgodGVtcEppbXVMYXllclZpZXcpLnZpZXcpIHtcclxuICAgIGxldCBmZWF0dXJlTGF5ZXJWaWV3OiBfX2VzcmkuRmVhdHVyZUxheWVyVmlldyA9ICh0ZW1wSmltdUxheWVyVmlldykudmlld1xyXG4gICAgaWYgKGZlYXR1cmVMYXllclZpZXcpIHtcclxuICAgICAgcXVlcnlGZWF0dXJlcyhmZWF0dXJlTGF5ZXJWaWV3LmxheWVyLCBxdWVyeVNRTCwgW10pLnRoZW4oZmVhdHVyZVNldCA9PiB7XHJcbiAgICAgICAgaWYgKGZlYXR1cmVTZXQgJiYgZmVhdHVyZVNldC5mZWF0dXJlcyAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IGdldEZsYXNoU3ltYm9sKGZlYXR1cmVMYXllclZpZXcubGF5ZXIuZ2VvbWV0cnlUeXBlKVxyXG4gICAgICAgICAgc3RhcnRGbGFzaChqaW11TWFwVmlldy52aWV3LCBmZWF0dXJlU2V0LmZlYXR1cmVzLCBzeW1ib2wpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAgICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInXHJcbiAgICBdKS50aGVuKG1vZHVsZXMgPT4ge1xyXG4gICAgICBsZXQgRmVhdHVyZUxheWVyOiB0eXBlb2YgX19lc3JpLkZlYXR1cmVMYXllcjtcclxuICAgICAgW0ZlYXR1cmVMYXllcl0gPSBtb2R1bGVzXHJcblxyXG4gICAgICBsZXQgdGVtcEZlYXR1cmVMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xyXG4gICAgICAgIHVybDogZGF0YVNvdXJjZVV0aWxzLmdldFVybEJ5TGF5ZXIoKHRlbXBKaW11TGF5ZXJWaWV3IGFzIEppbXVGZWF0dXJlTGF5ZXJWaWV3IHwgSmltdVNjZW5lTGF5ZXJWaWV3KS5sYXllcilcclxuICAgICAgfSlcclxuICAgICAgdGVtcEZlYXR1cmVMYXllci5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcXVlcnlGZWF0dXJlcyh0ZW1wRmVhdHVyZUxheWVyLCBxdWVyeVNRTCwgW10pLnRoZW4oZmVhdHVyZVNldCA9PiB7XHJcbiAgICAgICAgICBpZiAoZmVhdHVyZVNldCAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzICYmIGZlYXR1cmVTZXQuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBnZXRGbGFzaFN5bWJvbChmZWF0dXJlU2V0LmZlYXR1cmVzWzBdLmdlb21ldHJ5LnR5cGUpXHJcbiAgICAgICAgICAgIHN0YXJ0Rmxhc2goamltdU1hcFZpZXcudmlldywgZmVhdHVyZVNldC5mZWF0dXJlcywgc3ltYm9sKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxubGV0IHNjZW5lSGlnaHRsaWdodEhhbmRsZSA9IG51bGxcclxuZnVuY3Rpb24gZmxhc2hPblNjZW5lTGF5ZXIgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldywgcXVlcnlTUUw6IHN0cmluZywgdGVtcEppbXVMYXllclZpZXc6IEppbXVTY2VuZUxheWVyVmlldykge1xyXG4gIGlmICgodGVtcEppbXVMYXllclZpZXcpLnZpZXcpIHtcclxuICAgIGxldCBzY2VuZUxheWVyVmlldzogX19lc3JpLlNjZW5lTGF5ZXJWaWV3ID0gKHRlbXBKaW11TGF5ZXJWaWV3KS52aWV3XHJcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBxdWVyeUZlYXR1cmVzKHNjZW5lTGF5ZXJWaWV3Py5sYXllcj8uYXNzb2NpYXRlZExheWVyLCBxdWVyeVNRTCwgW10pLnRoZW4oZmVhdHVyZVNldCA9PiB7XHJcbiAgICAgIGlmIChmZWF0dXJlU2V0ICYmIGZlYXR1cmVTZXQuZmVhdHVyZXMgJiYgZmVhdHVyZVNldC5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0SWRGaWVsZCA9IHNjZW5lTGF5ZXJWaWV3LmxheWVyLm9iamVjdElkRmllbGRcclxuICAgICAgICBjb25zdCBvYmplY3RJZHMgPSBmZWF0dXJlU2V0LmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IGZlYXR1cmUuYXR0cmlidXRlc1tvYmplY3RJZEZpZWxkXSlcclxuXHJcbiAgICAgICAgbGV0IGkgPSAwXHJcbiAgICAgICAgY29uc3QgbWF4Rmxhc2hDb3VudCA9IDZcclxuICAgICAgICBsZXQgaGlnaGxpZ2h0Q29sb3IgPSBbMjU1LCAyNTUsIDAsIDAuOF1cclxuICAgICAgICBjb25zdCBvcmlnaW5hbEhpZ2hsaWdodE9wdGlvbnMgPSBqaW11TWFwVmlldy52aWV3LmhpZ2hsaWdodE9wdGlvbnNcclxuXHJcbiAgICAgICAgY29uc3QgZmxhc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBpZiAoaSA8IG1heEZsYXNoQ291bnQpIHtcclxuICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgICAgIGlmIChoaWdobGlnaHRDb2xvcikge1xyXG4gICAgICAgICAgICAgIGhpZ2hsaWdodENvbG9yID0gbnVsbFxyXG4gICAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgICAgICAgICAgICBqaW11TWFwVmlldy52aWV3LmhpZ2hsaWdodE9wdGlvbnMgPSB7IGNvbG9yOiBbMCwgMCwgMCwgMF0gfVxyXG4gICAgICAgICAgICAgIHNjZW5lSGlnaHRsaWdodEhhbmRsZSAmJiBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUucmVtb3ZlKClcclxuICAgICAgICAgICAgICBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgPSBzY2VuZUxheWVyVmlldy5oaWdobGlnaHQob2JqZWN0SWRzKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGhpZ2hsaWdodENvbG9yID0gWzI1NSwgMjU1LCAwLCAwLjhdXHJcbiAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgICAgICAgICAgIGppbXVNYXBWaWV3LnZpZXcuaGlnaGxpZ2h0T3B0aW9ucyA9IHsgY29sb3I6IGhpZ2hsaWdodENvbG9yIH1cclxuICAgICAgICAgICAgICBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgJiYgc2NlbmVIaWdodGxpZ2h0SGFuZGxlLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgc2NlbmVIaWdodGxpZ2h0SGFuZGxlID0gc2NlbmVMYXllclZpZXcuaGlnaGxpZ2h0KG9iamVjdElkcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZsYXNoLCA1MDApXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBqaW11TWFwVmlldy52aWV3LmhpZ2hsaWdodE9wdGlvbnMgPSBvcmlnaW5hbEhpZ2hsaWdodE9wdGlvbnNcclxuICAgICAgICAgICAgc2NlbmVIaWdodGxpZ2h0SGFuZGxlICYmIHNjZW5lSGlnaHRsaWdodEhhbmRsZS5yZW1vdmUoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KGZsYXNoLCA1MDApXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmxhc2hGZWF0dXJlc0J5UXVlcnkgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldywgbGF5ZXJEYXRhU291cmNlSWQ6IHN0cmluZywgcXVlcnlTUUw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gIGlmICghbGF5ZXJEYXRhU291cmNlSWQpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGF0YVNvdXJjZSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShsYXllckRhdGFTb3VyY2VJZClcclxuXHJcbiAgaWYgKCFkYXRhU291cmNlKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGxldCBqaW11TGF5ZXJWaWV3OiBKaW11TGF5ZXJWaWV3ID0gbnVsbFxyXG5cclxuICB0cnkge1xyXG4gICAgamltdUxheWVyVmlldyA9IGF3YWl0IGppbXVNYXBWaWV3LndoZW5KaW11TGF5ZXJWaWV3TG9hZGVkQnlEYXRhU291cmNlKGRhdGFTb3VyY2UpXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBqaW11TGF5ZXJWaWV3ID0gbnVsbFxyXG4gICAgY29uc29sZS5lcnJvcignY2FuXFwndCBnZXQgamltdUxheWVyVmlldyBieSBkYXRhU291cmNlJywgZGF0YVNvdXJjZSwgZXJyKVxyXG4gIH1cclxuXHJcbiAgaWYgKGppbXVMYXllclZpZXcgJiYgamltdUxheWVyVmlldy5sYXllcikge1xyXG4gICAgaWYgKGppbXVMYXllclZpZXcudHlwZSA9PT0gTGF5ZXJUeXBlcy5GZWF0dXJlTGF5ZXIpIHtcclxuICAgICAgZmxhc2hPbkZlYXR1cmVMYXllcihqaW11TWFwVmlldywgcXVlcnlTUUwsIGppbXVMYXllclZpZXcgYXMgSmltdUZlYXR1cmVMYXllclZpZXcpXHJcbiAgICB9IGVsc2UgaWYgKGppbXVMYXllclZpZXcudHlwZSA9PT0gTGF5ZXJUeXBlcy5TY2VuZUxheWVyKSB7XHJcbiAgICAgIGZsYXNoT25TY2VuZUxheWVyKGppbXVNYXBWaWV3LCBxdWVyeVNRTCwgamltdUxheWVyVmlldyBhcyBKaW11U2NlbmVMYXllclZpZXcpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFydEZsYXNoIChtYXBCYXNlVmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBmZWF0dXJlczogX19lc3JpLkdyYXBoaWNbXSwgc3ltYm9sKSB7XHJcbiAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAnZXNyaS9HcmFwaGljJ1xyXG4gIF0pLnRoZW4obW9kdWxlcyA9PiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIGxldCBHcmFwaGljOiB0eXBlb2YgX19lc3JpLkdyYXBoaWM7XHJcbiAgICBbR3JhcGhpY10gPSBtb2R1bGVzXHJcblxyXG4gICAgY29uc3QgZmxhc2hGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlczogX19lc3JpLkdyYXBoaWNbXSwgbWF4Rmxhc2hDb3VudDogbnVtYmVyKSB7XHJcbiAgICAgIGNvbnN0IGdyYXBoaWNzID0gW11cclxuICAgICAgbGV0IGZsYXNoQ291bnQgPSAwXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB0ZW1wR3JhcGhpYyA9IG5ldyBHcmFwaGljKHtcclxuICAgICAgICAgIGdlb21ldHJ5OiBmZWF0dXJlc1tpXS5nZW9tZXRyeSxcclxuICAgICAgICAgIHN5bWJvbDogc3ltYm9sLFxyXG4gICAgICAgICAgYXR0cmlidXRlczogZmVhdHVyZXNbaV0uYXR0cmlidXRlc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZ3JhcGhpY3MucHVzaCh0ZW1wR3JhcGhpYylcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc2luZ2xlRmxhc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbWFwQmFzZVZpZXcuZ3JhcGhpY3MuYWRkTWFueShncmFwaGljcylcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIG1hcEJhc2VWaWV3LmdyYXBoaWNzLnJlbW92ZU1hbnkoZ3JhcGhpY3MpXHJcbiAgICAgICAgICBmbGFzaENvdW50ID0gZmxhc2hDb3VudCArIDFcclxuICAgICAgICAgIGlmIChmbGFzaENvdW50IDwgbWF4Rmxhc2hDb3VudCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBzaW5nbGVGbGFzaCgpXHJcbiAgICAgICAgICAgIH0sIDUwMClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCA1MDApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNpbmdsZUZsYXNoKClcclxuICAgIH1cclxuXHJcbiAgICBmbGFzaEZlYXR1cmVzKGZlYXR1cmVzLCAzKVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZsYXNoU3ltYm9sIChnZW9tZXRyeVR5cGU6IHN0cmluZykge1xyXG4gIGlmIChbJ3BvaW50JywgJ211bHRpcG9pbnQnXS5pbmNsdWRlcyhnZW9tZXRyeVR5cGUpKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiAnc2ltcGxlLW1hcmtlcicsXHJcbiAgICAgIHN0eWxlOiAnY2lyY2xlJyxcclxuICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMCwgMC44XSxcclxuICAgICAgc2l6ZTogJzE2cHgnLFxyXG4gICAgICBvdXRsaW5lOiB7XHJcbiAgICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMCwgMC44XSxcclxuICAgICAgICB3aWR0aDogM1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChbJ3BvbHlsaW5lJ10uaW5jbHVkZXMoZ2VvbWV0cnlUeXBlKSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogJ3NpbXBsZS1saW5lJyxcclxuICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMCwgMC44XSxcclxuICAgICAgd2lkdGg6IDMsXHJcbiAgICAgIHN0eWxlOiAnc29saWQnXHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChbJ3BvbHlnb24nLCAnZXh0ZW50J10uaW5jbHVkZXMoZ2VvbWV0cnlUeXBlKSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogJ3NpbXBsZS1maWxsJywgLy8gYXV0b2Nhc3RzIGFzIG5ldyBTaW1wbGVGaWxsU3ltYm9sKClcclxuICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMCwgMC41XSxcclxuICAgICAgc3R5bGU6ICdzb2xpZCcsXHJcbiAgICAgIG91dGxpbmU6IHsgLy8gYXV0b2Nhc3RzIGFzIG5ldyBTaW1wbGVMaW5lU3ltYm9sKClcclxuICAgICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjhdLFxyXG4gICAgICAgIHdpZHRoOiAzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2UgaWYgKFsnbWVzaCddLmluY2x1ZGVzKGdlb21ldHJ5VHlwZSkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6ICdtZXNoLTNkJywgLy8gYXV0b2Nhc3RzIGFzIG5ldyBNZXNoU3ltYm9sM0QoKVxyXG4gICAgICBzeW1ib2xMYXllcnM6IFt7XHJcbiAgICAgICAgdHlwZTogJ2ZpbGwnLCAvLyBhdXRvY2FzdHMgYXMgbmV3IEZpbGxTeW1ib2wzRExheWVyKClcclxuICAgICAgICBtYXRlcmlhbDogeyBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjhdIH1cclxuICAgICAgfV1cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENlbnRlclBvaW50IChnZW9tZXRyeTogX19lc3JpLkdlb21ldHJ5KTogX19lc3JpLlBvaW50IHtcclxuICAvLyBwb2ludCB8IG11bHRpcG9pbnQgfCBwb2x5bGluZSB8IHBvbHlnb24gfCBleHRlbnQgfCBtZXNoXHJcbiAgc3dpdGNoIChnZW9tZXRyeS50eXBlKSB7XHJcbiAgICBjYXNlICdwb2ludCc6XHJcbiAgICAgIHJldHVybiBnZW9tZXRyeSBhcyBfX2VzcmkuUG9pbnRcclxuICAgIGNhc2UgJ2V4dGVudCc6XHJcbiAgICAgIHJldHVybiAoZ2VvbWV0cnkgYXMgX19lc3JpLkV4dGVudCkuY2VudGVyXHJcbiAgICBjYXNlICdwb2x5Z29uJzpcclxuICAgICAgcmV0dXJuIChnZW9tZXRyeSBhcyBfX2VzcmkuUG9seWdvbikuY2VudHJvaWRcclxuICAgIGNhc2UgJ3BvbHlsaW5lJzpcclxuICAgICAgcmV0dXJuIChnZW9tZXRyeSBhcyBfX2VzcmkuUG9seWxpbmUpLmV4dGVudC5jZW50ZXJcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBnZW9tZXRyeSAmJiBnZW9tZXRyeS5leHRlbnQgPyBnZW9tZXRyeS5leHRlbnQuY2VudGVyIDogdW5kZWZpbmVkXHJcbiAgICAvLyB0b2RvXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVGZWF0dXJlIChmZWF0dXJlOiBJRmVhdHVyZSB8IF9fZXNyaS5HcmFwaGljLCBHcmFwaGljOiB0eXBlb2YgX19lc3JpLkdyYXBoaWMpOiBfX2VzcmkuR3JhcGhpYyB7XHJcbiAgbGV0IHRlbXBGZWF0dXJlID0gbnVsbFxyXG4gIGlmICgoZmVhdHVyZSBhcyBhbnkpLmNsb25lKSB7XHJcbiAgICB0ZW1wRmVhdHVyZSA9IChmZWF0dXJlIGFzIGFueSkuY2xvbmUoKVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0ZW1wRmVhdHVyZSA9IEdyYXBoaWMuZnJvbUpTT04oT2JqZWN0LmFzc2lnbih7fSwgZmVhdHVyZSkpXHJcbiAgICB0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgZmVhdHVyZS5hdHRyaWJ1dGVzKVxyXG4gIH1cclxuICByZXR1cm4gdGVtcEZlYXR1cmVcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2plY3RHZW9tZXRyaWVzIChnZW9tZXRyaWVzOiBfX2VzcmkuR2VvbWV0cnlbXSwgc3BhdGlhbFJlZmVyZW5jZTogX19lc3JpLlNwYXRpYWxSZWZlcmVuY2UpOiBQcm9taXNlPF9fZXNyaS5HZW9tZXRyeVtdPiB7XHJcbiAgaWYgKCFnZW9tZXRyaWVzIHx8IGdlb21ldHJpZXMubGVuZ3RoID09PSAwIHx8ICFnZW9tZXRyaWVzWzBdIHx8XHJcbiAgICBzcGF0aWFsUmVmZXJlbmNlLndraWQgPT09IGdlb21ldHJpZXNbMF0uc3BhdGlhbFJlZmVyZW5jZS53a2lkIHx8IChzcGF0aWFsUmVmZXJlbmNlLmVxdWFscyhnZW9tZXRyaWVzWzBdLnNwYXRpYWxSZWZlcmVuY2UpKSkge1xyXG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShnZW9tZXRyaWVzKVxyXG4gIH0gZWxzZSBpZiAoc3BhdGlhbFJlZmVyZW5jZS5pc1dlYk1lcmNhdG9yICYmIGdlb21ldHJpZXNbMF0uc3BhdGlhbFJlZmVyZW5jZS5pc1dHUzg0KSB7XHJcbiAgICAvLyBJbiBqcyBhcGkgNC54LCB0aGUgdmlldyBjYW4gaGFuZGxlIFdlYk1lcmNhdG9yIGFuZCBXR1M4NCBzcGF0aWFsUmVmZXJlbmNlIGF1dG9cclxuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZ2VvbWV0cmllcylcclxuICB9IGVsc2UgaWYgKHNwYXRpYWxSZWZlcmVuY2UuaXNXR1M4NCAmJiBnZW9tZXRyaWVzWzBdLnNwYXRpYWxSZWZlcmVuY2UuaXNXZWJNZXJjYXRvcikge1xyXG4gICAgLy8gSW4ganMgYXBpIDQueCwgdGhlIHZpZXcgY2FuIGhhbmRsZSBXZWJNZXJjYXRvciBhbmQgV0dTODQgc3BhdGlhbFJlZmVyZW5jZSBhdXRvXHJcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGdlb21ldHJpZXMpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBhd2FpdCBnZW9tZXRyeVV0aWxzLnByb2plY3RUb1NwYXRpYWxSZWZlcmVuY2UoZ2VvbWV0cmllcywgc3BhdGlhbFJlZmVyZW5jZSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9jZXNzWm9vbVRvRmVhdHVyZXMgKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIGxheWVyOiBhbnksIGZlYXR1cmVzOiBfX2VzcmkuR3JhcGhpY1tdKTogUHJvbWlzZTxfX2VzcmkuR3JhcGhpY1tdPiB7XHJcbiAgaWYgKG1hcEJhc2VWaWV3ICYmIG1hcEJhc2VWaWV3LnR5cGUgPT09ICczZCcgJiYgbGF5ZXIgJiYgbGF5ZXIucXVlcnlGZWF0dXJlcyAmJiBmZWF0dXJlcykge1xyXG4gICAgcmV0dXJuIGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAnZXNyaS9yZXN0L3N1cHBvcnQvUXVlcnknXHJcbiAgICBdKS50aGVuKChtb2R1bGVzKSA9PiB7XHJcbiAgICAgIGNvbnN0IFtRdWVyeV0gPSBtb2R1bGVzXHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KClcclxuICAgICAgcXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlXHJcbiAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFsnKiddXHJcbiAgICAgIHF1ZXJ5Lm9iamVjdElkcyA9IGZlYXR1cmVzLm1hcChmZWF0dXJlID0+IGZlYXR1cmUuYXR0cmlidXRlc1tsYXllci5vYmplY3RJZEZpZWxkXSlcclxuICAgICAgcmV0dXJuIGxheWVyLnF1ZXJ5RmVhdHVyZXMocXVlcnkpLnRoZW4oYXN5bmMgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmZlYXR1cmVzICYmIHJlc3VsdC5mZWF0dXJlcy5sZW5ndGggPT09IGZlYXR1cmVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShyZXN1bHQuZmVhdHVyZXMpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZmVhdHVyZXMpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShmZWF0dXJlcylcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZmVhdHVyZXMpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJc0xpdmUgKGFwcE1vZGU6IEFwcE1vZGUpOiBib29sZWFuIHtcclxuICBpZiAod2luZG93LmppbXVDb25maWcuaXNJbkJ1aWxkZXIpIHtcclxuICAgIGlmIChhcHBNb2RlID09PSBBcHBNb2RlLkRlc2lnbikge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGF5ZXJzRnJvbURhdGFTb3VyY2VJZHMgKGRhdGFTb3VyY2VJZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcclxuICBjb25zdCBsYXllclByb21pc2VzID0gW11cclxuICBkYXRhU291cmNlSWRzLmZvckVhY2goZGF0YVNvdXJjZUlkID0+IHtcclxuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UoZGF0YVNvdXJjZUlkKSBhcyB1bmtub3duIGFzIEpTQVBJTGF5ZXJNaXhpblxyXG4gICAgbGV0IGxheWVyUHJvbWlzZVxyXG4gICAgaWYgKGRhdGFTb3VyY2U/LmxheWVyKSB7XHJcbiAgICAgIGxheWVyUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShkYXRhU291cmNlLmxheWVyKVxyXG4gICAgfSBlbHNlIGlmIChkYXRhU291cmNlPy5jcmVhdGVKU0FQSUxheWVyQnlEYXRhU291cmNlKSB7XHJcbiAgICAgIGxheWVyUHJvbWlzZSA9IGRhdGFTb3VyY2UuY3JlYXRlSlNBUElMYXllckJ5RGF0YVNvdXJjZSgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsYXllclByb21pc2UgPSBQcm9taXNlLnJlc29sdmUobnVsbClcclxuICAgIH1cclxuICAgIGxheWVyUHJvbWlzZXMucHVzaChsYXllclByb21pc2UpXHJcbiAgfSlcclxuICByZXR1cm4gUHJvbWlzZS5hbGwobGF5ZXJQcm9taXNlcylcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEppbXVNYXBWaWV3SWQgKHdpZGdldElkOiBzdHJpbmcsIGRhdGFTb3VyY2VJZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAvLyBJZiBkYXRhU291cmNlSWQgaXMgbnVsbCwgbWFrZSBzdXJlIGl0IGNvbnZlcnRzIHRvIGVtcHR5IHN0cmluZy5cclxuICBjb25zdCBkc0lkID0gZGF0YVNvdXJjZUlkIHx8ICcnXHJcbiAgcmV0dXJuIGAke3dpZGdldElkfS0ke2RzSWR9YFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWFwQmFzZVJlc3RvcmVEYXRhIChtYXBJbnN0YW5jZTogTWFwQmFzZSk6IE1hcGJhc2VSZXN0b3JlRGF0YSB7XHJcbiAgY29uc3Qge1xyXG4gICAgbWFwQ29udGFpbmVyLFxyXG4gICAgc3RhdGUsXHJcbiAgICBHZW9tZXRyeSxcclxuICAgIEluaXRpYWxWaWV3UHJvcGVydGllcyxcclxuICAgIFRpbGVMYXllcixcclxuICAgIEJhc2VtYXAsXHJcbiAgICBNYXBWaWV3LFxyXG4gICAgU2NlbmVWaWV3LFxyXG4gICAgRXh0ZW50LFxyXG4gICAgVmlld3BvaW50LFxyXG4gICAgUG9ydGFsSXRlbSxcclxuICAgIFBvcnRhbCxcclxuICAgIFdlYk1hcCxcclxuICAgIFdlYlNjZW5lLFxyXG4gICAgQ29sb3IsXHJcbiAgICBTcGF0aWFsUmVmZXJlbmNlLFxyXG4gICAgUG9pbnQsXHJcbiAgICBleHBlY3RlZERhdGFTb3VyY2VJbmZvLFxyXG4gICAgbWFwQ3JlYXRpbmdJbmZvLFxyXG4gICAgdmlldyxcclxuICAgIGxhc3RVcGRhdGVWaWV3Q29uZmlnLFxyXG4gICAgbWFwRHMsXHJcbiAgICBkc01hbmFnZXIsXHJcbiAgICBpc0ZpcnN0UmVjZWl2ZU1lc3NhZ2VcclxuICB9ID0gbWFwSW5zdGFuY2VcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG1hcENvbnRhaW5lcixcclxuICAgIHN0YXRlLFxyXG5cclxuICAgIEdlb21ldHJ5LFxyXG4gICAgSW5pdGlhbFZpZXdQcm9wZXJ0aWVzLFxyXG4gICAgVGlsZUxheWVyLFxyXG4gICAgQmFzZW1hcCxcclxuICAgIE1hcFZpZXcsXHJcbiAgICBTY2VuZVZpZXcsXHJcbiAgICBFeHRlbnQsXHJcbiAgICBWaWV3cG9pbnQsXHJcbiAgICBQb3J0YWxJdGVtLFxyXG4gICAgUG9ydGFsLFxyXG4gICAgV2ViTWFwLFxyXG4gICAgV2ViU2NlbmUsXHJcbiAgICBDb2xvcixcclxuICAgIFNwYXRpYWxSZWZlcmVuY2UsXHJcbiAgICBQb2ludCxcclxuXHJcbiAgICBleHBlY3RlZERhdGFTb3VyY2VJbmZvLFxyXG4gICAgbWFwQ3JlYXRpbmdJbmZvLFxyXG4gICAgdmlldyxcclxuICAgIGxhc3RVcGRhdGVWaWV3Q29uZmlnLFxyXG4gICAgbWFwRHMsXHJcblxyXG4gICAgZHNNYW5hZ2VyLFxyXG4gICAgaXNGaXJzdFJlY2VpdmVNZXNzYWdlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzdG9yZU1hcEJhc2UgKG1hcEluc3RhbmNlOiBNYXBCYXNlLCByZXN0b3JlRGF0YTogTWFwYmFzZVJlc3RvcmVEYXRhKTogdm9pZCB7XHJcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJlc3RvcmVEYXRhKVxyXG5cclxuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcbiAgICBtYXBJbnN0YW5jZVtrZXldID0gcmVzdG9yZURhdGFba2V5XVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVHdvV2lkZ2V0c011dHVhbGx5RXh0ZW50Q2hhbmdlICh3aWRnZXRJZDE6IHN0cmluZywgd2lkZ2V0SWQyOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICBpZiAod2lkZ2V0SWQxICYmIHdpZGdldElkMikge1xyXG4gICAgY29uc3QgbWVzc2FnZUNvbmZpZ3MgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwQ29uZmlnLm1lc3NhZ2VDb25maWdzXHJcblxyXG4gICAgaWYgKG1lc3NhZ2VDb25maWdzKSB7XHJcbiAgICAgIGNvbnN0IGFjdGlvbk5hbWVzOiBzdHJpbmdbXSA9IFsncGFuVG8nLCAnem9vbVRvRmVhdHVyZSddXHJcbiAgICAgIGNvbnN0IG1lc3NhZ2VUeXBlID0gTWVzc2FnZVR5cGUuRXh0ZW50Q2hhbmdlXHJcblxyXG4gICAgICBpZiAoaXNXaWRnZXRTZW5kQWN0aW9uc1RvQW5vdGhlcih3aWRnZXRJZDEsIHdpZGdldElkMiwgbWVzc2FnZUNvbmZpZ3MsIG1lc3NhZ2VUeXBlLCBhY3Rpb25OYW1lcykgJiZcclxuICAgICAgICAgaXNXaWRnZXRTZW5kQWN0aW9uc1RvQW5vdGhlcih3aWRnZXRJZDIsIHdpZGdldElkMSwgbWVzc2FnZUNvbmZpZ3MsIG1lc3NhZ2VUeXBlLCBhY3Rpb25OYW1lcykpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzV2lkZ2V0U2VuZFpvb21Ub0FjdGlvblRvQW5vdGhlciAoc2VuZE1lc3NhZ2VXaWRnZXRJZDogc3RyaW5nLCBhY3Rpb25XaWRnZXRJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpOiBib29sZWFuIHtcclxuICBpZiAoc2VuZE1lc3NhZ2VXaWRnZXRJZCAmJiBhY3Rpb25XaWRnZXRJZCkge1xyXG4gICAgY29uc3QgbWVzc2FnZUNvbmZpZ3MgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwQ29uZmlnLm1lc3NhZ2VDb25maWdzXHJcblxyXG4gICAgaWYgKG1lc3NhZ2VDb25maWdzKSB7XHJcbiAgICAgIGNvbnN0IGFjdGlvbk5hbWVzOiBzdHJpbmdbXSA9IFsnem9vbVRvRmVhdHVyZSddXHJcblxyXG4gICAgICByZXR1cm4gaXNXaWRnZXRTZW5kQWN0aW9uc1RvQW5vdGhlcihzZW5kTWVzc2FnZVdpZGdldElkLCBhY3Rpb25XaWRnZXRJZCwgbWVzc2FnZUNvbmZpZ3MsIG1lc3NhZ2VUeXBlLCBhY3Rpb25OYW1lcylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1dpZGdldFNlbmRBY3Rpb25zVG9Bbm90aGVyIChcclxuICBzZW5kTWVzc2FnZVdpZGdldElkOiBzdHJpbmcsXHJcbiAgYWN0aW9uV2lkZ2V0SWQ6IHN0cmluZyxcclxuICBtZXNzYWdlQ29uZmlnczogSW1tdXRhYmxlT2JqZWN0PE1lc3NhZ2VzSnNvbj4sXHJcbiAgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlLFxyXG4gIGFjdGlvbk5hbWVzOiBzdHJpbmdbXVxyXG4pOiBib29sZWFuIHtcclxuICBpZiAobWVzc2FnZUNvbmZpZ3MpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2VKc29uQXJyYXkgPSBPYmplY3QudmFsdWVzKG1lc3NhZ2VDb25maWdzKVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZUpzb25BcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBtZXNzYWdlSnNvbiA9IG1lc3NhZ2VKc29uQXJyYXlbaV1cclxuXHJcbiAgICAgIGlmIChtZXNzYWdlSnNvbi53aWRnZXRJZCA9PT0gc2VuZE1lc3NhZ2VXaWRnZXRJZCAmJiBtZXNzYWdlSnNvbi5tZXNzYWdlVHlwZSA9PT0gbWVzc2FnZVR5cGUpIHtcclxuICAgICAgICBjb25zdCBhY3Rpb25zID0gbWVzc2FnZUpzb24uYWN0aW9uc1xyXG5cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFjdGlvbnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IGFjdGlvbnNbal1cclxuXHJcbiAgICAgICAgICBpZiAoYWN0aW9uLndpZGdldElkID09PSBhY3Rpb25XaWRnZXRJZCkge1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uTmFtZXMuaW5jbHVkZXMoYWN0aW9uLmFjdGlvbk5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVsaWtlVmlld3BvaW50cyAodmlldzogTWFwYmFzZVZpZXcsIHZwMTogX19lc3JpLlZpZXdwb2ludCwgdnAyOiBfX2VzcmkuVmlld3BvaW50KTogYm9vbGVhbiB7XHJcbiAgaWYgKCF2cDEpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgaWYgKCF2cDIpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgLy8gV2UgbmVlZCB0byBjaGVjayBib3RoIHRhcmdldEdlb21ldHJ5IGFuZCBjYW1lcmEuXHJcbiAgaWYgKHZwMS50YXJnZXRHZW9tZXRyeSAmJiB2cDEudGFyZ2V0R2VvbWV0cnkuZGVjbGFyZWRDbGFzcyA9PT0gJ2VzcmkuZ2VvbWV0cnkuUG9pbnQnICYmIHZwMi50YXJnZXRHZW9tZXRyeSAmJiB2cDIudGFyZ2V0R2VvbWV0cnkuZGVjbGFyZWRDbGFzcyA9PT0gJ2VzcmkuZ2VvbWV0cnkuUG9pbnQnKSB7XHJcbiAgICBjb25zdCBzY3JlZW5Qb2ludDEgPSB2aWV3LnRvU2NyZWVuKHZwMS50YXJnZXRHZW9tZXRyeSBhcyBfX2VzcmkuUG9pbnQpXHJcbiAgICBjb25zdCBzY3JlZW5Qb2ludDIgPSB2aWV3LnRvU2NyZWVuKHZwMi50YXJnZXRHZW9tZXRyeSBhcyBfX2VzcmkuUG9pbnQpXHJcbiAgICBjb25zdCBkZWx0YVggPSBzY3JlZW5Qb2ludDEueCAtIHNjcmVlblBvaW50Mi54XHJcbiAgICBjb25zdCBkZWx0YVkgPSBzY3JlZW5Qb2ludDEueSAtIHNjcmVlblBvaW50Mi55XHJcbiAgICBjb25zdCBkaXN0ID0gTWF0aC5zcXJ0KGRlbHRhWCAqIGRlbHRhWCArIGRlbHRhWSAqIGRlbHRhWSlcclxuXHJcbiAgICBpZiAoZGlzdCA+PSA1KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2FtZXJhMSA9IHZwMS5jYW1lcmFcclxuICBjb25zdCBjYW1lcmEyID0gdnAyLmNhbWVyYVxyXG5cclxuICBpZiAoY2FtZXJhMSAmJiBjYW1lcmEyKSB7XHJcbiAgICAvLyBjb21wYXJlIHZpZXdwb2ludCBmb3IgU2NlbmVWaWV3XHJcbiAgICBjb25zdCBoZWFkaW5nMSA9IHBhcnNlRmxvYXQoY2FtZXJhMS5oZWFkaW5nLnRvRml4ZWQoMikpXHJcbiAgICBjb25zdCBoZWFkaW5nMiA9IHBhcnNlRmxvYXQoY2FtZXJhMi5oZWFkaW5nLnRvRml4ZWQoMikpXHJcblxyXG4gICAgaWYgKGhlYWRpbmcxICE9PSBoZWFkaW5nMikge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0aWx0MSA9IHBhcnNlRmxvYXQoY2FtZXJhMS50aWx0LnRvRml4ZWQoMikpXHJcbiAgICBjb25zdCB0aWx0MiA9IHBhcnNlRmxvYXQoY2FtZXJhMi50aWx0LnRvRml4ZWQoMikpXHJcblxyXG4gICAgaWYgKHRpbHQxICE9PSB0aWx0Mikge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwb3NpdGlvbkRpc3QgPSBjYW1lcmExLnBvc2l0aW9uLmRpc3RhbmNlKGNhbWVyYTIucG9zaXRpb24pXHJcblxyXG4gICAgaWYgKHBvc2l0aW9uRGlzdCA+PSAxKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBjb21wYXJlIHZpZXdwb2ludCBmb3IgTWFwVmlld1xyXG4gICAgY29uc3Qgcm90YXRpb24xID0gcGFyc2VGbG9hdCh2cDEucm90YXRpb24udG9GaXhlZCgyKSlcclxuICAgIGNvbnN0IHJvdGF0aW9uMiA9IHBhcnNlRmxvYXQodnAyLnJvdGF0aW9uLnRvRml4ZWQoMikpXHJcblxyXG4gICAgaWYgKHJvdGF0aW9uMSAhPT0gcm90YXRpb24yKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbHRhU2NhbGUgPSB2cDEuc2NhbGUgLSB2cDIuc2NhbGVcclxuXHJcbiAgICBpZiAoTWF0aC5hYnMoZGVsdGFTY2FsZSkgPj0gMSkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWaWV3cG9pbnRJbnN0YW5jZUZyb21IaXN0b3J5ICh2aWV3OiBNYXBiYXNlVmlldywgdmlld3BvaW50SW5kZXg6IG51bWJlcik6IF9fZXNyaS5WaWV3cG9pbnQge1xyXG4gIGlmICh2aWV3LnZpZXdwb2ludEhpc3RvcnkubGVuZ3RoID4gMCkge1xyXG4gICAgY29uc3QgbGFzdEluZGV4ID0gdmlldy52aWV3cG9pbnRIaXN0b3J5Lmxlbmd0aCAtIDFcclxuXHJcbiAgICBpZiAodmlld3BvaW50SW5kZXggPj0gMCAmJiB2aWV3cG9pbnRJbmRleCA8PSBsYXN0SW5kZXgpIHtcclxuICAgICAgY29uc3Qgdmlld3BvaW50ID0gdmlldy52aWV3cG9pbnRIaXN0b3J5W3ZpZXdwb2ludEluZGV4XVxyXG4gICAgICByZXR1cm4gdmlld3BvaW50LmNsb25lKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFwVXJsSGFzaFBhcmFtcyB7XHJcbiAgYWN0aXZlX2RhdGFzb3VyY2VfaWQ/OiBzdHJpbmdcclxuICB2aWV3cG9pbnQ/OiBzdHJpbmdcclxuICBjZW50ZXI/OiBzdHJpbmcgLy8geCx5LHdraWRcclxuICBzY2FsZT86IHN0cmluZ1xyXG4gIHJvdGF0aW9uPzogc3RyaW5nXHJcbiAgbGF5ZXJfdmlzaWJpbGl0eT86IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVXJsSGFzaFBhcmFtc0ZvckFjdGl2ZUppbXVNYXBWaWV3IChqaW11TWFwVmlldzogSmltdU1hcFZpZXcpIHtcclxuICBpZiAoamltdU1hcFZpZXcgJiYgamltdU1hcFZpZXcuaXNBY3RpdmUgJiYgamltdU1hcFZpZXcudmlldyAmJiAhamltdU1hcFZpZXcudmlldy5kZXN0cm95ZWQpIHtcclxuICAgIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldy52aWV3IGFzIE1hcGJhc2VWaWV3XHJcbiAgICBjb25zdCB1cmxNYW5hZ2VyID0gVXJsTWFuYWdlci5nZXRJbnN0YW5jZSgpXHJcbiAgICBjb25zdCB2aWV3cG9pbnRKc29uID0gdmlldy52aWV3cG9pbnQgPyB2aWV3LnZpZXdwb2ludC50b0pTT04oKSA6IG51bGxcclxuXHJcbiAgICBsZXQgdmlld3BvaW50U3RyOiBzdHJpbmcgPSBudWxsXHJcbiAgICBsZXQgY2VudGVyU3RyOiBzdHJpbmcgPSBudWxsXHJcbiAgICBsZXQgc2NhbGVTdHI6IHN0cmluZyA9IG51bGxcclxuICAgIGxldCByb3RhdGlvblN0cjogc3RyaW5nID0gbnVsbFxyXG5cclxuICAgIGlmICh2aWV3cG9pbnRKc29uKSB7XHJcbiAgICAgIHZpZXdwb2ludFN0ciA9IEpTT04uc3RyaW5naWZ5KHZpZXdwb2ludEpzb24pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2Ugb25seSBzdXBwb3J0IGNlbnRlciwgc2NhbGUgYW5kIHJvdGFpb24gZm9yIE1hcFZpZXcuXHJcbiAgICBpZiAodmlldy50eXBlID09PSAnMmQnKSB7XHJcbiAgICAgIGNvbnN0IHdraWQgPSB2aWV3LnNwYXRpYWxSZWZlcmVuY2U/LndraWRcclxuXHJcbiAgICAgIGlmICh3a2lkKSB7XHJcbiAgICAgICAgY29uc3Qgdmlld0NlbnRlciA9IHZpZXcuY2VudGVyXHJcbiAgICAgICAgY2VudGVyU3RyID0gYCR7dmlld0NlbnRlci54fSwke3ZpZXdDZW50ZXIueX0sJHt3a2lkfWBcclxuICAgICAgfVxyXG5cclxuICAgICAgc2NhbGVTdHIgPSBTdHJpbmcodmlldy5zY2FsZSlcclxuICAgICAgcm90YXRpb25TdHIgPSBTdHJpbmcodmlldy5yb3RhdGlvbilcclxuICAgIH1cclxuXHJcbiAgICB2aWV3Lmxhc3RWaWV3cG9pbnRUb1VwZGF0ZVVybFBhcmFtcyA9IHZpZXcudmlld3BvaW50ID8gdmlldy52aWV3cG9pbnQuY2xvbmUoKSA6IG51bGxcclxuICAgIHZpZXcubGFzdFZpZXdwb2ludFVybFBhcmFtVXBkYXRlVGltZXN0YW1wID0gRGF0ZS5ub3coKVxyXG5cclxuICAgIGNvbnN0IGFjdGl2ZURhdGFzb3VyY2VJZCA9IGppbXVNYXBWaWV3LmRhdGFTb3VyY2VJZCB8fCBudWxsXHJcblxyXG4gICAgY29uc3QgbWFwVXJsSGFzaFBhcmFtczogTWFwVXJsSGFzaFBhcmFtcyA9IHtcclxuICAgICAgYWN0aXZlX2RhdGFzb3VyY2VfaWQ6IGFjdGl2ZURhdGFzb3VyY2VJZCxcclxuICAgICAgY2VudGVyOiBjZW50ZXJTdHIsXHJcbiAgICAgIHNjYWxlOiBzY2FsZVN0cixcclxuICAgICAgcm90YXRpb246IHJvdGF0aW9uU3RyLFxyXG4gICAgICAvLyBpZiB2aWV3cG9pbnRTdHIgaXMgbnVsbCwgVXJsTWFuYWdlciB3aWxsIHJlbW92ZSBpdCBmcm9tIHVybFxyXG4gICAgICB2aWV3cG9pbnQ6IHZpZXdwb2ludFN0clxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKCdzZXRXaWRnZXRVcmxQYXJhbXMnLCBEYXRlLm5vdygpKVxyXG4gICAgdXJsTWFuYWdlci5zZXRXaWRnZXRVcmxQYXJhbXMoamltdU1hcFZpZXcubWFwV2lkZ2V0SWQsIG1hcFVybEhhc2hQYXJhbXMpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVybFBhcmFtc01hcE9wdGlvbnMge1xyXG4gIHZpZXdwb2ludD86IF9fZXNyaS5WaWV3cG9pbnRcclxuICBjZW50ZXI/OiBfX2VzcmkuUG9pbnRcclxuICBzY2FsZT86IG51bWJlclxyXG4gIHJvdGF0aW9uPzogbnVtYmVyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgY2hhbmdlZCB2aWV3cG9pbnQgYnkgdmlldyBhbmQgdXJsIGhhc2ggcGFyYW1zLlxyXG4gKiBSZXR1cm4gbnVsbCBpZiB2aWV3cG9pbnQgbm90IGNoYW5nZWQuXHJcbiAqIEBwYXJhbSB2aWV3XHJcbiAqIEBwYXJhbSBydW50aW1lVXJsSGFzaFBhcmFtc1xyXG4gKiBAcGFyYW0gcGFyc2VWaWV3cG9pbnRcclxuICogQHBhcmFtIHBhcnNlQ2VudGVyXHJcbiAqIEBwYXJhbSBwYXJzZVNjYWxlXHJcbiAqIEBwYXJhbSBwYXJzZVJvdGF0aW9uXHJcbiAqIEBwYXJhbSBWaWV3cG9pbnRcclxuICogQHBhcmFtIFBvaW50XHJcbiAqIEBwYXJhbSBTcGF0aWFsUmVmZXJlbmNlXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hhbmdlZFZpZXdwb2ludEJ5Vmlld0FuZFVybEhhc2hQYXJhbXMgKFxyXG4gIHZpZXc6IE1hcGJhc2VWaWV3LFxyXG4gIHJ1bnRpbWVVcmxIYXNoUGFyYW1zOiBNYXBVcmxIYXNoUGFyYW1zLFxyXG4gIHBhcnNlVmlld3BvaW50OiBib29sZWFuLFxyXG4gIHBhcnNlQ2VudGVyOiBib29sZWFuLFxyXG4gIHBhcnNlU2NhbGU6IGJvb2xlYW4sXHJcbiAgcGFyc2VSb3RhdGlvbjogYm9vbGVhbixcclxuICBWaWV3cG9pbnQ6IHR5cGVvZiBfX2VzcmkuVmlld3BvaW50LFxyXG4gIFBvaW50OiB0eXBlb2YgX19lc3JpLlBvaW50LFxyXG4gIFNwYXRpYWxSZWZlcmVuY2U6IHR5cGVvZiBfX2VzcmkuU3BhdGlhbFJlZmVyZW5jZVxyXG4pOiBfX2VzcmkuVmlld3BvaW50IHtcclxuICBsZXQgcmVzdWx0OiBfX2VzcmkuVmlld3BvaW50ID0gbnVsbFxyXG4gIGNvbnN0IGN1cnJWaWV3cG9pbnQgPSB2aWV3LnZpZXdwb2ludD8uY2xvbmUoKVxyXG4gIGNvbnN0IGlzMkQgPSB2aWV3LnR5cGUgPT09ICcyZCdcclxuXHJcbiAgaWYgKCFpczJEKSB7XHJcbiAgICBwYXJzZUNlbnRlciA9IGZhbHNlXHJcbiAgICBwYXJzZVNjYWxlID0gZmFsc2VcclxuICAgIHBhcnNlUm90YXRpb24gPSBmYWxzZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdXJsUGFyYW1zTWFwT3B0aW9ucyA9IGdldE1hcE9wdGlvbnNCeVVybEhhc2hQYXJhbXMocnVudGltZVVybEhhc2hQYXJhbXMsIGlzMkQsIFZpZXdwb2ludCwgUG9pbnQsIFNwYXRpYWxSZWZlcmVuY2UpXHJcblxyXG4gIGlmICh1cmxQYXJhbXNNYXBPcHRpb25zKSB7XHJcbiAgICBpZiAoIXBhcnNlVmlld3BvaW50KSB7XHJcbiAgICAgIGRlbGV0ZSB1cmxQYXJhbXNNYXBPcHRpb25zLnZpZXdwb2ludFxyXG4gICAgfVxyXG5cclxuICAgIGlmICghcGFyc2VDZW50ZXIpIHtcclxuICAgICAgZGVsZXRlIHVybFBhcmFtc01hcE9wdGlvbnMuY2VudGVyXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFwYXJzZVNjYWxlKSB7XHJcbiAgICAgIGRlbGV0ZSB1cmxQYXJhbXNNYXBPcHRpb25zLnNjYWxlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFwYXJzZVJvdGF0aW9uKSB7XHJcbiAgICAgIGRlbGV0ZSB1cmxQYXJhbXNNYXBPcHRpb25zLnJvdGF0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE9iamVjdC5rZXlzKHVybFBhcmFtc01hcE9wdGlvbnMpLmxlbmd0aCA+IDApIHtcclxuICAgICAgaWYgKGlzMkQpIHtcclxuICAgICAgICByZXN1bHQgPSB1cmxQYXJhbXNNYXBPcHRpb25zLnZpZXdwb2ludCB8fCBjdXJyVmlld3BvaW50XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgIGlmICh1cmxQYXJhbXNNYXBPcHRpb25zLmNlbnRlcikge1xyXG4gICAgICAgICAgICByZXN1bHQudGFyZ2V0R2VvbWV0cnkgPSB1cmxQYXJhbXNNYXBPcHRpb25zLmNlbnRlclxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICgnc2NhbGUnIGluIHVybFBhcmFtc01hcE9wdGlvbnMpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnNjYWxlID0gdXJsUGFyYW1zTWFwT3B0aW9ucy5zY2FsZVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICgncm90YXRpb24nIGluIHVybFBhcmFtc01hcE9wdGlvbnMpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnJvdGF0aW9uID0gdXJsUGFyYW1zTWFwT3B0aW9ucy5yb3RhdGlvblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHQgPSB1cmxQYXJhbXNNYXBPcHRpb25zLnZpZXdwb2ludFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXBPcHRpb25zQnlVcmxIYXNoUGFyYW1zIChcclxuICBydW50aW1lVXJsSGFzaFBhcmFtczogTWFwVXJsSGFzaFBhcmFtcyxcclxuICBpczJEOiBib29sZWFuLFxyXG4gIFZpZXdwb2ludDogdHlwZW9mIF9fZXNyaS5WaWV3cG9pbnQsXHJcbiAgUG9pbnQ6IHR5cGVvZiBfX2VzcmkuUG9pbnQsXHJcbiAgU3BhdGlhbFJlZmVyZW5jZTogdHlwZW9mIF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlXHJcbik6IFVybFBhcmFtc01hcE9wdGlvbnMge1xyXG4gIGxldCByZXN1bHQ6IFVybFBhcmFtc01hcE9wdGlvbnMgPSB7fVxyXG4gIGxldCB2aWV3cG9pbnQ6IF9fZXNyaS5WaWV3cG9pbnQgPSBudWxsXHJcbiAgbGV0IGNlbnRlcjogX19lc3JpLlBvaW50ID0gbnVsbFxyXG4gIGxldCBzY2FsZTogbnVtYmVyID0gbnVsbFxyXG4gIGxldCByb3RhdGlvbjogbnVtYmVyID0gbnVsbFxyXG5cclxuICBpZiAocnVudGltZVVybEhhc2hQYXJhbXMpIHtcclxuICAgIC8vIHBhcnNlIHZpZXdwb2ludFxyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHJ1bnRpbWVVcmxIYXNoUGFyYW1zLnZpZXdwb2ludCkge1xyXG4gICAgICAgIGNvbnN0IHZpZXdwb2ludEpzb24gPSBKU09OLnBhcnNlKHJ1bnRpbWVVcmxIYXNoUGFyYW1zLnZpZXdwb2ludClcclxuXHJcbiAgICAgICAgaWYgKHZpZXdwb2ludEpzb24pIHtcclxuICAgICAgICAgIHZpZXdwb2ludCA9IFZpZXdwb2ludC5mcm9tSlNPTih2aWV3cG9pbnRKc29uKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdwYXJzZSB2aWV3cG9pbnQgZnJvbSB1cmwgaGFzaCBwYXJhbXMgZXJyb3InLCBlKVxyXG4gICAgICB2aWV3cG9pbnQgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgLy8gb25seSBzdXBwb3J0IGNlbnRlciwgc2NhbGUgYW5kIHJvdGF0aW9uIGZvciBNYXBWaWV3XHJcbiAgICBpZiAoaXMyRCkge1xyXG4gICAgICAvLyBwYXJzZSBjZW50ZXJcclxuICAgICAgLy8gY2VudGVyIGZvcm1hdDogeCx5LHdraWRcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAocnVudGltZVVybEhhc2hQYXJhbXMuY2VudGVyKSB7XHJcbiAgICAgICAgICBjb25zdCBzcGxpdHMgPSBydW50aW1lVXJsSGFzaFBhcmFtcy5jZW50ZXIuc3BsaXQoJywnKVxyXG5cclxuICAgICAgICAgIGlmIChzcGxpdHMubGVuZ3RoID49IDMpIHtcclxuICAgICAgICAgICAgY29uc3QgeCA9IHBhcnNlRmxvYXQoc3BsaXRzWzBdKVxyXG4gICAgICAgICAgICBjb25zdCB5ID0gcGFyc2VGbG9hdChzcGxpdHNbMV0pXHJcbiAgICAgICAgICAgIGNvbnN0IHdraWQgPSBwYXJzZUZsb2F0KHNwbGl0c1syXSlcclxuXHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkTnVtKHgpICYmIGlzVmFsaWROdW0oeSkgJiYgaXNWYWxpZE51bSh3a2lkKSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNwYXRpYWxSZWZlcmVuY2UgPSBuZXcgU3BhdGlhbFJlZmVyZW5jZSh7XHJcbiAgICAgICAgICAgICAgICB3a2lkXHJcbiAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgY2VudGVyID0gbmV3IFBvaW50KHtcclxuICAgICAgICAgICAgICAgIHgsXHJcbiAgICAgICAgICAgICAgICB5LFxyXG4gICAgICAgICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdwYXJzZSBjZW50ZXIgZnJvbSB1cmwgaGFzaCBwYXJhbXMgZXJyb3InLCBlKVxyXG4gICAgICAgIGNlbnRlciA9IG51bGxcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gcGFyc2Ugc2NhbGVcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAoJ3NjYWxlJyBpbiBydW50aW1lVXJsSGFzaFBhcmFtcykge1xyXG4gICAgICAgICAgY29uc3Qgc2NhbGVOdW0gPSBwYXJzZUZsb2F0KHJ1bnRpbWVVcmxIYXNoUGFyYW1zLnNjYWxlKVxyXG5cclxuICAgICAgICAgIGlmIChpc1ZhbGlkTnVtKHNjYWxlTnVtKSAmJiBzY2FsZU51bSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHNjYWxlID0gc2NhbGVOdW1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBzY2FsZSA9IG51bGxcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdwYXJzZSBzY2FsZSBmcm9tIHVybCBoYXNoIHBhcmFtcyBlcnJvcicsIGUpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHBhcnNlIHJvdGF0aW9uXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKCdyb3RhdGlvbicgaW4gcnVudGltZVVybEhhc2hQYXJhbXMpIHtcclxuICAgICAgICAgIGNvbnN0IHJvdGF0aW9uTnVtID0gcGFyc2VGbG9hdChydW50aW1lVXJsSGFzaFBhcmFtcy5yb3RhdGlvbilcclxuXHJcbiAgICAgICAgICBpZiAoaXNWYWxpZE51bShyb3RhdGlvbk51bSkgJiYgcm90YXRpb25OdW0gPj0gMCAmJiByb3RhdGlvbk51bSA8PSAzNjApIHtcclxuICAgICAgICAgICAgcm90YXRpb24gPSByb3RhdGlvbk51bVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJvdGF0aW9uID0gbnVsbFxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3BhcnNlIHJvdGF0aW9uIGZyb20gdXJsIGhhc2ggcGFyYW1zIGVycm9yJywgZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHZpZXdwb2ludCkge1xyXG4gICAgcmVzdWx0LnZpZXdwb2ludCA9IHZpZXdwb2ludFxyXG4gIH1cclxuXHJcbiAgLy8gb25seSBzdXBwb3J0IGNlbnRlciwgc2NhbGUgYW5kIHJvdGF0aW9uIGZvciBNYXBWaWV3XHJcbiAgaWYgKGlzMkQpIHtcclxuICAgIGlmIChjZW50ZXIpIHtcclxuICAgICAgcmVzdWx0LmNlbnRlciA9IGNlbnRlclxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1ZhbGlkTnVtKHNjYWxlKSkge1xyXG4gICAgICByZXN1bHQuc2NhbGUgPSBzY2FsZVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1ZhbGlkTnVtKHJvdGF0aW9uKSkge1xyXG4gICAgICByZXN1bHQucm90YXRpb24gPSByb3RhdGlvblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKE9iamVjdC5rZXlzKHJlc3VsdCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXN1bHQgPSBudWxsXHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVmFsaWROdW0gKHZhbHVlOiBudW1iZXIpIHtcclxuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsdWUpXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcclxuICB0eXBlIERhdGFSZWNvcmRTZXQsXHJcbiAgdHlwZSBGZWF0dXJlRGF0YVJlY29yZCxcclxuICB0eXBlIERhdGFTb3VyY2UsXHJcbiAgdHlwZSBKU0FQSUxheWVyTWl4aW4sXHJcbiAgdHlwZSBEYXRhUmVjb3JkLFxyXG4gIEFic3RyYWN0RGF0YUFjdGlvbixcclxuICBEYXRhU291cmNlU3RhdHVzLFxyXG4gIE11dGFibGVTdG9yZU1hbmFnZXIsXHJcbiAgRGF0YUxldmVsXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBsb2FkQXJjR0lTSlNBUElNb2R1bGVzLCB0eXBlIFpvb21Ub09wdGlvbnMgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHsgY2xvbmVGZWF0dXJlIH0gZnJvbSAnLi4vcnVudGltZS91dGlscydcclxuaW1wb3J0IHsgdHlwZSBab29tVG9HcmFwaGljc0ludGVybmFsVmFsdWUsIHR5cGUgWm9vbVRvQXJyYXlHcmFwaGljc0ludGVybmFsVmFsdWUgfSBmcm9tICcuLi9tZXNzYWdlLWFjdGlvbnMvem9vbS10by1mZWF0dXJlLWFjdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb21UbyBleHRlbmRzIEFic3RyYWN0RGF0YUFjdGlvbiB7XHJcbiAgLyoqXHJcbiAgICogWm9vbVRvIGRhdGEgYWN0aW9uIHN1cHBvcnRzIGJvdGggRGF0YVNvdXJjZSBkYXRhIGxldmVsIGFuZCBSZWNvcmRzIGRhdGEgbGV2ZWwuXHJcbiAgICogc3VwcG9ydGVkIGNhc2VzOlxyXG4gICAqIGNhc2UxOiBkYXRhU2V0cy5sZW5ndGggPT09IDEgYW5kIGRhdGFMZXZlbCBpcyBEQVRBX1NPVVJDRVxyXG4gICAqIGNhc2UyOiBkYXRhU2V0cy5sZW5ndGggPT09IDEgYW5kIGRhdGFMZXZlbCBpcyBSRUNPUkRTXHJcbiAgICogY2FzZTM6IGRhdGFTZXRzLmxlbmd0aCA+PSAyIGFuZCBkYXRhTGV2ZWwgaXMgUkVDT1JEU1xyXG4gICAqL1xyXG4gIGFzeW5jIGlzU3VwcG9ydGVkIChkYXRhU2V0czogRGF0YVJlY29yZFNldFtdLCBkYXRhTGV2ZWw6IERhdGFMZXZlbCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3Qgc3VwcG9ydGVkRGF0YVNldHMgPSB0aGlzLmdldFN1cHBvcnRlZERhdGFTZXRzKGRhdGFTZXRzLCBkYXRhTGV2ZWwpXHJcblxyXG4gICAgaWYgKHN1cHBvcnRlZERhdGFTZXRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAvLyBjYXNlMSwgY2FzZTJcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0gZWxzZSBpZiAoc3VwcG9ydGVkRGF0YVNldHMubGVuZ3RoID49IDIpIHtcclxuICAgICAgLy8gY2FzZTNcclxuICAgICAgcmV0dXJuIGRhdGFMZXZlbCA9PT0gRGF0YUxldmVsLlJlY29yZHNcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U3VwcG9ydGVkRGF0YVNldHMgKGRhdGFTZXRzOiBEYXRhUmVjb3JkU2V0W10sIGRhdGFMZXZlbDogRGF0YUxldmVsKTogRGF0YVJlY29yZFNldFtdIHtcclxuICAgIGNvbnN0IHN1cHBvcnRlZERhdGFTZXRzID0gZGF0YVNldHMuZmlsdGVyKGRhdGFTZXQgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhU291cmNlID0gZGF0YVNldC5kYXRhU291cmNlIGFzIERhdGFTb3VyY2UgJiBKU0FQSUxheWVyTWl4aW5cclxuXHJcbiAgICAgIGlmICghZGF0YVNvdXJjZSB8fCBkYXRhU291cmNlLmdldFN0YXR1cygpID09PSBEYXRhU291cmNlU3RhdHVzLk5vdFJlYWR5KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHJlY29yZHMgbWF5YmUgY29tZSBmcm9tIGEgdGFibGUsIHNvIHdlIG5lZWQgdG8gY2hlY2sgaWYgdGhlIGRhdGFTb3VyY2UgaGFzIGdlb21ldHJ5IG9yIG5vdFxyXG4gICAgICBjb25zdCBzdXBwb3J0U3BhdGlhbEluZm8gPSBkYXRhU291cmNlPy5zdXBwb3J0U3BhdGlhbEluZm8gJiYgZGF0YVNvdXJjZT8uc3VwcG9ydFNwYXRpYWxJbmZvKClcclxuXHJcbiAgICAgIGlmICghc3VwcG9ydFNwYXRpYWxJbmZvKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChkYXRhTGV2ZWwgPT09IERhdGFMZXZlbC5SZWNvcmRzKSB7XHJcbiAgICAgICAgLy8gem9vbSB0byBncmFwaGljc1xyXG4gICAgICAgIGNvbnN0IHJlY29yZHMgPSB0aGlzLmdldFJlY29yZHMoZGF0YVNldCwgZGF0YUxldmVsKVxyXG4gICAgICAgIHJldHVybiByZWNvcmRzLmxlbmd0aCA+IDBcclxuICAgICAgfSBlbHNlIGlmIChkYXRhTGV2ZWwgPT09IERhdGFMZXZlbC5EYXRhU291cmNlKSB7XHJcbiAgICAgICAgLy8gem9vbSB0byBsYXllclxyXG4gICAgICAgIHJldHVybiAhIWRhdGFTb3VyY2U/LmNyZWF0ZUpTQVBJTGF5ZXJCeURhdGFTb3VyY2VcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBzdXBwb3J0ZWREYXRhU2V0c1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRSZWNvcmRzIChkYXRhU2V0OiBEYXRhUmVjb3JkU2V0LCBkYXRhTGV2ZWw6IERhdGFMZXZlbCk6IERhdGFSZWNvcmRbXSB7XHJcbiAgICBsZXQgcmVzdWx0OiBEYXRhUmVjb3JkW10gPSBbXVxyXG5cclxuICAgIGlmIChkYXRhTGV2ZWwgPT09IERhdGFMZXZlbC5EYXRhU291cmNlKSB7XHJcbiAgICAgIHJlc3VsdCA9IFtdXHJcbiAgICB9IGVsc2UgaWYgKGRhdGFMZXZlbCA9PT0gRGF0YUxldmVsLlJlY29yZHMgJiYgZGF0YVNldC5yZWNvcmRzPy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJlc3VsdCA9IGRhdGFTZXQucmVjb3Jkc1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q2xvbmVkRmVhdHVyZXMgKGRhdGFTZXQ6IERhdGFSZWNvcmRTZXQsIGRhdGFMZXZlbDogRGF0YUxldmVsLCBHcmFwaGljOiB0eXBlb2YgX19lc3JpLkdyYXBoaWMpOiBfX2VzcmkuR3JhcGhpY1tdIHtcclxuICAgIGNvbnN0IHJlY29yZHMgPSB0aGlzLmdldFJlY29yZHMoZGF0YVNldCwgZGF0YUxldmVsKVxyXG4gICAgY29uc3QgY2xvbmVkRmVhdHVyZXMgPSByZWNvcmRzLm1hcChyZWNvcmQgPT4gY2xvbmVGZWF0dXJlKChyZWNvcmQgYXMgRmVhdHVyZURhdGFSZWNvcmQpLmZlYXR1cmUsIEdyYXBoaWMpKVxyXG4gICAgcmV0dXJuIGNsb25lZEZlYXR1cmVzXHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkV4ZWN1dGUgKGRhdGFTZXRzOiBEYXRhUmVjb3JkU2V0W10sIGRhdGFMZXZlbDogRGF0YUxldmVsKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBjb25zdCBtb2R1bGVzID0gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbJ2VzcmkvR3JhcGhpYyddKVxyXG4gICAgY29uc3QgW0dyYXBoaWNdID0gbW9kdWxlcyBhcyBbdHlwZW9mIF9fZXNyaS5HcmFwaGljXVxyXG4gICAgY29uc3Qgc3VwcG9ydGVkRGF0YVNldHMgPSB0aGlzLmdldFN1cHBvcnRlZERhdGFTZXRzKGRhdGFTZXRzLCBkYXRhTGV2ZWwpXHJcbiAgICBjb25zdCB6b29tVG9PcHRpb246IFpvb21Ub09wdGlvbnMgPSB7XHJcbiAgICAgIHBhZGRpbmc6IHtcclxuICAgICAgICBsZWZ0OiA1MCxcclxuICAgICAgICByaWdodDogNTAsXHJcbiAgICAgICAgdG9wOiA1MCxcclxuICAgICAgICBib3R0b206IDUwXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3VwcG9ydGVkRGF0YVNldHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIC8vIGNhc2UxLCBjYXNlMlxyXG4gICAgICBjb25zdCBkYXRhU2V0ID0gc3VwcG9ydGVkRGF0YVNldHNbMF1cclxuICAgICAgY29uc3QgY2xvbmVkRmVhdHVyZXMgPSB0aGlzLmdldENsb25lZEZlYXR1cmVzKGRhdGFTZXQsIGRhdGFMZXZlbCwgR3JhcGhpYylcclxuXHJcbiAgICAgIGNvbnN0IGZlYXR1cmVBY3Rpb25WYWx1ZTogWm9vbVRvR3JhcGhpY3NJbnRlcm5hbFZhbHVlID0ge1xyXG4gICAgICAgIHR5cGU6ICd6b29tLXRvLWdyYXBoaWNzJyxcclxuICAgICAgICBmZWF0dXJlczogY2xvbmVkRmVhdHVyZXMsXHJcbiAgICAgICAgZGF0YVNvdXJjZUlkOiBkYXRhU2V0LmRhdGFTb3VyY2U/LmlkIHx8IG51bGwsXHJcbiAgICAgICAgem9vbVRvT3B0aW9uXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsICd6b29tVG9GZWF0dXJlQWN0aW9uVmFsdWUudmFsdWUnLCBmZWF0dXJlQWN0aW9uVmFsdWUpXHJcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnRlZERhdGFTZXRzLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgIC8vIGNhc2UzXHJcbiAgICAgIGNvbnN0IGFycmF5RmVhdHVyZXM6IF9fZXNyaS5HcmFwaGljW11bXSA9IFtdXHJcblxyXG4gICAgICBzdXBwb3J0ZWREYXRhU2V0cy5mb3JFYWNoKGRhdGFTZXQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNsb25lZEZlYXR1cmVzID0gdGhpcy5nZXRDbG9uZWRGZWF0dXJlcyhkYXRhU2V0LCBkYXRhTGV2ZWwsIEdyYXBoaWMpXHJcbiAgICAgICAgYXJyYXlGZWF0dXJlcy5wdXNoKGNsb25lZEZlYXR1cmVzKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgY29uc3QgZmVhdHVyZUFjdGlvblZhbHVlOiBab29tVG9BcnJheUdyYXBoaWNzSW50ZXJuYWxWYWx1ZSA9IHtcclxuICAgICAgICB0eXBlOiAnem9vbS10by1hcnJheS1ncmFwaGljcycsXHJcbiAgICAgICAgYXJyYXlGZWF0dXJlcyxcclxuICAgICAgICB6b29tVG9PcHRpb25cclxuICAgICAgfVxyXG5cclxuICAgICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgJ3pvb21Ub0ZlYXR1cmVBY3Rpb25WYWx1ZS52YWx1ZScsIGZlYXR1cmVBY3Rpb25WYWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=