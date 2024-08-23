using DINETNET.Context;
using DINETNET.Models.Entity;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DINETNET.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        DBDINETCONTEXT DBDINETCONTEXT;
        public ProductoController(DBDINETCONTEXT _db)
        {
            DBDINETCONTEXT = _db;
        }

        // GET: api/<ProductoController>
        [HttpGet]
        public IQueryable<Productos> Get(int? id, string? nombre)
        {
            IQueryable < Productos > products = from p in DBDINETCONTEXT.Productos select p;
            if (id!=0 && id!=null)
            {
                products = products.Where(x => x.Id==id);
            }
            if (nombre != "" && nombre != null)
            {
                products = products.Where(x => x.Nombre == nombre);
            }

            return products;
        }


        // POST api/<ProductoController>
        [HttpPost]
        public bool Post([FromBody] Productos value)
        {
            bool success = true;
            try
            {
                DBDINETCONTEXT.Add(value);
                DBDINETCONTEXT.SaveChanges();
            }
            catch (Exception ex)
            {

                success = false;
            }
            return success;
        }

    }
}
