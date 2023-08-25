import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return `This action returns a #${id} publication`;
  }

  update(id: number, updatePublicationDto: UpdatePublicationDto) {
    return `This action updates a #${id} publication`;
  }

  remove(id: number) {
    return `This action removes a #${id} publication`;
  }
}
