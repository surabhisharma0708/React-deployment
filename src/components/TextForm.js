import React,{useState} from 'react';


export default function TextForm(props) {

    const handleUpClick = () =>{
        console.log("Upper case is clicked"+text);
        // setText("You have clicked on handleUpClick");

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }

    const handleLoClick = () =>{
        console.log("LowerCase is clicked"+text);


        let newText  = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");
    }

    const handleClear = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared","success");
    }

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = () =>{
        console.log("I am copy");
        var text = document.getElementById('exampleForm');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success");
    }
    const handleExtraSpace =() =>{
        let newText = text.split(/[]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space removed","success");
    }

    const [text,setText] = useState('Enter text here');
    return (
        <>
        <div className='container' style ={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div class="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleForm" rows="8" style ={{backgroundColor: props.mode==='dark'?'grey':'white'}}></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleClear}>Clear the text</button>
            <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy text</button>
            <button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Remove Extra Space</button>
            
        
        </div>

        <div className="container my-2">
            <h1>Your text Summary</h1>
            
        {/*we are now counting the number of words and letters in the abouve textarea*/}
            <p>This text contains {text.split(" ").length} and {text.length} charaters</p>
        
        {/* time taken to read each word  and 0.008 is the time taken to read a single word*/ }
        <h2>Time taken to read</h2>
        <p>It will take {0.008 * text.split(" ").length} Minutes to read</p>  

        {/* for preview */}
        <h2>Preview of the text</h2>
        <p>{text.length>0 ? text:"Enter something to preview it here"}</p>
        </div>
        </>
    )
}