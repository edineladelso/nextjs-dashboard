"use server"

import { db } from "@/lib/drizzle/db"
import { livros } from "@/lib/drizzle/db/schema"
import { livroSchema } from "@/lib/validations/validators"
import { revalidatePath } from "next/cache"

export async function criarLivro(formData:FormData): Promise<void> {
  // funcao que cria livros
  const dadoBruto = {
    titulo: formData.get("titulo"),
    autor: formData.get("autor"),
    anoPublicacao: formData.get("anoPublicacao"),
  }

  const analisado = livroSchema.safeParse(dadoBruto)

  if (!analisado.success){
    throw new Error("Dados invalidos")
  }

  const livro = analisado.data

  // espaço do drizzle
  await db.insert(livros).values(analisado.data)

  // por agora terei console.log()

  console.log("Livro validado", livro)

  revalidatePath("/livros")
}

export async function listarLivros() {
  const resultado = await db.select().from(livros)
  return resultado
}
