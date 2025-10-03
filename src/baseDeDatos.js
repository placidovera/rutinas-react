import Item from "./elementos/Item/Item"

export const misRutinas = [
  {
    id: 1,
    nombre: "Rutinas Principiantes",
    objetivo: "Hipertrofia",
    metodo: "Levantamiento",
    semana: [
      {
        dia: "Lunes",
        bloques: [
          {
            musculos: ["Pecho"],
            ejercicios: [
              { nombre: "Press en banco plano c/barra", series: "10-10-10-10", carga: "70%" },
              { nombre: "Press inclinado c/mancuernas", series: "10-10-10", carga: "70%" },
              { nombre: "Aperturas c/maquina(Peck Deck)", series: "12-10-8", carga: "70%" }
            ]
          },
          {
            musculos: ["Triceps"],
            ejercicios: [
              { nombre: "Press a la nuca c/mancuernas", series: "10-10-10-10", carga: "70%" },
              { nombre: "Patada de burro c/mancuernas", series: "10-10-10", carga: "70%" },
              { nombre: "Extenciones en polea con barra", series: "12-10-8", carga: "70%" }
            ]
          }
        ]
      },
      {
        dia: "Martes",
        bloques: [
          {
            musculos: ["Piernas", "Abdomen"],
            ejercicios: [
              { nombre: "Sentadillas", series: "10-10-10", carga: "60%" },
              { nombre: "Prensa 45°", series: "12-10-8", carga: "60%" },
              { nombre: "Elevaciones de piernas", series: "15-15-15", carga: "Peso corporal" }
            ]
          }
        ]
      },
      {
        dia: "Miércoles",
        bloques: [
          {
            musculos: ["Espalda", "Biceps"],
            ejercicios: [
              { nombre: "Dominadas", series: "10-10-8", carga: "Peso corporal" },
              { nombre: "Remo con barra", series: "10-10-10", carga: "60%" },
              { nombre: "Curl con mancuerna", series: "12-10-8", carga: "50%" }
            ]
          }
        ]
      },
      {
        dia: "Jueves",
        bloques: [
          {
            musculos: ["Hombros", "Abdomen"],
            ejercicios: [
              { nombre: "Press militar", series: "10-10-10", carga: "50%" },
              { nombre: "Elevaciones laterales", series: "12-12-10", carga: "40%" },
              { nombre: "Crunches", series: "15-15-15", carga: "Peso corporal" }
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

  {
    id: 2,
    nombre: "Rutinas Principiantes",
    objetivo: "Fuerza",
    metodo: "Levantamiento",
    semana: [
      {
        dia: "Lunes",
        bloques: [
          {
            musculos: ["Pecho"],
            ejercicios: [
              { nombre: "Press en banco plano c/barra", series: "5-5-5-5", carga: "80%" },
              { nombre: "Press inclinado c/mancuernas", series: "5-5-5", carga: "80%" }
            ]
          },
          {
            musculos: ["Triceps"],
            ejercicios: [
              { nombre: "Fondos en paralelas", series: "5-5-5", carga: "Peso corporal" },
              { nombre: "Extenciones en polea", series: "5-5-5", carga: "60%" }
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
              { nombre: "Sentadillas pesadas", series: "5-5-5", carga: "80%" },
              { nombre: "Peso muerto", series: "5-5-5", carga: "85%" }
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
              { nombre: "Dominadas lastradas", series: "5-5-5", carga: "Peso corporal + lastre" },
              { nombre: "Remo con barra", series: "5-5-5", carga: "75%" }
            ]
          },
          {
            musculos: ["Biceps"],
            ejercicios: [
              { nombre: "Curl con barra", series: "5-5-5", carga: "60%" }
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
              { nombre: "Press militar", series: "5-5-5", carga: "65%" },
              { nombre: "Elevaciones frontales", series: "6-6-6", carga: "50%" }
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
              { nombre: "Peso muerto", series: "3-3-3", carga: "85%" },
              { nombre: "Press banca", series: "3-3-3", carga: "85%" },
              { nombre: "Sentadillas", series: "3-3-3", carga: "85%" }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 3,
    nombre: "Rutinas Principiantes",
    objetivo: "Resistencia",
    metodo: "Aeróbico",
    semana: [
      {
        dia: "Lunes",
        bloques: [
          {
            musculos: ["Pecho", "Triceps"],
            ejercicios: [
              { nombre: "Push-ups", series: "20-20-15", carga: "Peso corporal" },
              { nombre: "Fondos en paralelas", series: "15-15-15", carga: "Peso corporal" }
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
              { nombre: "Sentadillas con salto", series: "20-20-20", carga: "Peso corporal" },
              { nombre: "Estocadas caminando", series: "20-20", carga: "Peso corporal" }
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
              { nombre: "Correr en cinta", series: "15 min", carga: "Ritmo medio" },
              { nombre: "Burpees", series: "15-15-15", carga: "Peso corporal" }
            ]
          }
        ]
      },
      {
        dia: "Jueves",
        bloques: [
          {
            musculos: ["Hombros", "Core"],
            ejercicios: [
              { nombre: "Plancha", series: "1 min - 1 min - 1 min", carga: "Peso corporal" },
              { nombre: "Elevaciones laterales rápidas", series: "20-20-20", carga: "Peso corporal" }
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
              { nombre: "Circuito HIIT (jumping jacks, burpees, mountain climbers)", series: "3 rondas", carga: "Intensidad alta" }
            ]
          }
        ]
      }
    ]
  },

  // ... resto igual que tenías
];

export const getMisRutinas = () => {
  return new Promise(resolve => {
    resolve(misRutinas)
  })
}

export const getRutinaElegida = (id) => {
  return new Promise(resolve => {
    const rutina = misRutinas.find(Item => Item.id == id)
    resolve(rutina)
  })
}
