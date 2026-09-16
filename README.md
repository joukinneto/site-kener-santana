# Site oficial — Psicóloga Kener Santana

Site institucional premium da **Psicóloga Kener Santana — CRP 04/39953**.

## Posicionamento
- Atendimento psicológico 100% online.
- Atendimento em português.
- Público: brasileiros no Brasil e no exterior.
- Adolescentes a partir de 12 anos e adultos.
- Abordagem: Terapia Cognitivo-Comportamental — TCC.
- Foco atual: ansiedade, depressão, transtorno bipolar e transtorno de personalidade borderline.

## Estrutura
- `index.html`
- `css/styles.css`
- `js/main.js`
- `assets/logo/logo-kener-oficial.svg`
- `assets/logo/favicon-kener.svg`
- `assets/images/kener-perfil.png` — deve ser sincronizado a partir do projeto local validado antes da publicação final.
- `.nojekyll`

## Identidade visual
Paleta oficial:
- Navy `#2E3A47`
- Sage `#A7B3A3`
- Rose `#B87D74`
- Cream `#F5EDE6`
- Gold `#D4AF37`

## Status
V2 em refinamento final. Estrutura, responsividade, logo vetorial e preparação para GitHub Pages concluídas. Falta sincronizar a foto física da Kener e validar os links definitivos de contato/redes antes da publicação oficial.

## Ferramentas de desenvolvimento (Claude Code)
O repositório traz skills e servidores MCP para apoiar o trabalho de design/frontend com o Claude Code:

- **Skills** (`.claude/skills`, symlinks para `.agents/skills`):
  - `frontend-design` (Anthropic) — orienta decisões de paleta, tipografia e layout para fugir de "cara de template".
  - `web-design-guidelines` (Vercel Labs) — audita o HTML/CSS contra as Web Interface Guidelines (acessibilidade, performance, UX).
- **MCP servers** (`.mcp.json`, escopo do projeto — o Claude Code pede aprovação ao abrir o repositório):
  - `shadcn-ui` — biblioteca de componentes de referência (`@jpisnice/shadcn-ui-mcp-server`), sem chave necessária.
  - `magic` — geração de componentes/animações da 21st.dev (`@21st-dev/magic`); requer a variável de ambiente `TWENTY_FIRST_API_KEY` (crie uma chave em https://21st.dev).
  - `chrome-devtools` — abre o site num Chrome real para inspecionar renderização, console e performance (`chrome-devtools-mcp`); usa o Chrome instalado na máquina, sem chave necessária.
