import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { makeStyles } from 'tss-react/mui';
import Section from './Section';
import SectionHeader from './SectionHeader';
import { Link } from './../util/router';

const useStyles = makeStyles()((theme) => ({
  // Increase <Container> padding so it's
  // at least half of <Grid> spacing to
  // avoid horizontal scroll on mobile.
  // See https://material-ui.com/components/grid/#negative-margin
  container: {
    padding: `0 ${theme.spacing(3)}`,
  },
  image: {
    margin: '0 auto',
    maxWidth: 570,
    display: 'block',
    height: 'auto',
    width: '100%',
  },
}));

function HeroSection(props) {
  const { classes } = useStyles();

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className={classes.container}>
        <Grid container={true} alignItems="center" spacing={6}>
          <Grid container={true} item={true} direction="column" xs={12} md={6}>
            <Box textAlign={{ xs: 'center', md: 'left' }}>
              <SectionHeader
                title={props.title}
                subtitle={props.subtitle}
                size={4}
              />
              <Button
                component={Link}
                to={props.buttonPath}
                variant="contained"
                size="large"
                color={props.buttonColor}
              >
                {props.buttonText}
              </Button>
            </Box>
          </Grid>
          <Grid item={true} xs={12} md={true}>
            <figure>
              <img
                src={props.image}
                alt="illustration"
                className={classes.image}
              />
            </figure>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default HeroSection;
