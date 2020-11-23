import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 0',
  },
  form: {
    width: '350px',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    marginTop: '20px',
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
  redirect: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  legend: {
    width: '100%',
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  language: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
