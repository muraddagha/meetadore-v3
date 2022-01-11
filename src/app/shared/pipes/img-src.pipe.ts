import { Pipe, PipeTransform } from "@angular/core";
import { environment } from "src/environments/environment";

@Pipe({
  name: "imgSrc"
})
export class ImgSrcPipe implements PipeTransform {
  transform(filePath: string, ...args: unknown[]): unknown {
    return environment.userFileUrl + filePath;
  }
}
