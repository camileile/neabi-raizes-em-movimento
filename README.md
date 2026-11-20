# Raízes em Movimento · NEABI IFPE Campus Garanhuns

Página única do NEABI do IFPE Campus Garanhuns para divulgar conteúdos sobre Consciência Negra: o 20 de Novembro, filmes, a exposição da biblioteca, autores em destaque, acervos digitais e a playlist Sons do NEABI. O acesso principal é pelo celular, por links nos grupos das turmas e QR codes no campus.

Stack: Next.js 16 (App Router, página estática) + TypeScript + Tailwind CSS 4. Não há banco de dados, login, formulários, analytics nem API própria.

## Rodar localmente

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev          # http://localhost:3000
```

## Validação

```bash
npm run lint         # ESLint
npm run typecheck    # TypeScript
npm run build        # build de produção
```

## Onde editar o conteúdo

Todo o texto e os links ficam em **`src/data/site-content.ts`**. Os componentes em `src/components/` só leem esses dados.

| O que mudar | Onde, em `site-content.ts` |
| --- | --- |
| Títulos e textos das seções | `hero`, `consciencia`, `assistaELeia`, `biblioteca`, `acervos`, `playlist`, `footer` |
| Varal de personalidades negras | `personalidades` (textos) e `personalities` (cartões) |
| Filmes (título, tipo, descrição, link) | `films` |
| Autores e sugestões de leitura | `authors` (a ordem do array é a ordem na página) |
| Quantos autores aparecem antes de "Ver todos" | `biblioteca.initialAuthors` |
| Museus e acervos | `digitalCollections` |
| **Playlist do Spotify** | `spotifyPlaylistUrl` |
| **E-mail de contato** | `contact.email` e `contact.confirmed` |

Links externos devem usar `https://`. Eles abrem em nova aba com `rel="noopener noreferrer"`.

### Playlist

O link fica em `spotifyPlaylistUrl`, sem o parâmetro `?si=`, que serve só para rastreamento: `https://open.spotify.com/playlist/5FwA0EGbwWYGTbf8MHq1fZ`. A partir dele o site monta:

- o botão "Ouvir a playlist" na abertura;
- o botão "Ouvir no Spotify" na seção da playlist;
- o player incorporado, carregado sob demanda. O link comum continua funcionando se o player falhar;
- o QR code da seção, gerado no build com a biblioteca `qrcode`. Nenhum script roda no navegador para isso.

Se o valor voltar a ser `null`, a página mostra "Playlist em breve" sem nenhum botão ativo.

Os arquivos para impressão em cartazes estão em `docs/qrcode/` (`playlist-sons-do-neabi.svg` e `.png`, 1200 px). Eles foram conferidos por decodificação: apontam para o link acima. Se a playlist mudar, gere-os novamente:

```bash
node -e "const Q=require('qrcode');const u=require('fs').readFileSync('src/data/site-content.ts','utf8').match(/https:\/\/open\.spotify\.com\/playlist\/\w+/)[0];const o={margin:4,color:{dark:'#1c1b1aff',light:'#ffffffff'}};Q.toFile('docs/qrcode/playlist-sons-do-neabi.svg',u,{...o,type:'svg'});Q.toFile('docs/qrcode/playlist-sons-do-neabi.png',u,{...o,width:1200})"
```

### Contato

Com `contact.confirmed: false`, o e-mail não aparece no site. Mude para `true` depois de confirmar o endereço.

### Imagens

As imagens ficam em `public/` e são declaradas em `site-content.ts` com caminho, dimensões, texto alternativo e crédito:

- `films[].poster`: pôsteres dos filmes, em `public/filmes/`.
- `biblioteca.photo`: foto da exposição, em `public/biblioteca/`.
- `personalities[].photo`: retratos do varal, em `public/personalidades/`. Sem `photo`, o cartão mostra uma composição tipográfica e o texto de `noPhotoNote`.

O Next.js otimiza essas imagens (`next/image`), e o carregamento fica para quando elas se aproximam da tela. Para trocar ou adicionar imagens:

1. Coloque os arquivos em `public/` (ex.: `public/autores/carolina-maria-de-jesus.jpg`).
2. Use `next/image` com `width` e `height` definidos e `loading="lazy"` fora da abertura.
3. Registre autoria, licença e origem de cada imagem na seção "Créditos de imagens" abaixo.

A assinatura "NEABI" do cabeçalho é **provisória** (`src/components/Wordmark.tsx`). Ela deve ser trocada pelo arquivo oficial da marca.

## Fontes consultadas

Fatos históricos sobre o 20 de Novembro:

- Lei nº 12.519/2011: institui o Dia Nacional de Zumbi e da Consciência Negra em 20 de novembro, data do falecimento de Zumbi dos Palmares. <https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12519.htm>
- Lei nº 14.759/2023: declara feriado nacional o 20 de novembro. <https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14759.htm>

Biografias. Os textos foram preparados pelo NEABI. Fontes de conferência:

- Machado de Assis: Academia Brasileira de Letras. <https://www.academia.org.br/academicos/machado-de-assis>
- Carolina Maria de Jesus: Enciclopédia Itaú Cultural. <https://enciclopedia.itaucultural.org.br/pessoas/14374-carolina-maria-de-jesus>
- Conceição Evaristo: Enciclopédia Itaú Cultural. <https://enciclopedia.itaucultural.org.br/pessoas/1667-conceicao-evaristo>
- Lima Barreto: Enciclopédia Itaú Cultural. <https://enciclopedia.itaucultural.org.br/pessoas/1555-lima-barreto>
- Françoise Ega: Revista Interinstitucional Artes de Educar (UERJ), *Cartas a uma negra: um encontro epistolar entre Françoise Ega e Carolina de Jesus*. <https://www.e-publicacoes.uerj.br/riae/article/view/65334>

Links de filmes e acervos (conferidos em 20/11/2026):

- Sons do NEABI: playlist no Spotify. <https://open.spotify.com/playlist/5FwA0EGbwWYGTbf8MHq1fZ>
- AmarElo — É Tudo pra Ontem: página oficial na Netflix. <https://www.netflix.com/br/title/81306298>
- Estrelas Além do Tempo: trailer oficial no canal da 20th Century Studios. <https://www.youtube.com/watch?v=5wfrDhgUMGI>
- Museu Afro Brasil Emanoel Araujo: <https://museuafrobrasil.org.br/>
- Vidas Negras · Museu da Pessoa: <https://museudapessoa.org/colecao/vidas-negras/>

O site não afirma em qual serviço de assinatura cada filme está disponível.

## Créditos de imagens

| Arquivo | Conteúdo | Autoria e origem |
| --- | --- | --- |
| `public/biblioteca/exposicao-neabi.jpg` | Exposição de autores negros nas estantes da biblioteca | Foto do NEABI · IFPE Campus Garanhuns, fornecida pela equipe |
| `public/filmes/amarelo-e-tudo-pra-ontem.jpg` | Pôster oficial de *AmarElo — É Tudo pra Ontem* | © Netflix. Material de divulgação obtido no TMDB (themoviedb.org/movie/765613) |
| `public/filmes/estrelas-alem-do-tempo.jpg` | Pôster oficial brasileiro de *Estrelas Além do Tempo* | © 20th Century Studios. Material de divulgação obtido no TMDB (themoviedb.org/movie/381284) |

Os retratos em `public/personalidades/` e os textos do varal vieram do PDF *Varal de Personalidades Negras*, preparado pelo NEABI. As fotos foram extraídas sem retoques de cor ou de pele, apenas recortadas. A origem e a licença de cada retrato ainda precisam ser registradas (veja Pendências).

O cartaz de Tereza de Benguela no PDF usa uma pintura que parece ser *Aïcha* (1922), de Félix Vallotton, um retrato de outra modelo que costuma circular na internet como se fosse Tereza. Não se conhecem retratos de Tereza feitos em sua época. Por isso, o site mostra para ela uma composição tipográfica com essa explicação.

Os pôsteres são usados apenas para identificar as obras em uma página educativa e sem fins comerciais, com crédito visível. Se algum detentor de direitos pedir a remoção, troque `poster` por outra imagem em `site-content.ts`.

Além dessas imagens, o favicon (`src/app/icon.svg`) e a imagem de compartilhamento (`src/app/opengraph-image.tsx`) foram feitos para o projeto com a paleta Raízes em Movimento.

## Publicar na Vercel

Pelo painel (recomendado):

1. Em <https://vercel.com/new>, importe o repositório `neabi-raizes-em-movimento` do GitHub.
2. A Vercel detecta Next.js automaticamente. Mantenha os padrões: build `npm run build`, sem variáveis de ambiente.
3. Cada pull request ganha uma URL de preview. O merge na `main` publica em produção.

Pela linha de comando:

```bash
npx vercel login
npx vercel          # preview
npx vercel --prod   # produção, só depois de revisar o preview
```

## Pendências

- [x] Link real da playlist Sons do NEABI no Spotify, com QR code.
- [ ] Confirmação do e-mail `neabi@garanhuns.ifpe.edu.br` como contato institucional.
- [ ] Arquivo oficial da marca NEABI (SVG ou PNG transparente).
- [x] Foto da exposição na biblioteca.
- [ ] Confirmar a autoria da foto da exposição (o crédito atual é "Foto: NEABI · IFPE Campus Garanhuns").
- [ ] Registrar origem, autoria e licença das 9 fotos do varal de personalidades (Carolina Maria de Jesus, Milton Santos, Antonieta de Barros, Solano Trindade, Abdias Nascimento, Lélia Gonzalez, Lia de Itamaracá, Enedina Alves Marques e Jaqueline Góes de Jesus).
- [ ] Revisar a imagem de Tereza de Benguela no cartaz impresso do varal (ver "Créditos de imagens").
- [ ] Confirmação de quais autores e livros estão de fato no acervo da biblioteca.
- [ ] Conferir as fontes das biografias ainda sem referência no README: Djamila Ribeiro, Chimamanda Ngozi Adichie, Lélia Gonzalez, Milton Santos, Frantz Fanon e Itamar Vieira Junior.
- [ ] Conferir o título em português "O tempo da infância", de Françoise Ega. Não foi localizada edição brasileira com esse nome.
