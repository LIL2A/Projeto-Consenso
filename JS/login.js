const form = document.getElementById("form-action")
const login = document.getElementById("login")
const senha = document.getElementById("senha")
const divLogin = document.getElementById("div-login")
const divSenha = document.getElementById("div-senha")



//eventListener

form.addEventListener ("submit", function(event) {
  event.preventDefault()
  validarEntradas(login,senha)
})

var verificarLogin = 0
var verificarSenha = 0

document.getElementById("inputLogin").addEventListener ("focus", function(){
  this.value = ""
  var verificarLogin = 0
  login.classList.remove("is-invalid")
  divLogin.removeChild(itemLogin)
  
})

document.getElementById("inputSenha").addEventListener ("focus", function(){
  this.value = ""
  var verificarSenha = 0
  senha.classList.remove("is-invalid")
  divSenha.removeChild(itemSenha)
})


function validarEntradas(l,s) {
    const loginValue = String(l.value)
    const senhaValue = String(s.value)


    if (loginValue === "" || loginValue == null) {
        if(verificarLogin == 0){
            login.className = "form-control is-invalid"
            let itemLogin = document.createElement("p")
            itemLogin.id = "itemLogin"
            divLogin.appendChild(itemLogin)
            itemLogin.innerHTML="O campo Login é obrigatório"
            itemLogin.style ="color:red; text-align:left;"
            verificarLogin = 1
            
        }
            
    } else if (senhaValue === "" || senhaValue == null) {
        if (verificarSenha == 0){
            senha.className ="form-control is-invalid"
            let itemSenha = document.createElement("p")
            itemSenha.id ="itemSenha"
            divSenha.appendChild(itemSenha)
            itemSenha.innerHTML ="Senha é um campo obrigatório"
            itemSenha.style ="text-align:left; color:red;"
            verificarSenha = 1
            
        }
        

    } else if (senhaValue.length < 6) {
        console.log("A senha deve ter no mínimo 6 caracteres.")

        if (verificarSenha == 0){
            senha.className ="form-control is-invalid"
            var itemSenha = document.createElement("p")
            itemSenha.id ="itemSenha"
            divSenha.appendChild(itemSenha)
            itemSenha.innerHTML ="A senha deve ter no mínimo 6 caracteres."
            itemSenha.style ="text-align:left; color:red;"
            verificarSenha = 1
            
        }
    } else {
        window.alert("Login realizado com sucesso!")
    }
}

function validarEmail(ev) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(ev)
}

document.querySelector("#formId").addEventListener("submit", submitForm)

function submitForm(event){
    event.preventDefault();
    let input1 = document.querySelector("#inputId1").value;
    let input2 = document.querySelector("#inputId2").value;
    let data = {input1:input1, input2:input2};

    fetch("api endpoint url", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
    })
   }