import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform {

  transform(photos: Photo[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery
      .trim()
      .toLocaleUpperCase();

    if(descriptionQuery) {
      return photos.filter(photo =>
        photo.description.toLocaleUpperCase().includes(descriptionQuery));
    } else {
      return photos;
    }
  }
}
