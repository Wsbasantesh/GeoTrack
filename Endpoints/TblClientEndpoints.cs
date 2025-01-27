using GeoTrack_Services.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.AspNetCore.Http.HttpResults;
namespace GeoTrack_Services.Endpoints
{
public static class TblClientEndpoints
{
	public static void MapTblClientEndpoints (this IEndpointRouteBuilder routes)
    {
        var group = routes.MapGroup("/api/TblClient").WithTags(nameof(TblClient));

        group.MapGet("/", async (GeoTrackContext db) =>
        {
            return await db.TblClients.ToListAsync();
        })
        .WithName("GetAllTblClients")
        .WithOpenApi();

        group.MapGet("/{id}", async Task<Results<Ok<TblClient>, NotFound>> (int id, GeoTrackContext db) =>
        {
            return await db.TblClients.AsNoTracking()
                .FirstOrDefaultAsync(model => model.Id == id)
                is TblClient model
                    ? TypedResults.Ok(model)
                    : TypedResults.NotFound();
        })
        .WithName("GetTblClientById")
        .WithOpenApi();

        group.MapPut("/{id}", async Task<Results<Ok, NotFound>> (int id, TblClient tblClient, GeoTrackContext db) =>
        {
            var affected = await db.TblClients
                .Where(model => model.Id == id)
                .ExecuteUpdateAsync(setters => setters
                  .SetProperty(m => m.Id, tblClient.Id)
                  .SetProperty(m => m.Names, tblClient.Names)
                  .SetProperty(m => m.IdCard, tblClient.IdCard)
                  .SetProperty(m => m.Latitude, tblClient.Latitude)
                  .SetProperty(m => m.Longitude, tblClient.Longitude)
                  .SetProperty(m => m.Description, tblClient.Description)
                  .SetProperty(m => m.NumHouse, tblClient.NumHouse)
                  .SetProperty(m => m.NumPhone, tblClient.NumPhone)
                  .SetProperty(m => m.Email, tblClient.Email)
                  );
            return affected == 1 ? TypedResults.Ok() : TypedResults.NotFound();
        })
        .WithName("UpdateTblClient")
        .WithOpenApi();

        group.MapPost("/", async (TblClient tblClient, GeoTrackContext db) =>
        {
            db.TblClients.Add(tblClient);
            await db.SaveChangesAsync();
            return TypedResults.Created($"/api/TblClient/{tblClient.Id}",tblClient);
        })
        .WithName("CreateTblClient")
        .WithOpenApi();

        group.MapDelete("/{id}", async Task<Results<Ok, NotFound>> (int id, GeoTrackContext db) =>
        {
            var affected = await db.TblClients
                .Where(model => model.Id == id)
                .ExecuteDeleteAsync();
            return affected == 1 ? TypedResults.Ok() : TypedResults.NotFound();
        })
        .WithName("DeleteTblClient")
        .WithOpenApi();
    }
}}
