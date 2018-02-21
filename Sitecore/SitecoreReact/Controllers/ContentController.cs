using Sitecore.Mvc.Presentation;
using Sitecore.Web.UI.WebControls;
using System.Web.Mvc;
using Antlr.Runtime;

namespace SitecoreReact.Controllers
{
    public class ContentController : Controller
    {
        public ActionResult Header()
        {
	        var item = RenderingContext.Current.Rendering.Item;
			var viewModel = new Models.HeaderViewModel
			{
				HeaderContent = FieldRenderer.Render(item,"HeaderContent")

			};
			return View(viewModel);
        }
        public ActionResult Footer()
        {
			var item = RenderingContext.Current.Rendering.Item;
	        var viewModel = new Models.FooterViewModel
	        {
		        FooterContent = FieldRenderer.Render(item, "FooterContent")

	        };

	        return View(viewModel);

        }

	    public ActionResult MainContent()
	    {
			var item = RenderingContext.Current.Rendering.Item;
		    var viewModel = new Models.MainContentViewModel()
		    {
			    MainContent = FieldRenderer.Render(item, "MainContent")

		    };

		    return View(viewModel);
		}
    }
}