import React, { useEffect } from "react";
import { Autocomplete, Container, TextField, Typography } from "@mui/material";
import AppConstants from "../../AppConstants";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import GameUpload from "./gameUpload";
import CharacterUpload from "./characterUpload";
import classes from "./upload.module.css";

export default function Upload() {
  const [uid, setUid] = React.useState("");
  const [uploadType, setUploadType] = React.useState<String | null>(
    "PwnIQ_Game"
  );
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        let uid = user.uid;
        setUid(uid);
        console.log("UID", uid);
      } else {
        navigate("/regist/login");
      }
    });
  }, []);

  return (
    <Container
      style={{
        padding: "4rem",
        paddingTop: "8rem",
        minHeight: "100vh",
        color: "rgb(237, 237, 237)",
      }}
    >
      <div
        className={classes.headingContainer}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1 className={classes.largeHeading}>Submit Game</h1>
        <div>
          <Typography>What are you submitting?</Typography>
          <Autocomplete
            disableClearable
            defaultValue={"PwnIQ_Game"}
            options={AppConstants.uploadTypes}
            onChange={(_, index) => setUploadType(index)}
            renderInput={(params) => (
              <TextField name="category" required {...params} />
            )}
          />
        </div>
      </div>
      {uploadType == "PwnIQ_Game" && <GameUpload />}
      {uploadType === "Character" && <CharacterUpload uid={uid} />}
    </Container>
  );
}
