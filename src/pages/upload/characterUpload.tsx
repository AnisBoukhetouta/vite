import React from "react";
import classes from "./upload.module.css";
import { Form, Formik } from "formik";
import { Button, Paper, Stack, Typography } from "@mui/material";
import FileUpload from "../../components/fileUpload/fileUpload";
import { CloudUpload } from "@mui/icons-material";
import axios from "axios";

interface Prop {
  uid: string;
}

export default function CharacterUpload({ uid }: Prop) {
  const characterFileUploadUrl = import.meta.env.VITE_CHARACTER_FILE_UPLOAD;
  const [characterFileUpload, setCharacterFileUpload] =
    React.useState<File | null>(null);

  const onCharacterUpload = async (values, { setSubmitting }) => {
    const formData = new FormData();
    formData.append("uid", uid);
    characterFileUpload &&
      formData.append("characterFileUpload", characterFileUpload[0]);
    try {
      await axios.post(characterFileUploadUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSubmitting(false);
      window.location.replace("/inventory");
    } catch (e) {
      console.log("Error submitting form:", e);
    }
  };

  return (
    <Formik
      initialValues={{
        characterFileUpload,
      }}
      onSubmit={onCharacterUpload}
    >
      {(formik) => (
        <Form>
          <h2 className={classes.heading}>
            Character or Backbling File Upload
          </h2>
          <Paper
            sx={{
              marginTop: 3,
              padding: 5,
              backgroundColor: "rgba(54, 52, 52, 0.744)",
              color: "rgb(202, 196, 196)",
            }}
          >
            <div className={classes.fieldName}>File Upload *</div>
            <FileUpload
              title="Character or Backbling file"
              fieldName="characterFileUpload"
              height={400}
              setFieldValue={setCharacterFileUpload}
              maxFiles={1}
            />
            <Stack direction="row" sx={{ justifyContent: "end" }}>
              <div className={classes.buttonline}>
                <button className={classes.lobbyHeaderButton} type="submit">
                  <CloudUpload fontSize="large" />
                  <div>Upload</div>
                </button>
              </div>
            </Stack>
          </Paper>
        </Form>
      )}
    </Formik>
  );
}
