import { Request } from "express";
import { transporter } from "@/parse/email-adapter";
export class Func {
    static async init(): Promise<void> {
        Parse.Cloud.define("SendEmail", async (request: Request) => {
            const email   = request.params.email   || 'example@email.com';
            const subject = request.params.subject || 'subject example';
            const content = request.params.content || 'Email content example';
            const ret     = transporter.sendMail({
                to: email,
                subject: subject,
                text: content
            });

            return ret;
        }, {
            fields : {
                email: {
                    required: true,
                    type: String,
                },
                subject: {
                    required: true,
                    type: String,
                },
                content: {
                    required: true,
                    type: String,
                }
            },
            requireUser: true
        });
    }
}
