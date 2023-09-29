import {   UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div>    
        <UserButton afterSignOutUrl="/"/>
        <h1>home</h1>
    </div>
  )
}