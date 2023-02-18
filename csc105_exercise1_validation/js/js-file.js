function checkFirstCharacter() {
    // document.getElementById("textInput").style.backgroundColor = "#ff6961";
    const input = document.getElementById("textInput").value;
    const uppercaseRegex = /^[A-Z]/;
    
    if (uppercaseRegex.test(input)) {
      console.log("String's first character is uppercase");
    } else {
      console.log("String's first character is not uppercase.");
    }
  }
  