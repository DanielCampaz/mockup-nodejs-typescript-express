import { Logger } from "./ILogger";

export class ConsoleLogger implements Logger {
  assert(...data: any[]): void {
    console.assert(...data);
  }
  debug(...data: any[]): void {
    console.debug(...data);
  }
  error(...data: any[]): void {
    console.error(...data);
  }
  info(...data: any[]): void {
    console.info(...data);
  }
  log(...data: any[]): void {
    console.log(...data);
  }
  warn(...data: any[]): void {
    console.warn(...data);
  }
}
