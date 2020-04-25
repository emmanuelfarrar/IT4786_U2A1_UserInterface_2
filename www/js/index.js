function validate() {

    //creating objects from elements from HTML to extract values; used const instead of var for security practice
    const studentName = document.getElementById("studentname").value.trim();
    const courseName = document.getElementById("coursename").value.trim();
    const regDate = document.getElementById("registerationdate").value.trim();
    const error_message = document.getElementById("error_message");

    var text;       //var for text to use with error message

    /*if statement to check studentName.length
    DEV reason for applying: To have an example of validation for fields.
    Was not required for assignment but decided to apply it for future review and 
    reusage
    */
    if (studentName < 5) {
        text = "Please Enter a valid Student Name";
        error_message.innerHTML = text;
        return false;
    }

    /**
     * confirm() used to show the results and confirmation that inputs were valid and 
     * recieved.
     */
    confirm("Name: " + studentName + " is registered for "+ courseName + 
            " scheduled to start on "+ regDate +".");
    return true;
    restForm();     //call for resetForm()     
}       //end validate()

//Function to reset the inputs in the form
function resetForm() {
    document.getElementById("myForm").reset();
  }