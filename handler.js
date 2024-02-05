'use strict';
const axios = require('axios');
const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const { v4: uuidv4 } = require('uuid');

const objetoActores = require('./src/interfaces/objetoActores');
const rutaWeb = require('./src/routes/routes');

module.exports.getActor = async (event) => {
  
  let resp = await axios.get(rutaWeb.ruta(event.pathParameters.number));
  let ActorCaracteristicas = objetoActores.ActorObjeto(resp); 
   
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:ActorCaracteristicas, 
        input: event,
      },
      null,
      2
    ),
  };
  
};


module.exports.postNewActor = async(event)=>{
  
  const body = JSON.parse(event.body);
  let id_to_write = uuidv4();
   
   const params = {
    TableName: "newActors",
    Item:{
        "id": id_to_write,
        "name": body.name,
        "surname": body.surname,
        "DNI": body.dni
        }
    }; 
    
    let promise = dynamo.put(params).promise();
    let result = await promise;

    return {    
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'date saved', 
          input: event,
        },
        null,
        2
      ),
    };
};

module.exports.postNewActress = async(event)=>{
  
  const body = JSON.parse(event.body);
  let id_to_write = uuidv4();
   
   const params = {
    TableName: "newActors",
    Item:{
        "id": id_to_write,
        "name": body.name,
        "surname": body.surname,
        "DNI": body.dni
        }
    }; 
    
    let promise = dynamo.put(params).promise();
    let result = await promise;
  

    return {    
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'date saved', 
          input: event,
        },
        null,
        2
      ),
    };
};

module.exports.getNewActor = async(event)=>{
  let dni = Number(event.pathParameters.dni); 
  
  const getParams = {
    TableName : 'newActors',
    FilterExpression: 'dni = :dni',
    ExpressionAttributeValues: {
        ':dni': dni
    }
  };  
    
    let promise = dynamo.scan(getParams).promise();
    let result = await promise;    

    return {    
      statusCode: 200,
      body: JSON.stringify(
        {
          message: result.Items[0], 
          input: event,
        },
        null,
        2
      ),
    };
};
