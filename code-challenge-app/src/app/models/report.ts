export interface Report {
  report: {
    conditions: {
      dateIssued: string;
      flightRules: string;
      pressureHg: number;
      visibility: {
        distanceSm: number;
      };
      tempC: number;
      wind: {
        direction: number;
        speedKts: number;
      };
      text: string;
    };
    forecast: {
      text: string;
      ident: string;
      conditions: [
        {
          flightRules: string;
          visibility: {
            distanceSm: number;
          };
          wind: {
            direction: number;
            speedKts: number;
          };
          period: {
            dateStart: string;
            dateEnd: string;
          }
        }
      ];
    };
  };
}
