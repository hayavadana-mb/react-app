import React,{ useState } from 'react'

export default function TextForm(props)
 {
    const handleUpClick = ()=>{
        console.log("handleupclick")
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("uppercase converted","success")
    }
    const handlelowClick = ()=>{
        console.log("handleupclick")
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("lowercase converted","success")

    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
 
    
    const handlecopy =()=>{
        var text = document.getElementById("TextForm");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("copied","success")

        

    }
    const handlecleartext =()=>{
      console.log("handleupclick")
        let newtext = '';
        setText(newtext)
        props.showAlert("cleared","success")
    
        
    }
  
   
    const [text,setText] = useState('');
   return (
    <>
    <div className="container" style={{color :  props.mode ==='dark' ? 'white' : '#0052a5'}} >
        <h1>{props.heading}</h1>
         <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor :  props.mode ==='dark' ? 'grey' : 'white' ,color :  props.mode ==='dark' ? 'white' : 'black'}}  id="TextForm" rows="8"></textarea>
          </div>
        <button className="button btn btn-primary mx-2"onClick={handleUpClick}>Convert to upper case</button> 
        <button className="button btn btn-primary mx-2"onClick={handlelowClick}>Convert to lower case</button>
       
        <button className="button btn btn-primary mx-2"onClick={handlecleartext}>clear text</button>
        <button className="button btn btn-primary mx-2"onClick={handlecopy}>c0py</button>
         </div>
         <div className="container my-3" style={{color :  props.mode ==='dark' ? 'white' : '#0052a5'}}>
         <h1>Your text summary</h1>
         <p>{text.split(" ").length} words and {text.length} chracters</p>
         <p>{0.008 * text.split(" ").length } time to read {text.split(" ").length} words</p>
         <h2>preview</h2>
         <p>{text.length>0?text:"enter something to preview it"}</p>
         </div>
        </>
  )
   }