/*
  # Update properties schema to handle amenities

  1. Changes
    - Drop existing amenities and property_amenities tables
    - Add amenities array column to properties table
    - Migrate existing data
*/

-- Drop existing tables
DROP TABLE IF EXISTS property_amenities;
DROP TABLE IF EXISTS amenities;

-- Add amenities array to properties table if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'properties' AND column_name = 'amenities'
  ) THEN
    ALTER TABLE properties ADD COLUMN amenities text[] DEFAULT '{}';
  END IF;
END $$;