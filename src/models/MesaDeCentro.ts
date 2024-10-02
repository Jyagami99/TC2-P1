import { Movel } from "./Movel";
import { getUserInput } from '../utils/utils';

export class MesaDeCentro extends Movel {
  combinaCom(outroItem: Movel): boolean {
    const result = this.estilo === outroItem.estilo;
    if (!result) {
      console.log("Os estilos dos itens não combinam. Deseja fazer o pedido mesmo assim? (Y/N).");
      const answer = getUserInput();
      return answer === 'Y';
    }
    return result;
  }
}