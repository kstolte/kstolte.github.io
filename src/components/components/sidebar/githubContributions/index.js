import React from 'react';

const GitHubContributions = props => {
  const { contributions } = props;
  const { edges } = contributions.data.viewer.repositoriesContributedTo;

  return (
    <section className="hero is-small is-github">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-bold">
            <i className="fab fa-github" />
            GitHub
          </h1>
          <h2 className="subtitle">Contributed Repositories</h2>
          {edges.map(node => (
            <GitHubContributionLine node={node.node} />
          ))}
        </div>
      </div>
    </section>
  );
};

const GitHubContributionLine = props => {
  const { node } = props;

  return (
    <article className="media">
      <figure className="media-left">
        <p className="image is-32x32">
          <img src={node.owner.avatarUrl} alt={`${node.name} repo`} />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <a href="{{ repo.node.url }}" target="_blank">
            {node.owner.login} - {node.name}
          </a>
        </div>
      </div>
    </article>
  );
};

export default GitHubContributions;
