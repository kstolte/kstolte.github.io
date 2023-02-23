import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import LinkMui from '@mui/material/Link';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import Section from 'components/Section';
import { useDarkMode } from 'util/theme';
import Image from 'next/image';

const PREFIX = 'Footer';

const classes = {
  sticky: `${PREFIX}-sticky`,
  wrapper: `${PREFIX}-wrapper`,
  item: `${PREFIX}-item`,
  brand: `${PREFIX}-brand`,
  social: `${PREFIX}-social`,
  link: `${PREFIX}-link`,
  left: `${PREFIX}-left`,
  right: `${PREFIX}-right`,
  smallLinks: `${PREFIX}-smallLinks`,
  legal: `${PREFIX}-legal`
};

const StyledSection = styled(Section)((
  {
    theme
  }
) => ({
  [`& .${classes.sticky}`]: {
    marginTop: 'auto',
  },

  [`& .${classes.wrapper}`]: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  [`& .${classes.item}`]: {
    display: 'flex',
    flex: 'none',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 24,
    [theme.breakpoints.up('sm')]: {
      flex: '50%',
    },
  },

  [`& .${classes.brand}`]: {
    display: 'block',
    height: 50,
    width: '120px',
    'min-width': '120px',
    'min-height': '24px',
    'max-height': '50px',
  },

  [`& .${classes.social}`]: {
    alignItems: 'flex-end',
  },

  [`& .${classes.link}`]: {
    color: 'inherit',
    lineHeight: 1,
    '&:not(:last-of-type)': {
      marginRight: '1.2rem',
    },
  },

  [`& .${classes.left}`]: {
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  [`& .${classes.right}`]: {
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-end',
    },
  },

  // Move links to end (bottom right)
  // Swaps position with social
  [`& .${classes.smallLinks}`]: {
    [theme.breakpoints.up('sm')]: {
      order: 1,
    },
  },

  [`& .${classes.legal}`]: {
    opacity: 0.6,
    fontSize: '0.875rem',
    '& a': {
      color: 'inherit',
      marginLeft: '0.8rem',
    },
  }
}));

function Footer(props) {


  const darkMode = useDarkMode();
  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  return (
    <StyledSection
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className={props.sticky && classes.sticky}
    >
      <Container>
        <div className={classes.wrapper}>
          <div className={`${classes.item} ${classes.left}`}>
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={120}
                height={50}
                className={classes.brand}
              />
            </Link>
          </div>
          <div
            className={`${classes.item} ${classes.right} ${classes.smallLinks}`}
          >
            <Typography>
              <Link href="/about" passHref={true} legacyBehavior>
                <LinkMui className={classes.link}>About</LinkMui>
              </Link>
              <Link href="/contact" passHref={true} legacyBehavior>
                <LinkMui className={classes.link}>Contact</LinkMui>
              </Link>
            </Typography>
          </div>
          <div className={`${classes.item} ${classes.right} ${classes.social}`}>
            <a
              href="https://github.com/kstolte"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <GitHub fontSize="small" />
            </a>
            <a
              href="https://www.linkedin.com/in/keithrstolte/"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <LinkedIn fontSize="small" />
            </a>
            <a
              href="https://twitter.com/sqlTrailblazer"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <Twitter fontSize="small" />
            </a>
          </div>
          <span className={`${classes.item} ${classes.legal} ${classes.left}`}>
            {props.copyright}
          </span>
        </div>
      </Container>
    </StyledSection>
  );
}

export default Footer;
