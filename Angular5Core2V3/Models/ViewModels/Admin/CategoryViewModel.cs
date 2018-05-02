using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

using Angular5Core2V3.Models.DataModels.Catalog;

namespace Angular5Core2V3.Models.ViewModels.Admin
{
    [JsonObject(MemberSerialization.OptOut)]
    public class CategoryViewModel
    {
        public int CategoryID { get; set; }
        public Category Parent { get; set; }
        public IList<CategoryDescription> Descriptions { get; set; }
        public IList<CategoryImage> Images { get; set; }
        public IList<CategoryName> Names { get; set; }

    }
}
