using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Angular5Core2V3.Controllers.Admin
{
    [Route("Admin/[controller]")]
    public class AdminController : Controller
    {
        [HttpGet()]
        public async Task<IActionResult> Index()
        {
            return new JsonResult("");
        }
    }
}