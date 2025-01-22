using System;
using System.Collections.Generic;

namespace GeoTrack_Services.Models;

public partial class TblPayment
{
    public int Id { get; set; }

    public int? PaymentType { get; set; }

    public string? NumDocument { get; set; }

    public DateTime? Date { get; set; }

    public int? Estate { get; set; }

    public decimal? AmountQuantity { get; set; }

    public string? Description { get; set; }

    public double? Taxes { get; set; }

    public decimal? TotalPayment { get; set; }
}
