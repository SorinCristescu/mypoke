import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '100%',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 0',
  },
  gridItem: {
    padding: '20px',
  },
  chips: {
    padding: '20px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chip: {
    margin: '10px',
  },
  image: {
    width: '80%',
    height: 'auto',
  },
});
