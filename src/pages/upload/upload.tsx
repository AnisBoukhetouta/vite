import React from "react";
import { CloudUpload } from "@mui/icons-material";
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

export default function Upload() {
  return (
    <Container sx={{ padding: 5, position: "relative" }}>
      <h1>Submit Game</h1>
      <Paper sx={{ marginTop: 3, padding: 5 }}>
        <h2>Game details</h2>
        <Stack spacing={5}>
          <Box>
            <Typography>Game title *</Typography>
            <TextField variant="outlined" sx={{ width: 500 }} />
          </Box>
          <Box>
            <Typography>Category *</Typography>
            <Autocomplete
              sx={{ width: 500 }}
              options={AppConstants.categories}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
          <Box>
            <Typography>Tags *</Typography>
            <Autocomplete
              sx={{ width: 500 }}
              options={AppConstants.tags}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
          <Typography>Description *</Typography>
          <TextareaAutosize
            style={{
              margin: 0,
              height: 200,
              backgroundColor: "#00000000",
              padding: 5,
            }}
          />
          <Typography>Controls *</Typography>
          <TextareaAutosize
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
              <TextField variant="outlined" required />
            </Stack>
            <Stack direction="column" width={300}>
              <span>iOS App Store link</span>
              <TextField variant="outlined" required />
            </Stack>
            <Stack direction="column" width={300}>
              <span>Steam link</span>
              <TextField variant="outlined" required />
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
            options={AppConstants.gameTypes}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>
      </Paper>
      <Paper sx={{ marginTop: 3, padding: 5 }}>
        <h2>Files</h2>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <div style={{width: '45%'}}>
            <Typography>Landscape 16:9 (1920x1080)</Typography>
            <Button
              component="label"
              variant="outlined"
              style={{
                width: '100%',
                height: '80%',
              }}
              startIcon={<CloudUpload />}
            >
              <input type="file" style={{ display: "none" }} />
            </Button>
          </div>
          <div style={{width: '25%'}}>
            <Typography>Portrait 2:3 (800x1200)</Typography>
            <Button
              component="label"
              variant="outlined"
              style={{
                width: '100%',
                height: 350,
              }}
              startIcon={<CloudUpload fontSize="large" />}
            >
              <input type="file" style={{ display: "none" }} />
            </Button>
          </div>
          <div style={{width: '25%'}}>
            <Typography>Square 1:1 (800x800)</Typography>
            <Button
              component="label"
              variant="outlined"
              style={{
                width: '100%',
                height: '70%',
              }}
              startIcon={<CloudUpload />}
            >
              <input type="file" style={{ display: "none" }} />
            </Button>
          </div>
        </Stack>
        <Stack direction="row" sx={{ justifyContent: "end" }}>
          <Button
            startIcon={<CloudUpload />}
            role={undefined}
            component="label"
            variant="contained"
            tabIndex={-1}
            sx={{
              marginTop: 5,
              marginBottom: 5,
              padding: 2,
            }}
          >
            Upload
            <TextField type="file" style={{ display: "none" }} />
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
