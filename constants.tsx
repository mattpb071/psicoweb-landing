import { TestCategory } from './types';

export const TEST_DATA: TestCategory[] = [
  {
    id: 'comportamiento',
    title: 'Pruebas de Comportamiento',
    description: 'Evaluación de estilos de pensamiento, valores, liderazgo y adaptación.',
    tests: [
      {
        name: 'CLEAVER (DISC)',
        evaluates: 'Liderazgo, Influencia, Constancia, Apego a normas.',
        author: 'J.P. Cleaver',
        levels: 'Directivos, Gerenciales, Administrativos, Superiores, Ejecutivos, Jefaturas, Ventas, Atención a Clientes, Técnicos, Operativos.',
        time: '10 min'
      },
      {
        name: 'ESTILO DE PENSAMIENTO',
        evaluates: 'Forma Pensante',
        author: 'Spranger',
        levels: 'Directivos, Gerenciales, Administrativos, Superiores, Ejecutivos, Jefaturas, Técnicos.',
        time: '15 min'
      },
      {
        name: 'VALORES Y VALORES C',
        evaluates: 'Intereses y Valores',
        author: 'Marston',
        levels: 'Directivos, Gerenciales, Administrativos, Superiores, Ejecutivos, Jefaturas, Técnicos.',
        time: '15 min'
      },
      {
        name: 'KOSTICK',
        subtitle: '(Inventario de Percepción y Preferencias)',
        evaluates: 'Liderazgo, Naturaleza social, Adaptación al trabajo, Naturaleza Emocional, Subordinación.',
        author: 'Max Martin Kostick',
        levels: 'Directivos, Gerenciales, Administrativos, Superiores, Ejecutivos, Jefaturas.',
        time: '20 min'
      },
      {
        name: 'ZAVIC',
        subtitle: '(Valores e Intereses)',
        evaluates: 'Intereses y Valores',
        author: 'Zavic',
        levels: 'Administrativos, Superiores, Ejecutivos, Jefaturas, Ventas, Atención a Clientes, Técnicos, Operativos.',
        time: '15 min'
      },
      {
        name: 'LIFO',
        subtitle: '(Fortalezas de vida)',
        evaluates: 'Soporte, Control, Análisis, Adaptabilidad y negociación.',
        author: 'Allan Katcher y Stuart Atkins',
        levels: 'Directivos, Gerenciales, Administrativos, Superiores, Ejecutivos, Jefaturas',
        time: '10 min'
      },
      {
        name: 'ValPer o Allport',
        subtitle: '(Valores de la Persona)',
        evaluates: 'Valores e intereses personales.',
        author: 'Gordon W. Allport/ Philip E. Vernon/ Gardner Lindzey',
        levels: 'Administrativos, Superiores, Ejecutivos, Jefaturas, Ventas, Atención a Clientes.',
        time: '30 min'
      },
      {
        name: 'META',
        evaluates: 'Priorización, Metas, Anticipación, Autoestima, Motivación, Control de Impulsividad, Autocontrol, Flexibilidad, Resiliencia, Constancia, Organización y Formación de la Virtud.',
        author: 'Dr. Alberto Arvizu',
        levels: 'Directivos, Gerenciales Proyectos, Administrativos, Ejecutivos, Jefaturas',
        time: '20 min'
      },
      {
        name: 'MOSS',
        evaluates: 'Habilidad en supervisión, Capacidad de decisión, Evaluación de problemas interpersonales, Sentido común y tacto.',
        author: 'Rudolf y Verenice Moss',
        levels: 'Directivos, Gerenciales.',
        time: '20 min'
      }
    ]
  },
  {
    id: 'personalidad',
    title: 'Pruebas de Personalidad',
    description: 'Análisis profundo de rasgos de personalidad y potencial de ventas.',
    tests: [
      {
        name: 'PGV o IPV',
        subtitle: '(Personalidad General para la Venta)',
        evaluates: 'Comprensión, Dominancia, Adaptabilidad, Seguridad, Control de sí mismo, Actividad, Combatividad, Sociabilidad, Tolerancia a la frustración.',
        author: 'Centro de Psicología Francés',
        levels: 'Areas Comerciales',
        time: '40 min'
      },
      {
        name: 'BFQ',
        subtitle: '(Cuestionario BIG FIVE)',
        evaluates: 'Dinamismo/Dominancia, Cooperación/Cordialidad, Perseverancia, Escrupulosidad, Control de Emociones, Apertura a la Cultura/Experiencia.',
        author: 'Gian Vittorio Caprara',
        levels: 'Administrativos, Ejecutivos, Atención a Clientes.',
        time: '25 min'
      },
      {
        name: 'PIP-G (Gordon)',
        subtitle: 'Perfil e Inventario de la Personalidad',
        evaluates: 'Ascendencia, Autoestima, Responsabilidad, Cautela, Estabilidad, Originalidad Emocional, Relaciones Personales, Sociabilidad, Vigor.',
        author: 'Leonard V. Gordon',
        levels: 'Gerenciales, Administrativos, Superiores, Ejecutivos, Jefaturas.',
        time: '25 min'
      },
      {
        name: '16 FP',
        subtitle: '(Factores de la Personalidad)',
        evaluates: 'Calidez, Suspicacia, Inteligencia, Imaginación, Fortaleza Yoica, Astucia, Dominio, Propensión a la Culpa, Impulsividad, Rebeldía, Conformidad, Audacia.',
        author: 'Raymond B. Cattel',
        levels: 'Gerenciales, Administrativos, Superiores, Ejecutivos, Jefaturas.',
        time: '30 min'
      },
      {
        name: 'CPI',
        subtitle: '(Inventario Psicológico de California)',
        evaluates: 'Nivel de liderazgo, Responsabilidad, Dominancia, Sociabilidad, Tolerancia, Empatía, Honestidad.',
        author: 'H.G. Gough',
        levels: 'Gerenciales, Superiores, Directivos',
        time: '25-45 min'
      },
      {
        name: 'Lüscher',
        subtitle: '(Cartas de colores)',
        evaluates: 'Ansiedad, Angustia, Equilibrio Emocional, Focos de Tensión.',
        author: 'Max Lüscher',
        levels: 'Operativos, Administrativos, Técnicos.',
        time: '10 min'
      }
    ]
  },
  {
    id: 'clinica',
    title: 'Prueba Psicológica (Clínica)',
    description: 'Orientación clínica e inventarios multifásicos.',
    tests: [
      {
        name: 'IMP / MMPI-2',
        subtitle: '(Inventario multifasico de personalidad)',
        evaluates: 'Depresión, Ansiedad, Histeria, Mentira, Problemas familiares, Problemas con el alcohol y las drogas.',
        author: 'Hathaway / Mckinley',
        levels: 'Directivos, Gerenciales, Administrativos, Superiores, Ejecutivos, Jefaturas, Ventas, Atención a Clientes, Técnicos, Operativos.',
        time: '60 min'
      },
      {
        name: 'IMP-R',
        subtitle: '(MMPI-2 Edición Revisada)',
        evaluates: 'Depresión, Ansiedad, Histeria, Mentira, Agresividad, Problemas familiares, Alcohol/drogas, Conducta antisocial.',
        author: 'J. N. Butcher et al.',
        levels: 'Directivos, Gerenciales, Administrativos, Superiores, Ejecutivos, Jefaturas, Ventas, Atención a Clientes, Técnicos, Operativos.',
        time: '60 min'
      },
      {
        name: 'IMP-RF',
        subtitle: '(MMPI-2 Forma Reestructurada)',
        evaluates: 'Mismas áreas del funcionamiento psicológico de MMPI-2, características de personalidad, tendencias conductuales.',
        author: 'Yossef S. Ben-Porath / Auke Tellegen',
        levels: 'Directivos, Gerenciales, Administrativos, Superiores, Ejecutivos, Jefaturas, Ventas, Atención a Clientes, Técnicos, Operativos.',
        time: '40 min'
      }
    ]
  },
  {
    id: 'inteligencia',
    title: 'Pruebas de Inteligencia',
    description: 'Medición de coeficiente intelectual, razonamiento y capacidades cognitivas.',
    tests: [
      {
        name: 'Terman',
        evaluates: 'Concentración, Análisis, Planeación.',
        author: 'L.M. Terman/ M.A. Merrill',
        levels: 'Directivos, Gerenciales, Administrativos, Superiores, Ejecutivos, Jefaturas.',
        time: '40 min'
      },
      {
        name: 'IE',
        subtitle: '(Inteligencia Emocional)',
        evaluates: 'Concentración, Análisis, Planeación (Contexto Emocional).',
        author: 'Robert Cooper',
        levels: 'Directivos, Gerenciales, Administrativos, Superiores, Ejecutivos, Jefaturas.',
        time: '50 min'
      },
      {
        name: 'RAVEN',
        evaluates: 'Observación, Comparación, Pensamiento racional.',
        author: 'J.C Raven',
        levels: 'Ventas, Atención a Clientes, Técnicos, Operativos.',
        time: '35 min'
      },
      {
        name: 'Dominós',
        evaluates: 'Reconocimiento de semejanzas y diferencias, Noción de número, Rapidez visual, Memoria visual.',
        author: 'Edgar Anstey',
        levels: 'Directivos, Gerenciales, Administrativos, Superiores, Ejecutivos, Jefaturas, Ventas, Atención a Clientes, Técnicos.',
        time: '35 min'
      },
      {
        name: 'Wonderlic',
        evaluates: 'Razonamiento lógico, numérico y verbal.',
        author: 'Charles F. Wonderlic',
        levels: 'Técnicos y Operativos.',
        time: '12 min'
      },
      {
        name: 'COIR / Barsit',
        subtitle: '(Coeficiente Intelectual por Rango)',
        evaluates: 'Conocimientos Generales, Comprensión de Vocabulario, Razonamiento Verbal, Lógico y Numérico.',
        author: 'Del Olmo, Francisco',
        levels: 'Operativos',
        time: '10 min'
      },
      {
        name: 'Beta III',
        evaluates: 'Procesamiento de información visual, velocidad, razonamiento espacial y no verbal.',
        author: 'C.E Kellogg, N.W Morton',
        levels: 'Operativos.',
        time: '30 min'
      },
      {
        name: 'Beta II-R',
        evaluates: 'Procesamiento de información visual, velocidad, razonamiento espacial y no verbal.',
        author: 'C.E Kellogg, N.W Morton',
        levels: 'Operativos.',
        time: '30 min'
      }
    ]
  },
  {
    id: 'competencias',
    title: 'Pruebas por Competencias',
    description: 'Metodología basada en la gestión por competencias de Martha Alles.',
    tests: [
      {
        name: 'NOC',
        subtitle: '(Nivel Operativo por Competencias)',
        evaluates: 'Valores, Inteligencia Emocional, Competencias Transversales y Específicas.',
        author: 'Psic. Jacqueline Ileana Alvarenga',
        levels: 'Perfiles Operativos.',
        time: '15 min'
      },
      {
        name: 'NIC',
        subtitle: '(Nivel Intermedio por Competencias)',
        evaluates: 'Valores, Inteligencia Emocional, Competencias Transversales y Específicas.',
        author: 'Psic. Jacqueline Ileana Alvarenga',
        levels: 'Perfiles Mandos Medios.',
        time: '15 min'
      },
      {
        name: 'NEC',
        subtitle: '(Nivel Ejecutivo por Competencias)',
        evaluates: 'Valores, Inteligencia Emocional, Competencias Transversales y Específicas.',
        author: 'Psic. Jacqueline Ileana Alvarenga',
        levels: 'Perfiles Ejecutivos.',
        time: '15 min'
      },
      {
        name: 'PVC',
        subtitle: '(Perfil del Vendedor por Competencias)',
        evaluates: 'Valores, Inteligencia Emocional, Competencias Transversales y Específicas.',
        author: 'Psic. Jacqueline Ileana Alvarenga',
        levels: 'Perfiles Comerciales.',
        time: '15 min'
      }
    ]
  }
];

export const CLIENT_LIST = [
  "Poder Judicial", "Sutel", "Aresep", "BDS", "Coca-Cola Industrias", "Bimbo", "Global Services",
  "Irex", "Inder", "INS", "Dekra", "Aeris", "Carrofácil", "Grupo Colono", "Coopeagropal",
  "Coopebanpo", "BETO te presta", "CAT", "Bosch", "Tio Pelon", "Agroalfa", "Novacomp",
  "GTI", "Job Solutions", "Outsource", "Grupo V", "Ortopeck", "Edificar", "Intercontinental", "JW Marriott"
];