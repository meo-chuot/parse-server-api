import { Request, Response, Application, raw } from "express";

export class Webhooks {
    static async init(app: Application): Promise<void> {
        app.post("/webhooks/test", raw({ type: "application/json" }), (request: Request, response: Response) => {
            response.status(200).json({});
        });
    }
}