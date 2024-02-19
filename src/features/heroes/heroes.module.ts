import { Module } from '@nestjs/common';
import { HeroesController } from './heroes.controller';
import { PrismaService } from '../../prisma.service';
import { HeroesRepository } from './heroes.repository';
import { HeroesService } from './heroes.service';

@Module({
  providers: [PrismaService, HeroesRepository, HeroesService],
  controllers: [HeroesController],
})
export class HeroesModule {}
