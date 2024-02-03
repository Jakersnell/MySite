import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: true
})
export class PhonePipe implements PipeTransform {

  transform(phone: string): string {
    return `${phone.slice(0,2)} (${phone.slice(2, 5)}) ${phone.slice(5,8)}-${phone.slice(8)}`
  }

}
