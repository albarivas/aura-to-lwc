import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import getPropertyList from '@salesforce/apex/MyPropertyController.getPropertyList';

export default class PropertyTileListLwcStep6 extends LightningElement {
	searchKey = '';
	numberBedrooms = '0';
	numberBathrooms = '0';

	@wire(CurrentPageReference) pageRef;

	@wire(getPropertyList, {
		searchKey: '$searchKey',
		numberBedrooms: '$numberBedrooms',
		numberBathrooms: '$numberBathrooms'
	})
	houses;

	connectedCallback() {
		registerListener('filterchange', this.handleFilterChange, this);
	}

	disconnectedCallback() {
		unregisterAllListeners(this);
	}

	handleFilterChange(payload) {
		this.searchKey = payload.searchKey;
		this.numberBedrooms = payload.numberBedrooms;
		this.numberBathrooms = payload.numberBathrooms;
	}
}