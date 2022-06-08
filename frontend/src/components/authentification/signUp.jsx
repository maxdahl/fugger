import {
  Avatar,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Tooltip,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import * as React from "react";
import { useState } from "react";
//   import { Link, useNavigate } from "react-router-dom";
import validator from "validator";

function SignUp() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [strongPassword, setStrongPassword] = useState(true);
  const [passwordCheck, setPasswordCheck] = useState("");
  const [hidden, setHidden] = useState(false);
  // const navigate = useNavigate();

  // STATEHANDLE FOR VISIBILL-PASSWORD-BUTTON --> BOOLEAN
  const handleHidden = () => {
    setHidden(!hidden);
  };

  // CHECKS IF PASSWORD IS STRONG --> BOOLEAN
  const handleStrongPassword = () => {
    if (password === "") {
      setStrongPassword(true);
    } else {
      setStrongPassword(validator.isStrongPassword(password, []));
    }
  };

  // SET STATE FOR PASSWORD
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // RUN PASSWORD CHECK IF ITS STRONG
  React.useEffect(() => {
    handleStrongPassword();
  }, [password]);

  // CHECKS IF EMAIL HAS VALID FORMAT --> BOOLEAN
  const handleValidEmail = () => {
    setValidEmail(validator.isEmail(email));
  };

  // CHECKS IF PASSWORDS MATCHING --> BOOLEAN
  const handlePasswordCheck = (e) => {
    setPasswordCheck(validator.equals(e.target.value, password));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordCheck === false) {
      console.warn("Password is not matching");
    } else if (strongPassword === false) {
      console.warn("Password is weak");
    } else {
      console.warn("Welcome aboard!");
      // navigate("/users");
    }
  };

  // VARIABLES FOR STYLING --- START ---
  const styleContainer = {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "purple",
  };

  const styleBrand = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "1rem",
  };

  const styleCard = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "400px",
    height: "500px",
    borderRadius: "20px",
    my: "50px",
  };

  const styleTitle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    mb: "10px",
    mt: "15px",
  };

  const styleTextField = {
    width: "90%",
    mb: "20px",
    ml: "20px",
    mr: "20px",
    borderRadius: "10px",
  };

  const styleCreateUser = { color: "#FFFFFF" };
  // VARIABLES FOR STYLING --- END ---

  return (
    <Container sx={styleContainer}>
      <div style={styleBrand}>
        <Avatar src="src\assets\fugger_logo.svg" />
        <Typography sx={styleCreateUser} variant="h5">
          Fugger
        </Typography>
      </div>
      <Card sx={styleCard}>
        <CardContent>
          <Typography sx={styleTitle} variant="h6">
            Create your account
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              sx={styleTextField}
              required
              id="signup-firstname-textfield"
              label="Firstname"
              variant="outlined"
            />
            <TextField
              sx={styleTextField}
              required
              id="signup-lastname-textfield"
              label="Lastname"
              variant="outlined"
            />
            <TextField
              sx={styleTextField}
              required
              id="signup-email-textfield"
              label="E-Mail"
              variant="outlined"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onBlur={handleValidEmail}
              error={!(validEmail === true || validEmail === "")}
            />
            <TextField
              sx={styleTextField}
              required
              id="signup-create-password"
              label="Create Password"
              variant="outlined"
              type={hidden === false ? "password" : "text"}
              onChange={handlePassword}
              autoComplete="new-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {strongPassword === true ? null : (
                      <Tooltip
                        componentsProps={{
                          tooltip: {
                            sx: {
                              bgcolor: "#3a3b3c",
                              "& .MuiTooltip-arrow": {
                                color: "#3a3b3c",
                              },
                            },
                          },
                        }}
                        arrow
                        // TOOLTIP TITLE PROVIDES INFORMATION FOR EVERY PASSWORD RULE
                        // CHECKS IF RULE IS FULFILLED, IF YES RULE SHOWED GREEN
                        title={
                          <>
                            <Typography>Your password must contain</Typography>
                            <Typography
                              sx={
                                password.length >= 8
                                  ? { color: "#4caf50" }
                                  : null
                              }
                              variant="body2"
                            >
                              • min 8 digits
                            </Typography>
                            <Typography
                              sx={
                                password.match(/[a-z]/g)
                                  ? { color: "#4caf50" }
                                  : null
                              }
                              variant="body2"
                            >
                              • lower case
                            </Typography>
                            <Typography
                              sx={
                                password.match(/[A-Z]/g)
                                  ? { color: "#4caf50" }
                                  : null
                              }
                              variant="body2"
                            >
                              • upper case
                            </Typography>
                            <Typography
                              sx={
                                password.match(/[0-9]/g)
                                  ? { color: "#4caf50" }
                                  : null
                              }
                              variant="body2"
                            >
                              • number
                            </Typography>
                            <Typography
                              sx={
                                password.match(/[^ \w]/g)
                                  ? { color: "#4caf50" }
                                  : null
                              }
                              variant="body2"
                            >
                              • special charackter
                            </Typography>
                          </>
                        }
                      >
                        <GppMaybeIcon color="error" />
                      </Tooltip>
                    )}
                    <IconButton tabIndex={-1} onClick={handleHidden}>
                      {hidden === false ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              sx={styleTextField}
              required
              id="signup-confirm-password"
              label="Confirm Password"
              variant="outlined"
              type={hidden === false ? "password" : "text"}
              onChange={handlePasswordCheck}
              error={!(passwordCheck === true || passwordCheck === "")}
              autoComplete="new-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton tabIndex={-1} onClick={handleHidden}>
                      {hidden === false ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button sx={styleTextField} type="submit" variant="contained">
              Create Account
            </Button>
          </form>
        </CardContent>
      </Card>
      <Typography sx={styleCreateUser} variant="caption">
        Already have an Account?{" "}
        {/* <Link style={styleCreateUser} to="/login">
            Log in
          </Link> */}
        Log in
      </Typography>
    </Container>
  );
}

export default SignUp;