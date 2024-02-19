import { Module } from '@nestjs/common';
import { HeroesModule } from './features/heroes/heroes.module';

@Module({
  imports: [HeroesModule],
  controllers: [],
  providers: []
})
export class AppModule {}
