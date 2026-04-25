namespace Backend.Models;

public class Lessons
{
    public int Id { get; set; }
    public string Subject { get; set; } = "";
    public string Teacher { get; set; } = "";
    public string Room { get; set; } = "";
    public string Time { get; set; } = "";  // "08:30"
    public int DayOfWeek { get; set; }      // 0=Пн, 4=Пт
    public int LessonNumber { get; set; }
}
