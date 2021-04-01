import React from 'react'
import reactDom from 'react-dom'
import './index.css'



let curDate = new Date();
curDate = curDate.getHours();
let greet = '';
let cssStyle = {};

const time2 =new Date().toLocaleTimeString();



if(curDate>=1 && curDate<11){
  greet='Good Morning'
  cssStyle.color='green';
}else if(curDate>=12 && curDate<19){
  greet= 'Good Afternoon'
  cssStyle.color='pink';
  
}else{
  greet='Good Night'
  cssStyle.color='yellow';
  
}
reactDom.render(
  
  <div className='hey'>
  <p>{time2}</p>
  <h1>Hello sir, <span style={cssStyle}>{greet}</span></h1>
  </div>
  ,
  document.getElementById('root')
)
