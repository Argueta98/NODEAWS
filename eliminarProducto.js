import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, DeleteCommand } from "@aws-sdk/lib-dynamodb";

const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient({ region: "us-east-1"}));

export const handler = async (event) => {
  try {
    const  id  = event.queryStringParameters.id;

    const command = new DeleteCommand({
      TableName: "productos",
      Key: {
        id: id
      }
    });

    await dynamo.send(command);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Registro eliminado exitosamente" }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
