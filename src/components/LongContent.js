import React from 'react';
import { styled } from '@mui/material/styles';
const PREFIX = 'LongContent';

const classes = {
  root: `${PREFIX}-root`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  // Style nested HTML elements so that
  // long-form content doesn't have to use
  // components to match MUI style
  [`&.${classes.root}`]: {
    ...theme.typography.body1,
    '& h1': {
      ...theme.typography.h4,
      fontWeight: 600,
    },
    '& h2': {
      ...theme.typography.h5,
      fontWeight: 600,
    },
    '& h3': {
      ...theme.typography.h6,
      fontWeight: 600,
    },
    '& a': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }
}));

function LongContent(props) {


  return <Root className={classes.root}>{props.children}</Root>;
}

export default LongContent;
