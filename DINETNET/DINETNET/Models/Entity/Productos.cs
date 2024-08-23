using System;
using System.Collections.Generic;

namespace DINETNET.Models.Entity
{
    public partial class Productos
    {
        public int Id { get; set; }
        public string? Nombre { get; set; }
        public decimal? Precio { get; set; }
        public DateTime? FechaCreacion { get; set; }
    }
}
