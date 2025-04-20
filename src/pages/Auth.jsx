import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Login from '@/components/login';
import Signup from '@/components/signup';


const Auth = () => {
  const [searchParams,setSearchParams]= useSearchParams();
  return (
    <div className='mt-36 gap-10 flex items-center flex-col'>
     <h1 className='text-3xl font-extrabold'>
     {searchParams.get("createNew") ? "Hold up Let's Login first" : "Login/Signup"}
     </h1>
  <Tabs defaultValue="login" className="w-[400px] rounded-md">
  <TabsList className={"w-full grid grid-cols-2"}>
    <TabsTrigger value="login">Login</TabsTrigger>
    <TabsTrigger value="signup">Signup</TabsTrigger>
  </TabsList>
  <TabsContent value="login"><Login/></TabsContent>
  <TabsContent value="signup"><Signup/></TabsContent>
  </Tabs>

    </div>
    
  )
}

export default Auth
