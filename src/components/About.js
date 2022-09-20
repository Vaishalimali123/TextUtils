import React from "react";

export default function About(props) {

    // const[mystyle, setMyStyle]= useState({

    //     color:"black",
    //     backgroundColor : "white"

    // })
    let mystyle ={
      color : props.mode ==='dark'?'white':'black',
      backgroundColor : props.mode ==='dark'?'rgb(18 55 86)':'white'
       
    }
  return (
    <div className="container" style={{color : props.mode ==='dark'?'white':'black'}}>
    <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button" 
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             <strong>Analysis of your text</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
            Using textUtils, you can analyse your text. You can
            find out how mny words and characters are there.
              
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Manipulate your text</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              You can Manipulate your text using different options like Uppercase,
              Lowercase, copy text and so on.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              You can use TextUtils o any of the browsers like firefox,operamini, 
              chrome, explorer etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
      <button className="btn btn-primary my-3" onClick={toggleMode}>{btnText}</button>
      </div> */}
    </div>
  );
}
