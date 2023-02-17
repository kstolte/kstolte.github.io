import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import Section from 'components/Section';
import SectionHeader from 'components/SectionHeader';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

function PodCastsSection(props) {
  const classes = useStyles();

  const items = [
    {
      avatar: '/images/podcasts/99pi.png',
      name: '99% invisible',
    },
    {
      avatar: '/images/podcasts/sysk.jpg',
      name: 'Stuff You Should Know',
    },
    {
      avatar: '/images/podcasts/revisionistHistory.jpg',
      name: 'Revisionist History',
    },
    {
      avatar: '/images/podcasts/cautionaryTales.png',
      name: 'Cautionary Tales with Tim Harford',
    },
    {
      avatar: '/images/podcasts/hiddenbrain.webp',
      name: 'Hidden Brain',
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
        <Grid container={true} justifyContent="center" spacing={4}>
          {items.map((item, index) => (
            <Grid item={true} xs={12} sm={4} key={index}>
              <Card>
                <Box display="flex" justifyContent="center" pt={3}>
                  <Avatar
                    src={item.avatar}
                    alt={item.name}
                    className={classes.avatar}
                    variant="rounded"
                  />
                </Box>
                <CardContent>
                  <Box textAlign="center">
                    {/* <Typography variant="body1" component="p">
                      "{item.testimonial}"
                    </Typography> */}
                    <Box mt={3}>
                      <Typography variant="body2" component="p">
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.company}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default PodCastsSection;
