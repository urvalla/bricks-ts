import { NodeMailgun } from 'ts-mailgun';
export interface ISendMessageParams {
    to: string;
    subject: string;
    text: string;
    html: string;
}
export interface ISendMessageResult {
    raw: Record<string, any>;
}
export interface IEmailSenderService {
    send(message: ISendMessageParams): Promise<ISendMessageResult>;
}
export interface IMailgunInitConfig {
    env: {
        NodeMailgun: {
            apiKey: string;
            domain: string;
            fromEmail: string;
        };
    };
}
export declare class MailgunTsSenderService implements IEmailSenderService {
    protected mailer: NodeMailgun;
    constructor(app: {
        NodeMailgun: NodeMailgun;
    });
    static initMailgun(app: IMailgunInitConfig): NodeMailgun;
    static init(app: IMailgunInitConfig): MailgunTsSenderService;
    send(params: ISendMessageParams): Promise<any>;
}
