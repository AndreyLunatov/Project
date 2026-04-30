using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repositories_bd;

public class AppDbContext : DbContext
{
public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

public DbSet<Grade> Grades { get; set; }
public DbSet<Lessons> Lessons { get; set; }
public DbSet<Homework> Homeworks { get; set; }
public DbSet<User> Users { get; set; }
}
