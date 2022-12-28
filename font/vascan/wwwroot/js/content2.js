class Aluno2 {
    constructor() {
        this.id2 = 1;
        this.arrayAlunos = [];
        this.editId = null;
    }

    salvar2 () {
        let aluno = this.lerDados();

        if(this.validaCampos2(aluno) == true) {
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

    excluir(id2) {

            let tbody = document.getElementById('tbody2')

            for(let i = 0; i < this.arrayAlunos.length; i++) {
                if(this.arrayAlunos[i].id2 == id2) {
                    this.arrayAlunos.splice(i, 1)
                    tbody.deleteRow(i);
                }
            }
    }

    listaTabela() {
        let tbody2 = document.getElementById('tbody2');
        tbody2.innerText = '';

        for(let i = 0; i < this.arrayAlunos.length; i++) {

            // content1

            let tr = tbody2.insertRow();

            let td_id= tr.insertCell();
            let td_aluno= tr.insertCell();
            let td_faltas= tr.insertCell();
            let td_notas= tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayAlunos[i].id2;
            td_aluno.innerText = this.arrayAlunos[i].nomeAluno2;
            td_faltas.innerText = this.arrayAlunos[i].faltas2;
            td_notas.innerText = this.arrayAlunos[i].notas2;

            td_id.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = '../img/edit.ico';
            imgEdit.setAttribute("onclick", 'aluno2.preparaEdicao('+ JSON.stringify(this.arrayAlunos[i]) +')');


            let imgDelete = document.createElement('img');
            imgDelete.src = '../img/delete.ico';
            imgDelete.setAttribute("onclick", "aluno2.excluir("+this.arrayAlunos[i].id2+")");

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);
        }
    
    }

    adicionar(aluno) {
        this.arrayAlunos.push(aluno);
        this.id2++
    }

    atualizar(id2 , aluno) {
        for(let i = 0; i < this.arrayAlunos.length; i++) {
            if(this.arrayAlunos[i].id2 == id2){
                this.arrayAlunos[i].nomeAluno2 = aluno.nomeAluno2;
                this.arrayAlunos[i].notas2 = aluno.notas2;
                this.arrayAlunos[i].faltas2 = aluno.faltas2;
            }
        }
    }

    preparaEdicao(aluno) {
        this.editId = aluno.id2

        document.getElementById('input-aluno2').value = aluno.nomeAluno2;
        document.getElementById('input-faltas2').value = aluno.faltas2;
        document.getElementById('input-notas2').value = aluno.notas2;

        document.getElementById('btn2').innerText = 'Atualizar'
    }

    lerDados() {
        let aluno = {}

        aluno.id2 = this.id2;
        aluno.nomeAluno2 = document.getElementById('input-aluno2').value;
        aluno.faltas2 = document.getElementById('input-faltas2').value;
        aluno.notas2 = document.getElementById('input-notas2').value;

        return aluno;
    }

    validaCampos2(aluno) {
        let msg = '';

        if(aluno.nomeAluno2 == '') {
            msg += '- Informa o nome do aluno \n'
        }
        if(aluno.faltas2 == '') {
            msg += '- Informa as faltas do aluno \n'
        }
        if(aluno.notas2 == '') {
            msg += '- Informa as notas do aluno \n'
        }
        
        if(msg != '') {
            alert(msg);
            return false;
        }

        return true;
    }

    cancelar() {
        document.getElementById('input-aluno2').value = '';
        document.getElementById('input-faltas2').value = '';
        document.getElementById('input-notas2').value = '';

        document.getElementById('btn2').innerText = 'Salvar'
    }
}

var aluno2 = new Aluno2()