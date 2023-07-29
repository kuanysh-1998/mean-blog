import { Pipe, PipeTransform } from '@angular/core';
import { IPost } from '../models/models';

@Pipe({
  name: 'filterPosts',
})
export class FilterPostsPipe implements PipeTransform {
  transform(posts: IPost[], searchPost: string): IPost[] | any {
    if (!searchPost) {
      return posts; // Show all posts if searchTitle is empty
    }

    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(searchPost.toLowerCase()),
    );

    return filteredPosts.length > 0 ? filteredPosts : 'Not found';
  }
}
