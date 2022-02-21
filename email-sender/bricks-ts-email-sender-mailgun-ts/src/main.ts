import {NodeMailgun} from 'ts-mailgun';

export interface ISendMessageParams {
  to: string,
  subject: string,
  text: string,
  html: string,
}

export interface ISendMessageResult {
  raw: Record<string, any>
}

export interface IEmailSenderService {
  send(message: ISendMessageParams): Promise<ISendMessageResult>
}

export interface IMailgunInitConfig {
  env: {
    NodeMailgun: {
      apiKey: string,
      domain: string,
      fromEmail: string,
    }
  }
}

export class MailgunTsSenderService implements IEmailSenderService {
  protected mailer: NodeMailgun;

  constructor(app: {
    NodeMailgun: NodeMailgun
  }) {
    this.mailer = app.NodeMailgun;
  }

  static initMailgun(app: IMailgunInitConfig) {
    const mailer = new NodeMailgun(app.env.NodeMailgun.apiKey, app.env.NodeMailgun.domain);
    mailer.fromEmail = app.env.NodeMailgun.fromEmail;
    mailer.init();

    return mailer;
  }

  static init(app: IMailgunInitConfig) {
    return new MailgunTsSenderService(
      {
        NodeMailgun: this.initMailgun(app),
      },
    )
  }

  async send(params: ISendMessageParams) {
    return await this.mailer.send(
      params.to,
      params.subject,
      params.html,
    );
  }

}
