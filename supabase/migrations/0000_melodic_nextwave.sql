CREATE TABLE "livros" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"titulo" text NOT NULL,
	"autor" text NOT NULL,
	"ano_publicacao" text NOT NULL
);
