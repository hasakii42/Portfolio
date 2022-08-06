import "./certificate.scss"

export default function certificates() {

    const data = [
        {
          id: 1,
       
          img:
            "./assets/C-1.png",
   
        },
        {
          id: 2,
  
          img:
            "./assets/C-2.png",

        },
        {
          id: 3,
          img:
            "./assets/C-3.png",
        
        },
        {
          id: 4,
          img:
            "./assets/C-4.png",
  
        },
      ];

    return (
    <div className="certificate" id ="certificate">
        <h1>Certifications</h1>
        <div className="Container">
            {
                data.map(d=>(
                    <div className={d.featured ? "card featured" : "card"}>
                <img className ="user" 
                src= {d.img}
                 alt="" />
                </div>
            ))}
            
        </div>


    </div>   
     );
}
