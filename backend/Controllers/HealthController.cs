using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

/// <summary>
/// Контроллер для проверки состояния API
/// </summary>
[ApiController]
[Route("api/[controller]")]
public class HealthController : ControllerBase
{
    private readonly ILogger<HealthController> _logger;

    public HealthController(ILogger<HealthController> logger)
    {
        _logger = logger;
    }

    /// <summary>
    /// Проверка состояния API
    /// </summary>
    /// <returns>Объект с информацией о состоянии</returns>
    [HttpGet("status")]
    [ProducesResponseType(typeof(HealthResponse), StatusCodes.Status200OK)]
    public IActionResult GetStatus()
    {
        _logger.LogInformation("Health check requested");

        var response = new HealthResponse
        {
            Status = "healthy",
            Timestamp = DateTime.UtcNow,
            Version = "1.0.0"
        };

        return Ok(response);
    }

    /// <summary>
    /// Получить список доступных endpoints
    /// </summary>
    [HttpGet("info")]
    public IActionResult GetInfo()
    {
        return Ok(new
        {
            api = "COCO API",
            version = "1.0.0",
            environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production",
            timestamp = DateTime.UtcNow
        });
    }
}

/// <summary>
/// Модель ответа для проверки состояния
/// </summary>
public class HealthResponse
{
    public string Status { get; set; } = "healthy";
    public DateTime Timestamp { get; set; }
    public string Version { get; set; } = "1.0.0";
}

