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


const addEvento = document.querySelector('.btn-addEvento');
addEvento.addEventListener('click', function(){
    iniciaModal('conteudo-btn-addEvento');
});
