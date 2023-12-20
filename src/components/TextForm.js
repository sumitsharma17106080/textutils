import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleClick = () => { setText(text.toUpperCase()); 
    props.showAlert("Uppercase","success")}
    const handleLowClick = () => { setText(text.toLowerCase()); props.showAlert("Lowercase","success") }
    const handleTextCopy = () => {
        const text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to Clipboard","success")
    }
    const handleExtraSpace=()=>{
        const newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove Extra Space","success")
    }
    const handleClearText = () => { setText("");  props.showAlert("Clear","success") }
    const handleOnChange = (event) => { setText(event.target.value) }

    return (

        <>
            <div className="container my-3"  style={{backgroundColor:props.mode==='light'?'white':'gray',color:props.mode==='light'?'gray':'white',}}>
                <label htmlFor="myBox" className='form-label'>{props.heading}</label>
                <textarea id='myBox' className="form-control" row="10" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='light'?'white':'gray',color:props.mode==='light'?'gray':'white',}}></textarea>
                <button className="btn btn-primary my-3" onClick={handleClick}>Convert To UpperCase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleLowClick}>Convert To LowerCase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleTextCopy}>Copy Text</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
            <div className="container my-2"  style={{backgroundColor:props.mode==='light'?'white':'gray',color:props.mode==='light'?'gray':'white',}}>
                <h1>Your Text Summary</h1>
                <p>No Of Words:{text.split(" ").length}</p>
                <p>No Of Characte:{text.length}</p>
                <p>Reading Time:{.01 * text.split(" ").length} Min</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in textbox to preview here"}</p>
            </div>
        </>

    )
}
TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
}
TextForm.defaultProps = {
    heading: "Write Here"
}
