import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { IsOptional, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class UpdatePostDto extends PartialType(CreatePostDto) {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    text?: string;

    @IsOptional()
    @IsUrl()
    image?: string;
}
