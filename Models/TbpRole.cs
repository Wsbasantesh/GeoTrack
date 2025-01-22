using System;
using System.Collections.Generic;

namespace GeoTrack_Services.Models;

public partial class TbpRole
{
    public int Id { get; set; }

    public int? Key { get; set; }

    public string Description { get; set; } = null!;
}
