using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Angular5Core2V3.Data;
using Angular5Core2V3.Models.DataModels.Catalog;
using Microsoft.Net.Http.Headers;
using Angular5Core2V3.Models.ViewModels.Admin;
using Mapster;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Angular5Core2V3.Controllers.Admin
{
    [Route("API/Admin/Categories")]
    public class CategoriesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public CategoriesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        [HttpGet("Index")]
        // GET: Categories
        public async Task<IActionResult> Index()
        {
            try
            {
                var list = await _context.Categories.Include(c => c.Descriptions)
                                                    .ThenInclude(d => d.Language)
                                              .Include(c => c.Images)
                                              .Include(c => c.Names)
                                                    .ThenInclude(n => n.Language)
                                              .ToListAsync();

                return new JsonResult(list.Adapt<Category[]>(),
                    new Newtonsoft.Json.JsonSerializerSettings() { Formatting = Newtonsoft.Json.Formatting.Indented });
            }
            catch (Exception ex)
            {
                var x = ex.ToString();
                return new JsonResult("");
            }
            //return View(await _context.Categories.ToListAsync());
        }

        // GET: Categories/Details/5
        [HttpGet("Details/{id}")]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var category = await _context.Categories
                                                .Include(c => c.Descriptions)
                                                    .ThenInclude(d => d.Language)
                                                .Include(c => c.Images)
                                                .Include(c => c.Names)
                                                    .ThenInclude(n => n.Language)
                                            .SingleOrDefaultAsync(m => m.CategoryID == id);
            if (category == null)
            {
                return NotFound();
            }

            return new JsonResult(category.Adapt<Category>(), new Newtonsoft.Json.JsonSerializerSettings() { Formatting = Newtonsoft.Json.Formatting.Indented });
        }

        [HttpPost("UploadPictures")]
        public async Task<IActionResult> UploadPictures(string args)
        {
            var path = "wwwroot/dist/Assets/Images/Categories/";

            if (!Request.HasFormContentType)
                return BadRequest();

            // Create wwwroot\Files directory if needed
            if (!Directory.Exists(path))
            {
                DirectoryInfo di =
                    Directory.CreateDirectory(path);
            }
            var form = Request.Form;
            var imagePaths = new List<string>();
            try
            {
                // Process all Files
                foreach (var file in form.Files)
                {
                    // Process file
                    using (var readStream = file.OpenReadStream())
                    {
                        var filename = ContentDispositionHeaderValue
                                                .Parse(file.ContentDisposition)
                                                .FileName;

                        filename = path + filename.ToString().Replace("\"", "");
                        //Save file to harddrive
                        using (FileStream fs = System.IO.File.Create(filename.ToString()))
                        {
                            file.CopyTo(fs);
                            fs.Flush();
                            imagePaths.Add(filename.ToString());
                        }
                    }
                }
                return Ok(imagePaths);
            }
            catch (Exception ex)
            {
                var x = ex.ToString();
            }

            return BadRequest();
        }

        //[HttpPut]
        // GET: Categories/Create
        //public IActionResult Create()
        //{
        //    var tupleModel = new Tuple<Category, List<Language>>(new Category(), _context.Languages.ToList());

        //    return View(tupleModel);
        //}

        // POST: Categories/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPut("Create")]
        public async Task<IActionResult> Create([FromBody] Category category)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _context.Categories.Add(category);

                    if (category.Descriptions != null)
                    {
                        foreach (var description in category.Descriptions)
                        {
                            _context.Entry(description.Language).State = EntityState.Unchanged;
                        }
                    }

                    if (category.Names != null)
                    {
                        foreach (var name in category.Names)
                        {
                            _context.Entry(name.Language).State = EntityState.Unchanged;
                        }
                    }

                    if (category.Parent != null )
                    {
                        _context.Categories.Attach(category.Parent);
                        if (category.Parent.Descriptions.Count > 0)
                        {
                            foreach (var desc in category.Parent.Descriptions)
                            {
                                _context.CategoryDescriptions.Attach(desc);
                            }
                        }

                        if (category.Parent.Names.Count > 0)
                        {
                            foreach (var name in category.Parent.Names)
                            {
                                _context.CategoryNames.Attach(name);
                            }
                        }

                        if (category.Parent.Images.Count > 0)
                        {
                            foreach (var image in category.Parent.Images)
                            {
                                _context.CategoryImages.Attach(image);
                            }
                        }

                    }

                    _context.SaveChanges();

                    return new OkResult();
                }
                catch (Exception ex)
                {
                    var x = ex.ToString();
                }
            }
            return new BadRequestResult();
        }

        // GET: Categories/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var category = await _context.Categories.SingleOrDefaultAsync(m => m.CategoryID == id);
            if (category == null)
            {
                return NotFound();
            }
            return View(category);
        }

        // POST: Categories/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("CategoryID")] Category category)
        {
            if (id != category.CategoryID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(category);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CategoryExists(category.CategoryID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction("Index");
            }
            return View(category);
        }

        // GET: Categories/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var category = await _context.Categories.SingleOrDefaultAsync(m => m.CategoryID == id);
            if (category == null)
            {
                return NotFound();
            }

            return View(category);
        }

        // POST: Categories/Delete/5
        [HttpDelete("{id}")]
        //[HttpPost, ActionName("Delete")]
        //[ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            try
            {
                var category = await _context.Categories
                                            .Include(c => c.Descriptions)
                                            .Include(c => c.Images)
                                            .Include(c => c.Names)
                                            .SingleOrDefaultAsync(m => m.CategoryID == id);

                var childCategories = _context.Categories.Where(m => m.Parent.CategoryID == id);
                foreach(var childCat in childCategories)
                {
                    childCat.Parent = null;
                }
                await _context.SaveChangesAsync();

                _context.Categories.Remove(category);
                await _context.SaveChangesAsync();

                return new OkResult();
            }
            catch (Exception ex)
            {
                var x = ex.ToString();
            }

            return new BadRequestResult();
        }

        private bool CategoryExists(int? id)
        {
            return _context.Categories.Any(e => e.CategoryID == id);
        }
    }
}
