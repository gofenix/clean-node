import IUserRepository from "../../../domain/repository/IUserRepository";
import User from "../../../domain/model/User";

export default class UserRepository implements IUserRepository {
  public findAll(): Array<User> {
    const user1 = new User("111", "111@111.com");
    const user2 = new User("222", "111@111.com");
    const user3 = new User("333", "111@111.com");
    const user4 = new User("444", "111@111.com");
    return [user1, user2, user3, user4];
  }
  public findByEmail(): User {
    return new User("1", "2");
  }
  public save(user: User) {
    console.log("save...");
  }
}
