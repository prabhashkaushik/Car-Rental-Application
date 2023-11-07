using System.ComponentModel.DataAnnotations;

namespace finalpractice.Model
{
    public class AdminLogin
    {
        [Key]

        public int AdminId { get; set; }
        [Required]
        public string Email { get; set; } = string.Empty;

        [Required]
        public string Password { get; set; } = string.Empty;
    }
}
