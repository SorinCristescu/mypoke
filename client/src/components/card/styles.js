import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  root: {
    maxWidth: 345,
    height: 400,
    backgroundColor: "#ffffff",
  },
  media: {
    // margin: "20px",
    height: 140,
    backgroundSize: "contain",
  },
  cardAction: {
    display: "flex",
    justifyContent: "center",
  },
  invitation: {
    display: "none",
  },
  actionArea: {
    "&:hover": {
      "& $invitation": {
        display: "block",
      },
    },
  },
});
