using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

using Angular5Core2V3.Models.DataModels.Catalog;

namespace Angular5Core2V3.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {

        public DbSet<Category> Categories { get; set; }
        public DbSet<CategoryDescription> CategoryDescriptions { get; set; }
        public DbSet<CategoryImage> CategoryImages { get; set; }
        public DbSet<CategoryName> CategoryNames { get; set; }
        public DbSet<Language> Languages { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            //Category
            builder.Entity<Category>().HasKey(c => c.CategoryID);
            builder.Entity<Category>().Property(u => u.CategoryID).UseSqlServerIdentityColumn();
            builder.Entity<Category>().HasMany(u => u.Descriptions).WithOne().OnDelete(DeleteBehavior.Cascade);
            builder.Entity<Category>().HasMany(u => u.Names).WithOne().OnDelete(DeleteBehavior.Cascade);
            builder.Entity<Category>().HasMany(u => u.Images).WithOne().OnDelete(DeleteBehavior.Cascade);

            builder.Entity<CategoryImage>().HasKey(c => c.CategoryImageID);
            builder.Entity<CategoryImage>().Property(u => u.CategoryImageID).UseSqlServerIdentityColumn();
            builder.Entity<CategoryImage>().Property(u => u.Path1).IsRequired();

            builder.Entity<CategoryDescription>().HasKey(c => c.CategoryDescriptionID);
            builder.Entity<CategoryDescription>().Property(u => u.CategoryDescriptionID).UseSqlServerIdentityColumn();
            builder.Entity<CategoryDescription>().Property(u => u.Description1).IsRequired();

            builder.Entity<CategoryName>().HasKey(c => c.CategoryNameID);
            builder.Entity<CategoryName>().Property(u => u.CategoryNameID).UseSqlServerIdentityColumn();
            builder.Entity<CategoryName>().Property(u => u.Name).IsRequired();

            //Language
            builder.Entity<Language>().HasKey(c => c.LanguageID);
            builder.Entity<Language>().Property(u => u.LanguageID).UseSqlServerIdentityColumn();
            builder.Entity<Language>().Property(u => u.Name).IsRequired();
            builder.Entity<Language>().Property(u => u.Culture).IsRequired();

        }

    }
}
