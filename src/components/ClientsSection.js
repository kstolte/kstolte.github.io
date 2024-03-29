import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Section from 'components/Section';
import SectionHeader from 'components/SectionHeader';
import Image from 'next/image';

function ClientsSection(props) {
  const items = [
    {
      name: 'Instagram',
      image: 'https://uploads.divjoy.com/logo-instagram.svg',
      width: '150px',
    },
    {
      name: 'Slack',
      image: 'https://uploads.divjoy.com/logo-slack.svg',
      width: '135px',
    },
    {
      name: 'Tinder',
      image: 'https://uploads.divjoy.com/logo-tinder.svg',
      width: '90px',
    },
    {
      name: 'Spotify',
      image: 'https://uploads.divjoy.com/logo-spotify.svg',
      width: '135px',
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
        <Box textAlign="center">
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            size={4}
            textAlign="center"
          />
          <Grid container={true} justifyContent="center">
            {items.map((item, index) => (
              <Grid item={true} xs={12} md="auto" key={index}>
                <Box py={2} px={3}>
                  <Image src={item.image} width={item.width} alt={item.name} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Section>
  );
}

export default ClientsSection;
