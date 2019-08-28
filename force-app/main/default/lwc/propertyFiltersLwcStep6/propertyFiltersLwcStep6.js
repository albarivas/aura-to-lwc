import { LightningElement, track, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

export default class PropertyFiltersLwcStep6 extends LightningElement {
	@track searchKey = ''; // Need to be tracked because of reset
	@track numberBedrooms = 0;
	@track numberBathrooms = 0;

	@wire(CurrentPageReference) pageRef;

	handleSearchKeyChange(event) {
		this.searchKey = event.detail.value;
		this.fireFilterChangeEvent();
	}

	handleNumberBedroomsChange(event) {
		this.numberBedrooms = event.detail.value;
		this.fireFilterChangeEvent();
	}

	handleNumberBathroomsChange(event) {
		this.numberBathrooms = event.detail.value;
		this.fireFilterChangeEvent();
	}

	handleReset() {
		this.searchKey = '';
		this.numberBedrooms = 0;
		this.numberBathrooms = 0;
		this.fireFilterChangeEvent();
	}

	fireFilterChangeEvent() {
		fireEvent(this.pageRef, 'filterchange', {
			'searchKey': this.searchKey,
			'numberBedrooms': this.numberBedrooms,
			'numberBathrooms': this.numberBathrooms,
		});
	}
}