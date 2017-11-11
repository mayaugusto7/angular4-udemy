import { Contato } from './contatos/contato.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';


/**
 * Simula um webservice mockado.
 * return contatos e o mesmo que return {'contatos': contatos}
 */
export class InMemoryDataService implements InMemoryDbService {
    
    
    createDb(): {} {
        
        let contatos: Contato[] = [
            {id: 1, nome: 'Marcos Antonio', email: 'marcos@email.com', telefone: '(62) 9999-9999' },
            {id: 2, nome: 'Rosemary Martins', email: 'rosemary@email.com', telefone: '(62) 8888-8888' },
            {id: 3, nome: 'Thaynara Chris', email: 'thaynara@email.com', telefone: '(62) 6666-6666' },
            {id: 4, nome: 'Maycon Augusto', email: 'maycon@email.com', telefone: '(62) 7777-7777' },
            {id: 5, nome: 'José Antonio', email: 'ze@email.com', telefone: '(62) 5555-5555' },
            {id: 6, nome: 'Maria', email: 'maria@email.com', telefone: '(62) 4444-4444' },
            {id: 7, nome: 'Marta', email: 'marta@email.com', telefone: '(62) 3333-3333' }
        ];

        let carros: any[] = [
            {id: 1, descricao: 'Camaro'},
            {id: 2, descricao: 'Mustang'}
        ]

        return {
            contatos,
            carros
        };
    }

}