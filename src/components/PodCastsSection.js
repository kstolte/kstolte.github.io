import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Section from './Section';
import SectionHeader from './SectionHeader';

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
      avatar: 'https://uploads.divjoy.com/pravatar-150x-5.jpeg',
      name: '99% invisible',
    },
    {
      avatar: 'https://uploads.divjoy.com/pravatar-150x-48.jpeg',
      name: 'Stuff You Should Know',
    },
    {
      avatar: 'https://uploads.divjoy.com/pravatar-150x-12.jpeg',
      name: 'Revisionist History',
    },
    {
      avatar: 'https://uploads.divjoy.com/pravatar-150x-12.jpeg',
      name: 'Cautionary Tales with Tim Harford',
    },
    {
      avatar: 'https://uploads.divjoy.com/pravatar-150x-12.jpeg',
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
                  />
                </Box>
                <CardContent>
                  <Box textAlign="center">
                    <Typography variant="body1" component="p">
                      "{item.testimonial}"
                    </Typography>
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