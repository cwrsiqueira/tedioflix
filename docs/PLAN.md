# Roadmap por Etapas — TédioFlix

**Regra geral:** ao fim de cada etapa, PARAR e esperar minha aprovação. Um commit por etapa.
Ordem é MVP primeiro (etapas 0→3 fazem o app rodar ponta a ponta); firula vem depois.

---

## ✅ Etapa 0 — Scaffold e setup
**Objetivo:** o app sobe (mesmo que em branco).
- `laravel new tedioflix` (ou na pasta atual). Escolher Breeze com stack **React + Inertia**.
- Configurar `.env` para SQLite: `DB_CONNECTION=sqlite`; criar `database/database.sqlite`;
  remover/ignorar as variáveis de host/porta/usuário de banco.
- `php artisan migrate` + `npm run dev`.
- **Portão:** a página inicial do Inertia carrega no navegador, sem erro no console.
- **Notas:** `bootstrap.js` criado manualmente (faltou no scaffold do Breeze); `legacy-peer-deps=true`
  no `.npmrc` para contornar conflito `@vitejs/plugin-react` × Vite 8.

## ✅ Etapa 1 — Modelo de dados + seed
**Objetivo:** catálogo dentro do banco.
- Migration `videos`: `category` (string), `title` (string), `youtube_id` (string), timestamps.
- Model `Video`.
- Seeder que lê `docs/seed-videos.json` e popula a tabela.
- `php artisan migrate:fresh --seed`.
- **Portão:** `php artisan tinker` → `App\Models\Video::count()` retorna ~24. ✓ retornou 24.

## ✅ Etapa 2 — Catálogo (home)
**Objetivo:** grid de streaming na home.
- Controller + rota `/` que devolve os vídeos agrupados por `category`.
- Página React: fileiras horizontais por categoria (estilo Netflix), cards com thumbnail
  (`https://img.youtube.com/vi/{youtube_id}/hqdefault.jpg`), título e categoria.
- **Portão:** a home mostra as 5 categorias com seus cards e thumbnails reais. ✓

## ✅ Etapa 3 — Player (fluxo mínimo ponta a ponta)
**Objetivo:** clicar e assistir. É o fluxo mínimo exigido pelo júri.
- Ao clicar num card, abrir player (rota `/assistir/{id}`) com iframe embed do YouTube.
- **Portão:** clicar num card e o vídeo tocar embutido na página. ✓
- **Extra:** botão "Emitir Laudo de Tédio" (restrição absurda da equipe Vamo lá só eu — ANCE).

## ✅ Etapa 4 — Personalidade absurda
**Objetivo:** a piada aparece.
- Copy bem-humorada (hero, descrições das fileiras).
- "Continue Assistindo" via `localStorage`.
- Recomendações com 97,3% de precisão (IBRD).
- Duração fake ("10h07 de puro nada"), selo "ABSOLUTE CINEMA".
- **Portão:** dá pra rir só navegando. ✓

## ✅ Etapa 5 — README + acabamento
**Objetivo:** rodar em 5 min do zero + entregável completo.
- README em pt-BR com setup passo a passo, stack, link demo (tedioflix.com).
- Polish visual; responsividade verificada.
- Teste de fogo com `--no-interaction` para criação automática do SQLite.
- **Portão:** outra pessoa conseguiria rodar seguindo apenas o README. ✓

## ✅ Deploy — Hostinger (tedioflix.com)
**Fora do plano original, realizado em 2026-05-30.**
- Hospedagem compartilhada hPanel; PHP 8.2 no SSH vs 8.3 no projeto.
- Solução: `composer install --ignore-platform-req=php`.
- `.htaccess` na raiz redirecionando para `/public`.
- `public/build` incluído no repositório (sem Node.js no servidor).

## ✅ Extras pós-plano (2026-05-30)
- **Landing page** (`/`): logo gigante, botão "Começar a Não Fazer Nada", toggle "Saiba mais"
  com texto filosófico (Camus, Heidegger, Wu Wei, Charlie Shackleton). Catálogo movido para `/catalogo`.
- **Sugestões dos tutores:**
  - Comentário de uma linha em `Video.php` ("Receber valores é o oposto de não receber valores.")
  - Descrições entediantes por vídeo no seed + coluna `description` no banco + exibição no Watch
  - `docs/APRESENTACAO.md` criado para o pitch ao vivo (se top 5, domingo 17h)
- **Vídeo demo:** gravado e aprovado. ✓
- **Devpost:** preencher domingo de manhã antes das 13h.

---

## Se faltar tempo (plano de corte)
- **Etapas 0→3 = MVP inegociável** (o app tem que rodar de ponta a ponta).
- **Etapa 4** é onde se ganha ponto em "absurdo" e "originalidade".
- **Etapa 5 (README)** é obrigatória pra elegibilidade — nunca pular.
