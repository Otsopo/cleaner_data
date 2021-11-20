'use strict';
const { Client } = require('pg')

//Example queries for the lambda

//[{"USE":"CPU","region":"ap-east-1","type":"CASCADE_LAKE"}]
//https://w2evna0im6.execute-api.us-east-1.amazonaws.com/dev/serviceImpact?query=W3siVVNFIjoiQ1BVIiwicmVnaW9uIjoiYXAtZWFzdC0xIiwidHlwZSI6IkNBU0NBREVfTEFLRSJ9XQ==

//[{"USE":"Networking","region":"ap-east-1","type":""},{"USE":"CPU","region":"ap-east-1","type":"CASCADE_LAKE"}]
//https://w2evna0im6.execute-api.us-east-1.amazonaws.com/dev/serviceImpact?query=W3siVVNFIjoiTmV0d29ya2luZyIsInJlZ2lvbiI6ImFwLWVhc3QtMSIsInR5cGUiOiIifSx7IlVTRSI6IkNQVSIsInJlZ2lvbiI6ImFwLWVhc3QtMSIsInR5cGUiOiJDQVNDQURFX0xBS0UifV0=

module.exports.serviceImpact = (event, context, callback) => {
  const query = JSON.parse(new Buffer(event.queryStringParameters.query, 'base64').toString('ascii'))
  console.log(query)


  //TODO:Null checks
  //TODO: USE DB
  //const getData = postgresQuery(query) 
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify(mockData.filter(serviceObj => datafilter(serviceObj, query))),
  };

  callback(null, response);
};

const datafilter = (serviceObj, query) => {

  for (var i = 0; i < query.length; i++) {
    let { USE, region, type } = query[i]
    if (serviceObj.USE == USE && serviceObj.region == region && serviceObj.type == type)
      return true
  }
}

//TODO: Connect to the PostgreSQL instance
/* const postgresQuery = (params) =>{
  const client = new Client()
  client.connect()
  client.query('SELECT $1', params, (err, res) => {
    console.log(err ? err.stack : res.rows[0].message) // Hello World!
    client.end()
  })
} */

const mockData = [
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
//cpu use time + RAM use time + hdd use time + nettiliikenne aika
