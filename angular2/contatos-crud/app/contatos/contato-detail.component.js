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
const contato_model_1 = require("./contato.model");
const contato_service_1 = require("./contato.service");
const core_1 = require("@angular/core");
//Usuados para extrair os parametros das rotas
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
let ContatoDetailComponent = class ContatoDetailComponent {
    constructor(contatoService, route, location) {
        this.contatoService = contatoService;
        this.route = route;
        this.location = location;
    }
    /**
     * sinal de + converte uma string para numero
     * O nome do parametro que pegamos e o id declarado na rota
     *     path: 'contato/save/:id',
     */
    ngOnInit() {
        this.contato = new contato_model_1.Contato(0, '', '', '');
        this.route.params.forEach((params) => {
            let id = +params['id'];
            console.log(id);
            if (id) {
                this.contatoService.getContato(id).then((contato) => {
                    //console.log(contato);
                    this.contato = contato;
                });
            }
        });
    }
    teste() {
        console.log(this.contato);
    }
};
ContatoDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'contato-detail',
        templateUrl: 'contato-detail.component.html'
    }),
    __metadata("design:paramtypes", [contato_service_1.ContatoService,
        router_1.ActivatedRoute,
        common_1.Location])
], ContatoDetailComponent);
exports.ContatoDetailComponent = ContatoDetailComponent;
//# sourceMappingURL=contato-detail.component.js.map