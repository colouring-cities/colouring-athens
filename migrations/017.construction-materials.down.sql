-- Primary material (brick/clay tile, slate, steel/metal, timber, stone, glass, concrete,
-- natural-green or thatch, asphalt or other)
ALTER TABLE buildings DROP COLUMN IF EXISTS construction_core_material;

--Secondary material
ALTER TABLE buildings DROP COLUMN IF EXISTS construction_cover_material;

--Primary roof material
ALTER TABLE buildings DROP COLUMN IF EXISTS construction_roof_covering;


