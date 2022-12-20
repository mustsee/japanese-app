import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";

const Score = (props) => {
  const { fail, success, total } = props;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        width: "70%",
        margin: "0 auto",
      }}
    >
      <Chip variant="soft" color="danger">
        {fail}
      </Chip>
      <Chip variant="soft" color="success">
        {success}
      </Chip>
      <Chip variant="soft" color="info">
        {fail + success} / {total}
      </Chip>
    </Box>
  );
};

export { Score };