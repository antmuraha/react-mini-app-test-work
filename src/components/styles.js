export default theme => {
  //console.log("THEME", theme);
  return {
    form: {
      display: "flex",
      "flex-direction": "column",
      margin: "20px",
      height: "100%"
    },
    margin: {
      //margin: theme.spacing.unit
    },
    withoutLabel: {
      marginTop: theme.spacing.unit * 3
    },
    textField: {
      //flexBasis: 200
    },
    error: { color: theme.palette.error.main },
    formControl: {
      position: "relative",
      transform: "none",
      "text-transform": "uppercase",
      "font-size": "0.85rem",
      "margin-top": "20px",
      "letter-spacing": "-1px"
    },
    input: {
      //  flex: "1 1 auto",
      "min-width": 0,
      border: 0,
      //padding: "4px",
      color: "rgba(0, 0, 0, 0.54)",
      "border-color": "rgba(0, 0, 0, 0.54)",
      "border-radius": "5px",
      "text-align": "center",
      "font-size": "0.875rem",
      height: "28px",
      "&:hover": {
        "text-decoration": "none",
        "background-color": "rgba(0, 0, 0, 0.12)"
      }
    },
    inputMiddle: {
      "border-width": "0px 1px",
      "border-color": "rgba(0, 0, 0, 0.54)",
      "border-style": "solid"
    },
    date: {
      border: "1px solid rgba(0, 0, 0, 0.54)",
      display: "flex",
      "border-radius": "5px"
      //  padding: "2px"
    },
    toggleButton: {
      // fix not active area
      "pointer-events": "none"
    }
  };
};
