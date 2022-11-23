using Microsoft.AspNetCore.Mvc;
using vascan.Data;
using vascan.Models;
using System.Data.SqlClient;
using System.Data;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace vascan.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }


        [HttpPost]
        public IActionResult Entrar(LoginModel loginModel)
        {
            Conexao conn = new Conexao();
            try
            {
                var dt1 = new DataTable();
                SqlDataAdapter da1 = new SqlDataAdapter("SELECT * FROM dbo.usuarios", conn.conectarsql());
                DataSet ds1 = new DataSet();
                da1.Fill(ds1);
                DataTable Tabela1 = ds1.Tables[0];
                conn.desconectarsql();

                foreach (DataRow row1 in Tabela1.Rows)
                {
                    string tipo = row1[3].ToString();

                    if (ModelState.IsValid)
                    {
                        if (loginModel.Login == row1[1].ToString() && loginModel.Senha == row1[2].ToString() && loginModel.Tipo == tipo)
                        {
                            if (tipo == "secretario")
                            {
                                return RedirectToAction("IndexSec", "Home");
                            }
                            if (tipo == "aluno")
                            {
                                return RedirectToAction("indexAluno", "Home");
                            }
                            if (tipo == "professor")
                            {
                                return RedirectToAction("Index", "Home");
                            }
                            else
                            {
                                ModelState.AddModelError("", "Usuário ou senha inválidos");
                            }
                        }                       

                    }
                }
                return View("Index");
            }
            catch (Exception erro)
            {
                TempData["MensagemErro"] = $"Usuário e/ou senha estão inválidos 2";
                return RedirectToAction("Index");
            }
        }
    }
}
