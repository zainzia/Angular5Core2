using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Angular5Core2V3.Models.DataModels.Catalog
{
    public class CategoryImage
    {
        public int? CategoryImageID { get; set; }

        public string Path1 { get; set; }

        public string Path2 { get; set; }

        public string Path3 { get; set; }

    }
}
