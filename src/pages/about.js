import React from 'react';
import Meta from 'components/Meta';
import HeroSection2 from 'components/HeroSection2';
import PodCastsSection from 'components/PodCastsSection';

function AboutPage(_props) {
  return (
    <>
      <Meta title="About" description="About Keith" />
      <HeroSection2
        bgColor="primary"
        size="large"
        bgImage="https://source.unsplash.com/FyD3OWBuXnY/1600x800"
        bgImageOpacity={0.2}
        title="Headline here"
        subtitle="In my spare time, when I’m not fly fishing, skiing, or getting lost in the woods, I’m learning and building in new technologies."
      />
      <p></p>
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
