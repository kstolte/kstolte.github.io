import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import Section from './Section';
import SectionHeader from './SectionHeader';

const useStyles = makeStyles()((theme) => ({
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
      marginBottom: theme.spacing(3),
    },
  },
  blah: {
    whiteSpace: 'pre-line',
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
    description: `By shifting left this includes 

    - Writing tests that reflect real world usage patterns.
      - Prevents Regressions when coupled with CI workflows.
      - If a bug or feature is complicated to set up manually through the interface it can be much faster to iterate using a test. This allows for automated build up/ tear down of the scenarios and the ability to debug a known state.
        - If you encounter a bug that is difficult to replicate, think through the ways of how you could force the scenario to happen repeatidly. During this process you will have better clarity of what other downfalls might happen due to a change or what is currently uncaught in existing testing methods. 
    - Doing Design Mocks
      - Specifically UI mockups to prevent theoretical conversations about how the flow would work. No two people have the same concept of what something will look like based on a discussion.
      - This Design mocks will also inform or highlight other usage scenarios to make a stronger product. Lead the team to move towards collaborating during the mocking phase so that everyone stays on the same page. Then release the mock to stakeholders and get feedback. Consider this feedback and do not bok at it.
    - Use A/B Testing
      - compare the performance of the UI and back end changes in a structured manner.
      - Look for the same things across both ends of the change.`,
    image: 'https://uploads.divjoy.com/undraw-personal_settings_kihd.svg',
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

function FeaturesSection(props) {
  const { classes } = useStyles();

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
                  <Typography variant="subtitle1" className={classes.blah}>
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
              <Grid item={true} xs={12} md={6}>
                <figure className={classes.figure}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={classes.image}
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
