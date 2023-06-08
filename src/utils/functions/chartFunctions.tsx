export const getPartidos = (votos: any) => {
  const _partidos: any = [];

  votos.forEach((voto: any) => {
    _partidos.includes(voto?.attributes?.voto.toUpperCase())
      ? null
      : _partidos.push(voto?.attributes?.voto.toUpperCase());
  });

  return _partidos;
};

export const getVotos = (votos: any) => {
  const _partidos: any = getPartidos(votos);
  const votosPorPartido: any = [];

  _partidos.forEach((partido: any) => {
    let _votos = 0;
    votos.forEach((voto: any) => {
      voto?.attributes?.voto.toUpperCase() === partido ? _votos++ : null;
    });
    votosPorPartido.push(_votos);
  });

  return votosPorPartido;
};

export const getBackgroundColor = (partido: any) => {
  switch (partido) {
    case "PP":
      return "rgba(54, 162, 235, 0.2)";
      break;
    case "PSOE":
      return "rgba(255, 99, 132, 0.2)";
      break;
    case "PODEMOS":
      return "rgba(153, 102, 255, 0.2)";
      break;
    case "SUMAR":
      return "rgba(255, 159, 64, 0.2)";
      break;
  }
};
