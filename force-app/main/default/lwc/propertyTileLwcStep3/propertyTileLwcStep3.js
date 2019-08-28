import { LightningElement, api } from 'lwc';

export default class PropertyTileLwcStep3 extends LightningElement {
	@api house;

	get backgroundImageStyle() {
		return `background-image:url('${this.house.Thumbnail__c}')`;
	}
}