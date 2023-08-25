import { Injectable } from '@nestjs/common';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PublicationsRepository {

  constructor(private readonly prisma: PrismaService) { }

  async create(body: CreatePublicationDto) {
    return await this.prisma.publications.create({
      data: body
    });
  }

  async findAll() {
    return await this.prisma.publications.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.publications.findUnique({
      where: { id },
    });
  }

  async update(id: number, body: UpdatePublicationDto) {
    return await this.prisma.publications.update({
      where: { id },
      data: body,
    });
  }

  async remove(id: number) {
    const publication = await this.findOne(id);
    if (publication) {
      await this.prisma.publications.delete({
        where: { id },
      })
    }
    return publication;
  }
}
