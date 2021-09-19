/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcontext', 'ojs/ojresponsiveutils', 'ojs/ojresponsiveknockoututils', 'knockout', 'ojs/ojknockout'],
    function (Context, ResponsiveUtils, ResponsiveKnockoutUtils, ko) {

        function ControllerViewModel() {

            // Media queries for repsonsive layouts
            const smQuery = ResponsiveUtils.getFrameworkQuery(ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
            this.smScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

        }

        // release the application bootstrap busy state
        Context.getPageContext().getBusyContext().applicationBootstrapComplete();

        return new ControllerViewModel();
    }
);
