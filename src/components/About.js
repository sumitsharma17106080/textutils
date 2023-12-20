import React,{useState} from 'react'

export default function About() {
   const[myStyle,setMStyle]= useState({ color:'gray',backgroundColor:'white'});

   const[btnText,setBtnText]=useState("Enable Dark Mode")
    const handleToggleMode=()=>{
        if(myStyle.color==='gray' && myStyle.backgroundColor==='white'){
            setMStyle({
                color:'white',backgroundColor:'gray'
            });
            setBtnText(
                "Enable Light Mode"
            )
        }
        else{
            setMStyle({
            color:'gray',
        backgroundColor:'white',
        border:'1px solid black'
        }
            );
            setBtnText("Enable Dark Mode" )
    }
}
    return (
        <div className='container' >
            <div  div className="accordion  my-3" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            About Us
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the first item's accordion body.</strong>
                             It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            
            </div>
            <button type="button" class="btn btn-secondary" style={myStyle} onClick={handleToggleMode}>{btnText}</button>
        </div>
    )
}
