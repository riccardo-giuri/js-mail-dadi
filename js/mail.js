const mail_btn = document.getElementById("mail_btn");
let mail_msg = document.getElementById("mail_msg");
const mails = ["paolo.rossi@gmail.com", "marco.colombo@gmail.com", "giuseppe.verdi@gmail.com"];

mail_btn.addEventListener("click", function() {
    const inputMail = document.getElementById("mailForm");
    mail_msg.innerHTML = "La mail non può accedere riprova!";
    
    for(let i = 0; i < mails.length; i++) {
        if(inputMail.value === mails[i]) {
            mail_msg.innerHTML = "la mail può accedere!";
            break;
        }
    }
})