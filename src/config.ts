import dotenv from "dotenv";
import { Config } from "./types/configType";

export function getConfig(): Config {
  dotenv.config();

  return {
    PORT: parseInt(process.env.PORT ?? "3000"),
  };
}
