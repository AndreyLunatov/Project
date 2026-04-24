# Backend Documentation - ASP.NET Core

Полная документация ASP.NET Core 10.0 backend для COCO приложения.

## 📁 Структура проекта

```
bekand/
├── Controllers/                     # API контроллеры
│   └── HealthController.cs         # Пример контроллера (GET endpoints)
│
├── Properties/                      # Конфигурация проекта
│   └── launchSettings.json         # Dev сервер настройки
│
├── Program.cs                       # Главная конфигурация приложения
├── bekand.csproj                    # Project file с зависимостями
│
├── appsettings.json                 # Production конфигурация
├── appsettings.Development.json     # Development конфигурация
│
└── bin/Debug/                       # Build артефакты (игнорируется)
    └── net10.0/
```

## 🚀 Быстрый старт

### Требования

- .NET SDK 10.0+
- Visual Studio 2022, Rider, или VSCode

### Запуск Development сервера

```bash
cd bekand
dotnet run
```

**Server доступен на:**

- HTTP:  http://localhost:5000
- HTTPS: https://localhost:5001

**Swagger UI:** http://localhost:5000/swagger

### Build проекта

```bash
dotnet build
```

### Production сборка

```bash
dotnet publish -c Release
```

Результат в: `bin/Release/net10.0/publish/`

## 📋 Program.cs - Главная конфигурация

```csharp
// 1. Логирование
builder.Logging.ClearProviders();
builder.Logging.AddConsole();
builder.Logging.AddDebug();

// 2. CORS политика
builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:5173", "http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

// 3. Контроллеры и Swagger
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// 4. Middleware
app.UseCors("ReactApp");
app.UseSwagger();
app.UseSwaggerUI();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
```

## 🔧 Конфигурация

### appsettings.json (Production)

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "DefaultConnection": "Server=.;Database=COCO;Trusted_Connection=true;"
  },
  "ApiSettings": {
    "BaseUrl": "http://localhost:5000",
    "ApiVersion": "v1"
  }
}
```

### appsettings.Development.json (Development)

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Debug",
      "Microsoft.AspNetCore": "Information"
    }
  },
  "ApiSettings": {
    "EnableSwagger": true,
    "EnableDetailedErrors": true
  }
}
```

### launchSettings.json (Dev URLs)

```json
{
  "profiles": {
    "http": {
      "commandName": "Project",
      "dotnetRunMessages": true,
      "launchBrowser": true,
      "launchUrl": "swagger",
      "applicationUrl": "http://localhost:5000",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    }
  }
}
```

Для изменения порта:

- Поменяйте `"applicationUrl": "http://localhost:5001"`
- Обновите frontend proxy в `vite.config.js`

## 📝 API Endpoints

### Health Check

Пример контроллера в `Controllers/HealthController.cs`

**GET** `/api/health/status` - Проверка состояния

```bash
curl http://localhost:5000/api/health/status
```

**Ответ:**

```json
{
  "status": "healthy",
  "timestamp": "2026-04-23T10:00:00Z",
  "version": "1.0.0"
}
```

**GET** `/api/health/info` - Информация об API

```bash
curl http://localhost:5000/api/health/info
```

**Ответ:**

```json
{
  "api": "COCO API",
  "version": "1.0.0",
  "environment": "Development",
  "timestamp": "2026-04-23T10:00:00Z"
}
```

## 🏗 Создание новых Endpoints

### Пример простого контроллера

**Файл: `Controllers/UsersController.cs`**

```csharp
using Microsoft.AspNetCore.Mvc;

namespace bekand.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly ILogger<UsersController> _logger;

    public UsersController(ILogger<UsersController> logger)
    {
        _logger = logger;
    }

    /// <summary>
    /// Получить всех пользователей
    /// </summary>
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public IActionResult GetAll()
    {
        _logger.LogInformation("Getting all users");
        
        var users = new List<User>
        {
            new User { Id = 1, Name = "John", Email = "john@example.com" },
            new User { Id = 2, Name = "Jane", Email = "jane@example.com" }
        };
        
        return Ok(users);
    }

    /// <summary>
    /// Получить пользователя по ID
    /// </summary>
    [HttpGet("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public IActionResult GetById(int id)
    {
        _logger.LogInformation($"Getting user {id}");
        
        var user = new User { Id = id, Name = "John", Email = "john@example.com" };
        return Ok(user);
    }

    /// <summary>
    /// Создать нового пользователя
    /// </summary>
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public IActionResult Create([FromBody] CreateUserRequest request)
    {
        _logger.LogInformation($"Creating user: {request.Name}");
        
        var user = new User { Id = 3, Name = request.Name, Email = request.Email };
        return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);
    }

    /// <summary>
    /// Обновить пользователя
    /// </summary>
    [HttpPut("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public IActionResult Update(int id, [FromBody] UpdateUserRequest request)
    {
        _logger.LogInformation($"Updating user {id}");
        
        var user = new User { Id = id, Name = request.Name, Email = request.Email };
        return Ok(user);
    }

    /// <summary>
    /// Удалить пользователя
    /// </summary>
    [HttpDelete("{id}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public IActionResult Delete(int id)
    {
        _logger.LogInformation($"Deleting user {id}");
        return NoContent();
    }
}

// Model классы
public class User
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string Email { get; set; } = "";
}

public class CreateUserRequest
{
    public string Name { get; set; } = "";
    public string Email { get; set; } = "";
}

public class UpdateUserRequest
{
    public string Name { get; set; } = "";
    public string Email { get; set; } = "";
}
```

## 🔌 HTTP методы

### GET - Получение данных

```csharp
[HttpGet("{id}")]
public IActionResult GetById(int id)
```

### POST - Создание

```csharp
[HttpPost]
public IActionResult Create([FromBody] CreateRequest request)
```

### PUT - Полное обновление

```csharp
[HttpPut("{id}")]
public IActionResult Update(int id, [FromBody] UpdateRequest request)
```

### PATCH - Частичное обновление

```csharp
[HttpPatch("{id}")]
public IActionResult PartialUpdate(int id, [FromBody] PatchRequest request)
```

### DELETE - Удаление

```csharp
[HttpDelete("{id}")]
public IActionResult Delete(int id)
```

## 📊 Response коды

| Код | Значение       | Использование      |
|-----|----------------|--------------------|
| 200 | OK             | Успешный GET, PUT  |
| 201 | Created        | Успешный POST      |
| 204 | No Content     | Успешный DELETE    |
| 400 | Bad Request    | Неверные параметры |
| 401 | Unauthorized   | Не авторизован     |
| 403 | Forbidden      | Нет доступа        |
| 404 | Not Found      | Ресурс не найден   |
| 500 | Internal Error | Ошибка сервера     |

### Пример с кодами

```csharp
[HttpGet("{id}")]
[ProducesResponseType(StatusCodes.Status200OK)]
[ProducesResponseType(StatusCodes.Status404NotFound)]
public IActionResult GetById(int id)
{
    if (id <= 0)
        return BadRequest("ID must be positive");
        
    var user = GetUserFromDb(id);
    if (user == null)
        return NotFound($"User {id} not found");
        
    return Ok(user);
}
```

## 🧪 Тестирование API

### Swagger UI (Встроенный)

1. Запустите `dotnet run`
2. Откройте http://localhost:5000/swagger
3. Нажимайте "Try it out" для каждого endpoint

### cURL (Command Line)

```bash
# GET
curl http://localhost:5000/api/users

# POST
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com"}'

# PUT
curl -X PUT http://localhost:5000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane","email":"jane@example.com"}'

# DELETE
curl -X DELETE http://localhost:5000/api/users/1
```

### Postman/Insomnia

1. Импортируйте Swagger JSON: http://localhost:5000/swagger/v1/swagger.json
2. Используйте коллекцию для тестирования

## 🔐 CORS конфигурация

### Development (Разрешить все)

```csharp
options.AddPolicy("Development", policy =>
{
    policy.AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod();
});
```

### Production (Ограничить)

```csharp
options.AddPolicy("Production", policy =>
{
    policy.WithOrigins("https://example.com")
        .WithMethods("GET", "POST")
        .WithHeaders("Content-Type");
});
```

### Включить в Program.cs

```csharp
if (app.Environment.IsProduction())
    app.UseCors("Production");
else
    app.UseCors("Development");
```

## 📝 Логирование

```csharp
private readonly ILogger<MyController> _logger;

// Info
_logger.LogInformation("User created: {UserId}", userId);

// Warning
_logger.LogWarning("High memory usage: {Memory}MB", usage);

// Error
_logger.LogError(ex, "Failed to process request");

// Debug
_logger.LogDebug("Database query: {Query}", sqlQuery);
```

## 🛠️ Полезные NuGet пакеты

```bash
# Уже установлены
dotnet add package Microsoft.AspNetCore.OpenApi

# Опционально для будущего
dotnet add package EntityFrameworkCore
dotnet add package Serilog
dotnet add package AutoMapper
```

## 🚀 Production Deploy

### 1. Build Release версию

```bash
dotnet publish -c Release -o ./publish
```

### 2. Переместить на сервер

```bash
# Коияр папку publish на сервер
scp -r ./publish user@server:/app/
```

### 3. Запустить на сервере

```bash
cd /app/publish
ASPNETCORE_ENVIRONMENT=Production dotnet bekand.dll
```

### 4. Nginx reverse proxy

```nginx
server {
    listen 80;
    server_name api.example.com;
    
    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 5. Docker deployment

```dockerfile
FROM mcr.microsoft.com/dotnet/sdk:10.0 as builder
WORKDIR /src
COPY . .
RUN dotnet publish -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:10.0
WORKDIR /app
COPY --from=builder /app/publish .
ENV ASPNETCORE_URLS=http://+:5000
EXPOSE 5000
ENTRYPOINT ["dotnet", "bekand.dll"]
```

```bash
# Build Docker image
docker build -t coco-api .

# Run container
docker run -p 5000:5000 coco-api
```

## 📚 Дополнительные ресурсы

- [ASP.NET Core Docs](https://learn.microsoft.com/aspnet/core/)
- [Web API Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://httpwg.org/specs/rfc7231.html#status.codes)
- [CORS explained](https://enable-cors.org/)

## 🤝 Contributing

Стандарты кода:

1. Используйте PascalCase для public членов
2. Используйте camelCase для private переменных
3. Добавляйте XML comments для public API
4. Логируйте важные события
5. Возвращайте правильные HTTP коды

---

**Все готово к разработке!** 🚀

Запустите `dotnet run` для обновления Server.

