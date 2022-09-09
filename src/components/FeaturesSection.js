import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import SectionHeader from 'components/SectionHeader';
import Image from 'next/image';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  itemsContainer: {
    marginTop: 60,
  },
  row: {
    // Reverse every other row
    '&:nth-of-type(even)': {
      flexDirection: 'row-reverse',
    },

    // Spacing between rows
    '&:not(:last-child)': {
      marginBottom: `${theme.spacing(3)}px`,
    },
  },
  figure: {
    maxWidth: 300,
    margin: '30px auto',
  },
  image: {
    height: 'auto',
    maxWidth: '100%',
  },
}));

function FeaturesSection(props) {
  const classes = useStyles();

  const items = [
    {
      title: 'Be Curious',
      description: `I think that it is easier to think outside the box, when there is not a box. A little curiousity can go a long way in expanding your horizons. This ties directly into the Explore Tenant.
        
        It's ok to be opinionated, but hold the opinions loosely.
        `,
      image: 'https://uploads.divjoy.com/undraw-balloons_vxx5.svg',
    },
    {
      title: 'Data Driven',
      description:
        'Trust but verify. Know what the data being presented represents. Know how the data is being sourced and ensure that that pipeline is secure enough for the decisions made based on that data.',
      image: 'https://uploads.divjoy.com/undraw-mind_map_cwng.svg',
    },
    {
      title: 'Shift Left / Fail Fast',
      description: ``,
      image: 'https://uploads.divjoy.com/undraw-personal_settings_kihd.svg',
      learnMoreLink: '/blog/post/shift-left',
    },
    {
      title: 'Detail Oriented',
      description: 'Ask the probing questions. Be an active listener.',
      image: 'https://uploads.divjoy.com/undraw-mind_map_cwng.svg',
    },
    {
      title: 'Explore',
      description:
        'Get out there and explore things, you never know what you might find or learn along the way.',
      image: 'https://uploads.divjoy.com/undraw-balloons_vxx5.svg',
    },
    {
      title: 'Have fun',
      description:
        'Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.',
      image: 'https://uploads.divjoy.com/undraw-having_fun_iais.svg',
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Container
          maxWidth="md"
          disableGutters={true}
          className={classes.itemsContainer}
        >
          {items.map((item, index) => (
            <Grid
              className={classes.row}
              container={true}
              item={true}
              alignItems="center"
              spacing={4}
              key={index}
            >
              <Grid item={true} xs={12} md={6}>
                <Box
                  textAlign={{
                    xs: 'center',
                    md: 'left',
                  }}
                >
                  <Typography variant="h5" gutterBottom={true}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1">
                    {item.description}
                  </Typography>
                  {item.learnMoreLink && (
                    <Link href={item.learnMoreLink}>Learn More</Link>
                  )}
                </Box>
              </Grid>
              <Grid item={true} xs={12} md={6}>
                <figure className={classes.figure}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    className={classes.image}
                    width={300}
                    height={250.6875}
                  />
                </figure>
              </Grid>
            </Grid>
          ))}
        </Container>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
