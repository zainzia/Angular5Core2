using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Angular5Core2V3.Models.DataModels.Catalog;

using Angular5Core2V3.Data;
using Mapster;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Angular5Core2V3.Controllers.Common
{
    [Route("API/Common/Languages")]
    public class LanguageController : Controller
    {

        private readonly ApplicationDbContext _context;

        public LanguageController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/<controller>
        [HttpGet]
        [HttpGet("GetAll")]
        public async Task<IActionResult> Get()
        { 
            try
            {
                var list = await _context.Languages.ToListAsync();

                return new JsonResult(list.OrderBy(x => x.Name).Adapt<Language[]>(),
                    new Newtonsoft.Json.JsonSerializerSettings() { Formatting = Newtonsoft.Json.Formatting.Indented });
            }
            catch (Exception ex)
            {
                var x = ex.ToString();
            }

            return new EmptyResult();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
