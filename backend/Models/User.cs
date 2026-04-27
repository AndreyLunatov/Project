namespace Backend.Models;

public class User
{
    public int Id { get; set; }
    public string  Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;
    public string Role { get; set; } = "student"; // student/teacher/admin
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
