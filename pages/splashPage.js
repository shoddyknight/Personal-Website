import React from 'react';

import { PictureCard } from '@kiwicom/orbit-components';

import css from './SplashPage.module.css';

const enterSite = () => {
  // TODO redirect to internal page, probably using react-router
  // eslint-disable-next-line no-undef
  window.open('https://github.com/shoddyknight');
};

const timIconSplash = () =>
  <PictureCard
    height="600px"
    width="600px"
    image={{
      original: '600x600',
      // onClick: "GoToPage"
      placeholder: '600x600',
      name: 'Tim K piccrew',
      src: '/images/Timbo.jpg',
    }}
    onClick={enterSite}
    title="Tim Knight"
  >
    Non-Binary Engineering Leader (they/them)
  </PictureCard>;

const SplashPage = () =>
  <div className={css.container}>
    {timIconSplash()}
  </div>;

export default SplashPage;
