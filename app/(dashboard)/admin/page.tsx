
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'

async function page() {
  
  const session = await getServerSession(authOptions)
   if(session?.user){
     
     return (
       
       <h1>admin pages {session?.user.username}</h1>
    
      )
    }
    
    return (
      
      <h1>please login</h1>
      
   )
  
 
}

export default page