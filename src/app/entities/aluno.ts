import { Pessoa } from './pessoa.interface';
import { FormaIngresso } from './enumeration/forma-ingresso.enum';

export class Professor implements Pessoa {

  nome: string;
  email: string;
  cpf: string;

  constructor(
    public pessoa: Pessoa,
    public matricula: number,
    public formaIngresso: FormaIngresso
  ) {
    this.nome = pessoa.nome;
    this.email = pessoa.email;
    this.cpf = pessoa.cpf;
  }

}
