import { LightningElement, wire } from 'lwc';
import getPropertyList from '@salesforce/apex/MyPropertyController.getPropertyList';
import {subscribe, createMessageContext, releaseMessageContext, APPLICATION_SCOPE} from 'lightning/messageService';
import PROPERTYFILTERSMC from "@salesforce/messageChannel/PropertyFilters__c";

export default class PropertyTileListLwcStep6 extends LightningElement {
    searchKey = '';
    numberBedrooms = '0';
    numberBathrooms = '0';
    subscription = null;
    context = createMessageContext();

    @wire(getPropertyList, {
        searchKey: '$searchKey',
        numberBedrooms: '$numberBedrooms',
        numberBathrooms: '$numberBathrooms'
    })
    properties;

    connectedCallback() {
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(
            this.context,
            PROPERTYFILTERSMC, (message) => {
                this.handleFilterChange(message);
            },
            {scope: APPLICATION_SCOPE}
        );
	}

	handleFilterChange(message) {
		this.searchKey = message.searchKey;
		this.numberBedrooms = message.numberBedrooms;
		this.numberBathrooms = message.numberBathrooms;
    }
    
    disconnectedCallback() {
        releaseMessageContext(this.context); // Will unsubscribe all subscriptions behind the scenes.
    }
}