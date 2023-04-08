const nodemailer = require('nodemailer');
const creds = require('../config');

interface RequestBody {
  name: string;
  email: string;
  message: string;
}

class EmailController {
  sendEmail (req: { body: RequestBody }, res: any) {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const content = `name: ${name} \n email: ${email} \n message: ${message} `;
    
    const transport = {
      host: 'smtp-mail.outlook.com',
      secureConnection: false, 
      port: 587, 
      auth: {
        user: creds.USER,
        pass: creds.PASS
      },
      tls: {
        ciphers:'SSLv3'
      }
    };
    
    const transporter = nodemailer.createTransport(transport);
    
    transporter.verify((err: any) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Server is ready to take messages');
      }
    });
    
    let mail = {
      from: name,
      to: creds.USER,
      subject: 'New Message from Contact Form',
      text: content
    };
    
    transporter.sendMail(mail, (err: any) => {
      if (err) {
        console.log(err)
        res.status(400).send({
          msg: 'fail'
        })
      } else {
        res.status(200).send({
          msg: 'success'
        });
      }
    });    
  }
}

module.exports = new EmailController();