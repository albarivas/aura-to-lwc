import { LightningElement, wire } from 'lwc';
import getPropertyList from '@salesforce/apex/MyPropertyController.getPropertyList';

export default class PropertyTileListLwcStep5 extends LightningElement {
	searchKey = '';
	numberBedrooms = '0';
	numberBathrooms = '0';

	@wire(getPropertyList, {
		searchKey: '$searchKey',
		numberBedrooms: '$numberBedrooms',
		numberBathrooms: '$numberBathrooms'
	})
	houses;
}