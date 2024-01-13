import images from './images';

const wines = [
  {
    title: 'Château Margaux',
    price: '$120',
    tags: 'A classic Bordeaux red wine with rich flavors and a smooth finish. FR | Red | Bottle',
  },
  {
    title: 'Napa Valley Cabernet Sauvignon',
    price: '$95',
    tags: 'An elegant and full-bodied Cabernet Sauvignon from the renowned Napa Valley. US | Red | Bottle',
  },
  {
    title: 'Prosecco Extra Dry',
    price: '$40',
    tags: 'A sparkling Italian Prosecco with floral notes and a crisp, refreshing taste. IT | Sparkling | 750 ml',
  },
  {
    title: 'New Zealand Sauvignon Blanc',
    price: '$35',
    tags: 'A vibrant and zesty Sauvignon Blanc from the Marlborough region of New Zealand. NZ | White | 750 ml',
  },
  {
    title: 'Argentinian Malbec',
    price: '$50',
    tags: 'A bold and robust Malbec with notes of dark fruits, perfect for red wine enthusiasts. AR | Red | Bottle',
  },
];

const cocktails = [
  {
    title: 'Margherita',
    price: '$12.99',
    tags: 'Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.',
  },
  {
    title: 'Pepperoni Feast',
    price: '$15.99',
    tags: 'A meat lover\'s delight with pepperoni, mozzarella, and tomato sauce.',
  },
  {
    title: 'Vegetarian Supreme',
    price: '$14.99',
    tags: 'Loaded with a variety of fresh vegetables, including bell peppers, olives, and mushrooms.',
  },
  {
    title: 'BBQ Chicken',
    price: '$16.99',
    tags: 'Grilled chicken, red onions, and BBQ sauce make this pizza a savory treat.',
  },
  {
    title: 'Hawaiian Delight',
    price: '$13.99',
    tags: 'A tropical twist with ham, pineapple, and mozzarella cheese.',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Michelin Star',
    subtitle: 'Awarded for outstanding culinary excellence and service.',
  },
  {
    imgUrl: images.award01,
    title: 'Best New Restaurant',
    subtitle: 'Recognized as the top new dining establishment in the region.',
  },
  {
    imgUrl: images.award05,
    title: 'AAA Five Diamond',
    subtitle: 'Acknowledged for providing exceptional luxury and service.',
  },
  {
    imgUrl: images.award03,
    title: 'James Beard Award',
    subtitle: 'Honored for making a significant impact on the food industry.',
  },
];

export default { wines, cocktails, awards };
