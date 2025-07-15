import { Button } from "@mui/material";

const SaveToSpotifyButton = () => {
  return (
    <>
      <Button
        className="saveButton"
        variant="contained"
        sx={{
          margin: "2rem auto",
          borderRadius: "2rem",
          padding: "1rem",
          width: "50%",
        }}
      >
        Save to Spotify
      </Button>
    </>
  );
};

export default SaveToSpotifyButton;
