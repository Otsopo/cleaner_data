'use strict';

//Hosted at lambda:
//https://w2evna0im6.execute-api.us-east-1.amazonaws.com/dev/serviceImpact?USE=CPU&region=ap-east-1&type=CASCADE_LAKE
module.exports.serviceImpact = (event, context, callback) => {
  //TODO:Null checks
  //TODO:Filter out the data using the parameters
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify(mockData),
  };

  callback(null, response);
};

//didn't have time to implement
const datafilter = (serviceObj,{USE,region,type})=>{
  return serviceObj.USE == USE && serviceObj.region == region && serviceObj.type == type
}

//TODO: Connect to database using node-postgres instead of using mock object
const mockData = [
  {
    "serviceName": "Compute Engine",
    "region": "us-east4",
    "usageType": "N1 Predefined Instance Core running in Virginia",
    "usageUnit": "seconds",
    "vCpus": "",
    "machineType": "n1-standard-4",
    "kilowattHours": 8.769444444444446e-7,
    "co2e": 3.165769444444445e-10
  },
  {
    "serviceName": "Compute Engine",
    "region": "asia-east2-b",
    "usageType": "N1 Predefined Instance Core running in Virginia",
    "usageUnit": "seconds",
    "vCpus": "",
    "machineType": "n1-standard-4",
    "kilowattHours": 8.769444444444446e-7,
    "co2e": 3.609763168464445e-10
  },
  {
    "serviceName": "Compute Engine",
    "region": "asia-northeast1-c",
    "usageType": "N1 Predefined Instance Core running in Virginia",
    "usageUnit": "seconds",
    "vCpus": "",
    "machineType": "n1-standard-4",
    "kilowattHours": 8.769444444444446e-7,
    "co2e": 3.609763168464445e-10
  },
  {
    "serviceName": "Compute Engine",
    "region": "europe-west2-b",
    "usageType": "N1 Predefined Instance Core running in Virginia",
    "usageUnit": "seconds",
    "vCpus": "",
    "machineType": "n1-standard-4",
    "kilowattHours": 8.769444444444446e-7,
    "co2e": 3.609763168464445e-10
  },
  {
    "serviceName": "Compute Engine",
    "region": "europe-west1",
    "usageType": "Storage PD Capacity",
    "usageUnit": "byte-seconds",
    "vCpus": "",
    "machineType": "",
    "kilowattHours": 1.7735146684572102e-19,
    "co2e": 3.7598510971292856e-23
  },
  {
    "serviceName": "Compute Engine",
    "region": "europe-west1",
    "usageType": "Network Internet Egress from EMEA to Americas",
    "usageUnit": "bytes",
    "vCpus": "",
    "machineType": "",
    "kilowattHours": 1.0058283805847168e-12,
    "co2e": 2.1323561668395997e-16
  },
  {
    "serviceName": "Compute Engine",
    "region": "us-central1",
    "usageType": "SSD backed PD Capacity",
    "usageUnit": "byte-seconds",
    "vCpus": "",
    "machineType": "",
    "kilowattHours": 3.3651303965598345e-19,
    "co2e": 1.5277692000381648e-22
  },
  {
    "serviceName": "App Engine",
    "region": "us-east4",
    "usageType": "Backend Instances",
    "usageUnit": "seconds",
    "vCpus": "",
    "machineType": "",
    "kilowattHours": 9.691869078835028e-7,
    "co2e": 3.498764737459445e-10
  },
  {
    "serviceName": "Compute Engine",
    "region": "us-east4",
    "usageType": "Network Inter Region Ingress from Netherlands to Americas",
    "usageUnit": "bytes",
    "vCpus": "",
    "machineType": "",
    "kilowattHours": 5.906803786259279e-13,
    "co2e": 2.1323561668395997e-16
  }
]

//Didn't have time to implement
const mockData_new = [
{
  "USE": "CPU",
  "region": "af-south-1",
  "type": "CASCADE_LAKE",
  "co2e": 0.000005673328
},
{
  "USE": "CPU",
  "region": "ap-east-1",
  "type": "CASCADE_LAKE",
  "co2e": 0.000004951935
},
{
  "USE": "Networking",
  "region": "af-south-1",
  "type": "",
  "co2e": 9.28e-7
},
{
  "USE": "Networking",
  "region": "ap-east-1",
  "type": "",
  "co2e": 8.1e-7
},
{
  "USE": "Disk",
  "region": "af-south-1",
  "type": "EBS",
  "co2e": 1
},
{
  "USE": "Disk",
  "region": "ap-east-1",
  "type": "EBS",
  "co2e": 1
}
]


