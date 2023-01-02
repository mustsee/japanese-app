const kanji = {
  人: {
    romaji: {
      FR: [
        {
          translation: "une personne",
        },
      ],
      EN: [
        {
          translation: "person",
        },
      ],
    },
    kunyomi: ["ひと"],
    onyomi: [],
    src: "https://hochanh.github.io/rtk/人/index.html",
  },
  男: {
    romaji: {
      FR: [
        {
          translation: "l'homme",
        },
      ],
      EN: [
        {
          translation: "man",
        },
      ],
    },
    kunyomi: ["おとこ"],
    onyomi: [],
    src: "https://hochanh.github.io/rtk/男/index.html",
  },
  女: {
    romaji: {
      FR: [
        {
          translation: "la femme",
        },
      ],
      EN: [
        {
          translation: "woman",
        },
      ],
    },
    kunyomi: ["おんな"],
    onyomi: [],
    src: "https://hochanh.github.io/rtk/女/index.html",
  },
  子: {
    romaji: {
      FR: [
        {
          translation: "l'enfant",
        },
      ],
      EN: [
        {
          translation: "child",
        },
      ],
    },
    kunyomi: ["こ"],
    onyomi: [],
    src: "https://hochanh.github.io/rtk/子/index.html",
  },
  日: {
    romaji: {
      FR: [
        {
          translation: "le soleil",
        },
      ],
      EN: [
        {
          translation: "sun",
        },
        {
          translation: "day",
        },
      ],
    },
    kunyomi: ["ひ"],
    onyomi: [],
    src: "https://hochanh.github.io/rtk/日/index.html",
  },
  月: {
    romaji: {
      FR: [
        {
          translation: "la lune",
        },
      ],
      EN: [
        {
          translation: "moon",
        },
        {
          translation: "month",
        },
      ],
    },
    kunyomi: ["つき"],
    onyomi: [],
    src: "https://hochanh.github.io/rtk/月/index.html",
  },
  時: {
    romaji: {
      FR: [
        {
          translation: "le temps",
          comment: "Il s'agit du temps qui passe, pas du temps qu'il fait.",
        },
      ],
      EN: [
        {
          translation: "time",
        },
      ],
    },
    kunyomi: ["とき"],
    onyomi: [],
    src: "https://hochanh.github.io/rtk/時/index.html",
  },
  水: {
    romaji: {
      FR: [
        {
          translation: "eau",
        },
      ],
      EN: [
        {
          translation: "water",
        },
      ],
    },
    kunyomi: ["みず"],
    onyomi: [],
    src: "https://hochanh.github.io/rtk/水/index.html",
  },
  火: {
    romaji: {
      FR: [
        {
          translation: "le feux",
        },
      ],
      EN: [
        {
          translation: "fire",
        },
      ],
    },
    kunyomi: ["ひ"],
    onyomi: [],
    src: "https://hochanh.github.io/rtk/火/index.html",
  },
  土: {
    romaji: {
      FR: [
        {
          translation: "la terre",
          comment:
            "La terre que l'on peut prendre dans ses mains, la matière noire.",
        },
      ],
      EN: [
        {
          translation: "soil",
        },
      ],
    },
    kunyomi: ["つち"],
    onyomi: [],
    src: "https://hochanh.github.io/rtk/土/index.html",
  },
};

/* let updatedKanji = {};
const addComments = (kanji) => {
  for (const [key, value] of Object.entries(kanji)) {
    const FRValues = value.romaji.FR;
    const ENValues = value.romaji.EN;

    updatedKanji[key] = {
      ...value,
      romaji: {
        FR: FRValues.map((value) => {
          if (typeof value === "string") {
            return {
              translation: value,
            };
          }
          return value;
        }),
        EN: ENValues.map((value) => {
          if (typeof value === "string") {
            return {
              translation: value,
            };
          }
          return value;
        }),
      },
    };
  }
};

addComments(kanji);
console.log(updatedKanji); */
