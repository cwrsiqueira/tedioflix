# Entregáveis não-técnicos — TédioFlix

> Requisitos de entrega e critérios de julgamento do hackathon Codecon Universe 26 que vão além do
> código. Deadline de submissão no Devpost: **domingo (31/05) às 15h** (NÃO é o pitch das 17h).
> "Vender a inutilidade com carisma" é, segundo o júri, o critério principal.

## Entregáveis obrigatórios (sem isso, não é elegível)
- Repositório GitHub **público**, com commit history visível.
- README com setup rodável em ≤5 min + explicação da ideia.
- Vídeo demo de até 3 min, vendendo o projeto e mostrando rodando.
- Página no Devpost completa: título criativo, descrição, stack, link do repo, prints/gif.
- Submeter até **domingo 15h** — mirar 13h por causa de upload de vídeo e preenchimento da página.

## README — checklist (Etapa 5)
- Pitch de uma linha no topo (gancho absurdo).
- O que é / o "universo de lógica própria".
- Stack usada.
- Setup passo a passo: clonar → `composer install && npm install` → `migrate --seed` → rodar.
  Testar do zero numa pasta nova, cronometrado.
- Link da demo (vídeo) + prints/gif rodando.
- Tom bem-humorado, sem virar tutorial gigante (edital alerta contra overkill).

## Vídeo demo — roteiro (3 min)
- 0:00–0:20 — Gancho: apresentar o "problema" inexistente com cara séria.
- 0:20–2:10 — Demo ao vivo: home, categorias, clica num card, vídeo toca. Destacar os detalhes
  absurdos (recomendação ridícula, selo "ABSOLUTE CINEMA", duração fake).
- 2:10–2:45 — Narrativa que eleva: o caso real do filme de 10h07 de tinta secando que o cineasta
  Charlie Shackleton fez para obrigar a censura britânica (BBFC) a assistir tudo. O streaming
  "celebra" essa tradição do tédio — transforma piada em conceito.
- 2:45–3:00 — Fecho com carisma + nome do projeto.
- Gravar tela com áudio limpo. Confirmar que não passa de 3 min.

## Critérios influenciados fora do código
- **Absurdo com propósito:** mesmo tom/piada coerente do README ao vídeo.
- **Originalidade:** reforçar o ângulo "por que ninguém fez isso antes?".
- **Colaboração:** projeto solo pontua mais fraco aqui; compensar com commit history limpo
  (um commit por etapa, mensagens claras) mostrando trabalho incremental real.
- **Apresentação:** se cair no top 5, pitch ao vivo domingo 17h. Ter o projeto rodando localmente
  e saber demonstrar sem depender de internet instável.

## Higiene final (domingo de manhã)
- Rodar checagem de embed dos vídeos; remover IDs que derem "indisponível" (o seed tem folga).
- Confirmar que o `.env` NÃO foi commitado.
- Clonar o repo numa pasta limpa e seguir só o README, cronometrando os 5 min.
- Reler as regras fixadas no canal do Discord, garantir que nada mudou.
