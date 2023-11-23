using Microsoft.EntityFrameworkCore;
using SE.Models;
using System.Reflection.Metadata;

namespace SE.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Tag> Tags { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DocumentTags>().HasKey(ht => new { ht.documentID, ht.tagID });
        }
        public DbSet<Documents> Documents { get; set; }
    }
}
