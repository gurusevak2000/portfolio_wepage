using Microsoft.AspNetCore.Mvc;
using PortfolioApi.Models;
using PortfolioApi.Services;

namespace PortfolioApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly IContactService _contactService;

    public ContactController(IContactService contactService)
    {
        _contactService = contactService;
    }

    /// <summary>
    /// Submit a contact form message.
    /// </summary>
    [HttpPost]
    [ProducesResponseType(typeof(ApiResponse<ContactMessage>), StatusCodes.Status201Created)]
    [ProducesResponseType(typeof(ApiResponse<object>), StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> Submit([FromBody] ContactMessage message)
    {
        if (!ModelState.IsValid)
        {
            var errors = ModelState.Values
                .SelectMany(v => v.Errors)
                .Select(e => e.ErrorMessage);
            return BadRequest(ApiResponse<object>.Fail(string.Join(", ", errors)));
        }

        var saved = await _contactService.SaveMessageAsync(message);
        return CreatedAtAction(
            nameof(GetAll),
            new { id = saved.Id },
            ApiResponse<ContactMessage>.Ok("Message received. Thank you!", saved));
    }

    /// <summary>
    /// Get all messages (admin use — secure this before deploying).
    /// </summary>
    [HttpGet]
    [ProducesResponseType(typeof(ApiResponse<IEnumerable<ContactMessage>>), StatusCodes.Status200OK)]
    public async Task<IActionResult> GetAll()
    {
        var messages = await _contactService.GetAllAsync();
        return Ok(ApiResponse<IEnumerable<ContactMessage>>.Ok("OK", messages));
    }
}
