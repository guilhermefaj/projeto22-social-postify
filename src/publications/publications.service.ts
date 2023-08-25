import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { PublicationsRepository } from './publications.repository';

@Injectable()
export class PublicationsService {

  constructor(private readonly repository: PublicationsRepository) { }

  async create(createPublicationDto: CreatePublicationDto) {
    return await this.repository.create({
      mediaId: createPublicationDto.mediaId,
      postId: createPublicationDto.postId,
      date: createPublicationDto.date,
    });
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    const publication = await this.repository.findOne(id);
    if (!publication) {
      throw new NotFoundException(`Publication de id ${id} não encontrada`)
    }
    return publication;
  }

  async update(id: number, body: UpdatePublicationDto) {
    const publication = await this.repository.findOne(id)
    if (!publication) {
      throw new NotFoundException(`Publication de id ${id} não encontrada`)
    }
    return this.repository.update(id, body);
  }

  async remove(id: number) {
    const publication = await this.repository.findOne(id)
    if (!publication) {
      throw new NotFoundException(`Publication de id ${id} não encontrada`)
    }
    return await this.repository.remove(id);
  }
}
