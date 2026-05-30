# Log de Decisões — TédioFlix

> Registro curto das decisões importantes e pivots. Serve pra não perder o "porquê" das escolhas
> quando a sessão do Claude Code compactar ou eu abrir uma nova. Uma entrada por decisão relevante.
> Ao pivotar, registrar aqui E atualizar o CLAUDE.md/PLAN.md na hora (evita drift de contexto).

---

## Template (copiar para cada nova entrada)

### [AAAA-MM-DD] Título curto da decisão
- **Contexto:** o que motivou a decisão.
- **Decisão:** o que ficou definido.
- **Alternativas descartadas:** o que foi considerado e por que não.
- **Impacto:** o que muda no plano/código.

---

## Decisões

### [2026-05-29] Stack e fonte de conteúdo
- **Contexto:** projeto solo de fim de semana; júri exige setup em ≤5 min e "roda de verdade".
- **Decisão:** Laravel + Inertia/React + SQLite. Catálogo via seed estático (`docs/seed-videos.json`),
  player por iframe embed do YouTube.
- **Alternativas descartadas:** YouTube Data API (quota, key, complexidade desnecessária);
  Supabase/Stripe/lockdown do Dulang (excesso para o escopo).
- **Impacto:** sem dependência de serviço externo; setup simples; sem segredos no repo.
