

document.addEventListener("DOMContentLoaded", function() {
     

    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");


    form.addEventListener("submit", function(event){
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let isvalid = true;

        messages = [];

        if (username.length < 3){
             let isvalid = false;
             messages.push("The Username is invalid");
        } 

        if (!email.includes("@")  || (".")) {
            isvalid = false;

            messages.push("Please enter a valid email address.");
        }
        

        if( password.length < 8){
            isvalid = false;
            messages.push("Password is too short");
        }


        feedbackDiv.style.display = "block";

        if(isvalid = true){
            feedbackDiv.style.textContent = "Registration Successful!";
            feedbackDiv.style.color = "#28a745";

        }else{
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }




    })
})


