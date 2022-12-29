import { Button } from "@mui/joy";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useEffect, useState } from "react";

let deferredPrompt;

const PromoteInstallBis = () => {
  const [installable, setInstallable] = useState(false);

  const hide = () => setInstallable(false);

  const handleInstall = () => {
    // Hide the app provided install promotion
    setInstallable(false);
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can install the PWA
      setInstallable(true);
    });

    window.addEventListener("appinstalled", () => {
      // Log install to analytics
      console.log("INSTALL: Success");
    });
  }, []);

  if (!installable) {
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

export { PromoteInstallBis };
