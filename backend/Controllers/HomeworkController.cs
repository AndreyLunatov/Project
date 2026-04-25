using Microsoft.AspNetCore.Mvc;
using Backend.Models;

namespace bekand.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HomeworkController : ControllerBase
{
    [HttpGet]
    public IActionResult GetAll()
    {
        var homework = new List<Homework>
        {
            new() { Id=1, Subject="Математика", Task="Решить задачи №15-20", Description="Тема: Тригонометрия", Deadline=DateTime.Now.AddDays(1), Status="pending" },
            new() { Id=2, Subject="Английский", Task="Написать эссе", Description="200-250 слов", Deadline=DateTime.Now.AddDays(2), Status="pending" },
        };
        return Ok(homework);
    }

    [HttpPut("{id}/complete")]
    public IActionResult Complete(int id)
    {
        // Потом тут будет обновление в БД
        return Ok(new { Message = $"Задание {id} выполнено" });
    }
}
