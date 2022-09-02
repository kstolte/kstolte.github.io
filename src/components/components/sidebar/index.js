import React from 'react';

import { contributions } from '../../providers/data';
import GitHubContributionList from './githubContributions';
import AboutMe from './aboutMe';

export default function Sidebar() {
  return (
    <div className="container column is-one-third">
      <AboutMe />
      <GitHubContributionList contributions={contributions} />
    </div>
  );
}
