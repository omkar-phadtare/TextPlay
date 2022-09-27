 import React,{useState} from 'react'

  export default function HeadEvent() {
    
    const [btnText,setBtnText] = useState("Enable");

    const [newStyle,setStyle] = useState(
      {
      color : 'black',
      backgroundColor : 'white',
      height :300
    }
    );

    // let newstyle = {
    //   color : 'white',
    //   backgroundColor : 'black'
    // }

    const changeStyle = () =>
    {
      if(newStyle.color === 'white')
      {
        setStyle({
          color :'black',
          backgroundColor : 'white',
          height :300
        });
        setBtnText("Enable");
      }
      else{
        setStyle({
          color :'white',
          backgroundColor : 'black',
          height :300
        });
        setBtnText("Disable");
      }
    }

    const ParaText = {
      fontFamily : 'cursiv'
    }

    return (
      <div className='container'>
      <div className='row'>
          <div className=' text-center col-lg-6 border border-5 container-lg p-4'  style={newStyle}>
              <h4>API in React JS</h4>
              <p style={ParaText}>ReactJS component is a top-level API. It makes the code completely individual and reusable in the application. It includes various methods for: Creating elements. Transforming elements. </p>
          </div>
          <div className='text-center col-lg-6 border border-5 container-lg p-4'  style={newStyle}>
              <h4>DOM</h4>
              <p style={ParaText}>DOM stands for 'Document Object Model'. It is a structured representation of HTML in the webpage or application. It represents the entire UI(User Interface) of the web application as the tree data structure. It is a structural representation of HTML elements of a web application in simple words.</p>
          </div>
          <div>
              <div className='my-4 col-lg-6 container-lg text-center'>
                <button className='btn btn-primary' onClick={changeStyle}>Dark Mode {btnText}</button>
              </div>
          </div>
      </div>
      </div>
    )
  }
