({
	fireFilterChangeEvent : function(component) {
		var filterChangeEvent = $A.get("e.c:PropertyFilterChange");
		filterChangeEvent.setParams({
			"searchKey": component.get("v.searchKey"),
			"numberBedrooms": component.get("v.numberBedrooms"),
			"numberBathrooms": component.get("v.numberBathrooms")
		});
		filterChangeEvent.fire();
	}
})
