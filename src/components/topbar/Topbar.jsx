import "./topbar.scss";
import { Mail,LinkedIn,Instagram, GitHub } from '@mui/icons-material';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
      <div className={"topbar " + (menuOpen && "active")}>
     <div className="wrapper">
         <div className="left">
             <a href="#intro" className="logo">Hasakii</a>
             <div className="itemC">
                 <LinkedIn className="icon"  onClick={event =>  window.location.href='https://linkedin.com/in/HarshvardhanKondapalli' } />
                
            </div>
             <div className="itemC">
                 <GitHub className="icon"    onClick={event =>  window.location.href='https://github.com/hasakii42'}/>
             </div>
             <div className="itemC" >
                 <Instagram className="icon" onClick={event =>  window.location.href='https://www.instagram.com/hasakii_4/'}/>
                 <div className="itemC">
            <Mail className="icon" />
            <h4>kondapalliharsh2@gmail.com</h4>
             </div>
             </div>
         </div>
         <h1></h1>
         <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
             
         </div>

     </div>

    </div>
    )
}


