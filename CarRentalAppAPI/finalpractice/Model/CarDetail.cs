using System.ComponentModel.DataAnnotations;

namespace finalpractice.Model
{
    public class CarDetail
    {

        [Key]
        public int VehicleId { get; set; } // Unique Identifier for the vehicle

        [Required]
        public string Maker { get; set; } = string.Empty; // Maker of the car (e.g. Audi)

        [Required]
        public string Model { get; set; } = string.Empty;
        [Required]
        
        public string RentalPrice { get; set; } = string.Empty;// Rental price per day

        [Required]
        public string AvailabilityStatus { get; set; } = string.Empty; // Availability status of the car

        public string CarImage { get; set; } = string.Empty;

    }
}
