using System.Security.Claims;
using Backend.DTOs;
using Backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Backend.Repositories_bd;

namespace Backend.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{   private readonly AppDbContext _context;
    private readonly AuthService _authService;

    public AuthController(AuthService authService, AppDbContext context)
    {
        _authService = authService;
        _context = context;
    }

    // POST api/auth/register
    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterDto dto)
    {
        var token = await _authService.Register(dto);

        if (token == null)
            return BadRequest(new { messenge = "Пользователь с таким email уже существует" });

        return Ok(new { token });
    }

    // POST api/auth/login
    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDto dto)
    {
        var token = await _authService.Login(dto);

        if (token == null)
            return Unauthorized(new { message = "Неверный email или пароль" });

        return Ok(new { token });
    }


    // GET api/auth/me
    [HttpGet("me")]
    [Authorize]
    public async Task<IActionResult> GetCurrentUser() // 👈 3. Переименовал и убрал параметр
    {
        // 4. Получаем userId из токена
        var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (string.IsNullOrEmpty(userIdClaim) || !int.TryParse(userIdClaim, out int userId))
            return Unauthorized(new { message = "Неверный токен" });

        // 5. Используем _context напрямую
        var user = await _context.Users.FindAsync(userId);
        if (user == null)
            return Unauthorized(new { message = "Пользователь не найден" });

        // 6. Возвращаем нужные поля (без пароля)
        return Ok(new
        {
            user.Id,
            user.Email,
            user.Name,
            user.Role
        });
    }


}
