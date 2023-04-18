import geraSenha from "./Geradores";
const senhaGerada = document.querySelector('.senha-gerada')
const qtdCaracteres = document.querySelector('.qtd-caracteres')
const chkMaiusculas = document.querySelector('.chk-maiusculas')
const chkMinusculas = document.querySelector('.chk-minusculas')
const chkNumeros = document.querySelector('.chk-numeros')
const chkSimbolos = document.querySelector('.chk-simbolos')
const btnGerarSenhar = document.querySelector('.gerar-senha')


export default () => {
    btnGerarSenhar.addEventListener('click', ()=>{
        senhaGerada.innerHTML = gera();
    })
}

function gera(){
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    )
    return senha || 'Preencha pelo menos alguma opção'
}