import { NextResponse } from "next/server";
import {headers} from 'next/headers'

export async function GET(req,res){

   const head = headers()
   const username = head.get('username')
          
   return  NextResponse.json({mass:username})
}