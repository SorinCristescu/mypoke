import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    padding: '0 80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'fex-start',
  },
  logout: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'fex-end',
  },
  logo: {
    width: '50px',
    height: 'auto',
    marginRight: '20px',
  },
  menuButton: {
    marginRight: '20px',
  },
  title: {
    flexGrow: 1,
  },
});
