import { Injectable } from '@nestjs/common';

@Injectable()
export class ImageService {
    uploadImage(image: string) {
        return { image };
    }
}
