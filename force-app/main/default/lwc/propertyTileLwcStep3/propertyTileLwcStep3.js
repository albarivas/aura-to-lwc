import { LightningElement, api } from 'lwc';

export default class PropertyTileLwcStep3 extends LightningElement {
	@api property;

	get backgroundImageStyle() {
		return `background-image:url('${this.property.Thumbnail__c}')`;
	}
}