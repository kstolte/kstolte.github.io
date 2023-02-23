import React from 'react';
import { styled } from '@mui/material/styles';
// import { Chip, Grid, Typography, Box } from '@mui/material';
import { Chip, Grid, Typography, Box, Container } from '@mui/material';

import Section from '../../Section';

const PREFIX = 'ResumeLine';

const classes = {
  itemsContainer: `${PREFIX}-itemsContainer`,
  row: `${PREFIX}-row`,
  figure: `${PREFIX}-figure`,
  image: `${PREFIX}-image`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`& .${classes.itemsContainer}`]: {
    marginTop: 60,
  },

  [`& .${classes.row}`]: {
    // // Reverse every other row
    // '&:nth-of-type(even)': {
    //   flexDirection: 'row-reverse',
    // },

    // Spacing between rows
    '&:not(:last-child)': {
      marginBottom: theme.spacing(3),
    },
  },

  [`& .${classes.figure}`]: {
    maxWidth: 300,
    margin: '30px auto',
  },

  [`& .${classes.image}`]: {
    height: 'auto',
    maxWidth: '100%',
  }
}));

export const ResumeLine = (props) => {

  const {
    jobTitle,
    startDate,
    endDate,
    employer,
    location,
    jobSummary,
    jobDetails,
    techStack,
  } = props;

  return (
    <Section>
      <Container>
        <Grid
          className={classes.row}
          container={true}
          item={true}
          alignItems="center"
          spacing={4}
          // key={index}
        >
          <Grid item={true} xs={12} md={6}>
            <Box
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              <Typography variant="h5">{jobTitle}</Typography>
              <Typography variant="subtitle2">{employer}</Typography>
            </Box>
          </Grid>
          <Grid item={true} xs={12} md={6}>
            <Box
              textAlign={{
                xs: 'center',
                md: 'right',
              }}
            >
              <Typography variant="subtitle1">
                {startDate} - {endDate || 'Present'}
              </Typography>
              <Typography variant="subtitle2">{location}</Typography>
            </Box>
          </Grid>
          <Grid item={true}>
            <Box>
              <Typography variant="body1">{jobSummary}</Typography>
              <RolesList roles={jobDetails} />
              <TechnologyStack techStack={techStack} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

const RolesList = (props) => {
  const { roles } = props;
  if (!roles) return <></>;
  return (
    <ul>
      {roles.map((role, idx) => (
        <li key={idx}>{role}</li>
      ))}
    </ul>
  );
};

const TechnologyStack = (props) => {
  const { techStack } = props;
  if (!techStack) return null;
  return (
    <Root>
      <Typography variant="subtitle1">Technology Stack</Typography>
      <div>
        {techStack.map((tech, idx) => (
          <Chip label={tech} key={idx} color="primary" />
        ))}
      </div>
    </Root>
  );
};
