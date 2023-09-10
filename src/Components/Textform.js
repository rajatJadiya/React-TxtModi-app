import React, { useState } from "react";

export default function Textform(props) {
    const handleOnChange=(e)=>{
        setText(e.target.value)
    }
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Text Converted to Upper Case !!!! ", "success")
    }
    const handleLoClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Text Converted to Lower Case !!!! ", "success")
    }
    const removeSpace = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(' '));
      props.showAlert(" Extra Spaces has been removed !!!! ", "success")
    }

    const capitalize = () => {
      let titleCase = text
      .toLowerCase()
      .split(' ')
      .map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
      setText(titleCase);
      props.showAlert(" Text Capitalized !!!! ", "success")
    }

    const ClearText=()=>{
        let newText = "";
        setText(newText);
        props.showAlert(" Text Cleared !!!! ", "success")
    }
    // const CopyText=()=>{
    //     let newText = "";
    //     setText(newText);
    // }
    const CopyText = () => {
      navigator.clipboard.writeText(text)
      props.showAlert(" Text Copied !!!! ", "success")
    }
    
    const [text, setText] = useState("");
  
  return (
    <>
    <div>
      <div className="container mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} 
        style={{backgroundColor : props.mode ==='dark'?'black':'white',
        color: props.mode==='dark'?'white':'black'}}
        id="myBox" rows="9"></textarea>
      </div>
      <div className="container">
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Conver to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Conver to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={removeSpace}>Remover ExtraSpaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={capitalize}>Word Capital</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={CopyText}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ClearText}>Clear Text Area</button>
      </div>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summery</h2>
        <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Character</p>
        <p>{.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Nothing to Preview'}</p>
    </div>
    </>
  );
}
