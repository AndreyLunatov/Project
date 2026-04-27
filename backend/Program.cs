using System.Text;
using Microsoft.EntityFrameworkCore;
using Backend.Repositories_bd;
using Backend.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args); // создаём приложение

// ===== ЛОГИРОВАНИЕ =====
builder.Logging.ClearProviders();  // убираем стандартные логи
builder.Logging.AddConsole();      // добавляем логи в консоль
builder.Logging.AddDebug();        // добавляем логи для дебага

// ===== CORS — разрешаем React обращаться к API =====
builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:5173", "http://localhost:3000")
            .AllowAnyHeader()    // разрешаем любые заголовки
            .AllowAnyMethod()    // разрешаем GET POST PUT DELETE
            .AllowCredentials(); // разрешаем куки и токены
    });
});

// ===== БАЗА ДАННЫХ =====
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration
        .GetConnectionString("DefaultConnection"))); // берём строку из appsettings.json

// ===== РЕГИСТРИРУЕМ AUTHSERVICE =====
// AddScoped — один объект на один запрос, потом удаляется
builder.Services.AddScoped<AuthService>();

// ===== JWT АВТОРИЗАЦИЯ =====
var jwtKey = builder.Configuration["Jwt:Key"]!; // берём ключ из appsettings.json

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,           // проверяем кто выдал токен
            ValidateAudience = true,         // проверяем кому выдан токен
            ValidateLifetime = true,         // проверяем не истёк ли токен
            ValidateIssuerSigningKey = true, // проверяем подпись токена
            ValidIssuer = builder.Configuration["Jwt:Issuer"],     // "Backend"
            ValidAudience = builder.Configuration["Jwt:Audience"], // "Frontend"
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(jwtKey)) // секретный ключ для проверки
        };
    });

// ===== КОНТРОЛЛЕРЫ И SWAGGER =====
builder.Services.AddControllers(); // включаем контроллеры
builder.Services.AddOpenApi();     // включаем Swagger документацию

var app = builder.Build(); // собираем приложение

// ===== MIDDLEWARE (порядок важен!) =====
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi(); // Swagger только в режиме разработки
}

app.UseCors("ReactApp");       // 1. CORS
app.UseHttpsRedirection();     // 2. перенаправление на HTTPS
app.UseAuthentication();       // 3. проверяем кто ты (токен)
app.UseAuthorization();        // 4. проверяем что тебе можно делать
app.MapControllers();          // 5. подключаем контроллеры

app.Run(); // запускаем!
