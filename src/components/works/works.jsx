import "./works.scss";
import { useState } from "react";
import { GitHub } from '@mui/icons-material';
export default function Works(){
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/python.svg",
      title: "The Death Note",
      link:<GitHub className="icon"    onClick={event =>  window.location.href='https://github.com/hasakii42/Python_Game#readme'}/>,
      desc:
        "Guess Game built in python based on the story line of the anime Death Note. ",
      img:
      <img src="./assets/3.png" alt="" />,
    },
    {
      id: "2",
      icon: "./assets/javascript.svg",
      title: "Dine EZ",
      link:<GitHub className="icon"    onClick={event =>  window.location.href='https://github.com/hasakii42/hasakii42_mod5.github.io#readme'}/>,
      desc:
        "Restaurent booking website designed in HTML, CSS and JavaScript.",
      img:
      <img src="./assets/2.png" alt="" />,
    },
    {
      id: "3",
      icon: "./assets/ethereum-eth.svg",
      title: "Ethereum Blockchain Explorer",
      link:<GitHub className="icon"    onClick={event =>  window.location.href='https://github.com/hasakii42/CryptoScan#readme'}/>,
      desc:
        "Ethereum Blockchain Explorer website displays latest block , gas price ,difficulty of ethereum blockchain.",
      img:
      <img src="./assets/1.png" alt="" />,
    },
    {
      id: "4",  
      icon: "./assets/html.svg",
      title: "Helping Hands",
      link:<GitHub className="icon"    onClick={event =>  window.location.href='https://github.com/hasakii42/HelpingHands#readme'}/>,
      desc:
        "Website to file complaints related to govt.services. ",
      img:
      <img src="./assets/4.png" alt="" />,
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
    return (
    <div className="work" id ="work">
        <div className="slider"style={{ transform : `translateX(-${currentSlide * 100}vw)` }}>
            {data.map((d)=> (
            <div className="container">
                <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                            <div className="imgContainer">
                            <img src={d.icon} alt="" />
                            </div>
                            <h2>{d.title}</h2>
                            <p>
                           {
                               d.desc
                           }
                            </p>
                            <span>{d.link}</span>
                        </div>
                    </div>
                    <div className="right">
                        <span>{d.img}</span>
                    </div>
                </div>
                
            </div>
            ))}
        </div>
        <img src="assets/fast.png" className= "arrow left" alt="" onClick={()=> handleClick("left")}/>
        <img src="assets/fast.png" className= "arrow right" alt="" onClick={()=> handleClick()} />
    </div>
    )
}
