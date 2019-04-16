using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;
using System.Web.Optimization.React;

namespace Website.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new BabelBundle("~/bundles/main").Include(
                            "~/Scripts/React/form-errors.jsx",
                            "~/Scripts/React/success.jsx",
                            "~/Scripts/React/contact-detail.jsx",
                            "~/Scripts/React/address-detail.jsx",
                            "~/Scripts/React/name-detail.jsx",
                            "~/Scripts/React/contact-us-form.jsx",
                            "~/Scripts/React/app.jsx"
                        ));

        }
    }
}