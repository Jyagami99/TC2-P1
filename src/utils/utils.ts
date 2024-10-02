import * as readlineSync from 'readline-sync';

const YES = 'Y';
const NO = 'N';

/**
 * Função para obter entrada do usuário com validação.
 * @returns {string} - Retorna 'Y' ou 'N' após validação.
 */
export function getUserInput(): string {
  let answer: string;
  while (true) {
    try {
      answer = readlineSync.question('').toUpperCase();
      if (answer === YES || answer === NO) {
        break;
      } else {
        console.log("Entrada inválida. Por favor, digite 'Y' para sim ou 'N' para não.");
      }
    } catch (error) {
      console.log("Ocorreu um erro ao ler a entrada. Tente novamente.");
    }
  }
  return answer;
}