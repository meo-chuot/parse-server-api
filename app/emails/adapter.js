import nodemailer from "nodemailer";
const _transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.forwardemail.net",
  port: process.env.SMTP_PORT || 465,
  secure: process.env.SMTP_SSL || true,
  auth: {
    user: process.env.SMTP_USER || 'REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM',
    pass: process.env.SMTP_PASSWORD || 'REPLACE-WITH-YOUR-GENERATED-PASSWORD'
  }
});

const _emailAdapter = {
  module: 'parse-server-api-mail-adapter',
  options: {
    sender: process.env.SMTP_MAIL_FROM || 'sender@example.com',
    templates: {
      passwordResetEmail: {
        subjectPath: './templates/password_reset_email_subject.txt',
        textPath: './templates/password_reset_email.txt',
        htmlPath: './templates/password_reset_email.html'
      },
      verificationEmail: {
        subjectPath: './templates/verification_email_subject.txt',
        textPath: './templates/verification_email.txt',
        htmlPath: './templates/verification_email.html'
      },
    },

    apiCallback: async ({ payload }) => {
      await transporter.sendMail(payload);
    }
  }
}
export const transporter = _transporter
export const emailAdapter =  _emailAdapter
