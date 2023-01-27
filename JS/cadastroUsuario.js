const form = document.getElementById('form-cad')
const nome = document.getElementById('nome')
const sobrenome = document.getElementById('sobrenome')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const senha2 = document.getElementById('senha2');
const tipoUsuario = document.getElementById('tipo-usuario');

form.addEventListener("submit", async (e) => { //async, como a resposta do api não é imediata, vai redirecionar para a página e esperar a resposta da API
    e.preventDefault()//cancela o pedido, para não haver uma requsição desnecessária, verifica erros
    validarCadastro(form, nome, sobrenome, email, senha, senha2, tipoUsuario)

    await fetch ("https://localhost:8080/usuario/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            senha: senha,
            idTipoUsuario: tipoUsuario
        })/*.then((res) => {
            console.log(res)
        })*/
    }) 
})


function validarCadastro(n, sn, em, s, s2, tu){
    const nomeValue = String(n.value)
    const sobrenomeValue = String(sn.value)
    const emailValue = String(em.value)
    const senhaValue = String(s.value)  
    const senha2Value = String(s2.value)
    const tipoUsuarioValue = String(tu.value)



    if (nomeValue === "" || nomeValue == null) {
    nome.className = "form-control is-invalid"
    console.log("Nome é um campo obrigatório")
    }else {
        console.log("Cadastro realizado com sucesso")
    }

    if (sobrenomeValue === "" || sobrenomeValue == null) {
    sobrenome.className = "form-control is-invalid"
    console.log("Sobrenome é um campo obrigatório")
    }else {
        console.log("Cadastro realizado com sucesso")
    }
    
    if (tipoUsuarioValue === "" || tipoUsuarioValue === null){
    tipoUsuario.className = "form-control is-invalid"
    console.log("Confirmação da senha é um campo obrigatório")     
    } else if(tipoUsuarioValue.length < 8) {
        console.log("Cadastro realizado com sucesso")
    }

    if (emailValue === "" || emailValue === null){
    email.className = "form-control is-invalid"
    console.log("E-mail é um campo obrigatório")     
    } else {
        console.log("Cadastro realizado com sucesso")
    }

    if (senhaValue === "" || senhaValue === null){
    senha.className = "form-control is-invalid"
    console.log("Senha é um campo obrigatório")     
    } else {
        console.log("Cadastro realizado com sucesso")
    }

    if (senha2Value === "" || senha2Value === null){
    senha2.className = "form-control is-invalid"
    console.log("Confirmação da senha é um campo obrigatório")     
    } else if(senhaValue.length < 8) {
        console.log("Cadastro realizado com sucesso")
    }

    

function validarEmail(cv) {
    let re = /^[\w!#$%&'*+\/=?^`{|}~-]+(\.[\w!#$%&'*+\/=?^`{|}~-]+)*@(([\w-]+\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/;//só aceita 8 digitos, onde devem ser de 0 a 9
    return re.test(cv)
}

}
