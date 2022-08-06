import "./contact.scss"
import { useRef } from "react";
import emailjs from "emailjs-com";
import { LinkedIn,Instagram, GitHub } from '@mui/icons-material';
export default function Contact() {  
   const form = useRef();

   const sendEmail =(e) =>{
       e.preventDefault();
       emailjs
       .sendForm(
           'service_eju8lv3', 
       'template_l7tin7g',
        form.current, 
        'mtNde6c496au4u4rb')
       .then((result) => {
           console.log(result.text);
           console.log("Message Sent")
       }, (error) => {
           console.log(error.text);
       });
       e.target.reset()
   }
    return (
        <div className = "contact" id="contact">
             <div className="itemC">
                 <LinkedIn className="icon"  onClick={event =>  window.location.href='https://linkedin.com/in/HarshvardhanKondapalli' } />
                
            </div>
             <div className="itemC">
                 <GitHub className="icon"    onClick={event =>  window.location.href='https://github.com/hasakii42'}/>
             </div>
             <div className="itemC" >
                 <Instagram className="icon" onClick={event =>  window.location.href='https://www.instagram.com/hasakii_4/'}/>
             </div>
         <div className="left">
             <img src="assets/YH.png" alt="" />
         </div>
        <div className="right">
        <h2>Contact me</h2>
         <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Name" />
          <input type="email" name="user_email" placeholder="Email" />
          <input type="text" name="user_subject" placeholder="Subject" />
          <textarea name="message" placeholder="Message"/>
           <button type="submit">Send</button>
    
           </form>
        </div>
    </div> 
    )
    }


