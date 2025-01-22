
using GeoTrack_Services.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;


namespace GeoTrack_Services.Endpoints;

public static class TblLoginEndpoints
{
    public static void MapTblLoginEndpoints(this IEndpointRouteBuilder routes)
    {
        var group = routes.MapGroup("/api/TblLogin").WithTags(nameof(TblLogin));

        group.MapGet("/", async (GeoTrackContext db) =>
        {
            return await db.TblLogins.ToListAsync();
        })
        .WithName("GetAllTblLogins")
        .WithOpenApi();

        group.MapGet("/{id}", async Task<Results<Ok<TblLogin>, NotFound>> (int id, GeoTrackContext db) =>
        {
            return await db.TblLogins.AsNoTracking()
                .FirstOrDefaultAsync(model => model.Id == id)
                is TblLogin model
                    ? TypedResults.Ok(model)
                    : TypedResults.NotFound();
        })
        .WithName("GetTblLoginById")
        .WithOpenApi();

        group.MapPut("/{id}", async Task<Results<Ok, NotFound>> (int id, TblLogin tblLogin, GeoTrackContext db) =>
        {
            var affected = await db.TblLogins
                .Where(model => model.Id == id)
                .ExecuteUpdateAsync(setters => setters
                  .SetProperty(m => m.Id, tblLogin.Id)
                  .SetProperty(m => m.User, tblLogin.User)
                  .SetProperty(m => m.Password, tblLogin.Password)
                  .SetProperty(m => m.Imei, tblLogin.Imei)
                  .SetProperty(m => m.Token, tblLogin.Token)
                  .SetProperty(m => m.DateCreation, tblLogin.DateCreation)
                  .SetProperty(m => m.ExpiredDate, tblLogin.ExpiredDate)
                  .SetProperty(m => m.Rol, tblLogin.Rol)
                  );
            return affected == 1 ? TypedResults.Ok() : TypedResults.NotFound();
        })
        .WithName("UpdateTblLogin")
        .WithOpenApi();

        group.MapPost("/", async (TblLogin tblLogin, GeoTrackContext db) =>
        {
            db.TblLogins.Add(tblLogin);
            await db.SaveChangesAsync();
            return TypedResults.Created($"/api/TblLogin/{tblLogin.Id}", tblLogin);
        })
        .WithName("CreateTblLogin")
        .WithOpenApi();

        group.MapDelete("/{id}", async Task<Results<Ok, NotFound>> (int id, GeoTrackContext db) =>
        {
            var affected = await db.TblLogins
                .Where(model => model.Id == id)
                .ExecuteDeleteAsync();
            return affected == 1 ? TypedResults.Ok() : TypedResults.NotFound();
        })
        .WithName("DeleteTblLogin")
        .WithOpenApi();
    }
}