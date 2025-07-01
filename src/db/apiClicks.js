import { UAParser } from "ua-parser-js";
import supabase from "./supabase"

export async function getClicksForUrls(urlIds){
   const {data,error}= await supabase.from("clicks").select("*").in("url_id",urlIds);

   if(error) {
    console.error(error);
    throw new Error("Unable to load clicks");
   }

   return data;
}

const parser= new UAParser();
export const storeClicks= async({id,originalUrl})=> {
   try {
      const res=parser.getResult();
      const device= res.type || "Desktop";

      const response= await fetch("https://ipapi.co/json/");
      const {city,country_name:country}= await response.json();

      await supabase.from('clicks').insert({
         url_id:id,
         device,
         country,
         city,
      })
      window.location.href=originalUrl;

      console.log("Print the url id",id);
      
   } catch (error) {
      console.error("Error recording the clicks:",error);
   }
}

export const getClicksForUrl= async(url_id) => {
   const {data,error} = await supabase.from("clicks").select("*").eq("url_id",url_id);

   console.log("Printing the Clicks:",data);

   if(error) throw new Error(error.message);

   return data;
}
