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
          <Breadcrumbs
            size="sm"
            separator={<KeyboardArrowRight color="neutral" />}
          >
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
      sx={{
        p: 0.5,
        userSelect: "none",
        borderRadius: 0,
        mb: "2em",
      }}
    >
      {props.children}
    </Card>
  );
};

export { Header };
