import Box from "@mui/joy/Box";

function Root(props) {
  return (
    <Box
      {...props}
      sx={[
        {
          display: "grid",
          gridTemplateColumns: {
            xs: "minmax(0px, 1fr) minmax(332px, 332px) minmax(0px, 1fr) ",
            // sm: "minmax(64px, 200px) minmax(450px, 1fr)",
            // md: "minmax(200px, 1fr) minmax(332px, 332px) minmax(200px, 1fr) ",
          },
          // gridTemplateRows: "64px 1fr",
          gridTemplateRows: {
            xs: "1fr",
            // xs: "200px 1fr 200px",
            // md: "1fr",
          },
          minHeight: "100vh",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function Main(props) {
  return (
    <Box
      component="main"
      className="Main"
      {...props}
      sx={[{ p: 2 }, ...(Array.isArray(props.sx) ? props.sx : [props.sx])]}
    />
  );
}

export default { Root, Main };
