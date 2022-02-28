import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MessageIcon from '@mui/icons-material/Message';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

export default function MessageList() {
  return (
    <Container maxWidth="lg" sx={{ minHeight: 'calc(100vh - 200px)' }}>
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
            Message
          </Typography>
          <Button
            color="primary"
            variant="contained"
            href="/create"
            startIcon={<MessageIcon />}
            sx={{ borderRadius: 5, textTransform: 'none' }}
          >
            Add Message
          </Button>
        </Stack>
        <List sx={{ width: '100%' }}>
          <Link href="/message" underline="none" color="text.primary">
            <ListItem alignItems="flex-start" sx={{ ml: -2 }}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{ fontWeight: 500 }}
                    component="h2"
                    color="text.primary"
                  >
                    Brunch this weekend?
                  </Typography>
                }
                secondary={
                  <Stack direction="row" alignItems="center">
                    <React.Fragment>
                      <Link href="/profile" underline="none">
                        <Button sx={{ color: 'rgba(0, 0, 0, 0.4)' }}>
                          <Avatar sx={{ width: 24, height: 24 }} />
                          <Typography
                            sx={{
                              display: 'inline',
                              px: 1,
                              textTransform: 'none',
                            }}
                            component="span"
                            variant="body2"
                            color="text.secondary"
                          >
                            Ali Connors
                          </Typography>
                        </Button>
                      </Link>
                      <Button
                        sx={{ color: 'rgba(0, 0, 0, 0.4)' }}
                        startIcon={<MessageIcon />}
                      >
                        5
                      </Button>
                    </React.Fragment>
                  </Stack>
                }
              />
            </ListItem>
          </Link>
          <Divider variant="inset" />
          <Link href="/message" underline="none" color="text.primary">
            <ListItem alignItems="flex-start" sx={{ ml: -2 }}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{ fontWeight: 500 }}
                    component="h2"
                    color="text.primary"
                  >
                    Brunch this weekend?
                  </Typography>
                }
                secondary={
                  <Stack direction="row" alignItems="center">
                    <React.Fragment>
                      <Link href="/" underline="none">
                        <Button sx={{ color: 'rgba(0, 0, 0, 0.4)' }}>
                          <Avatar sx={{ width: 24, height: 24 }} />
                          <Typography
                            sx={{
                              display: 'inline',
                              px: 1,
                              textTransform: 'none',
                            }}
                            component="span"
                            variant="body2"
                            color="text.secondary"
                          >
                            Ali Connors
                          </Typography>
                        </Button>
                      </Link>
                      <Button
                        sx={{ color: 'rgba(0, 0, 0, 0.4)' }}
                        startIcon={<MessageIcon />}
                      >
                        5
                      </Button>
                    </React.Fragment>
                  </Stack>
                }
              />
            </ListItem>
          </Link>
          <Divider variant="inset" />
          <Link href="/message" underline="none" color="text.primary">
            <ListItem alignItems="flex-start" sx={{ ml: -2 }}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{ fontWeight: 500 }}
                    component="h2"
                    color="text.primary"
                  >
                    Brunch this weekend?
                  </Typography>
                }
                secondary={
                  <Stack direction="row" alignItems="center">
                    <React.Fragment>
                      <Link href="/" underline="none">
                        <Button sx={{ color: 'rgba(0, 0, 0, 0.4)' }}>
                          <Avatar sx={{ width: 24, height: 24 }} />
                          <Typography
                            sx={{
                              display: 'inline',
                              px: 1,
                              textTransform: 'none',
                            }}
                            component="span"
                            variant="body2"
                            color="text.secondary"
                          >
                            Ali Connors
                          </Typography>
                        </Button>
                      </Link>
                      <Button
                        sx={{ color: 'rgba(0, 0, 0, 0.4)' }}
                        startIcon={<MessageIcon />}
                      >
                        5
                      </Button>
                    </React.Fragment>
                  </Stack>
                }
              />
            </ListItem>
          </Link>
          <Divider variant="inset" />
          <Link href="/message" underline="none" color="text.primary">
            <ListItem alignItems="flex-start" sx={{ ml: -2 }}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{ fontWeight: 500 }}
                    component="h2"
                    color="text.primary"
                  >
                    Brunch this weekend?
                  </Typography>
                }
                secondary={
                  <Stack direction="row" alignItems="center">
                    <React.Fragment>
                      <Link href="/" underline="none">
                        <Button sx={{ color: 'rgba(0, 0, 0, 0.4)' }}>
                          <Avatar sx={{ width: 24, height: 24 }} />
                          <Typography
                            sx={{
                              display: 'inline',
                              px: 1,
                              textTransform: 'none',
                            }}
                            component="span"
                            variant="body2"
                            color="text.secondary"
                          >
                            Ali Connors
                          </Typography>
                        </Button>
                      </Link>
                      <Button
                        sx={{ color: 'rgba(0, 0, 0, 0.4)' }}
                        startIcon={<MessageIcon />}
                      >
                        5
                      </Button>
                    </React.Fragment>
                  </Stack>
                }
              />
            </ListItem>
          </Link>
          <Divider variant="inset" />
          <Link href="/message" underline="none" color="text.primary">
            <ListItem alignItems="flex-start" sx={{ ml: -2 }}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{ fontWeight: 500 }}
                    component="h2"
                    color="text.primary"
                  >
                    Brunch this weekend?
                  </Typography>
                }
                secondary={
                  <Stack direction="row" alignItems="center">
                    <React.Fragment>
                      <Link href="/" underline="none">
                        <Button sx={{ color: 'rgba(0, 0, 0, 0.4)' }}>
                          <Avatar sx={{ width: 24, height: 24 }} />
                          <Typography
                            sx={{
                              display: 'inline',
                              px: 1,
                              textTransform: 'none',
                            }}
                            component="span"
                            variant="body2"
                            color="text.secondary"
                          >
                            Ali Connors
                          </Typography>
                        </Button>
                      </Link>
                      <Button
                        sx={{ color: 'rgba(0, 0, 0, 0.4)' }}
                        startIcon={<MessageIcon />}
                      >
                        5
                      </Button>
                    </React.Fragment>
                  </Stack>
                }
              />
            </ListItem>
          </Link>
          <Divider variant="inset" />
          <Link href="/message" underline="none" color="text.primary">
            <ListItem alignItems="flex-start" sx={{ ml: -2 }}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{ fontWeight: 500 }}
                    component="h2"
                    color="text.primary"
                  >
                    Brunch this weekend?
                  </Typography>
                }
                secondary={
                  <Stack direction="row" alignItems="center">
                    <React.Fragment>
                      <Link href="/" underline="none">
                        <Button sx={{ color: 'rgba(0, 0, 0, 0.4)' }}>
                          <Avatar sx={{ width: 24, height: 24 }} />
                          <Typography
                            sx={{
                              display: 'inline',
                              px: 1,
                              textTransform: 'none',
                            }}
                            component="span"
                            variant="body2"
                            color="text.secondary"
                          >
                            Ali Connors
                          </Typography>
                        </Button>
                      </Link>
                      <Button
                        sx={{ color: 'rgba(0, 0, 0, 0.4)' }}
                        startIcon={<MessageIcon />}
                      >
                        5
                      </Button>
                    </React.Fragment>
                  </Stack>
                }
              />
            </ListItem>
          </Link>
          <Divider variant="inset" />
          <Link href="/message" underline="none" color="text.primary">
            <ListItem alignItems="flex-start" sx={{ ml: -2 }}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{ fontWeight: 500 }}
                    component="h2"
                    color="text.primary"
                  >
                    Brunch this weekend?
                  </Typography>
                }
                secondary={
                  <Stack direction="row" alignItems="center">
                    <React.Fragment>
                      <Link href="/" underline="none">
                        <Button sx={{ color: 'rgba(0, 0, 0, 0.4)' }}>
                          <Avatar sx={{ width: 24, height: 24 }} />
                          <Typography
                            sx={{
                              display: 'inline',
                              px: 1,
                              textTransform: 'none',
                            }}
                            component="span"
                            variant="body2"
                            color="text.secondary"
                          >
                            Ali Connors
                          </Typography>
                        </Button>
                      </Link>
                      <Button
                        sx={{ color: 'rgba(0, 0, 0, 0.4)' }}
                        startIcon={<MessageIcon />}
                      >
                        5
                      </Button>
                    </React.Fragment>
                  </Stack>
                }
              />
            </ListItem>
          </Link>
          <Divider variant="inset" />
          <Link href="/message" underline="none" color="text.primary">
            <ListItem alignItems="flex-start" sx={{ ml: -2 }}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{ fontWeight: 500 }}
                    component="h2"
                    color="text.primary"
                  >
                    Brunch this weekend?
                  </Typography>
                }
                secondary={
                  <Stack direction="row" alignItems="center">
                    <React.Fragment>
                      <Link href="/" underline="none">
                        <Button sx={{ color: 'rgba(0, 0, 0, 0.4)' }}>
                          <Avatar sx={{ width: 24, height: 24 }} />
                          <Typography
                            sx={{
                              display: 'inline',
                              px: 1,
                              textTransform: 'none',
                            }}
                            component="span"
                            variant="body2"
                            color="text.secondary"
                          >
                            Ali Connors
                          </Typography>
                        </Button>
                      </Link>
                      <Button
                        sx={{ color: 'rgba(0, 0, 0, 0.4)' }}
                        startIcon={<MessageIcon />}
                      >
                        5
                      </Button>
                    </React.Fragment>
                  </Stack>
                }
              />
            </ListItem>
          </Link>
          <Divider variant="inset" />
          <Link href="/message" underline="none" color="text.primary">
            <ListItem alignItems="flex-start" sx={{ ml: -2 }}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{ fontWeight: 500 }}
                    component="h2"
                    color="text.primary"
                  >
                    Brunch this weekend?
                  </Typography>
                }
                secondary={
                  <Stack direction="row" alignItems="center">
                    <React.Fragment>
                      <Link href="/" underline="none">
                        <Button sx={{ color: 'rgba(0, 0, 0, 0.4)' }}>
                          <Avatar sx={{ width: 24, height: 24 }} />
                          <Typography
                            sx={{
                              display: 'inline',
                              px: 1,
                              textTransform: 'none',
                            }}
                            component="span"
                            variant="body2"
                            color="text.secondary"
                          >
                            Ali Connors
                          </Typography>
                        </Button>
                      </Link>
                      <Button
                        sx={{ color: 'rgba(0, 0, 0, 0.4)' }}
                        startIcon={<MessageIcon />}
                      >
                        5
                      </Button>
                    </React.Fragment>
                  </Stack>
                }
              />
            </ListItem>
          </Link>
          <Divider variant="inset" />
          <Link href="/message" underline="none" color="text.primary">
            <ListItem alignItems="flex-start" sx={{ ml: -2 }}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{ fontWeight: 500 }}
                    component="h2"
                    color="text.primary"
                  >
                    Brunch this weekend?
                  </Typography>
                }
                secondary={
                  <Stack direction="row" alignItems="center">
                    <React.Fragment>
                      <Link href="/" underline="none">
                        <Button sx={{ color: 'rgba(0, 0, 0, 0.4)' }}>
                          <Avatar sx={{ width: 24, height: 24 }} />
                          <Typography
                            sx={{
                              display: 'inline',
                              px: 1,
                              textTransform: 'none',
                            }}
                            component="span"
                            variant="body2"
                            color="text.secondary"
                          >
                            Ali Connors
                          </Typography>
                        </Button>
                      </Link>
                      <Button
                        sx={{ color: 'rgba(0, 0, 0, 0.4)' }}
                        startIcon={<MessageIcon />}
                      >
                        5
                      </Button>
                    </React.Fragment>
                  </Stack>
                }
              />
            </ListItem>
          </Link>
          <Divider variant="inset" />
        </List>
      </Box>
    </Container>
  );
}
