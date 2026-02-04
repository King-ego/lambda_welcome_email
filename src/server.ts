export const handler = async (event: Event) => {
    return  {
        statusCode: 200,
        body: JSON.stringify({event}),
    };
};