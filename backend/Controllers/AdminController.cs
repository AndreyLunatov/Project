using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Backend.DTOs;
using Backend.Services;

namespace Backend.Controllers;

[ApiExplorerSettings(IgnoreApi = true)] // скрыто из Swagger
[Authorize(Roles = "admin")]            // только админ
[ApiController]
[Route("api/manage")]                   // не называем "admin"
public class ManageController : ControllerBase
{
    private readonly AuthService _authService;

    public ManageController(AuthService authService)
    {
        _authService = authService;
    }

    // Создание пользователя только админом
    [HttpPost("create-user")]
    public async Task<IActionResult> CreateUser([FromBody] RegisterDto dto)
    {
        var token = await _authService.Register(dto);

        if (token == null)
            return NotFound(); // 404 вместо 400 — скрываем что endpoint существует

        return Ok(new { Message = "Пользователь создан" });
    }
}
