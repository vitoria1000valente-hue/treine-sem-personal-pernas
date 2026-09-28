# Treine sem Personal — Pernas

Página responsiva em React e Vite. O GitHub Actions publica automaticamente a versão mais recente no GitHub Pages quando há uma atualização na branch `main`.

## Configuração

- Vídeo: cole o link do YouTube em `youtubeUrl`, no início de `src/App.jsx`.
- Compra: substitua `SEU_LINK_DE_CHECKOUT_AQUI` pelo endereço real do checkout.
- WhatsApp: substitua `SEU_NUMERO_AQUI` pelo número no formato internacional, sem espaços.

As imagens usadas pela página estão em `public/images` e são publicadas junto com o site.

## Desenvolvimento local

```sh
pnpm install
pnpm dev
```

## Publicação

O workflow em `.github/workflows/deploy-pages.yml` gera e publica o site no GitHub Pages a cada atualização da branch `main`. Na primeira publicação, selecione **GitHub Actions** como origem da página em **Settings → Pages** do repositório.
