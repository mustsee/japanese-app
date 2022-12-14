import Box from "@mui/joy/Box";

function Root(props) {
  return (
    <Box
      {...props}
      sx={[
        {
          minHeight: "100vh",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function MainSection(props) {
  return (
    <Box
      component="main"
      className="Main"
      {...props}
      sx={[
        { width: "332px", margin: "0 auto", px: 2, pb: 2 },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

export { Root, MainSection };
