#!/usr/bin/env bash

#
# Extract, transform and load building outlines and property records
#
: ${1?"Usage: $0 ./path/to/addressbase/dir ./path/to/mastermap/dir ./path/to/boundary"}
: ${2?"Usage: $0 ./path/to/addressbase/dir ./path/to/mastermap/dir ./path/to/boundary"}
: ${3?"Usage: $0 ./path/to/addressbase/dir ./path/to/mastermap/dir ./path/to/boundary"}

addressbase_dir=$1
mastermap_dir=$2
boundary_file=$3
script_dir=${0%/*}

#
# Process
#

# extract both datasets
$script_dir/extract_addressbase.sh $addressbase_dir
$script_dir/extract_mastermap.sh $mastermap_dir
# filter mastermap ('building' polygons and any others referenced by addressbase)
$script_dir/filter_transform_mastermap_for_loading.sh $addressbase_dir $mastermap_dir

#
# Load
#

# load all building outlines
$script_dir/load_geometries.sh $mastermap_dir
# index geometries (should be faster after loading)
psql < $script_dir/../migrations/002.index-geometries.up.sql
$script_dir/drop_outside_limit.sh $boundary_file
# create a building record per outline
$script_dir/create_building_records.sh
# add UPRNs where they match
$script_dir/load_uprns.sh $addressbase_dir
# index building records
psql < $script_dir/../migrations/003.index-buildings.up.sql
