import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import Layout from '../../components/Layout';
import TextField from '@mui/material/TextField';

export default function AddMessage() {
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
          <Typography
            variant="h5"
            component="h1"
            color="text.primary"
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Add Message
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Stack>
            <TextField
              id=""
              label="Title"
              multiline
              rows={1}
              sx={{ my: 1, width: '100%' }}
            />
            <TextField
              id=""
              label="Message"
              multiline
              rows={4}
              sx={{ my: 1, width: '100%' }}
            />
            <Stack direction="row" justifyContent="flex-end">
              <Button
                color="primary"
                variant="contained"
                startIcon={<EditIcon />}
                sx={{ my: 2, mr: 2, borderRadius: 5, textTransform: 'none' }}
              >
                Message
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Layout>
  );
}
