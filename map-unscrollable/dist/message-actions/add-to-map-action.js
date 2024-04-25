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
/*!*******************************************************************************************!*\
  !*** ./your-extensions/widgets/map-unscrollable/src/message-actions/add-to-map-action.ts ***!
  \*******************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddToMapAction)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");


class AddToMapAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {
    filterMessageDescription(messageDescription) {
        if (messageDescription.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourcesChange) {
            return true;
        }
        else {
            return false;
        }
    }
    filterMessage(message) {
        return true;
    }
    onRemoveListen(messageType, messageWidgetId) {
        var _a;
        const addToMapDatas = ((_a = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.widgetId])) === null || _a === void 0 ? void 0 : _a.addToMapDatas) || {};
        const newAddToMapDatas = {};
        Object.entries(addToMapDatas).forEach(entry => {
            var _a;
            if (((_a = entry[1]) === null || _a === void 0 ? void 0 : _a.messageWidgetId) !== messageWidgetId) {
                newAddToMapDatas[entry[0]] = entry[1]; //*********
            }
        });
        // save action data
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'addToMapDatas', newAddToMapDatas);
    }
    //getSettingComponentUri (messageType: MessageType, messageWidgetId?: string): string {
    //  return 'message-actions/show-on-map-action-setting'
    //}
    onExecute(message, actionConfig) {
        var _a;
        const activeViewId = this._getActiveViewId(this.widgetId, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().jimuMapViewsInfo);
        const defaultViewId = this._getDefaultViewId(this.widgetId, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().jimuMapViewsInfo);
        const jimuMapViewId = activeViewId || defaultViewId;
        const addToMapDatas = ((_a = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.widgetId])) === null || _a === void 0 ? void 0 : _a.addToMapDatas) || {};
        message.dataSources.forEach(dataSourceParam => {
            var _a;
            const dataSource = dataSourceParam;
            if (!dataSource.supportSpatialInfo || !dataSource.supportSpatialInfo()) {
                return;
            }
            const jimuMapView = activeViewId && jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.MapViewManager.getInstance().getJimuMapViewById(activeViewId);
            if ((dataSource.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SceneLayer || dataSource.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SceneService) && ((_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.type) === '2d') {
                // add a scene layer to a 2d map
                return;
            }
            const idBase = `${jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ADD_TO_MAP_DATA_ID_PREFIX}messageAction_${this.widgetId}_${dataSource.id}_`;
            const idTemporary = `${idBase}???`;
            const id = activeViewId ? `${idBase}${activeViewId}` : idTemporary;
            if (defaultViewId && defaultViewId === activeViewId) {
                // allow to add data using a temporary id, temporary id data will be deleted if can get activeViewId
                if (addToMapDatas[idTemporary]) {
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, `addToMapDatas.${idTemporary}.dataChangeType`, jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataChangeType.Remove);
                }
            }
            addToMapDatas[id] = {
                mapWidgetId: this.widgetId,
                messageWidgetId: message.widgetId,
                // Set jimuMapViewId to null means the data will be shared between all jimuMapViews of one mapWidget
                jimuMapViewId: jimuMapViewId, // activeViewId,
                dataSourceId: dataSource.id,
                type: jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ActionType.MessageAction,
                dataChangeType: message.changeType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourcesChangeType.Remove ? jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataChangeType.Remove : jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataChangeType.Create,
                dataChangeStatus: message.changeType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourcesChangeType.Remove ? jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataChangeStatus.Fulfilled : jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataChangeStatus.Pending,
                title: id // 'add to map message ...'
            };
        });
        // save action data
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'addToMapDatas', addToMapDatas);
        return Promise.resolve(true);
    }
    _getActiveViewId(mapWidgetId, infos) {
        return Object.keys(infos || {}).find(viewId => infos[viewId].mapWidgetId === mapWidgetId && infos[viewId].isActive);
    }
    _getDefaultViewId(mapWidgetId, infos) {
        return Object.keys(infos || {}).find(viewId => infos[viewId].mapWidgetId === mapWidgetId);
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXAtdW5zY3JvbGxhYmxlL2Rpc3QvbWVzc2FnZS1hY3Rpb25zL2FkZC10by1tYXAtYWN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDSGtCO0FBQ3VIO0FBRTFILE1BQU0sY0FBZSxTQUFRLDREQUFxQjtJQUMvRCx3QkFBd0IsQ0FBRSxrQkFBc0M7UUFDOUQsSUFBSSxrQkFBa0IsQ0FBQyxXQUFXLEtBQUssa0RBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3JFLE9BQU8sSUFBSTtRQUNiLENBQUM7YUFBTSxDQUFDO1lBQ04sT0FBTyxLQUFLO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFFRCxhQUFhLENBQUUsT0FBZ0I7UUFDN0IsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUVELGNBQWMsQ0FBRSxXQUF3QixFQUFFLGVBQXdCOztRQUNoRSxNQUFNLGFBQWEsR0FBa0IsaUVBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLDBDQUFFLGFBQWEsS0FBSSxFQUFFO1FBQzFILE1BQU0sZ0JBQWdCLEdBQUcsRUFBRTtRQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTs7WUFDNUMsSUFB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QUM5QixjQUFjLEVBQUUsT0FBTyxDQUFDLFVBQVUsS0FBSyw0REFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHVEQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyx1REFBYyxDQUFDLE1BQU07Z0JBQ25ILGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxVQUFVLEtBQUssNERBQXFCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyx5REFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLHlEQUFnQixDQUFDLE9BQU87Z0JBQzdILEtBQUssRUFBRSxFQUFFLENBQUMsMkJBQTJCO2FBQ3RDO1FBQ0gsQ0FBQyxDQUFDO1FBRUYsbUJBQW1CO1FBQ25CLDBEQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQztRQUNqRyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFTyxnQkFBZ0IsQ0FBRSxXQUFtQixFQUFFLEtBQW9FO1FBQ2pILE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsS0FBSyxXQUFXLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUNySCxDQUFDO0lBRU8saUJBQWlCLENBQUUsV0FBbUIsRUFBRSxLQUFvRTtRQUNsSCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDO0lBQzNGLENBQUM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWFwLXVuc2Nyb2xsYWJsZS9zcmMvbWVzc2FnZS1hY3Rpb25zL2FkZC10by1tYXAtYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XHJcbiAgQWJzdHJhY3RNZXNzYWdlQWN0aW9uLCBNZXNzYWdlVHlwZSwgdHlwZSBNZXNzYWdlLCB0eXBlIERhdGFTb3VyY2VzQ2hhbmdlTWVzc2FnZSwgRGF0YVNvdXJjZXNDaGFuZ2VUeXBlLCBNdXRhYmxlU3RvcmVNYW5hZ2VyLFxyXG4gIGdldEFwcFN0b3JlLCB0eXBlIEltbXV0YWJsZU9iamVjdCwgdHlwZSBKaW11TWFwVmlld0luZm8sIHR5cGUgTWVzc2FnZURlc2NyaXB0aW9uLCB0eXBlIERhdGFTb3VyY2UsIERhdGFTb3VyY2VUeXBlcywgdHlwZSBKU0FQSUxheWVyTWl4aW5cclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IEFERF9UT19NQVBfREFUQV9JRF9QUkVGSVgsIEFjdGlvblR5cGUsIHR5cGUgQWRkVG9NYXBEYXRhcywgRGF0YUNoYW5nZVR5cGUsIERhdGFDaGFuZ2VTdGF0dXMsIE1hcFZpZXdNYW5hZ2VyIH0gZnJvbSAnamltdS1hcmNnaXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRUb01hcEFjdGlvbiBleHRlbmRzIEFic3RyYWN0TWVzc2FnZUFjdGlvbiB7XHJcbiAgZmlsdGVyTWVzc2FnZURlc2NyaXB0aW9uIChtZXNzYWdlRGVzY3JpcHRpb246IE1lc3NhZ2VEZXNjcmlwdGlvbik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKG1lc3NhZ2VEZXNjcmlwdGlvbi5tZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRGF0YVNvdXJjZXNDaGFuZ2UpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmlsdGVyTWVzc2FnZSAobWVzc2FnZTogTWVzc2FnZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIG9uUmVtb3ZlTGlzdGVuIChtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsIG1lc3NhZ2VXaWRnZXRJZD86IHN0cmluZykge1xyXG4gICAgY29uc3QgYWRkVG9NYXBEYXRhczogQWRkVG9NYXBEYXRhcyA9IE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRTdGF0ZVZhbHVlKFt0aGlzLndpZGdldElkXSk/LmFkZFRvTWFwRGF0YXMgfHwge31cclxuICAgIGNvbnN0IG5ld0FkZFRvTWFwRGF0YXMgPSB7fVxyXG4gICAgT2JqZWN0LmVudHJpZXMoYWRkVG9NYXBEYXRhcykuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAgIGlmIChlbnRyeVsxXT8ubWVzc2FnZVdpZGdldElkICE9PSBtZXNzYWdlV2lkZ2V0SWQpIHtcclxuICAgICAgICBuZXdBZGRUb01hcERhdGFzW2VudHJ5WzBdXSA9IGVudHJ5WzFdIC8vKioqKioqKioqXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvLyBzYXZlIGFjdGlvbiBkYXRhXHJcbiAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZSh0aGlzLndpZGdldElkLCAnYWRkVG9NYXBEYXRhcycsIG5ld0FkZFRvTWFwRGF0YXMpXHJcbiAgfVxyXG5cclxuICAvL2dldFNldHRpbmdDb21wb25lbnRVcmkgKG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSwgbWVzc2FnZVdpZGdldElkPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAvLyAgcmV0dXJuICdtZXNzYWdlLWFjdGlvbnMvc2hvdy1vbi1tYXAtYWN0aW9uLXNldHRpbmcnXHJcbiAgLy99XHJcblxyXG4gIG9uRXhlY3V0ZSAobWVzc2FnZTogRGF0YVNvdXJjZXNDaGFuZ2VNZXNzYWdlLCBhY3Rpb25Db25maWc/OiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XHJcbiAgICBjb25zdCBhY3RpdmVWaWV3SWQgPSB0aGlzLl9nZXRBY3RpdmVWaWV3SWQodGhpcy53aWRnZXRJZCwgZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmppbXVNYXBWaWV3c0luZm8pXHJcbiAgICBjb25zdCBkZWZhdWx0Vmlld0lkID0gdGhpcy5fZ2V0RGVmYXVsdFZpZXdJZCh0aGlzLndpZGdldElkLCBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuamltdU1hcFZpZXdzSW5mbylcclxuICAgIGNvbnN0IGppbXVNYXBWaWV3SWQgPSBhY3RpdmVWaWV3SWQgfHwgZGVmYXVsdFZpZXdJZFxyXG4gICAgY29uc3QgYWRkVG9NYXBEYXRhcyA9IE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRTdGF0ZVZhbHVlKFt0aGlzLndpZGdldElkXSk/LmFkZFRvTWFwRGF0YXMgfHwge31cclxuXHJcbiAgICBtZXNzYWdlLmRhdGFTb3VyY2VzLmZvckVhY2goZGF0YVNvdXJjZVBhcmFtID0+IHtcclxuICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2VQYXJhbSBhcyBEYXRhU291cmNlICYgSlNBUElMYXllck1peGluXHJcbiAgICAgIGlmICghZGF0YVNvdXJjZS5zdXBwb3J0U3BhdGlhbEluZm8gfHwgIWRhdGFTb3VyY2Uuc3VwcG9ydFNwYXRpYWxJbmZvKCkpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBqaW11TWFwVmlldyA9IGFjdGl2ZVZpZXdJZCAmJiBNYXBWaWV3TWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldEppbXVNYXBWaWV3QnlJZChhY3RpdmVWaWV3SWQpXHJcbiAgICAgIGlmICgoZGF0YVNvdXJjZS50eXBlID09PSBEYXRhU291cmNlVHlwZXMuU2NlbmVMYXllciB8fCBkYXRhU291cmNlLnR5cGUgPT09IERhdGFTb3VyY2VUeXBlcy5TY2VuZVNlcnZpY2UpICYmIGppbXVNYXBWaWV3Py52aWV3Py50eXBlID09PSAnMmQnKSB7XHJcbiAgICAgICAgLy8gYWRkIGEgc2NlbmUgbGF5ZXIgdG8gYSAyZCBtYXBcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBpZEJhc2UgPSBgJHtBRERfVE9fTUFQX0RBVEFfSURfUFJFRklYfW1lc3NhZ2VBY3Rpb25fJHt0aGlzLndpZGdldElkfV8ke2RhdGFTb3VyY2UuaWR9X2BcclxuICAgICAgY29uc3QgaWRUZW1wb3JhcnkgPSBgJHtpZEJhc2V9Pz8/YFxyXG4gICAgICBjb25zdCBpZCA9IGFjdGl2ZVZpZXdJZCA/IGAke2lkQmFzZX0ke2FjdGl2ZVZpZXdJZH1gIDogaWRUZW1wb3JhcnlcclxuXHJcbiAgICAgIGlmIChkZWZhdWx0Vmlld0lkICYmIGRlZmF1bHRWaWV3SWQgPT09IGFjdGl2ZVZpZXdJZCkge1xyXG4gICAgICAgIC8vIGFsbG93IHRvIGFkZCBkYXRhIHVzaW5nIGEgdGVtcG9yYXJ5IGlkLCB0ZW1wb3JhcnkgaWQgZGF0YSB3aWxsIGJlIGRlbGV0ZWQgaWYgY2FuIGdldCBhY3RpdmVWaWV3SWRcclxuICAgICAgICBpZiAoYWRkVG9NYXBEYXRhc1tpZFRlbXBvcmFyeV0pIHtcclxuICAgICAgICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsIGBhZGRUb01hcERhdGFzLiR7aWRUZW1wb3Jhcnl9LmRhdGFDaGFuZ2VUeXBlYCwgRGF0YUNoYW5nZVR5cGUuUmVtb3ZlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgYWRkVG9NYXBEYXRhc1tpZF0gPSB7XHJcbiAgICAgICAgbWFwV2lkZ2V0SWQ6IHRoaXMud2lkZ2V0SWQsXHJcbiAgICAgICAgbWVzc2FnZVdpZGdldElkOiBtZXNzYWdlLndpZGdldElkLFxyXG4gICAgICAgIC8vIFNldCBqaW11TWFwVmlld0lkIHRvIG51bGwgbWVhbnMgdGhlIGRhdGEgd2lsbCBiZSBzaGFyZWQgYmV0d2VlbiBhbGwgamltdU1hcFZpZXdzIG9mIG9uZSBtYXBXaWRnZXRcclxuICAgICAgICBqaW11TWFwVmlld0lkOiBqaW11TWFwVmlld0lkLCAvLyBhY3RpdmVWaWV3SWQsXHJcbiAgICAgICAgZGF0YVNvdXJjZUlkOiBkYXRhU291cmNlLmlkLFxyXG4gICAgICAgIHR5cGU6IEFjdGlvblR5cGUuTWVzc2FnZUFjdGlvbixcclxuICAgICAgICBkYXRhQ2hhbmdlVHlwZTogbWVzc2FnZS5jaGFuZ2VUeXBlID09PSBEYXRhU291cmNlc0NoYW5nZVR5cGUuUmVtb3ZlID8gRGF0YUNoYW5nZVR5cGUuUmVtb3ZlIDogRGF0YUNoYW5nZVR5cGUuQ3JlYXRlLFxyXG4gICAgICAgIGRhdGFDaGFuZ2VTdGF0dXM6IG1lc3NhZ2UuY2hhbmdlVHlwZSA9PT0gRGF0YVNvdXJjZXNDaGFuZ2VUeXBlLlJlbW92ZSA/IERhdGFDaGFuZ2VTdGF0dXMuRnVsZmlsbGVkIDogRGF0YUNoYW5nZVN0YXR1cy5QZW5kaW5nLFxyXG4gICAgICAgIHRpdGxlOiBpZCAvLyAnYWRkIHRvIG1hcCBtZXNzYWdlIC4uLidcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBzYXZlIGFjdGlvbiBkYXRhXHJcbiAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZSh0aGlzLndpZGdldElkLCAnYWRkVG9NYXBEYXRhcycsIGFkZFRvTWFwRGF0YXMpXHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRBY3RpdmVWaWV3SWQgKG1hcFdpZGdldElkOiBzdHJpbmcsIGluZm9zOiBJbW11dGFibGVPYmplY3Q8eyBbamltdU1hcFZpZXdJZDogc3RyaW5nXTogSmltdU1hcFZpZXdJbmZvIH0+KTogc3RyaW5nIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhpbmZvcyB8fCB7fSkuZmluZCh2aWV3SWQgPT4gaW5mb3Nbdmlld0lkXS5tYXBXaWRnZXRJZCA9PT0gbWFwV2lkZ2V0SWQgJiYgaW5mb3Nbdmlld0lkXS5pc0FjdGl2ZSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldERlZmF1bHRWaWV3SWQgKG1hcFdpZGdldElkOiBzdHJpbmcsIGluZm9zOiBJbW11dGFibGVPYmplY3Q8eyBbamltdU1hcFZpZXdJZDogc3RyaW5nXTogSmltdU1hcFZpZXdJbmZvIH0+KTogc3RyaW5nIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhpbmZvcyB8fCB7fSkuZmluZCh2aWV3SWQgPT4gaW5mb3Nbdmlld0lkXS5tYXBXaWRnZXRJZCA9PT0gbWFwV2lkZ2V0SWQpXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==