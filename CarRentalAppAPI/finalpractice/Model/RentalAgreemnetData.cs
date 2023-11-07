using System.ComponentModel.DataAnnotations;

namespace finalpractice.Model
{
    public class RentalAgreemnetData
    {
        [Key]
        public int RentalAgreementId { get; set; } // Unique identifier for the rental agreement

        [Required]
        public int VehicleId { get; set; } // Unique Identifier for the vehicle

        [Required]
        public string Maker { get; set; } = string.Empty; // Maker of the car (e.g. Audi)

        [Required]
        public string Model { get; set; } = string.Empty;
  
        public string RentalPrice { get; set; } = string.Empty;// Rental price per day

      

        public string CarImage { get; set; } = string.Empty;

        [Required]
        public int UserId { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        [Required]
        public string Email { get; set; } = string.Empty;

        [Required]
        public string PhoneNumber { get; set; } = string.Empty;

        [Required]
        public string Address { get; set; } = string.Empty;

        [Required]
        public int StartRentalDuration { get; set; }
        [Required]
        public int  EndRentalDuration { get; set; }

        public string IsReturned { get; set; } = string.Empty;

        public string RequestForReturn { get; set; } = string.Empty;

    }
}
