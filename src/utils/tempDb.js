const tempDb = [
  {
    id: 1,
    titulo: "Cómo Iniciar una Rutina de Ejercicio y No Abandonar en el Intento",
    contenido:
      "Iniciar una rutina de ejercicio es fácil; lo difícil es mantenerla. Aquí te damos algunos consejos para que el fitness se convierta en parte de tu estilo de vida. Establece metas realistas, encuentra una actividad que disfrutes y crea un plan con un horario fijo. La constancia y la paciencia son esenciales para ver resultados, pero lo más importante es disfrutar del proceso.",
    autor: {
      _id: "60d0fe4f5311236168a109ca",
      username: "fit_guru",
    },
    fechaCreacion: new Date(),
    tipoAcceso: "free",
    categoria: "Fitness",
    etiquetas: ["ejercicio", "rutina", "consejos"],
    imagen: "/ndnpng.jpeg",
    vistas: 100,
    likes: 10,
  },
  {
    id: 2,
    titulo: "Los Beneficios de Entrenar con Pesas para Mujeres",
    contenido:
      "El entrenamiento con pesas no solo es para ganar músculo, sino también para mejorar la salud en general. Levantar pesas fortalece tus huesos, acelera el metabolismo y mejora la composición corporal, ayudando a esculpir y tonificar el cuerpo. Las mujeres pueden beneficiarse enormemente de incluir pesas en su rutina, y los beneficios van mucho más allá de la estética.",
    autor: {
      _id: "60d0fe4f5311236168a109cb",
      username: "health_enthusiast",
    },
    fechaCreacion: new Date(),
    tipoAcceso: "basic",
    categoria: "Salud",
    etiquetas: ["pesas", "mujeres", "salud"],
    imagen: "/eya.jpg",
    vistas: 150,
    likes: 20,
  },
  {
    id: 3,
    titulo: "Los 5 Mejores Alimentos para la Recuperación Post-Entrenamiento",
    contenido:
      "La nutrición es clave para maximizar los resultados de tus entrenamientos. Después de entrenar, tu cuerpo necesita nutrientes específicos para reparar y construir músculo. Alimentos como el pollo a la parrilla, batidos de proteína con plátano, huevos, avena y yogur griego son excelentes opciones para acelerar la recuperación y recargar tu energía.",
    autor: {
      _id: "60d0fe4f5311236168a109cc",
      username: "nutrition_expert",
    },
    fechaCreacion: new Date(),
    tipoAcceso: "premium",
    categoria: "Nutrición",
    etiquetas: ["alimentos", "recuperación", "nutrición"],
    imagen: "/rya.webp",
    vistas: 200,
    likes: 30,
  },
  {
    id: 4,
    titulo: "Yoga para Principiantes: Guía Completa para Empezar",
    contenido:
      "El yoga es una práctica milenaria que combina posturas físicas, respiración y meditación. Es ideal para reducir el estrés, mejorar la flexibilidad y fortalecer el cuerpo. Si eres principiante, empieza con posturas básicas y ve avanzando a tu propio ritmo. Recuerda que la consistencia es clave para ver los beneficios a largo plazo.",
    autor: {
      _id: "60d0fe4f5311236168a109cd",
      username: "yoga_beginner",
    },
    fechaCreacion: new Date(),
    tipoAcceso: "free",
    categoria: "Bienestar",
    etiquetas: ["yoga", "principiantes", "bienestar"],
    imagen: "/ypp.webp",
    vistas: 120,
    likes: 15,
  },
  {
    id: 5,
    titulo: "Cómo Mantener una Dieta Balanceada sin Sacrificios",
    contenido:
      "Mantener una dieta balanceada no significa renunciar a tus comidas favoritas. La clave está en la moderación y en hacer elecciones inteligentes. Incorpora una variedad de alimentos ricos en nutrientes, como frutas, verduras, proteínas magras y granos enteros. Permítete disfrutar de tus antojos ocasionales sin culpa, y recuerda que la hidratación también es fundamental.",
    autor: {
      _id: "60d0fe4f5311236168a109ce",
      username: "diet_guru",
    },
    fechaCreacion: new Date(),
    tipoAcceso: "basic",
    categoria: "Nutrición",
    etiquetas: ["dieta", "balanceada", "nutrición"],
    imagen: "/bal.jpg",
    vistas: 180,
    likes: 25,
  },
  {
    id: 6,
    titulo: "Meditación para Reducir el Estrés: Técnicas y Beneficios",
    contenido:
      "La meditación es una práctica efectiva para reducir el estrés y mejorar la salud mental. Existen diversas técnicas, como la meditación guiada, la atención plena y la respiración profunda. Practicar regularmente puede ayudarte a encontrar calma y claridad en tu vida diaria.",
    autor: {
      _id: "60d0fe4f5311236168a109cf",
      username: "meditation_master",
    },
    fechaCreacion: new Date(),
    tipoAcceso: "free",
    categoria: "Bienestar",
    etiquetas: ["meditación", "estrés", "salud mental"],
    imagen: "/pem.jpeg",
    vistas: 130,
    likes: 18,
  },
  {
    id: 7,
    titulo: "Entrenamiento HIIT: Quema Calorías en Menos Tiempo",
    contenido:
      "El entrenamiento de intervalos de alta intensidad (HIIT) es una forma eficiente de quemar calorías y mejorar la resistencia cardiovascular. Alterna entre ráfagas cortas de ejercicio intenso y períodos de descanso. Es ideal para quienes tienen poco tiempo pero quieren maximizar sus resultados.",
    autor: {
      _id: "60d0fe4f5311236168a109d0",
      username: "hiit_fanatic",
    },
    fechaCreacion: new Date(),
    tipoAcceso: "basic",
    categoria: "Fitness",
    etiquetas: ["HIIT", "calorías", "resistencia"],
    imagen: "/npbg.jpg",
    vistas: 170,
    likes: 22,
  },
  {
    id: 8,
    titulo: "Beneficios del Cardio en Ayunas: ¿Mito o Realidad?",
    contenido:
      "El cardio en ayunas es una práctica popular entre quienes buscan perder grasa rápidamente. La teoría es que al ejercitarse sin haber comido, el cuerpo utiliza las reservas de grasa como energía. Sin embargo, es importante considerar los pros y contras antes de incorporarlo a tu rutina.",
    autor: {
      _id: "60d0fe4f5311236168a109d1",
      username: "cardio_expert",
    },
    fechaCreacion: new Date(),
    tipoAcceso: "premium",
    categoria: "Salud",
    etiquetas: ["cardio", "ayunas", "pérdida de grasa"],
    imagen: "/rdgc.webp",
    vistas: 190,
    likes: 28,
  },
  {
    id: 9,
    titulo: "Cómo Dormir Mejor: Consejos para un Sueño Reparador",
    contenido:
      "Un buen descanso es esencial para la salud y el bienestar. Para mejorar la calidad de tu sueño, establece una rutina regular, crea un ambiente propicio para dormir y evita el uso de dispositivos electrónicos antes de acostarte. La calidad del sueño impacta directamente en tu energía y estado de ánimo.",
    autor: {
      _id: "60d0fe4f5311236168a109d2",
      username: "sleep_guru",
    },
    fechaCreacion: new Date(),
    tipoAcceso: "free",
    categoria: "Bienestar",
    etiquetas: ["sueño", "descanso", "bienestar"],
    imagen: "/dye.jpg",
    vistas: 140,
    likes: 19,
  },
  {
    id: 10,
    titulo: "Alimentos que Mejoran tu Sistema Inmunológico",
    contenido:
      "Una dieta rica en nutrientes puede fortalecer tu sistema inmunológico. Alimentos como cítricos, ajo, jengibre, espinacas y yogur son conocidos por sus propiedades que ayudan a combatir enfermedades. Incorporar estos alimentos en tu dieta diaria puede mejorar tu salud general.",
    autor: {
      _id: "60d0fe4f5311236168a109d3",
      username: "immune_booster",
    },
    fechaCreacion: new Date(),
    tipoAcceso: "basic",
    categoria: "Nutrición",
    etiquetas: ["inmunológico", "alimentos", "salud"],
    imagen: "/bal.jpg",
    vistas: 160,
    likes: 24,
  },
];

export default tempDb;
