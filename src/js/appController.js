/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'knockout', 'config', 'ojs/ojrouter', 'ojs/ojknockout',
    'ojs/ojoffcanvas', 'ojs/ojnavigationlist', 'ojs/ojarraytabledatasource'],
        function (oj, ko, config) {

            // Project Navigation rules
            var projectNavigationItems = [];
            $.each(config.projects, function (key, value) {
                var pnobj = {
                    name: value.name,
                    id: key
                };
                projectNavigationItems.push(pnobj);
            });

            // Project Router configuration
            var routerConfig = {};
            $.each(config.projects, function (key, value) {
                var routerobj = {
                    label: value.name,
                    value: key
                };
                if (value.isDefault) {
                    routerobj.isDefault = value.isDefault;
                }
                routerConfig[key] = routerobj;
            });
            // and set up the project router
            var router = oj.Router.rootInstance;
            router.configure(routerConfig);
            oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();
            oj.Router.defaults['rootInstanceName'] = "Project";
            //
            // Document Navigation rules
            // create all the necessary document navigation rules
            var alldocnavItems = {};
            $.each(config.projects, function (key, value) {
                var documentNavigationItems = [];
                var docs = value.docs;
                $.each(docs, function (index, dvalue) {
                    var item = config.documents[dvalue];
                    var dnobj = {
                        name: item.name,
                        id: dvalue
                    };
                    documentNavigationItems.push(dnobj);
                });
                alldocnavItems[key] = documentNavigationItems;
            });
            // Document Router - create all the required child routers
            $.each(config.projects, function (key, value) {
                var docrouter = {};
                $.each(value.docs, function (index, dvalue) {
                    var item = config.documents[dvalue];
                    var docrouterobj = {
                        label: item.name,
                        value: dvalue
                    };
                    if (index === 0) {
                        docrouterobj.isDefault = true;
                    }
                    docrouter[dvalue] = docrouterobj;
                });
                router.createChildRouter(key, key)
                        .configure(docrouter);
                oj.Router.sync();
            });

            // OFF CANVAS 1 - for the application menu
            var drawerParams = {
                displayMode: 'push',
                selector: '#navDrawer',
                content: '#pageContent'
            };

            // OFF CANVAS 2 - for the document selection menu
            var docdrawerParams = {
                displayMode: 'push',
                selector: '#docdrawer',
                content: '#docpage'
            };

            // Media queries for repsonsive layouts
            var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
            var mdQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_ONLY);

            function ControllerViewModel() {
                var self = this;

                // Media queries for responsive layouts
                self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
                self.mdScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);
                // Close offcanvas on medium and larger screens
                self.smScreen.subscribe(function () {
                    oj.OffcanvasUtils.close(drawerParams);
                    oj.OffcanvasUtils.close(docdrawerParams);
                });
                // Called by navigation drawer toggle button and after selection of nav drawer item
                self.toggleDrawer = function () {
                    return oj.OffcanvasUtils.toggle(drawerParams);
                };
                // Called by nav drawer option change events so we can close drawer after selection
                self.navChange = function (event, ui) {
                    if (ui.option === 'selection' && ui.value !== self.router.stateId()) {
                        self.toggleDrawer();
                    }
                };
                //
                self.toggledocDrawer = function () {
                    return oj.OffcanvasUtils.toggle(docdrawerParams);
                };
                // Called by docnav drawer option change events so we can close drawer after selection
                self.docnavChange = function (event, ui) {
                    if (ui.option === 'selection' && ui.value !== self.docrouter().stateId()) {
                        self.toggledocDrawer();
                    }
                };

                self.navdataSource = new oj.ArrayTableDataSource(projectNavigationItems, {idAttribute: 'id'});
                
                self.router = router;
                // Project Name used in Header 
                self.appName = ko.pureComputed(function () {
                    var routerstate = self.router.stateId();
                    var routertitle = (routerstate === self.router.defaultStateId) ?
                            '' : routerConfig[routerstate].label;
                    var docrouter = self.router.getChildRouter(routerstate);
                    var docrouterstate = docrouter.stateId();
                    if (!docrouterstate) {
                        docrouterstate = docrouter.defaultStateId;
                    }
                    var docroutertitle = (docrouterstate === docrouter.defaultStateId) ?
                            '' : config.documents[docrouterstate].name;
                    return self.smScreen() ?
                            smtitle(config.appname, routertitle, docroutertitle) :
                            (self.mdScreen() ?
                                    mdtitle(config.appname, routertitle, docroutertitle) :
                                    fulltitle(config.appname, routertitle, docroutertitle));
                });
                function smtitle(appname, routertitle, docroutertitle) {
                    return docroutertitle === '' ?
                            (routertitle === '' ?
                                    appname :
                                    routertitle) :
                            docroutertitle;
                }
                function mdtitle(appname, routertitle, docroutertitle) {
                    return docroutertitle === '' ?
                            appname + append(routertitle) :
                            (routertitle === '' ? appname + append(docroutertitle) :
                                    routertitle + append(docroutertitle));
                }
                function fulltitle(appname, routertitle, docroutertitle) {
                    return appname + append(routertitle) + append(docroutertitle);
                }
                function append(title) {
                    return title === '' ? '' : ' - ' + title;
                }

                self.routerstate = ko.pureComputed(function () {
                    var state = self.router.stateId();
                    if (!state) {
                        state = self.router.defaultStateId;
                    }
                    //
                    self.docnavItems.removeAll();
                    var newitems = alldocnavItems[state];
                    for (var i = 0; i < newitems.length; i++) {
                        self.docnavItems.push(newitems[i]);
                    }
                    return state;
                });

                self.docrouter = ko.pureComputed(function () {
                    return self.router.getChildRouter(self.routerstate());
                });

                self.docrouterstate = ko.pureComputed(function () {
                    var state = self.docrouter().stateId();
                    if (!state) {
                        state = self.docrouter().defaultStateId;
                    }
                    return state;
                });

                self.alldocnavItems = alldocnavItems;

                self.docnavItems = ko.observableArray([]);
                self.docnavdataSource = ko.pureComputed(function() {
                    return new oj.ArrayTableDataSource(self.docnavItems, {idAttribute: 'id'});
                });

                self.display = ko.pureComputed(function (data) {
                    return this.docrouterstate === data.id;
                });

                self.docnavselection = ko.observable('home');

                self.selectedView = ko.computed(function () {
                    return {viewName: self.routerstate() + '/' + self.docrouterstate()};
                });
            }
            return new ControllerViewModel;
        });