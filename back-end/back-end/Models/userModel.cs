using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace back_end.Models
{
    public class userModel
    {
        [Key]
        public string Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public String Email { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public bool isAdmin { get; set; }

        public DateTime createAt { get; set; }
        public DateTime updateAt{ get; set; }

    }
}