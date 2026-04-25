using Microsoft.AspNetCore.Mvc;
using Backend.Models;
namespace Backend.Controllers;


[ApiController]
[Route("api/[controller]")]
public class ScheduleController : ControllerBase
{
    [HttpGet("{dayOfWeek}")]
    public IActionResult GetByDay(int dayOfWeek)
    {
        var lessons = new List<Lessons>
        {
            new() { Id=1, Subject="Математика", Teacher="Иванова А.П.", Room="205", Time="08:30", DayOfWeek=dayOfWeek, LessonNumber=1 },
            new() { Id=2, Subject="Физика", Teacher="Петров В.И.", Room="301", Time="09:30", DayOfWeek=dayOfWeek, LessonNumber=2 },
        };
        return Ok(lessons);
    }
}
