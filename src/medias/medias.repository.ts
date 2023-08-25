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

  async findOne(id: number) {
    return await this.prisma.medias.findUnique({
      where: { id },
    });
  }

  async update(id: number, body: UpdateMediaDto) {
    return await this.prisma.medias.update({
      where: { id },
      data: body,
    })
  }

  async remove(id: number) {
    const media = await this.findOne(id);
    if (media) {
      await this.prisma.medias.delete({
        where: { id },
      })
    }
    return media;
  }
}
