import React from 'react';
import Container from '@material-ui/core/Container';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import LinkMui from '@material-ui/core/Link';
import Twitter from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import { useDarkMode } from 'util/theme';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  sticky: {
    marginTop: 'auto',
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  item: {
    display: 'flex',
    flex: 'none',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 24,
    [theme.breakpoints.up('sm')]: {
      flex: '50%',
    },
  },
  brand: {
    display: 'block',
    height: 32,
  },
  social: {
    alignItems: 'flex-end',
  },
  link: {
    color: 'inherit',
    lineHeight: 1,
    '&:not(:last-of-type)': {
      marginRight: '1.2rem',
    },
  },
  left: {
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-start',
    },
  },
  right: {
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-end',
    },
  },
  // Move links to end (bottom right)
  // Swaps position with social
  smallLinks: {
    [theme.breakpoints.up('sm')]: {
      order: 1,
    },
  },
  legal: {
    opacity: 0.6,
    fontSize: '0.875rem',
    '& a': {
      color: 'inherit',
      marginLeft: '0.8rem',
    },
  },
}));

function Footer(props) {
  const classes = useStyles();

  const darkMode = useDarkMode();
  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  return (
    <Section
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
              <a>
                <Image src={logo} alt="Logo" className={classes.brand} />
              </a>
            </Link>
          </div>
          <div
            className={`${classes.item} ${classes.right} ${classes.smallLinks}`}
          >
            <Typography>
              <Link href="/about" passHref={true}>
                <LinkMui className={classes.link}>About</LinkMui>
              </Link>
              <Link href="/contact" passHref={true}>
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
    </Section>
  );
}

export default Footer;
