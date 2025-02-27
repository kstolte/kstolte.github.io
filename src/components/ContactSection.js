import React from 'react';
import Container from '@mui/material/Container';
import Section from 'components/Section';
import SectionHeader from 'components/SectionHeader';

function ContactSection(props) {
  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container maxWidth="md">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <p>
          Please contact me at{' '}
          <a href="mailto:hello@keithstolte.io">hello@keithstolte.io</a>. I will
          try to get back to you as soon as possible.
        </p>
      </Container>
    </Section>
  );
}

export default ContactSection;
