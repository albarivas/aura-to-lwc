import { LightningElement, api } from 'lwc';

export default class PropertyTileLwcStep3 extends LightningElement {
	@api asset;

	get backgroundImageStyle() {
		return `background-image:url('${this.asset.Thumbnail__c}')`;
	}
}