function validate() {

    //creating objects from elements from HTML to extract values; used const instead of var for security practice
    const studentName = document.getElementById("studentname");
    const courseName = document.getElementById("coursename");
    const regDate = document.getElementById("registerationdate");
    const error_message = document.getElementById("error_message");

    var text;       //var for text to use with error message

    /*if statement to check studentName, courseName, regDate are populated
    DEV reason for applying: To have an example of validation for fields.
    - Was not required for assignment but decided to apply it for future review and 
    reusage.
    - This is only the basic level of validation
    - Also for the sake of validation I am applying the "required" attribute in HTML
    */
    if (studentName.value.trim() == "") {
        text = "Please enter a valid Student Name";
        error_message.innerHTML = text;
        studentName.focus();
        return false;
    }

    if (courseName.value.trim() == ""){
        text = "Please enter a valid Course ID"
        error_message.innerHTML = text;
        courseName.focus();
        return false;
    }
    if (regDate.value.trim() == ""){
        text = "Please enter a valid registration date"
        error_message.innerHTML = text;
        regDate.focus();
        return false;
    }

    /**
     * confirm() used to show the results and confirmation that inputs were valid and 
     * recieved.
     */
    confirm("Name: " + studentName.value.trim() + " is registered for "+ courseName.value.trim() + 
            " scheduled to start on "+ regDate.value.trim() +".");
    return true;
    //restForm();     //call for resetForm(); COMMENTED OUT because it seems to auto happen     
}       //end validate()

//Function to reset the inputs in the form
function resetForm() {
    document.getElementById("myForm").reset();
  }