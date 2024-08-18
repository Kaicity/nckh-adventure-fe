import React from "react";
import {
  Box,
  Typography,
  useTheme,
  TextField,
  Button,
  useMediaQuery,
} from "@mui/material";
import { tokens } from "../../theme";

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        padding: isSmallScreen ? "20px" : "0",
      }}
    >
      <Box
        display="flex"
        flexDirection={isSmallScreen ? "column" : "row"}
        alignItems="center"
        sx={{
          width: isSmallScreen ? "100%" : 1400,
          height: isSmallScreen ? "auto" : 600,
          padding: "20px",
        }}
      >
        {!isSmallScreen && (
          <Box display="flex" alignItems="start">
            <Box mr="30px">
              <Box>
                <Typography variant="h1" fontWeight="bold">
                  Sign In to
                </Typography>
                <br />
                <Typography variant="h1" fontWeight="bold">
                  Recharge Direct
                </Typography>
              </Box>
              <Box mt="50px" alignItems="center">
                <Typography variant="h3" sx={{ marginRight: 1 }}>
                  If you don't have an account
                </Typography>

                <Typography variant="h3">
                  you can{" "}
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: colors.blueAccent[500],
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Register here
                  </a>
                </Typography>
              </Box>
            </Box>

            <Box>
              <img
                width={450}
                src="../../assets/Picture.png"
                alt="Illustration"
              />
            </Box>
          </Box>
        )}

        <Box
          sx={{
            flex: 1,
            mb: "80px",
            paddingLeft: isSmallScreen ? "0" : "100px",
            paddingRight: isSmallScreen ? "0" : "100px",
            paddingTop: "50px",
            textAlign: isSmallScreen ? "center" : "left",
          }}
        >
          <Typography
            variant="h2"
            align={isSmallScreen ? "center" : "left"}
            color={colors.grey[100]}
            fontWeight="bold"
            gutterBottom
          >
            Sign In
          </Typography>

          <TextField
            variant="outlined"
            placeholder="Enter email"
            fullWidth
            margin="normal"
            sx={{
              "& .MuiInputBase-input": {
                fontSize: "18px",
                backgroundColor: "white",
                height: "20px",
                color: "black",
                borderRadius: "10px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          />

          <TextField
            type="password"
            variant="outlined"
            placeholder="Enter the password"
            fullWidth
            margin="normal"
            sx={{
              "& .MuiInputBase-input": {
                fontSize: "18px",
                backgroundColor: "white",
                height: "20px", // Adjust height for better usability
                color: "black",
                borderRadius: "10px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          />
          <Typography
            display="flex"
            justifyContent={isSmallScreen ? "center" : "end"}
            color={colors.grey[100]}
            mt={2}
          >
            Recover Password
          </Typography>

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: "40px",
              height: "50px",
              borderRadius: "10px",
              backgroundColor: colors.blueAccent[600],
              color: "white",
              "&:hover": {
                backgroundColor: colors.blueAccent[400],
              },
            }}
          >
            Đăng Nhập
          </Button>

          <Box display="flex" alignItems="center" mb="20px" mt="20px">
            <Box flex="1" height="1px" bgcolor={colors.grey[400]} />{" "}
            <Typography
              variant="body1"
              sx={{
                mx: 2,
                color: colors.grey[100],
                fontWeight: "bold",
              }}
            >
              Or login with
            </Typography>
            <Box flex="1" height="1px" bgcolor={colors.grey[400]} />{" "}
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            mt="20px"
            width="100%"
            maxWidth="400px"
          >
            <Box
              component="a"
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: "100px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
                borderRadius: "8px",
              }}
            >
              <img
                src="../../assets/i-gg.png"
                alt="Google"
                style={{ width: "24%", height: "auto" }}
              />
            </Box>

            <Box
              component="a"
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: "100px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
                borderRadius: "8px",
              }}
            >
              <img
                src="../../assets/i-appstore.png"
                alt="App Store"
                style={{ width: "24%", height: "auto" }}
              />
            </Box>

            <Box
              component="a"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: "100px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
                borderRadius: "8px",
              }}
            >
              <img
                src="../../assets/i-fb.png"
                alt="Facebook"
                style={{ width: "24%", height: "auto" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
