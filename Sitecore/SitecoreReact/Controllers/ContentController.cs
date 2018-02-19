using Sitecore.Mvc.Presentation;
using Sitecore.Web.UI.WebControls;
using System.Web.Mvc;

namespace SitecoreReact.Controllers
{
    public class ContentController : Controller
    {
        public ActionResult PageTitle()
        {
            if (string.IsNullOrEmpty(RenderingContext.Current.Rendering.DataSource))
            {
                return null;
            }
            var item = RenderingContext.Current.Rendering.Item;
            var viewModel = new Models.PageTitleViewModel
            {
                PageTitle = FieldRenderer.Render(item, "PageTitle")
            };
            return View("PageTitle", viewModel);
        }
        public ActionResult PageBody()
        {
            if (string.IsNullOrEmpty(RenderingContext.Current.Rendering.DataSource))
            {
                return null;
            }
            var item = RenderingContext.Current.Rendering.Item;
            var viewModel = new Models.PageBodyViewTitle
            {
                PageBody = FieldRenderer.Render(item, "PageBody")
            };
            return View("PageBody", viewModel);
        }
    }
}