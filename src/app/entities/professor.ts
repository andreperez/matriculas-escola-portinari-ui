import { Pessoa } from './pessoa.interface';
import { Titulacao } from './enumeration/titulacao.enum';
import { Disciplina } from './disciplina';

export class Professor implements Pessoa {

  constructor(
    public nome: string,
    public email: string,
    public cpf: string,
    public titulacao: Titulacao,
    public disciplinas: Array<Disciplina>
  ) {

  }

}

