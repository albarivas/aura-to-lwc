public with sharing class MyPropertyController {

	@AuraEnabled(cacheable=true)
	public static Property__c[] getPropertyList(String searchKey, Integer numberBedrooms, Integer numberBathrooms) {
		String key = '%' + searchKey + '%';
		Property__c[] properties = [SELECT Id, address__c, city__c, state__c, description__c, price__c, baths__c, beds__c, thumbnail__c, location__latitude__s, location__longitude__s FROM property__c
						WHERE (title__c LIKE :key OR city__c LIKE :key OR tags__c LIKE :key)
						AND beds__c >= :numberBedrooms
						AND baths__c >= :numberBathrooms
						ORDER BY price__c LIMIT 10];
		return properties;
	}
}