using ManeroTest6.Api.Controllers;
using ManeroTest6.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Xunit;

namespace ManeroTest6.Tests
{
    public class ProductsControllerTests
    {
        [Fact]
        public void GetProducts_ReturnsOkResult()
        {
            // Arrange
            var controller = new ProductsController();

            // Act
            var result = controller.GetProducts();

            // Assert
            Assert.IsType<OkObjectResult>(result);
        }

        [Fact]
public void AddProduct_ReturnsCreatedResult()
{
    // Arrange
    var controller = new ProductsController();
    var product = new Product
    {
        Name = "Testprodukt",
        Price = 100,
        Description = "Testbeskrivning"
    };

    // Act
    var result = controller.AddProduct(product);

    // Assert
    Assert.IsType<CreatedAtActionResult>(result);
}
    }
    
}

