namespace Backend.Models;

public class Grade
{
    public int Id { get; set; }
    public string Subject { get; set; } = "";
    public int Value { get; set; }        // 1-5
    public string Topic { get; set; } = "";
    public DateTime Date { get; set; }
    public string Teacher { get; set; } = "";
}
