using PortfolioApi.Models;

namespace PortfolioApi.Services;

public interface IContactService
{
    Task<ContactMessage> SaveMessageAsync(ContactMessage message);
    Task<IEnumerable<ContactMessage>> GetAllAsync();
}
