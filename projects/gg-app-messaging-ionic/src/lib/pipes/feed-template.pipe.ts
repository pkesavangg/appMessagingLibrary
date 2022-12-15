import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feedTemplate'
})
export class FeedTemplatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
