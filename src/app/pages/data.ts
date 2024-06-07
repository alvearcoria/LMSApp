export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  lessons: Lesson[];
  progress: number; // Nueva propiedad para el progreso del curso
}

export interface Lesson {
  id: number;
  title: string;
  previewContent: string; // Contenido resumido para el acordeón
  fullContent: string; // Contenido completo para la lección
  videoUrl: string;
  completed: boolean; // Nueva propiedad para rastrear el estado de la lección

}

export const COURSES: Course[] = [
  {
    id: 1,
    title: 'Curso Angular',
    description: 'Aprende Angular desde cero',
    image: 'assets/images/angular-course.jpg',
    progress: 0,
    lessons: [
      {
        id: 1,
        title: 'Introducción a Angular',
        previewContent: 'Breve introducción a Angular...',
        fullContent: 'Texto de introducción a Angular...',
        videoUrl: 'https://www.youtube.com/embed/X0LVIKRwWBs?si=J_-HmHkCPY5JQX-U',
        completed: false

      },
      {
        id: 2,
        title: 'Componentes en Angular',
        previewContent: 'Breve introducción a Angular...',
        fullContent: 'Texto sobre componentes en Angular...',
        videoUrl: 'https://www.youtube.com/embed/49Td6B-_-Fg?si=Od4BwQCPSZ3AyA_c',
        completed: false

      }
    ]
  },

  {
    id: 2,
    title: 'Inteligencia Emocional',
    description: 'Descubre tu potencial y desarrolla tu talento con Creatividad, Comunicación y Liderazgo en este superpack de 12 cursos.',
    image: 'assets/images/inteligencia.png',
    progress: 0,
    lessons: [
      {
        id: 1,
        title: 'DOLOR Y SUFRIMIENTO',
        previewContent: 'Breve introducción Vivimos en sociedades de tantas distracciones y de la búsqueda del éxito y del goce que se niegan a reconocer <strong>el dolor o el sufrimiento emocional.' + '</strong> ' +
            'Más bien, existen personas que refuerzan comportamientos escapistas y espacio de desahogo en el alcohol...',
        fullContent: 'Vivimos en sociedades de tantas distracciones y de la búsqueda del éxito y del goce que se niegan a reconocer <strong>el dolor o el sufrimiento emocional.'+'</strong> '+
            'Más bien, existen personas que refuerzan comportamientos escapistas y espacio de desahogo en el alcohol, el juego, o la soledad enfermiza, para no'+
            'aceptar o reconocer las dificultades de la vida, o los pobres resultados existenciales que le origina su infelicidad, el sufrimiento o '+
            'dolor psico – emocional.',
        videoUrl: 'https://www.youtube.com/embed/5_zY2Zh9gcA?si=Wkt59SbCvduyIOpr',
        completed: false

      },
      {
        id: 2,
        title: 'ACEPTA QUE NO ACEPTAS',
        previewContent: 'Breve introducción aAceptar lo que nos llega es el primer paso para no huir de nuestra realidad y emprender cualquier cambio...',
        fullContent: 'Aceptar lo que nos llega es el primer paso para no huir de nuestra realidad y emprender cualquier cambio. En este sentido, muchas veces <strong>'+
        'para aceptar los acontecimientos más dolorosos necesitamos un tiempo, el que va desde que suceden hasta que logramos integrarlos. < /strong>'+
        'Por otro lado, esta aceptación nos ayudará a definir una nueva visión má real de nosotros mismos y de lo que nos va sucediendo.',
        videoUrl: 'https://www.youtube.com/embed/po12EH_V-cM?si=-a5VyrBgKhIfPxFo',
        completed: false

      },
      {
        id: 3,
        title: 'APEGO E IDENTIFICACIÓN',
        previewContent: 'Breve introducción a Cada persona nace con unas características únicas y diferentes: hay quienes tienen un sistema...',
        fullContent: 'Cada persona nace con unas características únicas y diferentes: hay quienes tienen un sistema nervioso más sensible y reactivo, hay quien trae una '+
            'personalidad con más tendencia a la frustración, los hay que se convertirán en el primer hijo o quienes vendrán después de una pérdida importante. '+
            'Todo ello nos condiona en nuestro desarrollo emocional.',
        videoUrl: 'https://www.youtube.com/embed/ggwbfeEXE4A?si=Y0pz_ZwUi3rZq2Hx',
        completed: false

      }
    ]
  },

  {
    id: 3,
    title: 'Curso sobre NOM-036-STPS-2018',
    description: 'Aprende todo sobre la Norma Oficial Mexicana NOM-036-STPS-2018 para el manejo de cargas.',
    image: 'assets/images/nom-036-course.webp',
    progress: 0,
    lessons: [
      {
        id: 1,
        title: 'Introducción a la NOM-036-STPS-2018',
        previewContent: 'Breve introducción a la Norma NOM-036-STPS-2018...',
        fullContent: 'La Norma Oficial Mexicana NOM-036-STPS-2018 establece las condiciones de seguridad y salud en el trabajo para el manejo manual de cargas. En esta lección, conocerás los fundamentos y objetivos principales de la norma.',
        videoUrl: 'https://www.youtube.com/embed/your_video_url_here',
        completed: false

      },
      {
        id: 2,
        title: 'Fundamentos y Alcance de la NOM-036-STPS-2018',
        previewContent: 'Conoce los fundamentos y el alcance de la NOM-036-STPS-2018...',
        fullContent: 'En esta lección se explican los fundamentos teóricos de la NOM-036-STPS-2018, su alcance y los sectores a los que aplica.',
        videoUrl: 'https://www.youtube.com/embed/your_video_url_here',
        completed: false

      },
      {
        id: 3,
        title: 'Evaluación de Riesgos Ergonómicos',
        previewContent: 'Aprende a evaluar los riesgos ergonómicos según la NOM-036-STPS-2018...',
        fullContent: 'Esta lección cubre los métodos y procedimientos para evaluar los riesgos ergonómicos en el manejo de cargas, conforme a la NOM-036-STPS-2018.',
        videoUrl: 'https://www.youtube.com/embed/your_video_url_here',
        completed: false

      },
      {
        id: 4,
        title: 'Medidas Preventivas y de Control',
        previewContent: 'Descubre las medidas preventivas y de control según la NOM-036-STPS-2018...',
        fullContent: 'En esta lección se presentan las medidas preventivas y de control que deben implementarse para minimizar los riesgos ergonómicos en el manejo de cargas.',
        videoUrl: 'https://www.youtube.com/embed/your_video_url_here',
        completed: false

      },
      {
        id: 5,
        title: 'Capacitación y Adiestramiento',
        previewContent: 'Importancia de la capacitación y adiestramiento en la NOM-036-STPS-2018...',
        fullContent: 'Esta lección aborda la importancia de la capacitación y el adiestramiento continuo para los trabajadores en el manejo seguro de cargas, de acuerdo con la NOM-036-STPS-2018.',
        videoUrl: 'https://www.youtube.com/embed/your_video_url_here',
        completed: false

      },
      {
        id: 6,
        title: 'Implementación de la NOM-036-STPS-2018 en la Empresa',
        previewContent: 'Pasos para la implementación efectiva de la NOM-036-STPS-2018...',
        fullContent: 'En esta lección se describen los pasos y consideraciones para implementar eficazmente la NOM-036-STPS-2018 en una empresa.',
        videoUrl: 'https://www.youtube.com/embed/your_video_url_here',
        completed: false

      },
      {
        id: 7,
        title: 'Auditoría y Evaluación de Cumplimiento',
        previewContent: 'Cómo realizar auditorías y evaluar el cumplimiento de la NOM-036-STPS-2018...',
        fullContent: 'Esta lección enseña cómo realizar auditorías y evaluaciones para verificar el cumplimiento de la NOM-036-STPS-2018 en el lugar de trabajo.',
        videoUrl: 'https://www.youtube.com/embed/your_video_url_here',
        completed: false

      }
    ]
  }

];
