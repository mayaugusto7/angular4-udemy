"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const contatos_moc_1 = require("./contatos-moc");
/**
 * Ele emmite metadados para o angular 2,
 * pra que ele identifica as depencias de contatoService,
 * para fazer a injeção de dependencias corretamente
 *
 * Promise, recebe os dados assim que estiverem prontos,
 * trabalha de forma assincrona, é eager
 *
 * Promise erro ao nao retornar os dados
 */
let ContatoService = class ContatoService {
    getContatos() {
        return Promise.resolve(contatos_moc_1.CONTATOS);
    }
    getContato(id) {
        //  return this.getContatos().then((contatos: Contato[]) => {
        // return contatos.find((contato) => {
        //     return contato.id === id;
        // });
        //});
        return this.getContatos().then((contatos) => contatos.find(contato => contato.id === id));
    }
    getContatosSlowly() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
        }).then(() => {
            console.log('primeiro then');
            return 'Curso Angular 2';
        }).then((param) => {
            console.log('sengundo then');
            console.log(param);
            return new Promise((resolve2, reject2) => {
                setTimeout(() => {
                    console.log('continuando depois de 3 segundos');
                    resolve2();
                }, 3000);
            });
        }).then(() => {
            console.log('terceiro then');
            return this.getContatos();
        });
    }
};
ContatoService = __decorate([
    core_1.Injectable()
], ContatoService);
exports.ContatoService = ContatoService;
//# sourceMappingURL=contato.service.js.map