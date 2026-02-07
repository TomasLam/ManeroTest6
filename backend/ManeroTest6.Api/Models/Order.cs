namespace ManeroTest6.Api.Models
{
    public class Order
    {
        public int Id { get; set; }

            public string CustomerName { get; set; } = "";
            public decimal Total { get; set; }
        public DateTime Created { get; set; } = DateTime.UtcNow;


    }
}
 