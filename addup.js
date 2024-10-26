
const clearTextArea = () => {
   const comment = document.querySelector("#comment");
   const response = document.querySelector("#response");
   comment.value = "";
   response.innerHTML = "";
}

const processComment = (e) => {
    e.preventDefault();
    const comment = document.querySelector("#comment");
    const response = document.querySelector("#response");

    if(comment.value.length > 0){
        response.style.backgroundColor = "white";
        response.innerHTML = "Your comment has been submitted!"
    }
    else {
        comment.style.borderColor = "red";
        comment.innerHTML = "";
        response.innerHTML = "No comment was received"

    }
    response.style.marginTop = "5px";
}

const processForm = () => {
    const contactForm = document.querySelector('#commentform');
    const comment = document.querySelector("#comment");
    comment.addEventListener('focus', clearTextArea);
    contactForm.addEventListener('submit', processComment);
}

document.addEventListener('DOMContentLoaded', processForm);
