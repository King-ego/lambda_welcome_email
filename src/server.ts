export const handler = async (event: Event) => {
   console.log(`Received event: ${JSON.stringify(event, null, 2)}`);
    return  {
        statusCode: 200,
        body: JSON.stringify({event}),
    };
};