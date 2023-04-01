import PropTypes from "prop-types";
import React, {useState} from "react";


export default function TextForm(props) {
  const [text, setText] = useState('');

  let uppercase = function()
  {
    if (text.length)
    {
      setText(text.toUpperCase());
    }

    else
    {
      props.alert("You need to type something.", "danger");
    }
  }

  let lowercase = function()
  {
    if (text.length)
    {
      setText(text.toLowerCase());
    }

    else
    {
      props.alert("You need to type something.", "danger");
    }
  }
  
  let fontChange = function()
  {
    let el = document.getElementById("font");
    let text = document.getElementById("text-a");
    let prev = document.getElementById("prev");
    if (el.value === 'none');

    else
    {
      text.style.fontFamily = el.value;
      prev.style.fontFamily = el.value;
    }
  }

  let clearText = function()
  {
    if (text.length)
    {
      setText('');
    }

    else
    {
      props.alert("You need to type something.", "danger");
    }
  }

  let handler = function(event)
  {
    setText(event.target.value);
  }

  function clearSelection()
  {
    if (window.getSelection) {window.getSelection().removeAllRanges();}
    else if (document.selection) {document.selection.empty();}
  }

  let copyText = function()
  {
    let text = document.getElementById("text-a");
    if (text.value.length)
    {
      text.select();
      navigator.clipboard.writeText(text.value);
      clearSelection();
      props.alert("Copied to Clipboard", "success");
    }

    else
    {
      props.alert("You need to type something to Copy!", "danger");
    }
  }

  return (
    <>
    <div className = "container">
      <h1 className = "my-4">Text Analysis</h1>
      <div className="form-group mx-1 my-2">
        <label htmlFor="myBox">{props.heading}</label>
        <textarea
          className="form-control"
          id="text-a"
          rows="3"
          value={text}
          onChange = {handler}
        ></textarea>
      </div>
      <button id = "upc" onClick = {uppercase} className="btn-4 mx-1 my-1">Convert to Uppercase</button> 
      <button id = "lwc" onClick = {lowercase} className="btn-1 mx-1 my-1">Convert to Lowercase</button>
      <button id = "clear" onClick = {clearText} className = "btn-2 mx-1 my-1">Clear Text</button>
      <button id = "copy" onClick = {copyText} className = "btn-3 mx-1 my-1">Copy Text</button>
      <select id = "font" className = "form-control ms-1 sel" role = "button" onChange={fontChange} style = {{width: "30%",display:"inline", position: "relative", top: "2.5px"}}>
        <option value = "none" hidden disabled>Select Font</option>
        <option value = "sans-serif">Sans-Serif</option>
        <option value = "cursive">Cursive</option>
        <option value = "Helvetica">Helvetica</option>
        <option value = "serif">Serif</option>
      </select>
      {/* <button id = "fc" onClick = {fontChange} className = "btn btn-warning mx-1">Change Font</button> */}
    </div>
    <div className="container my-5">
        <h2>Summary</h2>
        <p className = "mx-1"> {text.split(/\s+/).filter(function(el){return el.length !== 0}).length} words, {text.length} characters</p>
        <p className = "mx-1" style = {text.split(/\s+/).filter(function(el){return el.length !== 0}).length > 0 ? {display: "block"}:{display: "none"}}>{text.split(' ').filter(function(el){return el.length !== 0}).length*0.008} minutes reading time</p>
        <h2>Preview</h2>
        <p id = "prev" className = "mx-1">{text.split(/\s+/).filter(function(el){return el.length !== 0}).length > 0 ? text : 'Your text will be displayed Here'}</p>
    </div>
    </>
  );
}

TextForm.defaultProps = {
  heading: "Enter Text: ",
};

TextForm.propTypes = {
  heading: PropTypes.string,
};
