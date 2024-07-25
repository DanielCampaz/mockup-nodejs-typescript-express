import express, {
  urlencoded,
  Response as ExResponse,
  Request as ExRequest,
} from "express";
import cors from "cors";
import { RegisterRoutes } from "../routes/routes";
import swaggerUi from "swagger-ui-express";
import { getConfig } from "./config";

export function main() {
  const app = express();
  const port = getConfig().PORT;

  app.use(
    urlencoded({
      extended: true,
    })
  );
  app.use(cors());
  app.use(express.json());

  app.use(
    "/docs",
    swaggerUi.serve,
    async (_req: ExRequest, res: ExResponse) => {
      return res.send(
        swaggerUi.generateHTML(await import("../annotation/swagger.json"))
      );
    }
  );

  RegisterRoutes(app);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
