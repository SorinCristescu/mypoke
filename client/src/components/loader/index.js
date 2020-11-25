import React from "react";

// Styles
import useStyles from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

const Loader = ({ message }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress color="primary" />
      <Typography variant="h6" align="center" style={{ margin: "20px" }}>
        {message ? message : null}
      </Typography>
    </div>
  );
};

export default Loader;
