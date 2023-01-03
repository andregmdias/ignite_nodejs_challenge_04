import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const fetchedUser = this.usersRepository.findById(user_id);

    if (!fetchedUser) {
      throw new Error("User not found");
    }

    if (!fetchedUser.admin) {
      throw new Error("User is not admin");
    }

    const allUsers = this.usersRepository.list();

    return allUsers;
  }
}

export { ListAllUsersUseCase };
