# Bricks TS > Email Sender > mailgun.ts adapter #

Adapter for Bricks TS email sender interface for mailgun.ts

```js
// instantiate service
const emailSender = MailgunTsSenderService.init({
  NodeMailgun: {
    apiKey: '',
    domain: 'demo.com',
    fromEmail: 'noreply@demo.com',
  }
});

// send email
await emailSender.send({
  to: 'to@email.com',
  subject: 'DEMO email',
  text: 'DEMO email text',
  html: '<p>DEMO email text</p>',
});
```
