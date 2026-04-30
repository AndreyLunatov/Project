using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Backend.Repositories_bd;
using Microsoft.EntityFrameworkCore;



namespace Backend.Controllers;
[ApiController]
[Route("[controller]")]
[Authorize]

public class DashboardController : ControllerBase
{

    private readonly  AppDbContext _db;
    public DashboardController(AppDbContext db)
    {
        _db = db;
    }
    // GET api/dashboard
    // Все данные для главной страницы одним запросом
    [HttpGet]
    public async Task<IActionResult> GetDashboardData()
    {
       var recentGrades = await _db.Grades
           .OrderByDescending(g => g.Date)
           .Take(5)
           .ToListAsync();

       // Предстоящие задачи (дедлайн в будущем)
       var upcomingHomework = await _db.Homeworks
           .Where(h => h.Deadline > DateTime.UtcNow && h.Status == "pending")
           .OrderBy(h => h.Deadline)
           .Take(5)
           .ToListAsync();
       // Средний балл по каждому предмету (карточки на главной)
       var subjectStats = await _db.Grades
           .GroupBy(g => g.Subject)
           .Select(g => new
           {
               Subject = g.Key,
               Average = Math.Round(g.Average(x => x.Value), 1),
               Count = g.Count()
           })
           .ToListAsync();




       return Ok(new
       {
           recentGrades,      // последние оценки
           upcomingHomework,  // предстоящие задачи
           subjectStats       // карточки со средним баллом
       });
    }
}
