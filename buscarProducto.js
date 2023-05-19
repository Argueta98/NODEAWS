import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient({ region: "us-east-1"})); 

export const handler = async (event) => {
    try {
        const { id, nombre } = event.queryStringParameters;

        // Define el parámetro clave para la búsqueda
        const key = {};
        if (id) {
            key.id = id;
        } else if (nombre) {
            key.nombre = nombre;
        }

        // Crea el comando GetCommand
        const command = new GetCommand({
            TableName: "productos",
            Key: key,
        });

        // Realiza la búsqueda utilizando el comando GetCommand
        const { Item } = await dynamo.send(command);

        if (!Item) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: "Registro no encontrado" }),
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify(Item),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error.message }),
        };
    }
};
