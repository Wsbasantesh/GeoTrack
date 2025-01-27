using GeoTrack_Services.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.AspNetCore.Http.HttpResults;
namespace GeoTrack_Services.Endpoints
{

public static class TblVisitSurveyEndpoints
{
	public static void MapTblVisitSurveyEndpoints (this IEndpointRouteBuilder routes)
    {
        var group = routes.MapGroup("/api/TblVisitSurvey").WithTags(nameof(TblVisitSurvey));

        group.MapGet("/", async (GeoTrackContext db) =>
        {
            return await db.TblVisitSurveys.ToListAsync();
        })
        .WithName("GetAllTblVisitSurveys")
        .WithOpenApi();

        group.MapGet("/{id}", async Task<Results<Ok<TblVisitSurvey>, NotFound>> (int id, GeoTrackContext db) =>
        {
            return await db.TblVisitSurveys.AsNoTracking()
                .FirstOrDefaultAsync(model => model.Id == id)
                is TblVisitSurvey model
                    ? TypedResults.Ok(model)
                    : TypedResults.NotFound();
        })
        .WithName("GetTblVisitSurveyById")
        .WithOpenApi();

        group.MapPut("/{id}", async Task<Results<Ok, NotFound>> (int id, TblVisitSurvey tblVisitSurvey, GeoTrackContext db) =>
        {
            var affected = await db.TblVisitSurveys
                .Where(model => model.Id == id)
                .ExecuteUpdateAsync(setters => setters
                  .SetProperty(m => m.Id, tblVisitSurvey.Id)
                  .SetProperty(m => m.IdCard, tblVisitSurvey.IdCard)
                  .SetProperty(m => m.Date, tblVisitSurvey.Date)
                  .SetProperty(m => m.Latitude, tblVisitSurvey.Latitude)
                  .SetProperty(m => m.Longitude, tblVisitSurvey.Longitude)
                  .SetProperty(m => m.CompanyUser, tblVisitSurvey.CompanyUser)
                  .SetProperty(m => m.Cuestion1, tblVisitSurvey.Cuestion1)
                  .SetProperty(m => m.Cuestion2, tblVisitSurvey.Cuestion2)
                  .SetProperty(m => m.Cuestion3, tblVisitSurvey.Cuestion3)
                  .SetProperty(m => m.Cuestion4, tblVisitSurvey.Cuestion4)
                  .SetProperty(m => m.Cuestion5, tblVisitSurvey.Cuestion5)
                  .SetProperty(m => m.Cuestion6, tblVisitSurvey.Cuestion6)
                  .SetProperty(m => m.Cuestion7, tblVisitSurvey.Cuestion7)
                  .SetProperty(m => m.Cuestion8, tblVisitSurvey.Cuestion8)
                  .SetProperty(m => m.Cuestion9, tblVisitSurvey.Cuestion9)
                  .SetProperty(m => m.Cuestion10, tblVisitSurvey.Cuestion10)
                  );
            return affected == 1 ? TypedResults.Ok() : TypedResults.NotFound();
        })
        .WithName("UpdateTblVisitSurvey")
        .WithOpenApi();

        group.MapPost("/", async (TblVisitSurvey tblVisitSurvey, GeoTrackContext db) =>
        {
            db.TblVisitSurveys.Add(tblVisitSurvey);
            await db.SaveChangesAsync();
            return TypedResults.Created($"/api/TblVisitSurvey/{tblVisitSurvey.Id}",tblVisitSurvey);
        })
        .WithName("CreateTblVisitSurvey")
        .WithOpenApi();

        group.MapDelete("/{id}", async Task<Results<Ok, NotFound>> (int id, GeoTrackContext db) =>
        {
            var affected = await db.TblVisitSurveys
                .Where(model => model.Id == id)
                .ExecuteDeleteAsync();
            return affected == 1 ? TypedResults.Ok() : TypedResults.NotFound();
        })
        .WithName("DeleteTblVisitSurvey")
        .WithOpenApi();
    }
}}
