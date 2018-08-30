const INITIAL_STATE = [
  {
    id: 1,
    isOpen: false,
    project: {
      name: "Adnews",
      description: "O Futuro é Hoje",
      longDescription:
        "Mais do que um portal, somos um hub para as mais quentes tendências do mercado de comunicação, englobando propaganda, tecnologia e mídia. Não nos prendemos a uma plataforma. Nosso core é poder de curadoria, credibilidade e dinamismo. Nossa missão é informar de maneira ágil e atrativa para fomentar inovação e negócios.",
      url: {
        pathname: "/projeto",
        asPath: "projeto/nerdloot.html"
      },
      logo: {
        url:
          "https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/adnews/alex-madeira-adnews-logo.png",
        name: "adNews Logo"
      },
      background: {
        url:
          "https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/adnews/alex-madeira-adnews-background.jpg",
        color: "#fff",
        name: "adNews background"
      },
      preview: {
        url:
          "https://s3-sa-east-1.amazonaws.com/alex-madeira/imagens/adnews/alex-madeira-adnews-preview.jpg",
        color: "#ff0",
        name: "adNews preview"
      }
    }
  }
];

export default function projects(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
