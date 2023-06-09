import { Module } from '@nestjs/common';
import { StarshipsService } from './starships.service';
import { StarshipsController } from './starships.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Starship } from './entities/starship.entity';
import { RelationService } from 'src/relation/relation.service';
import { ImageModule } from 'src/files/image/image.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [StarshipsController],
  providers: [StarshipsService, RelationService],
  imports: [JwtModule,
    TypeOrmModule.forFeature([Starship]),
    ImageModule]
})
export class StarshipsModule { }
