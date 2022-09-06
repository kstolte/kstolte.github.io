import React from 'react';
import Meta from './../components/Meta';
import HeroSection from './../components/HeroSection';
import FeaturesSection from './../components/FeaturesSection';

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
        title="Core Tenets"
        subtitle="Some of the things that make me, well... me."
      />
    </>
  );
}

export default IndexPage;
