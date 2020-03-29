import { Pessoa } from './pessoa.interface';
import { FormaIngresso } from './enumeration/forma-ingresso.enum';
import { Turma } from './turma';

export class Professor implements Pessoa {

  constructor(
    public nome: string,
    public email: string,
    public cpf: string,
    public matricula: number,
    public formaIngresso: FormaIngresso,
    public turmas: Turma[]
  ) {

  }

}
