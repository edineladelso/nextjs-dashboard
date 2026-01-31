import { listarLivros } from "@/actions/book-actions";

export default async function LivrosPage() {
  const mostrarLivros = await listarLivros();
  if (!mostrarLivros?.length) {
    return <p>sem livros</p>;
  }
  return (
    <main className="w-full px-12 ">
      {mostrarLivros.map((livro) => (
        <ul
          key={livro.id}
          className="flex flex-col items-center max-sm:max-w-xs "
        >
          <li>{livro.titulo}</li>
          <li>{livro.autor}</li>
          <li>{livro.anoPublicacao}</li>
        </ul>
      ))}
    </main>
  );
}
