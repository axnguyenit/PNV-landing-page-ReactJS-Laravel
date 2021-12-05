import React, { useState } from 'react';
import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import SpeedDial from '@material-ui/lab/SpeedDial';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Link } from 'react-router-dom';
import axios from 'axios';
import bgrImg from './bgpn.jpg';
import { useHistory } from 'react-router';
import { useCookies } from 'react-cookie';

const useStyles = makeStyles((theme) => ({
    bgr: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: '2',
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#d4d4d4',
        boxShadow: '0 3px 10px rgba(62, 85, 120, 0.045)',
        padding: '3rem',
        borderRadius: '0.5rem',
        width: '430px',
        margin: '50px auto',
        textAlign: 'center',
        color: '#FFFFFF',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(6, 0, 3),
    },
    error: {
        marginTop: theme.spacing(2),
        color: '#F00',
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '100%',
    },
    back: {
        position: 'fixed',
        top: theme.spacing(2),
        left: theme.spacing(2),
        zIndex: '999',
    },
}));

export default function Login() {
    const classes = useStyles();
    const history = useHistory();
    const [cookies, setCookie] = useCookies(['user']);
    const [errText, setErrText] = useState('');
    const [errEmail, setErrEmail] = useState('');
    const [errPass, setErrPass] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const onLogin = (e) => {
        e.preventDefault();
        const _formData = new FormData();
        _formData.append('username', user.username);
        _formData.append('password', user.password);
        axios.post('/api/login', _formData).then((res) => {
            if (res.data.success) {
                setCookie('username', res.data.data.username);
                history.replace('/admin');
            }
            if (!res.data.success) {
                setErrText(res.data.message);
            }

            if (res.data.status === 'failed') {
                setErrEmail(res.data.validation_error.username);
                setErrPass(res.data.validation_error.password);
            }
        });
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        setErrText('');
        setErrEmail('');
        setErrPass('');
    };

    return (
        <Container component="main" maxWidth="xs">
            {/* <SpeedDial
                ariaLabel="SpeedDial example"
                className={classes.back}
                icon={<KeyboardBackspaceIcon />}
                onClick={() => {history.replace("/")}}
            /> */}
            <CssBaseline />
            <img className={classes.bgr} src={bgrImg} alt="" />
            <div className={classes.overlay}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Log in to dashboard
                    </Typography>
                    <form
                        className={classes.form}
                        onSubmit={onLogin}
                        autoComplete="off"
                    >
                        <TextField
                            margin="normal"
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoFocus
                            onChange={onChange}
                        />

                        <FormControl
                            className={clsx(
                                classes.withoutLabel,
                                classes.textField,
                            )}
                        >
                            <InputLabel htmlFor="standard-adornment-password">
                                Password
                            </InputLabel>
                            <Input
                                fullWidth
                                name="password"
                                label="Password"
                                onChange={onChange}
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? (
                                                <Visibility />
                                            ) : (
                                                <VisibilityOff />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <div className={classes.error}>{errText}</div>
                        <div className={classes.error}>{errEmail}</div>
                        <div className={classes.error}>{errPass}</div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.submit}
                        >
                            Log in
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to="/forgot-password" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>
        </Container>
    );
}
