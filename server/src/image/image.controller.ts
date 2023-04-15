import { Body, Controller, Post } from '@nestjs/common';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}
  @Post('upload')
  uploadImage(
    @Body('image') image: string,
  ) {
    return this.imageService.uploadImage(image);
  }
}
