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


const aluno1 = document.querySelector('.btn-solicitar');
aluno1.addEventListener('click', function(){
    iniciaModal('conteudo-btn-solicitar');
});


const addEvento = document.querySelector('.btn-addEvento');
addEvento.addEventListener('click', function(){
    iniciaModal('conteudo-btn-addEvento');
});
