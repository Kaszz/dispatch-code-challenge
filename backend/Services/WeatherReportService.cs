using Microsoft.AspNetCore.Http.HttpResults;

namespace backend.Services;

public class WeatherReportService(HttpClient httpClient) : IWeatherReportService
{
    private static readonly Dictionary<string, string?> NearbyAirports = new()
    {
        { "EKHG", "EKKA" },
        { "EKGE", null },
        { "EKST", "EKOD" },
        { "EKVH", "EKYT" }
    };

    public async Task<string?> GetWeatherReport(string icao)
    {
        if (!NearbyAirports.TryGetValue(icao, out var nearbyAirport))
        {
            return await FetchWeatherReport(icao);
        }

        if (nearbyAirport == null)
        {
            return null;
        }
            
        return await FetchWeatherReport(nearbyAirport);
    }

    private async Task<string?> FetchWeatherReport(string icao)
    {
        httpClient.DefaultRequestHeaders.Add("x-foreflight-odense", "true");
        var response = await httpClient.GetAsync($"https://api.foreflight.com/weather/report/{icao}");
        if (!response.IsSuccessStatusCode)
        {
            return null;
        }

        return await response.Content.ReadAsStringAsync();
    }
}