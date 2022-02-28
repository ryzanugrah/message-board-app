import React from 'react';
import {
  Paper,
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  CssBaseline,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Stack,
  List,
  ListItemButton,
  ListItemIcon,
  Divider,
} from '@mui/material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import Layout from '../../components/Layout';

export default function Profile() {
  return (
    <Layout title="Profile">
      <Container
        component="main"
        maxWidth="lg"
        sx={{ minHeight: 'calc(100vh - 184px)' }}
      >
        <CssBaseline />
        <Box sx={{ my: 4, flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Paper variant="outlined" sx={{ p: 1 }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 56, height: 56, mr: 2 }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography sx={{ fontWeight: 500 }} color="text.primary">
                        Ali Connors
                      </Typography>
                    }
                    secondary={
                      <Stack direction="row">
                        <Typography color="text.secondary" variant="body2">
                          @aliconnors
                        </Typography>
                      </Stack>
                    }
                  />
                </ListItem>
              </Paper>
              <Paper variant="outlined" sx={{ p: 1, mt: 2 }}>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="/profile">
                      <ListItemIcon sx={{ mr: -2 }}>
                        <ManageAccountsIcon />
                      </ListItemIcon>
                      <ListItemText primary="Profile" />
                    </ListItemButton>
                  </ListItem>
                  <Divider sx={{ my: 2 }} />
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="/">
                      <ListItemIcon sx={{ mr: -2 }}>
                        <LogoutIcon />
                      </ListItemIcon>
                      <ListItemText primary="Logout" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper variant="outlined" sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  component="h1"
                  color="text.primary"
                  gutterBottom
                  sx={{ fontWeight: 'medium' }}
                >
                  Profile
                </Typography>
                <Box component="form" noValidate sx={{ mt: 2 }}>
                  <Typography
                    variant="body1"
                    component="h2"
                    color="text.primary"
                    gutterBottom
                    sx={{ fontWeight: 'medium' }}
                  >
                    Name
                  </Typography>
                  <TextField
                    disabled
                    id="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    autoFocus
                    sx={{ mb: 2 }}
                  />
                  <Typography
                    variant="body1"
                    component="h2"
                    color="text.primary"
                    gutterBottom
                    sx={{ fontWeight: 'medium' }}
                  >
                    Username
                  </Typography>
                  <TextField
                    disabled
                    id="username"
                    label="Username"
                    variant="outlined"
                    fullWidth
                  />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}
