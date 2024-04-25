System.register(["jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!**************************************************************************************!*\
  !*** ./your-extensions/widgets/map-unscrollable/src/message-actions/flash-action.ts ***!
  \**************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FlashAction)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

class FlashAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {
    filterMessageDescription(messageDescription) {
        return messageDescription.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange;
    }
    filterMessage(message) {
        return true;
    }
    onExecute(message, actionConfig) {
        switch (message.type) {
            case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange:
                if (message.records.length === 0) {
                    break;
                }
                let flashActionValue = null;
                if (actionConfig) {
                    if (actionConfig.messageUseDataSource && actionConfig.actionUseDataSource) {
                        if (message.records.length > 0 &&
                            message.records[0].dataSource.getMainDataSource().id !== actionConfig.messageUseDataSource.mainDataSourceId) {
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'flashActionValue', null);
                            break;
                        }
                        // Framework makes sure the following data sources are available before call onExecute() method.
                        const messageDataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(actionConfig.messageUseDataSource.mainDataSourceId);
                        const actionDataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(actionConfig.actionUseDataSource.mainDataSourceId);
                        if (messageDataSource && actionDataSource) {
                            // when ds instances exit
                            if (actionConfig.enabledDataRelationShip) {
                                // use DataRelationShip
                                let messageField = null;
                                let actionField = null;
                                if (actionConfig.messageUseDataSource.mainDataSourceId === actionConfig.actionUseDataSource.mainDataSourceId &&
                                    actionConfig.messageUseDataSource.rootDataSourceId === actionConfig.actionUseDataSource.rootDataSourceId) {
                                    // if trigger ds is same to action ds
                                    const messageDsSchema = messageDataSource.getSchema();
                                    const objectIdJimuFieldName = messageDsSchema && messageDsSchema.fields &&
                                        Object.keys(messageDsSchema.fields).find(jimuFieldName => messageDsSchema.fields[jimuFieldName].esriType === 'esriFieldTypeOID');
                                    messageField = messageDsSchema && messageDsSchema.fields && messageDsSchema.fields[objectIdJimuFieldName];
                                    actionField = messageField;
                                }
                                else {
                                    // if trigger ds isn't same to action ds
                                    const messageJimuFieldName = actionConfig.messageUseDataSource.fields[0];
                                    const actionJimuFieldName = actionConfig.actionUseDataSource.fields[0];
                                    messageField = messageDataSource.getSchema().fields[messageJimuFieldName];
                                    actionField = actionDataSource.getSchema().fields[actionJimuFieldName];
                                }
                                let whereSql = '';
                                if (messageField && actionField) {
                                    const messageFieldName = messageField.name;
                                    const messageFieldType = messageField.type;
                                    const tempMessage = message;
                                    const messageFieldValues = [];
                                    for (let i = 0; i < tempMessage.records.length; i++) {
                                        const tempFieldValue = tempMessage.records[i].getData()[messageFieldName];
                                        if (messageFieldValues.includes(`${this.formatValue(tempFieldValue, messageFieldType)}`)) {
                                            continue;
                                        }
                                        else {
                                            messageFieldValues.push(`${this.formatValue(tempMessage.records[i].getData()[messageFieldName], messageFieldType)}`);
                                        }
                                    }
                                    whereSql = `${actionField.name} IN `;
                                    if (messageFieldValues.length > 0) {
                                        whereSql = whereSql + `(${messageFieldValues.join(', ')})`;
                                    }
                                    else {
                                        whereSql = '';
                                    }
                                }
                                if (message.records.length > 0) {
                                    const moreAditionSQL = actionConfig.sqlExprObj ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getArcGISSQL(actionConfig.sqlExprObj, actionDataSource).sql : null;
                                    if (moreAditionSQL) {
                                        if (whereSql) {
                                            whereSql = whereSql + ' AND ' + moreAditionSQL;
                                        }
                                        else {
                                            whereSql = moreAditionSQL;
                                        }
                                    }
                                }
                                else {
                                    whereSql = '';
                                }
                                const query = {
                                    outFields: [],
                                    where: whereSql,
                                    returnGeometry: true
                                };
                                const realQuery = actionDataSource.getRealQueryParams(query, 'query');
                                flashActionValue = {
                                    layerDataSourceId: actionDataSource && actionDataSource.id,
                                    querySQL: realQuery && realQuery.where
                                };
                            }
                            else {
                                // not use DataRelationShip
                                let whereSql = '';
                                if (message.records.length > 0) {
                                    const moreAditionSQL = actionConfig.sqlExprObj ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getArcGISSQL(actionConfig.sqlExprObj, actionDataSource).sql : null;
                                    if (moreAditionSQL) {
                                        whereSql = moreAditionSQL;
                                    }
                                }
                                else {
                                    whereSql = '';
                                }
                                const query = {
                                    outFields: [],
                                    where: whereSql,
                                    returnGeometry: true
                                };
                                const realQuery = actionDataSource.getRealQueryParams(query, 'query');
                                flashActionValue = {
                                    layerDataSourceId: actionDataSource && actionDataSource.id,
                                    querySQL: realQuery && realQuery.where
                                };
                            }
                        }
                        else {
                            // when ds instances don't exist
                            flashActionValue = null;
                        }
                    }
                    else {
                        flashActionValue = null;
                    }
                }
                const actionKey = `flashActionValue-${flashActionValue === null || flashActionValue === void 0 ? void 0 : flashActionValue.layerDataSourceId}`;
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, actionKey, flashActionValue);
                break;
        }
        return true;
    }
    getLayerIdFromLayerDs(ds) {
        if (ds.layerId) {
            return ds.layerId;
        }
        else if (ds.layer) {
            return ds.layer.id;
        }
        else {
            return null;
        }
    }
    formatValue(value, type) {
        if (type === 'STRING') {
            return `'${value}'`;
        }
        else if (type === 'NUMBER') {
            return `${value}`;
        }
        else if (type === 'DATE') {
            return `'${value}'`;
        }
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXAtdW5zY3JvbGxhYmxlL2Rpc3QvbWVzc2FnZS1hY3Rpb25zL2ZsYXNoLWFjdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDSGtCO0FBSUgsTUFBTSxXQUFZLFNBQVEsNERBQXFCO0lBQzVELHdCQUF3QixDQUFFLGtCQUFzQztRQUM5RCxPQUFPLGtCQUFrQixDQUFDLFdBQVcsS0FBSyxrREFBVyxDQUFDLDBCQUEwQjtJQUNsRixDQUFDO0lBRUQsYUFBYSxDQUFFLE9BQWdCO1FBQzdCLE9BQU8sSUFBSTtJQUNiLENBQUM7SUFFRCxTQUFTLENBQUUsT0FBZ0IsRUFBRSxZQUF1QjtRQUNsRCxRQUFRLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNyQixLQUFLLGtEQUFXLENBQUMsMEJBQTBCO2dCQUN6QyxJQUFLLE9BQTZDLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztvQkFDeEUsTUFBSztnQkFDUCxDQUFDO2dCQUVELElBQUksZ0JBQWdCLEdBQW9ELElBQUk7Z0JBQzVFLElBQUksWUFBWSxFQUFFLENBQUM7b0JBQ2pCLElBQUksWUFBWSxDQUFDLG9CQUFvQixJQUFJLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO3dCQUMxRSxJQUFLLE9BQTZDLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDOzRCQUNsRSxPQUE2QyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLEtBQUssWUFBWSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixFQUFFLENBQUM7NEJBQ3JKLDBEQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDOzRCQUMzRixNQUFLO3dCQUNQLENBQUM7d0JBRUQsZ0dBQWdHO3dCQUNoRyxNQUFNLGlCQUFpQixHQUFHLHdEQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUM7d0JBQzNILE1BQU0sZ0JBQWdCLEdBQUcsd0RBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQzt3QkFFekgsSUFBSSxpQkFBaUIsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDOzRCQUMxQyx5QkFBeUI7NEJBQ3pCLElBQUksWUFBWSxDQUFDLHVCQUF1QixFQUFFLENBQUM7Z0NBQ3pDLHVCQUF1QjtnQ0FDdkIsSUFBSSxZQUFZLEdBQWlDLElBQUk7Z0NBQ3JELElBQUksV0FBVyxHQUFpQyxJQUFJO2dDQUVwRCxJQUFJLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsS0FBSyxZQUFZLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCO29DQUMxRyxZQUFZLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLEtBQUssWUFBWSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLENBQUM7b0NBQzNHLHFDQUFxQztvQ0FDckMsTUFBTSxlQUFlLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxFQUFFO29DQUNyRCxNQUFNLHFCQUFxQixHQUFHLGVBQWUsSUFBSSxlQUFlLENBQUMsTUFBTTt3Q0FDckUsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLEtBQUssa0JBQWtCLENBQUM7b0NBQ2xJLFlBQVksR0FBRyxlQUFlLElBQUksZUFBZSxDQUFDLE1BQU0sSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDO29DQUN6RyxXQUFXLEdBQUcsWUFBWTtnQ0FDNUIsQ0FBQztxQ0FBTSxDQUFDO29DQUNOLHdDQUF3QztvQ0FDeEMsTUFBTSxvQkFBb0IsR0FBRyxZQUFZLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQ0FDeEUsTUFBTSxtQkFBbUIsR0FBRyxZQUFZLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQ0FDdEUsWUFBWSxHQUFHLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztvQ0FDekUsV0FBVyxHQUFHLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztnQ0FDeEUsQ0FBQztnQ0FFRCxJQUFJLFFBQVEsR0FBRyxFQUFFO2dDQUNqQixJQUFJLFlBQVksSUFBSSxXQUFXLEVBQUUsQ0FBQztvQ0FDaEMsTUFBTSxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsSUFBSTtvQ0FDMUMsTUFBTSxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsSUFBSTtvQ0FFMUMsTUFBTSxXQUFXLEdBQXNDLE9BQTRDO29DQUNuRyxNQUFNLGtCQUFrQixHQUFHLEVBQUU7b0NBRTdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dDQUNwRCxNQUFNLGNBQWMsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO3dDQUN6RSxJQUFJLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7NENBQ3pGLFNBQVE7d0NBQ1YsQ0FBQzs2Q0FBTSxDQUFDOzRDQUNOLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLEVBQUUsQ0FBQzt3Q0FDdEgsQ0FBQztvQ0FDSCxDQUFDO29DQUVELFFBQVEsR0FBRyxHQUFHLFdBQVcsQ0FBQyxJQUFJLE1BQU07b0NBRXBDLElBQUksa0JBQWtCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO3dDQUNsQyxRQUFRLEdBQUcsUUFBUSxHQUFHLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO29DQUM1RCxDQUFDO3lDQUFNLENBQUM7d0NBQ04sUUFBUSxHQUFHLEVBQUU7b0NBQ2YsQ0FBQztnQ0FDSCxDQUFDO2dDQUVELElBQUssT0FBNkMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO29DQUN0RSxNQUFNLGNBQWMsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxzREFBZSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJO29DQUNuSSxJQUFJLGNBQWMsRUFBRSxDQUFDO3dDQUNuQixJQUFJLFFBQVEsRUFBRSxDQUFDOzRDQUNiLFFBQVEsR0FBRyxRQUFRLEdBQUcsT0FBTyxHQUFHLGNBQWM7d0NBQ2hELENBQUM7NkNBQU0sQ0FBQzs0Q0FDTixRQUFRLEdBQUcsY0FBYzt3Q0FDM0IsQ0FBQztvQ0FDSCxDQUFDO2dDQUNILENBQUM7cUNBQU0sQ0FBQztvQ0FDTixRQUFRLEdBQUcsRUFBRTtnQ0FDZixDQUFDO2dDQUVELE1BQU0sS0FBSyxHQUFHO29DQUNaLFNBQVMsRUFBRSxFQUFFO29DQUNiLEtBQUssRUFBRSxRQUFRO29DQUNmLGNBQWMsRUFBRSxJQUFJO2lDQUNyQjtnQ0FFRCxNQUFNLFNBQVMsR0FBSSxnQkFBb0UsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO2dDQUUxSCxnQkFBZ0IsR0FBRztvQ0FDakIsaUJBQWlCLEVBQUUsZ0JBQWdCLElBQUksZ0JBQWdCLENBQUMsRUFBRTtvQ0FDMUQsUUFBUSxFQUFFLFNBQVMsSUFBSSxTQUFTLENBQUMsS0FBSztpQ0FDdkM7NEJBQ0gsQ0FBQztpQ0FBTSxDQUFDO2dDQUNOLDJCQUEyQjtnQ0FDM0IsSUFBSSxRQUFRLEdBQUcsRUFBRTtnQ0FFakIsSUFBSyxPQUE2QyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7b0NBQ3RFLE1BQU0sY0FBYyxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLHNEQUFlLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUk7b0NBQ25JLElBQUksY0FBYyxFQUFFLENBQUM7d0NBQ25CLFFBQVEsR0FBRyxjQUFjO29DQUMzQixDQUFDO2dDQUNILENBQUM7cUNBQU0sQ0FBQztvQ0FDTixRQUFRLEdBQUcsRUFBRTtnQ0FDZixDQUFDO2dDQUVELE1BQU0sS0FBSyxHQUFHO29DQUNaLFNBQVMsRUFBRSxFQUFFO29DQUNiLEtBQUssRUFBRSxRQUFRO29DQUNmLGNBQWMsRUFBRSxJQUFJO2lDQUNyQjtnQ0FFRCxNQUFNLFNBQVMsR0FBSSxnQkFBb0UsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO2dDQUUxSCxnQkFBZ0IsR0FBRztvQ0FDakIsaUJBQWlCLEVBQUUsZ0JBQWdCLElBQUksZ0JBQWdCLENBQUMsRUFBRTtvQ0FDMUQsUUFBUSxFQUFFLFNBQVMsSUFBSSxTQUFTLENBQUMsS0FBSztpQ0FDdkM7NEJBQ0gsQ0FBQzt3QkFDSCxDQUFDOzZCQUFNLENBQUM7NEJBQ04sZ0NBQWdDOzRCQUNoQyxnQkFBZ0IsR0FBRyxJQUFJO3dCQUN6QixDQUFDO29CQUNILENBQUM7eUJBQU0sQ0FBQzt3QkFDTixnQkFBZ0IsR0FBRyxJQUFJO29CQUN6QixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsTUFBTSxTQUFTLEdBQUcsb0JBQW9CLGdCQUFnQixhQUFoQixnQkFBZ0IsdUJBQWhCLGdCQUFnQixDQUFFLGlCQUFpQixFQUFFO2dCQUMzRSwwREFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDOUYsTUFBSztRQUNULENBQUM7UUFFRCxPQUFPLElBQUk7SUFDYixDQUFDO0lBRUQscUJBQXFCLENBQUUsRUFBbUQ7UUFDeEUsSUFBSyxFQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDeEIsT0FBUSxFQUE2QixDQUFDLE9BQU87UUFDL0MsQ0FBQzthQUFNLElBQUssRUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdCLE9BQVEsRUFBNkIsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNoRCxDQUFDO2FBQU0sQ0FBQztZQUNOLE9BQU8sSUFBSTtRQUNiLENBQUM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFFLEtBQUssRUFBRSxJQUFZO1FBQzlCLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQ3RCLE9BQU8sSUFBSSxLQUFLLEdBQUc7UUFDckIsQ0FBQzthQUFNLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQzdCLE9BQU8sR0FBRyxLQUFLLEVBQUU7UUFDbkIsQ0FBQzthQUFNLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRSxDQUFDO1lBQzNCLE9BQU8sSUFBSSxLQUFLLEdBQUc7UUFDckIsQ0FBQztJQUNILENBQUM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXAtdW5zY3JvbGxhYmxlL3NyYy9tZXNzYWdlLWFjdGlvbnMvZmxhc2gtYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XHJcbiAgQWJzdHJhY3RNZXNzYWdlQWN0aW9uLCBNZXNzYWdlVHlwZSwgdHlwZSBNZXNzYWdlLCB0eXBlIEZpZWxkU2NoZW1hLFxyXG4gIHR5cGUgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlLCBEYXRhU291cmNlTWFuYWdlciwgdHlwZSBGZWF0dXJlUXVlcnlEYXRhU291cmNlLCB0eXBlIEltbXV0YWJsZU9iamVjdCwgZGF0YVNvdXJjZVV0aWxzLCBNdXRhYmxlU3RvcmVNYW5hZ2VyLCB0eXBlIE1lc3NhZ2VEZXNjcmlwdGlvblxyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBGZWF0dXJlTGF5ZXJEYXRhU291cmNlIH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9tZXNzYWdlLWFjdGlvbnMvZmxhc2gtYWN0aW9uLXNldHRpbmcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbGFzaEFjdGlvbiBleHRlbmRzIEFic3RyYWN0TWVzc2FnZUFjdGlvbiB7XHJcbiAgZmlsdGVyTWVzc2FnZURlc2NyaXB0aW9uIChtZXNzYWdlRGVzY3JpcHRpb246IE1lc3NhZ2VEZXNjcmlwdGlvbik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG1lc3NhZ2VEZXNjcmlwdGlvbi5tZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VcclxuICB9XHJcblxyXG4gIGZpbHRlck1lc3NhZ2UgKG1lc3NhZ2U6IE1lc3NhZ2UpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBvbkV4ZWN1dGUgKG1lc3NhZ2U6IE1lc3NhZ2UsIGFjdGlvbkNvbmZpZz86IElNQ29uZmlnKTogUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xyXG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcclxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5EYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZTpcclxuICAgICAgICBpZiAoKG1lc3NhZ2UgYXMgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlKS5yZWNvcmRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBmbGFzaEFjdGlvblZhbHVlOiB7IGxheWVyRGF0YVNvdXJjZUlkOiBzdHJpbmcsIHF1ZXJ5U1FMOiBzdHJpbmcgfSA9IG51bGxcclxuICAgICAgICBpZiAoYWN0aW9uQ29uZmlnKSB7XHJcbiAgICAgICAgICBpZiAoYWN0aW9uQ29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlICYmIGFjdGlvbkNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlKSB7XHJcbiAgICAgICAgICAgIGlmICgobWVzc2FnZSBhcyBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UpLnJlY29yZHMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgIChtZXNzYWdlIGFzIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSkucmVjb3Jkc1swXS5kYXRhU291cmNlLmdldE1haW5EYXRhU291cmNlKCkuaWQgIT09IGFjdGlvbkNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkKSB7XHJcbiAgICAgICAgICAgICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgJ2ZsYXNoQWN0aW9uVmFsdWUnLCBudWxsKVxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEZyYW1ld29yayBtYWtlcyBzdXJlIHRoZSBmb2xsb3dpbmcgZGF0YSBzb3VyY2VzIGFyZSBhdmFpbGFibGUgYmVmb3JlIGNhbGwgb25FeGVjdXRlKCkgbWV0aG9kLlxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlRGF0YVNvdXJjZSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShhY3Rpb25Db25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UubWFpbkRhdGFTb3VyY2VJZClcclxuICAgICAgICAgICAgY29uc3QgYWN0aW9uRGF0YVNvdXJjZSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShhY3Rpb25Db25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkKVxyXG5cclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhU291cmNlICYmIGFjdGlvbkRhdGFTb3VyY2UpIHtcclxuICAgICAgICAgICAgICAvLyB3aGVuIGRzIGluc3RhbmNlcyBleGl0XHJcbiAgICAgICAgICAgICAgaWYgKGFjdGlvbkNvbmZpZy5lbmFibGVkRGF0YVJlbGF0aW9uU2hpcCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdXNlIERhdGFSZWxhdGlvblNoaXBcclxuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlRmllbGQ6IEltbXV0YWJsZU9iamVjdDxGaWVsZFNjaGVtYT4gPSBudWxsXHJcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uRmllbGQ6IEltbXV0YWJsZU9iamVjdDxGaWVsZFNjaGVtYT4gPSBudWxsXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbkNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkID09PSBhY3Rpb25Db25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkICYmXHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbkNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZS5yb290RGF0YVNvdXJjZUlkID09PSBhY3Rpb25Db25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5yb290RGF0YVNvdXJjZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGlmIHRyaWdnZXIgZHMgaXMgc2FtZSB0byBhY3Rpb24gZHNcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZURzU2NoZW1hID0gbWVzc2FnZURhdGFTb3VyY2UuZ2V0U2NoZW1hKClcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0SWRKaW11RmllbGROYW1lID0gbWVzc2FnZURzU2NoZW1hICYmIG1lc3NhZ2VEc1NjaGVtYS5maWVsZHMgJiZcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhtZXNzYWdlRHNTY2hlbWEuZmllbGRzKS5maW5kKGppbXVGaWVsZE5hbWUgPT4gbWVzc2FnZURzU2NoZW1hLmZpZWxkc1tqaW11RmllbGROYW1lXS5lc3JpVHlwZSA9PT0gJ2VzcmlGaWVsZFR5cGVPSUQnKVxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlRmllbGQgPSBtZXNzYWdlRHNTY2hlbWEgJiYgbWVzc2FnZURzU2NoZW1hLmZpZWxkcyAmJiBtZXNzYWdlRHNTY2hlbWEuZmllbGRzW29iamVjdElkSmltdUZpZWxkTmFtZV1cclxuICAgICAgICAgICAgICAgICAgYWN0aW9uRmllbGQgPSBtZXNzYWdlRmllbGRcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGlmIHRyaWdnZXIgZHMgaXNuJ3Qgc2FtZSB0byBhY3Rpb24gZHNcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUppbXVGaWVsZE5hbWUgPSBhY3Rpb25Db25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UuZmllbGRzWzBdXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbkppbXVGaWVsZE5hbWUgPSBhY3Rpb25Db25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5maWVsZHNbMF1cclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZUZpZWxkID0gbWVzc2FnZURhdGFTb3VyY2UuZ2V0U2NoZW1hKCkuZmllbGRzW21lc3NhZ2VKaW11RmllbGROYW1lXVxyXG4gICAgICAgICAgICAgICAgICBhY3Rpb25GaWVsZCA9IGFjdGlvbkRhdGFTb3VyY2UuZ2V0U2NoZW1hKCkuZmllbGRzW2FjdGlvbkppbXVGaWVsZE5hbWVdXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHdoZXJlU3FsID0gJydcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlRmllbGQgJiYgYWN0aW9uRmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUZpZWxkTmFtZSA9IG1lc3NhZ2VGaWVsZC5uYW1lXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VGaWVsZFR5cGUgPSBtZXNzYWdlRmllbGQudHlwZVxyXG5cclxuICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcE1lc3NhZ2U6IERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSA9IG1lc3NhZ2UgYXMgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VGaWVsZFZhbHVlcyA9IFtdXHJcblxyXG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXBNZXNzYWdlLnJlY29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wRmllbGRWYWx1ZSA9IHRlbXBNZXNzYWdlLnJlY29yZHNbaV0uZ2V0RGF0YSgpW21lc3NhZ2VGaWVsZE5hbWVdXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VGaWVsZFZhbHVlcy5pbmNsdWRlcyhgJHt0aGlzLmZvcm1hdFZhbHVlKHRlbXBGaWVsZFZhbHVlLCBtZXNzYWdlRmllbGRUeXBlKX1gKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUZpZWxkVmFsdWVzLnB1c2goYCR7dGhpcy5mb3JtYXRWYWx1ZSh0ZW1wTWVzc2FnZS5yZWNvcmRzW2ldLmdldERhdGEoKVttZXNzYWdlRmllbGROYW1lXSwgbWVzc2FnZUZpZWxkVHlwZSl9YClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHdoZXJlU3FsID0gYCR7YWN0aW9uRmllbGQubmFtZX0gSU4gYFxyXG5cclxuICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VGaWVsZFZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmVTcWwgPSB3aGVyZVNxbCArIGAoJHttZXNzYWdlRmllbGRWYWx1ZXMuam9pbignLCAnKX0pYFxyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlU3FsID0gJydcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgobWVzc2FnZSBhcyBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UpLnJlY29yZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBtb3JlQWRpdGlvblNRTCA9IGFjdGlvbkNvbmZpZy5zcWxFeHByT2JqID8gZGF0YVNvdXJjZVV0aWxzLmdldEFyY0dJU1NRTChhY3Rpb25Db25maWcuc3FsRXhwck9iaiwgYWN0aW9uRGF0YVNvdXJjZSkuc3FsIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICBpZiAobW9yZUFkaXRpb25TUUwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2hlcmVTcWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdoZXJlU3FsID0gd2hlcmVTcWwgKyAnIEFORCAnICsgbW9yZUFkaXRpb25TUUxcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2hlcmVTcWwgPSBtb3JlQWRpdGlvblNRTFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgd2hlcmVTcWwgPSAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgICBvdXRGaWVsZHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICB3aGVyZTogd2hlcmVTcWwsXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybkdlb21ldHJ5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVhbFF1ZXJ5ID0gKGFjdGlvbkRhdGFTb3VyY2UgYXMgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSB8IEZlYXR1cmVRdWVyeURhdGFTb3VyY2UpLmdldFJlYWxRdWVyeVBhcmFtcyhxdWVyeSwgJ3F1ZXJ5JylcclxuXHJcbiAgICAgICAgICAgICAgICBmbGFzaEFjdGlvblZhbHVlID0ge1xyXG4gICAgICAgICAgICAgICAgICBsYXllckRhdGFTb3VyY2VJZDogYWN0aW9uRGF0YVNvdXJjZSAmJiBhY3Rpb25EYXRhU291cmNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICBxdWVyeVNRTDogcmVhbFF1ZXJ5ICYmIHJlYWxRdWVyeS53aGVyZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBub3QgdXNlIERhdGFSZWxhdGlvblNoaXBcclxuICAgICAgICAgICAgICAgIGxldCB3aGVyZVNxbCA9ICcnXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKChtZXNzYWdlIGFzIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSkucmVjb3Jkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1vcmVBZGl0aW9uU1FMID0gYWN0aW9uQ29uZmlnLnNxbEV4cHJPYmogPyBkYXRhU291cmNlVXRpbHMuZ2V0QXJjR0lTU1FMKGFjdGlvbkNvbmZpZy5zcWxFeHByT2JqLCBhY3Rpb25EYXRhU291cmNlKS5zcWwgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgIGlmIChtb3JlQWRpdGlvblNRTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlU3FsID0gbW9yZUFkaXRpb25TUUxcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgd2hlcmVTcWwgPSAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgICBvdXRGaWVsZHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICB3aGVyZTogd2hlcmVTcWwsXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybkdlb21ldHJ5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVhbFF1ZXJ5ID0gKGFjdGlvbkRhdGFTb3VyY2UgYXMgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSB8IEZlYXR1cmVRdWVyeURhdGFTb3VyY2UpLmdldFJlYWxRdWVyeVBhcmFtcyhxdWVyeSwgJ3F1ZXJ5JylcclxuXHJcbiAgICAgICAgICAgICAgICBmbGFzaEFjdGlvblZhbHVlID0ge1xyXG4gICAgICAgICAgICAgICAgICBsYXllckRhdGFTb3VyY2VJZDogYWN0aW9uRGF0YVNvdXJjZSAmJiBhY3Rpb25EYXRhU291cmNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICBxdWVyeVNRTDogcmVhbFF1ZXJ5ICYmIHJlYWxRdWVyeS53aGVyZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyB3aGVuIGRzIGluc3RhbmNlcyBkb24ndCBleGlzdFxyXG4gICAgICAgICAgICAgIGZsYXNoQWN0aW9uVmFsdWUgPSBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZsYXNoQWN0aW9uVmFsdWUgPSBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFjdGlvbktleSA9IGBmbGFzaEFjdGlvblZhbHVlLSR7Zmxhc2hBY3Rpb25WYWx1ZT8ubGF5ZXJEYXRhU291cmNlSWR9YFxyXG4gICAgICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsIGFjdGlvbktleSwgZmxhc2hBY3Rpb25WYWx1ZSlcclxuICAgICAgICBicmVha1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBnZXRMYXllcklkRnJvbUxheWVyRHMgKGRzOiBGZWF0dXJlTGF5ZXJEYXRhU291cmNlIHwgRmVhdHVyZVF1ZXJ5RGF0YVNvdXJjZSkge1xyXG4gICAgaWYgKChkcyBhcyBhbnkpLmxheWVySWQpIHtcclxuICAgICAgcmV0dXJuIChkcyBhcyBGZWF0dXJlUXVlcnlEYXRhU291cmNlKS5sYXllcklkXHJcbiAgICB9IGVsc2UgaWYgKChkcyBhcyBhbnkpLmxheWVyKSB7XHJcbiAgICAgIHJldHVybiAoZHMgYXMgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSkubGF5ZXIuaWRcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JtYXRWYWx1ZSAodmFsdWUsIHR5cGU6IHN0cmluZykge1xyXG4gICAgaWYgKHR5cGUgPT09ICdTVFJJTkcnKSB7XHJcbiAgICAgIHJldHVybiBgJyR7dmFsdWV9J2BcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ05VTUJFUicpIHtcclxuICAgICAgcmV0dXJuIGAke3ZhbHVlfWBcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0RBVEUnKSB7XHJcbiAgICAgIHJldHVybiBgJyR7dmFsdWV9J2BcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9