import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'
export async function GET(req,res){
      const {searchParams} =new URL(req.url)
      let email =searchParams.get('email')
      ////transport 
      let Transportal = nodemailer.createTransport({
        host:"mail.teamrabbil.com",
        port:25,
        secure:false,
        auth:{
              user:'info@teamrabiil.com',
              pass:'~R4[bhac[Qs'
        },
        tls:{rejectUnauthorized:false}
  
      })
      //preparing email
      let myemail ={
        from:'text email for next js application<info@teamrabiil.com>',
        to:email,
        subject:'test email for next js application',
        text:'text email for next js application'
      }
      try{
         await Transportal.sendMail(myemail)
       return  NextResponse.json({mass:'ok all'})
  
      }catch(e){
       return NextResponse.json({mass:'not ok'})
      }
   
}