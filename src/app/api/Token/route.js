import { SignJWT,jwtVerify } from "jose"
import { NextResponse } from "next/server"


export async function GET(req,res){

      const key =new TextEncoder().encode(process.env.JWT_KEY )
      const payload= {email:'mdfahadafridi80@gmail.com',userId:'abc123'}
      const token = await new SignJWT(payload)
      .setProtectedHeader({alg:'HS256'})
      .setIssuedAt()
      .setIssuer(process.env.JWT_KEY)
      .setExpirationTime('2h')
      .sign(key)

      return NextResponse.json({token:token})
}

export async function POST(req,res){

      const body= await req.json()
      const Token= body['token']
      const key= new TextEncoder().encode(process.env.JWT_KEY )
      const decoded= await jwtVerify(Token,key)
      return NextResponse.json(decoded)
}