function registerStudent(event) {

    event.preventDefault();

    let studentName = document.getElementById("studentName").value;
    let studentEmail = document.getElementById("studentEmail").value;

    document.getElementById("registrationResult").innerHTML =
        "Student Name: " + studentName +
        "<br>Student Email: " + studentEmail;
}