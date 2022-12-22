import { KeyboardArrowRight } from "@mui/icons-material";
import Home from "@mui/icons-material/Home";
import { Breadcrumbs, Card, Typography } from "@mui/joy";
import IconButton from "@mui/joy/IconButton";
import { Link } from "react-router-dom";

function Header(props) {
  const { title } = props;

  return (
    <HeaderWrapper>
      {!title ? (
        <Typography sx={{ py: 1.5, textAlign: "center" }}>
          Welcome to Learn Japanese !
        </Typography>
      ) : (
        <Link to="/" style={{ textDecoration: "none" }}>
          <Breadcrumbs size="sm" separator={<KeyboardArrowRight />}>
            <IconButton size="sm" variant="outlined" color="neutral">
              <Home />
            </IconButton>
            <Typography fontSize="inherit">{title}</Typography>
          </Breadcrumbs>
        </Link>
      )}
    </HeaderWrapper>
  );
}

const HeaderWrapper = (props) => {
  return (
    <Card
      variant="outlined"
      sx={{
        p: 0.5,
        userSelect: "none",
        borderRadius: 0,
      }}
    >
      {props.children}
    </Card>
  );
};

export { Header };
