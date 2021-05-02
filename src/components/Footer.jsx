import React from "react";


function Footer(){
  var d = new Date();
  const year = d.getFullYear();

  return(
    <footer>
      <p>Created by:- PRT<br />
      Copyright:-{year}</p>
    </footer>
  )
}

export default Footer;
