import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
