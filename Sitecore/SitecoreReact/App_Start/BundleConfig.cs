﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;
using System.Web.Optimization.React;
namespace SitecoreReact.App_Start
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            //bundles.Add(new BabelBundle("~/bundles/main").Include(
            //    "~/Scripts/MainLayout.jsx"

            //));

            //// Forces files to be combined and minified in debug mode
            //// Only used here to demonstrate how combination/minification works
            //// Normally you would use unminified versions in debug mode.
            //BundleTable.EnableOptimizations = true;
        }
    }
}