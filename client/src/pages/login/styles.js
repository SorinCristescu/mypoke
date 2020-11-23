import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    width: '100vw',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '10px 0',
  },
  form: {
    width: '350px',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '10px',
    marginTop: '20px',
  },
  input: {
    margin: '10px 0',
  },
  logo: {
    width: '60px',
    height: 'auto',
    paddingTop: '20px 0',
    margin: '20px 0 10px 0',
  },
  redirect: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textField: {
    margin: '10px 0',
  },
});
