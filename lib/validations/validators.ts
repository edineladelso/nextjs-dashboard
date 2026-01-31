import {z} from "zod"

export const livroSchema=z.object({
  titulo: z.string().min(1, "Título obrigatorio"),
  autor:z.string().min(1, "Autor obrigatorio"),
  anoPublicacao: z.string().min(4, "Ano invalido"),
})


export type BookInput = z.infer<typeof livroSchema>