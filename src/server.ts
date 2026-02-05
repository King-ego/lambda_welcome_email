import {SQSEvent} from "aws-lambda";

interface EventBody {
    email: string;
    name: string;
}

export const handler = async (event: SQSEvent) => {
    console.log('raw event:', JSON.stringify(event));
    console.log(`Received event body: ${event}`);

    return  {
        statusCode: 200,
        body: JSON.stringify({event}),
    };
};
