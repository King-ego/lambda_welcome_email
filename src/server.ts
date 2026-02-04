import {APIGatewayProxyEvent} from "aws-lambda";

interface EventBody {
    email: string;
    name: string;
}

export const handler = async (event: APIGatewayProxyEvent) => {
   console.log(`Received event: ${JSON.stringify(event.body, null, 2)}`);
    return  {
        statusCode: 200,
        body: JSON.stringify({event}),
    };
};