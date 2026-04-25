using Microsoft.AspNetCore.Mvc;
using Backend.Models;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GradesController : ControllerBase
{
    [HttpGet]
    public IActionResult GetAll()
    {

        // Пока заглушка — потом заменить на PostgreSQL
        var grades = new List<Grade>
        {
            new() { Id=1, Subject="Математика", Value=5, Topic="Контрольная работа", Date=DateTime.Now, Teacher="Иванова А.П." },
            new() { Id=2, Subject="Физика", Value=4, Topic="Лабораторная работа", Date=DateTime.Now.AddDays(-1), Teacher="Петров В.И." },
        };
        return Ok(grades);
    }
}
