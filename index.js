const contactform = document.querySelector("#form");
const submitBtn = document.querySelector(".btn");
const nameinput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const emailSubjectInput = document.querySelector("#emailsubject");
const phoneNumberInput = document.querySelector("#number");
const messageInput = document.querySelector("#message");

const serviceID = "service_mn6ymsb";
const templateID = "template_4se3hrt"

emailSubjectInput.init(publickey)

contactform.addEventListener("submit",e =>{
    e.preventDefault();
    submitBtn.innerText = "Just A Moment...";
    
    const inputFields = {
        name: nameinput.value,
        email: emailInput.value,
        emailSubjectInput:emailSubjectInput.value,
        phone:phoneNumberInput.value,
        message:messageInput.value
    }

    emailjs.send(serviceID,templateID,inputFields)
    .then(() =>{
    submitBtn.innerText = "message sent successfully";

    nameinput.value ="";
    emailInput.value = "";
    emailSubjectInput.value ="";
    phoneNumberInput.value ="";
    messageInput.value =""
   }, (error) =>{

    console.log(error);
    submitBtn.innerText = "something went wrong";

   });
});
// function sendMail(){
//     var params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         emailSubject: document.getElementById("email subject").value,
//         number: document.getElementById("number").value,
//         message: document.getElementById("message").value

//     };
// }

// const serviceID = "service_mn6ymsb";
// const templateID = "template_4se3hrt"

// emailjs.send(serviceID,templateID,params)
// .then(
//     res  =>{

//         document.getElementById("name").value ="";
//         document.getElementById("email").value= "";
//         document.getElementById("email subject").value= "";
//         document.getElementById("number").value ="";
//         document.getElementById("message").value="";
//         console.log(res);
//         alert("Your was sent sucessfully")
//     })
//     .catch((err)=>console.log(err));