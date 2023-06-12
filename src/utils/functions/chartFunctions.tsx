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
      return "rgba(250, 28, 36, 0.2)";
      break;
    case "VOX":
      return "rgba(120, 200, 50, 0.2)";
      break;
    case "SUMAR":
      return "rgba(150, 20, 90, 0.2)";
      break;
    case "ERC":
      return "rgba(250, 180, 25, 0.2)";
      break;
    case "JUNTS":
        return "rgba(2, 194, 179, 0.2)";
        break;
      case "PNV":
      return "rgba(66, 103, 54, 0.2)";
      break;
    case "BILDU":
        return "rgba(180, 200, 10, 0.2)";
        break;
    case "OTROS":
        return "rgba(200, 80, 0, 0.2)";
        break;
    default:
          return "rgba(236, 236, 236, 0.2)";
          break;
  }
};
