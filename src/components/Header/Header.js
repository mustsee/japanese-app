import { Breadcrumbs, Card, Typography } from "@mui/joy";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
import IconButton from "@mui/joy/IconButton";
import Home from "@mui/icons-material/Home";

function Header(props) {
  const { list } = props;

  return (
    <HeaderWrapper>
      {!list.length ? (
        <Typography sx={{ py: 1.5, textAlign: "center" }}>
          Welcome to Learn Japanese !
        </Typography>
      ) : (
        <Breadcrumbs size="sm" separator={<KeyboardArrowRight />}>
          <IconButton
            size="sm"
            variant="outlined"
            color="neutral"
            component="a"
            href="/"
          >
            <Home />
          </IconButton>
          {list.map((item, index) => (
            <Link to={item.href} key={index} style={{ textDecoration: "none" }}>
              <Typography fontSize="inherit">{item.name}</Typography>
            </Link>
          ))}
        </Breadcrumbs>
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
