const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient({ region: "us-east-1"})); 

export const handler = async (event) => {
    try {
        const currentDate = new Date();
        const productos = JSON.parse(event.body);

        const items = productos.map(producto => ({
            PutRequest: {
                Item: {
                    ...producto,
                    fecha: currentDate.toISOString(),
                    id: randomUUID(),
                }
            }
        }));

        const params = {
            RequestItems: {
                "productos": items
            }
        };

        await dynamo.send(new BatchWriteCommand(params));

        return {
            statusCode: 200,
            body: JSON.stringify(productos),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error.message }),
        };
    }
};
