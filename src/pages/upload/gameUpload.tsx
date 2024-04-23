import React from "react";
import { Form, Formik } from "formik";
import {
  Alert,
  Autocomplete,
  Paper,
  Stack,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import AppConstants from "../../AppConstants";
import FileUpload from "../../components/fileUpload/fileUpload";
import { CloudUpload } from "@mui/icons-material";
import HelpIcon from "@mui/icons-material/Help";
import classes from "./upload.module.css";
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
  landscapeFile: null,
  portraitFile: null,
  squareFile: null,
};
export default function GameUpload() {
  const [fileUpload, setFileUpload] = React.useState<File[]>([]);
  const [landscapeFile, setLandscapeFile] = React.useState<File | null>(null);
  const [portraitFile, setPortraitFile] = React.useState<File | null>(null);
  const [squareFile, setSquareFile] = React.useState<File | null>(null);
  let uploadContainer: File[] = [];

  const onUpload = async (values, { setSubmitting }) => {
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
    landscapeFile && formData.append("landscapeFile", landscapeFile[0]);
    portraitFile && formData.append("portraitFile", portraitFile[0]);
    squareFile && formData.append("squareFile", squareFile[0]);
    fileUpload.map((file, index) => {
      const data = ".data";
      const wasm = ".wasm";
      const framework = ".framework";
      const loader = ".loader";
      if (file.name.includes(data)) {
        uploadContainer[0] = file;
      }
      if (file.name.includes(wasm)) {
        uploadContainer[1] = file;
      }
      if (file.name.includes(framework)) {
        uploadContainer[2] = file;
      }
      if (file.name.includes(loader)) {
        uploadContainer[3] = file;
      }
    });
    uploadContainer.map((file, index) => {
      formData.append(`fileUpload${index}`, file);
    });
    try {
      await axios.post(AppConstants.uploadUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSubmitting(false);
      window.location.replace("/");
    } catch (e) {
      console.log("Error submitting form:", e);
    }
  };

  return (
    <Formik
      initialValues={{
        ...initialValues,
        fileUpload,
        landscapeFile,
        portraitFile,
        squareFile,
      }}
      onSubmit={onUpload}
    >
      {(formik) => (
        <Form>
          <h2 className={classes.heading}>PwnIQ Game Upload</h2>
          <Paper
            sx={{
              marginTop: 3,
              padding: 5,
              backgroundColor: "rgba(54, 52, 52, 0.744)",
              color: "rgb(202, 196, 196)",
            }}
          >
            <h2 className={classes.pageTitle}>Game details</h2>
            <Stack>
              <div>
                <div className={classes.fieldName}>Game title *</div>
                <TextField
                  name="gameTitle"
                  variant="outlined"
                  sx={{ width: 500 }}
                  id="gameTitle"
                  required
                  value={formik.values.gameTitle}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.gameTitle && Boolean(formik.errors.gameTitle)
                  }
                  helperText={
                    formik.touched.gameTitle && formik.errors.gameTitle
                  }
                />
                <div className={classes.description2}>
                  Must be the same as the title that appears in your game - Max
                  length is 40 chars.
                </div>
              </div>
              <div>
                <div className={classes.fieldName}>Category *</div>
                <Autocomplete
                  sx={{ width: 500 }}
                  options={AppConstants.categories}
                  onChange={(event, value) =>
                    (formik.values.category = value || "")
                  }
                  renderInput={(params) => (
                    <TextField
                      name="category"
                      required
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
              </div>
              <div>
                <div className={classes.alignedFlexBox}>
                  <div className={classes.fieldName}>Tags *</div>
                  <div className={classes.description}>MAX. 5</div>
                </div>
                <Autocomplete
                  onChange={(event, value) =>
                    (formik.values.tags = value || "")
                  }
                  sx={{ width: 500 }}
                  options={AppConstants.tags}
                  renderInput={(params) => (
                    <TextField
                      name="tags"
                      required
                      value={formik.values.tags}
                      onBlur={formik.handleBlur}
                      error={formik.touched.tags && Boolean(formik.errors.tags)}
                      helperText={formik.touched.tags && formik.errors.tags}
                      {...params}
                    />
                  )}
                />
              </div>
              <div className={classes.alignedFlexBox}>
                <div className={classes.fieldName}>Description *</div>
                <div className={classes.description}>NO HTML ALLOWED</div>
              </div>
              <TextareaAutosize
                name="description"
                required
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  margin: 0,
                  height: 200,
                  backgroundColor: "#00000000",
                  color: "rgb(202, 196, 196)",
                  border: "1px solid white",
                  borderRadius: 10,
                  padding: 15,
                }}
              />
              <div className={classes.fieldName}>Controls *</div>
              <TextareaAutosize
                name="controls"
                required
                value={formik.values.controls}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  margin: 0,
                  height: 200,
                  backgroundColor: "#00000000",
                  color: "rgb(202, 196, 196)",
                  border: "1px solid white",
                  borderRadius: 10,
                  padding: 15,
                }}
              />

              <Stack direction="row" justifyContent="space-between">
                <Stack direction="column" width={300}>
                  <div className={classes.fieldName}>
                    Google Play Store link
                  </div>
                  <TextField
                    name="googlePlay"
                    value={formik.values.googlePlay}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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
                  <div className={classes.fieldName}>iOS App Store link</div>
                  <TextField
                    name="iOsApp"
                    value={formik.values.iOsApp}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.iOsApp && Boolean(formik.errors.iOsApp)
                    }
                    helperText={formik.touched.iOsApp && formik.errors.iOsApp}
                    variant="outlined"
                  />
                </Stack>
                <Stack direction="column" width={300}>
                  <div className={classes.fieldName}>Steam link</div>
                  <TextField
                    name="steamLink"
                    value={formik.values.steamLink}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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
          <Paper
            sx={{
              marginTop: 3,
              padding: 5,
              backgroundColor: "rgba(54, 52, 52, 0.744)",
              color: "rgb(202, 196, 196)",
            }}
          >
            <h2 className={classes.pageTitle}>Game Type</h2>
            <div>
              <Alert variant="filled" severity="warning">
                Please read our CrazyGames documentation carefully before
                submitting a game!
              </Alert>
              <div className={classes.fieldName}>Game Type *</div>
              <Autocomplete
                sx={{ width: 500 }}
                onChange={(event, value) =>
                  (formik.values.gameType = value || "")
                }
                options={AppConstants.gameTypes}
                renderInput={(params) => (
                  <TextField
                    name="gameType"
                    required
                    value={formik.values.gameType}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.gameType && Boolean(formik.errors.gameType)
                    }
                    helperText={
                      formik.touched.gameType && formik.errors.gameType
                    }
                    {...params}
                  />
                )}
              />
            </div>
          </Paper>
          <Paper
            sx={{
              marginTop: 3,
              padding: 5,
              backgroundColor: "rgba(54, 52, 52, 0.744)",
              color: "rgb(202, 196, 196)",
            }}
          >
            <h2 className={classes.pageTitle}>Files *</h2>
            <div>
              <div className={classes.alignedFlexBox}>
                <div className={classes.fieldName}>File Upload *</div>
                <HelpIcon
                  fontSize="small"
                  sx={{ marginTop: "24px", marginBottom: " 10px" }}
                />
              </div>
              <FileUpload
                title="Game files"
                fieldName="fileUpload"
                height={400}
                setFieldValue={setFileUpload}
                maxFiles={4}
              />
            </div>
            <h2 className={classes.fieldName}>Cover Images *</h2>
            <div className={classes.description2}>
              We will use the cover image to show your game on our pages
              (homepage, category pages, …). Make it appealing and professional
              looking! A good cover image will make the users want to play your
              game. Please provide 3 sizes for your game cover : landscape
              (1920x1080) portrait (800x1200) and square (800x800). For more
              information, make sure to read our{" "}
              <a href="#" className={classes.alink}>
                guidelines for game covers.
              </a>
            </div>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <div style={{ width: "45%" }}>
                <div className={classes.fieldName}>
                  Landscape 16:9 (1920x1080)
                </div>
                <FileUpload
                  fieldName="landscapeFile"
                  title="Landscape"
                  height={280}
                  setFieldValue={setLandscapeFile}
                />
              </div>
              <div style={{ width: "25%" }}>
                <div className={classes.fieldName}>Portrait 2:3 (800x1200)</div>
                <FileUpload
                  title="Portrait"
                  fieldName="portraitFile"
                  height={350}
                  setFieldValue={setPortraitFile}
                />
              </div>
              <div style={{ width: "25%" }}>
                <div className={classes.fieldName}>Square 1:1 (800x800)</div>
                <FileUpload
                  title="Square"
                  fieldName="squareFile"
                  height={200}
                  setFieldValue={setSquareFile}
                />
              </div>
            </Stack>
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
