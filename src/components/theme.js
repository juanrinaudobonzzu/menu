import { green } from '@material-ui/core/colors';

export default theme => ({
  main: {
    width: 'auto',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(500 + theme.spacing(3) * 2)]: {
      width: 500,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(3)}px`,
  },
  footerText: {
    verticalAlign: 'middle',
  },
  footer: {
    marginBottom: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    marginTop: theme.spacing(3),
  },
  form: {
    width: '100%',
  },
  typography: {
    marginBottom: theme.spacing(2),
  },
  dialogTitle: {
    textAlign: 'center',
  },
  okCheck: {
    color: green[400],
  },
  foodTable: {
    marginBottom: theme.spacing(3),
  },
  snackbar: {
    margin: theme.spacing(),
  },
});
