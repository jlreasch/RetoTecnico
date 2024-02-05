# RetoTecnico
Decidí crear 3 endpoints, 2 de tipo GET y 1 de tipo POST, los endpoints son:

https://f1y9br75ua.execute-api.us-east-1.amazonaws.com/dev/getActor/{number}

https://f1y9br75ua.execute-api.us-east-1.amazonaws.com/dev/postNewActor
Siendo su objeto JSON del body: 
{
    "name": string,
    "surname": string,
    "dni": number
}

https://f1y9br75ua.execute-api.us-east-1.amazonaws.com/dev/getNewActor/{dni}

El primer endpoint permite recuperar información de SWAPI relacionada a las caracteristicas de los actores, el segundo endpoint permite ingresar un nuevo actor a una tabla de DynamoDB, y el tercer endpoint permite consultar datos en la tabla de un actor o actriz en base a su dni.

