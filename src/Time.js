import { render } from "@testing-library/react";
import React from "react";
import { renderIntoDocument } from "react-dom/test-utils";
class Time extends React.Component{
   
constructor(){ 

    this.state = {
  
      currentDateTime: Date().toLocaleString()
    }
  }

render(){
return(
    <>
        <h1>
            {this.state.currentDateTime}
        </h1>
        
    </>
)
}
}
render(<Time />, document.getElementById('root'));
export default Time;