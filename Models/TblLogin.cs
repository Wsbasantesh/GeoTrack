using System;
using System.Collections.Generic;
using GeoTrack_Services.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.EntityFrameworkCore;

namespace GeoTrack_Services.Models;

public partial class TblLogin
{
    public int Id { get; set; }

    public string User { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string? Imei { get; set; }

    public string? Token { get; set; }

    public DateTime? DateCreation { get; set; }

    public DateTime? ExpiredDate { get; set; }

    public int? Rol { get; set; }
}

