using System.Globalization;

namespace backend.Services;

public class RequestLogService : IRequestLogService
{
    private readonly List<(string, string)> _logs = [];
    
    public void LogRequest(string message)
    {
        _logs.Add((DateTime.Now.ToString("yyyy-MM-ddTHH:mm:sszzz", CultureInfo.InvariantCulture), message));
    }

    public IEnumerable<(string, string)> GetLogs()
    {
        return _logs;
    }
}