import { NextResponse } from "next/server";
import { SignJWT,jwtVerify } from "jose"

export  async function POST(req,res){
 
      const JsonBody= await req.json()
      const name=JsonBody['name']
      const password=JsonBody['password']
      ///database cheek
      if(name==='airin'&&password==='123'){
           
      const payload= {email:name}
      const key =new TextEncoder().encode(process.env.JWT_KEY )
      const token = await new SignJWT(payload)
      .setProtectedHeader({alg:'HS256'})
      .setIssuedAt()
      .setIssuer(process.env.JWT_KEY)
      .setExpirationTime('2h')
      .sign(key)
        return  NextResponse.json({name:token},{status:200})
      }else{
          return  NextResponse.json({status:'user not valid'},{status:401})
      }

}