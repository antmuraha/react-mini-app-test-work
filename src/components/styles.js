export default theme => {
  //console.log("THEME", theme);
  return {
    form: {
      display: "flex",
      "flex-direction": "column",
      margin: "20px",
      height: "100%"
    },
    textField: {},
    error: { color: theme.palette.error.main+" !important" },
    active: { color: theme.palette.primary[theme.palette.type] },
    formControl: {
      position: "relative",
      transform: "none",
      "text-transform": "uppercase",
      "font-size": theme.typography.caption.fontSize,
      "margin-top": "20px",
      "letter-spacing": "-1px"
    },
    input: {
      //  flex: "1 1 auto",
      "min-width": 0,
      border: 0,
      //padding: "4px",
      color: theme.typography.caption.color,
      "border-color": theme.palette.text.secondary,
      "border-radius": "5px",
      "text-align": "center",
      "font-size": theme.typography.caption.fontSize,
      height: "28px",
      "&:hover": {
        "text-decoration": "none",
        "background-color": theme.palette.action.disabledBackground
      }
    },
    focusedDate: {
      outline: "2px solid " + theme.palette.primary[theme.palette.type],
      "outline-radius": "5px",
      "box-shadow": theme.shadows[3],
      "z-index": 2,
      "border-color": "rgba(0,0,0,0) !important",
      "background-color": theme.palette.common.white + " !important"
    },
    inputMiddle: {
      "border-width": "0px 1px",
      "border-color": theme.palette.text.secondary,
      "border-style": "solid"
    },
    date: {
      border: "1px solid " + theme.palette.text.secondary,
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
