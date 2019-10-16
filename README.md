# Aura to LWC demo examples

This is a SFDX project that contains examples for Aura to LWC demo. 

1. Create a scratch org from a dev hub which has LWC enabled

	sfdx force:auth:web:login -d
	sfdx force:org:create -d 30 -f config/project-scratch-def.json -s -a aura-to-lwc

2. Install Dreamhouse app unlocked package in the scratch org from https://github.com/dreamhouseapp/dreamhouse-sfdx#installing-dreamhouse-using-an-unlocked-package, and import sample data from the Dreamhouse app tab.

2. Deploy our code:

	sfdx force:source:push

2. Assign yourself the "Aura to LWC demo" permission set
	sfdx force:user:permset:assign -n Aura_to_LWC_Demo


