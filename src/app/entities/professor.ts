import { Pessoa } from './pessoa.interface';
import { Titulacao } from './enumeration/titulacao.enum';

export class Professor implements Pessoa {

  nome: string;
  email: string;
  cpf: string;

  constructor(
    public pessoa: Pessoa,
    public titulacao: Titulacao
  ) {
    this.nome = pessoa.nome;
    this.email = pessoa.email;
    this.cpf = pessoa.cpf;
  }

}
