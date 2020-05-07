const nodemailer = require('nodemailer'); // va chercher nodemailer
var smtpTransport = require('nodemailer-smtp-transport');



var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    Host: 'smtp.gmail.com',
    auth: {
      user: 'volibigbamble@gmail.com',
      pass: 'mise_a_jour*01'
    }
}));



let envoieMessage = (data)=>{


    let  mailOptions = {
        from: 'volibigbamble@gmail.com',
        to: data.email,
        subject:"inscription au site Discord Nan" ,
        text: '/lienDusit/'+data.token
      }

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
        return  console.log(info)
      });
}

module.exports= envoieMessage