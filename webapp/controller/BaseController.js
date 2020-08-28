sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
],function(Controller,UIComponent) {
	"use strict";
	 return Controller.extend("SAPUI5_P2.controller.BaseController", {
		getGlobalModel: function(sName){
			return this.getOwnerComponent().getModel(sName);	
		},
		getModel: function(){
			return this.getView().getModel();
		},
		setModel: function(oModel){
			return this.getView().setModel(oModel);	
		},
		getRouter: function(){
			return UIComponent.getRouterFor(this);
		},	
		isOnline: function(){
			return (navigator.onLine);
		}
	});
});