// template_v00ff5p
// service_1l4euvi
// Kr_81zp2OH0bmi1KC

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible";
    email.js
    .sendform(
        'service_1l4euvi',
        'template_v00ff5p',
        event.target,
        'Kr_81zp2OH0bmi1KC'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "the email service is temporarily unavailable. please contact me at email@email.com"
        )
    }; 
     }) 
}


