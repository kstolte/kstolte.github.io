import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Section from 'components/Section';
import SectionHeader from 'components/SectionHeader';

function HeroSection2(props) {
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
          />
        </Box>
      </Container>
    </Section>
  );
}

export default HeroSection2;
