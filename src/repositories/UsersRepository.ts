import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/User";

// Vai utilizar todos  métodos que o tyeorm traz

@EntityRepository( User )
class UsersRepository extends Repository<User>{

}

export { UsersRepository }
