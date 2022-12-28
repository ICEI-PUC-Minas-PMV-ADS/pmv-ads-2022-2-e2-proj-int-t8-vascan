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

/*"Junta" o modal com as informações do professor x*/
/*OBS: pelo jeito tem q fazer isso pra cada professor cadastrado*/
const prof1 = document.querySelector('.prof1');
prof1.addEventListener('click', function(){
    iniciaModal('profInfo1');
});

const prof2 = document.querySelector('.prof2');
prof2.addEventListener('click', function(){
    iniciaModal('profInfo2');
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