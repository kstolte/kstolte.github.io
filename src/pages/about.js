import React from 'react';
import Meta from 'components/Meta';
import Section from 'components/Section';
import PodCastsSection from 'components/PodCastsSection';
import { Container } from '@material-ui/core';

function AboutPage(_props) {
  return (
    <>
      <Meta title="About" description="About Keith" />
      <Section>
        <Container>
          <p>
            I&apos;m currently the Director of Technology at Yellow Dog
            Software, a company that provides inventory management systems and
            point of sale integrations for hospitality businesses. In my six
            years at YD I&apos;ve operated as a developer, platform architect,
            and dev manager.
          </p>
          <p>
            In my spare time, when I&apos;m not fly fishing, skiing, or getting
            lost in the woods, I&apos;m learning and building in new
            technologies.
          </p>

          <h3>Current Tech Stack Interests</h3>
          <ul>
            <li>Carbon Design System</li>
            <li>Remix</li>
            <li>Next.js</li>
          </ul>

          <h3>Ask Me About</h3>
          <ul>
            <li>Time Zones</li>
            <li>SQL Server</li>
            <li>GraphQL</li>
          </ul>
        </Container>
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
