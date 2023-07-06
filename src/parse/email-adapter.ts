import { TransportOptions, createTransport} from "nodemailer";
import config from '@/config'
const _transporter = createTransport(config.smtp as TransportOptions);

const _adapter = {
  module: 'parse-server-api-mail-adapter',
  options: {
    sender: config.smtp.sender || 'sender@example.com',
    templates: {
      passwordResetEmail: {
        subjectPath: './assets/emails/templates/password_reset_email_subject.txt',
        textPath: './assets/emails/templates/password_reset_email.txt',
        htmlPath: './assets/emails/templates/password_reset_email.html'
      },
      verificationEmail: {
        subjectPath: './assets/emails/templates/verification_email_subject.txt',
        textPath: './assets/emails/templates/verification_email.txt',
        htmlPath: './assets/emails/templates/verification_email.html'
      },
    },

    apiCallback: async ({ payload }: any) => {
      await transporter.sendMail(payload);
    }
  }
}
export const transporter = _transporter
export const EmailAdapter =  _adapter
