using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace finalpractice.Migrations
{
    /// <inheritdoc />
    public partial class carRent : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RentalAgreements");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RentalAgreements",
                columns: table => new
                {
                    RentalAgreementId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    VehicleId = table.Column<int>(type: "int", nullable: false),
                    IsReturned = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RentalDuration = table.Column<int>(type: "int", nullable: false),
                    RequestForReturn = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RentalAgreements", x => x.RentalAgreementId);
                    table.ForeignKey(
                        name: "FK_RentalAgreements_CarDetails_VehicleId",
                        column: x => x.VehicleId,
                        principalTable: "CarDetails",
                        principalColumn: "VehicleId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RentalAgreements_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RentalAgreements_UserId",
                table: "RentalAgreements",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_RentalAgreements_VehicleId",
                table: "RentalAgreements",
                column: "VehicleId");
        }
    }
}
