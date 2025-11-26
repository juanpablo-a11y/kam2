/*
  # Create Videos Table for TourHero Video Library

  1. New Tables
    - `videos`
      - `id` (uuid, primary key) - Unique identifier for each video
      - `title` (text, not null) - Video title
      - `description` (text, not null) - Video description
      - `embed_url` (text, not null) - Loom embed URL for the video
      - `category` (text, not null) - Category classification (Platform Overview, Getting Started, Testimonial)
      - `order_index` (integer, not null) - Display order for videos within categories
      - `created_at` (timestamptz) - Timestamp of when the record was created

  2. Security
    - Enable RLS on `videos` table
    - Add policy for public read access (videos are publicly viewable content)
    
  3. Indexing
    - Add index on category column for efficient filtering
    - Add index on order_index for proper sorting
*/

CREATE TABLE IF NOT EXISTS videos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  embed_url text NOT NULL,
  category text NOT NULL,
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE videos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Videos are publicly readable"
  ON videos
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_videos_category ON videos(category);
CREATE INDEX IF NOT EXISTS idx_videos_order ON videos(order_index);

INSERT INTO videos (title, description, embed_url, category, order_index) VALUES
  (
    'TourHero Platform Overview',
    'Watch how our platform connects operators with travelers through our unique ecosystem',
    'https://www.loom.com/embed/976f7b580fa6406bbfbfe99c6818337e?sid=684ba27c-9b37-40a8-96d4-52d83f46b223',
    'Platform Overview',
    1
  ),
  (
    'Program Requirements Walkthrough',
    'Detailed explanation of what programs need to include for successful partnerships',
    'https://www.loom.com/embed/273bf90d6c4a4821a6e8a07b61046970?sid=3608476e-31cf-45f0-b12f-2412866a8ddf',
    'Getting Started',
    2
  ),
  (
    'TourHero Experience',
    'Hear from our community about their experience with TourHero',
    'https://www.loom.com/embed/618e1c71a67b4427949bdbda56e7b8c9?sid=5f710f36-78e5-4668-ac9e-23e15acf45cc',
    'Testimonial',
    3
  ),
  (
    'Partnership Success',
    'Learn how TourHero partnerships have helped grow businesses',
    'https://www.loom.com/embed/23a5036ca759481698a9b95b916123a2?sid=ae9ea208-f008-4dcc-a7b0-53516dea28fa',
    'Testimonial',
    4
  ),
  (
    'Operator Insights',
    'Discover what operators appreciate about the TourHero platform',
    'https://www.loom.com/embed/3950eb93076b48a6b62ef041fdd615f2?sid=decfb806-473c-4046-ba02-71ea6494d4c7',
    'Testimonial',
    5
  ),
  (
    'Community Feedback',
    'Real experiences from members of the TourHero community',
    'https://www.loom.com/embed/475600e7b6aa4d5baf7a847f15d1da75?sid=3164cb65-cd4d-4e69-896c-3731a85eb4cd',
    'Testimonial',
    6
  );