import React from 'react';

const AboutMe = props => {
  return (
    <section class="section">
      <div class="is-size-6">
        <figure class="image">
          <img src="assets/images/headShot.png" />
        </figure>
        <h1 class="title has-text-centered">Keith Stolte</h1>
        <ul class="fa-ul">
          <li class="email">
            <i class="fas fa-envelope" />
            <a href="mailto:keithrstolte@gmail.com">keithrstolte@gmail.com</a>
          </li>
          <li class="github">
            <i class="fab fa-github has-text-github" />
            <a href="https://www.github.com/kstolte" target="_blank">
              github.com/kstolte
            </a>
          </li>
          <li class="linkedin">
            <i class="fab fa-linkedin has-text-linkedin" />
            <a href="https://linkedin.com/in/keithrstolte" target="_blank">
              Profile
            </a>
          </li>
          <li class="twitter">
            <i class="fab fa-twitter has-text-twitter" />
            <a href="https://twitter.com/sqltrailblazer" target="_blank">
              @sqlTrailblazer
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
