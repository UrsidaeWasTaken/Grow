using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Grow.Models
{
    public class Plant
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        [Column(TypeName = "decimal(9,2)")]
        public decimal Price { get; set; }

        [MaxLength(1500, ErrorMessage = "Cannot exceed 1500 characters.")]
        public string Description { get; set; }

        [DefaultValue("https://yaoizbsyarnz.managedwp.com.au/wp-content/uploads/2020/06/no-image.jpg")]
        public string ImageUrl { get; set; }
    }
}
