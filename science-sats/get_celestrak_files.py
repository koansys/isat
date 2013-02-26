#!/usr/bin/env python
# Pull each Celestrak TLE file and save a local copy, a combined .txt file
# In a separate process, well have to produce artifacts like SMD satellite file.
# We aren't worrying about duplicates here, do it in postprocessing.
# TODO:
# - is there a way to find this list of files? or is it static?

import urllib2

CELESTRAC_BASE_URL = "http://www.celestrak.com/NORAD/elements/"
COMBINED_NAME = "COMBINED.txt"

files = {
    "tle-new.txt": "Last 30 Days' Launches",
    "stations.txt": "Space Stations",
    "visual.txt": "100 (or so) Brightest",
    "1999-025.txt": "FENGYUN 1C Debris",
    "iridium-33-debris.txt": "IRIDIUM 33 Debris",
    "cosmos-2251-debris.txt": "COSMOS 2251 Debris",
    "weather.txt": "Weather",
    "noaa.txt": "NOAA",
    "goes.txt": "GOES",
    "resource.txt": "Earth Resources",
    "sarsat.txt": "Search & Rescue (SARSAT)",
    "dmc.txt": "Disaster Monitoring",
    "tdrss.txt": "Tracking and Data Relay Satellite",
    "geo.txt": "Geostationary",
    "intelsat.txt": "Intelsat",
    "gorizont.txt": "Gorizont",
    "raduga.txt": "Raduga",
    "molniya.txt": "Molniya",
    "iridium.txt": "Iridium",
    "orbcomm.txt": "Orbcomm",
    "globalstar.txt": "Globalstar",
    "amateur.txt": "Amateur Radio",
    "x-comm.txt": "Experimental",
    "other-comm.txt": "Other",
    "gps-ops.txt": "GPS Operational",
    "glo-ops.txt": "Glonass Operational",
    "galileo.txt": "Galileo",
    "sbas.txt": "Satellite-Based Augmentation System (WAAS/EGNOS/MSAS)",
    "nnss.txt": "Navy Navigation Satellite System (NNSS)",
    "musson.txt": "Russian LEO Navigation",
    "science.txt": "Space & Earth Science",
    "geodetic.txt": "Geodetic",
    "engineering.txt": "Engineering",
    "education.txt": "Education",
    "military.txt": "Miscellaneous Military",
    "radar.txt": "Radar Calibration",
    "cubesat.txt": "CubeSats",
    "other.txt": "Other",
}

with open(COMBINED_NAME, 'w') as combined:
    for fname, description in files.items():
        response = urllib2.urlopen(CELESTRAC_BASE_URL + fname)
        tles = response.read()
        with open(fname, 'w') as out:
            out.write(tles)
        combined.write(tles)

