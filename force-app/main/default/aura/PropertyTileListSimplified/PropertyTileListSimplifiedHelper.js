({
	getProperties: function (component, pageNumber) {
		var action = component.get("c.getPropertyList");
		action.setParams({
				"searchKey": component.get("v.searchKey"),
				"numberBedrooms": component.get("v.numberBedrooms"),
				"numberBathrooms": component.get("v.numberBathrooms")
		});
		action.setCallback(this, function (response) {
			if (response.getState() === "SUCCESS") {
				component.set("v.properties", response.getReturnValue());
			} else {
				var errors = response.getError();
				if (errors) {
					if (errors[0] && errors[0].message) {
						component.set("v.error","Error message: " + errors[0].message);
					}
				} else {
					component.set("v.error","Unknown error");
				}
			}
		});
		$A.enqueueAction(action);
	}
})