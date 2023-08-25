import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsRepository {

  constructor(private readonly prisma: PrismaService) { }

  async create(body: CreatePostDto) {
    return await this.prisma.posts.create({
      data: body
    });
  }

  async findAll() {
    return await this.prisma.posts.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.posts.findUnique({
      where: { id },
    });
  }

  async update(id: number, body: UpdatePostDto) {
    return await this.prisma.posts.update({
      where: { id },
      data: body,
    });
  }

  async remove(id: number) {
    const post = await this.findOne(id);
    if (post) {
      await this.prisma.posts.delete({
        where: { id }
      })
    }
    return post;
  }
}
