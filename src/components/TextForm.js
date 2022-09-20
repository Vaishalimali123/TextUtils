import React, { useState } from 'react'


export default function TextForm(props) {

  const uppBtnClick = () => {
    // console.log("Uppercasebutton is pressed"  + text)
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to Uppercase", "success")
  }
  const lowBtnClick = () =>{
    let lowCaseText = text.toLowerCase()
    setText(lowCaseText)
    props.showAlert("Converted to Lowercase", "success")
  }
  const clearBtnClick =() =>{
    let clearText = ""
    setText(clearText)
    props.showAlert("Text is Cleared", "success")
  }
  const handleCopy = () => {
    let text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to clipboard", "success")
  }
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces are removed", "success")
  }

  const changingText = (event) => {
  //  console.log("onChange")
   setText(event.target.value)
  }

  const[text, setText] = useState('')
  
  // text = "new text"// wrong way to change the text
  // setText("new text")// correct way to change the text

  return (
    <>
    <div className='container my-3' style={{color: props.mode === 'light'?'black':'white'}}>

       <h2>{props.heading}</h2>
       <div className="mb-3">
       <textarea className="form-control" value={text} onChange ={changingText} style=
        {{backgroundColor:props.mode ==='light'?'white':'#062844', color: props.mode==='light'?'black':'white'}} 
        id="myBox" rows="8" ></textarea>
       </div>
       <button className='btn btn-primary' onClick={uppBtnClick}>Convert to Uppercase</button>
       <button className="btn btn-primary mx-2" onClick={lowBtnClick}>Convert to Lowercase</button>
       <button className="btn btn-primary mx-2" onClick={clearBtnClick}>Clear text</button> 
       <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
       <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>

      <h3>Your text summary</h3>
      {/* <p>{text.length<1 ? 0 : text.trim().split(" ").length} words and {text.length} characters</p> */}
      <p>{text.replace(/[ ]+/,'').trim()===''?0:text.replace(/[ ]+/g,' ').trim().split(' ').length} words 
      and {text.length} characters</p>
      <p>{0.008 * (text.split(" ").length)} Minutes to read</p>

      {/* 0.008 means in 1 minute we can read 125 word so one word can be read in 
      1/125 = 0.08 minutes.  */}
      <h3>Preview</h3>
      <p>{text}</p>


    </div>
    </>
  )
}
