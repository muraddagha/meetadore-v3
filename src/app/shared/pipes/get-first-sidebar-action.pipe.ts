import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFirstSidebarAction'
})
export class GetFirstSidebarActionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
