ALTER TABLE buildings
  ADD COLUMN IF NOT EXISTS type_class integer,
  ADD FOREIGN KEY (type_class)
  REFERENCES reference_tables.type_classifications (typec_id);


ALTER TABLE buildings
  ADD COLUMN IF NOT EXISTS side_distances integer,
  ADD FOREIGN KEY (side_distances)
  REFERENCES reference_tables.side_distances_classifications (side_distances_id);
