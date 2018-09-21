import { IRouterContext } from "koa-router";
import { IUserUsecase, UserUsecase } from "../../../usecase/IUserUsecase";
import IUserRepository from "../../../domain/repository/IUserRepository";
import UserRepository from "../../persistence/mock/UserRepository";
import UserService from "../../../domain/service/UserService";

const getuserUsecase = () => {
  console.log("初始化user handler");
  const repo: IUserRepository = new UserRepository();
  const service: UserService = new UserService(repo);
  return new UserUsecase(repo, service);
};

const userUsecase = getuserUsecase();

export class UserHandler {
  public findAll(ctx: IRouterContext): void {
    const users = userUsecase.listAllUsers();
    ctx.status = 200;
    ctx.body = users;
  }

  public register(ctx: IRouterContext): void {
    const { body } = ctx.request;
    const email = "@123123";
    userUsecase.register(email);
    ctx.status = 201;
    ctx.body = {};
  }
}
