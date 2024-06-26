﻿using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using vascan.Models;

namespace vascan.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult indexAluno()
        {
            return View();
        }
        public IActionResult IndexSec()
        {
            return View();
        }

        public IActionResult professorSec()
        {
            return View();
        }

        public IActionResult secretariaProf()
        {
            return View();
        }

        public IActionResult secretariaAluno()
        {
            return View();
        }


        public IActionResult calendarioSec()
        {
            return View();
        }

        public IActionResult alunosSec()
        {
            return View();
        }

        public IActionResult professorTurmas()
        {
            return View();
        }




        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}