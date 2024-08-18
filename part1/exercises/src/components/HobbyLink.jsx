export default function HobbyLinks () {
   
    let hobbyLinks = ["https://www.swim.com/",
                      "https://www.pinterest.com/mandap/card-drawing/"
                     ];
    
    return (
       <div style={{ border: '2px solid black', padding: '20px' }}>
        <h3>MyHOBBIES</h3>
         <a href = {hobbyLinks[0]}>Swimming</a>
         <a href = {hobbyLinks[1]}>Card Drawing</a>
       </div>      
    );
 }