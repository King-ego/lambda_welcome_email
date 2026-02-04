import {APIGatewayProxyEvent} from "aws-lambda";

interface EventBody {
    email: string;
    name: string;
}

export const handler = async (event: APIGatewayProxyEvent) => {
    const body: EventBody = JSON.parse(event.body || '{}');

    console.log(`Received event for user: ${body.name} with email: ${body.email}`);

    return  {
        statusCode: 200,
        body: JSON.stringify({event}),
    };
};