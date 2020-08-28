sap.ui.define([
	"./BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("SAPUI5_P2.controller.SmartTable", {
		onInit: function(){
			var oModel= this.getGlobalModel("SmartTable");
			this.setModel(oModel);
		}
	

	});

});