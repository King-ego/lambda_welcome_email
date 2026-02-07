import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({});
const FROM_EMAIL = process.env.FROM_EMAIL ?? "no-reply@example.com";

async function sendEmailWithSES(to: string, subject: string, bodyText: string) {
    const cmd = new SendEmailCommand({
        Destination: { ToAddresses: [to] },
        Message: {
            Body: { Text: { Data: bodyText } },
            Subject: { Data: subject },
        },
        Source: FROM_EMAIL,
    });

    return ses.send(cmd);
}

export default sendEmailWithSES;