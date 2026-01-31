import { pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const estadoEnum = pgEnum("estado", ["livre", "arrendado"])

export const livros = pgTable("livros", {
  id: uuid("id").defaultRandom().primaryKey(),
  titulo: text("titulo").notNull(),
  autor: text("autor").notNull(),
  anoPublicacao: text("ano_publicacao").notNull(),
})


// Acima poderei aumentar mais informacoes 