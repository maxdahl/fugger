const theme1 = {
  // Overrides color palette
  palette: {
    primary: {
      main: "#00a0b2",
      light: "#00a0b27b",
      contrast: "#006471",
      contrastText: "#ffef62",
      linkColor: "#33eaff",
    },
    background: {
      color: "#00a0b2ad",
      default: "#ffffff",
    },
  },

  // Overrides specific components
  components: {
    // outlinedInput
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: 12,
        },
      },
    },
    // inputLabel
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 12,
        },
      },
    },
    // menuItem
    MuiMenuItem: {
      styleOverrides: {
        root: {
          marginLeft: "5px",
          marginRight: "5px",
          paddingLeft: "15px",
          "&:hover": {
            borderRadius: "10px",
          },
        },
      },
    },
  },
};

const theme2 = {
  // Overrides color palette
  palette: {
    primary: {
      main: "#b20000",
      light: "#b200007b",
      contrast: "#710000",
      contrastText: "#ffffff",
      linkColor: "#3369ff",
    },
    background: {
      color: "#b20000ad",
      default: "#ffffff",
    },
  },

  // Overrides specific components
  components: {
    // outlinedInput
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: 12,
        },
      },
    },
    // inputLabel
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 12,
        },
      },
    },
    // menuItem
    MuiMenuItem: {
      styleOverrides: {
        root: {
          marginLeft: "5px",
          marginRight: "5px",
          paddingLeft: "15px",
          "&:hover": {
            borderRadius: "10px",
          },
        },
      },
    },
  },
};

const themeDark = {
  // Overrides color palette
  palette: {
    primary: {
      main: "#353535",
      light: "#3535357b",
      contrast: "#303030",
      contrastText: "#ffffffb9",
      linkColor: "#e49310b9",
    },
    text: {
      primary: "#ffffffad",
      secondary: "#ffffffad",
    },
    background: {
      color: "#272727",
      paper: "#404040",
      none: "#ffffff",
      default: "#272727",
    },
  },
  // Overrides specific components
  components: {
    // outlinedInput
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: 12,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "outlined" &&
            ownerState.color === "primary" && {
              border: "#303030 1px solid",
            }),
        }),
      },
    },
    // inputLabel
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 12,
        },
      },
    },
    // menuItem
    MuiMenuItem: {
      styleOverrides: {
        root: {
          marginLeft: "5px",
          marginRight: "5px",
          paddingLeft: "15px",
          "&:hover": {
            borderRadius: "10px",
          },
        },
      },
    },
  },
};
export { theme1, theme2, themeDark };
