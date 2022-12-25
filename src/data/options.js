import { hiragana, hiraganaAccents, hiraganaPause } from "data/hiragana";
import { katakana, katakanaAccents, katakanaPause } from "data/katakana";

const dataExerciseLengths = [
  { label: "10", value: 10 },
  { label: "20", value: 20 },
  { label: "30", value: 30 },
];

const defaultExerciseLength = dataExerciseLengths[0];

const dataExerciseTypes = [
  {
    label: "Recognize Kana",
    value: {
      action: "recognize",
      display: "recognize",
      question: "char",
      answer: "romaji",
    },
  },
  {
    label: "Recognize Rōmaji",
    value: {
      action: "recognize",
      display: "recognize",
      question: "romaji",
      answer: "char",
    },
  },
  {
    label: "Write Kana",
    value: {
      action: "write",
      display: "puzzle",
      question: "romaji",
      answer: "char",
    },
  },
  {
    label: "Write Rōmaji",
    value: {
      action: "write",
      display: "write",
      question: "char",
      answer: "romaji",
    },
  },
];

const defaultExerciseType = dataExerciseTypes[2];

const dataExerciseOptions = {
  recognize: [
    {
      label: "Hiragana",
      key: "recognizeOptions-Hiragana",
      children: [
        {
          label: "46 basics",
          key: "recognizeOptions-Hiragana-46_basics",
          data: hiragana,
          isChecked: true,
        },
        {
          label: "Dakuten and Handakuten",
          key: "recognizeOptions-Hiragana-Dakuten_and_Handakuten",
          data: hiraganaAccents,
          isChecked: true,
        },
      ],
    },
    {
      label: "Katakana",
      key: "recognizeOptions-Katakana",
      children: [
        {
          label: "46 basics",
          key: "recognizeOptions-Katakana-46_basics",
          data: katakana,
          isChecked: true,
        },
        {
          label: "Dakuten and Handakuten",
          key: "recognizeOptions-Katakana-Dakuten_and_Handakuten",
          data: katakanaAccents,
          isChecked: true,
        },
      ],
    },
  ],
  write: [
    {
      label: "Hiragana",
      key: "writeOptions-Hiragana",
      children: [
        {
          label: "Pause",
          key: "writeOptions-Hiragana-Pause",
          data: hiraganaPause,
          isChecked: true,
        },
      ],
    },
    {
      label: "Katakana",
      key: "writeOptions-Katakana",
      children: [
        {
          label: "Pause",
          key: "writeOptions-Katakana-Pause",
          data: katakanaPause,
          isChecked: true,
        },
      ],
    },
  ],
};

const defaultElements = dataExerciseOptions[defaultExerciseType.value.action]
  .map((element) => {
    return element.children
      .filter((childrenElement) => {
        if (childrenElement.isChecked) {
          return childrenElement;
        }
      })
      .map((element) => element.data);
  })
  .flat(2);

export {
  dataExerciseLengths,
  dataExerciseTypes,
  dataExerciseOptions,
  defaultExerciseLength,
  defaultExerciseType,
  defaultElements,
};
