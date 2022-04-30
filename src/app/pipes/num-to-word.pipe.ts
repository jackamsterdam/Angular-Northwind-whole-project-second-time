import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToWord'
})
export class NumToWordPipe implements PipeTransform {

  transform(value: number, capitalFirstLetter?: boolean): string {
    // debugger
      const words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
      if (value < 0 || value > 10 ) {
        return value.toString()
      }

      return capitalFirstLetter ? words[value] : words[value].toLowerCase()
  }

}
 