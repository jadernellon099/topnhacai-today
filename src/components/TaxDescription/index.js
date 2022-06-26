import React from "react";

function TaxDescription(props) {
  const createMarkup = () => {
    return {__html: props.Tax.taxDescription};
  }
  
  return (
    <div className="bxss sstop">
      <div className="bxinner">
        <h1>{props.Tax.taxTitle}</h1>
        <div className="des">
          <p dangerouslySetInnerHTML={createMarkup()} >
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaxDescription;
