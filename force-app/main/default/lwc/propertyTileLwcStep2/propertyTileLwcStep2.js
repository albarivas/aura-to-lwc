import { LightningElement } from 'lwc';

export default class PropertyTileLwcStep2 extends LightningElement {
	asset = {
			"Address__c":"48 Brattle st",
			"City__c":"Cambridge",
			"State__c":"MA",
			"Description__c":"Lorem ipsum dolor sit amet",
			"Price__c":450000,
			"Baths__c":4,
			"Beds__c":5,
			"Thumbnail__c":"https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house10sq.jpg",
			"Location__Latitude__s":42.3741170,
			"Location__Longitude__s":-71.1216530		
	}
	get backgroundImageStyle() {
		return `background-image:url('${this.asset.Thumbnail__c}')`;
	}

}