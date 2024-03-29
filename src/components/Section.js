import React from 'react';
import Box from '@mui/material/Box';
import { emphasize } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import BackgroundImage from 'components/BackgroundImage';
import { capitalize } from '@mui/material/utils';

const PREFIX = 'Section';

const classes = {
  root: `${PREFIX}-root`,
  subtitle: `${PREFIX}-subtitle`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`& .${classes.root}`]: {
    position: 'relative',
    // Ensure child <Container> is above background
    // image (if one is set with the bgImage prop).
    '& > .MuiContainer-root': {
      position: 'relative',
    },
  },

  [`& .${classes.subtitle}`]: {
    // Subtitle text generally isn't very long
    // so usually looks better to limit width.
    maxWidth: 700,
    // So we can have max-width but still
    // have alignment controlled by text-align.
    display: 'inline-block',
  },

  // Create color classes that set background color and determine
  // text color and dividing border automatically based on background color.
  // Adds the keys colorDefault, colorLight, etc
  ...[
    ['default', theme.palette.background.default],
    ['light', emphasize(theme.palette.background.default, 0.03)],
    ['primary', theme.palette.primary.main],
    ['secondary', theme.palette.secondary.main],
  ].reduce((acc, [name, value]) => {
    acc[`color${capitalize(name)}`] = {
      backgroundColor: value,
      // Ensure text is legible on background
      color: theme.palette.getContrastText(value),
      // Sibling selector that adds a top border if section above
      // has the same color class.
      // We use emphasize to compute border based on background color
      // and make sure it's always lightly visible.
      [`& + &`]: {
        borderTop: `1px solid ${emphasize(value, 0.09)}`,
      },
    };
    return acc;
  }, {}),

  colorInherit: {
    color: 'inherit',
  },

  colorTransparent: {
    backgroundColor: 'transparent',
    color: 'inherit',
  },
}));

// const useStyles = makeStyles((theme) => ({}));

function Section(props) {
  // const classes = useStyles();

  const {
    bgColor = 'default',
    bgImage,
    bgImageOpacity,
    size = 'normal',
    className,
    children,
    ...otherProps
  } = props;

  // Get MUI responsize size object based
  // on size prop (normal, medium, large, auto)
  const verticalPadding = {
    normal: { xs: 6 },
    medium: { xs: 6, sm: 10 },
    large: { xs: 6, sm: 20 },
    auto: 0,
  }[size];

  return (
    <StyledBox
      component="section"
      py={verticalPadding}
      className={
        classes.root +
        ` ${classes[`color${capitalize(bgColor)}`]}` +
        (className ? ` ${className}` : '')
      }
      {...otherProps}
    >
      {bgImage && <BackgroundImage image={bgImage} opacity={bgImageOpacity} />}

      {props.children}
    </StyledBox>
  );
}

export default Section;
