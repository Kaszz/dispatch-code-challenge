using backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherReportController(
    IWeatherReportService weatherReportService,
    IMemoryCache memoryCache,
    IRequestLogService requestLogService) : ControllerBase
{
    [HttpGet("{icao}")]
    public async Task<IActionResult> Get([FromRoute] string icao)
    {
        requestLogService.LogRequest(icao);
        
        var cacheKey = $"WeatherReport_{icao}";

        if (memoryCache.TryGetValue(cacheKey, out string? report))
        {
            return Ok(report);
        }
        
        // Simulate a slow response from the API
        await Task.Delay(3000);
            
        report = await weatherReportService.GetWeatherReport(icao);

        var cacheEntryOptions = new MemoryCacheEntryOptions()
            .SetSlidingExpiration(TimeSpan.FromMinutes(5));

        memoryCache.Set(cacheKey, report, cacheEntryOptions);

        if (report == null)
        {
            return NotFound();
        }
        
        return Ok(report);
    }
}