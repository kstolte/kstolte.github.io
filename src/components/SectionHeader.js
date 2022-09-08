import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    // Add bottom margin if element below
    '&:not(:last-child)': {
      marginBottom: '2rem',
    },
  },
  subtitle: {
    // Subtitle text generally isn't very long
    // so usually looks better to limit width.
    maxWidth: 700,
    // So we can have max-width but still
    // have alignment controlled by text-align.
    display: 'inline-block',
  },
}));

function SectionHeader(props) {
  const classes = useStyles();

  const { subtitle, title, size, className, ...otherProps } = props;

  // Render nothing if no title or subtitle
  if (!title && !subtitle) {
    return null;
  }

  return (
    <Box
      component="header"
      className={classes.root + (props.className ? ` ${props.className}` : '')}
      {...otherProps}
    >
      {title && (
        <Typography
          variant={`h${size}`}
          gutterBottom={props.subtitle ? true : false}
        >
          {title}
        </Typography>
      )}

      {subtitle && (
        <Typography variant="subtitle1" className={classes.subtitle}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

export default SectionHeader;
