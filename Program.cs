using GeoTrack_Services.Endpoints;  // Asegúrate de importar solo el espacio de nombres correcto
using Microsoft.EntityFrameworkCore;
using GeoTrack_Services.Models;
using Microsoft.Extensions.Options;
using GeoTrack_Services.Controllers;

var builder = WebApplication.CreateBuilder(args);

// Agregar el servicio de DbContext
builder.Services.AddDbContext<GeoTrackContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Data Source=JAVIERDIAZ\\SQLEXPRESS;Initial Catalog=GeoTrack;Integrated Security=True;Connect Timeout=30;Encrypt=True;Trust Server Certificate=True;Application Intent=ReadWrite;Multi Subnet Failover=False")));

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

// Aquí solo necesitamos llamar una vez a MapTblLoginEndpoints()
app.MapTblLoginEndpoints();  // Esto debe estar en GeoTrack_Services.Endpoints

app.MapTblClientEndpoints();

app.MapTblPaymentEndpoints();

app.MapTblVisitSurveyEndpoints();

app.Run();
