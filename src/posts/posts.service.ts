import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
