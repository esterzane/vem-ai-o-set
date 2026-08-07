# vem aí o set

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:4321`.

## Estrutura

- `src/content/knowledge/*.md` — cada arquivo é uma pergunta/artigo. O
  frontmatter controla título, categoria, tags, data e se aparece o
  formulário de contribuição (`openQuestion: true/false`).
- `src/pages/index.astro` — página inicial, monta todas as seções.
- `src/pages/knowledge/[slug].astro` — página de cada pergunta, gerada
  automaticamente a partir dos arquivos em `src/content/knowledge`.
- `src/components/` — um arquivo por bloco da página (Hero, Filters,
  ContentGrid, ContributeForm, etc.), fácil de estilizar um de cada vez.

## Antes de publicar

1. Crie uma conta em [formspree.io](https://formspree.io) e crie um form.
2. Troque `YOUR_FORM_ID` em `src/components/ContributeForm.astro` e
   `src/components/Newsletter.astro` pelo ID real.
3. `npm run build` para gerar o site estático em `dist/`.
4. Suba o repositório para o GitHub e conecte na Vercel — deploy
   automático a cada push.
