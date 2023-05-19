import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient({ region: "us-east-1"})); 


export const handler = async (event) => {
    try {
        const params = {
            TableName: "productos",
        };

        const result = await dynamo.send(new ScanCommand(params));

        const productos = result.Items.map(item => {
            const formattedItem = {};
            for (const [key, value] of Object.entries(item)) {
                formattedItem[key] = value[Object.keys(value)[0]];
            }
            return formattedItem;
        });
        
        const totalRegistros = productos.length;

        return {
            statusCode: 200,
            body: JSON.stringify({
                totalRegistros: totalRegistros,
                productos: productos,

            }),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error.message }),
        };
    }
};
