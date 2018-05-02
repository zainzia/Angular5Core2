using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular5Core2V3.Models.DataModels.Catalog;

namespace Angular5Core2V3.Data
{
    public static class DbInitializer
    {
        public static void InitializeCatalog(ApplicationDbContext dbContext)
        {
            dbContext.Database.EnsureCreated();

            //var categoryList = new List<Category>();

            //var category1 = new Category()
            //{
            //    Parent = null,
            //    Descriptions = new CategoryDescription[1]
            //    {
            //        new CategoryDescription()
            //        {
            //            Description1 = "TestDescription1", Description2 = "TestDescription2", Description3 = "TestDescription3", Language = commonDbContext.Languages.FirstOrDefault(x => x.LanguageID == 0)
            //        }
            //    },
            //    Names = new CategoryName[1]
            //    {
            //        new CategoryName()
            //        {
            //             Name = "TestName", Language = commonDbContext.Languages.FirstOrDefault(x => x.LanguageID == 0)
            //        }
            //    },
            //    Images = new CategoryImage[1] 
            //    {
            //        new CategoryImage()
            //        {
            //            Path1 = "TestPath1", Path2 = "TestPath2", Path3 = "TestPath3"
            //        }
            //    }

            //};
            //var category2 = new Category() { Parent = null };
            //var category3 = new Category() { Parent = null };
            //var category4 = new Category() { Parent = null };
            //var category5 = new Category() { Parent = category2 };
            //var category6 = new Category() { Parent = category3 };
            //var category7 = new Category() { Parent = category2 };
            //var category8 = new Category() { Parent = category3 };
            //var category9 = new Category() { Parent = category6 };
            //var category10 = new Category() { Parent = category8 };
            //var category11 = new Category() { Parent = null };
            //var category12 = new Category() { Parent = null };

            //categoryList.Add(category1);
            //categoryList.Add(category2);
            //categoryList.Add(category3);
            //categoryList.Add(category4);
            //categoryList.Add(category5);
            //categoryList.Add(category6);
            //categoryList.Add(category7);
            //categoryList.Add(category8);
            //categoryList.Add(category9);
            //categoryList.Add(category10);
            //categoryList.Add(category11);
            //categoryList.Add(category12);

            //foreach (var cat in categoryList)
            //{
            //dbContext.Categories.Add(category1);
            //}

            //dbContext.SaveChanges();

        }
    }
}
