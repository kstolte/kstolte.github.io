import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
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
import Section from 'components/Section';
import { useDarkMode } from 'util/theme';
import Image from 'next/image';

const PREFIX = 'Navbar';

const classes = {
  logo: `${PREFIX}-logo`,
  drawerList: `${PREFIX}-drawerList`,
  spacer: `${PREFIX}-spacer`
};

const StyledSection = styled(Section)((
  {
    theme
  }
) => ({
  [`& .${classes.logo}`]: {
    height: 50,
    marginRight: theme.spacing(2),
  },

  [`& .${classes.drawerList}`]: {
    width: 250,
  },

  [`& .${classes.spacer}`]: {
    flexGrow: 1,
  }
}));

function Navbar(props) {


  const darkMode = useDarkMode();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  return (
    <StyledSection bgColor={props.color} size="auto">
      <AppBar position="static" color="transparent" elevation={0}>
        <Container disableGutters={true}>
          <Toolbar>
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={120}
                height={50}
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
                size="large">
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden mdDown={true} implementation="css">
              <Button
                component="a"
                href="https://keithstolte.io/toSql"
                color="inherit"
              >
                To SQL Tool
              </Button>
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
              size="large">
              {darkMode.value && <NightsStayIcon />}

              {!darkMode.value && <WbSunnyIcon />}
            </IconButton>
          </ListItem>
        </List>
      </Drawer>
    </StyledSection>
  );
}

export default Navbar;
