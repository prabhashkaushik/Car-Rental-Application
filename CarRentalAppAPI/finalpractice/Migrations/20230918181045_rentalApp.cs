using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace finalpractice.Migrations
{
    /// <inheritdoc />
    public partial class rentalApp : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AvailabilityStatus",
                table: "RentalAgreemnetDataT");

            migrationBuilder.DropColumn(
                name: "Password",
                table: "RentalAgreemnetDataT");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AvailabilityStatus",
                table: "RentalAgreemnetDataT",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "RentalAgreemnetDataT",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
