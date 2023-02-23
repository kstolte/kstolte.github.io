import React from 'react';
import { styled } from '@mui/material/styles';
const PREFIX = 'BackgroundImage';

const classes = {
  root: `${PREFIX}-root`
};

const Root = styled('div\n')((
  {
    theme
  }
) => ({
  [`& .${classes.root}`]: {
    content: '',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    zIndex: 0,
  }
}));

function BackgroundImage(props) {


  const { image, opacity, ...otherProps } = props;

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${image})`,
        opacity: opacity,
      }}
      {...otherProps}
    />
  );
}

export default BackgroundImage;
