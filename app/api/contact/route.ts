import { NextResponse } from 'next/server';

export async function POST(req: Request) {

    const body = await req.json();
    console.log(body);

    //send email to admin with contact form data
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'devt7239@gmail.com',
            pass: 'dylzsdukhbwgijwt',
        }
    });
    const mailOptions = {
        from: body.email,
        to: 'tasicigor123@gmail.com',
        subject: 'Contact Form Submission',
        text: 'Name: ' + body.name + '\nEmail: ' + body.email + '\nMessage: ' + body.message
    };
    transporter.sendMail(mailOptions, function(error:any, info:any){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });



  return NextResponse.json({ message: 'Hello, world!'});
}