# Roadmap por Etapas — TédioFlix

**Regra geral:** ao fim de cada etapa, PARAR e esperar minha aprovação. Um commit por etapa.
Ordem é MVP primeiro (etapas 0→3 fazem o app rodar ponta a ponta); firula vem depois.

---

## Etapa 0 — Scaffold e setup
**Objetivo:** o app sobe (mesmo que em branco).
- `laravel new tedioflix` (ou na pasta atual). Escolher Breeze com stack **React + Inertia**.
- Configurar `.env` para SQLite: `DB_CONNECTION=sqlite`; criar `database/database.sqlite`;
  remover/ignorar as variáveis de host/porta/usuário de banco.
- `php artisan migrate` + `npm run dev`.
- **Portão:** a página inicial do Inertia carrega no navegador, sem erro no console.

## Etapa 1 — Modelo de dados + seed
**Objetivo:** catálogo dentro do banco.
- Migration `videos`: `category` (string), `title` (string), `youtube_id` (string), timestamps.
- Model `Video`.
- Seeder que lê `docs/seed-videos.json` e popula a tabela.
- `php artisan migrate:fresh --seed`.
- **Portão:** `php artisan tinker` → `App\Models\Video::count()` retorna ~24.

## Etapa 2 — Catálogo (home)
**Objetivo:** grid de streaming na home.
- Controller + rota `/` que devolve os vídeos agrupados por `category`.
- Página React: fileiras horizontais por categoria (estilo Netflix), cards com thumbnail
  (`https://img.youtube.com/vi/{youtube_id}/hqdefault.jpg`), título e categoria.
- **Portão:** a home mostra as 5 categorias com seus cards e thumbnails reais.

## Etapa 3 — Player (fluxo mínimo ponta a ponta)
**Objetivo:** clicar e assistir. É o fluxo mínimo exigido pelo júri.
- Ao clicar num card, abrir player (modal ou rota `/assistir/{id}`) com iframe embed do YouTube.
- **Atenção:** nem todo vídeo permite embed. Se algum der "vídeo indisponível", remover o ID
  do seed (por isso o seed tem folga: ~24 para ~18 necessários).
- **Portão:** clicar num card e o vídeo tocar embutido na página.

> **Opcional pós-Etapa 3 (só se o MVP estiver sólido):** 1–3 *feature tests* de fumaça no Laravel
> (home retorna 200 com vídeos; rota de assistir renderiza). Rede de segurança barata contra
> regressão — não é fase obrigatória, cobertura não é critério do júri.

## Etapa 4 — Personalidade absurda
**Objetivo:** a piada aparece.
- Copy bem-humorada (hero, descrições das fileiras, estados vazios).
- "Continue Assistindo" usando estado local / `localStorage`.
- Recomendação ridícula ("Porque você assistiu *Parede Bege*, recomendamos *Off-White*").
- Detalhes de sabor: duração fake ("10h07 de puro nada"), selo "ABSOLUTE CINEMA".
- **Portão:** dá pra rir só navegando.

## Etapa 5 — README + acabamento
**Objetivo:** rodar em 5 min do zero + entregável completo.
- README em pt-BR: o que é, stack, **setup passo a passo ≤5 min**, link da demo, prints/gif.
- Polish visual final; revisar responsividade.
- Teste de fogo: clonar numa pasta nova e seguir só o README, cronometrando.
- **Portão:** outra pessoa conseguiria rodar seguindo apenas o README.

---

## Se faltar tempo (plano de corte)
- **Etapas 0→3 = MVP inegociável** (o app tem que rodar de ponta a ponta).
- **Etapa 4** é onde se ganha ponto em "absurdo" e "originalidade".
- **Etapa 5 (README)** é obrigatória pra elegibilidade — nunca pular.
