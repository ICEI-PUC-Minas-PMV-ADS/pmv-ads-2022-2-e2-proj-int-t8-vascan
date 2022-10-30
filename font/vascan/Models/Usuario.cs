using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlClient;

namespace vascan.Models
{
    [Table("Usuário")]
    public class Usuario
    {
        [Key]
        [Display(Name ="Código")]
        [Column("Id")]
        public int id { get; set; }

        [Display(Name = "Nome")]
        [Column("Nome")]
        public string Nome { get; set; }

        [Display(Name = "Senha")]
        [Column("Senha")]
        public string Senha { get; set; }

        [Display(Name = "Tipo")]
        [Column("Tipo")]
        public string Tipo { get; set; }
    }
}
