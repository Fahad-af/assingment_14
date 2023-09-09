import { jwtVerify } from "jose"
import { NextResponse } from "next/server"


export async function middleware(req,res){

      if(req.nextUrl.pathname.startsWith("/api/profile")){
           
           
                  try{
                              const reqheader= new Headers(req.headers)
                              const Token =reqheader.get('Token')
                        
                   
                              const key= new TextEncoder().encode(process.env.JWT_KEY )
                              const decoded= await jwtVerify(Token,key)
                              const username = decoded.payload.email
                              reqheader.set('username',username)

                              return NextResponse.next({request:{headers:reqheader}})
                   
                  }catch(e){
                        return NextResponse.json({mass:'not ok'})
                  }

          
            
      }
}