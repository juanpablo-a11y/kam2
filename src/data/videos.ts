export interface Video {
  id: string;
  title: string;
  description: string;
  embed_url: string;
  category: string;
  order_index: number;
  created_at: string;
}

export const videos: Video[] = [
  {
    id: '1',
    title: 'TourHero Platform Overview',
    description: 'Watch how our platform connects operators with travelers through our unique ecosystem',
    embed_url: 'https://www.loom.com/embed/976f7b580fa6406bbfbfe99c6818337e?sid=684ba27c-9b37-40a8-96d4-52d83f46b223',
    category: 'Platform Overview',
    order_index: 1,
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Program Requirements Walkthrough',
    description: 'Detailed explanation of what programs need to include for successful partnerships',
    embed_url: 'https://www.loom.com/embed/273bf90d6c4a4821a6e8a07b61046970?sid=3608476e-31cf-45f0-b12f-2412866a8ddf',
    category: 'Getting Started',
    order_index: 2,
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    title: 'TourHero Experience',
    description: 'Hear from our community about their experience with TourHero',
    embed_url: 'https://www.loom.com/embed/618e1c71a67b4427949bdbda56e7b8c9?sid=5f710f36-78e5-4668-ac9e-23e15acf45cc',
    category: 'Testimonial',
    order_index: 3,
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    title: 'Partnership Success',
    description: 'Learn how TourHero partnerships have helped grow businesses',
    embed_url: 'https://www.loom.com/embed/23a5036ca759481698a9b95b916123a2?sid=ae9ea208-f008-4dcc-a7b0-53516dea28fa',
    category: 'Testimonial',
    order_index: 4,
    created_at: new Date().toISOString()
  },
  {
    id: '5',
    title: 'Operator Insights',
    description: 'Discover what operators appreciate about the TourHero platform',
    embed_url: 'https://www.loom.com/embed/3950eb93076b48a6b62ef041fdd615f2?sid=decfb806-473c-4046-ba02-71ea6494d4c7',
    category: 'Testimonial',
    order_index: 5,
    created_at: new Date().toISOString()
  },
  {
    id: '6',
    title: 'Community Feedback',
    description: 'Real experiences from members of the TourHero community',
    embed_url: 'https://www.loom.com/embed/475600e7b6aa4d5baf7a847f15d1da75?sid=3164cb65-cd4d-4e69-896c-3731a85eb4cd',
    category: 'Testimonial',
    order_index: 6,
    created_at: new Date().toISOString()
  },
  {
    id: '7',
    title: 'TourHero Video',
    description: 'Learn more about TourHero',
    embed_url: 'https://www.loom.com/embed/b6f879a9c2d140d6899f5901e6de3e59',
    category: 'Testimonial',
    order_index: 7,
    created_at: new Date().toISOString()
  }
];
