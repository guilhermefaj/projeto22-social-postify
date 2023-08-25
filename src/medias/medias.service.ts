import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { MediasRepository } from './medias.repository';

@Injectable()
export class MediasService {
  constructor(private readonly repository: MediasRepository) { }

  async create(createMediaDto: CreateMediaDto) {
    if (!createMediaDto.title || !createMediaDto.username) {
      throw new HttpException('Campos obrigatórios ausentes', HttpStatus.BAD_REQUEST)
    }

    //TODO verificar se já existe title e username iguais antes de criar

    return await this.repository.create({
      title: createMediaDto.title,
      username: createMediaDto.username,
    });
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    const media = await this.repository.findOne(id)
    if (!media) {
      throw new NotFoundException(`Media de id ${id} não encontrada`)
    }
    return media;
  }

  async update(id: number, body: UpdateMediaDto) {
    const media = await this.repository.findOne(id);
    if (!media) {
      throw new NotFoundException(`Media de id ${id} não encontrada`)
    }
    //TODO verificar se já existe title e username iguais antes de atualizar
    return await this.repository.update(id, body);
  }

  async remove(id: number) {
    const media = await this.repository.findOne(id);
    if (!media) {
      throw new NotFoundException(`Media de id ${id} não encontrada`)
    }
    return await this.repository.remove(id);
  }
}
