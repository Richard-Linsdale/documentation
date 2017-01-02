/*
Copyright 2015-2017 Richard Linsdale.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
define(['ojs/ojcore', 'knockout', 'jquery'],
        function (oj, ko, $) {
            //
            var Config = {
                // all valid document types used in the project documentation
                "documents": {
                    "home": {"name": "Introduction"},
                    "user": {"name": "User Documentation"},
                    "build": {"name": "Build Documentation"},
                    "developer": {"name": "Developer Documentation"},
                    "install": {"name": "Installation Notes"},
                    "release": {"name": "Release Notes"},
                    "about": {"name": "About"},
                    "windows": {"name": "Windows Install"},
                    "macos": {"name": "MacOS Install"},
                    "linux": {"name": "Linux Install"}
                },
                // definition of all projects to be presented and associated documentation
                "projects": {
                    "home": {
                        "name": "Introduction to Projects Documentation",
                        "docs": ["home", "about"],
                        "isDefault": true
                    },
                    "documentation": {
                        "name": "Documentation Viewer",
                        "docs": ["home", "user", "developer", "release"]
                    },
                    "javainstallation": {
                        "name": "Java JRE Install",
                        "docs": ["home", "windows", "macos", "linux"]
                    },
                    "poms": {
                        "name": "POMs",
                        "docs": ["home", "user", "developer", "release"]
                    },
                    "templateanalyser": {
                        "name": "FreeMarker Template Analyser Plugin",
                        "docs": ["home", "user", "developer", "install", "release"]
                    },
                    "docbuilder": {
                        "name": "Doc Builder",
                        "docs": ["home", "user", "developer", "install", "release"]
                    },
                    "kramdown": {
                        "name": "NetBeans Kramdown Plugin",
                        "docs": ["home", "user", "developer", "install", "release"]
                    },
                    "kramdownlibrary": {
                        "name": "Kramdown Library",
                        "docs": ["home", "user", "developer", "release"]
                    },
                    "nbpcg": {
                        "name": "NetBeans Platform CodeGenerator",
                        "docs": ["home", "user", "developer", "install", "release"]
                    },
                    "nbpcglibrary": {
                        "name": "NBPCG Library",
                        "docs": ["home", "user", "developer", "release"]
                    },
                    "lindos": {
                        "name": "Lindos Library",
                        "docs": ["home", "user", "developer", "release"]
                    },
                    "authentication": {
                        "name": "Authentication Service API",
                        "docs": ["home", "user", "developer", "install", "release"]
                    },
                    "jeelibrary": {
                        "name": "JavaEE Library",
                        "docs": ["home", "user", "developer", "release"]
                    },
                    "accesscontrolmanager": {
                        "name": "Access Control Manager",
                        "docs": ["home", "user", "developer", "install", "release"]
                    },
                    "bookkeeper": {
                        "name": "Book Keeper",
                        "docs": ["home", "user", "developer", "install", "release"]
                    },
                    "cdarchive": {
                        "name": "CD archive",
                        "docs": ["home", "user", "developer", "install", "release"]
                    },
                    "mailer": {
                        "name": "Mailer",
                        "docs": ["home", "user", "developer", "install", "release"]
                    },
                    "marktimingsrecorder": {
                        "name": "Mark Timings Recorder",
                        "docs": ["home", "user", "developer", "install", "release"]
                    },
                    "racetrainingdemonstrator": {
                        "name": "Race Training Demonstrator",
                        "docs": ["home", "user", "developer", "install", "release"]
                    },
                    "photogallery": {
                        "name": "Photo Gallery",
                        "docs": ["home", "user", "developer", "install", "release"]
                    },
                    "bdf2tft": {
                        "name": "BDF to TFT font conversion",
                        "docs": ["home", "user", "developer", "install", "release"]
                    },
                    "createmesh": {
                        "name": "Create Mesh for Blender",
                        "docs": ["home", "user", "developer", "install", "release"]
                    },
                    "gpssurvey": {
                        "name": "GPS Survey",
                        "docs": ["home", "developer", "install"]
                    },
                    "rpiembeddedlibrary": {
                        "name": "RPi embedded Library",
                        "docs": ["home", "user", "developer", "release"]
                    },
                    "irplate": {
                        "name": "Ir Plate",
                        "docs": ["home", "build", "developer", "release"]
                    },
                    "tftserial": {
                        "name": "Tft Serial Firmware",
                        "docs": ["home", "build", "developer", "release"]
                    },
                    "gpslogger": {
                        "name": "GPS Logger",
                        "docs": ["home", "user", "build", "developer", "release"]
                    },
                    "sailtracker": {
                        "name": "Sail Tracker",
                        "docs": ["home", "user", "developer", "install", "release"]
                    },
                    "hockeytracker": {
                        "name": "Hockey Tracker",
                        "docs": ["home", "user", "developer", "install", "release"]
                    }
                },
                "appname": "Project Documentation"
            };
            return Config;
        }
);
