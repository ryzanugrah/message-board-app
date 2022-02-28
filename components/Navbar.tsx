import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Link from '@mui/material/Link';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

type Anchor = 'left';

const settings = ['Profile', 'Logout'];

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 3 : 0,
  });
}

const Navbar = (props: Props) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const [state, setState] = React.useState({
    left: false,
  });

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link href="/user" underline="none" onClick={handleCloseNavMenu}>
          <ListItem
            button
            sx={{
              my: 1,
              color: 'text.primary',
              fontWeight: 500,
            }}
          >
            Users
          </ListItem>
        </Link>
        <Link href="/login" underline="none" onClick={handleCloseNavMenu}>
          <ListItem
            button
            sx={{
              my: 1,
              color: 'text.primary',
              fontWeight: 500,
            }}
          >
            Login
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <ElevationScroll {...props}>
      <AppBar position="sticky" elevation={0} sx={{ backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
                <Link href="/" color="text.primary" underline="none">
                  {process.env.appName}
                </Link>
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                  <IconButton
                    aria-label="open drawer"
                    onClick={toggleDrawer(anchor, true)}
                    color="default"
                  >
                    <MenuIcon />
                  </IconButton>
                  <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    {list(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              <Link href="/" color="text.primary" underline="none">
                {process.env.appName}
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              <Link
                href="/user"
                underline="none"
                onClick={handleCloseNavMenu}
                sx={[
                  { mx: 2, my: 2, color: 'text.primary', display: 'block' },
                  (theme) => ({
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }),
                ]}
              >
                Users
              </Link>
              <Link
                href="/login"
                underline="none"
                onClick={handleCloseNavMenu}
                sx={[
                  { mx: 2, my: 2, color: 'text.primary', display: 'block' },
                  (theme) => ({
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }),
                ]}
              >
                Login
              </Link>
            </Box>
            <Box sx={{ flexGrow: 0, ml: 2 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="" src="" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <ListItemButton component="a" href="/profile">
                  <ListItemText primary="Profile" />
                </ListItemButton>
                <ListItemButton component="a" href="/">
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};
export default Navbar;
