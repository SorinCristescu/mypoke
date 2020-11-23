import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    width: '100%',
  },
  toolbar: {
    padding: '0 80px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logout: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
