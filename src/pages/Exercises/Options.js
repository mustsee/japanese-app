import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Checkbox from "@mui/joy/Checkbox";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { useEffect, useState } from "react";
import {
  dataExerciseLengths,
  dataExerciseTypes,
  dataExerciseOptions,
  defaultExerciseLength,
  defaultExerciseType,
  defaultElements,
} from "data/options";

const Options = (props) => {
  const { generateExercise, clearState } = props;

  const [exerciseLength, setExerciseLength] = useState(
    defaultExerciseLength.value
  );

  const [exerciseType, setExerciseType] = useState(defaultExerciseType.value);

  const [exerciseOptions, setExerciseOptions] = useState(
    dataExerciseOptions[defaultExerciseType.value.action]
  );

  const [elements, setElements] = useState(defaultElements);

  const handleSetExerciseType = (value) => {
    setExerciseType(value);
    setExerciseOptions(dataExerciseOptions[value.action]);
  };

  const handleUpdateOptions = (value) => {
    setExerciseOptions(value);
  };

  const handleUpdateElements = (value) => {
    setElements(value);
  };

  const handleGenerateExercise = () => {
    generateExercise(exerciseType, exerciseLength, elements);
    clearState();
  };

  useEffect(() => {
    generateExercise(exerciseType, exerciseLength, elements);
  }, []);

  return (
    <Card
      variant="outlined"
      sx={{ display: "flex", justifyDirection: "column", gap: "1em" }}
    >
      <Button
        onClick={handleGenerateExercise}
        variant="outlined"
        disabled={!elements.length}
      >
        Start
      </Button>
      <Select
        onChange={(e, newValue) => setExerciseLength(newValue)}
        value={exerciseLength}
        size="sm"
      >
        {dataExerciseLengths.map(({ label, value }) => (
          <Option value={value} key={label}>
            {label}
          </Option>
        ))}
      </Select>
      <Select
        onChange={(e, newValue) => handleSetExerciseType(newValue)}
        value={exerciseType}
        size="sm"
      >
        {dataExerciseTypes.map(({ label, value }) => (
          <Option value={value} key={label}>
            {label}
          </Option>
        ))}
      </Select>
      <ExerciseOptions
        options={exerciseOptions}
        handleUpdateElements={handleUpdateElements}
        handleUpdateOptions={handleUpdateOptions}
      />
    </Card>
  );
};

const ExerciseOptions = (props) => {
  const { options, handleUpdateElements, handleUpdateOptions } = props;

  const getElements = () => {
    return options
      .map((option, optionIndex) => {
        return option.children
          .filter((childrenOption, childrenOptionIndex) => {
            if (options[optionIndex].children[childrenOptionIndex].isChecked)
              return childrenOption;
          })
          .map((element) => element.data);
      })
      .flat(2);
  };

  useEffect(() => {
    handleUpdateElements(getElements());
  }, [options]);

  const handleSetChecked = (index, newValue) => {
    const newArrayOptions = options.map((option, optionIndex) => {
      if (optionIndex === index) {
        const newChildrenValues = option.children.map((childrenElement) => {
          return { ...childrenElement, isChecked: newValue };
        });
        return { ...option, children: newChildrenValues };
      }
      return option;
    });
    handleUpdateOptions(newArrayOptions);
  };

  const handleSetChildrenChecked = (index, childrenIndex, newValue) => {
    const newArrayOptions = options.map((option, optionIndex) => {
      if (optionIndex === index) {
        const newChildrenValues = option.children.map(
          (childrenElement, childrenElementIndex) => {
            if (childrenElementIndex === childrenIndex) {
              return { ...childrenElement, isChecked: newValue };
            }
            return childrenElement;
          }
        );
        return { ...option, children: newChildrenValues };
      }
      return option;
    });
    handleUpdateOptions(newArrayOptions);
  };

  return (
    <>
      {options.map((option, index) => {
        return (
          <Box key={option.key}>
            <Checkbox
              size="sm"
              variant="soft"
              label={option.label}
              sx={{ display: "flex" }}
              checked={
                option.children.filter((element) => element.isChecked)
                  .length === option.children.length
              }
              indeterminate={
                !!(
                  option.children.filter((element) => element.isChecked)
                    .length &&
                  option.children.filter((element) => !element.isChecked).length
                )
              }
              onChange={(event) =>
                handleSetChecked(index, event.target.checked)
              }
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                ml: 3,
                mt: 1,
                gap: 1,
              }}
            >
              {option.children.map((child, childrenIndex) => {
                return (
                  <Checkbox
                    key={child.key}
                    size="sm"
                    variant="soft"
                    label={child.label}
                    checked={child.isChecked}
                    onChange={(event) =>
                      handleSetChildrenChecked(
                        index,
                        childrenIndex,
                        event.target.checked
                      )
                    }
                  />
                );
              })}
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export { Options };
