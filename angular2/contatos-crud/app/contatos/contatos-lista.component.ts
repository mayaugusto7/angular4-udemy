import { DialogService } from './../dialog.service';
import { Contato } from './contato.model';
import { selector } from 'rxjs/operator/publish';
import { Component, OnInit } from '@angular/core';
import { ContatoService } from './contato.service';


// module.id usado somente quando for um templateUrl ou stylesUrl, para que ele consiga encontrar a referencia o template html
// providers prove os servicos para uso pode ser passado no compoenent ou modulo
// no Component so fica visivel apenas para o component, no modulo exmplo contato, fica visivel apenas para quem utiliza o modulo,
// no AppModule fica disponivel para toda a aplicacao
//  
@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html'
})
export class ContatosListaComponent implements OnInit {
    
    contatos: Contato[];
    mensagem: {};
    classesCss: {};
    private currentTimeout: any;

    /**
     * Injetar servico pelo contrustor boa pratica
     * Nao instanciar o servico, quebra a injecao de depencia do angular
     * @param contatoService 
     */
    constructor(private contatoService: ContatoService,
                private dialogServce: DialogService) {}

    public ngOnInit(): void {
        this.contatoService.getContatos()
        .then((contatos: Contato[]) => {
            this.contatos = contatos;
        }).catch(err => {
            console.log('Aconteceu um erro: ', err);
            this.mostrarMensagem({
                tipo: 'danger',
                texto: 'Ocorreum erro ao buscar a lista de contatos!'
            })
        });
    }

    onDelete(contato: Contato): void {

        this.dialogServce.confirm('Deseja deletar o contato ' + contato.nome + '?')
            .then((canDelete: boolean) => {

                if (canDelete) {
                    this.contatoService
                        .delete(contato)
                        .then(() => {
                            this.contatos = this.contatos.filter((c: Contato) => c.id != contato.id);

                            this.mostrarMensagem({
                                tipo: 'success',
                                texto: 'Contato deletado!'
                            })
                        }).catch(err => {
                            console.log(err);

                            this.mostrarMensagem({
                                tipo: 'danger',
                                texto: 'Ocorreu um erro ao deletar o contato!'
                            })
                        })
                }

            })
        console.log(contato);
    }

    private mostrarMensagem(mensagem: { tipo: string, texto: string }): void {

        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);

        if (mensagem.tipo != 'danger') {
            
            if (this.currentTimeout) {
                clearTimeout(this.currentTimeout);
            }
            
            this.currentTimeout =  setTimeout(() => {
                this.mensagem = undefined;
            }, 3000);
        }
     

 
    }

    private montarClasses(tipo: string): void {

        this.classesCss = {
            'alert': true,
        };

        this.classesCss['alert-' + tipo] = true; //alert-danger ou success

        /**
         * {
         *     'alert': true,
         *     'alert-success': true,
         *     'alert-danger': false
         * }
         */

    }
    
}