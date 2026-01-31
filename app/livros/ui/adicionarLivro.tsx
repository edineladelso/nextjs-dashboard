"use client"

import { criarLivro } from "@/actions/book-actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function FormCriarLivro (){

  return(
    <form action={criarLivro} className="max-w-[400px] flex flex-col mx-auto gap-4">
      <Input name="titulo" placeholder="Título"/>
      <Input name="autor" placeholder="Autor" />
      <Input name="anoPublicacao" placeholder="Ano" />

      <Button type="submit">Adicionar</Button>
    </form>
  )
}