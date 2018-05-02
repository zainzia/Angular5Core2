using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Angular5Core2V3.Models.DataModels.Catalog
{
    public class Category
    {

        public Category()
        {
            DateCreated = DateTime.Now;
        }

        public int? CategoryID { get; set; }

        public Category Parent { get; set; }

        public IList<CategoryDescription> Descriptions { get; set; }

        public IList<CategoryImage> Images { get; set; }

        public IList<CategoryName> Names { get; set; }

        public DateTime? DateCreated { get; set; }

    }
}