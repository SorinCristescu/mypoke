import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  wrapper: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
  },
  text: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '50px 0px',
  },
  logo: {
    width: '30%',
    height: 'auto',
    padding: '20px 20px',
  },
});
