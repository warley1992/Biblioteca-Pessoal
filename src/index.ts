// Arrays paralelos para armazenar os livros
const titulos: string[] = [];
const autores: string[] = [];
const anos: number[] = [];
const paginas: number[] = [];
const lido: boolean[] = [];
const avaliacoes: number[] = [];

// Dados iniciais
titulos.push('O Hobbit', 'Clean Code', '1984', 'Dom Casmurro', 'O Nome do Vento');
autores.push('J.R.R. Tolkien', 'Robert C. Martin', 'George Orwell', 'Machado de Assis', 'Patrick Rothfuss');
anos.push(1937, 2008, 1949, 1899, 2007);
paginas.push(310, 464, 328, 256, 662);
lido.push(true, true, false, true, false);
avaliacoes.push(5, 4, 0, 5, 0);

function exibirBiblioteca(): void {
  console.log('\n=== MINHA BIBLIOTECA ===');
  titulos.forEach((titulo, i) => {
    const status = lido[i] ? `LIDO (${avaliacoes[i]}/5)` : 'PENDENTE';
    console.log(`${i + 1}. "${titulo}" (${anos[i]}) - ${autores[i]} - ${paginas[i]} pag - ${status}`);
  });
  console.log('');
}

function adicionarLivro(titulo: string, autor: string, ano: number, numeroPaginas: number): void {
  if (ano <= 0) {
    console.log('Erro: o ano deve ser maior que 0');
    return;
  }
  if (numeroPaginas <= 0) {
    console.log('Erro: o número de páginas deve ser maior que 0');
    return;
  }

  titulos.push(titulo);
  autores.push(autor);
  anos.push(ano);
  paginas.push(numeroPaginas);
  lido.push(false);
  avaliacoes.push(0);

  console.log(`Livro "${titulo}" adicionado com sucesso!`);
}

function removerLivro(indice: number): void {
  if (indice < 0 || indice >= titulos.length) {
    console.log('Erro: índice inválido');
    return;
  }

  const tituloRemovido = titulos[indice];

  titulos.splice(indice, 1);
  autores.splice(indice, 1);
  anos.splice(indice, 1);
  paginas.splice(indice, 1);
  lido.splice(indice, 1);
  avaliacoes.splice(indice, 1);

  console.log(`Livro "${tituloRemovido}" removido com sucesso!`);
}

function buscarPorTitulo(termo: string): number[] {
  const resultado: number[] = [];
  titulos.forEach((titulo, i) => {
    if (titulo.toLowerCase().includes(termo.toLowerCase())) {
      resultado.push(i);
    }
  });
  return resultado;
}

function listarPorAutor(autor: string): string[] {
  return titulos.filter((_, i) => (autores[i] ?? '').toLowerCase() === autor.toLowerCase());
}

function marcarComoLido(indice: number, avaliacao: number): void {
  if (indice < 0 || indice >= titulos.length) {
    console.log('Erro: índice inválido');
    return;
  }
  if (avaliacao < 1 || avaliacao > 5) {
    console.log('Erro: a avaliação deve ser entre 1 e 5');
    return;
  }

  lido[indice] = true;
  avaliacoes[indice] = avaliacao;

  console.log(`"${titulos[indice]}" marcado como lido com avaliação ${avaliacao}/5!`);
}

function listarLidos(): string[] {
  return titulos.filter((_, i) => lido[i]);
}

function listarPendentes(): string[] {
  return titulos.filter((_, i) => !lido[i]);
}

// Teste
//exibirBiblioteca();

// Teste
marcarComoLido(2, 4);
marcarComoLido(0, 6); // deve mostrar erro

console.log('\nLivros lidos:');
listarLidos().forEach((t) => console.log(`  - ${t}`));

console.log('\nLivros pendentes:');
listarPendentes().forEach((t) => console.log(`  - ${t}`));