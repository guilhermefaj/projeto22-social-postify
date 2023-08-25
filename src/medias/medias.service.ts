import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { Media } from './entities/media.entity';

@Injectable()
export class MediasService {

  private medias: Media[];

  constructor() {
    this.medias = []
  }

  create(createMediaDto: CreateMediaDto) {
    const media = new Media(createMediaDto.title, createMediaDto.username);

    if (!createMediaDto.title || !createMediaDto.username) {
      throw new HttpException('Campos obrigatórios ausentes', HttpStatus.BAD_REQUEST)
    }

    //TODO verificar se já existe title e username iguais antes de criar

    return this.medias.push(media);
  }

  findAll() {
    return this.medias;
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
