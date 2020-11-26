import React from "react";
import PropTypes from "prop-types";

import Fab from "@material-ui/core/Fab";
import useStyles from "./styles";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const classes = useStyles();
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={classes.wrapper}>
      {pageNumbers.map((number) => (
        <Fab
          className={classes.root}
          elevation={0}
          size="small"
          color="secondary"
          key={number}
          onClick={() => paginate(number)}
        >
          {number}
        </Fab>
      ))}
    </div>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
