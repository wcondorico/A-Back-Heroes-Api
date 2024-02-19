import { Injectable } from '@nestjs/common';
import { HeroesRepository } from "./heroes.repository";

@Injectable()
export class HeroesService {
  constructor(private readonly repository: HeroesRepository) {
  }
  async getAll() {
    return this.repository.getAll();
  }
  async getById(id: number) {
    return id;
  }
}
