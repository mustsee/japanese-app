import { Card, Typography } from "@mui/joy";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Card variant="outlined" sx={{ textAlign: "center", userSelect: "none" }}>
        <Typography>{props.title}</Typography>
      </Card>
    </Link>
  );
}

export { Header };
