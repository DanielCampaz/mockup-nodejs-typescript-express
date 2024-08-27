import Inject from "../inject";
import { Logger } from "../loggers/ILogger";
import { UserService } from "../services/user.service";
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";

@Route("users")
export class UsersController extends Controller {
  private logger: Logger = Inject("ConsoleLogger");
  private userService: UserService = Inject(UserService);
  constructor() {
    super();
  }
  @Get("{userId}")
  public async getUser(
    @Path() userId: number,
    @Query() name?: string
  ): Promise<any> {
    const data = `${userId} + ${name}`;
    this.logger.log(data);
    return data;
  }

  @SuccessResponse("201", "Created") // Custom success response
  @Post()
  public async createUser(@Body() requestBody: any): Promise<Array<any>> {
    this.setStatus(201); // set return status 201
    const users = this.userService.getUser();
    this.logger.log(requestBody);
    return [users];
  }
}
