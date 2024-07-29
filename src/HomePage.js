// src/HomePage.js
import React, { useState } from "react";
import {
  Grid,
  TextField,
  MenuItem,
  Typography,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
}));

const DropdownsContainer = styled(Box)(({ theme }) => ({
  flex: "1 1 25%", // Takes up the upper 1/4 of the screen
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(5),
}));

const FooterBox = styled(Box)(({ theme }) => ({
  flex: "1 1 75%", // Takes up the remaining 3/4 of the screen
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const DropdownGrid = styled(Grid)(({ theme }) => ({
  maxWidth: "600px",
  width: "100%",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  maxWidth: "600px",
}));

function HomePage() {
  const [domain, setDomain] = useState("");
  const [language, setLanguage] = useState("");
  const [inputText, setInputText] = useState("");

  const navigate = useNavigate();

  const handleDomainChange = (event) => {
    setDomain(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    navigate("/result", {
      state: {
        domain,
        language,
        inputText,
      },
    });
  };

  return (
    <Container>
      <DropdownsContainer>
        {/* Content Generation */}
        <Typography variant="h4" align="center" gutterBottom>
          Content Generation
        </Typography>

        <DropdownGrid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              select
              label="Select Domain"
              // domain is the state
              value={domain}
              onChange={handleDomainChange}
              variant="outlined"
            >
              {/* hard coded domain lists */}
              <MenuItem value="Power Sector">Power Sector</MenuItem>
              <MenuItem value="Green Energy">Green Energy</MenuItem>
              <MenuItem value="Technology">Technology</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              select
              label="Select Language"
              value={language}
              onChange={handleLanguageChange}
              variant="outlined"
            >
              {/* hard coded language lists */}
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Hindi">Hindi</MenuItem>
              <MenuItem value="Telugu">Telugu</MenuItem>
            </TextField>
          </Grid>
        </DropdownGrid>
      </DropdownsContainer>

      {/* prompt area */}
      <FooterBox>
        <StyledTextField
          multiline
          rows={3}
          label="Prompt..."
          variant="outlined"
          // inputText is the state
          value={inputText}
          onChange={handleInputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSubmit} size="large">
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FooterBox>
    </Container>
  );
}

export default HomePage;
