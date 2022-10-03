import { Component, ElementRef, forwardRef, Input, OnChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { CarritoService } from '../../services/carrito.service';
import { MisProductosModel } from '../../productos/misproductos.model';

export function counterRangeValidator(minValue, maxValue) {
  return (c: FormControl) => {
    const err = {
      rangeError: {
        given: c.value,
        min: minValue || 0,
        max: maxValue || 10
      }
    };

    return (c.value > +maxValue || c.value < +minValue) ? err : null;
  };
}

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CounterInputComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => CounterInputComponent), multi: true }
  ],
  encapsulation: ViewEncapsulation.None
})
export class CounterInputComponent implements ControlValueAccessor, OnChanges {
  // tslint:disable-next-line:no-input-rename
  @Input('counterValue') _counterValue = 0;
  // tslint:disable-next-line:no-input-rename
  @Input('max') counterRangeMax;
  // tslint:disable-next-line:no-input-rename
  @Input('min') counterRangeMin;
  @Input('producto') producto: MisProductosModel;

  propagateChange: any = () => { }; // Noop function
  validateFn: any = () => { }; // Noop function

  constructor(
    private cartService: CarritoService
  ) { }


  get counterValue() {
    return this._counterValue;
  }

  set counterValue(val) {
    this._counterValue = val;
    this.propagateChange(val);
  }

  ngOnChanges(inputs) {
    if (inputs.counterRangeMax || inputs.counterRangeMin) {
      this.validateFn = counterRangeValidator(this.counterRangeMin, this.counterRangeMax);
    }
  }

  writeValue(value) {
    if (value != null) {
      this.counterValue = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() { }

  increase() {
    if (this.counterValue < this.counterRangeMax) {
      this.cartService.addProduct(this.producto);
      this.counterValue++;
      this.propagateChange(this.counterValue);
    }
  }

  decrease() {
    if (this.counterValue > this.counterRangeMin) {
      this.cartService.decreaseProduct(this.producto);
      this.counterValue--;
      this.propagateChange(this.counterValue);
    }

  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }

}
