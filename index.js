// template_v00ff5p
// service_1l4euvi
// Kr_81zp2OH0bmi1KC

function contact(event) {
    event.preventdefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classlist += ' modal__overlay--visible';
    emailjs
    .sendform(
        'service_1l4euvi',
        'template_v00ff5p',
        event.target,
        'Kr_81zp2OH0bmi1KC'
    ).then(() => {
        loading.classlist.remove("modal__overlay--visible");
        success.classlist += " modal__overlay--visible";
    }).catch (() => {
        loading.classlist.remove("modal__overlay--visible");
        alert(
            "the email service is temporarily unavailable. please contact me on ahmedtalha.miah@gmail.com"
        );
    })
}

let isModalOpen = false;    
function togglemodal() {
    if (isModalOpen) {
        isModalOpen = false;
        return
        document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classlist += " modal--open";
}
    



