import React, { Component } from 'react'
import animal from './images/large-group-african-safari-animals-wildlife-conservation-concept-174172993.jpg'
import birds from './images/index.jpeg'
import forest from './images/bg.jpeg'
import moutain from "./images/moutain.jpeg"
import night from "./images/night.webp"

class Blogs extends Component{
    render(){
  return (
  <body>
      <h1>Natural Blogs</h1>
 
{/* row start */}
    <div className='container'>
        {/* col 1 */}
     <div className='column'>
                <div className='card'>
                    <img src={animal} alt="Animals" title='Animals' />
                    <a href="https://www.mdpi.com/journal/animals" target="_blank" title="Animals"><h2>Animals</h2></a>
                    {/* <p>Animal article means an article made from any captive animal or wild animal, other than vermin, and includes an article or object...</p> */}
                </div>
            </div>
         



            {/* <!-- column2 --> */}
            <div className="column">
                <div className="card">
                    <img src={birds} alt="" srcset="" />
                   <a href="#" title="Birds"><h2>Birds</h2></a> 
                   {/* <p>Birds are very special animals that have particular characteristics which are common amongst all of them, and include an article or object... </p> */}
                </div>
                </div>
            {/* <!-- column3 --> */}
            <div className="column">
                <div className="card">
                  <img src={forest} alt=""/>
                  <a href="#" title="Forest"> <h2>Forest</h2></a>
                  {/* <p>Birds are very special animals that have particular characteristics which are common amongst all of them, and include an article or object...</p> */}
                </div>
            </div>
            {/* <!-- column4 --> */}
            <div className="column">
                <div className="card">
                   <img src={moutain} alt=""/>
                  <a href="#" title="Moutain"><h2>Moutain</h2></a>
                  {/* <p>Birds are very special animals that have particular characteristics which are common amongst all of them. </p>  */}
                </div>
            </div>
            {/* <!-- column 5 --> */}
            <div className="column">
                <div className="card">
                   <img src={night} alt=""/>
                   <a href='#' title="NightSky"><h2>NightSky</h2></a>
                   {/* <p>Tens of thousands of satellites orbiting Earth will hamper astronomers efforts to study the Universe and spot dangerous asteroids.</p> */}
                </div>
            </div>


           
     </div>

  
     </body>
  )}
}

export default Blogs