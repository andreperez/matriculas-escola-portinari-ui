import { Professor } from './professor';
import { Turma } from './turma';

export class Disciplina {

  constructor(
    public descricao: string,
    public sigla: string,
    public cargaHoraria: number,
    public professor: Professor,
    public turmas: Turma[]
  ) {

  }
}
