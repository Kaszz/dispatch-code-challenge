using System.Text.Json;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class RequestLogController(IRequestLogService requestLogService) : ControllerBase
{
    [HttpGet]
    public string GetLogs()
    {
        var logs = requestLogService.GetLogs()
            .Select(log => new { timestamp = log.Item1, message = log.Item2 })
            .ToList();
        return JsonSerializer.Serialize(logs);
    }
}