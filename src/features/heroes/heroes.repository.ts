import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class HeroesRepository {
  constructor(private readonly prisma: PrismaService) {}
  async getAll() {
    return this.prisma.hero.findMany();
  }
  async getById(params: { where; select }) {
    const { where, select } = params; 
    return this.prisma.hero.findUnique({
      where,
      select,
    });
  }
}
