import {APIGatewayProxyEvent} from "aws-lambda";

interface EventBody {
    email: string;
    name: string;
}

export const handler = async (event: APIGatewayProxyEvent) => {
    const raw = event.body ?? '';
    const decoded = event.isBase64Encoded ? Buffer.from(raw, 'base64').toString('utf8') : raw;

    let payload: unknown = {};
    try {
        payload = decoded ? JSON.parse(decoded) : {};
    } catch {
        payload = decoded;
    }

    console.log('payload:', payload);
    return  {
        statusCode: 200,
        body: JSON.stringify({event}),
    };
};