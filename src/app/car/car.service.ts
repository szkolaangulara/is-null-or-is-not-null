import { Injectable } from '@angular/core';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CarService {

  private carDiscountModels: string[] = ['Mercedes', 'Citroen'];

  checkIfDiscountIsAvailable(carBrand: string): boolean {
    const result = this.carDiscountModels.find(carDiscountBrand => carDiscountBrand === carBrand);
    return !!result;
  }
}
