import User from "../model/User";

export default interface IUserRepository {
  findAll(): Array<User>;
  findByEmail(email: string): User;
  save(user: User);
}
