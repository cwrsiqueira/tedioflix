# TédioFlix

> *O único serviço de streaming com garantia contratual de zero adrenalina.*

Projeto desenvolvido para o hackathon **Codecon Universe 26** (maio 2026), categoria **"Absurdo com Propósito"**.  
Equipe: **Vamo lá só eu** — Carlos Wagner Rodrigues Siqueira.

🌐 **Demo em produção:** [tedioflix.com](https://tedioflix.com)

---

## O que é

Um Netflix do tédio. Interface séria de streaming, conteúdo absurdamente sem graça: tinta secando, água fervendo, grama crescendo, lareira crepitando, chuva na janela.

A graça está no contraste — a produção é caprichada, o conteúdo é nulo.

**Funcionalidades:**
- Catálogo em fileiras por categoria (estilo Netflix)
- Thumbnails e player via embed do YouTube (sem API key)
- Duração fake ("10h07 de puro nada")
- Selo **ABSOLUTE CINEMA** em títulos selecionados
- Seção **Continue Assistindo** (localStorage)
- Recomendações com 97,3% de precisão certificada pelo IBRD
- Botão **Emitir Laudo de Tédio**, certificado pela ANCE — não faz nada, parece importante

---

## Stack

| Camada     | Tecnologia                          |
|------------|-------------------------------------|
| Backend    | PHP 8.3 + Laravel 13                |
| Banco      | SQLite (arquivo único, zero config) |
| Frontend   | React 18 + Inertia.js               |
| Estilo     | Tailwind CSS 3                      |
| Build      | Vite 8                              |
| Player     | iframe embed do YouTube             |

---

## Setup (≤ 5 minutos)

**Pré-requisitos:** PHP 8.3+, Composer, Node 18+, npm.

```bash
# 1. Clonar o repositório
git clone https://github.com/cwrsiqueira/tedioflix.git
cd tedioflix

# 2. Instalar dependências PHP
composer install

# 3. Instalar dependências JavaScript
npm install

# 4. Configurar o ambiente
cp .env.example .env
php artisan key:generate

# 5. Criar banco e popular catálogo
php artisan migrate --seed --no-interaction

# 6. Rodar em modo desenvolvimento
php artisan serve &
npm run dev
```

Abra **http://127.0.0.1:8000** e comece a não se emocionar.

> **Nota:** o `.env.example` já vem configurado para SQLite. Nenhum serviço externo necessário.

---

## Estrutura relevante

```
docs/seed-videos.json          # catálogo de 24 vídeos (fonte da verdade)
app/Models/Video.php           # model do catálogo
database/migrations/           # migration da tabela videos
database/seeders/VideoSeeder.php
app/Http/Controllers/
  HomeController.php           # agrupa vídeos por categoria → home
  WatchController.php          # busca vídeo por id → player
resources/js/Pages/
  Home.jsx                     # catálogo com fileiras e hero
  Watch.jsx                    # player + recomendações
```

---

## Restrição absurda da equipe

> *"A interface deve ter pelo menos um botão que não faz absolutamente nada — mas parece muito importante."*  
> — Codecon Universe 26, equipe **Vamo lá só eu**

✅ Cumprida. Ver botão **Emitir Laudo de Tédio** na página do player.

---

*© 2026 TédioFlix · Todos os direitos de entediar você reservados.*
