import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  root: {
    paddingTop: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  filter: {
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

  sort: {
    width: "60px",
    marginLeft: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  search: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "15px",
    height: "auto",
  },
});
