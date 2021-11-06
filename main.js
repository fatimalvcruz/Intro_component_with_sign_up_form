


const forName = document.getElementById('formName')
const forLast = document.getElementById('last')
const forMail = document.getElementById('mail')
const forPass = document.getElementById('pass')

const form = document.getElementById('form')

const alertName = document.getElementById('alertName')
const alertLast = document.getElementById('alertLast')
const alertMail = document.getElementById('alertMail')
const alertPass = document.getElementById('alertPass')


const pintarMensajeError = (errores) =>{
    errores.forEach(item => {
        item.tipo.textContent = item.msg;
        item.tipo.style.visibility = 'visible'
        item.input.classList.add('active')
    });
}



form.addEventListener("submit", (e) => {
    e.preventDefault();


    const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
    const regPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/;

        const errores = [];

        if (!regUserName.test(forName.value)) {
            errores.push({
                input: forName,
                tipo: alertName,
                msg: "First Name cannot be empty"
            })
        }else {
            forName.classList.remove('active')
            alertName.style.visibility = 'hidden'
        }

        if (!regUserName.test(forLast.value)) {
            errores.push({
                input: forLast,
                tipo: alertLast,
                msg: "Last Name cannot be empty"
            })
        }else {
            forLast.classList.remove('active')
            alertLast.style.visibility = 'hidden'
        }

        if (!regUserEmail.test(forMail.value)) {
            errores.push({
                input: forMail,
                tipo: alertMail,
                msg: "Looks like is not an email"
            })
        }else {
            forMail.classList.remove('active')
            alertMail.style.visibility = 'hidden'
        }

        if (!regPassword.test(forPass.value)) {
            errores.push({
                input: forPass,
                tipo: alertPass,
                msg: "Password cannot be empty"
            })
        }else {
            forPass.classList.remove('active')
            alertPass.style.visibility = 'hidden'
        }

        if(errores.length !== 0 ){
            pintarMensajeError(errores)

            return;
        }

})










  


