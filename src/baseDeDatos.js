import Item from "./elementos/Item/Item"

export const misRutinas = [
  // PRINCIPIANTES - Full Body
  {
    id: 1,
    nombre: "Principiantes Full Body",
    objetivo: "Hipertrofia",
    metodo: "Levantamiento",
    idCategoria: "principiantes",
    semana: [
      {
        dia: "Lunes",
        bloques: [
          {
            musculos: ["Pecho", "Espalda", "Piernas", "Hombros", "Biceps", "Triceps"],
            ejercicios: [
              { nombre: "Press en banco plano c/barra", series: "10-10-10", carga: "60%" },
              { nombre: "Press inclinado c/mancuernas", series: "10-10-10", carga: "60%" },
              { nombre: "Sentadillas", series: "10-10-10", carga: "50%" },
              { nombre: "Remo c/maquina 45°", series: "10-10-10", carga: "50%" },
              { nombre: "Curl alternado c/mancuernas", series: "10-10-10", carga: "50%" },
              { nombre: "Press militar", series: "10-10-10", carga: "50%" }
            ]
          }
        ]
      },
      {
        dia: "Miércoles",
        bloques: [
          {
            musculos: ["Pecho", "Espalda", "Piernas", "Hombros", "Biceps", "Triceps"],
            ejercicios: [
              { nombre: "Press en banco plano c/barra", series: "10-10-10", carga: "60%" },
              { nombre: "Press inclinado c/mancuernas", series: "10-10-10", carga: "60%" },
              { nombre: "Sentadillas", series: "10-10-10", carga: "50%" },
              { nombre: "Remo c/maquina 45°", series: "10-10-10", carga: "50%" },
              { nombre: "Curl alternado c/mancuernas", series: "10-10-10", carga: "50%" },
              { nombre: "Press militar", series: "10-10-10", carga: "50%" }
            ]
          }
        ]
      },
      {
        dia: "Viernes",
        bloques: [
          {
            musculos: ["Full Body"],
            ejercicios: [
              { nombre: "Press en banco plano c/barra", series: "10-10-10", carga: "60%" },
              { nombre: "Press inclinado c/mancuernas", series: "10-10-10", carga: "60%" },
              { nombre: "Sentadillas", series: "10-10-10", carga: "50%" },
              { nombre: "Remo c/maquina 45°", series: "10-10-10", carga: "50%" },
              { nombre: "Curl alternado c/mancuernas", series: "10-10-10", carga: "50%" },
              { nombre: "Press militar", series: "10-10-10", carga: "50%" }
            ]
          }
        ]
      }
    ]
  },

  // PRINCIPIANTES - Aeróbico
  {
    id: 2,
    nombre: "Principiantes Aeróbico",
    objetivo: "Resistencia",
    metodo: "Aeróbico",
    idCategoria: "principiantes",
    semana: [
      {
        dia: "Lunes",
        bloques: [
          {
            musculos: ["Cardio"],
            ejercicios: [
              { nombre: "Correr en cinta", series: "15 min", carga: "Ritmo medio" },
              { nombre: "Jumping jacks", series: "3x30", carga: "Peso corporal" }
            ]
          }
        ]
      },
      {
        dia: "Miércoles",
        bloques: [
          {
            musculos: ["Cardio"],
            ejercicios: [
              { nombre: "Burpees", series: "3x15", carga: "Peso corporal" },
              { nombre: "Mountain climbers", series: "3x20", carga: "Peso corporal" }
            ]
          }
        ]
      },
      {
        dia: "Viernes",
        bloques: [
          {
            musculos: ["Cardio"],
            ejercicios: [
              { nombre: "Circuito HIIT (jumping jacks, burpees, mountain climbers)", series: "3 rondas", carga: "Intensidad media" }
            ]
          }
        ]
      }
    ]
  },

  // INTERMEDIOS - 
  {
    id: 3,
    nombre: "Rutinas Intermedios",
    objetivo: "Hipertrofia",
    metodo: "Levantamiento",
    idCategoria: "intermedios",
    semana: [
      {
        dia: "Lunes",
        bloques: [
          {
            musculos: ["Pecho"],
            ejercicios: [
              { nombre: "Press en banco plano c/barra", series: "10-10-10-10", carga: "85%" },
              { nombre: "Press inclinado c/mancuernas", series: "10-10-10-10", carga: "85%" },
              { nombre: "Aperturas c/maquina(Peck Deck)", series: "12-10-10-8", carga: "85%" }
            ]
          },
          {
            musculos: ["Triceps"],
            ejercicios: [
              { nombre: "Press a la nuca c/mancuernas", series: "10-10-10-10", carga: "75%" },
              { nombre: "Patada de burro c/mancuernas", series: "10-10-10-10", carga: "77%" },
              { nombre: "Extensiones en polea con barra", series: "12-10-10-8", carga: "85%" }
            ]
          }
        ]
      },
      {
        dia: "Martes",
        bloques: [
          {
            musculos: ["Abdomen"],
            ejercicios: [
              { nombre: "Crunch abdominal clásico", series: "50-50-50-50", carga: "Peso corporal" },
              { nombre: "Elevación de piernas c/colchoneta", series: "50-50-50-50", carga: "Peso corporal" },
              { nombre: "Plancha frontal", series: "2 minutos", carga: "Peso corporal" },
              { nombre: "Oblicuos y en banco 45°", series: "50-50-50-50", carga: "Peso corporal" }
            ]
          },
          {
            musculos: ["Piernas"],
            ejercicios: [
              { nombre: "Sentadilla Hack", series: "10-10-10-10", carga: "85%" },
              { nombre: "Prensa 45°", series: "12-10-10-8", carga: "85%" },
              { nombre: "Sentadillas", series: "10-10-10-10", carga: "75%" },
              { nombre: "Extensiones de piernas c/maquina", series: "12-10-10-8", carga: "85%" },
              { nombre: "Flexiones de piernas c/camilla", series: "12-10-10-8", carga: "85%" },
              { nombre: "Gemelos c/maquina", series: "15-15-15-15", carga: "85%" },
              { nombre: "Gemelos parado c/mancuernas", series: "15-15-15-15", carga: "85%" }
            ]
          }
        ]
      },
      {
        dia: "Miércoles",
        bloques: [
          {
            musculos: ["Espalda"],
            ejercicios: [
              { nombre: "Jalon al frente a/triangulo dorsalera", series: "10-10-10-10", carga: "85%" },
              { nombre: "Remo c/maquina a/abierto", series: "10-10-10-10", carga: "85%" },
              { nombre: "Remo c/maquina 45°", series: "10-10-10-10", carga: "85%" }
            ]
          },
          {
            musculos: ["Biceps"],
            ejercicios: [
              { nombre: "Curl alternado c/mancuernas", series: "10-10-10-10", carga: "85%" },
              { nombre: "Scott curl con barra", series: "10-10-10-10", carga: "85%" }
            ]
          }
        ]
      },
      {
        dia: "Jueves",
        bloques: [
          {
            musculos: ["Hombros"],
            ejercicios: [
              { nombre: "Press militar", series: "10-10-10-10", carga: "50%" },
              { nombre: "Elevaciones laterales", series: "12-12-10-10", carga: "70%" },
              { nombre: "Elevaciones posteriores c/mancuernas", series: "12-12-10-10", carga: "60%" }
            ]
          },
          {
            musculos: ["Abdomen"],
            ejercicios: [
              { nombre: "Crunch abdominal clásico", series: "50-50-50-50", carga: "Peso corporal" },
              { nombre: "Elevación de piernas c/colchoneta", series: "50-50-50-50", carga: "Peso corporal" },
              { nombre: "Plancha frontal", series: "2 minutos", carga: "Peso corporal" },
              { nombre: "Oblicuos y en banco 45°", series: "50-50-50-50", carga: "Peso corporal" }
            ]
          }
        ]
      },
      {
        dia: "Viernes",
        bloques: [
          {
            musculos: ["Elige tu músculo"],
            ejercicios: [
              { nombre: "Ejercicio opcional 1", series: "10-10-10", carga: "50%" },
              { nombre: "Ejercicio opcional 2", series: "12-10-8", carga: "50%" },
              { nombre: "Ejercicio opcional 3", series: "15-12-10", carga: "50%" }
            ]
          }
        ]
      }
    ]
  },
  // INTERMEDIOS - 
  {
    id: 4,
    nombre: "Rutinas Intermedios",
    objetivo: "Hipertrofia",
    metodo: "Super series",
    idCategoria: "intermedios",
    semana: [
      {
        dia: "Lunes",
        bloques: [
          {
            musculos: ["Pecho"],
            ejercicios: [
              { nombre: "Press en banco plano c/maquina(s/serie↓)", series: "10-10-10-10", carga: "75%" },
              { nombre: "Aperturas c/mancuernas", series: "-x-", carga: "-x-%" },
              { nombre: "Press en banco iclinado c/mancuernas(s/serie↓)", series: "10-10-10-10", carga: "75%" },
              { nombre: "Aperturas en banco iclinado c/mancuernas", series: "-x-", carga: "-x-%" },
              { nombre: "Flexiones de pecho", series: "-x-", carga: "Peso corporal" }
            ]
          },
          {
            musculos: ["Triceps"],
            ejercicios: [
              { nombre: "Extensiones en polea con barra a la nuca(s/serie↓)", series: "10-10-10-10", carga: "75%" },
              { nombre: "Extensiones con cuerda", series: "-x-", carga: "-x-%" },
              { nombre: "Press frances en banco plano c/barra(s/serie↓)", series: "10-10-10-10", carga: "75%" },
              { nombre: "Extensiones a la nuca con mancuernas", series: "-x-", carga: "-x-%" }
            ]
          }
        ]
      },
      {
        dia: "Martes",
        bloques: [
        {
        musculos: ["Abdomen"],
        ejercicios: [
          { nombre: "Crunch bicicleta", series: "30-30-30", carga: "Peso corporal" },
          { nombre: "Elevaciones de piernas colgado", series: "15-15-15", carga: "Peso corporal" },
          { nombre: "Plancha lateral", series: "1 min por lado", carga: "Peso corporal" },
          { nombre: "Mountain climbers", series: "3x30 seg", carga: "Peso corporal" }
        ]
      },
        {
  musculos: ["Piernas"],
  ejercicios: [
    { nombre: "Squat Calf Machine(s/serie↓)", series: "10-10-10-10", carga: "65%" },
    { nombre: "Banco para sentadillas",  series: "-x-", carga: "-x-%" },
    { nombre: "Peso muerto con barra(s/serie↓)", series: "10-10-10-10", carga: "65%" },
    { nombre: "Zancadas con mancuernas",  series: "-x-", carga: "-x-%" },
    { nombre: "Extensiones de piernas c/maquina", series: "15-15-15-15", carga: "65%" },
    { nombre: "Flexiones de piernas c/camilla", series: "15-15-15-15", carga: "65%" },
    { nombre: "Gemelos c/maquina", series: "15-15-15-15", carga: "85%" },
    { nombre: "Elevación de talones de pie c/mancuernas", series: "15-15-15-15", carga: "75%" }
    
  ]
}

        ]
      },
      {
        dia: "Miércoles",
        bloques: [
          {
            musculos: ["Espalda"],
            ejercicios: [
              { nombre: "Jalon al frente a/triangulo dorsalera", series: "10-10-10-10", carga: "85%" },
              { nombre: "Remo c/maquina a/abierto", series: "10-10-10-10", carga: "85%" },
              { nombre: "Remo c/maquina 45°", series: "10-10-10-10", carga: "85%" }
            ]
          },
          {
            musculos: ["Biceps"],
            ejercicios: [
              { nombre: "Curl alternado c/mancuernas", series: "10-10-10-10", carga: "85%" },
              { nombre: "Scott curl con barra", series: "10-10-10-10", carga: "85%" }
            ]
          }
        ]
      },
      {
        dia: "Jueves",
        bloques: [
          {
            musculos: ["Hombros"],
            ejercicios: [
              { nombre: "Press militar", series: "10-10-10-10", carga: "50%" },
              { nombre: "Elevaciones laterales", series: "12-12-10-10", carga: "70%" },
              { nombre: "Elevaciones posteriores c/mancuernas", series: "12-12-10-10", carga: "60%" }
            ]
          },
          {
            musculos: ["Abdomen"],
            ejercicios: [
              { nombre: "Crunch abdominal clásico", series: "50-50-50-50", carga: "Peso corporal" },
              { nombre: "Elevación de piernas c/colchoneta", series: "50-50-50-50", carga: "Peso corporal" },
              { nombre: "Plancha frontal", series: "2 minutos", carga: "Peso corporal" },
              { nombre: "Oblicuos y en banco 45°", series: "50-50-50-50", carga: "Peso corporal" }
            ]
          }
        ]
      },
      {
        dia: "Viernes",
        bloques: [
          {
            musculos: ["Elige tu músculo"],
            ejercicios: [
              { nombre: "Ejercicio opcional 1", series: "10-10-10", carga: "50%" },
              { nombre: "Ejercicio opcional 2", series: "12-10-8", carga: "50%" },
              { nombre: "Ejercicio opcional 3", series: "15-12-10", carga: "50%" }
            ]
          },
          {
            musculos: ["Abdomen"],
            ejercicios: [
              { nombre: "Crunch abdominal clásico", series: "50-50-50-50", carga: "Peso corporal" },
              { nombre: "Elevación de piernas c/colchoneta", series: "50-50-50-50", carga: "Peso corporal" },
              { nombre: "Plancha frontal", series: "2 minutos", carga: "Peso corporal" },
              { nombre: "Oblicuos y en banco 45°", series: "50-50-50-50", carga: "Peso corporal" }
            ]
          }
        ]
      }
    ]
  },
{
  id: 5,
  nombre: "Rutina Intermedios",
  objetivo: "Hipertrofia y fuerza",
  metodo: "Pirámide invertida",
  idCategoria: "intermedios",
  semana: [
    {
      dia: "Lunes",
      bloques: [
        {
          musculos: ["Pecho"],
          ejercicios: [
            { nombre: "Press declinado c/barra", series: "12-10-8-6", carga: "70-95%" },
            { nombre: "Press plano c/mancuernas", series: "12-10-8-6",carga: "70-95%" },
            { nombre: "Fondos en paralelas", series: "-x-", carga: "Peso corporal + opcional" }
          ]
        },
        {
          musculos: ["Triceps"],
          ejercicios: [
            { nombre: "Extensión c/cuerda", series: "12-10-8-8", carga: "95%" },
            { nombre: "Hiperextensión c/cuerda pasando el torso", series: "12-12-10-8", carga: "95%" },
            { nombre: "Press francés c/mancuernas", series: "12-10-10-8", carga: "95%" }
          ]
        }
      ]
    },
    {
      dia: "Martes",
      bloques: [
        {
          musculos: ["Piernas"],
          ejercicios: [
            { nombre: "Sentadilla libre profunda", series: "12-10-8-6", carga: "70-95%" },
            { nombre: "Peso muerto con barra", series: "12-10-8-6",carga: "70-95%" },
            { nombre: "Zancadas con mancuernas",  series: "12-10-8-6", carga: "-x-%" },
            { nombre: "Flexiones de piernas c/camilla", series: "10-8-6-4", carga: "70-95%" },
            { nombre: "Extensiones de piernas c/maquina", series: "12-10-8-6",carga: "70-95%" },
            { nombre: "Flexiones de piernas c/camilla", series: "12-10-8-6", carga: "70-95%" },
            { nombre: "Gemelos c/maquina", series: "15-15-15-15", carga: "85%" },
            { nombre: "Gemelos en prensa", series: "15-15-12-12", carga: "80%" } 
          ]
        },
        {
          musculos: ["Abdomen"],
          ejercicios: [
            { nombre: "Crunch con peso", series: "20-20-20", carga: "Disco 5kg" },
            { nombre: "Elevaciones de piernas colgado", series: "15-15-15", carga: "Peso corporal" },
            { nombre: "Plancha con peso", series: "3x1 min", carga: "Peso corporal o lastre" }
          ]
        }
      ]
    },
    {
      dia: "Miércoles",
      bloques: [
        {
          musculos: ["Espalda"],
          ejercicios: [
            { nombre: "Jalon al frente a/triangulo dorsalera", series: "10-10-10-10", carga: "75-85%"  },
            { nombre: "Remo bajo agarre estrecho c/barra", series: "12-10-8-6", carga: "75-85%" },
            { nombre: "Pull-over c/barra", series: "12-10-8-6",carga: "70-95%" }
          ]
        },
        {
          musculos: ["Biceps"],
          ejercicios: [
            { nombre: "Curl de bíceps en banco alternado c/mancuernas", series: "10-8-8-6",carga: "70-95%" },
            { nombre: "Curl en poleas altas", series: "10-10-8-8",carga: "70-95%" },
            { nombre: "Scott curl c/mancuernas", series: "10-10-8-8", carga: "85%" }
          ]
        }
      ]
    },
    {
      dia: "Jueves",
      bloques: [
        {
          musculos: ["Hombros"],
          ejercicios: [
            { nombre: "Press Arnold", series: "12-10-8-8", carga: "70%" },
            { nombre: "Elevaciones laterales con pausa", series: "15-12-10", carga: "65%" },
            { nombre: "Elevaciones frontales con disco", series: "12-10-10", carga: "65%" }
          ]
        },
        {
          musculos: ["Trapecio"],
          ejercicios: [
            { nombre: "Encogimientos con barra", series: "15-15-12-12", carga: "80%" },
            { nombre: "Remo al mentón c/barra", series: "12-10-8", carga: "75%" }
          ]
        }
      ]
    },
    {
      dia: "Viernes",
      bloques: [
        {
          musculos: ["Full Body (ligero)"],
          ejercicios: [
            { nombre: "Burpees", series: "4x15", carga: "Peso corporal" },
            { nombre: "Swing con kettlebell", series: "4x20", carga: "Moderado" },
            { nombre: "Dominadas neutras", series: "3x10", carga: "Peso corporal" },
            { nombre: "Fondos en paralelas", series: "3x12", carga: "Peso corporal" },
            { nombre: "Plancha + escaladores", series: "3x1 min", carga: "Peso corporal" }
          ]
        },
            {
            musculos: ["Abdomen"],
            ejercicios: [
              { nombre: "Crunch abdominal clásico", series: "50-50-50-50", carga: "Peso corporal" },
              { nombre: "Elevación de piernas c/colchoneta", series: "50-50-50-50", carga: "Peso corporal" },
              { nombre: "Plancha frontal", series: "2 minutos", carga: "Peso corporal" },
              { nombre: "Oblicuos y en banco 45°", series: "50-50-50-50", carga: "Peso corporal" }
            ]
          }
      ]
    }
  ]
},
  // AVANZADOS
{
  id: 6,
  nombre: "Rutina Avanzados - Superseries",
  objetivo: "Hipertrofia",
  metodo: "Super series",
  idCategoria: "avanzados",
  semana: [
    {
      dia: "Lunes",
      bloques: [
        {
          musculos: ["Pecho"],
          ejercicios: [
            { nombre: "Press en banco plano c/maquina(s/serie↓)", series: "10-10-10-10", carga: "75%" },
            { nombre: "Aperturas c/mancuernas", series: "-x-", carga: "-x-%" },
            { nombre: "Press en banco iclinado c/mancuernas(s/serie↓)", series: "10-10-10-10", carga: "75%" },
            { nombre: "Aperturas en banco iclinado c/mancuernas", series: "-x-", carga: "-x-%" },
            { nombre: "Flexiones de pecho", series: "-x-", carga: "Peso corporal" }
          ]
        },
        {
          musculos: ["Triceps"],
          ejercicios: [
            { nombre: "Extensiones en polea con barra a la nuca(s/serie↓)", series: "10-10-10-10", carga: "75%" },
            { nombre: "Extensiones con cuerda", series: "-x-", carga: "-x-%" },
            { nombre: "Press frances en banco plano c/barra(s/serie↓)", series: "10-10-10-10", carga: "75%" },
            { nombre: "Extensiones a la nuca con mancuernas", series: "-x-", carga: "-x-%" }
          ]
        }
      ]
    },
    {
      dia: "Martes",
      bloques: [
        {
          musculos: ["Abdomen"],
          ejercicios: [
            { nombre: "Crunch bicicleta", series: "30-30-30", carga: "Peso corporal" },
            { nombre: "Elevaciones de piernas colgado", series: "15-15-15", carga: "Peso corporal" },
            { nombre: "Plancha lateral", series: "1 min por lado", carga: "Peso corporal" },
            { nombre: "Mountain climbers", series: "3x30 seg", carga: "Peso corporal" }
          ]
        },
        {
          musculos: ["Piernas"],
          ejercicios: [
            { nombre: "Squat Calf Machine(s/serie↓)", series: "10-10-10-10", carga: "65%" },
            { nombre: "Banco para sentadillas",  series: "-x-", carga: "-x-%" },
            { nombre: "Peso muerto con barra(s/serie↓)", series: "10-10-10-10", carga: "65%" },
            { nombre: "Zancadas con mancuernas",  series: "-x-", carga: "-x-%" },
            { nombre: "Extensiones de piernas c/maquina", series: "15-15-15-15", carga: "65%" },
            { nombre: "Flexiones de piernas c/camilla", series: "15-15-15-15", carga: "65%" },
            { nombre: "Gemelos c/maquina", series: "15-15-15-15", carga: "85%" },
            { nombre: "Elevación de talones de pie c/mancuernas", series: "15-15-15-15", carga: "75%" }
          ]
        }
      ]
    },
    {
      dia: "Miércoles",
      bloques: [
        {
          musculos: ["Espalda"],
          ejercicios: [
            { nombre: "Jalon al frente a/triangulo dorsalera", series: "10-10-10-10", carga: "85%" },
            { nombre: "Remo c/maquina a/abierto", series: "10-10-10-10", carga: "85%" },
            { nombre: "Remo c/maquina 45°", series: "10-10-10-10", carga: "85%" }
          ]
        },
        {
          musculos: ["Biceps"],
          ejercicios: [
            { nombre: "Curl alternado c/mancuernas", series: "10-10-10-10", carga: "85%" },
            { nombre: "Scott curl con barra", series: "10-10-10-10", carga: "85%" }
          ]
        }
      ]
    },
    {
      dia: "Jueves",
      bloques: [
        {
          musculos: ["Hombros"],
          ejercicios: [
            { nombre: "Press militar", series: "10-10-10-10", carga: "50%" },
            { nombre: "Elevaciones laterales", series: "12-12-10-10", carga: "70%" },
            { nombre: "Elevaciones posteriores c/mancuernas", series: "12-12-10-10", carga: "60%" }
          ]
        },
        {
          musculos: ["Abdomen"],
          ejercicios: [
            { nombre: "Crunch abdominal clásico", series: "50-50-50-50", carga: "Peso corporal" },
            { nombre: "Elevación de piernas c/colchoneta", series: "50-50-50-50", carga: "Peso corporal" },
            { nombre: "Plancha frontal", series: "2 minutos", carga: "Peso corporal" },
            { nombre: "Oblicuos y en banco 45°", series: "50-50-50-50", carga: "Peso corporal" }
          ]
        }
      ]
    },
    {
      dia: "Viernes",
      bloques: [
        {
          musculos: ["Elige tu músculo"],
          ejercicios: [
            { nombre: "Ejercicio opcional 1", series: "10-10-10", carga: "50%" },
            { nombre: "Ejercicio opcional 2", series: "12-10-8", carga: "50%" },
            { nombre: "Ejercicio opcional 3", series: "15-12-10", carga: "50%" }
          ]
        },
        {
          musculos: ["Abdomen"],
          ejercicios: [
            { nombre: "Crunch abdominal clásico", series: "50-50-50-50", carga: "Peso corporal" },
            { nombre: "Elevación de piernas c/colchoneta", series: "50-50-50-50", carga: "Peso corporal" },
            { nombre: "Plancha frontal", series: "2 minutos", carga: "Peso corporal" },
            { nombre: "Oblicuos y en banco 45°", series: "50-50-50-50", carga: "Peso corporal" }
          ]
        }
      ]
    }
  ]
},

{
  id: 7,
  nombre: "Rutina Avanzados - Negativas Superseries",
  objetivo: "Fuerza y control excéntrico",
  metodo: "Tempo lento + superseries",
  idCategoria: "avanzados",
  semana: [
    {
      dia: "Lunes a Viernes",
      bloques: [
        {
          musculos: ["Todo el cuerpo"],
          ejercicios: [
            { nombre: "Press en banco plano c/maquina (negativa 4-0-1)", series: "3x10", carga: "70%" },
            { nombre: "Aperturas c/mancuernas (negativa)", series: "3x10", carga: "50%" },
            { nombre: "Press en banco inclinado c/mancuernas (negativa)", series: "3x10", carga: "70%" },
            { nombre: "Extensiones tríceps a la nuca (negativa)", series: "3x10", carga: "65%" },
            { nombre: "Curl alternado c/mancuernas (negativa)", series: "3x10", carga: "65%" },
            { nombre: "Remo c/maquina a/abierto (negativa)", series: "3x10", carga: "70%" },
            { nombre: "Sentadilla Hack (negativa)", series: "3x10", carga: "70%" }
          ]
        }
      ]
    }
  ]
},

{
  id: 8,
  nombre: "Rutina Avanzados - Superseries Intensivas",
  objetivo: "Densidad y fatiga máxima",
  metodo: "Superseries avanzadas",
  idCategoria: "avanzados",
  semana: [
    {
      dia: "Lunes a Viernes",
      bloques: [
        {
          musculos: ["Push/Pull y Core"],
          ejercicios: [
            { nombre: "Press militar + Dominadas", series: "4x12", carga: "65-70%" },
            { nombre: "Press plano + Remo c/maquina", series: "4x12", carga: "65-70%" },
            { nombre: "Fondos + Curl bíceps barra Z", series: "4x12", carga: "Peso corporal / 65%" },
            { nombre: "Extensiones tríceps + Curl martillo", series: "3x12", carga: "60-65%" },
            { nombre: "Plancha con peso + Ab wheel", series: "3x1 min / 3x15", carga: "Peso corporal / 10kg" }
          ]
        }
      ]
    }
  ]
}

];

export const getMisRutinas = () => {
  return new Promise(resolve => {
    resolve(misRutinas)
  })
};

export const getRutinaElegida = (id) => {
  return new Promise(resolve => {
    const rutina = misRutinas.find(Item => Item.id == id)
    resolve(rutina)
  })
};

export const getCategoria = (idCat)=>{
  return new Promise(resolve =>{
    const rutinaCategoria = misRutinas.filter(item => item.idCategoria === idCat)
    resolve(rutinaCategoria)
  })
};