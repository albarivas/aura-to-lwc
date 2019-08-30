import { LightningElement, track } from 'lwc';
import { publish, createMessageContext, releaseMessageContext } from 'lightning/messageService';
import PROPERTYFILTERSMC from "@salesforce/messageChannel/PropertyFilters__c";

export default class PropertyFiltersLwcStep6 extends LightningElement {
    context = createMessageContext();

    @track searchKey = ''; // Need to be tracked because of reset
    @track numberBedrooms = 0;
    @track numberBathrooms = 0;

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
        publish(this.context, PROPERTYFILTERSMC, {
            'searchKey': this.searchKey,
            'numberBedrooms': this.numberBedrooms,
            'numberBathrooms': this.numberBathrooms,
        });
    }

    disconnectedCallback() {
        releaseMessageContext(this.context);
    }
}