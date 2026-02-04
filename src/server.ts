import {APIGatewayProxyEvent} from "aws-lambda";

export const handler = async (event: APIGatewayProxyEvent) => {
   console.log(`Received event: ${JSON.stringify(event, null, 2)}`);
    return  {
        statusCode: 200,
        body: JSON.stringify({event}),
    };
};