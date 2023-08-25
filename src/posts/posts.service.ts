import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {

  constructor(private readonly repository: PostsRepository) { }

  async create(createPostDto: CreatePostDto) {
    if (!createPostDto.title || !createPostDto.text) {
      throw new HttpException('Campos obrigatórios ausentes', HttpStatus.BAD_REQUEST);
    }

    const postData: Partial<CreatePostDto> = {
      title: createPostDto.title,
      text: createPostDto.text,
    };

    if (createPostDto.image !== undefined) {
      postData.image = createPostDto.image;
    }

    return await this.repository.create(postData as CreatePostDto);
  }


  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    const post = await this.repository.findOne(id)
    if (!post) {
      throw new NotFoundException(`Post de id ${id} não encontrado`)
    }
    return post;
  }

  async update(id: number, body: UpdatePostDto) {
    const post = await this.repository.findOne(id);
    if (!post) {
      throw new NotFoundException(`Post de id ${id} não encontrado`)
    }
    return await this.repository.update(id, body);
  }

  async remove(id: number) {
    const post = await this.repository.findOne(id);
    if (!post) {
      throw new NotFoundException(`Post de id ${id} não encontrado`)
    }
    return await this.repository.remove(id);
  }
}
