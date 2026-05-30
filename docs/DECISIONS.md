# Log de Decisões — TédioFlix

> Registro curto das decisões importantes e pivots. Serve pra não perder o "porquê" das escolhas
> quando a sessão do Claude Code compactar ou eu abrir uma nova. Uma entrada por decisão relevante.

---

## Decisões

### [2026-05-29] Stack e fonte de conteúdo
- **Contexto:** projeto solo de fim de semana; júri exige setup em ≤5 min e "roda de verdade".
- **Decisão:** Laravel + Inertia/React + SQLite. Catálogo via seed estático (`docs/seed-videos.json`),
  player por iframe embed do YouTube.
- **Alternativas descartadas:** YouTube Data API (quota, key, complexidade desnecessária).
- **Impacto:** sem dependência de serviço externo; setup simples; sem segredos no repo.

### [2026-05-30] Conflito de versão npm (Vite 8 × plugin-react)
- **Contexto:** `laravel-vite-plugin@3.1` exige Vite 8; `@vitejs/plugin-react@4.x` não declarava
  suporte ao Vite 8 no peer dependency, mesmo funcionando na prática.
- **Decisão:** `legacy-peer-deps=true` no `.npmrc` para ignorar a verificação de peer deps.
- **Alternativas descartadas:** downgrade do Vite para 7 (quebrava o `laravel-vite-plugin`).
- **Impacto:** npm install funciona sem flags extras; sem impacto no runtime.

### [2026-05-30] Remoção das pastas .git do vendor
- **Contexto:** extensão `zip` do PHP desabilitada no ambiente de desenvolvimento; Composer baixou
  todos os pacotes via `git clone`, deixando pastas `.git` dentro de `vendor/`. O VS Code exibia
  todos os pacotes como repositórios separados no Source Control.
- **Decisão:** remover todas as pastas `.git` de dentro de `vendor/`.
- **Impacto:** VS Code mostra só o repositório do projeto; nenhum impacto funcional.

### [2026-05-30] public/build incluído no repositório
- **Contexto:** hospedagem compartilhada Hostinger não tem Node.js no servidor — impossível rodar
  `npm run build` após deploy.
- **Decisão:** remover `/public/build` do `.gitignore` e commitar os assets compilados.
- **Alternativas descartadas:** GitHub Actions com rsync (mais complexo, tempo curto de hackathon).
- **Impacto:** cada atualização de frontend exige `npm run build` local antes do commit.

### [2026-05-30] Deploy na Hostinger — PHP 8.2 no SSH vs 8.3 no projeto
- **Contexto:** servidor SSH da Hostinger usa PHP 8.2; projeto requer PHP ^8.3. O hPanel altera
  a versão do PHP para o site mas não para o CLI/SSH.
- **Decisão:** `composer install --no-dev --no-interaction --ignore-platform-req=php`.
- **Alternativas descartadas:** alterar `composer.json` para `^8.2` (exigiria regenerar o lock file).
- **Impacto:** o app roda normalmente; Laravel 13 é compatível com PHP 8.2 na prática.

### [2026-05-30] .htaccess na raiz para redirecionar para /public
- **Contexto:** hospedagem compartilhada usa `public_html` como raiz; não é possível alterar o
  document root pelo hPanel para apontar direto para `/public`.
- **Decisão:** `.htaccess` na raiz com `RewriteRule` redirecionando para `public/$1`.
- **Impacto:** tedioflix.com funciona sem expor arquivos fora da pasta `public/`.

### [2026-05-30] Restrição absurda — botão inútil
- **Contexto:** requisito oficial do hackathon para a equipe "Vamo lá só eu": a interface deve ter
  pelo menos um botão que não faz absolutamente nada mas parece muito importante.
- **Decisão:** botão "Emitir Laudo de Tédio" na página Watch, amarelo, com ícone de escudo.
  Subtexto: "Certificação oficial pela Agência Nacional de Conteúdo Entediante (ANCE)".
- **Impacto:** requisito cumprido; coerente com o tom do projeto.
