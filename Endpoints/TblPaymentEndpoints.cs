using GeoTrack_Services.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.AspNetCore.Http.HttpResults;
namespace GeoTrack_Services.Endpoints
{

public static class TblPaymentEndpoints
{
	public static void MapTblPaymentEndpoints (this IEndpointRouteBuilder routes)
    {
        var group = routes.MapGroup("/api/TblPayment").WithTags(nameof(TblPayment));

        group.MapGet("/", async (GeoTrackContext db) =>
        {
            return await db.TblPayments.ToListAsync();
        })
        .WithName("GetAllTblPayments")
        .WithOpenApi();

        group.MapGet("/{id}", async Task<Results<Ok<TblPayment>, NotFound>> (int id, GeoTrackContext db) =>
        {
            return await db.TblPayments.AsNoTracking()
                .FirstOrDefaultAsync(model => model.Id == id)
                is TblPayment model
                    ? TypedResults.Ok(model)
                    : TypedResults.NotFound();
        })
        .WithName("GetTblPaymentById")
        .WithOpenApi();

        group.MapPut("/{id}", async Task<Results<Ok, NotFound>> (int id, TblPayment tblPayment, GeoTrackContext db) =>
        {
            var affected = await db.TblPayments
                .Where(model => model.Id == id)
                .ExecuteUpdateAsync(setters => setters
                  .SetProperty(m => m.Id, tblPayment.Id)
                  .SetProperty(m => m.PaymentType, tblPayment.PaymentType)
                  .SetProperty(m => m.NumDocument, tblPayment.NumDocument)
                  .SetProperty(m => m.Date, tblPayment.Date)
                  .SetProperty(m => m.Estate, tblPayment.Estate)
                  .SetProperty(m => m.AmountQuantity, tblPayment.AmountQuantity)
                  .SetProperty(m => m.Description, tblPayment.Description)
                  .SetProperty(m => m.Taxes, tblPayment.Taxes)
                  .SetProperty(m => m.TotalPayment, tblPayment.TotalPayment)
                  );
            return affected == 1 ? TypedResults.Ok() : TypedResults.NotFound();
        })
        .WithName("UpdateTblPayment")
        .WithOpenApi();

        group.MapPost("/", async (TblPayment tblPayment, GeoTrackContext db) =>
        {
            db.TblPayments.Add(tblPayment);
            await db.SaveChangesAsync();
            return TypedResults.Created($"/api/TblPayment/{tblPayment.Id}",tblPayment);
        })
        .WithName("CreateTblPayment")
        .WithOpenApi();

        group.MapDelete("/{id}", async Task<Results<Ok, NotFound>> (int id, GeoTrackContext db) =>
        {
            var affected = await db.TblPayments
                .Where(model => model.Id == id)
                .ExecuteDeleteAsync();
            return affected == 1 ? TypedResults.Ok() : TypedResults.NotFound();
        })
        .WithName("DeleteTblPayment")
        .WithOpenApi();
    }
}}
