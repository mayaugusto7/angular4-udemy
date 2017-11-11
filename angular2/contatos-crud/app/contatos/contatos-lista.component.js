"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const dialog_service_1 = require("./../dialog.service");
const core_1 = require("@angular/core");
const contato_service_1 = require("./contato.service");
// module.id usado somente quando for um templateUrl ou stylesUrl, para que ele consiga encontrar a referencia o template html
// providers prove os servicos para uso pode ser passado no compoenent ou modulo
// no Component so fica visivel apenas para o component, no modulo exmplo contato, fica visivel apenas para quem utiliza o modulo,
// no AppModule fica disponivel para toda a aplicacao
//  
let ContatosListaComponent = class ContatosListaComponent {
    /**
     * Injetar servico pelo contrustor boa pratica
     * Nao instanciar o servico, quebra a injecao de depencia do angular
     * @param contatoService
     */
    constructor(contatoService, dialogServce) {
        this.contatoService = contatoService;
        this.dialogServce = dialogServce;
    }
    ngOnInit() {
        this.contatoService.getContatos()
            .then((contatos) => {
            this.contatos = contatos;
        }).catch(err => {
            console.log('Aconteceu um erro: ', err);
        });
    }
    onDelete(contato) {
        this.dialogServce.confirm('Deseja deletar o contato ' + contato.nome + '?')
            .then((canDelete) => {
            if (canDelete) {
                this.contatoService
                    .delete(contato)
                    .then(() => {
                    this.contatos = this.contatos.filter((c) => c.id != contato.id);
                }).catch(err => {
                    console.log(err);
                });
            }
        });
        console.log(contato);
    }
};
ContatosListaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'contatos-lista',
        templateUrl: 'contatos-lista.component.html'
    }),
    __metadata("design:paramtypes", [contato_service_1.ContatoService,
        dialog_service_1.DialogService])
], ContatosListaComponent);
exports.ContatosListaComponent = ContatosListaComponent;
//# sourceMappingURL=contatos-lista.component.js.map