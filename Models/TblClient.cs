using System;
using System.Collections.Generic;

namespace GeoTrack_Services.Models;
//database conections and tables
public partial class TblClient
{
    public int Id { get; set; }

    public string Names { get; set; } = null!;

    public string IdCard { get; set; } = null!;

    public string? Latitude { get; set; }

    public string? Longitude { get; set; }

    public string? Description { get; set; }

    public string? NumHouse { get; set; }

    public string? NumPhone { get; set; }

    public string? Email { get; set; }
}
