import React, { useEffect, useState } from 'react'
import {useHistory} from "react-router-dom"
import Center from '../../tools/Center';


function Intro() {
    const [display, setDisplay] = useState(false);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setDisplay(true);
        },5000)
        return() => clearImmediate(interval)
    },[])
      const frame = {
          width:'100vw',
          height:'100vh',
          position:'absolute',
          top:0,
          left:0,
          textAlign:'justify',
          cursor:'pointer',
          fontSize:14,
          letterSpacing:0.5
      };
      let history = useHistory();
    return (
      <Center style={frame} onClick={()=> history.push("/overview")}>
          <div style={{maxWidth: 800, margin: 40}}>
            <p>
                Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej 
                Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej 
                Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej 
            </p>
            <p>
                Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej 
                Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej 
                Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej 
            </p>
            <p>
                Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej 
                Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej 
                Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej 
            </p>
            <p>
                Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej 
                Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej 
                Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej Filip je gej 
            </p>
            {console.log(display)}
            {display ? <p style={{color:'#970EF6'}}>
                <br></br>
                <br></br>
                <br></br>
                Please click anywhere to continue to the collection.
            </p>:null}
        </div>
      </Center>
    )
}
export default Intro;