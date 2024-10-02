import { Cliente } from "./clients/Cliente";
import { FabricaDeMoveis } from "./factory/FabricaDeMoveis";
import { TipoMovel } from "./enums/TipoMovel";
import { Estilo } from "./enums/Estilo";
import { Material } from "./enums/Material";
import { Sofa } from "./models/Sofa";
import { Cadeira } from "./models/Cadeira";
import { MesaDeCentro } from "./models/MesaDeCentro";

const cliente1 = new Cliente(
  "João Silva",
  "joao.silva@email.com",
  "Rua das Flores, 123",
  "16 99999-9999"
);

const cliente2 = new Cliente(
  "Maria Silva",
  "maria.silva@email.com",
  "Avenida dos Jardins, 321",
  "16 99999-8888"
);

const fabrica = new FabricaDeMoveis();

const pedido1: Sofa = cliente1.fazerPedido(
  TipoMovel.Sofa,
  Estilo.Vitoriano,
  "vermelho",
  Material.Veludo,
  3,
  fabrica
);

const pedido2: Cadeira = cliente2.fazerPedido(
  TipoMovel.Cadeira,
  Estilo.Moderno,
  "azul",
  Material.Plastico,
  2,
  fabrica
);
const pedido3: MesaDeCentro = cliente1.fazerPedido(
  TipoMovel.MesaDeCentro,
  Estilo.ArtDeco,
  "preto",
  Material.Madeira,
  5,
  fabrica
);
const pedido4: Cadeira = cliente2.fazerPedido(
  TipoMovel.Cadeira,
  Estilo.Vitoriano,
  "verde",
  Material.Aco,
  4,
  fabrica
);

console.log(pedido1.combinaCom(pedido2));
console.log(pedido1.combinaCom(pedido4));
