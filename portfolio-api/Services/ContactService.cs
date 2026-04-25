using Microsoft.EntityFrameworkCore;
using PortfolioApi.Data;
using PortfolioApi.Models;

namespace PortfolioApi.Services;

public class ContactService : IContactService
{
    private readonly AppDbContext _db;
    private readonly ILogger<ContactService> _logger;

    public ContactService(AppDbContext db, ILogger<ContactService> logger)
    {
        _db = db;
        _logger = logger;
    }

    public async Task<ContactMessage> SaveMessageAsync(ContactMessage message)
    {
        message.CreatedAt = DateTime.UtcNow;
        _db.ContactMessages.Add(message);
        await _db.SaveChangesAsync();

        _logger.LogInformation(
            "New contact message from {Name} ({Email}) at {Time}",
            message.Name, message.Email, message.CreatedAt);

        return message;
    }

    public async Task<IEnumerable<ContactMessage>> GetAllAsync()
    {
        return await _db.ContactMessages
            .OrderByDescending(m => m.CreatedAt)
            .ToListAsync();
    }
}
