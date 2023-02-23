import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Section from 'components/Section';
import SectionHeader from 'components/SectionHeader';
import Image from 'next/image';

const PREFIX = 'HeroSection';

const classes = {
  container: `${PREFIX}-container`,
  image: `${PREFIX}-image`
};

const StyledSection = styled(Section)((
  {
    theme
  }
) => ({
  // Increase <Container> padding so it's
  // at least half of <Grid> spacing to
  // avoid horizontal scroll on mobile.
  // See https://material-ui.com/components/grid/#negative-margin
  [`& .${classes.container}`]: {
    padding: `0 ${theme.spacing(3)}`,
  },

  [`& .${classes.image}`]: {
    margin: '0 auto',
    maxWidth: 570,
    display: 'block',
    height: 'auto',
    width: '100%',
  }
}));

function HeroSection(props) {


  return (
    <StyledSection
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
              <Link href={props.buttonPath} passHref={true} legacyBehavior>
                <Button
                  variant="contained"
                  size="large"
                  color={props.buttonColor}
                >
                  {props.buttonText}
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item={true} xs={12} md={true}>
            <figure>
              <Image
                width={472}
                height={428}
                src={props.image}
                alt="illustration"
                className={classes.image}
              />
            </figure>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  );
}

export default HeroSection;
