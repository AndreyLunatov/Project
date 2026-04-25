namespace Backend.Models;

public class Homework
{
    public int Id { get; set; }
    public string Subject { get; set; } = "";
    public string Task { get; set; } = "";
    public string Description { get; set; } = "";
    public DateTime Deadline { get; set; }
    public string Status { get; set; } = "pending"; // pending/completed/overdue
}
