import {SQSEvent} from "aws-lambda";
import dotenv from "dotenv";
import sendEmailWithSES from "./sendMail";

dotenv.config();

interface EventBody {
    email: string;
    name: string;
}

export const handler = async (event: SQSEvent) => {
    console.log('raw event:', JSON.stringify(event));

    const record = event.Records[0];

    const body = record.body ?? "{}";

    const payload = JSON.parse(body) as EventBody;

    const to = payload?.email;
    if (to) {
        await sendEmailWithSES(
            to,
            "Assunto automático",
            `Olá ${payload?.name ?? "cliente"}, voce precisa confirmar`
        );
        console.log("email enviado para:", to);
    } else {
        console.warn("nenhum destinatário encontrado no payload:", payload);
    }

    return {
        statusCode: 200,
        body: JSON.stringify({event}),
    };
};
