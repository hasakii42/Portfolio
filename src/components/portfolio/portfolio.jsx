import "./portfolio.scss"

export default function Portfolio() {
  
   
    return(
    <div className="portfolios" id ="portfolio">
        <div className="skill" id ="skill">
        <h1>SKILLS</h1> 
            </div>
            <div className="image" id="image">

            <img src="assets/python.svg" alt="" />
            <h4>Python</h4>
            <img src="assets/html.svg" alt="" />
            <h4>HTML</h4>
            <img src="assets/css.svg" alt="" />
            <h4>CSS</h4> 
            <img src="assets/javascript.svg" alt="" />
            <h4>JavaScript</h4>
            <img src="assets/react-js.svg" alt="" />
            <h4>ReactJS</h4>
            </div>
            <div  className="image" id="image">
           
            <img src="assets/angular.svg" alt="" />
            <h4>Angular</h4>
            <img src="assets/iot.svg" alt="" />
           <h4>I.O.T</h4>
           <img src="assets/blockchain-icon.svg" alt="" />
            <h4>Blockchain</h4>
            <img src="assets/ethereum-eth.svg" alt="" />
            <h4>Ethereum</h4>
           <img src="assets/solidity.svg" alt="" />
           <h4>Solidity</h4>
            
            </div>
    </div>
  
    )

}



