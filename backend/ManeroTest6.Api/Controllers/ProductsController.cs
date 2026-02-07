using Microsoft.AspNetCore.Mvc;
using ManeroTest6.Api.Models;

namespace ManeroTest6.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        

        private static readonly List<Product> _products = new()
        {
            new Product
            {
                 Id = 1,

                 Name = "Manero Hoodie",
                Price = 599,
                Description = "Bekväm hoodie från Manero"
            }

        };

        [HttpGet]
        public IActionResult GetProducts()
        {
            return Ok(_products);
        }


        [HttpPost]

        public IActionResult AddProduct(Product product)
        {
            product.Id = _products.Count + 1;
              _products.Add(product);
 
             return CreatedAtAction(nameof(GetProducts), product);
        }
    }
}