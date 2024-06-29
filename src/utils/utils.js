// nombrar dependiendo de las canciones
export const countSongs = (songs) => {
  // si es 1 nombrar en singular si no en plural
  if (songs == 1) {
    return "cancion";
  } else {
    return "canciones";
  }
};

// calcular tiempo de duracion del album
function calculateAlbumDuration(songDurations) {
  // Sumar las duraciones
  let totalDurationMs = songDurations.reduce(
    (total, duration) => total + duration,
    0
  );

  // Convertir milisegundos a minutos y segundos
  let totalSeconds = Math.floor(totalDurationMs / 1000);
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  return { minutes, seconds };
}
