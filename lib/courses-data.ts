export interface Course {
  id: number
  title: string
  category: string
  duration: string
  modality: string
  price: string
  totalPrice: string
  image: string
  description: string
  targetAudience: string[]
  curriculum: {
    module: string
    topics: string[]
  }[]
  instructor?: string
  hourOptions?: {
    hours: number
    price: number
    installments?: string
  }[]
}

export const courses: Course[] = [
  {
    id: 7,
    title: "História da África Antiga: Povos, culturas e etnias do continente africano",
    category: "História",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/african-ancient-history-cultures-and-peoples.jpg",
    description: `O curso tem como proposta trazer ao professor o conhecimento da história da África antiga e o processo de formação das primeiras civilizações e agrupamentos humanos, tendo ainda como objetivo desconstruir o olhar eurocêntrico da História tradicional.

O material traz ainda a possibilidade de conhecer as principais características sociais, econômicas, políticas dos povos africanos, bem como a formação de reinos e impérios até o séc. XV.

A partir das perspectivas de ampliação do estudo de povos africanos pelo currículo escolar, este curso proporciona um melhor entendimento da diversidade do continente, e diferentes formas de divisão do seu povo.`,
    instructor: "Professora Jéssica Christina de Moura - Mestre em História Social",
    targetAudience: ["Interessados na temática", "Professores de História", "Educadores", "Estudantes"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Pré-História",
          '"Mama África" – o Continente Mãe',
          "Possibilidades de se dividir ou agrupar os diferentes povos africanos",
          "Grupos Étnicos Africanos",
          "Antigos Reinos e Impérios africanos",
        ],
      },
    ],
    hourOptions: [
      {
        hours: 40,
        price: 95,
        installments: "2x R$ 50,00",
      },
      {
        hours: 80,
        price: 155,
        installments: "2x R$ 82,00",
      },
      {
        hours: 100,
        price: 185,
        installments: "2x R$ 97,00",
      },
    ],
  },
  {
    id: 8,
    title: "Modernidade líquida e consumismo: algumas reflexões partindo de Zigmunt Bauman",
    category: "Filosofia",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/bauman-liquid-modernity-consumerism.jpg",
    description: `O presente curso objetiva propiciar um estudo sobre o entendimento do sociólogo Bauman sobre a modernidade líquida e consumista. Outrossim, na contemporaneidade o consumo assume uma centralidade que estrutura e organiza a vida social das pessoas. O ato de consumir não apenas garante a sobrevivência. Tudo é transformado em mercadoria. A modernidade líquida caracteriza-se como uma forma de compreender a sociedade contemporânea não mais de forma sólida e sim líquida.`,
    instructor: "Prof. Ana Cássia Gabriel",
    targetAudience: ["Para aqueles que desejam aprofundar conhecimentos em Filosofia e no ensino de Filosofia"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "A globalização e suas consequências sociais",
          "Modernidade líquida e o consumismo",
          "Modernidade líquida e consumista",
        ],
      },
    ],
    hourOptions: [
      {
        hours: 40,
        price: 95,
        installments: "2x R$ 50,00",
      },
      {
        hours: 80,
        price: 155,
        installments: "2x R$ 82,00",
      },
      {
        hours: 100,
        price: 185,
        installments: "2x R$ 97,00",
      },
    ],
  },
  {
    id: 9,
    title: "Contribuições da filosofia de Aristóteles para a história da filosofia",
    category: "Filosofia",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/aristotle-philosophy-contributions.jpg",
    description: `O presente curso objetiva propiciar um estudo sobre o entendimento de Aristóteles sobre a prática da virtude e a questão da amizade e da política no pensamento do filósofo estagirita.`,
    instructor: "Prof. Ana Cássia Gabriel",
    targetAudience: ["Para aqueles que desejam aprofundar conhecimentos em Filosofia e no ensino de Filosofia"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "A relação entre as formas de amizade segundo Aristóteles",
          "Referência e semelhança: as amizades de Aristóteles",
          "Amizade e a ética: um contraponto à cordialidade",
        ],
      },
    ],
    hourOptions: [
      {
        hours: 40,
        price: 95,
        installments: "2x R$ 50,00",
      },
      {
        hours: 80,
        price: 155,
        installments: "2x R$ 82,00",
      },
      {
        hours: 100,
        price: 185,
        installments: "2x R$ 97,00",
      },
    ],
  },
  {
    id: 10,
    title: "A filosofia de Blaise Pascal na Modernidade",
    category: "Filosofia",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/pascal-philosophy-modernity.jpg",
    description: `O presente curso tem como objetivo elucidar as contribuições do filósofo Blaise Pascal para as discussões sobre a existência de Deus. Blaise Pascal acredita que o coração tem razões que a própria razão desconhece; como não podemos provar a existência de Deus resta-nos apostar na sua existência. Quem aposta que Deus existe tem a oportunidade de "ganhar tudo" caso ele exista. Poderá viver bem e ter uma vida muito melhor de quem não acredita na existência divina.`,
    instructor: "Professora Esp: Ana Cássia Gabriel",
    targetAudience: ["Para aqueles que desejam aprofundar conhecimentos em Blaise Pascal e na sua filosofia"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "A filosofia de Blaise Pascal",
          "O argumento da prova da existência de Deus em Blaise Pascal",
          "Sentido da vida diante da existência de Deus",
        ],
      },
    ],
    hourOptions: [
      {
        hours: 40,
        price: 95,
        installments: "2x R$ 50,00",
      },
      {
        hours: 80,
        price: 155,
        installments: "2x R$ 82,00",
      },
      {
        hours: 100,
        price: 185,
        installments: "2x R$ 97,00",
      },
    ],
  },
  {
    id: 11,
    title: "A liberdade no projeto filosófico de Sartre",
    category: "Filosofia",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/sartre-freedom-philosophy.jpg",
    description: `O presente curso objetiva elucidar as contribuições do filósofo Sartre para a filosofia contemporânea. Sartre centra suas reflexões partindo do conceito de liberdade. O ser humano está condenado à liberdade. Diante desta liberdade surge a angústia que advém do fato de que não podemos culpar ninguém por aquilo que acontece conosco. Somos convidados a refletir sobre o que estamos concretizando dentro do nosso projeto de vida para darmos um sentido à existência.`,
    instructor:
      "Ana Cássia Gabriel - Bacharel (FIO) e especialista em direito (UNOPAR), licencianda em Ciências Sociais (UNIMES)",
    targetAudience: ["Para aqueles que desejam aprofundar conhecimentos em Sartre e na sua filosofia"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "A filosofia de Sartre",
          "Angústia e liberdade na filosofia de Sartre",
          "A condenação à liberdade de todos ser humano",
        ],
      },
    ],
    hourOptions: [
      {
        hours: 40,
        price: 95,
        installments: "2x R$ 50,00",
      },
      {
        hours: 80,
        price: 155,
        installments: "2x R$ 82,00",
      },
      {
        hours: 100,
        price: 185,
        installments: "2x R$ 97,00",
      },
    ],
  },
  {
    id: 12,
    title: "A crise da ética na contemporaneidade",
    category: "Filosofia",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/ethics-crisis-contemporary.jpg",
    description: `O presente curso objetiva aprofundar conhecimentos sobre a crise que vivenciamos na sociedade contemporânea.`,
    instructor: "Professora Ana Cássia Gabriel - Especialista em Direito",
    targetAudience: ["Para aqueles que desejam aprofundar conhecimentos em Filosofia"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: ["Ética na história", "Crise da ética na contemporaneidade", "Ética e moralidade em crise"],
      },
    ],
    hourOptions: [
      {
        hours: 40,
        price: 95,
        installments: "2x R$ 50,00",
      },
      {
        hours: 80,
        price: 155,
        installments: "2x R$ 82,00",
      },
      {
        hours: 100,
        price: 185,
        installments: "2x R$ 97,00",
      },
    ],
  },
  {
    id: 13,
    title: "A pós-modernidade segundo Gilles Lipovetsky",
    category: "Filosofia",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/lipovetsky-postmodernity.jpg",
    description: `O presente curso objetiva elucidar as reflexões sobre a chamada pós modernidade no contexto da filosofia de Gilles Lipovetsky.`,
    instructor:
      "Ana Cássia Gabriel - Bacharel (FIO) e especialista em direito (UNOPAR), licencianda em Ciências Sociais (UNIMES)",
    targetAudience: [
      "Para aqueles que desejam refletir sobre a modernidade/ pós modernidade no contexto da contemporaneidade",
    ],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Os conceitos de pós-modernidade e hipermodernidade em Gilles Lipovetsky",
          "Sedução, publicidade e pós-modernidade",
          "Modernidade/ pós-modernidade: tensões na produção do conhecimento em educação",
        ],
      },
    ],
    hourOptions: [
      {
        hours: 40,
        price: 95,
        installments: "2x R$ 50,00",
      },
      {
        hours: 80,
        price: 155,
        installments: "2x R$ 82,00",
      },
      {
        hours: 100,
        price: 185,
        installments: "2x R$ 97,00",
      },
    ],
  },
  {
    id: 14,
    title: "A dúvida metódica em Descartes e seus desdobramentos na ciência moderna",
    category: "Filosofia",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/descartes-methodical-doubt.jpg",
    description: `O presente curso objetiva elucidar as contribuições do filósofo René Descartes para a consolidação da ciência moderna. Descartes propõe como método seguro para chegar à verdade a questão da dúvida metódica. Nesse sentido, Descartes marca o início da modernidade com sua proposição de uma ciência pautada na busca por ideias evidentes e claras.`,
    instructor:
      "Ana Cássia Gabriel - Bacharel (FIO) e especialista em direito (UNOPAR), licencianda em Ciências Sociais (UNIMES)",
    targetAudience: ["Para aqueles que desejam aprofundar conhecimentos sobre Descartes e sua filosofia"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "A construção do sujeito de direito moderno",
          "Descartes e o método da dúvida",
          "A discussão filosófica da modernidade",
        ],
      },
    ],
    hourOptions: [
      {
        hours: 40,
        price: 95,
        installments: "2x R$ 50,00",
      },
      {
        hours: 80,
        price: 155,
        installments: "2x R$ 82,00",
      },
      {
        hours: 100,
        price: 185,
        installments: "2x R$ 97,00",
      },
    ],
  },
  {
    id: 15,
    title: "LIBRAS: Características Básicas",
    category: "Libras",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/libras-basic-characteristics.jpg",
    description: `O objetivo deste curso é apresentar alguns sinais básicos em Libras; desenvolver o nível básico de conversação e conhecer as principais características da Língua de Sinais.`,
    instructor: "Professor Dr. Luiz Renato Martins da Rocha",
    targetAudience: ["Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Alfabeto Manual, números em Libras e prática dos sinais",
          "Libras e suas características",
          "Resolução de atividades envolvendo teoria e prática sobre Libras",
        ],
      },
    ],
    hourOptions: [
      {
        hours: 40,
        price: 95,
        installments: "2x R$ 50,00",
      },
      {
        hours: 80,
        price: 155,
        installments: "2x R$ 82,00",
      },
      {
        hours: 100,
        price: 185,
        installments: "2x R$ 97,00",
      },
    ],
  },
  {
    id: 16,
    title: "A formação identitária nacional: contribuições da estética romântica",
    category: "Letras",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/romantic-aesthetic-national-identity.jpg",
    description: `A Literatura produzida pela Estética Romântica terá papel decisivo para a construção identitária brasileira. Assim, o índio é eleito como verdadeiro símbolo de nacionalidade, visão extremamente influenciada pela atitude romântica de valorizar o passado histórico e que vê no cavaleiro medieval o símbolo máximo de heroísmo. Nesse projeto literário brasileiro, destaca-se a produção do romancista José de Alencar. Sua vasta obra compreende romances, peças de teatro e ensaios críticos. O conjunto de obras do autor revela produções diversificadas em temas e gêneros, que serviram para compor uma identidade nacional, ainda que idealizante. Dessa forma, este curso procura enfocar qual a contribuição de Alencar para a representação identitária brasileira.`,
    instructor: "Professor Rondinele Aparecido Ribeiro",
    targetAudience: ["Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "A Estética Romântica no Brasil",
          "Literatura e Identidade Nacional",
          "O projeto literário alencariano",
        ],
      },
    ],
    hourOptions: [
      {
        hours: 40,
        price: 95,
        installments: "2x R$ 50,00",
      },
      {
        hours: 80,
        price: 155,
        installments: "2x R$ 82,00",
      },
      {
        hours: 100,
        price: 185,
        installments: "2x R$ 97,00",
      },
    ],
  },
  {
    id: 17,
    title: "A SEQUÊNCIA DIDÁTICA COMO METODOLOGIA PARA AS AULAS DE LÍNGUA PORTUGUESA",
    category: "Letras",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/didactic-sequence-portuguese-language.jpg",
    description: `Torna-se cada vez mais difícil pensar no trabalho com gêneros textuais a não ser por meio de um conjunto de práticas escolares organizadas de maneira sistemática. Este curso apresenta a metodologia das Sequências Didáticas (SD) criada pelo grupo de Genebra como forma de trabalho com a língua materna. A metodologia e os procedimentos para o ensino de gêneros, tal como sugeridas por Joaquim Dolz, Michele Noverraz e Bernard Schneuwly, são procedimentos adotados no ensino fundamental francês e constituem um conjunto de atividades escolares organizadas de maneira sistemática, em torno de um gênero textual ou escrito.`,
    instructor: "Professor Rondinele Aparecido Ribeiro",
    targetAudience: [
      "Interessados na temática",
      "Alunos de graduação dos cursos de Pedagogia e de Letras",
      "Professores",
    ],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Conceito de Gênero Textual",
          "Conceito de Tipologia Textual",
          "Metodologia das Sequências Didáticas",
          "Modelo de Sequência Didática",
        ],
      },
    ],
    hourOptions: [
      {
        hours: 40,
        price: 95,
        installments: "2x R$ 50,00",
      },
      {
        hours: 80,
        price: 155,
        installments: "2x R$ 82,00",
      },
      {
        hours: 100,
        price: 185,
        installments: "2x R$ 97,00",
      },
    ],
  },
  {
    id: 18,
    title: "O hábito da leitura na formação do cidadão crítico",
    category: "Letras",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/reading-habit-critical-citizen.jpg",
    description: `O presente curso objetiva evidenciar a contribuição do hábito da leitura na formação do cidadão crítico capaz de ler de maneira a saber interpretar os diversos discursos e atuar como cidadão participativo.`,
    instructor:
      "Ana Cássia Gabriel - Bacharel (FIO) e especialista em direito (UNOPAR), licencianda em Ciências Sociais (UNIMES)",
    targetAudience: ["Para aqueles que desejam refletir sobre a importância da leitura na formação do cidadão crítico"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "A relevância do hábito da leitura",
          "A importância da leitura na formação do leitor crítico",
          "O hábito da leitura e a participação na sociedade democrática",
        ],
      },
    ],
    hourOptions: [
      {
        hours: 40,
        price: 95,
        installments: "2x R$ 50,00",
      },
      {
        hours: 80,
        price: 155,
        installments: "2x R$ 82,00",
      },
      {
        hours: 100,
        price: 185,
        installments: "2x R$ 97,00",
      },
    ],
  },
  {
    id: 19,
    title: "A COMUNICAÇÃO EM LÍNGUA BRASILEIRA DE SINAIS: FISIOTERAPEUTA E PACIENTE SURDO",
    category: "Saúde",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/libras-communication-physiotherapy-deaf-patient.jpg",
    description: `O objetivo deste curso é apresentar as dificuldades presentes na comunicação entre profissional da saúde (Fisioterapeuta) e paciente surdo.`,
    instructor: "Professora Maria Rita Martins",
    targetAudience: ["Interessados na temática", "Fisioterapeutas", "Profissionais da saúde"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Comunicação em Libras no contexto da saúde",
          "Desafios na comunicação fisioterapeuta-paciente surdo",
          "Práticas de atendimento inclusivo",
        ],
      },
    ],
    hourOptions: [
      {
        hours: 40,
        price: 95,
        installments: "2x R$ 50,00",
      },
      {
        hours: 80,
        price: 155,
        installments: "2x R$ 82,00",
      },
      {
        hours: 100,
        price: 185,
        installments: "2x R$ 97,00",
      },
    ],
  },
  {
    id: 20,
    title: "Humanização no atendimento em saúde com ênfase em saúde pública",
    category: "Saúde",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/humanization-health-care-public-health.jpg",
    description: `Efetuar os princípios de humanização em atendimento de saúde em geral para produção de uma nova maneira de "fazer saúde", embasado em comunicação e prática de trocas solidárias de experiências entre gestores, trabalhadores e usuários do sistema único de saúde para a produção de saúde.`,
    instructor: "Professora Maria Rita Martins",
    targetAudience: ["Interessados na temática", "Profissionais da saúde", "Gestores de saúde"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Conceito e cultura da humanização em atendimento de saúde",
          "Política Nacional de humanização (PNH)",
          "Desafios atuais do humanizaSUS",
          "Princípios básicos da humanização",
        ],
      },
    ],
    hourOptions: [
      {
        hours: 40,
        price: 95,
        installments: "2x R$ 50,00",
      },
      {
        hours: 80,
        price: 155,
        installments: "2x R$ 82,00",
      },
      {
        hours: 100,
        price: 185,
        installments: "2x R$ 97,00",
      },
    ],
  },
  {
    id: 21,
    title: "A ética de Hans Jonas e a educação ambiental na contemporaneidade",
    category: "Educação Ambiental",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/hans-jonas-ethics-environmental-education.jpg",
    description: `O presente curso objetiva elucidar as contribuições do filósofo Hans Jonas para o estudo da educação ambiental na atualidade. Hans Jonas propõe uma ética da responsabilidade como fundamento de uma nova ética para a sociedade tecnológica. "Age de tal maneira a garantir a perpetuação da vida humana no planeta" – eis o imperativo categórico de Hans Jonas. Urge pensarmos na importância da educação ambiental para formarmos futuras gerações que se comprometam com o futuro da própria humanidade.`,
    instructor: "Professora Ana Cássia Gabriel",
    targetAudience: ["Interessados na temática", "Educadores", "Profissionais da área ambiental"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "A educação ambiental como uma necessidade premente nos nossos dias tendo em vista o desenvolvimento tecnológico",
          "O pensamento ético de Kant e seu imperativo categórico – age de tal maneira que a máxima de sua ação se torne uma máxima universal",
          "O pensamento ético de Hans Jonas culminando no princípio responsabilidade que recomenda uma heurística do medo como propedêutica para se preservar o meio ambiente",
          "Discussão sobre technologies e ética na contemporaneidade",
        ],
      },
    ],
    hourOptions: [
      {
        hours: 40,
        price: 95,
        installments: "2x R$ 50,00",
      },
      {
        hours: 80,
        price: 155,
        installments: "2x R$ 82,00",
      },
      {
        hours: 100,
        price: 185,
        installments: "2x R$ 97,00",
      },
    ],
  },
  {
    id: 22,
    title: "Educação Ambiental crítica: desafios e perspectivas na contemporaneidade",
    category: "Educação Ambiental",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/critical-environmental-education-challenges.jpg",
    description: `O presente curso objetiva aprofundar conhecimentos sobre a educação ambiental considerando que no atual estado da tecnologia o ser humano possui uma capacidade de impedir a perpetuação da vida humana no planeta.`,
    instructor:
      "Ana Cássia Gabriel - Bacharel (FIO) e especialista em direito (UNOPAR), Acadêmica de Ciências Sociais (UNIMES)",
    targetAudience: [
      "Para aqueles que desejam aprofundar conhecimentos em seara das discussões contemporâneas da educação ambiental",
    ],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Desafios da Educação Ambiental no Brasil e em Portugal",
          "Ciência e Ética: Um Novo Desafio do Imperativo Categórico De Kant",
          "Educação Ambiental: Desafio de uma Reflexão Crítica",
        ],
      },
    ],
    hourOptions: [
      {
        hours: 40,
        price: 95,
        installments: "2x R$ 50,00",
      },
      {
        hours: 80,
        price: 155,
        installments: "2x R$ 82,00",
      },
      {
        hours: 100,
        price: 185,
        installments: "2x R$ 97,00",
      },
    ],
  },
  {
    id: 23,
    title: "O ENSINO DE FILOSOFIA COMO CRIAÇÃO DE CONCEITOS EM DELEUZE E A EXPERIÊNCIA FILOSÓFICA",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/deleuze-philosophy-teaching-concept-creation.jpg",
    description: `O presente curso objetiva propiciar um estudo sobre o entendimento do filósofo Deleuze sobre o ensino de Filosofia como criação conceptual. Também pretendemos expor uma investigação sobre a aula de Filosofia como experiência filosófica. Por experiência filosófica, entendemos uma vivência da Filosofia que se distancia do enciclopedismo, que, por sua vez, se configura como um modo de memorizar os sistemas filosóficos sem uma relação com o cotidiano.`,
    instructor: "Professor Me. Fábio Antonio Gabriel",
    targetAudience: ["Para aqueles que desejam aprofundar conhecimentos em Filosofia e no ensino de Filosofia"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Ensino de Filosofia em perspectiva: contribuições de Nietzsche, Deleuze, Guattari e das Diretrizes Curriculares de Filosofia do estado do Paraná",
          "A aula de Filosofia como experiência filosófica: reflexões partindo das contribuições de Nietzsche, Deleuze, Guattari e das Diretrizes Curriculares de Filosofia do Estado do Paraná",
          "Por uma nova epistemologia do ensino de Filosofia no Ensino Médio: mediações sobre o cotidiano em Wittgenstein e em Deleuze",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 24,
    title: "GÊNERO, SEXUALIDADES E IDENTIDADES: UMA PROPOSTA DE INCLUSÃO NA EDUCAÇÃO",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/gender-sexualities-identities-education.jpg",
    description: `O conceito de gênero é um importante conhecimento para o convívio em sociedade, pois é no cotidiano dos distintos espaços sociais que as diferenças de gênero se manifestam. As identidades de gênero, como aspectos socialmente construídos, configuram-se como numa das formas de classificação de sujeitos e grupos sociais. Nesta perspectiva, o presente curso visa apresentar conceitos gerais acerca dos estudos recentes sobre as relações entre gênero e sexualidade, principalmente no que se refere aos espaços escolares.`,
    instructor: "Professor Me. Thiago José da Rocha",
    targetAudience: ["Professores", "Estudantes e graduados das áreas de ciências humanas e sociais"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "O que é gênero?",
          "Gênero, sexualidades e identidades",
          "Identidades de gênero e diversidade sexual na escola",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 25,
    title: "ESTADO LAICO NO BRASIL: LIMITES E POSSIBILIDADES",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/secular-state-brazil-limits-possibilities.jpg",
    description: `No cenário atual, muito se discute a respeito dos limites da laicidade do Estado brasileiro. Para isso, o presente curso tem por objetivo compreender as origens históricas do Estado confessional brasileiro desde o período colonial, a imposição de um Estado confessional durante o Império e repensar os limites para a verdadeira efetivação do estado laico brasileiro pressuposto nas constituições republicanas. Além disso, será objeto de discussão a utilização de símbolos religiosos em espaços públicos e de que maneira essa prática pode afetar a laicidade estatal no Brasil.`,
    instructor: "Professor Me. Danilo de Souza Torregrossa",
    targetAudience: [
      "Interessados na temática",
      "Professores da rede pública",
      "Acadêmicos de Ciências Humanas e Sociais",
    ],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Definição dos conceitos de Religião e Deus",
          "Definição do conceito de Estado Laico",
          "A questão religiosa nas constituições de 1824, 1891 e 1988",
          "Origem histórica do Estado confessional brasileiro na Colônia",
          "As origens do Estado Laico no Brasil",
          "O Estado Laico e o uso de símbolos religiosos em repartições públicas",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 26,
    title: "Neurociências e o Ensino da Matemática",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/neuroscience-mathematics-teaching.jpg",
    description: `A neurociência tem como campo de pesquisa o sistema nervoso central e suas ações, ou seja, estuda os neurônios, os órgãos do sistema nervoso, bem como suas funções específicas. O (A) professor (a) ao compreender tais conhecimentos que serão apresentados durante o curso, poderá implementá-los em suas práticas pedagógicas, melhorando assim suas estratégias de ensino, bem como a aprendizagem dos conteúdos matemáticos por parte dos (as) alunos (as).`,
    instructor: "Professor Me. Sidney Lopes Sanchez Júnior",
    targetAudience: [
      "Professores",
      "Educadores",
      "Pedagogos",
      "Psicopedagogos que ensinam matemática na Educação Infantil e no Ensino Fundamental",
    ],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Neurociência e Educação",
          "O Cérebro",
          "Matemática",
          "Cognição Numérica",
          "Neurociência e Matemática",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 27,
    title: "Psicomotricidade em ambiente escolar e não escolar",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/psychomotricity-school-non-school.jpg",
    description: `O objetivo é preparar profissionais dentro das escolas para o exercício de atividades docentes, numa perspectiva crítica, reflexiva e transformadora, levantando fundamentos do desenvolvimento motor, da aprendizagem e da inclusão. Outro objetivo consiste em entender como a psicomotricidade contribui para o processo de ensino/ aprendizagem colaborando para subsidiar os professores de Educação Infantil e Ensino Fundamental em sua prática pedagógica.`,
    instructor: "Professor Me. Fabio Jose Antonio da Silva",
    targetAudience: [
      "Pedagogos",
      "Psicopedagogos",
      "Professores de Educação Infantil",
      "Professores de Educação Física",
      "Fonoaudiólogos",
      "Fisioterapeutas",
      "Terapeutas Ocupacionais",
    ],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Introdução a Psicomotricidade",
          "Neuroanatomofisiologia e Patologias Motoras",
          "Controle Motor e psicomotricidade",
          "Práticas Psicomotoras na Escola",
          "Avaliação Psicomotora",
          "Psicomotricidade na Terceira Idade",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 28,
    title: "Introdução à Psicopedagogia",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/introduction-psychopedagogy.jpg",
    description: `Contribuir para que os profissionais da educação conheçam os aspectos históricos, a finalidade e campos de atuação da psicopedagogia.`,
    instructor: "Professor Pedro Ferrari",
    targetAudience: ["Profissionais da educação", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: ["Origem e objetivo da Psicopedagogia", "Campo de atuação da Psicopedagogia"],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 29,
    title: "As contribuições de Michel Foucault para pensar a escola na contemporaneidade",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/foucault-school-contemporaneity.jpg",
    description: `O presente curso objetiva elucidar as contribuições do filósofo Michel Foucault para se pensar nas relações no ambiente escolar. Foucault é um importante filósofo contemporâneo que pensa as relações de adestramento do corpo e da mente que permeia locais como hospitais, presídios e escolas. Para ele a disciplina seria um instrumento de adestramento dos comportamentos que fugiam do controle de quem tem o poder na sociedade.`,
    instructor: "Prof. Ana Cássia Gabriel",
    targetAudience: ["Para aqueles que desejam aprofundar conhecimentos em Filosofia e em educação"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Foucault e os regimes disciplinares nos diversos ambientes de controle",
          "O pensamento ético de Foucault e suas contribuições para se pensar o ambiente escolar na contemporaneidade",
          "A disciplina escolar percebida na ótica de Michel Foucault",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 30,
    title: "O pensamento de Émile Durkheim e a Educação",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/durkheim-education.jpg",
    description: `O presente curso objetiva elucidar as contribuições do pensamento de Émile Durkheim para a educação. Apresentamos produções referentes ao pensamento do sociólogo que podem contribuir para se pensar a educação na contemporaneidade.`,
    instructor: "Professora Esp: Ana Cássia Gabriel",
    targetAudience: ["Para aqueles que desejam aprofundar conhecimentos em Émile Durkheim e sua sociologia"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "O pensamento sociológico de Émile Durkheim",
          "Sociologia da Educação",
          "As contribuições de Émile Durkheim para a Educação",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 31,
    title: "O pensamento de Max Weber e a Educação",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/weber-education.jpg",
    description: `O presente curso objetiva elucidar as contribuições do pensamento de Max Weber para a educação. Apresentamos produções referentes ao pensamento do sociólogo que podem contribuir para se pensar a educação na contemporaneidade.`,
    instructor: "Professora Esp: Ana Cássia Gabriel",
    targetAudience: ["Para aqueles que desejam aprofundar conhecimentos em Max Weber"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "O pensamento sociológico de Max Weber",
          "Sociologia da Educação",
          "As contribuições de Max Weber para a Educação",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 32,
    title: "O pensamento de Karl Marx e a Educação",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/marx-education.jpg",
    description: `O presente curso objetiva elucidar as contribuições do pensamento de Karl Marx para a educação. Apresenta as investigações sobre as inferências do pensamento de Marx para a educação.`,
    instructor: "Professora Esp: Ana Cássia Gabriel",
    targetAudience: ["Para aqueles que desejam aprofundar conhecimentos em Karl Marx"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "O pensamento sociológico de Karl Marx",
          "Sociologia da Educação",
          "As contribuições de Karl Marx para a Educação",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 33,
    title: "As contribuições de Pierre Bourdieu para a Educação",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/bourdieu-education.jpg",
    description: `O presente curso objetiva elucidar as contribuições do filósofo Pierre Bourdieu para a educação. O sociólogo tematiza explicitamente as desigualdades sociais e o quanto isso impacta numa educação de qualidade.`,
    instructor: "Professora Esp: Ana Cássia Gabriel",
    targetAudience: ["Para aqueles que desejam aprofundar conhecimentos em Sociologia e em educação"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Pierre Bourdieu: sua sociologia e aplicabilidade à educação",
          "O conceito de campo e habitus em Bourdieu",
          "O capital cultural e classe em Bourdieu",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 34,
    title: "A pedagogia histórico-crítica na sociedade contemporânea",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/historical-critical-pedagogy.jpg",
    description: `O presente curso objetiva elucidar as contribuições pedagogia histórico-crítica e sua influência na contemporaneidade no sentido de se entender o processo de ensino-aprendizagem do ponto de vista da corrente epistemológica materialista-dialética.`,
    instructor:
      "Ana Cássia Gabriel - Bacharel (FIO) e especialista em direito (UNOPAR), licencianda em Ciências Sociais (UNIMES)",
    targetAudience: ["Para aqueles que desejam aprofundar conhecimentos sobre a pedagogia histórico-crítica"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Pedagogia Histórico-crítica e a Avaliação",
          "Da Inspiração à Formulação Da Pedagogia Histórico-Crítica",
          "O Trabalho Pedagógico na Perspectiva da Pedagogia",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 35,
    title: "A lei antibullying e a vivência respeitosa no ambiente escolar",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/antibullying-law-school.jpg",
    description: `O presente curso objetiva elucidar o impacto da lei antibullying no âmbito escolar no sentido de garantir que todos os alunos sejam respeitados em suas perspectivas pessoais identitárias.`,
    instructor:
      "Ana Cássia Gabriel - Bacharel (FIO) e especialista em direito (UNOPAR), licencianda em Ciências Sociais (UNIMES)",
    targetAudience: ["Para aqueles que desejam refletir sobre o bullying"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "A importância do respeito no ambiente escolar",
          "A lei antibullying para garantir a defesa de alunos vulneráveis",
          "Os dispositivos legais para inibir o bullying",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 36,
    title: "O ECA e a Educação: discussões preliminares",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/eca-education-preliminary-discussions.jpg",
    description: `O presente curso objetiva elucidar as contribuições do ECA para a proteção de direitos fundamentais dos que são tutelados por esse instituto legal. O texto faz uma leitura crítica das contribuições do ECA e suas contribuições para o âmbito da educação.`,
    instructor:
      "Ana Cássia Gabriel - Bacharel (FIO) e especialista em direito (UNOPAR), licencianda em Ciências Sociais (UNIMES)",
    targetAudience: [
      "Para aqueles que desejam aprofundar conhecimentos sobre a relação do ECA com as questões educacionais",
    ],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "O Estatuto da Criança e do Adolescente e a Educação articulando estratégias para a superação de desrespeito à dignidade humana",
          "A trajetória dos direitos no estatuto da criança e do adolescente, no caso Brasileiro",
          "A educação e a aplicabilidade do ECA - direitos e deveres sob um novo olhar",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 37,
    title: "Educação de idosos: algumas reflexões",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/elderly-education-reflections.jpg",
    description: `O presente curso objetiva elucidar reflexões a educação de idosos no contexto educacional contemporâneo. Percebe-se que não há limites para o aprendizado e os idosos podem também atualizar conhecimentos e vivenciar novas experiências educativas.`,
    instructor:
      "Ana Cássia Gabriel - Bacharel (FIO) e especialista em direito (UNOPAR), licencianda em Ciências Sociais (UNIMES)",
    targetAudience: ['Para aqueles que desejam aprofundar conhecimentos na temática "Educação de Idosos"'],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Formação De Educadores: Uma Perspectiva De Educação De Idosos Em Programas De Eja",
          "O Direito À Educação Prescrito No Estatuto Do Idoso: Uma Breve Discussão",
          "O Idoso E Os Desafios À Sua Educação Escolar",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 38,
    title: "A eficácia da Lei Maria da Penha na luta pela prevenção da violência contra a Mulher",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/maria-da-penha-law-violence-prevention.jpg",
    description: `O presente curso objetiva elucidar as contribuições da lei Maria da Penha no sentido de prevenir ações violentas contra as mulheres.`,
    instructor:
      "Ana Cássia Gabriel - Bacharel (FIO) e especialista em direito (UNOPAR), licencianda em Ciências Sociais (UNIMES)",
    targetAudience: ["Para aqueles que desejam aprofundar conhecimentos sobre a Lei Maria da Penha"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Desafios da implementação da Lei Maria da Penha",
          "As contribuições da Lei Maria da Penha no sentido de salvaguardar direito às mulheres",
          "As contribuições da Lei Maria da Penha no sentido da prevenção da violência contra a mulher",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 39,
    title: "Desafios para a Educação em tempos de pandemia",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/education-challenges-pandemic.jpg",
    description: `De repente nos vemos numa pandemia. Todos ficamos aflitos tendo em vista um cenário alarmante. Nesse sentido, o presente curso apresenta reflexões sobre a educação em tempos de pandemia: desafios e possibilidades.`,
    instructor:
      "Ana Cássia Gabriel - Bacharel (FIO) e especialista em direito (UNOPAR), licencianda em Ciências Sociais (UNIMES)",
    targetAudience: ["Para aqueles que desejam refletir sobre os desafios de se educar durante a pandemia"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Desafios de se educar na pandemia",
          "Pandemia: desafios e reflexões",
          "Os impactos da pandemia no campo educacional",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 40,
    title: "Piaget e sua teoria do desenvolvimento humano",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/piaget-human-development-theory.jpg",
    description: `Existem diversas teorias sobre o desenvolvimento humano, uma delas é a de Piaget e sua contribuição para a psicologia da educação nos demonstrando os processos pelos quais nós, seres humanos, passamos até atingir nosso desenvolvimento.`,
    instructor:
      "Ana Cássia Gabriel - Bacharel (FIO) e especialista em direito (UNOPAR), Acadêmica de Ciências Sociais (UNIMES)",
    targetAudience: [
      "Para aqueles que desejam conhecer sobre o desenvolvimento humano numa interface entre educação e psicologia da educação",
    ],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Piaget segundo seus próprios argumentos",
          "O desenvolvimento humano na perspectiva de Piaget",
          "Piaget: notas para uma teoria construtivista",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 41,
    title: "Contribuições do ECA para salvaguardar os direitos da criança e do adolescente",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/eca-child-adolescent-rights.jpg",
    description: `O presente curso objetiva elucidar reflexões sobre o Estatuto da Criança e do Adolescente e suas principais contribuições no processo de salvaguardar direitos e a proteção a crianças e adolescentes.`,
    instructor:
      "Ana Cássia Gabriel - Bacharel (FIO) e especialista em direito (UNOPAR), Acadêmica de Ciências Sociais (UNIMES)",
    targetAudience: [
      "Para aqueles que desejam aprofundar conhecimentos na temática reflexiva sobre o que estabelece o Estatuto da Criança e do Adolescente",
    ],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Evolução histórica dos direitos da criança e do adolescente",
          "Políticas públicas e Estatuto da Criança e do Adolescente",
          "O ECA e sua implementação",
          "Algumas considerações sobre o Estatuto da Criança e do Adolescente",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 42,
    title: "Direitos Humanos e educação: um diálogo necessário e fundamental",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/human-rights-education-dialogue.jpg",
    description: `O presente curso objetiva aprofundar conhecimentos sobre direitos humanos e sua aplicação com as questões educacionais, buscando evidenciar o quanto é importante formar as futuras gerações para a valorização da preservação da dignidade da pessoa humana independentemente de qualquer contingência.`,
    instructor:
      "Ana Cássia Gabriel - Bacharel (FIO) e especialista em direito (UNOPAR), Acadêmica de Ciências Sociais (UNIMES)",
    targetAudience: ["Para aqueles que desejam aprofundar conhecimentos na relação entre direitos humanos e educação"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "EDUCAÇÃO E DIREITOS HUMANOS",
          "DEMOCRACIA E DIREITOS HUMANOS NO BRASIL",
          "PAULO FREIRE E DIREITOS HUMANOS",
          "EDUCAÇÃO EM DIREITOS HUMANOS EM BRASIL E EM PORTUGAL",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 43,
    title: "Metodologias ativas na Educação: Reflexões Metodológicas",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/active-methodologies-education.jpg",
    description: `O presente curso objetiva elucidar reflexões sobre as metodologias ativas num contexto de utilização dos recursos tecnológicos para propiciar a educação de qualidade focada na aprendizagem dos alunos.`,
    instructor:
      "Ana Cássia Gabriel - Bacharel (FIO) e especialista em direito (UNOPAR), Acadêmica de Ciências Sociais (UNIMES)",
    targetAudience: [
      "Para todos aqueles que desejam aprofundar conhecimentos sobre a relevância das metodologias ativas para a relação ensino-aprendizagem",
    ],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Mudando a educação com metodologias ativas",
          "Metodologias ativas de ensino aprendizagem: revisão integrativa",
          "As metodologias ativas e a promoção da autonomia de estudantes",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 44,
    title: "Considerações pedagógicas, epistemológicas e metodológicas sobre o ensino religioso",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/religious-education-pedagogical-considerations.jpg",
    description: `O presente curso objetiva refletir sobre a identidade do ensino religioso pensando nas possíveis contribuições da aprendizagem da cultura religiosa como forma de promoção do diálogo e de respeito das diferentes perspectives religiosas.`,
    instructor:
      "Ana Cássia Gabriel - Bacharel (FIO) e especialista em direito (UNOPAR), Acadêmica de Ciências Sociais (UNIMES)",
    targetAudience: ["Para aqueles que desejam aprofundar reflexões sobre o ensino religioso escolar"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "A identidade do ensino religioso escolar",
          "Desafios para a formação de professores de ensino religioso",
          "Identidade pedagógica do ensino religioso",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 45,
    title: "Contexto atual da Educação do Campo",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/rural-education-current-context.jpg",
    description: `O presente curso objetiva aprofundar conhecimentos sobre a educação do campo situando a questão do ponto de vista epistemológico contemporâneo. Prima-se em apresentar reflexões críticas sobre a relevância da educação do campo no cenário contemporâneo visando sempre o respeito pela dignidade da pessoa humana.`,
    instructor:
      "Ana Cássia Gabriel - Bacharel (FIO) e especialista em direito (UNOPAR), Acadêmica de Ciências Sociais (UNIMES)",
    targetAudience: ["Para aqueles que desejam aprofundar conhecimentos sobre o contexto atual da educação do campo"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Reflexões sobre a educação do campo e a Revolução Verde",
          "O contexto atual da educação do campo: o que dizem as pesquisas realizadas",
          "Educação do campo: Concepção, fundamentos e desafios",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 46,
    title: "Contextualização Histórica e legal Da Educação Especial",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/historical-legal-contextualization-special-education.jpg",
    description: `A presente disciplina tem como intuito explicitar o contexto histórico da Educação Especial no Brasil. Num primeiro momento, abordamos o período de 1854 a 1956; em seguida de 1957 a 1993 com base em leis, decretos, até o momento atual.`,
    instructor: "Professora Me. Solange Aparecida de Oliveira Collares",
    targetAudience: ["Interessados na temática", "Professores", "Pedagogos", "Psicólogos", "Assistente Social"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: ["História da educação especial no Brasil: períodos de 1854 a 1993", "Declaração de Salamanca"],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 47,
    title: "Transtornos globais do desenvolvimento: Atendimento especializado",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/global-developmental-disorders-specialized-care.jpg",
    description: `Esse curso de extensão ensinará ao aprendiz sobre o que ele deve introduzir no dia a dia de um aluno que tem o diagnóstico de Transtorno do Espectro autista, sendo uma orientação de fatores importantes a serem agregados no plano de sala de aula, como Aprendizagem significativa e material pedagógico adequado, estimulação de funções cognitivas como percepção, atenção, memória de trabalho, memória de procedimento e função executiva, a organização da Rotina e promoção das relações sociais (afetividade e inteligência emocional).`,
    instructor: "Professora Esp. Juliana Moraes Almeida Silva",
    targetAudience: ["Interessados na temática", "Professores", "Profissionais da educação especial"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aspectos dos transtornos globais do desenvolvimento TEA",
          "Elementos fundamentais para realizar um bom trabalho com alunos com TEA: Aprendizagem significativa e material pedagógico adequado e estimulação das funções cognitivas como percepção, atenção, memória de trabalho, memória de procedimento e função executiva",
          "Elementos fundamentais para realizar um bom trabalho com alunos com TEA: Organização da Rotina e promoção de relações sociais (afetividade e inteligência emocional)",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 48,
    title: "Deficiência Intelectual e Alfabetização",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/intellectual-disability-literacy.jpg",
    description: `Vygotsky afirmava que o funcionamento psíquico das pessoas com deficiência obedece às mesmas leis das pessoas sem deficiência, embora com uma organização distinta, assim, como proceder diante das pessoas com deficiência intelectual no tocante a alfabetização? Diante desse cenário, o curso em questão, responderá a essa pergunta norteadora.`,
    instructor: "Professora Dra. Marcia Regina dos Reis",
    targetAudience: ["Interessados na temática", "Professores", "Pedagogos", "Profissionais da educação especial"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "A deficiência na visão de Vygotsky",
          "Aquisição da linguagem segundo a teoria histórico-cultural",
          "Deficiência: por uma concepção de homem em desenvolvimento",
          "A apropriação da linguagem escrita na teoria histórico-cultural para pessoas com deficiência intelectual",
          "Relação linguagem oral e linguagem escrita",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 49,
    title: "Inclusão de alunos com Transtornos Globais do Desenvolvimento",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/inclusion-global-developmental-disorders.jpg",
    description: `Considerando o aumento significativo de estudantes com diagnóstico de autismo, síndrome de Asperger e psicose, bem como a necessidade de delinear a construção e implementação de políticas públicas de acordo com a Política Nacional de Educação Especial na Perspectiva da Educação Inclusiva (PNEE-PEI/2008), este curso, destinado aos profissionais que atuam nos serviços da Educação Especial na área dos Transtornos Globais do Desenvolvimento, tem o objetivo de ofertar fundamentação teórica que reflita sobre procedimentos e encaminhamentos de intervenções pedagógicas.`,
    instructor: "Professora Renata Aparecida Quani",
    targetAudience: ["Interessados na temática", "Profissionais da Educação Especial"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: ["Definição/ Características", "Atendimento Educacional Especializado", "Intervenções Pedagógicas"],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 50,
    title: "Dislexia, identificação e encaminhamentos",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/dyslexia-identification-referrals.jpg",
    description: `Considerando o aumento significativo de estudantes com diagnóstico de DISLEXIA, bem como a necessidade de delinear a construção e implementação de políticas públicas de acordo com a Política Nacional de Educação Especial na Perspectiva da Educação Inclusiva (PNEE-PEI/2008), este curso é destinado aos profissionais que atuam nos serviços da Educação Especial, bem como aos professores do ensino comum. Tem como objetivo ofertar fundamentação teórica que reflita sobre procedimentos e encaminhamentos e intervenções pedagógicas que contribuam efetivamente com a aprendizagem significativa, dos que apresentam o quadro de dislexia.`,
    instructor: "Professora Renata Aparecida Quani",
    targetAudience: ["Interessados na temática", "Profissionais da Educação Especial", "Professores do ensino comum"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: ["Definição/ Características", "Atendimento Educacional Especializado", "Intervenções Pedagógicas"],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 51,
    title: "Iniciação à Escrita no Sistema Braille",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/braille-writing-initiation.jpg",
    description: `Será feito um breve relato sobre a história da escrita braille, o quanto este sistema ajudou a tirar a pessoa cega da obscuridade e a incluir na sociedade. Será feito a progressão das letras em braille tanto no modo de leitura como de escrita pois o material mais acessível para a realização da mesma é a reglete negativa onde o aluno escreve da direita para a esquerda e quando viramos a folha teremos a escrita em alto relevo no modo leitura, temos também a reglete positiva e a máquina Perkins que escrevem da já no modo de leitura ou seja da esquerda para a direita. Passamos algumas orientações a serem seguidas durante a escrita tanto em Português como em Matemática. Esta disciplina tem como objetivo ensinar professores a técnica inicial da escrita do Sistema Braille para poder atender alunos cegos e com baixa visão.`,
    instructor: "Professora Esp: Rosangela de Melo Braatz",
    targetAudience: ["Professores e estudantes de pedagogia"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "História da escrita braille",
          "Escrita braille no modo de leitura e escrita",
          "Orientações a serem seguidas para a escrita de português e matemática",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 52,
    title: "Desafios para a concretização da educação inclusiva",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/challenges-inclusive-education.jpg",
    description: `O presente curso objetiva elucidar os desafios para a concretização de uma educação inclusiva. No século XXI somos convidados a construir um paradigma de educação inclusiva.`,
    instructor:
      "Professora Ana Cássia Gabriel - Bacharel (FIO) e Especialista em Direito (UNOPAR), Licencianda em Ciências Sociais (UNIMES)",
    targetAudience: ["Para aqueles que desejam aprofundar conhecimentos sobre inclusão escolar"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Inclusão: paradigma do século XXI",
          "Da educação segregada à educação inclusiva",
          "Procurando indicadores de práticas inclusivas",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 53,
    title: "Desenho Universal para a Aprendizagem (DUA) – das intenções às práticas pedagógicas inclusivas",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/universal-design-learning-inclusive-practices.jpg",
    description: `Com base nos pressupostos e indicações legais para promover a inclusão escolar, este curso objetiva apresentar a abordagem didática do Desenho Universal para a Aprendizagem (DUA) como possibilidade da organização da prática pedagógica inclusiva. Nesse sentido, propõe a sensibilização de licenciandos e licenciados da Educação Básica e da Educação Superior para a inclusão de alunos público alvo da Educação Especial no contexto do ensino regular. Organiza-se em três momentos articulados entre si: identificação dos princípios da educação inclusiva na formação e na atuação docente, apresentação dos princípios do Desenho Universal para a Aprendizagem como possibilidade pedagógica para assegurar as necessidades básicas de aprendizagem dos alunos e, por fim, apresentação de um plano de aula subsidiado pelos princípios do DUA.`,
    instructor:
      "Jacqueline Lidiane de Souza Prais - Pedagoga - Especialista em Educação Especial e em Políticas públicas para a Educação - Mestre em ensino - Doutoranda em educação",
    targetAudience: ["Interessados na temática", "Licenciandos e licenciados das diversas áreas do conhecimento"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Pressupostos da educação inclusiva",
          "Princípios do Desenho Universal para a Aprendizagem",
          "Planejamento de ensino com base no DUA",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 54,
    title: "Elaboração de projetos com foco nas seleções de mestrados e doutorados no Brasil",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/elaboracao-projetos-mestrado-doutorado.jpg",
    description: `Muitas pessoas têm boas ideias de pesquisa, mas encontram dificuldades para começar a escrever. Este curso oferece dicas práticas para estruturar trabalhos acadêmicos e elaborar projetos para mestrado e doutorado. Aborda desde como iniciar uma pesquisa científica até busca de referências, escrita acadêmica e normas da ABNT. O objetivo é auxiliar na produção de trabalhos e artigos bem estruturados, alinhados às exigências do meio acadêmico atual.`,
    instructor: "Prof°. Ddo. Sidney Lopes Sanchez Júnior",
    targetAudience: ["Interessados na temática", "Estudantes de pós-graduação", "Pesquisadores"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Início e Estruturação de um Projeto de Pesquisa",
          "Aula 2 – Escrita Científica e Normas",
          "Aula 3 – Desenvolvimento e Referências",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 55,
    title: "Como implantar e implementar a Educação Bilíngue para surdos em seu município?",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/educacao-bilingue-surdos.jpg",
    description: `Este curso capacita profissionais e gestores municipais para implementar a educação bilíngue para surdos, garantindo o direito dos alunos surdos de se tornarem fluentes em Libras e Língua Portuguesa escrita, conforme previsto na legislação brasileira (Decreto nº 5.626/2005, Lei nº 13.146/2015, PNE e Lei nº 14.191/2021). Serão discutidos os conceitos de educação inclusiva e bilíngue, com foco em estratégias práticas para assegurar o pleno desenvolvimento linguístico dos estudantes surdos em todos os municípios.`,
    instructor: "Profª Drª Beatriz Aparecida dos Reis Turetta, PhD.",
    targetAudience: ["Profissionais da educação", "Gestores municipais", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Educação Inclusiva x Educação Bilíngue para Surdos",
          "Aula 2 – Educação Bilíngue para Surdos na Legislação",
          "Aula 3 – Ensino de Língua Portuguesa como Segunda Língua (L2)",
          "Aula 4 – Profissionais da Educação Bilíngue para Surdos",
          "Aula 5 e 6 – Implantação e Implementação da Educação Bilíngue",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 56,
    title: "Transtorno de Déficit de Atenção com Hiperatividade (TDAH)",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/tdah.jpg",
    description: `O curso visa capacitar profissionais da educação e da clínica para lidar com comportamentos inadequados de alunos com TDAH, desenvolvendo competências em gestão escolar, orientação parental e intervenção clínica. Por meio de instrumentos, metodologias e conceitos da Análise do Comportamento, os participantes poderão aplicar estratégias de manejo de comportamento, promovendo melhoria na aprendizagem, na prática profissional e na qualidade de vida do indivíduo e sua família.`,
    instructor: "Profa. Me. Maísa Novaes Portella Checchia",
    targetAudience: ["Profissionais da educação", "Profissionais da clínica", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Introdução ao TDAH",
          "Aula 2 – Neuropsicologia do TDAH",
          "Aula 3 – Comportamentos do TDAH",
          "Aula 4 – Intervenções e Manejo Comportamental",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 57,
    title: "O funcionamento do cérebro AUTISTA",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/cerebro-autista.jpg",
    description: `O curso tem como objetivo apresentar o funcionamento do cérebro autista para que professores, pais e terapeutas possam tornar as relações de mediação e aprendizagem mais produtivas, acolhedoras e favoráveis ao ensino. A ênfase está em compreender o mundo sob a perspectiva do autista, considerando alterações estruturais e funcionais do cérebro, além de dificuldades de comunicação, interação social e padrões comportamentais característicos.`,
    instructor: "Profa. Juliana Moraes Almeida",
    targetAudience: ["Professores", "Pais", "Terapeutas", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Fundamentos de Neurociência no Autismo",
          "Aula 2 – Neurônios e Cognição Social",
          "Aula 3 – Cognição Social no Autismo",
          "Aula 4 – Neurocognição e Aprendizagem",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 58,
    title: "Célestin FREINET",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/celestin-freinet.jpg",
    description: `O curso apresenta a Pedagogia de Célestin Freinet, abordando sua trajetória, obras, princípios e técnicas pedagógicas, com foco na apropriação do registro escrito pelas crianças. Propõe um movimento teórico-prático, permitindo que os participantes experimentem as técnicas de Freinet e reflitam sobre como tornar as crianças protagonistas do processo de ensino e aprendizagem.`,
    instructor: "Profa. Dra. Flávia Cristina Oliveira Murbach de Barros",
    targetAudience: ["Professores", "Pedagogos", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Freinet – Vida, Obra e Princípios",
          "Aula 2 – A História, o Caminho e Suas Marcas",
          "Aula 3 – Técnicas Freinet – Parte 1",
          "Aula 4 – Técnicas Freinet – Parte 2 e Reflexão Final",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 59,
    title: "Da avaliação da aprendizagem às Estratégias e Intervenções metodológicas",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/avaliacao-aprendizagem-estrategias.jpg",
    description: `O curso abordará a avaliação como um processo contínuo de aprendizagem, destacando suas funções e a importância de paradigmas mais amplos para práticas avaliativas coerentes. Serão apresentadas técnicas e instrumentos diferenciados que contribuem para o aprimoramento do ensino e da aprendizagem.`,
    instructor: "Profa. Renata Aparecida Quani",
    targetAudience: ["Professores", "Pedagogos", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Modalidades de Avaliação: Diagnóstica, Formativa e Somativa",
          "Aula 2 – Estilos de Aprendizagem",
          "Aula 3 – Instrumentos e Critérios Avaliativos",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 60,
    title: "Atendimento Escolar Hospitalar",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/atendimento-escolar-hospitalar.jpg",
    description: `Este curso apresenta o Atendimento Escolar Hospitalar, abordando seus objetivos, políticas públicas, formação necessária e organização do serviço. Serão trabalhados aspectos teóricos e práticos do atendimento em classes hospitalares, capacitando profissionais para atuar nesse contexto e garantindo o direito à educação de crianças e adolescentes impossibilitados de frequentar a escola regular devido à saúde.`,
    instructor: "Profa. Dra. Aline Ferreira Rodrigues Pacco",
    targetAudience: ["Professores", "Profissionais da educação especial", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Definição e Objetivos do Atendimento Escolar Hospitalar",
          "Aula 2 – Histórico e Políticas Públicas",
          "Aula 3 – Formação Docente",
          "Aula 4 – Organização e Funcionamento",
          "Aula 5 – Adaptação de Recursos e Cuidados de Higiene",
          "Aula 6 – Estudos de Caso",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 61,
    title: "COORDENAÇÃO PEDAGÓGICA NA ESCOLA DA INFÂNCIA",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/coordenacao-pedagogica-infancia.jpg",
    description: `Este curso é voltado para coordenadores pedagógicos da Educação Infantil, oferecendo caminhos práticos para desenvolver sua função de forma estruturada e eficaz. O foco está em construir uma cultura escolar colaborativa, promover o desenvolvimento profissional da equipe docente e melhorar as aprendizagens dos estudantes. Serão abordadas estratégias específicas para lidar com as demandas da rotina escolar, garantindo que a coordenação pedagógica seja assertiva, contextualizada e eficiente, mesmo diante das dificuldades do dia a dia.`,
    instructor: "Profa. Me. Aline Maria de Faria Borborema Zan",
    targetAudience: ["Coordenadores pedagógicos", "Gestores escolares", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Função do Coordenador Pedagógico (CP)",
          "Aula 2 – Formação Continuada dos Professores",
          "Aula 3 – Acompanhamento do Trabalho Pedagógico",
          "Aula 4 – Parcerias Estratégicas",
          'Aula 5 – Prática Inspiradora – "Mão na Massa"',
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 62,
    title: "Como ensinar a matemática para crianças com TEA",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/matematica-tea.jpg",
    description: `Este curso aborda o ensino da matemática para crianças com Transtorno do Espectro do Autismo (TEA), destacando a importância de estratégias de ensino e avaliação eficazes e individualizadas. Serão explorados métodos que consideram tanto o conteúdo quanto as especificidades de aprendizagem de cada aluno, contribuindo para melhorar o desempenho e reduzir a aversão à matemática, tornando o processo de ensino-aprendizagem mais acessível e inclusivo.`,
    instructor: "Profa. Dra. Alessandra Daniele Messali Picharillo",
    targetAudience: ["Professores", "Profissionais da educação especial", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Reconhecer a Matemática como área essencial e acessível a todos",
          "Aula 2 – Mensurar o repertório de entrada do aluno",
          "Aula 3 – Identificar a diversidade nas formas de aprender e expressar o conhecimento",
          "Aula 4 – Desenvolver habilidades para planejar procedimentos eficientes de avaliação e ensino",
          "Aula 5 – Aplicar os conhecimentos no cotidiano da sala de aula",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 63,
    title: "Como tornar um Currículo Acessível para os Estudantes com Deficiência",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/curriculo-acessivel-deficiencia.jpg",
    description: `Este curso tem como objetivo capacitar profissionais da educação para atuarem em escolas inclusivas, oferecendo orientações práticas sobre acessibilidade curricular. O foco é garantir que todos os estudantes tenham acesso a uma educação de qualidade, mostrando caminhos viáveis para promover a educação de/para todos.`,
    instructor: "Profa. Me. Geisa Veregue",
    targetAudience: ["Professores", "Profissionais da educação especial", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Estudantes elegíveis à Educação Especial e LBI (Lei 13.146/2015)",
          "Aula 2 – Trabalho colaborativo",
          "Aula 3 – Tecnologias Assistivas e PEI (Plano Educacional Individualizado)",
          "Aula 4 – Acessibilidade ao currículo em Linguagens, Ciências Humanas, Matemática e Ciências da Natureza",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 64,
    title: "Planejamento Educacional Individualizado (PEI): do desenvolvimento à implementação",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/planejamento-educacional-individualizado.jpg",
    description: `Este curso apresenta o Planejamento Educacional Individualizado (PEI) como uma ferramenta essencial para promover o desenvolvimento global dos educandos, especialmente aqueles atendidos pelos serviços da educação especial. Por meio de fundamentação teórica e aplicação prática, o curso permite ao profissional compreender, elaborar e implementar o PEI, oferecendo também reflexões sobre como utilizar essa ferramenta com qualquer estudante, potencializando intervenções e aprimorando a prática escolar.`,
    instructor: "Profa. Dda. Helen Cristiane da Silva Theodoro e Profa. Dda. Paula Paulino Braz",
    targetAudience: ["Professores", "Profissionais da educação especial", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Planejamento Educacional Individualizado (PEI)",
          "Aula 2 – Elaboração do PEI",
          "Aula 3 – Avaliação e Intervenção",
          "Aula 4 – PEI para Transtorno do Espectro do Autismo",
          "Aula 5 – PEI para Deficiências (sensoriais, físicas e intelectuais)",
          "Aula 6 – PEI para Altas Habilidades/Superdotação",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 65,
    title: "O que é e como realizar uma Avaliação Psicoeducacional no Contexto Escolar? Orientações Pedagógicas",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/avaliacao-psicoeducacional.jpg",
    description: `Este curso aborda a avaliação das necessidades educacionais de estudantes público-alvo da Educação Especial (PAEE) na Educação Básica, oferecendo ferramentas para identificar e compreender dificuldades de aprendizagem, como deficiências intelectuais, físicas, TEA, altas habilidades/superdotação e transtornos específicos (dislexia, disortografia, disgrafia, discalculia e TDAH). O objetivo é capacitar profissionais para analisar a realidade escolar, identificar fatores que influenciam o aprender e propor encaminhamentos e intervenções pedagógicas adequadas, promovendo uma prática educativa mais eficaz e inclusiva.`,
    instructor: "Profa. Renata Aparecida Quani",
    targetAudience: ["Professores", "Profissionais da educação especial", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Processos avaliativos e aprendizagem",
          "Aula 2 – Aprendizagem: Dificuldade x Transtornos (estudo de todos os transtornos de aprendizagem)",
          "Aula 3 – Anamnese e E.O.C.A",
          "Aula 4 – Avaliação Cognitiva",
          "Aula 5 – Avaliação Psicomotora e Técnicas Projetivas",
          "Aula 6 – Avaliação Pedagógica: Leitura, Escrita e Matemática",
          "Aula 7 – Avaliações de Memória e Atenção",
          "Aula 8 – Devolutiva: construção de plano de intervenção",
          "Aula 9 – Estratégias de Intervenção e Estudo de Caso",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 66,
    title: "Acessibilidade curricular para estudantes com Autismo, como e quando fazer?",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/acessibilidade-curricular-autismo.jpg",
    description: `Este curso apresenta adaptações curriculares como estratégia de ensino para apoiar o currículo oficial, promovendo a inclusão de estudantes com deficiência, especialmente com Transtorno do Espectro Autista (TEA). O foco é capacitar os participantes a planejar e implementar adaptações curriculares, integrando práticas da educação especial e ensino regular no modelo de ensino colaborativo. Diferencial: o curso combina teoria e exemplos práticos em sala de aula, fundamentados cientificamente, oferecendo um aprendizado aplicável e exclusivo.`,
    instructor: "Profa. Dda. Talita Silva Perussi Vasconcellos",
    targetAudience: ["Professores", "Profissionais da educação especial", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Definição educacional do TEA",
          "Aula 2 – Contextualização histórica do ensino de pessoas com TEA",
          "Aula 3 – Tipos de adaptações curriculares",
          "Aula 4 – Considerações sobre adaptação e criação de materiais didáticos",
          "Aula 5 – Mostra de materiais didáticos adaptados",
          "Aula 6 – Manuseio e criação de atividades adaptadas",
          "Aula 7 – Debate de estudos de caso",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 67,
    title: "Como reduzir os problemas de comportamento em sala de aula usando a Análise do comportamento (ABA)?",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/aba-comportamento-sala-aula.jpg",
    description: `O curso aborda adaptações curriculares como estratégia para apoiar o currículo oficial e favorecer a inclusão de estudantes com Transtorno do Espectro Autista (TEA). O objetivo é capacitar os participantes a planejar e aplicar adaptações curriculares integrando educação especial e ensino regular, dentro do modelo de ensino colaborativo. O diferencial do curso é a combinação de teoria e prática, com exemplos reais em sala de aula e embasamento científico, proporcionando aos educadores ferramentas concretas para tornar a inclusão escolar mais efetiva.`,
    instructor: "Profa. Dra. Isadora Peresi Ferrari",
    targetAudience: ["Professores", "Profissionais da educação especial", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Entender o funcionamento do comportamento em sala de aula",
          "Aula 2 – Identificar as causas dos problemas de comportamento do aluno",
          "Aula 3 – Vínculo, estilo de docência e combinados importantes",
          "Aula 4 – Dicas práticas para lidar com comportamentos inadequados, autorregulação e discussão de casos",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 68,
    title: "Educação sexual e Educação Especial: interfaces sobre a sexualidade do público da educação especial",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/educacao-sexual-educacao-especial.jpg",
    description: `O curso aborda a sexualidade e educação sexual para o Público da Educação Especial (PEE), desmistificando tabus e preconceitos. Enfatiza que a sexualidade faz parte do desenvolvimento humano, influenciada por fatores sociais, culturais e pelas especificidades individuais. Busca promover compreensão e reflexão sobre desejo, afeto, autocompreensão e identidade das pessoas PEE. O objetivo é capacitar profissionais para práticas educativas inclusivas, fortalecendo a inclusão social e a vivência plena da sexualidade. Ao final, espera-se quebrar estigmas e promover respeito, autonomia e participação ativa desse público na sociedade.`,
    instructor: "Profa. Helen Cristiane da Silva Theodoro e Profa. Isabella Mota Colombo",
    targetAudience: ["Professores", "Profissionais da educação especial", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Sexualidade – Aspectos Iniciais",
          "Aula 2 – Sexualidade e PEE",
          "Aula 3 – Sexualidade, PEE e Identidades",
          "Aula 4 – Educação Sexual",
          "Aula 5 – Educação Sexual e Alunos PAEE",
          "Aula 6 – Como Educar Sexualmente Pessoas PAEE",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 69,
    title: "Instrumentos de Avaliação Neuropsicopedagógica e Psicopedagógica: avaliando funções executivas",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/avaliacao-neuropsicopedagogica.jpg",
    description: `O curso aborda as Funções Executivas e sua importância no desenvolvimento cognitivo e na aprendizagem. Com base teórica e científica, apresenta procedimentos de avaliação por testes qualitativos e quantitativos, aplicáveis em contextos educacionais. Propõe a compreensão do funcionamento executivo como ferramenta para identificar dificuldades e promover intervenções pedagógicas eficazes. O diferencial está na integração entre teoria e prática, com exemplos aplicados em sala de aula. O objetivo é capacitar profissionais da educação para uma atuação mais assertiva e inclusiva no apoio ao processo de aprendizagem.`,
    instructor: "Profa. Lucinda Marivete Evaristo Galvão",
    targetAudience: ["Professores", "Profissionais da educação especial", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Conceitos Básicos e Testes Psicométricos",
          "Aula 2 – Teste Infantil de Nomeação e TAC",
          "Aula 3 – Teste de Trilhas e Torre de Londres",
          "Aula 4 – Blocos Corsi, Dígitos e Teste Stroop",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 70,
    title: "ENRIQUECIMENTO curricular para estudantes com ALTAS HABILIDADES/SUPERDOTAÇÃO",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/enriquecimento-altas-habilidades.jpg",
    description: `O curso apresenta fundamentos teóricos e práticos sobre o enriquecimento curricular para estudantes com Altas Habilidades/Superdotação (AH/SD). Vai além da identificação, propondo estratégias educacionais complementares que favorecem o desenvolvimento pleno desses alunos em contextos escolares e não escolares. Destaca a importância da formação docente na identificação e no atendimento adequado desse público, que integra a Educação Especial. O objetivo é orientar práticas pedagógicas que estimulem o potencial dos educandos com AH/SD, promovendo a inclusão, o desafio cognitivo e o reconhecimento de seus talentos.`,
    instructor: "Profa. Dra. Eliane Morais de Jesus Mani",
    targetAudience: ["Professores", "Profissionais da educação especial", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Enriquecimento – da teoria à prática",
          "Aula 2 – Enriquecimento e desenvolvimento acadêmico – práticas de valorização cognitiva em ambientes escolares",
          "Aula 3 – Enriquecimento e desenvolvimento criativo-produtivo – práticas em ambientes não escolares",
          "Aula 4 – Enriquecimento, autoconceito positivo, habilidades emocionais e desenvolvimento socioafetivo",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 71,
    title:
      "Como aplicar os principais Instrumentos Avaliativos não restritos? Da aplicação à avaliação dos pré-requisitos para a alfabetização",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/instrumentos-avaliativos-alfabetizacao.jpg",
    description: `O curso apresenta fundamentos teóricos e práticos sobre a avaliação dos preditores da alfabetização na Educação Infantil e nos anos iniciais do Ensino Fundamental. Propõe reflexões sobre os pré-requisitos da aprendizagem, analisando aspectos motores, socioafetivos e cognitivos das crianças. Destaca a importância da avaliação individualizada e do uso adequado dos testes preditores da alfabetização. O objetivo é capacitar o profissional para conduzir, aplicar e interpretar essas avaliações, oferecendo devolutivas eficazes e planejando intervenções pedagógicas que favoreçam o desenvolvimento do educando.`,
    instructor: "Profa. Juliana Moraes Almeida",
    targetAudience: ["Professores", "Pedagogos", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Introdução ao tema e Anamnese",
          "Aula 2 – Provas Operatórias (Piaget)",
          "Aula 3 – Observação e avaliação com atividades, jogos terapêuticos e momentos lúdicos",
          "Aula 4 – Testes padronizados não restritos: ABC, IAR e POP-T",
          "Aula 5 – Relatório de conclusão, devolutiva e encaminhamentos",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 72,
    title: "Gestores(as) Escolares: da formação à capacitação da equipe",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/gestores-escolares.jpg",
    description: `O curso tem como objetivo fortalecer a educação por meio da formação continuada das equipes gestoras, promovendo uma gestão escolar voltada à melhoria da aprendizagem, à redução do abandono e da reprovação e à qualificação do gestor escolar. Fundamenta-se na perspectiva da gestão democrática e na efetivação do direito à educação básica com qualidade social.`,
    instructor: "Profa. Renata Aparecida Quani",
    targetAudience: ["Gestores escolares", "Coordenadores pedagógicos", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Dimensão Político-Institucional",
          "Aula 2 – Dimensão Administrativo-Financeira",
          "Aula 3 – Dimensão Pessoal e Relacional",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 73,
    title:
      "O que é e como implementar o Desenho Universal para a Aprendizagem (DUA) em sua prática pedagógica na educação infantil?",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/desenho-universal-aprendizagem.jpg",
    description: `O curso apresenta fundamentos teóricos e práticos sobre o Desenho Universal para a Aprendizagem (DUA), abordando estratégias para promover práticas pedagógicas inclusivas e garantir o direito à infância e à aprendizagem de todas as crianças. Propõe reflexões sobre a organização curricular inclusiva e o uso de materiais e métodos diversificados que atendam às diferentes necessidades educacionais. Traz ainda exemplos práticos e planos de aula baseados nos princípios do DUA, oferecendo aos educadores subsídios científicos e didáticos para repensar o ensino na Educação Infantil de forma acessível e significativa.`,
    instructor: "Profa. Dda. Talita Silva Perussi Vasconcellos e Profa. Me. Jéssica Brito",
    targetAudience: ["Professores", "Pedagogos", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Pressupostos da Educação Inclusiva: Educação Infantil",
          "Aula 2 – Princípios do Desenho Universal para a Aprendizagem (DUA)",
          "Aula 3 – Exemplos de boas práticas e sua fundamentação",
          "Aula 4 – Planejamento de ensino com base no DUA",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 74,
    title: "Atendimento Educacional Especializado (AEE): da compreensão ao atendimento em sala",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/atendimento-educacional-especializado.jpg",
    description: `O curso aborda o Atendimento Educacional Especializado (AEE) como prática essencial para a inclusão e garantia do direito à educação de qualidade. Apresenta os fundamentos legais e pedagógicos da Política Nacional de Educação Especial, destacando o papel do educador na promoção do acesso, permanência e sucesso escolar dos estudantes com deficiência, TEA e altas habilidades/superdotação. Com base teórica e prática, o curso orienta sobre como planejar e conduzir o AEE, considerando as especificidades de cada público e as áreas de desenvolvimento envolvidas.`,
    instructor: "Profa. Dda. Helen Cristiane da Silva Theodoro e Profa. Dda. Paula Paulino Braz",
    targetAudience: ["Professores", "Profissionais da educação especial", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Conhecendo o Atendimento Educacional Especializado (AEE)",
          "Aula 2 – A importância do registro",
          "Aula 3 – AEE para estudantes com deficiência intelectual e cognitiva",
          "Aula 4 – AEE para estudantes com deficiência sensorial",
          "Aula 5 – AEE para estudantes com transtorno do espectro do autismo",
          "Aula 6 – AEE para estudantes com altas habilidades/superdotação",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 75,
    title:
      "Manejos comportamentais para indivíduos com Transtorno Opositor Desafiador (TOD) no contexto escolar: uma perspectiva da análise do comportamento",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/manejos-comportamentais-tod.jpg",
    description: `O curso aborda o manejo de comportamentos-problema em sala de aula como prática essencial para promover um ambiente de aprendizagem inclusivo e eficiente. Apresenta os fundamentos teóricos e metodológicos da Análise do Comportamento Aplicada (ABA), destacando o papel do professor na gestão de comportamentos desafiadores de alunos com Transtorno Opositor Desafiador (TOD). Com base teórica e prática, o curso orienta sobre como identificar, analisar e intervir em comportamentos inadequados, considerando as necessidades individuais dos estudantes e promovendo um cotidiano escolar mais produtivo e harmonioso.`,
    instructor: "Profa. Maísa Novaes Portella Checchia",
    targetAudience: ["Professores", "Profissionais da educação especial", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Definição, diagnóstico, prevalência, etiologia e primeiros sinais do TOD",
          "Aula 2 – Noções de Behaviorismo Radical e Análise do Comportamento aplicadas à educação",
          "Aula 3 – Relação aluno-professor e formação docente",
          "Aula 4 – Identificação de problemas em sala, autocontrole, tomada de decisão e estratégias de autogerenciamento",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 76,
    title: "Neurociência e Aprendizagem: como nosso cérebro aprende?",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/neurociencia-aprendizagem.jpg",
    description: `O curso apresenta a Neurociência como ferramenta essencial para compreender como o cérebro aprende e como isso impacta a aprendizagem na escola. Aborda os fundamentos científicos que explicam o comportamento cerebral frente a novas informações, orientando os educadores sobre as melhores estratégias didáticas para otimizar a compreensão dos estudantes. Com base em teoria e prática, o curso ensina a identificar funções cognitivas prejudicadas e a construir Exercícios Terapêuticos que estimulem o desenvolvimento dessas funções, promovendo um ensino mais eficaz e personalizado.`,
    instructor: "Profa. Juliana Moraes Almeida",
    targetAudience: ["Professores", "Pedagogos", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Introdução à aprendizagem; lobos e hemisférios cerebrais; razão X emoção; contextualização e estimulação multissensorial",
          "Aula 2 – Tipos de neurônios; neurônios de associação e espelhos; sinapses e neurotransmissores; sono e consolidação de memória; percepção e entrada de informações",
          "Aula 3 – Tipos de atenção e memórias",
          "Aula 4 – Funções executivas",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 77,
    title: "TDAH e DISLEXIA: identificação, instrumentos, intervenção e flexibilização curricular na prática",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/tdah-dislexia.jpg",
    description: `O curso TDAH e Dislexia: Identificação e Encaminhamentos aborda as dificuldades de aprendizagem mais comuns na infância e adolescência, como Déficit de Atenção, Hiperatividade e Dislexia, que têm origem neurobiológica e impactam o desempenho escolar. Destinado a pais e profissionais da educação, o curso visa instrumentalizar quanto aos critérios de identificação desses distúrbios e oferecer estratégias de intervenção, incluindo adequação e flexibilização curricular. Combinando teoria e prática, o curso apresenta exemplos em sala de aula com embasamento científico, oferecendo um diferencial que une conhecimento acadêmico e aplicação real, preparando os profissionais para atuar de forma eficaz junto aos estudantes.`,
    instructor: "Profa. Renata Aparecida Quani",
    targetAudience: ["Professores", "Profissionais da educação especial", "Pais", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Introdução ao tema",
          "Aula 2 – Diferenças entre dificuldades de aprendizagem e distúrbios de aprendizagem",
          "Aula 3 – TDAH: definição, identificação e propostas de intervenção para família e escola",
          "Aula 4 – Dislexia: definição, identificação e propostas de intervenção para família e escola",
          "Aula 5 – Instrumentos para identificação da Dislexia e TDAH",
          "Aula 6 – Estudos de casos",
          "Aula 7 – Flexibilização curricular para alunos com TDAH e Dislexia",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 78,
    title: "Comunicação Alternativa e Aumentativa e as necessidades complexas de comunicação: práticas acessíveis",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/comunicacao-alternativa-aumentativa.jpg",
    description: `O curso de Comunicação Aumentativa e Alternativa (CAA) apresenta a Tecnologia Assistiva como recurso para desenvolver autonomia e habilidades comunicativas de estudantes com necessidades complexas de comunicação, facilitando o acesso ao currículo e a interação social. Enfatiza a avaliação das habilidades dos estudantes para planejar intervenções pedagógicas mais eficazes. Alinhado à Política Nacional de Educação Especial e à Lei Brasileira de Inclusão, oferece instrumentos para elaboração de recursos pedagógicos e de acessibilidade. O curso capacita os educadores a definir CAA e necessidades complexas de comunicação, utilizar a Matriz de Comunicação, planejar ações pedagógicas e produzir atividades adaptadas, promovendo uma educação inclusiva e de qualidade.`,
    instructor: "Profa. Me. Isis Oliveira de Sousa",
    targetAudience: ["Professores", "Profissionais da educação especial", "Interessados na temática"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Definição de Tecnologia Assistiva, CAA e necessidades complexas de comunicação; conceitos de comunicação, linguagem, fala, língua; direito à comunicação; recursos de alta e baixa tecnologia",
          "Aula 2 – Identificação de usuários da CAA; avaliação funcional; Matriz de Comunicação; razões para se comunicar; comportamentos comunicativos e níveis de comunicação",
          "Aula 3 – Aplicação da Matriz de Comunicação na prática; estratégias de mediação com Project Core; estudos de caso e proposta de trabalho final",
          "Aula 4 – Apresentação da proposta de trabalho final; feedbacks e esclarecimento de dúvidas",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 79,
    title:
      "Orientação, Mobilidade e Audiodescrição: práticas educacionais na inclusão da pessoa com deficiência visual",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/orientacao-mobilidade-audiodescricao.jpg",
    description: `O curso aborda a deficiência visual e suas diversas nuances, destacando a importância de oferecer um ensino acessível, equitativo e de qualidade. Considerando que a deficiência visual ainda é pouco compreendida, busca capacitar docentes e a comunidade escolar com informações essenciais para adaptar metodologias de ensino. O objetivo é fornecer conceitos básicos, essenciais e práticos que permitam atender de forma efetiva os estudantes que dependem de recursos além da visão, promovendo uma educação inclusiva e de excelência.`,
    instructor: "Profa. Dda. Helen Cristiane da Silva Theodoro e Profa. Camila Fernanda Ferreira da Silva",
    targetAudience: ["Professores", "Profissionais da educação especial", "Comunidade escolar"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Conceituando a deficiência visual",
          "Aula 2 – Avaliação funcional da visão",
          "Aula 3 – Orientação & Mobilidade (O&M) – Conceitos Básicos",
          "Aula 4 – Estratégias de O&M",
          "Aula 5 – Fundamentos da Audiodescrição",
          "Aula 6 – Acessibilidade e Audiodescrição",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 80,
    title:
      "Como trabalhar as Habilidades Sociais para crianças e adolescentes? Estratégias comportamentais da teoria à prática",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/habilidades-sociais-criancas-adolescentes.jpg",
    description: `O curso aborda o desenvolvimento de habilidades sociais essenciais, como autocontrole, expressividade emocional, solução de problemas interpessoais, empatia, assertividade e habilidades para fazer amizades, conforme Del Prette e Del Prette (2006). Com base na Análise do Comportamento Aplicada, oferece ferramentas práticas e científicas para que educadores e profissionais da saúde possam estimular e desenvolver competências sociais em alunos e pacientes, promovendo um processo de aprendizagem mais efetivo e integrado.`,
    instructor: "Profa. Me. Maísa Novaes Portella Checchia",
    targetAudience: ["Professores", "Profissionais da saúde", "Educadores"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Conceito e teoria das habilidades sociais; psicologia, desenvolvimento e aprendizagem",
          "Aula 2 – Questões conceituais; avaliação; propostas de intervenção e treinamento",
          "Aula 3 – Habilidades sociais nos contextos: amizade, relações interpessoais, civilidade, assertividade, convivência escolar e afetividade",
          "Aula 4 – Importância das habilidades sociais como manejo para crianças e adolescentes com problemas de comportamento, dificuldades de aprendizagem, vulnerabilidade social e relações parentais",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 81,
    title: "Como trabalhar o ensino via currículo natural na perspectiva da Análise do Comportamento (ABA)",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/ensino-curriculo-natural-aba.jpg",
    description: `O curso apresenta o Ensino Via Currículo Natural, também chamado de Ensino Naturalístico, dentro da Análise do Comportamento Aplicada (ABA). Essa abordagem busca criar oportunidades de ensino a partir das próprias atividades e interesses do aluno, garantindo a continuidade natural dessas experiências. O objetivo é capacitar os participantes a conceituar o Ensino Naturalístico, situá-lo dentro da ABA e conhecer as principais estratégias de ensino e registros de dados, promovendo intervenções mais eficazes e contextualizadas no processo de aprendizagem.`,
    instructor: "Profa. Esp. Isabella Nataly Roque",
    targetAudience: ["Professores", "Profissionais da educação especial", "Terapeutas ABA"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Ensino Naturalístico",
          "Aula 2 – Avaliação e Coleta de Dados",
          "Aula 3 – Ensino aplicado ao contexto de grupo",
          "Aula 4 – Outras estratégias de ensino e atividade prática",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 82,
    title: "A alfabetização e o letramento a partir dos relatos infantis: como fazer?",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/alfabetizacao-letramento-relatos-infantis.jpg",
    description: `O curso capacita profissionais da educação a usar relatos infantis na alfabetização e letramento, abordando gêneros textuais como diários e relatos de fim de semana. Com base na Teoria Histórico-Cultural de Vigotsky, oferece subsídios teórico-metodológicos para escolhas pedagógicas mais conscientes, promovendo uma prática reflexiva e humanizadora da aprendizagem.`,
    instructor: "Profa. Dra. Rowana Quadros Avante Simões Costa",
    targetAudience: ["Professores do ensino fundamental", "Alfabetizadores", "Coordenadores pedagógicos"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – O texto na sala de aula – princípios, gêneros textuais, tabela de classificação e relato de experiência vivida",
          "Aula 2 – 1º ano do Ensino Fundamental – diário individual: escolha do suporte, criação da necessidade de escrever, socialização e instrumentalização do texto",
          "Aula 3 – 2º ano do Ensino Fundamental – relato do fim de semana: escolha do suporte, criação da necessidade, socialização e instrumentalização do texto",
          "Aula 4 – Textos infantis – análise de diários individuais e relatos; intervenções pedagógicas; finalizações",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 83,
    title:
      "Ensino de Leitura e Escrita para pessoas com deficiência: estratégias e intervenções no contexto educacional",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/ensino-leitura-escrita-deficiencia.jpg",
    description: `O curso capacita professores a compreender os processos de aquisição da leitura e escrita de alunos público-alvo da Educação Especial, com base na perspectiva histórico-cultural e nas propostas de letramento. Oferece teoria, metodologias e estratégias práticas para tornar o ensino de leitura e escrita mais eficaz e adequado às necessidades desses estudantes.`,
    instructor: "Profa. Dra. Beatriz Aparecida dos Reis Turetta",
    targetAudience: ["Professores", "Profissionais da educação especial", "Alfabetizadores"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Escrita – usos, funções e relação com poder",
          "Aula 2 – Brincar e desenhar – papel na aquisição da leitura e escrita",
          "Aula 3 – Leitura e escrita – perspectiva histórico-cultural e letramento",
          "Aula 4 – Ensino de leitura e escrita para pessoas com deficiência – aspectos teóricos e práticos",
          "Aula 5 – Ensino para pessoas com deficiência visual/cegueira – práticas adaptadas",
          "Aula 6 – Ensino para pessoas surdas/deficiência auditiva – letramento em Língua Portuguesa como L2",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 84,
    title: "O uso da Inteligência Artificial na Educação: estratégias para aulas mais envolventes",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/inteligencia-artificial-educacao.jpg",
    description: `O curso Educação + Inteligência Artificial capacita professores e profissionais da educação a compreender e aplicar a IA no ambiente escolar, integrando teoria e prática. Aborda a personalização do aprendizado, inovação pedagógica e otimização de processos educacionais, utilizando ferramentas como ChatGPT, Bart e Bing. Também promove reflexão ética sobre o uso da IA. Ao final, os participantes estarão aptos a aplicar ferramentas práticas em sala de aula e a tomar decisões conscientes e responsáveis no uso da Inteligência Artificial na educação.`,
    instructor: "Prof. Me. Luciano Ferreira Rodrigues Filho",
    targetAudience: ["Professores", "Coordenadores pedagógicos", "Gestores educacionais"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Transformação digital na educação – conceito, importância, fatores e exemplos; atividades: painel, estudo de caso e workshop de ferramentas digitais",
          "Aula 2 – Mudanças no ensino-aprendizagem – evolução, novos paradigmas educacionais e impacto da tecnologia e IA; atividades: debate e planejamento de aula moderno",
          "Aula 3 – Adoção de tecnologias educacionais – mapeamento, estratégias, benefícios e desafios; atividades: roadmap e simulação prática",
          "Aula 4 – Inteligência Artificial e o professor – IA como ferramenta de apoio, colaboração e desenvolvimento profissional; atividades: workshop, discussão e plano de desenvolvimento",
          "Aula 5 – Personalização e inclusão via IA – personalização da aprendizagem, tecnologias assistivas e benefícios/desafios; atividades: apresentação de casos, workshop e discussão em grupo",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 85,
    title: "Deficiência, Dificuldades e Distúrbios de aprendizagem, o que é e como intervir em sala de aula?",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/deficiencia-dificuldades-disturbios-aprendizagem.jpg",
    description: `O curso capacita professores e profissionais da educação para atuar no Atendimento Educacional Especializado (AEE), combinando teoria e prática da educação inclusiva. O objetivo é proporcionar compreensão do processo de aprendizagem e possibilidades de intervenção adaptadas às necessidades de cada estudante. Com exemplos práticos em sala de aula e fundamento científico, o curso oferece um diferencial, preparando os profissionais para fornecer um atendimento de qualidade e efetivo aos estudantes com necessidades educacionais especiais.`,
    instructor: "Profa. Renata Aparecida Quani",
    targetAudience: ["Professores", "Profissionais do AEE", "Educadores"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Educação Especial – conceitos, definições e organização do atendimento inclusivo",
          "Aula 2 – Deficiências x Transtornos de aprendizagem – identificação, características e encaminhamentos metodológicos",
          "Aula 3 – Intervenções no AEE – estratégias de acordo com as necessidades educacionais dos estudantes",
          "Aula 4 – Adaptação e flexibilização curricular – conceitos, possibilidades e aplicação prática",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 86,
    title: "Alfabetização na Prática: Habilidades Preditoras essenciais para o Sucesso Escolar",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/alfabetizacao-pratica-habilidades-preditoras.jpg",
    description: `O curso aborda a aprendizagem da leitura e escrita como um processo que exige ensino sistematizado e estratégias baseadas em evidências científicas. Destina-se a professores e profissionais da educação, oferecendo ferramentas para estimular habilidades preditoras da alfabetização em contextos escolares e clínicos. O objetivo é capacitar os participantes a aplicar teoria na prática, garantindo um ensino eficaz e promovendo o direito à alfabetização de qualidade.`,
    instructor: "Professora Bruna P. Rossini Grillo e Professora Lucimara D. Lozano",
    targetAudience: ["Professores alfabetizadores", "Psicopedagogos", "Profissionais da educação"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Atenção, memória visual e auditiva, memória operacional fonológica, percepção auditiva e visual; conceitos e práticas sugeridas",
          "Aula 2 – Consciência fonológica, princípio alfabético, linguagem, motricidade fina, funções executivas, nomeação automática rápida, dominância lateral e esquema corporal; conceitos e práticas sugeridas",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 87,
    title:
      "Formação para Coordenadores Pedagógicos: gestão, ferramentas e competências para a gestão democrática escolar",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/formacao-coordenadores-pedagogicos.jpg",
    description: `O curso capacita coordenadores pedagógicos a atuar na gestão escolar de forma participativa e democrática, conforme a LDB 9394/96. Aborda funções de coordenação, planejamento e acompanhamento do processo didático-pedagógico, além de fortalecer a mediação entre escola, comunidade e família. O objetivo é desenvolver competências e oferecer ferramentas que contribuam para elevar os padrões de qualidade da educação.`,
    instructor: "Profa. Renata Aparecida Quani",
    targetAudience: ["Coordenadores pedagógicos", "Gestores escolares", "Diretores"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Estrutura organizacional da escola e atribuições do coordenador pedagógico",
          "Aula 2 – Instrumentos metodológicos e planejamento educacional",
          "Aula 3 – Teorias de ensino e dificuldades de aprendizagem",
          "Aula 4 – Liderança, condução de grupo e conhecimentos didáticos",
          "Aula 5 – Projeto Político Pedagógico e formação contínua de professores",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 88,
    title: "ALTAS HABILIDADES/SUPERDOTAÇÃO: da identificação às estratégias e atendimento no contexto escolar",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/altas-habilidades-superdotacao.jpg",
    description: `O curso aborda as Altas Habilidades/Superdotação, tema pouco explorado na formação docente, visando combater a invisibilidade desses estudantes nas salas de aula. Capacita a equipe escolar a identificar, atender e intervir nas necessidades educacionais desse público, promovendo o pleno desenvolvimento de seu potencial e talento. Combinando teoria e prática com embasamento científico, o curso apresenta processos de identificação, encaminhamentos e estratégias de intervenção, especialmente aplicáveis em sala de aula.`,
    instructor: "Profa. Dra. Eliane Morais de Jesus Mani",
    targetAudience: ["Professores", "Coordenadores pedagógicos", "Profissionais da educação especial"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Princípios inclusivos e aspectos teóricos das Altas Habilidades/Superdotação",
          "Aula 2 – Teoria das Múltiplas Inteligências, precocidade infantil, criatividade e liderança",
          "Aula 3 – Identificação das Altas Habilidades/Superdotação – instrumentos e estratégias de observação",
          "Aula 4 – Atendimento e intervenção educacional – aceleração e enriquecimento curricular",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 89,
    title: "Construindo um planejamento pedagógico a partir dos Campos de Experiências: BNCC e Educação Infantil",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/planejamento-pedagogico-bncc-educacao-infantil.jpg",
    description: `O curso aborda a implementação da BNCC na Educação Infantil, destacando a necessidade de reestruturar currículos e repensar práticas pedagógicas. Com base na teoria histórico-cultural, promove reflexão sobre a práxis e a resignificação do planejamento, considerando direitos de aprendizagem e Campos de Experiência. Os participantes aprenderão a planejar pedagogicamente de forma prática, alinhando suas ações aos princípios e orientações da BNCC para a escola da infância.`,
    instructor: "Profa. Me. Aline Maria de Faria Borborema Zan",
    targetAudience: ["Professores da educação infantil", "Coordenadores pedagógicos", "Gestores"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Marco legal, direitos de aprendizagem, campos de experiência, concepção histórico-cultural e atividade guia por faixa etária",
          "Aula 2 – Projeto na escola da infância e carta de intenções",
          "Aula 3 – Espaço propositor e continuidade do planejamento",
          "Aula 4 – Contexto investigativo e planejamento de contextos de aprendizagem",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 90,
    title:
      "Neurociência Aplicada à Sala de Aula: como o Cérebro Aprende e como melhorar e potencializar a Aprendizagem?",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/neurociencia-aplicada-sala-aula.jpg",
    description: `O curso apresenta a Neurociência aplicada à educação, mostrando como o cérebro aprende e influencia a compreensão do conteúdo em sala de aula. Destinado a educadores, oferece conhecimentos para identificar o funcionamento cerebral frente a novas informações e aplicar a melhor didática. Além disso, ensina a construir Exercícios Terapêuticos para estimular funções cognitivas prejudicadas, promovendo um aprendizado mais eficaz e individualizado.`,
    instructor: "Profa. Juliana Moraes Almeida",
    targetAudience: ["Professores", "Psicopedagogos", "Profissionais da educação"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Fatores que influenciam a aprendizagem, divisão do cérebro em lobos e hemisférios, razão/emoção, contextualização e estimulação multissensorial",
          "Aula 2 – Tipos de neurônios, neurônios de associação e espelhos, sinapses, neurotransmissores, sono, consolidação da memória e percepção",
          "Aula 3 – Tipos de atenção e memórias",
          "Aula 4 – Funções executivas",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 91,
    title:
      "Práticas Inclusivas para Deficiência Visual: Sistema de Escrita, Audiodescrição, Orientação e Mobilidade no contexto escolar",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/praticas-inclusivas-deficiencia-visual.jpg",
    description: `O curso aborda a deficiência visual, destacando a importância de oferecer um ensino acessível, equitativo e de qualidade. Capacita docentes e comunidade escolar a compreenderem as especificidades dessa condição e a adaptar metodologias de ensino para atender estudantes que dependem de recursos além da visão. O objetivo é fornecer conceitos básicos, essenciais e práticos para apoiar eficazmente o processo educacional desses alunos.`,
    instructor: "Profa. Camila Fernanda Ferreira da Silva",
    targetAudience: ["Professores", "Profissionais da educação especial", "Comunidade escolar"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Deficiência Visual",
          "Aula 2 – Avaliação Funcional da Visão",
          "Aula 3 – Orientação & Mobilidade (O&M)",
          "Aula 4 – Estratégias de O&M",
          "Aula 5 – Fundamentos da Audiodescrição",
          "Aula 6 – Acessibilidade e Audiodescrição",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 92,
    title:
      "Relatos Infantis na Alfabetização: aprenda a transformar as Histórias das Crianças em Aprendizagem Significativa",
    category: "Educação",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/relatos-infantis-alfabetizacao.jpg",
    description: `O curso capacita profissionais da educação a utilizar relatos infantis no processo de alfabetização e letramento, integrando teoria e prática. Aborda gêneros textuais como relatos de experiência, diários individuais e relatos de fim de semana, mostrando suas contribuições para a aprendizagem. Com base na Teoria Histórico-Cultural de Vigotsky, oferece subsídios teórico-metodológicos para que os educadores realizem escolhas pedagógicas mais conscientes e eficazes.`,
    instructor: "Profa. Dra. Rowana Quadros Avante Simões Costa",
    targetAudience: ["Professores alfabetizadores", "Coordenadores pedagógicos", "Educadores"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – O texto na sala de aula",
          "Aula 2 – 1º ano do Ensino Fundamental – diário individual",
          "Aula 3 – 2º ano do Ensino Fundamental – relato do fim de semana",
          "Aula 4 – Textos infantis – análise e projeções",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
  {
    id: 93,
    title:
      "Ensino Colaborativo e Acessibilidade curricular para Alunos com Autismo: teoria e prática na inclusão escolar",
    category: "Educação Especial",
    duration: "40-100 horas",
    modality: "Online",
    price: "A partir de R$ 95,00",
    totalPrice: "R$ 95,00 - R$ 185,00",
    image: "/images/courses/ensino-colaborativo-acessibilidade-autismo.jpg",
    description: `O curso aborda a acessibilidade curricular como estratégia para inclusão escolar de alunos com deficiência, integrando o trabalho de professores da educação especial e do ensino regular. Destaca o ensino colaborativo como ferramenta para potencializar a inclusão. O objetivo é capacitar os participantes a realizar adequações curriculares específicas para estudantes com Transtorno do Espectro Autista (TEA). Combinando teoria e prática em sala de aula com embasamento científico, o curso oferece um diferencial para aplicação efetiva das estratégias pedagógicas.`,
    instructor: "Profa. Dra. Talita Silva Perussi Vasconcellos",
    targetAudience: ["Professores", "Profissionais da educação especial", "Educadores"],
    curriculum: [
      {
        module: "Estrutura Curricular",
        topics: [
          "Aula 1 – Definição educacional do TEA",
          "Aula 2 – Ensino colaborativo",
          "Aula 3 – Histórico do ensino de pessoas com TEA",
          "Aula 4 – Tipos de acessibilidade curricular",
          "Aula 5 – Criação e adaptação de materiais didáticos",
          "Aula 6 – Exemplos de materiais adaptados",
          "Aula 7 – Manuseio e elaboração de atividades adaptadas",
          "Aula 8 – Debate e análise de estudos de caso",
        ],
      },
    ],
    hourOptions: [
      { hours: 40, price: 95, installments: "2x R$ 50,00" },
      { hours: 80, price: 155, installments: "2x R$ 82,00" },
      { hours: 100, price: 185, installments: "2x R$ 97,00" },
    ],
  },
]

export function getCourseById(id: number): Course | undefined {
  return courses.find((course) => course.id === id)
}

export function getCoursesByCategory(category: string): Course[] {
  return courses.filter((course) => course.category === category)
}

export function getAllCategories(): string[] {
  return Array.from(new Set(courses.map((course) => course.category)))
}
