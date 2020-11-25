import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  root: {
    paddingTop: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    width: "300px",
    height: "40px",
    padding: "10px",
    margin: "20px 0 ",
    border: "1px solid #D2D0D0",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    marginLeft: "10px",
  },
  iconButton: {
    padding: "10px",
  },

  // search: {
  //   position: "relative",
  //   borderRadius: "1px solid #000000",
  //   backgroundColor: "#ffffff",
  //   marginRight: "10px",
  //   marginLeft: 0,
  //   width: "100%",
  // },
  // searchIcon: {
  //   padding: "0 10px",
  //   height: "100%",
  //   position: "absolute",
  //   pointerEvents: "none",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // inputRoot: {
  //   color: "inherit",
  // },
  // inputInput: {
  //   padding: "10 10 10 0",
  //   // vertical padding + font size from searchIcon
  //   paddingLeft: `calc(1em + '10px')`,

  //   width: "100%",
  // },
});
