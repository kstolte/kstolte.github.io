import React from 'react';
import Meta from './../components/Meta';
import HeroSection from './../components/HeroSection';
import ClientsSection from './../components/ClientsSection';
import FeaturesSection from './../components/FeaturesSection';
import TestimonialsSection from './../components/TestimonialsSection';
import NewsletterSection from './../components/NewsletterSection';

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Keith Stolte"
        subtitle="Hi, I'm Keith. I like making things blazing and keeping them fast."
        image="/images/headShot.png"
        buttonText="More about me"
        buttonColor="primary"
        buttonPath="/about"
      />
      <FeaturesSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Features"
        subtitle="All the features you need to move faster"
      />
    </>
  );
}

export default IndexPage;
