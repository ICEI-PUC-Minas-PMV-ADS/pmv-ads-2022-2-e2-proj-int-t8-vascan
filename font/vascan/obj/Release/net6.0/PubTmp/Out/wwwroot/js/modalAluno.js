function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    if(modal){
        modal.classList.add('mostrar')

        modal.addEventListener('click', function(fechar){
            if(fechar.target.id == modalID || fechar.target.className == 'modalCard-fechar'){
                modal.classList.remove('mostrar');
            }
        });
    }
}

/*"Junta" o modal com as informações do aluno x*/
/*OBS: pelo jeito tem q fazer isso pra cada aluno cadastrado*/
const aluno1 = document.querySelector('.aluno1');
aluno1.addEventListener('click', function(){
    iniciaModal('alunoInfo1');
});

const aluno2 = document.querySelector('.aluno2');
aluno2.addEventListener('click', function(){
    iniciaModal('alunoInfo2');
});



/*Funcionalidade do botão de ver a senha*/
let btn = document.querySelector('.bi-eye-fill');
btn.addEventListener('click', function() {
    let input = document.querySelector('#senha-info');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
});