import { EntityRepository, Repository } from "typeorm";
import { Survey } from "../models/Survey";

// Vai utilizar todos  métodos que o tyeorm traz

@EntityRepository( Survey )
class SurveyRepository extends Repository<Survey>{

}

export { SurveyRepository }
