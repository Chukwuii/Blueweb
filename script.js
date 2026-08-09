function hello(){
alert("Welcome!");
}
function subscribe(){

    let email =
    document.getElementById("email").value;


    if(email===""){

        alert("Please enter your email");

    }

    else{

        alert(
        "Thank you for subscribing: "
        + email
        );

    }

}