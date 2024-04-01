import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Autocomplete,
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import AppConstants from "../../AppConstants";
import { CloudUpload } from "@mui/icons-material";
import axios from "axios";

const initialValues = {
  gameTitle: "",
  category: "",
  tags: "",
  description: "",
  controls: "",
  googlePlay: "",
  iOsApp: "",
  steamLink: "",
  gameType: "",
  fileUpload: null,
  landscapeFile: null,
  portraitFile: null,
  squareFile: null,
};

const validationSchema = Yup.object().shape({
  // gameTitle: Yup.string().required("gameTitle is Required"),
  // category: Yup.string().required("category is Required"),
  // tags: Yup.string().required("tags is Required"),
  // description: Yup.string().required("description is Required"),
  // controls: Yup.string().required("controls is Required"),
  // googlePlay: Yup.string().required("googlePlay is Required"),
  // iOsApp: Yup.string().required("iOsApp is Required"),
  // steamLink: Yup.string().required("steamLink is Required"),
  // gameType: Yup.string().required("gameType is Required"),
  // fileUpload: Yup.mixed().required("fileUpload is required"),
  // landscapeFile: Yup.mixed().required("landscapeFile is required"),
  // portraitFile: Yup.mixed().required("portraitFile is required"),
  // squareFile: Yup.mixed().required("squareFile is required"),
});
export default function Upload() {
  const [fileUpload, setFileUpload] = React.useState<File | null>(null);
  const [landscapeFile, setLandscapeFile] = React.useState<File | null>(null);
  const [portraitFile, setPortraitFile] = React.useState<File | null>(null);
  const [squareFile, setSquareFile] = React.useState<File | null>(null);

  const registerHandler = async (values, { setSubmitting }) => {
    console.log(values);
    const formData = new FormData();
    formData.append("gameTitle", values.gameTitle);
    formData.append("category", values.category);
    formData.append("tags", values.tags);
    formData.append("description", values.description);
    formData.append("controls", values.controls);
    formData.append("googlePlay", values.googlePlay);
    formData.append("iOsApp", values.iOsApp);
    formData.append("steamLink", values.steamLink);
    formData.append("gameType", values.gameType);
    formData.append("fileUpload", values.fileUpload);
    formData.append("landscapeFile", values.landscapeFile);
    formData.append("portraitFile", values.portraitFile);
    formData.append("squareFile", values.squareFile);
    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setSubmitting(false);
    } catch (e) {
      console.log("Error submitting form:", e);
    }
  };

  return (
    <Container
      style={{
        paddingTop: "6rem",
      }}
    >
      <Formik
        initialValues={{
          ...initialValues,
          fileUpload,
          landscapeFile,
          portraitFile,
          squareFile,
        }}
        validationSchema={validationSchema}
        onSubmit={registerHandler}
      >
        {(formik) => (
          <Form>
            <h1>Submit Game</h1>
            <Paper sx={{ marginTop: 3, padding: 5 }}>
              <h2>Game details</h2>
              <Stack spacing={5}>
                <Box>
                  <Typography>Game title *</Typography>
                  <TextField
                    name="gameTitle"
                    variant="outlined"
                    sx={{ width: 500 }}
                    id="gameTitle"
                    value={formik.values.gameTitle}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    inputProps={{ style: { color: "var(--light)" } }}
                    error={
                      formik.touched.gameTitle &&
                      Boolean(formik.errors.gameTitle)
                    }
                    helperText={
                      formik.touched.gameTitle && formik.errors.gameTitle
                    }
                  />
                </Box>
                <Box>
                  <Typography>Category *</Typography>
                  <Autocomplete
                    sx={{ width: 500 }}
                    options={AppConstants.categories}
                    onChange={(event, value) =>
                      (formik.values.category = value || "")
                    }
                    renderInput={(params) => (
                      <TextField
                        name="category"
                        value={formik.values.category}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.category &&
                          Boolean(formik.errors.category)
                        }
                        helperText={
                          formik.touched.category && formik.errors.category
                        }
                        {...params}
                      />
                    )}
                  />
                </Box>
                <Box>
                  <Typography>Tags *</Typography>
                  <Autocomplete
                    onChange={(event, value) =>
                      (formik.values.tags = value || "")
                    }
                    sx={{ width: 500 }}
                    options={AppConstants.tags}
                    renderInput={(params) => (
                      <TextField
                        name="tags"
                        value={formik.values.tags}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.tags && Boolean(formik.errors.tags)
                        }
                        helperText={formik.touched.tags && formik.errors.tags}
                        {...params}
                      />
                    )}
                  />
                </Box>
                <Typography>Description *</Typography>
                <TextareaAutosize
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{
                    margin: 0,
                    height: 200,
                    backgroundColor: "#00000000",
                    padding: 5,
                  }}
                />
                <Typography>Controls *</Typography>
                <TextareaAutosize
                  name="controls"
                  value={formik.values.controls}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{
                    margin: 0,
                    height: 200,
                    backgroundColor: "#00000000",
                    padding: 5,
                  }}
                />

                <Stack direction="row" justifyContent="space-between">
                  <Stack direction="column" width={300}>
                    <span>Google Play Store link</span>
                    <TextField
                      name="googlePlay"
                      value={formik.values.googlePlay}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      inputProps={{ style: { color: "var(--light)" } }}
                      error={
                        formik.touched.googlePlay &&
                        Boolean(formik.errors.googlePlay)
                      }
                      helperText={
                        formik.touched.googlePlay && formik.errors.googlePlay
                      }
                      variant="outlined"
                    />
                  </Stack>
                  <Stack direction="column" width={300}>
                    <span>iOS App Store link</span>
                    <TextField
                      name="iOsApp"
                      value={formik.values.iOsApp}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      inputProps={{ style: { color: "var(--light)" } }}
                      error={
                        formik.touched.iOsApp && Boolean(formik.errors.iOsApp)
                      }
                      helperText={formik.touched.iOsApp && formik.errors.iOsApp}
                      variant="outlined"
                    />
                  </Stack>
                  <Stack direction="column" width={300}>
                    <span>Steam link</span>
                    <TextField
                      name="steamLink"
                      value={formik.values.steamLink}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      inputProps={{ style: { color: "var(--light)" } }}
                      error={
                        formik.touched.steamLink &&
                        Boolean(formik.errors.steamLink)
                      }
                      helperText={
                        formik.touched.steamLink && formik.errors.steamLink
                      }
                      variant="outlined"
                    />
                  </Stack>
                </Stack>
              </Stack>
            </Paper>
            <Paper sx={{ marginTop: 3, padding: 5 }}>
              <h2>Game Type</h2>
              <Box>
                <Typography>Game Type *</Typography>
                <Autocomplete
                  sx={{ width: 500 }}
                  onChange={(event, value) =>
                    (formik.values.gameType = value || "")
                  }
                  options={AppConstants.gameTypes}
                  renderInput={(params) => (
                    <TextField
                      name="gameType"
                      value={formik.values.gameType}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.gameType &&
                        Boolean(formik.errors.gameType)
                      }
                      helperText={
                        formik.touched.gameType && formik.errors.gameType
                      }
                      {...params}
                    />
                  )}
                />
              </Box>
            </Paper>
            <Paper sx={{ marginTop: 3, padding: 5 }}>
              <h2>Files *</h2>
              <div>
                <Typography>File Upload *</Typography>
                <Button
                  component="label"
                  variant="outlined"
                  style={{
                    width: "100%",
                    height: 300,
                  }}
                  startIcon={<CloudUpload />}
                >
                  <input
                    name="fileUpload"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(event) => {
                      if (event.currentTarget.files?.length) {
                        formik.setFieldValue(
                          "fileUpload",
                          event.currentTarget.files[0]
                        );
                        setFileUpload(event.currentTarget.files[0]);
                      }
                    }}
                  />
                </Button>
              </div>
              <h2 style={{ marginTop: 30 }}>Cover Images</h2>
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <div style={{ width: "45%" }}>
                  <Typography>Landscape 16:9 (1920x1080)</Typography>
                  <Button
                    component="label"
                    variant="outlined"
                    style={{
                      width: "100%",
                      height: "80%",
                    }}
                    startIcon={<CloudUpload />}
                  >
                    <input
                      name="landscapeFile"
                      type="file"
                      style={{ display: "none" }}
                      onChange={(event) => {
                        if (event.currentTarget?.files?.length) {
                          formik.setFieldValue(
                            "landscapeFile",
                            event.currentTarget.files[0]
                          );
                          setLandscapeFile(event.currentTarget.files[0]);
                        }
                      }}
                    />
                  </Button>
                </div>
                <div style={{ width: "25%" }}>
                  <Typography>Portrait 2:3 (800x1200)</Typography>
                  <Button
                    component="label"
                    variant="outlined"
                    style={{
                      width: "100%",
                      height: 350,
                    }}
                    startIcon={<CloudUpload fontSize="large" />}
                  >
                    <input
                      name="portraitFile"
                      type="file"
                      style={{ display: "none" }}
                      onChange={(event) => {
                        if (event.currentTarget.files?.length) {
                          formik.setFieldValue(
                            "portraitFile",
                            event.currentTarget.files[0]
                          );
                          setPortraitFile(event.currentTarget.files[0]);
                        }
                      }}
                    />
                  </Button>
                </div>
                <div style={{ width: "25%" }}>
                  <Typography>Square 1:1 (800x800)</Typography>
                  <Button
                    component="label"
                    variant="outlined"
                    style={{
                      width: "100%",
                      height: "70%",
                    }}
                    startIcon={<CloudUpload />}
                  >
                    <input
                      name="squareFile"
                      type="file"
                      style={{ display: "none" }}
                      onChange={(event) => {
                        if (event.currentTarget.files?.length) {
                          formik.setFieldValue(
                            "squareFile",
                            event.currentTarget.files[0]
                          );
                          setSquareFile(event.currentTarget.files[0]);
                        }
                      }}
                    />
                  </Button>
                </div>
              </Stack>
              <Stack direction="row" sx={{ justifyContent: "end" }}>
                <Button
                  startIcon={<CloudUpload />}
                  type="submit"
                  disabled={formik.isSubmitting}
                  variant="contained"
                  sx={{
                    marginTop: 5,
                    marginBottom: 5,
                    padding: 2,
                  }}
                >
                  Upload
                </Button>
              </Stack>
            </Paper>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
