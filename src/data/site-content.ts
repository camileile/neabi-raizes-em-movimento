/**
 * Conteúdo central do site "Raízes em Movimento".
 *
 * Edite este arquivo para trocar textos, filmes, autores, links e a playlist.
 * Os componentes em src/components apenas leem estes dados.
 */

export type Accent = "floresta" | "terracota" | "carvao";

export type ExternalLinkData = {
  label: string;
  /** Sempre https:// */
  href: string;
  /** Quem publica a página de destino, mostrado como referência. */
  source: string;
};

export type ImageData = {
  /** Caminho a partir de /public */
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Autoria e origem, exibidos junto da imagem. */
  credit: string;
};

export type Film = {
  title: string;
  kind: string;
  description: string;
  link: ExternalLinkData;
  accent: Accent;
  poster: ImageData;
};

export type Author = {
  name: string;
  years: string;
  field: string;
  bio: string;
  suggestions: string[];
};

export type DigitalCollection = {
  name: string;
  description: string;
  link: ExternalLinkData;
};

export type Personality = {
  name: string;
  /** Área de atuação · UF, como no cartaz do varal. */
  area: string;
  headline: string;
  text: string;
  /** Sem foto, o cartão mostra uma composição tipográfica e a nota `noPhotoNote`. */
  photo?: Omit<ImageData, "credit">;
  noPhotoNote?: string;
};

export type NavItem = { id: string; label: string };

export const sectionIds = {
  consciencia: "consciencia-negra",
  personalidades: "personalidades",
  assistaELeia: "assista-e-leia",
  biblioteca: "biblioteca",
  acervos: "acervos-digitais",
  playlist: "playlist",
} as const;

export const site = {
  name: "Raízes em Movimento",
  org: "NEABI",
  campus: "IFPE Campus Garanhuns",
  metadata: {
    title: "Raízes em Movimento | NEABI IFPE Garanhuns",
    description:
      "Histórias, livros, filmes, acervos digitais e música para valorizar a cultura negra e fortalecer a educação antirracista.",
  },
};

export const nav: NavItem[] = [
  { id: sectionIds.consciencia, label: "Consciência Negra" },
  { id: sectionIds.personalidades, label: "Personalidades" },
  { id: sectionIds.assistaELeia, label: "Assista e leia" },
  { id: sectionIds.biblioteca, label: "Biblioteca" },
  { id: sectionIds.acervos, label: "Acervos digitais" },
  { id: sectionIds.playlist, label: "Playlist" },
];

/**
 * Link da playlist Sons do NEABI no Spotify (sem parâmetros de rastreamento).
 * Usado pelo botão da abertura, pelo botão da seção, pelo player e pelo QR code.
 * Se voltar a ser `null`, o site mostra "Playlist em breve" sem botão ativo.
 */
export const spotifyPlaylistUrl: string | null =
  "https://open.spotify.com/playlist/5FwA0EGbwWYGTbf8MHq1fZ";

/**
 * PENDÊNCIA: confirmar o e-mail institucional.
 * Enquanto `confirmed` for `false`, o e-mail não aparece publicamente.
 */
export const contact = {
  email: "neabi@garanhuns.ifpe.edu.br",
  confirmed: false,
};

export const hero = {
  marker: "20 de novembro",
  title: "Raízes em Movimento",
  subtitle: "Memória, cultura e resistência o ano inteiro.",
  text: "Uma data para reconhecer o protagonismo negro, valorizar histórias e fortalecer a educação antirracista.",
  complement:
    "Conheça vozes, obras e experiências que ampliam nosso olhar sobre a história e a cultura negra.",
  primaryCta: "Explorar os conteúdos",
  playlistCta: "Ouvir a playlist",
};

export const consciencia = {
  title: "Conhecer histórias também é transformar o presente.",
  text: "O 20 de Novembro homenageia Zumbi dos Palmares e relembra a resistência negra à escravidão. É também um convite a reconhecer as contribuições da população negra e a enfrentar o racismo nas relações cotidianas, na educação e nas instituições.",
  callout: "A educação antirracista se constrói todos os dias.",
};

export const personalidades = {
  eyebrow: "Varal de personalidades negras",
  title: "Trajetórias que fazem história.",
  intro:
    "Conheça pessoas negras que marcaram a literatura, a ciência, a política, a arte e a resistência no Brasil.",
  scrollHint: "Deslize para ver todas as personalidades.",
  photoCredit: "Fotos: material do Varal de Personalidades Negras do NEABI.",
};

export const personalities: Personality[] = [
  {
    name: "Carolina Maria de Jesus",
    area: "Literatura · MG",
    headline: "A escritora de Quarto de despejo",
    text: "Em Quarto de despejo, registrou a vida na favela do Canindé, em São Paulo. Seu diário expôs a fome e a desigualdade pela voz de quem vivia essa realidade.",
    photo: {
      src: "/personalidades/carolina-maria-de-jesus.jpg",
      width: 443,
      height: 692,
      alt: "Fotografia em preto e branco de Carolina Maria de Jesus, com um lenço claro na cabeça.",
    },
  },
  {
    name: "Tereza de Benguela",
    area: "Liderança quilombola · MT",
    headline: "Resistência no Quariterê",
    text: "No século XVIII, liderou o Quilombo do Quariterê, também conhecido como Quilombo do Piolho. Sua trajetória destaca o papel das mulheres negras na organização da resistência à escravidão.",
    noPhotoNote: "Não se conhecem retratos de Tereza de Benguela feitos em sua época.",
  },
  {
    name: "Milton Santos",
    area: "Geografia · BA",
    headline: "Como as desigualdades moldam o território",
    text: "O geógrafo baiano estudou como as desigualdades sociais se expressam nos lugares onde vivemos. Seu trabalho renovou o pensamento geográfico brasileiro e recebeu reconhecimento internacional.",
    photo: {
      src: "/personalidades/milton-santos.jpg",
      width: 551,
      height: 717,
      alt: "Fotografia em preto e branco de Milton Santos, de óculos, gesticulando enquanto fala.",
    },
  },
  {
    name: "Antonieta de Barros",
    area: "Educação e política · SC",
    headline: "Primeira deputada estadual negra do Brasil",
    text: "Professora e jornalista, criou um curso de alfabetização. Em Santa Catarina, tornou-se a primeira deputada estadual negra do país.",
    photo: {
      src: "/personalidades/antonieta-de-barros.jpg",
      width: 750,
      height: 752,
      alt: "Retrato antigo em preto e branco de Antonieta de Barros jovem, de blusa clara.",
    },
  },
  {
    name: "Solano Trindade",
    area: "Poesia · PE",
    headline: "Poesia contra a fome",
    text: "Nascido no Recife, fez da poesia uma forma de denunciar o racismo e a desigualdade. Em Tem gente com fome, deu ritmo à denúncia de um problema que segue presente no país.",
    photo: {
      src: "/personalidades/solano-trindade.jpg",
      width: 287,
      height: 440,
      alt: "Fotografia em preto e branco de Solano Trindade, com cabelo e barba grisalhos.",
    },
  },
  {
    name: "Abdias Nascimento",
    area: "Teatro e ativismo · SP",
    headline: "Teatro Experimental do Negro",
    text: "Artista e ativista, fundou o Teatro Experimental do Negro, que abriu espaço para artistas negros nos palcos brasileiros. Também idealizou o Museu de Arte Negra.",
    photo: {
      src: "/personalidades/abdias-nascimento.jpg",
      width: 457,
      height: 672,
      alt: "Fotografia em preto e branco de Abdias Nascimento, de óculos, terno e gravata, falando com as mãos.",
    },
  },
  {
    name: "Lélia Gonzalez",
    area: "Feminismo negro · MG",
    headline: "Amefricanidade",
    text: "Intelectual e ativista, analisou como o racismo e o sexismo se cruzam na sociedade brasileira. Criou o conceito de amefricanidade para pensar as experiências negras e indígenas nas Américas.",
    photo: {
      src: "/personalidades/lelia-gonzalez.jpg",
      width: 461,
      height: 692,
      alt: "Fotografia em preto e branco de Lélia Gonzalez sorrindo, com um colar de contas.",
    },
  },
  {
    name: "Lia de Itamaracá",
    area: "Cultura popular · PE",
    headline: "Rainha da ciranda",
    text: "Cantora, compositora e cirandeira da Ilha de Itamaracá, Lia levou a ciranda pernambucana a novos públicos.",
    photo: {
      src: "/personalidades/lia-de-itamaraca.jpg",
      width: 754,
      height: 1125,
      alt: "Lia de Itamaracá sorrindo, sentada, com turbante e vestido estampados em cores vivas.",
    },
  },
  {
    name: "Enedina Alves Marques",
    area: "Engenharia · PR",
    headline: "Primeira engenheira negra do Brasil",
    text: "Formou-se em Engenharia Civil em 1945, na atual Universidade Federal do Paraná. Atuou em obras de infraestrutura no estado.",
    photo: {
      src: "/personalidades/enedina-alves-marques.jpg",
      width: 629,
      height: 1212,
      alt: "Fotografia antiga em preto e branco de Enedina Alves Marques, de pé, com roupa clara e um rolo de papel na mão.",
    },
  },
  {
    name: "Jaqueline Góes de Jesus",
    area: "Biomedicina · BA",
    headline: "O genoma em 48 horas",
    text: "A biomédica baiana liderou a equipe que, em 48 horas, sequenciou o genoma do coronavírus identificado no primeiro caso confirmado de COVID-19 no Brasil.",
    photo: {
      src: "/personalidades/jaqueline-goes-de-jesus.jpg",
      width: 768,
      height: 1082,
      alt: "Jaqueline Góes de Jesus sorrindo, com tranças longas e blazer magenta.",
    },
  },
];

export const assistaELeia = {
  title: "Histórias para ver, ouvir e conversar.",
  intro:
    "Selecionamos obras que convidam à reflexão sobre memória, identidade, ciência e protagonismo negro.",
};

export const films: Film[] = [
  {
    title: "AmarElo — É Tudo pra Ontem",
    kind: "Documentário",
    description:
      "Com Emicida, o documentário conecta música, memória e a história da cultura negra brasileira.",
    link: {
      label: "Conheça o documentário",
      href: "https://www.netflix.com/br/title/81306298",
      source: "Página oficial · Netflix",
    },
    accent: "floresta",
    poster: {
      src: "/filmes/amarelo-e-tudo-pra-ontem.jpg",
      width: 780,
      height: 1170,
      alt: "Pôster do documentário: Emicida de perfil diante de um grande coração amarelo, com o título AmarElo — É Tudo pra Ontem.",
      credit: "Pôster: Netflix, via TMDB",
    },
  },
  {
    title: "Estrelas Além do Tempo",
    kind: "Filme",
    description:
      "A trajetória de três mulheres negras cujo trabalho na NASA contribuiu para a exploração espacial, em meio às barreiras do racismo e do sexismo.",
    link: {
      label: "Conheça o filme",
      href: "https://www.youtube.com/watch?v=5wfrDhgUMGI",
      source: "Trailer oficial · 20th Century Studios",
    },
    accent: "terracota",
    poster: {
      src: "/filmes/estrelas-alem-do-tempo.jpg",
      width: 780,
      height: 1170,
      alt: "Pôster do filme: Janelle Monáe, Taraji P. Henson e Octavia Spencer lado a lado, acima de cenas do filme e do título Estrelas Além do Tempo.",
      credit: "Pôster: 20th Century Studios, via TMDB",
    },
  },
];

export const biblioteca = {
  title: "Passe na biblioteca.",
  text: "Conheça a exposição de livros e autores negros do nosso acervo. Entre romances, contos, ensaios e memórias, descubra diferentes formas de compreender o Brasil e o mundo.",
  callout: "Escolha uma obra. Conheça uma trajetória. Continue essa conversa.",
  authorsTitle: "Autores em destaque",
  suggestionsLabel: "Sugestões de leitura",
  availabilityNote:
    "As sugestões ajudam a conhecer cada trajetória. Consulte a biblioteca sobre os títulos disponíveis no acervo.",
  /** Quantos autores aparecem antes de "Ver todos os autores". */
  initialAuthors: 6,
  photo: {
    src: "/biblioteca/exposicao-neabi.jpg",
    width: 960,
    height: 1280,
    alt: "Estantes verdes da biblioteca com livros de autores negros expostos e cartazes biográficos de Machado de Assis, Lima Barreto, Conceição Evaristo, Carolina Maria de Jesus, Frantz Fanon, Lélia Gonzalez, Milton Santos e outros nomes da seleção.",
    credit: "Foto: NEABI · IFPE Campus Garanhuns",
  } satisfies ImageData,
  photoCaption: "A exposição montada nas estantes da biblioteca.",
};

export const authors: Author[] = [
  {
    name: "Machado de Assis",
    years: "1839–1908",
    field: "Literatura brasileira",
    bio: "Escritor negro, jornalista, contista e romancista, foi um dos fundadores e o primeiro presidente da Academia Brasileira de Letras. Sua obra explora as relações humanas e as contradições da sociedade brasileira.",
    suggestions: ["Memórias póstumas de Brás Cubas", "Quincas Borba", "Dom Casmurro"],
  },
  {
    name: "Carolina Maria de Jesus",
    years: "1914–1977",
    field: "Literatura brasileira",
    bio: "Escritora de diários, romances e poemas, transformou experiências do cotidiano em uma interpretação crítica do Brasil. Em Quarto de despejo, registrou a fome, a desigualdade e a vida na favela do Canindé.",
    suggestions: ["Quarto de despejo", "Casa de alvenaria", "Pedaços da fome"],
  },
  {
    name: "Djamila Ribeiro",
    years: "Nascida em 1980",
    field: "Filosofia e feminismo negro",
    bio: "Filósofa e escritora, aproxima os debates sobre racismo, feminismo negro e desigualdade das experiências cotidianas. Seus textos convidam à construção de práticas antirracistas.",
    suggestions: ["Lugar de fala", "Quem tem medo do feminismo negro?", "Pequeno manual antirracista"],
  },
  {
    name: "Conceição Evaristo",
    years: "Nascida em 1946",
    field: "Literatura brasileira",
    bio: "Romancista, contista e poeta, coloca em primeiro plano as experiências de pessoas negras, especialmente das mulheres. Seu conceito de escrevivência aproxima a literatura das memórias e vivências individuais e coletivas.",
    suggestions: ["Ponciá Vicêncio", "Becos da memória", "Olhos d’água"],
  },
  {
    name: "Chimamanda Ngozi Adichie",
    years: "Nascida em 1977",
    field: "Literatura nigeriana",
    bio: "Escritora de romances, contos e ensaios, aborda identidade, racismo, migração e desigualdade de gênero. Sua obra apresenta perspectivas nigerianas e questiona representações simplificadas de pessoas e culturas.",
    suggestions: ["Hibisco roxo", "Meio sol amarelo", "Americanah"],
  },
  {
    name: "Lélia Gonzalez",
    years: "1935–1994",
    field: "Filosofia e feminismo negro",
    bio: "Intelectual, professora e ativista, analisou as relações entre racismo, sexismo e desigualdade. Formulou o conceito de amefricanidade e destacou a presença negra e indígena na formação das Américas.",
    suggestions: [
      "Lugar de negro, com Carlos Hasenbalg",
      "Primavera para as rosas negras",
      "Por um feminismo afro-latino-americano",
    ],
  },
  {
    name: "Milton Santos",
    years: "1926–2001",
    field: "Geografia e pensamento social",
    bio: "Geógrafo baiano de reconhecimento internacional, estudou as relações entre território, cidadania e desigualdade. Sua obra ajuda a compreender a globalização e a pensar possibilidades de um mundo mais justo.",
    suggestions: ["Por uma geografia nova", "A natureza do espaço", "Por uma outra globalização"],
  },
  {
    name: "Lima Barreto",
    years: "1881–1922",
    field: "Literatura brasileira",
    bio: "Escritor e jornalista, retratou os subúrbios cariocas e criticou o racismo, os privilégios e as desigualdades. Seus personagens revelam os conflitos entre projetos de vida e injustiças sociais.",
    suggestions: [
      "Recordações do escrivão Isaías Caminha",
      "Triste fim de Policarpo Quaresma",
      "Clara dos Anjos",
    ],
  },
  {
    name: "Frantz Fanon",
    years: "1925–1961",
    field: "Psiquiatria e pensamento anticolonial",
    bio: "Psiquiatra e escritor nascido na Martinica, investigou os efeitos do racismo e do colonialismo na subjetividade e nas relações sociais. Participou da luta pela independência da Argélia.",
    suggestions: [
      "Pele negra, máscaras brancas",
      "Os condenados da terra",
      "Em defesa da revolução africana",
    ],
  },
  {
    name: "Françoise Ega",
    years: "1920–1976",
    field: "Literatura caribenha",
    bio: "Escritora da Martinica e ativista pelos direitos de imigrantes caribenhos na França. Em Cartas a uma negra, dialoga com a trajetória de Carolina Maria de Jesus e aborda racismo e exploração do trabalho feminino.",
    suggestions: ["Cartas a uma negra", "O tempo da infância"],
  },
  {
    name: "Itamar Vieira Junior",
    years: "Nascido em 1979",
    field: "Literatura brasileira",
    bio: "Escritor e geógrafo baiano, constrói narrativas sobre terra, trabalho, ancestralidade e desigualdade. Em seus livros, destaca experiências de comunidades rurais negras e a luta por dignidade.",
    suggestions: ["Torto arado", "Doramar ou a odisseia", "Salvar o fogo"],
  },
];

export const acervos = {
  title: "Explore outras histórias.",
  text: "Visite museus e acervos digitais sobre arte, memória e cultura negra.",
};

export const digitalCollections: DigitalCollection[] = [
  {
    name: "Museu Afro Brasil Emanoel Araujo",
    description:
      "Conheça o museu e explore conteúdos sobre a presença africana e afro-brasileira na arte, na cultura e na história.",
    link: {
      label: "Conhecer o museu",
      href: "https://museuafrobrasil.org.br/",
      source: "museuafrobrasil.org.br",
    },
  },
  {
    name: "Vidas Negras · Museu da Pessoa",
    description:
      "Histórias de vida que destacam experiências, memórias e contribuições de pessoas negras no Brasil.",
    link: {
      label: "Explorar histórias",
      href: "https://museudapessoa.org/colecao/vidas-negras/",
      source: "museudapessoa.org",
    },
  },
];

export const playlist = {
  title: "Sons do NEABI",
  subtitle: "Memória, ritmo e resistência.",
  text: "Uma seleção para celebrar vozes, reconhecer histórias e descobrir encontros entre diferentes gerações da música negra.",
  cta: "Ouvir no Spotify",
  pendingLabel: "Playlist em breve",
};

export const footer = {
  tagline: "Leia. Assista. Explore. Participe.",
};

/** Converte https://open.spotify.com/playlist/ID em URL de embed. */
export function getSpotifyEmbedUrl(url: string | null): string | null {
  if (!url) return null;
  const match = url.match(/^https:\/\/open\.spotify\.com\/(?:intl-[a-z-]+\/)?playlist\/([A-Za-z0-9]+)/);
  return match ? `https://open.spotify.com/embed/playlist/${match[1]}` : null;
}
