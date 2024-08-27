import { Singleton } from "./inject";
import { ConsoleLogger } from "./loggers/ConsoleLoger";
import { main } from "./main";
import { UserService } from "./services/user.service";

async function root() {
  await importObjects();
  main();
}

root();

async function importObjects() {
  if (Singleton !== undefined) {
    Singleton(ConsoleLogger, "ConsoleLogger");
    Singleton(UserService);
  }
}
