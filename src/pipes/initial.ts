import { Pipe, PipeTransform } from '@angular/core'


@Pipe({
  name: 'initial',
})
export class Initial implements PipeTransform {
  /**
   * Takes a value and returns first letter
   */
  transform(value: string, ...args) {
    return value.charAt(0)
  }
}
