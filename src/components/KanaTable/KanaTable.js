import { Card, Typography } from "@mui/joy";

const KanaTable = (props) => {
  const handleClickOnChar = (char) => {
    if (!char) return;
    props.handleChooseChar(char);
  };

  const rowsNumber = (list) => {
    let rows;
    list.forEach(() => (rows += " 1fr"));
    return rows;
  };

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          display: "grid",
          gridTemplateColumns: !props.gridTemplateColumns
            ? "0.8fr 1fr 1fr 1fr 1fr 1fr"
            : props.gridTemplateColumns,
          gridTemplateRows: rowsNumber(props.table),
          userSelect: "none",
        }}
      >
        {props.table.map((row, rowIndex) => {
          return row.map((element, elementIndex) => {
            return (
              <Typography
                onClick={() => handleClickOnChar(element.char)}
                level={!(rowIndex === 0 || elementIndex === 0) ? "h5" : "body1"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRight: "1px solid gray",
                  borderBottom: "1px solid gray",
                  boxSizing: "border-box",
                  ...(rowIndex === 0 && {
                    borderRight: "none",
                    color: "#333",
                  }),
                  ...(elementIndex === 0 && {
                    borderBottom: "none",
                    borderLeft: "none",
                    color: "#333",
                  }),
                  ...(!(rowIndex === 0 || elementIndex === 0) && {
                    "&:hover": {
                      backgroundColor: "#f1f1f1",
                      cursor: "pointer",
                    },
                  }),
                  ...(props.currentChar === element.char && {
                    backgroundColor: "#eee",
                  }),
                }}
              >
                {typeof element === "string" ? element : element.char}
              </Typography>
            );
          });
        })}
      </Card>
    </>
  );
};

export { KanaTable };
