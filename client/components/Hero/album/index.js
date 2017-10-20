import ballotMobile from './hero_ballot-920x282.jpg';
import ballotTablet from './hero_ballot-1323x405.jpg';
import ballotDesktop from './hero_ballot-2400x810.jpg';

import boothTablet from './hero_booth-1200x650.jpg';
import boothDesktop from './hero_booth.jpg';

const images = {
  ballot: {
    mobile: ballotMobile,
    tablet: ballotTablet,
    desktop: ballotDesktop,
  },
  booth: {
    mobile: boothTablet,
    tablet: boothTablet,
    desktop: boothDesktop,
  },
};

export default function() {
  const breakpoints = [
    {
      name: 'mobile',
      test: width => (width <= 759),
    },
    {
      name: 'tablet',
      test: width => (width >= 760 && width <= 959),
    },
    {
      name: 'desktop',
      test: width => (width >= 960),
    },
  ];

  const breakpoint = breakpoints.find(breakpoint => breakpoint.test(window.innerWidth)).name;

  const map = {};

  Object.keys(images).map(key => {
    map[key] = images[key][breakpoint];
  });

  return map;
}
