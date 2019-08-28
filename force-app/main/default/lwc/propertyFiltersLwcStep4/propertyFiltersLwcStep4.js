import { LightningElement, track } from 'lwc';

export default class PropertyFiltersLwcStep4 extends LightningElement {
	@track searchKey = '';
	@track numberBedrooms = 0;
	@track numberBathrooms = 0;

	handleSearchKeyChange(event) {
		this.searchKey = event.detail.value;
	}

	handleNumberBedroomsChange(event) {
		this.numberBedrooms = event.detail.value;
	}

	handleNumberBathroomsChange(event) {
		this.numberBathrooms = event.detail.value;
	}

	handleReset() {
		this.searchKey = '';
		this.numberBedrooms = 0;
		this.numberBathrooms = 0;
	}
}