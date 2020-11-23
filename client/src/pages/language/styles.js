import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '350px',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '20px 0',
    margin: 'auto',
  },

  language: {
    padding: '10% 0',
  },
  flag: {
    width: '25px',
    height: '25px',
    paddingTop: '8px',
  },
  logo: {
    width: '60px',
    height: 'auto',
    paddingTop: '20px 0',
    margin: '20px 0 10px 0',
  },
  legend: {
    width: '100%',
    paddingTop: '50px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
