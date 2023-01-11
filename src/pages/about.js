import React from 'react';
import Meta from 'components/Meta';
import Section from 'components/Section';
import PodCastsSection from 'components/PodCastsSection';

function AboutPage(_props) {
  return (
    <>
      <Meta title="About" description="About Keith" />
      <Section>
        <p>In my spare time, when I’m not fly fishing, skiing, or getting lost in the woods, I’m learning and building in new technologies.</p>
        <h3>Ask Me About</h3>
        <ul>
            <li>Time Zones</li>
            <li>SQL Server</li>
            <li>GraphQL</li>
        </ul>
      </Section>

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
