import React, {useState} from 'react'

export default function ApplyForm(props) {

  //state --example
  //useState change the current text with setText 
  const [first, setTextFirst] = useState("");
  const [last,setTextLast] = useState("");
  const [text,setText] = useState("Content")
  const [fontName,setFont] = useState("");
  
  //first = "Random text"   --> Incorrect way
  //setTextFirst("Random text")   --> Correct way to set text

const handleArial = () =>
{
  setFont("Lucida Console");
  
}

const handleCuro = () =>
{
  setFont("Brush Script MT");

}

  const onChangeTextArea = (event)=>
  {
    setText(event.target.value);
  }


const handleLastName = (last) =>
{
   setTextLast(last.target.value)
}

  const handleFirstName = (first) =>
  {
    console.log("On Change");
    setTextFirst(first.target.value);
  }

  const handleUpClick = ()=>{

    console.log("Button got Clicked");
    var Fname = first.toUpperCase();
    var Lname = last.toUpperCase();
    var Caps = text.toUpperCase();

    setTextFirst(Fname);
    setTextLast(Lname);
    setText(Caps)

    if(text.length>0)
    {
      props.alertType("Text is Typed in empty space","success");
    }
    else
    {
      props.alertType("Type Some Thing in Text Area","warning");
    }
  }

   //Time required to read Words in text Area
var perWord = 0.08;

const count = perWord * text.split(" ").length;

  return (

<>
<h1 className='text-center test' style={{color : props.textColor}} > Testing React Js</h1>
    <div className=" container  bg-light border border-dark p-4 mt-2">
      <h1>{props.heading}</h1>
      
    <form className="row g-3 needs-validation">
  <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01" onChange={handleFirstName} value={first}  />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02" onChange={handleLastName} value={last}  />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  {/* <div className="col-md-4">
    <label htmlFor="validationCustomUsername" className="form-label">Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div> */}
  <div className="col-md-6">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" onChange={onChangeTextArea} value={text} rows="3"></textarea>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-secondary" onClick={handleUpClick}>Upper Case</button>
  </div>
  <div className="col-3">
    <button className="btn btn-secondary" onClick={handleArial}>Lucida Console Font</button>
  </div>
  <div className="col-3">
    <button className="btn btn-secondary" onClick={handleCuro}>Brush Script MT</button>
  </div>
</form>
</div>

<div className="container" style={{color : props.textColor}} >



<h3>Content Length </h3>
<p>First Name Length : {first.length}</p>
<p>Last Name Length : {last.length}</p>

<p>TextField :   {text.split(" ").length} Words and {text.length} Charecters</p>

<p>Time Required to read  : {count}</p>


<h3>Preview</h3>
<div>
<p style={{fontFamily : fontName}}>{text}{fontName}</p>
</div>
</div>

</>
  )
}

//first.split(" ")  --> Use to calculate words in field
