import { resendClient ,sender } from "../lib/resend.js"
import { createWelcomeEmailTemplate } from "./emailTemplates.js"



export const sendWelcomeEmail= async(email,name,clientURL)=>{
    const {data,error}= await resendClient.emails.send({
        from:`${sender.name} <${sender.email}>`,
        to : email,
        subject:"Welcome owner Elsadany Chat-app!",
        html: createWelcomeEmailTemplate(name,clientURL),
    });

    if(error){
        console.log("Error sending welcome emails:",error);
        throw new Error("Failed to send welcome emails")
    }
    
    console.log("welcome email send successfully",data);
};