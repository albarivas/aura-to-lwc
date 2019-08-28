({
	onFilterChange : function(component, event, helper) {
		helper.fireFilterChangeEvent(component);
	},

	onReset: function (component, event, helper) {
		component.set("v.searchKey", '');
		component.set("v.numberBedrooms", 0);
		component.set("v.numberBathrooms", 0);
		helper.fireFilterChangeEvent(component);
	}
})