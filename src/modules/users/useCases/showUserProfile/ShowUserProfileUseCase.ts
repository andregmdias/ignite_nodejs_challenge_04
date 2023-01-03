import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    if (!user_id) {
      throw new Error("user_id is required");
    }

    const fetchedUser = this.usersRepository.findById(user_id);

    if (!fetchedUser) {
      throw new Error("User not found");
    }
    return fetchedUser;
  }
}

export { ShowUserProfileUseCase };
