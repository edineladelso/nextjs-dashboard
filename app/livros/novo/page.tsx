import FormCriarLivro from "@/app/livros/ui/adicionarLivro"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NovoLivrosPage(){

  return(
    <main className="flex flex-col gap-5 items-center mt-14">
      <h1 className="font-bold text-2xl">Livros</h1>
      <FormCriarLivro/>

      <Button variant={"outline"} >
        <Link href="/livros">Ver livros</Link>
      </Button>
    </main>
  )
}