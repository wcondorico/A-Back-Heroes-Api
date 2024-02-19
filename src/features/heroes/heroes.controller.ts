import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { HeroesService } from './heroes.service';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroService: HeroesService) {}
  
  @Get()
  async getAll() {
    return this.heroService.getAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return this.heroService.getById(id);
  }
}
