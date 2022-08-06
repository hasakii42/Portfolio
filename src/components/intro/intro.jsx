import "./intro.scss";
import Typewriter from "typewriter-effect"
import FileOpenIcon from '@mui/icons-material/FileOpen';


export default function Intro(){
   
    return (
    <div className='intros' id ="intro">
        <div className="left">
            <div className="imgC">
                <img src="assets/ME3.png" alt="" />
            </div>
        </div>
        <div className="right">
            <div className="wrapper">
            <h2>Hello, I'm</h2>
            <h1>Harshvardhan Kondapalli</h1>
            <h3>Freelance <Typewriter options={{strings:["Developer", "Designer", "Business Analyst"],
             autoStart:true,
             delay:75,
             loop:true}}/></h3>
          <h4>B.tech CSE UnderGrad loves to code and create. Looking for opportunity to learn and grow. I want to solve problem or create a luxury to capatalize on. </h4>
           <button onClick={event =>  window.location.href='https://drive.google.com/file/d/1Qt07QmYo94CA9Gzdwz5yRWo6iOCnpD2C/view?usp=sharing'}  >
      Resume<FileOpenIcon/> </button>
            </div>
           

            <a href="#portfolio">
                <img src="assets/down.png" alt="" />
            </a>
        </div>
    

    </div>
    )
}

