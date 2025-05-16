/*
  # Update properties schema and add amenities

  1. Changes
    - Add amenities table if not exists
    - Add property_amenities junction table if not exists
    - Enable RLS on all tables
    - Add public read access policies

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
*/

-- Create amenities table if it doesn't exist
CREATE TABLE IF NOT EXISTS amenities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now()
);

-- Create property_amenities junction table if it doesn't exist
CREATE TABLE IF NOT EXISTS property_amenities (
  property_id uuid REFERENCES properties(id) ON DELETE CASCADE,
  amenity_id uuid REFERENCES amenities(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (property_id, amenity_id)
);

-- Enable RLS
DO $$ 
BEGIN
  ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
  ALTER TABLE amenities ENABLE ROW LEVEL SECURITY;
  ALTER TABLE property_amenities ENABLE ROW LEVEL SECURITY;
EXCEPTION 
  WHEN others THEN NULL;
END $$;

-- Drop existing policies if they exist and recreate them
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Allow public read access to properties" ON properties;
  DROP POLICY IF EXISTS "Allow public read access to amenities" ON amenities;
  DROP POLICY IF EXISTS "Allow public read access to property_amenities" ON property_amenities;
END $$;

-- Create policies
CREATE POLICY "Allow public read access to properties"
  ON properties
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to amenities"
  ON amenities
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to property_amenities"
  ON property_amenities
  FOR SELECT
  TO public
  USING (true);