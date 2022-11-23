class Aluno {
    constructor() {
        this.id = 1;
        this.arrayAlunos = [];
        this.editId = null;
    }


    salvar () {
        let aluno = this.lerDados();

        if(this.validaCampos(aluno) == true) {
            if(this.editId == null) {
                this.adicionar(aluno);
            }
            else {
                this.atualizar(this.editId, aluno)
            }
        }
        this.listaTabela();
        this.cancelar();
    }

    excluir(id) {

        if(confirm('Deseja realmente deletar o ID: ' + id + '?')){

            let tbody = document.getElementById('tbody')

            for(let i = 0; i < this.arrayAlunos.length; i++) {
                if(this.arrayAlunos[i].id == id) {
                    this.arrayAlunos.splice(i, 1)
                    tbody.deleteRow(i);
                }
            }
        }
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayAlunos.length; i++) {

            // content1

            let tr = tbody.insertRow();

            let td_id= tr.insertCell();
            let td_aluno= tr.insertCell();
            let td_faltas= tr.insertCell();
            let td_notas= tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayAlunos[i].id;
            td_aluno.innerText = this.arrayAlunos[i].nomeAluno;
            td_faltas.innerText = this.arrayAlunos[i].faltas;
            td_notas.innerText = this.arrayAlunos[i].notas;

            td_id.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = '~/img/edit.svg';
            imgEdit.setAttribute("onclick", 'aluno.preparaEdicao('+ JSON.stringify(this.arrayAlunos[i]) +')');


            let imgDelete = document.createElement('img');
            imgDelete.src = '~/img/delete.svg';
            imgDelete.setAttribute("onclick", "aluno.excluir("+this.arrayAlunos[i].id+")");

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);
        }
    
    }

    adicionar(aluno) {
        this.arrayAlunos.push(aluno);
        this.id++
    }

    atualizar(id , aluno) {
        for(let i = 0; i < this.arrayAlunos.length; i++) {
            if(this.arrayAlunos[i].id == id){
                this.arrayAlunos[i].nomeAluno = aluno.nomeAluno;
                this.arrayAlunos[i].notas = aluno.notas;
                this.arrayAlunos[i].faltas = aluno.faltas;
            }
        }
    }

    preparaEdicao(aluno) {
        this.editId = aluno.id

        document.getElementById('input-aluno').value = aluno.nomeAluno;
        document.getElementById('input-faltas').value = aluno.faltas;
        document.getElementById('input-notas').value = aluno.notas

        document.getElementById('btn1').innerText = 'Atualizar'
    }

    lerDados() {
        let aluno = {}

        aluno.id = this.id;
        aluno.nomeAluno = document.getElementById('input-aluno').value;
        aluno.faltas = document.getElementById('input-faltas').value;
        aluno.notas = document.getElementById('input-notas').value;

        return aluno;
    }

    validaCampos(aluno) {
        let msg = '';

        if(aluno.nomeAluno == '') {
            msg += '- Informa o nome do aluno \n'
        }
        if(aluno.faltas == '') {
            msg += '- Informa as faltas do aluno \n'
        }
        if(aluno.notas == '') {
            msg += '- Informa as notas do aluno \n'
        }
        
        if(msg != '') {
            alert(msg);
            return false;
        }

        return true;
    }

    cancelar() {
        document.getElementById('input-aluno').value = '';
        document.getElementById('input-faltas').value = '';
        document.getElementById('input-notas').value = '';

        document.getElementById('btn1').innerText = 'Salvar'
    }
}

var aluno = new Aluno()



