Junction 2021 submission for aiven challenge



#### Model

We wanted to use the open-source project https://github.com/cloud-carbon-footprint/cloud-carbon-footprint to generate the carbon footprints of the different infrastructure because they have done extensive study of the subject https://www.cloudcarbonfootprint.org/docs/methodology/. The problem is that they are focused on developing the report from the existing usage reports, which are downloaded from the Azure, GCP, or AWS services. Instead, only as proof of concept, we ended up mocking the data with python using some of their parameters. 

There are a couple of ways to approach this. Extract the functions they are using and generate the carbon footprints by using those. This has a problem: if they ever do further development of those functions, the stuff will break or be old.

A better approach would be to mock the usage reports and use this to create the estimations. This requires more effort in the beginning, because it requires to learn the formatting of the usage reports of the three different platforms. It is not a bad option for Aiven because they already should have these reports. The only thing would be to change the parameters such as region and run it through the Cloud carbon footprint service.
