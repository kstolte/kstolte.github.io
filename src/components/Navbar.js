import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import makeStyles from '@mui/styles/makeStyles';
import Section from './Section';
import { Link } from './../util/router';
import { useDarkMode } from './../util/theme';

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 28,
    marginRight: theme.spacing(2),
  },
  drawerList: {
    width: 250,
  },
  spacer: {
    flexGrow: 1,
  },
}));

function Navbar(props) {
  const classes = useStyles();

  const darkMode = useDarkMode();
  const [drawerOpen, setDrawerOpen] = useState(false);
  // const [menuState, setMenuState] = useState(null);

  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  // const handleOpenMenu = (event, id) => {
  //   // Store clicked element (to anchor the menu to)
  //   // and the menu id so we can tell which menu is open.
  //   setMenuState({ anchor: event.currentTarget, id });
  // };

  // const handleCloseMenu = () => {
  //   setMenuState(null);
  // };

  return (
    <Section bgColor={props.color} size="auto">
      <AppBar position="static" color="transparent" elevation={0}>
        <Container disableGutters={true}>
          <Toolbar>
            <Link to="/">
              <img src={logo} alt="Logo" className={classes.logo} />
            </Link>
            <div className={classes.spacer} />
            <Hidden mdUp={true} implementation="css">
              <IconButton
                onClick={() => {
                  setDrawerOpen(true);
                }}
                color="inherit"
                size="large">
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden mdDown={true} implementation="css">
              <Button component={Link} to="/about" color="inherit">
                About
              </Button>
              <Button component={Link} to="/resume-cv" color="inherit">
                Résume / CV
              </Button>

              <IconButton
                color="inherit"
                onClick={darkMode.toggle}
                style={{ opacity: 0.6 }}
                size="large">
                {darkMode.value && <NightsStayIcon />}

                {!darkMode.value && <WbSunnyIcon />}
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List
          className={classes.drawerList}
          onClick={() => setDrawerOpen(false)}
        >
          <ListItem component={Link} to="/about" button={true}>
            <ListItemText>About</ListItemText>
          </ListItem>
          <ListItem component={Link} to="/resume-cv" button={true}>
            <ListItemText>Résume / CV</ListItemText>
          </ListItem>
          <ListItem>
            <IconButton
              color="inherit"
              onClick={darkMode.toggle}
              style={{ opacity: 0.6 }}
              size="large">
              {darkMode.value && <NightsStayIcon />}

              {!darkMode.value && <WbSunnyIcon />}
            </IconButton>
          </ListItem>
        </List>
      </Drawer>
    </Section>
  );
}

export default Navbar;
