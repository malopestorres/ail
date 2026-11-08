# Academia Itapetinguense de Letras — protótipo do site

Protótipo estático multipágina criado para apresentação ao cliente. O site usa apenas HTML, CSS e JavaScript, sem build, banco de dados ou dependências externas. As fontes e as imagens estão no próprio projeto.

## Como visualizar

- Abra `index.html` diretamente no navegador (duplo clique), ou
- Rode um servidor local na pasta do projeto:

```bash
python3 -m http.server 8765
```

Depois acesse `http://localhost:8765`.

## Páginas

| Arquivo | Conteúdo |
| --- | --- |
| `index.html` | Home: destaque, agenda de novembro/dezembro de 2026, notícias, apresentação, acadêmicos, sede, produções e Instagram |
| `academia.html` | Visão geral: sobre a Academia, atalhos institucionais e audiências públicas |
| `diretoria.html` | Diretoria da gestão 2026–2027, com espaço reservado para retratos |
| `presidentes.html` | Linha do tempo dos presidentes e marcos da trajetória |
| `estatuto.html` | Estatuto, organização da Academia e acesso ao documento |
| `academicos.html` | Abas com acadêmicos atuais, anteriores (in memoriam) e patronos |
| `producoes.html` | Revista, poesias, contos e crônicas |
| `sede.html` | Galeria da sede, espaços, visitação e localização |
| `concursos.html` | Edital aberto, etapas, vencedores e edições anteriores |
| `contato.html` | E-mail, Instagram, formulário e mapa |

## O que já é real

Os dados institucionais abaixo foram extraídos dos PDFs e do site atual da Academia:

- Fundação em 20 de fevereiro de 2000.
- Posse dos acadêmicos fundadores em 26 de maio de 2001.
- 12 membros fundadores e 20 cadeiras vitalícias.
- Diretoria da gestão 2026–2027.
- Relação de acadêmicos atuais, acadêmicos anteriores (in memoriam) e patronos.
- Audiências públicas: Castro Alves, Loja Maçônica de Itapetinga, Camilo de Jesus Lima e Juvino Oliveira.
- Fotos reais da sede, biblioteca, auditório e sala de reuniões, obtidas no site atual.
- Brasão/logo da Academia.

## O que precisa ser substituído antes de publicar

### Contatos e links

- **E-mail:** `contato@academiaita.com.br` é um placeholder. Substituir pelo e-mail oficial.
- **Instagram:** `@academiadeletras.ita` — links já apontam para `https://www.instagram.com/academiadeletras.ita/`.
- **YouTube:** `@academiadeletras` — ícones adicionados no rodapé, topo e página de contato; confirmar se o canal é oficial.
- **Endereço:** o site informa apenas "Itapetinga · Bahia". Inserir endereço completo, CEP e ponto de referência.
- **Mapa:** o cartão de localização abre uma busca genérica por Itapetinga. Trocar pelo link/embed do endereço exato.

### Documentos e publicações

Os documentos abaixo ainda não estão disponíveis como arquivo. Por enquanto, os botões levam às seções correspondentes ou ao contato:

- Estatuto da Academia (`estatuto.html` → “Solicitar o estatuto”).
- Revista da Academia e edições anteriores (`producoes.html`).
- Poesias, contos e crônicas: os textos completos ainda não estão publicados; os cartões levam para as próprias seções.
- Edital do Concurso de Poesia 2026 (`concursos.html` → “Baixar o edital”).

### Conteúdo ilustrativo

Os itens abaixo foram criados apenas para demonstrar o layout e **não devem ser publicados como informação oficial**:

- Agenda cultural de novembro e dezembro de 2026 (datas, horários e títulos dos eventos).
- Notícias da home (datas, títulos e textos).
- Títulos e trechos dos contos “A travessia” e “Retrato de família”.
- Crônica “Itapetinga cabe inteira numa tarde de conversa”.
- Datas, etapas e texto do Concurso de Poesia 2026.
- Nomes, obras e situação dos vencedores na tabela de concursos.
- Textos institucionais de apresentação, descrições de espaços e chamadas.

### Imagens

- As quatro fotos da sede são do site atual e devem ser substituídas por fotos oficiais em alta resolução, quando disponíveis.
- As imagens de apoio em `assets/img/stock/` vêm de banco de imagens (Unsplash) e servem apenas para a apresentação.
- Os acadêmicos são representados por silhuetas neutras. O ideal é usar retratos oficiais, com autorização de uso de imagem.
- A diretoria tem espaços reservados para retratos. Substituir o conteúdo de cada `.director-photo` por uma `<img>` oficial, mantendo a proporção 4:5.
- A logo em `assets/img/logo.jpg` foi extraída do site atual; se houver vetor (SVG/PDF), substituir para melhor nitidez.

### Formulário

O formulário de `contato.html` é demonstrativo: valida os campos e mostra uma mensagem de sucesso, mas **não envia e-mail**. Para publicar, integrar com um serviço como Formspree, Netlify Forms, Resend ou o e-mail institucional.

## Estrutura do projeto

```text
academia-itapetinguense/
├── index.html
├── academia.html
├── diretoria.html
├── presidentes.html
├── estatuto.html
├── academicos.html
├── producoes.html
├── sede.html
├── concursos.html
├── contato.html
├── README.md
└── assets/
    ├── css/style.css
    ├── js/main.js
    ├── fonts/
    └── img/
        ├── logo.jpg
        ├── favicon.svg
        ├── sede.jpg
        ├── biblioteca.jpg
        ├── auditorio.jpg
        ├── sala-reunioes.jpg
        └── stock/
```

## Notas técnicas

- Layout responsivo testado em 390, 768, 1024, 1280 e 1440 px.
- Navegação por teclado, abas com suporte a hash (`#atuais`, `#anteriores`, `#patronos`), menu mobile acessível e links de salto.
- Animações de entrada respeitam `prefers-reduced-motion`.
- Auditoria Lighthouse (desktop): 100 em acessibilidade, boas práticas e SEO nas dez páginas.
- Sem dependências externas: o site funciona offline, exceto pelos links de redes sociais e mapas.

## Próximos passos sugeridos

1. Revisar os dados institucionais com a diretoria da Academia.
2. Substituir contatos, endereço, links e documentos.
3. Produzir ou selecionar fotos oficiais da sede, dos eventos e dos acadêmicos.
4. Publicar os textos literários completos e as edições da revista.
5. Integrar o formulário e escolher a hospedagem (Netlify, Vercel ou hospedagem tradicional).
6. Se o site for atualizado com frequência, avaliar um CMS leve ou uma área administrativa.
