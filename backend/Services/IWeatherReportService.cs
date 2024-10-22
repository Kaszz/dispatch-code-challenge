namespace backend.Services;

public interface IWeatherReportService
{
    Task<string?> GetWeatherReport(string icao);
}