import { development, staging, production } from "./env";
export default (() => {
  switch (process.env.REACT_APP_ENV) {
    case "dev":
    case "dev ":
    case "development":
    case "Development":
      return development;

    case "stag":
    case "stag ":
    case "staging":
      return staging;

    case "prod":
    case "Production":
      return production;

    default:
      return development;
  }
})();
