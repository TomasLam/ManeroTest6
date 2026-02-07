using Microsoft.AspNetCore.Mvc;
using ManeroTest6.Api.Models;

namespace ManeroTest6.Api.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private static List<Order> orders = new();

          private static int nextId = 1;

        [HttpGet]
        public IActionResult GetOrders()
        { 
             return Ok(orders);
        }

        [HttpPost]


        public IActionResult CreateOrder(Order order)
        {
             order.Id = nextId++;
            orders.Add(order);
            return Created("", order);
        }

     }

}
