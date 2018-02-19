
using Sitecore.Mvc.Presentation;
using Sitecore.Web.UI.WebControls;
using System.Web.Mvc;

namespace SitecoreReact.Controllers
{
    public class ScaffoldingController : Controller
    {

        public ActionResult MainLayout()
        {
            var item = RenderingContext.Current.Rendering.Item;
                var viewModel = new Models.PageTitleViewModel
                {
                    PageTitle = FieldRenderer.Render(item,"Title"),
                    PageBody = FieldRenderer.Render(item, "Body")

                };
            
            return View(viewModel);
        }
    }
}