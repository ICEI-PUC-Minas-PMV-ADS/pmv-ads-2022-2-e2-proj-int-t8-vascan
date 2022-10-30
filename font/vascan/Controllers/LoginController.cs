using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using vascan.Data;
using vascan.Models;
using System.Data.SqlClient;
using System.Data;

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
                    //string login = row1[1].ToString();
                    //string senha = row1[2].ToString();
                    string tipo = row1[3].ToString();
                    //Response.Cookies.Append("Erro", login);
                    //Response.Cookies.Append("Erro2", senha);
                    //Response.Cookies.Append("Erro3", tipo);

                    if (ModelState.IsValid)
                    {
                        if (loginModel.Login == row1[1].ToString() && loginModel.Senha == row1[2].ToString() && loginModel.Tipo == tipo)
                        {
                            if (tipo == "secretario")
                            {
                                return RedirectToAction("indexSec", "Home");
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

                            return RedirectToAction("Index", "Home");
                        }
                        //Response.Cookies.Append("msgErro", "Invalido");
                        //ModelState.AddModelError("", "Usuário ou senha inválidos");

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
