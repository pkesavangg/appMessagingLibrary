import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nowidow'
})
export class NowidowPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
