//Code from Henrique Peroni and amended

function chooseCategory(chosen) {
    const choices = document.getElementsByClassName("choices");
  
    for (i = 0; i < choices.length; i++) {
      choices[i].style.display = "none";
    }
  
    document.getElementById(chosen).style.display = "flex";
  }
  
  function choosePlace(chosen) {
    const choices = document.getElementsByClassName("info");
    for (i = 0; i < choices.length; i++) {
      choices[i].style.display = "none";
    }
  
    document.getElementById(chosen).style.display = "block";
  }
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
