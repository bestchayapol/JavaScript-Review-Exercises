function checkFirstCharacter() {
    const input = document.getElementById("textInput").value;
    const firstChar = input.charAt(0);
    const uppercaseRegex = /^[A-Z]/;
    
    if (uppercaseRegex.test(firstChar)) {
      console.log("String's first character is uppercase");
    } else {
      console.log("String's first character is not uppercase.");
    }
  }
  