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
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Layout from '../../components/Layout';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

export default function MessageDetail() {
  return (
    <Layout title="Message">
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
          <Divider sx={{ my: 2 }} />
          <Stack>
            <List sx={{ ml: -2, width: '100%' }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
              <Box sx={{ px: 2 }}>
                <Typography color="text.primary">
                  Oooof, My younger sister (23) got beat up so badly by her
                  boyfriend over some laundry and got taken to the hospital for
                  a dislocated shoulder and broken finger. My parents are filing
                  a report with the police and are pushing to have her
                  (hopefully ex) boyfriend charged.
                </Typography>
                <Typography color="text.primary" sx={{ pt: 2 }}>
                  My husband heard and his reaction was to lean back and say she
                  desreved it, and that she had it coming. Why? His excuse is
                  that my sister is being babied by my parents and that she isnt
                  fit to be in an adult relationship, moreover, he said her
                  boyfriend had probably hit his limit with her and basically
                  treated him as if he was the victim of abuse.
                </Typography>
              </Box>
            </List>
          </Stack>
          <Stack sx={{ ml: -2 }}>
            <Typography
              variant="h6"
              component="h2"
              color="text.primary"
              gutterBottom
              sx={{ fontWeight: 'medium', px: 2, py: 2 }}
            >
              Comments
            </Typography>
            <Grid container spacing={2} sx={{ px: 2 }}>
              <Grid item xs={2} sm={1} lg={0.7}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </Grid>
              <Grid item xs={10} sm={11} lg={11.3}>
                <TextField
                  id="outlined-multiline-static"
                  label="Comment"
                  multiline
                  rows={4}
                  sx={{ width: '100%' }}
                />
              </Grid>
            </Grid>
            <Stack direction="row" justifyContent="flex-end">
              <Button
                color="primary"
                variant="contained"
                startIcon={<EditIcon />}
                sx={{ my: 2, mr: 2, borderRadius: 5, textTransform: 'none' }}
              >
                Comment
              </Button>
            </Stack>
          </Stack>
          <Divider variant="inset" sx={{ my: 2 }} />
          <Stack sx={{ pl: 8 }}>
            <List sx={{ width: '100%' }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
              <Box sx={{ px: 2 }}>
                <Typography color="text.primary">
                  Oooof, My younger sister (23) got beat up so badly by her
                  boyfriend over some laundry and got taken to the hospital for
                  a dislocated shoulder and broken finger. My parents are filing
                  a report with the police and are pushing to have her
                  (hopefully ex) boyfriend charged.
                </Typography>
                <Typography color="text.primary" sx={{ pt: 2 }}>
                  My husband heard and his reaction was to lean back and say she
                  desreved it, and that she had it coming. Why? His excuse is
                  that my sister is being babied by my parents and that she isnt
                  fit to be in an adult relationship, moreover, he said her
                  boyfriend had probably hit his limit with her and basically
                  treated him as if he was the victim of abuse.
                </Typography>
              </Box>
            </List>
          </Stack>
          <Divider variant="inset" sx={{ my: 2 }} />
          <Stack sx={{ pl: 8 }}>
            <List sx={{ width: '100%' }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
              <Box sx={{ px: 2 }}>
                <Typography color="text.primary">
                  Oooof, My younger sister (23) got beat up so badly by her
                  boyfriend over some laundry and got taken to the hospital for
                  a dislocated shoulder and broken finger. My parents are filing
                  a report with the police and are pushing to have her
                  (hopefully ex) boyfriend charged.
                </Typography>
                <Typography color="text.primary" sx={{ pt: 2 }}>
                  My husband heard and his reaction was to lean back and say she
                  desreved it, and that she had it coming. Why? His excuse is
                  that my sister is being babied by my parents and that she isnt
                  fit to be in an adult relationship, moreover, he said her
                  boyfriend had probably hit his limit with her and basically
                  treated him as if he was the victim of abuse.
                </Typography>
              </Box>
            </List>
          </Stack>
          <Divider variant="inset" sx={{ my: 2 }} />
          <Stack sx={{ pl: 8 }}>
            <List sx={{ width: '100%' }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
              <Box sx={{ px: 2 }}>
                <Typography color="text.primary">
                  Oooof, My younger sister (23) got beat up so badly by her
                  boyfriend over some laundry and got taken to the hospital for
                  a dislocated shoulder and broken finger. My parents are filing
                  a report with the police and are pushing to have her
                  (hopefully ex) boyfriend charged.
                </Typography>
                <Typography color="text.primary" sx={{ pt: 2 }}>
                  My husband heard and his reaction was to lean back and say she
                  desreved it, and that she had it coming. Why? His excuse is
                  that my sister is being babied by my parents and that she isnt
                  fit to be in an adult relationship, moreover, he said her
                  boyfriend had probably hit his limit with her and basically
                  treated him as if he was the victim of abuse.
                </Typography>
              </Box>
            </List>
          </Stack>
          <Divider variant="inset" sx={{ my: 2 }} />
        </Box>
      </Container>
    </Layout>
  );
}
