import { Button } from "@mui/joy";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useEffect, useState } from "react";
import { useAddToHomescreenPrompt } from "./useAddToHomescreenPrompt";

const PromoteInstall = () => {
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  const [isVisible, setVisibleState] = useState(false);

  const hide = () => setVisibleState(false);

  const handleInstall = () => {
    promptToInstall();
    hide();
  };

  useEffect(() => {
    if (prompt) {
      setVisibleState(true);
    }
  }, [prompt]);

  if (!isVisible) {
    return null;
  }

  return (
    <Sheet variant="outlined" sx={{ p: 4 }}>
      <Typography level="body1" sx={{ mb: 2, textAlign: "center" }}>
        Add to homescreen and use our web app offline.
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button color="neutral" fullWidth variant="plain" onClick={hide}>
          Not now
        </Button>
        <Button
          color="neutral"
          fullWidth
          variant="outlined"
          onClick={handleInstall}
        >
          Install
        </Button>
      </Box>
    </Sheet>
  );
};

export { PromoteInstall };
