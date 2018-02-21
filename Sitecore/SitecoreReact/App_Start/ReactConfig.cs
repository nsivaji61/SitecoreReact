using React;
[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(SitecoreReact.ReactConfig), "Configure")]

namespace SitecoreReact
{
	public static class ReactConfig
	{
		public static void Configure()
		{
			// If you want to use server-side rendering of React components, 
			// add all the necessary JavaScript files here. This includes 
			// your components as well as all of their dependencies.
			// See http://reactjs.net/ for more information. Example:
			//ReactSiteConfiguration.Configuration
			//    .AddScript("~/Scripts/MainLayout.jsx");
			ReactSiteConfiguration.Configuration
								  .SetLoadBabel(false)
					.SetLoadReact(false)
					.AddScriptWithoutTransform("~/Web.Assests/src/dist/app.bundle.js");

		}
	}
}