import React from 'react';
import Meta from 'components/Meta';
import HeroSection2 from 'components/HeroSection2';
import PodCastsSection from 'components/PodCastsSection';

function AboutPage(_props) {
  return (
    <>
      <Meta title="About" description="Learn about our company and team" />
      <HeroSection2
        bgColor="primary"
        size="large"
        bgImage="https://source.unsplash.com/FyD3OWBuXnY/1600x800"
        bgImageOpacity={0.2}
        title="Headline here"
        subtitle="Short Snippet here."
      />
      <PodCastsSection
        title="Favorite PodCasts"
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
      />
      {/* <TeamBiosSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      /> */}
    </>
  );
}

export default AboutPage;
