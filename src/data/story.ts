export interface StoryEntry {
  date: string;
  text: string;
  image: string;
  imageAlt: string;
}

export const story: StoryEntry[] = [
  {
    date: 'September 2013',
    text: 'One fateful night in Camden Town, London. Sophia met Alex at the Worlds End in Camden. They did not exchange numbers.',
    image: '/images/story-4.png',
    imageAlt: 'The World\'s End pub, Camden Town',
  },
  {
    date: 'February 2015',
    text: '"We should probably make \'this\' official." One fine Valentines day after an Aspall cider in Hampstead Heath.',
    image: '/images/story-3.png',
    imageAlt: 'The Garden Gate pub, Hampstead',
  },
  {
    date: 'October 2015',
    text: 'They moved in together above a shoe shop in Kentish Town, London. So many memories, so little room.',
    image: '/images/story-2.png',
    imageAlt: 'Classic Shoe Repairs, Kentish Town',
  },
  {
    date: 'November 2016',
    text: 'They moved to Sweden, where unpredictable weather and an unshakable love for Mediterranean summers made it the only logical choice after leaving London.',
    image: '/images/story-6.png',
    imageAlt: 'Stockholm City Hall',
  },
  {
    date: 'June 2022',
    text: 'Engaged on the beach in Frösakull one Midsummer\'s morning. The longest day of the year somehow still felt pretty short.',
    image: '/images/story-5.png',
    imageAlt: 'Frösakull beach, Midsummer',
  },
  {
    date: 'December 2024',
    text: 'Married in the final light of the year, they celebrated with their closest family and promised each other this wouldn\'t be the last time they would get married.',
    image: '/images/story-1.png',
    imageAlt: 'Waxholm, Stockholm archipelago',
  },
];
