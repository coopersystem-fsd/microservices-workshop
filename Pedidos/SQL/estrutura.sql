CREATE TABLE "pedidos" (
  "pedido" varchar PRIMARY KEY,
  "numero_pedido" int,
  "endereco_entrega" varchar,
  "valor" decimal,
  "forma_pagamento" varchar,
  "status" varchar,
  "data_hora" timestamp,
  "restaurante" varchar,
  "cliente" varchar
);

CREATE TABLE "historico_pedidos" (
  "pedido" varchar,
  "status" varchar,
  "data_hora" timestamp
);

CREATE TABLE "pedido_itens" (
  "item" varchar PRIMARY KEY,
  "pedido" varchar,
  "valor" decimal
);

CREATE TABLE "forma_pagamento_pedidos" (
  "forma_pagamento" varchar PRIMARY KEY,
  "descricao" varchar
);

CREATE TABLE "status_pedidos" (
  "status" varchar PRIMARY KEY,
  "descricao" varchar
);

ALTER TABLE "pedidos" ADD FOREIGN KEY ("forma_pagamento") REFERENCES "forma_pagamento_pedidos" ("forma_pagamento");

ALTER TABLE "pedidos" ADD FOREIGN KEY ("status") REFERENCES "status_pedidos" ("status");

ALTER TABLE "historico_pedidos" ADD FOREIGN KEY ("pedido") REFERENCES "pedidos" ("pedido");

ALTER TABLE "pedido_itens" ADD FOREIGN KEY ("pedido") REFERENCES "pedidos" ("pedido");
