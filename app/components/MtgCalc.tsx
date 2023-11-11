 import React from 'react'
 
 const MtgCalc = () => {
   return (
     <div>
      <div class="modal-header">
    <a href="https://www.mortgagecalculator.org/" target="_blank"
      ><img
        src="https://www.mortgagecalculator.org/free-tools/calculator/mortgage-calculator-logo.png"
        alt="MortgageCalculator.org." /></a><br />
    <button data-close-button class="close-button">&times;</button>
  </div>
  <div class="modal-body">
    <div class="calc">
      <p style="background-color: transparent">
        <iframe
          src="https://www.mortgagecalculator.org/free-tools/calculator/caller.html"
          frameborder="0"
          width="180"
          height="350"
          scrolling="no"
        ></iframe><br />
      </p>
    </div>
  </div>
       
     </div>
   )
 }
 
 export default MtgCalc
  
  
  
  
  
  
  
  
