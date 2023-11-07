using finalpractice.Model;
using Microsoft.EntityFrameworkCore;

namespace finalpractice.Modle
{
    public class CarRentalContext : DbContext
    {
        public CarRentalContext(DbContextOptions<CarRentalContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<AdminLogin> AdminLogins { get; set; }
        public DbSet<CarDetail> CarDetails { get; set; }
        public DbSet<RentalAgreemnetData> RentalAgreemnetDataT { get; set; }
    }
}
