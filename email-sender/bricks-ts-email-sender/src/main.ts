export interface ISendMessage {
  from: string,
  to: string,
  subject: string,
  text: string,
  html: string,
}

export interface ISendMessageResult {
  raw: Record<string, any>
}

export interface IEmailSenderService {
  send(message: ISendMessage): Promise<ISendMessageResult>
}
