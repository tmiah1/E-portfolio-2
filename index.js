// template_v00ff5p
// service_1l4euvi
// Kr_81zp2OH0bmi1KC

let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}


function contact(event) {
    event.preventdefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += ' modal__overLay--visible';
    emailjs
    .sendform(
        'service_1l4euvi',
        'template_v00ff5p',
        event.target,
        'Kr_81zp2OH0bmi1KC'
    ).then(() => {
        loading.classList.remove(" modal__overLay--visible");
        success.classList += " modal__overLay--visible";
    }).catch (() => {
        loading.classList.remove("modal__overLay--visible");
        alert(
            "the email service is temporarily unavailable. please contact me on ahmedtalha.miah@gmail.com"
        );
    })
}

let isModalOpen = false;    
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    //toggle mode
    isModalOpen = true;
    document.body.classList += " modal--open";
}
    



