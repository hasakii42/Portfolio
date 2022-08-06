import "./menu.scss";

export default function menu({ menuOpen, setMenuOpen }){

    return (
       <div className={"menu "+(menuOpen && "active")}>
           <ul>
               <li onClick={()=>setMenuOpen(false)}>
                   <a href="#intro">Home</a>
               </li>
               <li onClick={()=>setMenuOpen(false)} >
                   <a href="#portfolio">Skills</a>
               </li>
               <li onClick={()=>setMenuOpen(false)} >
                   <a href="#work">Projects</a>
               </li>
               <li onClick={()=>setMenuOpen(false)}>
                   <a href="#certificate">Certifications</a>
               </li>
               <li onClick={()=>setMenuOpen(false)}>
                   <a href="#contact">Contact</a>
               </li>
               <li onClick={()=>setMenuOpen(false)}>
                   <a href='https://drive.google.com/file/d/1Qt07QmYo94CA9Gzdwz5yRWo6iOCnpD2C/view?usp=sharing' target={"_blank"}>Resume</a>
               </li>
           </ul>
       </div>
    )

}

