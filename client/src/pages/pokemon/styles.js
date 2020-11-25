import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  wrapper: {
    height: "100vh",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "80vw",
    marginTop: "100px",
    height: "80vh",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10%",
  },
  // grid: {
  //   width: '60%',
  //   height: '60%',
  // },
  gridItem: {
    padding: "20px",
  },
  chips: {
    padding: "20px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  chip: {
    margin: "10px",
  },
  image: {
    width: "80%",
    height: "auto",
  },
});
