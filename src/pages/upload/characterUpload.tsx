import React from "react";
import classes from "./upload.module.css";
import { Form, Formik } from "formik";
import { Autocomplete, Paper, Stack, TextField } from "@mui/material";
import FileUpload from "../../components/fileUpload/fileUpload";
import { CloudUpload } from "@mui/icons-material";
import axios from "axios";
import AppConstants from "../../AppConstants";

interface Prop {
  uid: string;
}

const initialValues = {
  fileType: "",
  characterFileUpload: null,
  coverImage: null,
};

export default function CharacterUpload({ uid }: Prop) {
  const [characterFileUpload, setCharacterFileUpload] =
    React.useState<File | null>(null);
  const [coverImage, setCoverImage] = React.useState<File | null>(null);

  const onCharacterUpload = async (values, { setSubmitting }) => {
    const formData = new FormData();
    formData.append("uid", uid);
    formData.append("fileType", values.fileType);
    coverImage && formData.append("coverImage", coverImage[0]);
    characterFileUpload &&
      formData.append("characterFileUpload", characterFileUpload[0]);
    try {
      await axios.post(AppConstants.characterFileUploadUrl, formData, {
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
    <Formik initialValues={initialValues} onSubmit={onCharacterUpload}>
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
            <div>
              <h2 className={classes.pageTitle}>File Upload</h2>
              <div className={classes.fieldName}>File Type *</div>
              <Autocomplete
                sx={{ width: 500 }}
                onChange={(event, value) =>
                  (formik.values.fileType = value || "")
                }
                options={AppConstants.fileTypes}
                renderInput={(params) => (
                  <TextField
                    name="fileType"
                    required
                    value={formik.values.fileType}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.fileType && Boolean(formik.errors.fileType)
                    }
                    helperText={
                      formik.touched.fileType && formik.errors.fileType
                    }
                    {...params}
                  />
                )}
              />
            </div>
            <div className={classes.fieldName}>File Upload *</div>
            <FileUpload
              title="Cover Image"
              fieldName="coverImage"
              height={400}
              setFieldValue={setCoverImage}
              maxFiles={1}
            />
            <FileUpload
              title="Character or Backbling File"
              fieldName="characterFileUpload"
              height={400}
              setFieldValue={setCharacterFileUpload}
              maxFiles={1}
            />
            <Stack direction="row" sx={{ justifyContent: "end" }}>
              <div
                aria-disabled={formik.isSubmitting}
                className={classes.buttonline}
              >
                <button
                  disabled={formik.isSubmitting}
                  className={classes.lobbyHeaderButton}
                  type="submit"
                >
                  <CloudUpload fontSize="large" />
                  Upload
                </button>
              </div>
            </Stack>
          </Paper>
        </Form>
      )}
    </Formik>
  );
}
