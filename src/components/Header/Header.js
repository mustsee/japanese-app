import { Card, Typography } from "@mui/joy";

function Header(props) {
  return (
    <Card variant="outlined" sx={{ textAlign: "center", userSelect: "none" }}>
      <Typography>{props.title}</Typography>
    </Card>
  );
}

export { Header };
