import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {

  private posts: Post[];

  constructor() {
    this.posts = []
  }

  create(createPostDto: CreatePostDto) {
    const post = new Post(createPostDto.title, createPostDto.text, createPostDto?.image)

    if (!createPostDto.title || !createPostDto.text) {
      throw new HttpException('Campos obrigatórios ausentes', HttpStatus.BAD_REQUEST)
    }

    return this.posts.push(post);
  }

  findAll() {
    return this.posts;
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
