import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CardItem from '../card';
import Loader from '../loader';
import Pagination from '../pagination';
import useStyles from './styles';

const List = (props) => {
  const classes = useStyles();
  const { path, list } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return !list.length ? (
    <Loader />
  ) : (
    <>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {currentItems.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <CardItem item={item} path={path} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={list.length}
        paginate={paginate}
      />
    </>
  );
};

List.propTypes = {
  list: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
};

export default List;
