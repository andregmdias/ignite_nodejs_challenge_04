import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const fetchedUser = this.usersRepository.findById(user_id);

    if (!fetchedUser) {
      throw new Error("User not found");
    }

    return this.usersRepository.turnAdmin(fetchedUser);
  }
}

export { TurnUserAdminUseCase };
