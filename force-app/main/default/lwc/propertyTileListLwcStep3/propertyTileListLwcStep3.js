import { LightningElement } from 'lwc';

export default class PropertyTileListLwcStep3 extends LightningElement {
	houses = [
					{
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
					},
					{
						"Address__c":"30 Peterborough St",
						"City__c":"Boston",
						"State__c":"MA",
						"Description__c":"Lorem ipsum dolor sit amet",
						"Price__c":650000,
						"Baths__c":4,
						"Beds__c":5,
						"Thumbnail__c":"https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/victorian04sq.jpg",
						"Location__Latitude__s":42.3438900,
						"Location__Longitude__s":-71.0963710
					}
				];
}