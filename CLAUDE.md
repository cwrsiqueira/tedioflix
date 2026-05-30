# TédioFlix — Contexto do Projeto (Claude Code)

> Streaming de conteúdo entediante. Hackathon **Codecon Universe 26** (29–31/05/2026). Projeto **solo**.
> Nome "TédioFlix" é provisório — pode ser trocado.
> Leia também: `docs/PLAN.md` (roadmap por etapas) e `docs/seed-videos.json` (catálogo de vídeos).

## O que é
Um "Netflix do tédio": catálogo de vídeos longos e entediantes do YouTube (tinta secando,
água fervendo, grama crescendo, lareira, chuva na janela) numa interface familiar de streaming.
A graça está no contraste — UI séria de streaming + conteúdo absurdamente sem graça.
Categoria do hackathon: "absurdo com propósito".

## Stack (fixa)
- **Backend:** Laravel (PHP) + **SQLite** (arquivo único, sem servidor de banco).
- **Frontend:** React via **Inertia** (Laravel Breeze, stack React/Inertia) + Vite.
- **Player:** iframe embed do YouTube (`youtube.com/embed/{id}`). **SEM YouTube Data API.**
- Sem autenticação obrigatória, sem pagamento, sem painel admin. Manter simples.

## Regras inegociáveis
- **Setup em ≤5 min** (critério do júri): instalar deps → `migrate --seed` → rodar dev. Zero serviço externo.
- **Catálogo é seed estático** a partir de `docs/seed-videos.json`. Não integrar API do YouTube.
- **Thumbnails** vêm de `https://img.youtube.com/vi/{youtube_id}/hqdefault.jpg` (sem API).
- **Sem segredos no repo.** Só SQLite no `.env`; `.env` fica no `.gitignore` (padrão Laravel).
- **pt-BR** em todo texto de interface e documentação.
- **Roda de verdade.** Nada de tela branca; fluxo mínimo ponta a ponta tem prioridade sobre firula.

## Fluxo de trabalho (IMPORTANTE)
- Trabalhe em **etapas**, na ordem de `docs/PLAN.md`.
- Ao **fim de cada etapa**: PARE. Mostre o que foi feito, como testar, e espere eu responder
  "aprovado" antes de seguir para a próxima.
- **Um commit por etapa**, mensagem clara em pt-BR. Não fazer `commit`/`push` sem eu pedir.
- Explique as decisões de forma curta — **eu sou o autor do projeto** e preciso entender o código
  (regra do hackathon: IA é permitida, mas o autor intelectual sou eu).
- Mudanças pequenas e revisáveis. Rode o que der pra rodar antes de dizer que terminou.

## Comandos (ajustar conforme o scaffold gerar)
- Instalar: `composer install && npm install`
- Banco: `php artisan migrate --seed`
- Dev: `composer run dev` (ou `php artisan serve` + `npm run dev` em paralelo)

## Estilo
- Visual: "vibe" de streaming — fileiras horizontais por categoria, hero no topo, cards com hover.
  Caprichado, mas sem over-engineering.
- Texto: sério-burocrático aplicado ao tédio. A piada se conta sozinha.
