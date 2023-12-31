
// toggle icon navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
     sections.forEach(sec => {
        let top = window.scrollY;
        let offset =sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top < offset + height) {
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
        
     });
     // =========sticky navbar============
     let header = document.querySelector('header');
     header.classList.toggle('sticky', window.scrollY > 100);
        //  remove toggleicon and navbar

        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');

};
// ==================scroll reveal==============
   ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container,.portfolio-box, .contact form',  { origin: 'botton' });

 ScrollReveal().reveal('.home-content h1, .about-img',  { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content',  { origin: 'right' });
 
 
//  ==============typed js================

const typed = new Typed('.multiple-text',{
    strings:['Fullstack Developer','Graphic Designer','Product Designer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});



///=============EMAILJS=======


const contactform = document.querySelector("#form");
const submitBtn = document.querySelector(".btn");
const nameinput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const emailSubjectInput = document.querySelector("#emailsubject");
const phoneNumberInput = document.querySelector("#number");
const messageInput = document.querySelector("#message");

const serviceID = "default_service";
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