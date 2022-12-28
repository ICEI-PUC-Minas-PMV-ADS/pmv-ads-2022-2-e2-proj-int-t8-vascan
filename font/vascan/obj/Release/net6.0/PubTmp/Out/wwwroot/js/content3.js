class Aluno3 {
    constructor() {
        this.id3 = 1;
        this.arrayAlunos = [];
        this.editId = null;
    }

    salvar3 () {
        let aluno = this.lerDados();

        if(this.validaCampos3(aluno) == true) {
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

    excluir(id3) {

        if(confirm('Deseja realmente deletar o ID: ' + id3 + '?')){

            let tbody = document.getElementById('tbody3')

            for(let i = 0; i < this.arrayAlunos.length; i++) {
                if(this.arrayAlunos[i].id3 == id3) {
                    this.arrayAlunos.splice(i, 1)
                    tbody.deleteRow(i);
                }
            }
        }
    }

    listaTabela() {
        let tbody3 = document.getElementById('tbody3');
        tbody3.innerText = '';

        for(let i = 0; i < this.arrayAlunos.length; i++) {

            // content1

            let tr = tbody3.insertRow();

            let td_id= tr.insertCell();
            let td_aluno= tr.insertCell();
            let td_faltas= tr.insertCell();
            let td_notas= tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayAlunos[i].id3;
            td_aluno.innerText = this.arrayAlunos[i].nomeAluno3;
            td_faltas.innerText = this.arrayAlunos[i].faltas3;
            td_notas.innerText = this.arrayAlunos[i].notas3;

            td_id.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = '../img/edit.ico';
            imgEdit.setAttribute("onclick", 'aluno3.preparaEdicao('+ JSON.stringify(this.arrayAlunos[i]) +')');


            let imgDelete = document.createElement('img');
            imgDelete.src = '../img/delete.ico';
            imgDelete.setAttribute("onclick", "aluno3.excluir("+this.arrayAlunos[i].id3+")");

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);
        }
    
    }

    adicionar(aluno) {
        this.arrayAlunos.push(aluno);
        this.id3++
    }

    atualizar(id3 , aluno) {
        for(let i = 0; i < this.arrayAlunos.length; i++) {
            if(this.arrayAlunos[i].id3 == id3){
                this.arrayAlunos[i].nomeAluno3 = aluno.nomeAluno3;
                this.arrayAlunos[i].notas3 = aluno.notas3;
                this.arrayAlunos[i].faltas3 = aluno.faltas3;
            }
        }
    }

    preparaEdicao(aluno) {
        this.editId = aluno.id3

        document.getElementById('input-aluno3').value = aluno.nomeAluno3;
        document.getElementById('input-faltas3').value = aluno.faltas3;
        document.getElementById('input-notas3').value = aluno.notas3;

        document.getElementById('btn3').innerText = 'Atualizar'
    }

    lerDados() {
        let aluno = {}

        aluno.id3 = this.id3;
        aluno.nomeAluno3 = document.getElementById('input-aluno3').value;
        aluno.faltas3 = document.getElementById('input-faltas3').value;
        aluno.notas3 = document.getElementById('input-notas3').value;

        return aluno;
    }

    validaCampos3(aluno) {
        let msg = '';

        if(aluno.nomeAluno3 == '') {
            msg += '- Informa o nome do aluno \n'
        }
        if(aluno.faltas3 == '') {
            msg += '- Informa as faltas do aluno \n'
        }
        if(aluno.notas3 == '') {
            msg += '- Informa as notas do aluno \n'
        }
        
        if(msg != '') {
            alert(msg);
            return false;
        }

        return true;
    }

    cancelar() {
        document.getElementById('input-aluno3').value = '';
        document.getElementById('input-faltas3').value = '';
        document.getElementById('input-notas3').value = '';

        document.getElementById('btn3').innerText = 'Salvar'
    }
}

var aluno3 = new Aluno3()