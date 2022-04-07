import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Layout from '../../components/Layout';
import Grid from '@mui/material/Grid';

export default function User() {
  return (
    <Layout title="Users">
      <Container
        component="main"
        maxWidth="lg"
        sx={{ minHeight: 'calc(100vh - 200px)' }}
      >
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Typography
              variant="h5"
              component="h1"
              color="text.primary"
              gutterBottom
              sx={{ fontWeight: 'medium' }}
            >
              Brunch this weekend?
            </Typography>
            {/* <Button
              color="primary"
              variant="contained"
              sx={{ borderRadius: 5, textTransform: 'none' }}
              startIcon={<EditIcon />}
            >
              Edit Message
            </Button> */}
          </Stack>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
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
                        <Link
                          href="/"
                          underline="hover"
                          color="text.secondary"
                          variant="body2"
                        >
                          @aliconnors
                        </Link>
                      </Stack>
                    }
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
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
                        <Link
                          href="/"
                          underline="hover"
                          color="text.secondary"
                          variant="body2"
                        >
                          @aliconnors
                        </Link>
                      </Stack>
                    }
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
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
                        <Link
                          href="/"
                          underline="hover"
                          color="text.secondary"
                          variant="body2"
                        >
                          @aliconnors
                        </Link>
                      </Stack>
                    }
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
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
                        <Link
                          href="/"
                          underline="hover"
                          color="text.secondary"
                          variant="body2"
                        >
                          @aliconnors
                        </Link>
                      </Stack>
                    }
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
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
                        <Link
                          href="/"
                          underline="hover"
                          color="text.secondary"
                          variant="body2"
                        >
                          @aliconnors
                        </Link>
                      </Stack>
                    }
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
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
                        <Link
                          href="/"
                          underline="hover"
                          color="text.secondary"
                          variant="body2"
                        >
                          @aliconnors
                        </Link>
                      </Stack>
                    }
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
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
                        <Link
                          href="/"
                          underline="hover"
                          color="text.secondary"
                          variant="body2"
                        >
                          @aliconnors
                        </Link>
                      </Stack>
                    }
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
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
                        <Link
                          href="/"
                          underline="hover"
                          color="text.secondary"
                          variant="body2"
                        >
                          @aliconnors
                        </Link>
                      </Stack>
                    }
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
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
                        <Link
                          href="/"
                          underline="hover"
                          color="text.secondary"
                          variant="body2"
                        >
                          @aliconnors
                        </Link>
                      </Stack>
                    }
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
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
                        <Link
                          href="/"
                          underline="hover"
                          color="text.secondary"
                          variant="body2"
                        >
                          @aliconnors
                        </Link>
                      </Stack>
                    }
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
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
                        <Link
                          href="/"
                          underline="hover"
                          color="text.secondary"
                          variant="body2"
                        >
                          @aliconnors
                        </Link>
                      </Stack>
                    }
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
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
                        <Link
                          href="/"
                          underline="hover"
                          color="text.secondary"
                          variant="body2"
                        >
                          @aliconnors
                        </Link>
                      </Stack>
                    }
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
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
                        <Link
                          href="/"
                          underline="hover"
                          color="text.secondary"
                          variant="body2"
                        >
                          @aliconnors
                        </Link>
                      </Stack>
                    }
                  />
                </ListItem>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
