import { PartialType } from '@nestjs/mapped-types';
import { CreatePublicationDto } from './create-publication.dto';
import { IsOptional, IsNotEmpty, IsString, IsDate } from 'class-validator';

export class UpdatePublicationDto extends PartialType(CreatePublicationDto) {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    mediaId?: number;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    postId?: number;

    @IsOptional()
    @IsDate()
    date?: Date;
}
