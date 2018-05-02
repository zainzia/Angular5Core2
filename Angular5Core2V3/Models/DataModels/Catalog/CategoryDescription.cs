using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Angular5Core2V3.Models.DataModels.Catalog
{
    public class CategoryDescription
    {
        public int? CategoryDescriptionID { get; set; }

        public string Description1 { get; set; }

        public string Description2 { get; set; }

        public string Description3 { get; set; }

        public Language Language { get; set; }

    }
}
