import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSuffix',
  standalone: true,
})
export class NumberSuffixPipe implements PipeTransform {
  transform(input: number, args?: any): any {
    let exponent: number;
    const suffixes = ['tys.', 'mln', 'mld'];
    const isNagativeValues = input < 0;
    if (
      Number.isNaN(input) ||
      (input < 1000 && input >= 0) ||
      !this.isNumeric(input) ||
      (input < 0 && input > -1000)
    ) {
      if (!!args && this.isNumeric(input) && !(input < 0) && input != 0) {
        return input.toFixed(args);
      } else {
        return input;
      }
    }

    if (!isNagativeValues) {
      exponent = this.calculateExponent(input);

      return (
        (input / Math.pow(1000, exponent)).toFixed(args) +
        suffixes[exponent - 1]
      );
    } else {
      input = input * -1;

      exponent = this.calculateExponent(input);

      return (
        ((input * -1) / Math.pow(1000, exponent)).toFixed(args) +
        suffixes[exponent - 1]
      );
    }
  }

  calculateExponent(input: number): number {
    return Math.floor(Math.log(input) / Math.log(1000));
  }

  isNumeric(value: number): boolean {
    if (value < 0) value = value * -1;
    if (/^-{0,1}\d+$/.test(value.toString())) {
      return true;
    } else if (/^\d+\.\d+$/.test(value.toString())) {
      return true;
    } else {
      return false;
    }
  }
}
