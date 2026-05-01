# 📚 Gerenciador de Biblioteca Pessoal

## Aluno
Warley Alves de Almeida — Fatec

## Descrição
Aplicação de console desenvolvida em TypeScript que permite gerenciar uma biblioteca pessoal.
O sistema possibilita cadastrar livros, marcar leituras, buscar por autor ou título e gerar estatísticas da coleção.

## ⚙️ Funcionamento

Os dados dos livros são armazenados em arrays paralelos, permitindo operações como busca, filtragem e cálculo de estatísticas utilizando métodos como map, filter e reduce.

## Tecnologias
- Node.js 18+
- TypeScript 5+
- ts-node
- Git e GitHub

## Como executar

```bash
# Instalar dependências
npm install

# Executar o projeto
npm run dev
```

## 💻 Exemplo de saída

==================================================
       GERENCIADOR DE BIBLIOTECA PESSOAL
==================================================

=== MINHA BIBLIOTECA ===
1. "O Hobbit" (1937) - J.R.R. Tolkien - 310 pag - LIDO (5/5)
2. "Clean Code" (2008) - Robert C. Martin - 464 pag - LIDO (4/5)
3. "1984" (1949) - George Orwell - 328 pag - PENDENTE
4. "Dom Casmurro" (1899) - Machado de Assis - 256 pag - LIDO (5/5)
5. "O Nome do Vento" (2007) - Patrick Rothfuss - 662 pag - PENDENTE

=== ESTATÍSTICAS ===
Total de livros: 5
Livros lidos: 3 (60.00%)
Média das avaliações: 4.67
Livro melhor avaliado: O Hobbit
Total de páginas lidas: 1030

=== POR DÉCADA ===
1890s: Dom Casmurro
1930s: O Hobbit
1940s: 1984
2000s: Clean Code, O Nome do Vento

## Funcionalidades

- Exibir todos os livros da biblioteca
- Adicionar e remover livros
- Buscar livros por título
- Listar livros por autor
- Marcar livros como lidos com avaliação (1 a 5)
- Listar livros lidos e pendentes
- Estatísticas: total de livros, percentual lido, média de avaliações, livro melhor avaliado e total de páginas lidas
- Classificação dos livros por década

## Estrutura do projeto

biblioteca-pessoal/
├── src/
│   └── index.ts
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

## Conceitos aplicados

| Aula | Conceito | Aplicação |
|------|----------|-----------|
| 01 | Git e GitHub | Commits por etapa |
| 02 | Node.js e npm | package.json e scripts |
| 03 | TypeScript | Tipagem explícita e strict mode |
| 04 | Controle de fluxo | if/else para validações |
| 05 | Funções | Funções tipadas e reutilizáveis |
| 06 | Arrays | map, filter, reduce e forEach |

