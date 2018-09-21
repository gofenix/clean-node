import IUserRepository from "../repository/IUserRepository";

export default class UserService {
  private repo: IUserRepository;
  public constructor(repo: IUserRepository) {
    this.repo = repo;
  }

  public duplicated(email: string): Boolean {
    const user = this.repo.findByEmail(email);
    if (!user) {
      return false;
    }
    return true;
  }
}
