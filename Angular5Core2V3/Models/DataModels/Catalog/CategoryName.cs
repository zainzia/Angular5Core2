using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Angular5Core2V3.Models.DataModels.Catalog
{
    public class CategoryName
    {
        public int? CategoryNameID { get; set; }

        public string Name { get; set; }
        
        public Language Language { get; set; }

    }
}
