import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFirstSidebarAction',
})
export class GetFirstSidebarActionPipe implements PipeTransform {
  transform(value: any[], ...args: unknown[]): unknown {
    return value[0].name;
  }
}
