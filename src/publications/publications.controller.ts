import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';

@Controller('publications')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) { }

  @Post()
  create(@Body() createPublicationDto: CreatePublicationDto) {
    return this.publicationsService.create(createPublicationDto);
  }

  @Get()
  findAll() {
    return this.publicationsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.publicationsService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdatePublicationDto) {
    return await this.publicationsService.update(+id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.publicationsService.remove(+id);
  }
}
