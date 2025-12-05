/*
  # Create Videos Table

  1. New Tables
    - `videos`
      - `id` (uuid, primary key) - Unique identifier for each video
      - `title` (text, not null) - Video title
      - `description` (text, not null) - Video description
      - `embed_url` (text, not null) - Loom embed URL for the video
      - `category` (text, not null) - Video category (Platform Overview, Getting Started, Testimonial, etc.)
      - `order_index` (integer, not null) - Sort order for displaying videos
      - `created_at` (timestamptz, default now()) - Timestamp when video was added

  2. Security
    - Enable RLS on `videos` table
    - Add policy for public read access (videos are public content for all visitors)

  3. Performance
    - Add index on `category` column for faster filtering
    - Add index on `order_index` column for faster sorting
*/

-- Create videos table
CREATE TABLE IF NOT EXISTS videos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  embed_url text NOT NULL,
  category text NOT NULL,
  order_index integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
-- Videos are public content that anyone can view
CREATE POLICY "Videos are publicly readable"
  ON videos
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_videos_category ON videos(category);
CREATE INDEX IF NOT EXISTS idx_videos_order_index ON videos(order_index);

-- Insert initial video data
INSERT INTO videos (id, title, description, embed_url, category, order_index, created_at)
VALUES
  (
    '00000000-0000-0000-0000-000000000001'::uuid,
    'TourHero Platform Overview',
    'Watch how our platform connects operators with travelers through our unique ecosystem',
    'https://www.loom.com/embed/976f7b580fa6406bbfbfe99c6818337e?sid=684ba27c-9b37-40a8-96d4-52d83f46b223',
    'Platform Overview',
    1,
    now()
  ),
  (
    '00000000-0000-0000-0000-000000000002'::uuid,
    'Program Requirements Walkthrough',
    'Detailed explanation of what programs need to include for successful partnerships',
    'https://www.loom.com/embed/273bf90d6c4a4821a6e8a07b61046970?sid=3608476e-31cf-45f0-b12f-2412866a8ddf',
    'Getting Started',
    2,
    now()
  ),
  (
    '00000000-0000-0000-0000-000000000003'::uuid,
    'TourHero Experience',
    'Hear from our community about their experience with TourHero',
    'https://www.loom.com/embed/618e1c71a67b4427949bdbda56e7b8c9?sid=5f710f36-78e5-4668-ac9e-23e15acf45cc',
    'Testimonial',
    3,
    now()
  ),
  (
    '00000000-0000-0000-0000-000000000004'::uuid,
    'Partnership Success',
    'Learn how TourHero partnerships have helped grow businesses',
    'https://www.loom.com/embed/23a5036ca759481698a9b95b916123a2?sid=ae9ea208-f008-4dcc-a7b0-53516dea28fa',
    'Testimonial',
    4,
    now()
  ),
  (
    '00000000-0000-0000-0000-000000000006'::uuid,
    'Community Feedback',
    'Real experiences from members of the TourHero community',
    'https://www.loom.com/embed/475600e7b6aa4d5baf7a847f15d1da75?sid=3164cb65-cd4d-4e69-896c-3731a85eb4cd',
    'Testimonial',
    5,
    now()
  ),
  (
    '00000000-0000-0000-0000-000000000007'::uuid,
    'TourHero Video',
    'Learn more about TourHero',
    'https://www.loom.com/embed/b6f879a9c2d140d6899f5901e6de3e59',
    'Testimonial',
    6,
    now()
  ),
  (
    '00000000-0000-0000-0000-000000000008'::uuid,
    'Platform Features',
    'Explore the key features and capabilities of the TourHero platform',
    'https://www.loom.com/embed/1d6943ad999c4f2ca9fcae5aee0d81aa',
    'Platform Overview',
    7,
    now()
  )
ON CONFLICT (id) DO NOTHING;