import IUserRepository from "../domain/repository/IUserRepository";
import User from "../domain/model/User";
import UserService from "../domain/service/UserService";
import v4 from "uuid/v4";

export interface IUserUsecase {
  listAllUsers(): Array<LocalUser>;
  register(email: string): void;
}

export class UserUsecase implements IUserUsecase {
  private repo: IUserRepository;
  private service: UserService;

  public constructor(repo: IUserRepository, service: UserService) {
    this.repo = repo;
    this.service = service;
  }

  public listAllUsers(): Array<LocalUser> {
    const users: Array<User> = this.repo.findAll();
    return this.toUser(users);
  }

  public register(email: string) {
    const uuid: string = v4();
    const user = new User(uuid, email);
    const isDup = this.service.duplicated(email);
    if (!isDup) {
      return;
    }
    this.repo.save(user);
  }

  private toUser(users: Array<User>): Array<LocalUser> {
    return users.map(user => {
      return new LocalUser(user.getID(), user.getEmail());
    });
  }
}

class LocalUser {
  private id: string;
  private email: string;

  public constructor(id: string, email: string) {
    this.id = id;
    this.email = email;
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string) {
    this.email = email;
  }
}
