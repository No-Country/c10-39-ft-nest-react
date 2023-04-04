import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateSportsComplexDTO } from "./dto/create-sports-complex.dto";
import { UpdateSportsComplexDTO } from "./dto/update-sports-complex.dto";
import SportsComplex from "./entities/sports-complex.entity";
import Owner from "./entities/owner.entity";
import { CreateOwnerDTO } from "./dto/create-owner.dto";

@Injectable()
export class SportsComplexService {
  constructor(
    @InjectRepository(SportsComplex)
    private readonly SportsComplexRepository: Repository<SportsComplex>,
    @InjectRepository(Owner)
    private readonly ownerRepository: Repository<Owner>,
  ) {}

  async createOwner(createOwnerDTO: CreateOwnerDTO) {
    const { user, DNI, address, phone } = createOwnerDTO;
    const newOwner: Owner = await this.ownerRepository.create({
      user,
      DNI,
      address,
      phone,
    });
    return this.SportsComplexRepository.save(newOwner);

  }


  create(createSportsComplexDTO: any, newOwner: any) {


    console.log("createSportsComplexDTO", createSportsComplexDTO);
    const sportsComplex = this.SportsComplexRepository.create({
      ...createSportsComplexDTO,
      owner: newOwner.id,
    });
    return this.SportsComplexRepository.save(sportsComplex);
    
  }

  async findAll(): Promise<SportsComplex[]> {
    return await this.SportsComplexRepository.find();
  }

  async findAllOfOwner(owner: any): Promise<SportsComplex[]> {
    return await this.SportsComplexRepository.find({
      where: { owner: owner.id },
    });
  }

  findOne(id: string) {
    return this.SportsComplexRepository.findOne({
      where: { id },
    });
  }

  async update(
    ownerId: string,
    id: string,
    updateSportsComplexDTO: UpdateSportsComplexDTO
  ) {
    const sportsComplex = await this.SportsComplexRepository.createQueryBuilder(
      "sportsComplex"
    )
      .leftJoinAndSelect("sportsComplex.owner", "owner")
      .where("sportsComplex.id = :id AND owner.id = :ownerId", { id, ownerId })
      .getOne();
    if (!sportsComplex) {
      throw new NotFoundException(`Sports complex with id ${id} not found`);
    }

    const updatedSportsComplex = this.SportsComplexRepository.merge(
      sportsComplex,
      updateSportsComplexDTO
    );

    return this.SportsComplexRepository.save(updatedSportsComplex);
  }

  async remove(id: string, ownerId: string) {
    const sportsComplex = await this.SportsComplexRepository.createQueryBuilder(
      "sportsComplex"
    )
      .leftJoinAndSelect("sportsComplex.owner", "owner")
      .where("sportsComplex.id = :id AND owner.id = :ownerId", { id, ownerId })
      .getOne();
    if (!sportsComplex) {
      throw new NotFoundException(`Sports complex with id ${id} not found`);
    }
    await this.SportsComplexRepository.remove(sportsComplex);
    return `Sports complex with id ${id} has been successfully removed`;
  }
}
