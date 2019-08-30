import { LightningElement, wire } from 'lwc';
import getPropertyList from '@salesforce/apex/MyPropertyController.getPropertyList';
import {subscribe,unsubscribe,createMessageContext,releaseMessageContext} from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/PropertyFilters__c";

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
    assets;

    connectedCallback() {
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(
            this.context,
            SAMPLEMC, (message) => {
                this.handleFilterChange(message);
        });
	}

	handleFilterChange(message) {
		this.searchKey = message.searchKey;
		this.numberBedrooms = message.numberBedrooms;
		this.numberBathrooms = message.numberBathrooms;
    }
    
    disconnectedCallback() {
        unsubscribe(this.subscription);
        this.subscription = null;
        releaseMessageContext(this.context);
    }
}