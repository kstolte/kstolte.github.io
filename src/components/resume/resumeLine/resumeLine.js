import React from 'react';
import { Chip, Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Section from '../../Section';

const useStyles = makeStyles((theme) => ({
  itemsContainer: {
    marginTop: 60,
  },
  row: {
    // // Reverse every other row
    // '&:nth-of-type(even)': {
    //   flexDirection: 'row-reverse',
    // },

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

export const ResumeLine = (props) => {
  const classes = useStyles();
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
        <Box>
          <Typography variant="body1">{jobSummary}</Typography>
          <RolesList roles={jobDetails} />
          <TechnologyStack techStack={techStack} />
        </Box>
      </Grid>
    </Section>
  );
};
// return (
//   <Section>
//     <div>
//       <div>
//         <h2 className="is-marginless">{jobTitle}</h2>
//       </div>
//       <div>
//         <p className="has-text-weight-light">
//           {startDate} - {endDate || 'Present'}
//         </p>
//       </div>
//     </div>
//     <div isMarginless>
//       <div>
//         <p className="has-text-weight-light">{employer}</p>
//       </div>
//       <div>
//         <p className="has-text-weight-light">{location}</p>
//       </div>
//     </div>
//     <p className="is-marginless has-text-justified">{jobSummary}</p>
//     <RolesList roles={jobDetails} />
//     <TechnologyStack techStack={techStack} />
//   </Section>
// );

const RolesList = (props) => {
  const { roles } = props;
  if (!roles) return <></>;
  return (
    <ul>
      {roles.map((role) => (
        <li>{role}</li>
      ))}
    </ul>
  );
};

const TechnologyStack = (props) => {
  const { techStack } = props;
  if (!techStack) return null;
  return (
    <div>
      <Typography variant="subtitle">Technology Stack</Typography>
      <div>
        {techStack.map((tech) => (
          <Chip label={tech} color="primary" />
        ))}
      </div>
    </div>
  );
};
