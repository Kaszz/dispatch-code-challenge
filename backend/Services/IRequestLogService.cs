namespace backend.Services;

public interface IRequestLogService
{
    void LogRequest(string message);
    
    IEnumerable<(string, string)> GetLogs();
}