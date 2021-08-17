using Grow.Models;
using Microsoft.EntityFrameworkCore;

namespace Grow.Data
{
    public class PlantContext : DbContext
    {
        public PlantContext(DbContextOptions options) : base(options) { }

        public DbSet<Plant> Plants { get; set; }
    }
}
