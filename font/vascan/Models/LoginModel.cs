using Microsoft.Build.Framework;
using RequiredAttribute = System.ComponentModel.DataAnnotations.RequiredAttribute;
using System.Data;
using System.Data.SqlClient;

namespace vascan.Models
{
    public class LoginModel
    {
        [Required(ErrorMessage = "x")]
        public string Login { get; set; }
        [Required(ErrorMessage = "y")]
        public string Senha { get; set; }
        [Required(ErrorMessage = "z")]
        public string Tipo { get; set; }
    }
}
