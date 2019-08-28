({
	doInit: function(component, event, helper) {
		helper.getProperties(component);
	},

	onFilterChange: function(component, event, helper) {
		component.set("v.searchKey", event.getParam("searchKey"));
		component.set("v.numberBedrooms", event.getParam("numberBedrooms"));
		component.set("v.numberBathrooms", event.getParam("numberBathrooms"));
		helper.getProperties(component);
	}
})