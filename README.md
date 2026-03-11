# Warehouse Mixed Pallet Allocation System

This project now includes a planning + monitoring engine for EURO/standard pallet mixing.

## Problem handled

- Rack locations are EURO-sized (1 EURO pallet = 1 location).
- STANDARD pallets consume extra neighbor space in the same zone.
- Rule implemented from your example:
  - `3 STANDARD pallets = 4 locations`
  - So required locations for `s` standard pallets is `ceil(4*s/3)`.
- This detects **ghost empty** (system shows empty, but physically blocked).

## Main script

- [/Users/a91703/Desktop/project/warehouse_allocator.py](/Users/a91703/Desktop/project/warehouse_allocator.py)

## Required files

- Location master (given):
  - `/Users/a91703/Desktop/warehouse-frontend/Warehouse Location.xlsx`
- Real-time inventory (given):
  - `/Users/a91703/Desktop/warehouse-frontend/Inventory.csv`
- Incoming mixed container file (you upload/create):
  - use template: [/Users/a91703/Desktop/project/incoming_container_template.csv](/Users/a91703/Desktop/project/incoming_container_template.csv)

## Incoming container columns

Your incoming CSV must contain:

- `incoming_id`
- `sku`
- `bbd`
- `height`
- `weight`
- `pallet_type` (`EURO` or `STANDARD`)

## Real-time inventory tracking

For accurate real-empty monitoring, add this column in your inventory feed:

- `PALLET_TYPE` (`EURO` or `STANDARD`)

If `PALLET_TYPE` is missing, the script assumes `EURO` by default.

## Run

```bash
python3 /Users/a91703/Desktop/project/warehouse_allocator.py \
  --incoming /Users/a91703/Desktop/project/incoming_container_template.csv \
  --out-dir /Users/a91703/Desktop/project/output
```

## Outputs

Generated in `--out-dir`:

- `zone_capacity_report.csv`
  - zone-wise `system_empty`, `real_empty`, `ghost_empty`
- `preallocation_plan.csv`
  - each incoming pallet allocation result
  - includes `primary_location` and `blocked_locations`
- `updated_inventory_projection.csv`
  - inventory view after adding allocated incoming pallets
- `inventory_mapping_report.csv`
  - location mapping diagnostics (mapped/unmapped)

## Example test file

- [/Users/a91703/Desktop/project/incoming_30_standard_20_euro.csv](/Users/a91703/Desktop/project/incoming_30_standard_20_euro.csv)

This represents your example mixed container (30 STANDARD + 20 EURO).

## Web app (fixed master + 3D empty highlight)

Files:

- [/Users/a91703/Desktop/project/index.html](/Users/a91703/Desktop/project/index.html)
- [/Users/a91703/Desktop/project/app.js](/Users/a91703/Desktop/project/app.js)
- [/Users/a91703/Desktop/project/styles.css](/Users/a91703/Desktop/project/styles.css)
- [/Users/a91703/Desktop/project/location_master.json](/Users/a91703/Desktop/project/location_master.json)

Run a local web server:

```bash
cd /Users/a91703/Desktop/project
python3 -m http.server 8000
```

Open:

- [http://localhost:8000](http://localhost:8000)

In the UI:

- Location master is preloaded automatically from `location_master.json`
- Upload `Inventory.csv` (with `PALLET_TYPE` for best accuracy)
- Upload incoming mixed-container CSV (`incoming_id, sku, bbd, height, weight, pallet_type`)
- Click `Analyze + Pre-Allocate`
- Download:
  - `Zone Report`
  - `Preallocation Plan`
  - `Inventory Projection`

3D behavior:

- Real warehouse locations are rendered as 3D slots.
- Colors:
  - Green = real empty
  - Orange = occupied
  - Red = blocked/ghost-empty effect
  - Blue = selected location
- Click any location to inspect its status and zone.

Business rules implemented in app:

- Locations ending with `-01-L` or `-01-R` are treated as `picking`.
- Incoming container allocation is restricted to `storage` locations only.
- FIFO check on analysis:
  - if incoming SKU has lower BBD than same SKU in picking, app shows a warning popup.
- Fast-moving upload supported:
  - upload file with `sku` and `movement`/`qty`/`velocity`
  - app suggests which SKUs should be moved/kept in picking.


Note: For most reliable use, upload CSV files. XLSX upload requires the browser to load the XLSX script.

## Application deployment (Web + Desktop)

Web deploy package:

- [/Users/a91703/Desktop/project/deploy-web](/Users/a91703/Desktop/project/deploy-web)
- [/Users/a91703/Desktop/project/warehouse-web-deploy.zip](/Users/a91703/Desktop/project/warehouse-web-deploy.zip)

Desktop app (Electron):

- config: [/Users/a91703/Desktop/project/package.json](/Users/a91703/Desktop/project/package.json)
- entry: [/Users/a91703/Desktop/project/electron/main.js](/Users/a91703/Desktop/project/electron/main.js)
- guide: [/Users/a91703/Desktop/project/DESKTOP_DEPLOY.md](/Users/a91703/Desktop/project/DESKTOP_DEPLOY.md)
