import { Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MediasRepository {

  constructor(private readonly prisma: PrismaService) { }

  async create(body: CreateMediaDto) {
    return await this.prisma.medias.create({
      data: body
    })
  }

  async findAll() {
    return await this.prisma.medias.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} media`;
  }

  update(id: number, updateMediaDto: UpdateMediaDto) {
    return `This action updates a #${id} media`;
  }

  remove(id: number) {
    return `This action removes a #${id} media`;
  }
}
