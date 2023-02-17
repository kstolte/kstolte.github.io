import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Link from 'next/link';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import { useDarkMode } from 'util/theme';
import Image from 'next/image';

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

  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  return (
    <Section bgColor={props.color} size="auto">
      <AppBar position="static" color="transparent" elevation={0}>
        <Container disableGutters={true}>
          <Toolbar>
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={120}
                height={28}
                className={classes.logo}
              />
            </Link>
            <div className={classes.spacer} />
            <Hidden smUp={true} implementation="css">
              <IconButton
                onClick={() => {
                  setDrawerOpen(true);
                }}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden xsDown={true} implementation="css">
              <Button component="a" href="/about" color="inherit">
                About
              </Button>
              <Button component="a" href="/resume-cv" color="inherit">
                Résume / CV
              </Button>
              <Button component="a" href="/blog" color="inherit">
                Blog
              </Button>

              <IconButton
                color="inherit"
                onClick={darkMode.toggle}
                style={{ opacity: 0.6 }}
              >
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
          <ListItem component="a" href="/about" button={true}>
            <ListItemText>About</ListItemText>
          </ListItem>
          <ListItem component="a" href="/resume-cv" button={true}>
            <ListItemText>Résume / CV</ListItemText>
          </ListItem>
          <ListItem component="a" href="/blog" button={true}>
            <ListItemText>Blog</ListItemText>
          </ListItem>
          <ListItem>
            <IconButton
              color="inherit"
              onClick={darkMode.toggle}
              style={{ opacity: 0.6 }}
            >
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
