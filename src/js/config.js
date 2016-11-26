/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'knockout', 'jquery'],
        function (oj, ko, $) {
            //
            var Config = {
                // all valid document types used in the project documentation
                documents: {
                    'home': {name: 'Introduction'},
                    'user': {name: 'User Documentation'},
                        'developer': {name: 'Developer Documentation'},
                    'install': {name: 'Installation Notes'},
                    'release': {name: 'Release Notes'},
                    'about': {name: 'About'}
                },
                // definition of all projects to be presented and associated documentation
                projects: {
                    'home': {
                        name: 'Introduction to Projects Documentation',
                        docs: ['home', 'about'],
                        isDefault: true
                    },
                    'poms': {
                        name: 'POMs',
                        docs: ['home']
                    },
                    'accesscontrolmanager': {
                        name: 'Access Control Manager',
                        docs: ['home', 'user', 'developer', 'install', 'release']
                    }
                },
                appname: "Project Documentation"
            };
            return Config;
        }
);
//        self.datasource = [
//            {
//                "title": "POMS",
//                "attr": {"id": "poms"}
//            },
//            {
//                "title": "NetBeans Platform Code Generator",
//                "attr": {"id": "nbpcg"}
//            },
//            {
//                "title": "NetBeans Kramdown Plug-in",
//                "attr": {"id": "kramdown"}
//            },
//            {
//                "title": "NBPCG Library",
//                "attr": {"id": "nbpcglibrary"}
//            },
//            {
//                "title": "Lindos Library",
//                "attr": {"id": "lindos"}
//            },
//            {
//                "title": "GPS Logger",
//                "attr": {"id": "gpslogger"}
//            },
//            {
//                "title": "IR Plate",
//                "attr": {"id": "irplate"}
//            },
//            {
//                "title": "RPi Embedded Library",
//                "attr": {"id": "rpiembeddedlibrary"}
//            },
//            {
//                "title": "Font Conversion utility - BDF to TFT",
//                "attr": {"id": "bdf2tft"}
//            },
//            {
//                "title": "GPS Survey",
//                "attr": {"id": "gpssurvey"}
//            },
//            {
//                "title": "Access Control Manager",
//                "attr": {"id": "accesscontrolmanager"}
//            },
//            {
//                "title": "Hockey Tracker",
//                "attr": {"id": "hockeyTracker"}
//            },
//            {
//                "title": "Mailer",
//                "attr": {"id": "mailer"}
//            },
//            {
//                "title": "Mark Timings Recorder",
//                "attr": {"id": "marktimingsrecorder"}
//            },
//            {
//                "title": "Race Training Demonstrator",
//                "attr": {"id": "racetrainingdemonstrator"}
//            },
//            {
//                "title": "Sail Tracker",
//                "attr": {"id": "sailtracker"}
//            },
//            {
//                "title": "Authentication",
//                "attr": {"id": "authentication"}
//            },
//            {
//                "title": "TFT Serial",
//                "attr": {"id": "tftserial"}
//            },
//            {
//                "title": "CD Archive",
//                "attr": {"id": "cdarchive"}
//            },
//            {
//                "title": "Photo Gallery",
//                "attr": {"id": "photogallery"}
//            },
//            {
//                "title": "Create Mesh",
//                "attr": {"id": "createmesh"}
//            },
//            {
//                "title": "Book Keeper",
//                "attr": {"id": "bookkeeper"}
//            },
//            {
//                "title": "Template Analyser",
//                "attr": {"id": "templateanalyser"}
//            },
//            {
//                "title": "JEE Library",
//                "attr": {"id": "jeelibrary"}
//            }];
//        self.documentation = [
//            {
//                "id": "poms",
//                "documentation": "this the introduction to the POMS project"
//            },
//            {
//                "id": "nbpcg",
//                "documentation": "this the introduction to the NetBeans Platform Code Generator project"
//            },
//            {
//                "id": "kramdown",
//                "documentation": "this the introduction to the NetBeans Kramdown Plug-in project"
//            },
//            {
//                "id": "nbpcglibrary",
//                "documentation": "this the introduction to the NBPCG Library project"
//            },
//            {
//                "id": "lindos",
//                "documentation": "this the introduction to the Lindos Library project"
//            },
//            {
//                "id": "gpslogger",
//                "documentation": "this the introduction to the GPS Logger project"
//            },
//            {
//                "id": "irplate",
//                "documentation": "this the introduction to the IR Plate project"
//            },
//            {
//                "id": "rpiembeddedlibrary",
//                "documentation": "this the introduction to the RPi Embedded Library project"
//            },
//            {
//                "id": "bdf2tft",
//                "documentation": "this the introduction to the BFT2TFT project"
//            },
//            {
//                "id": "gpssurvey",
//                "documentation": "this the introduction to the GPS Survey project"
//            },
//            {
//                "id": "accesscontrolmanager",
//                "documentation": "this the introduction to the Access Control Manager project",
//                "url": "accesscontrolmanager"
//            },
//            {
//                "id": "hockeyTracker",
//                "documentation": "this the introduction to the Hockey Tracker project"
//            },
//            {
//                "id": "mailer",
//                "documentation": "this the introduction to the Mailer project"
//            },
//            {
//                "id": "marktimingsrecorder",
//                "documentation": "this the introduction to the Mark Timings Recorder project"
//            },
//            {
//                "id": "racetrainingdemonstrator",
//                "documentation": "this the introduction to the Race Training Demonstrator project"
//            },
//            {
//                "id": "sailtracker",
//                "documentation": "this the introduction to the Sail Tracker project"
//            },
//            {
//                "id": "authentication",
//                "documentation": "this the introduction to the Authenication project"
//            },
//            {
//                "id": "tftserial",
//                "documentation": "this the introduction to the TFT Serial project"
//            },
//            {
//                "id": "cdarchive",
//                "documentation": "this the introduction to the CD Archive project"
//            },
//            {
//                "id": "photogallery",
//                "documentation": "this the introduction to the POMS project"
//            },
//            {
//                "id": "createmesh",
//                "documentation": "this the introduction to the Create Mesh project"
//            },
//            {
//                "id": "bookkeeper",
//                "documentation": "this the introduction to the Book Keeper project"
//            },
//            {
//                "id": "templateanalyser",
//                "documentation": "this the introduction to the Template Analyser project"
//            },
//            {
//                "id": "jeelibrary",
//                "documentation": "this the introduction to the JEE Library project"
//            }];
