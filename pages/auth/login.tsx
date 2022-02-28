import React from 'react';
import {
  Button,
  FormControl,
  FormHelperText,
  Paper,
  IconButton,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Link,
  CssBaseline,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Layout from '../../components/Layout';

interface State {
  username: string;
  password: string;
  showPassword: boolean;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const [values, setValues] = React.useState<State>({
    username: '',
    password: '',
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Layout title="Login">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in to
          </Typography>
          <Typography variant="h6" noWrap component="div" sx={{ my: 2 }}>
            <Link href="/" color="text.primary" underline="none">
              {process.env.appName}
            </Link>
          </Typography>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                fullWidth
                autoFocus
                {...register('username', {
                  required: 'Username is required.',
                })}
                error={Boolean(errors.username)}
                helperText={errors.username?.message}
              />
              <FormControl
                error={Boolean(errors.username)}
                margin="normal"
                sx={{ width: '100%' }}
              >
                <InputLabel htmlFor="password" error={Boolean(errors.password)}>
                  Password
                </InputLabel>
                <OutlinedInput
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  autoComplete="current-password"
                  type={values.showPassword ? 'text' : 'password'}
                  {...register('password', {
                    required: 'Password is required.',
                  })}
                  error={Boolean(errors.password)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText>{errors.password?.message}</FormHelperText>
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2, textTransform: 'none' }}
              >
                Sign in
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link href="/register" variant="body2" underline="hover">
                    {"Don't have an account? Create an Account"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Layout>
  );
}
