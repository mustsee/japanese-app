import { hiragana, hiraganaAccents, hiraganaPause } from "data/hiragana";
import { katakana, katakanaAccents, katakanaPause } from "data/katakana";

const dataExerciseLengths = [
  { label: "10", value: 10 },
  { label: "20", value: 20 },
  { label: "30", value: 30 },
];

const dataExerciseTypes = [
  { label: "Recognize Kana", value: "recognizeKana" },
  { label: "Recognize Rōmaji", value: "recognizeRomaji" },
  { label: "Write Rōmaji", value: "writeRomaji" },
];

// It better should be an object with two keys : recognize and write ?
const dataExerciseOptions = [
  [
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
  [
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
];

export { dataExerciseLengths, dataExerciseTypes, dataExerciseOptions };
