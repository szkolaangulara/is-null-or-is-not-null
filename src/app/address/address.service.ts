import { Injectable } from '@angular/core';
import { AddressModel } from './address.model';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AddressService {
  private carAddresses = AddressService.prepareCarAddresses();

  private static prepareCarAddresses(): Map<string, AddressModel> {
    const carAddresses = new Map();
    const audiAddress = new AddressModel('Audicowa', 4, 6);
    carAddresses.set('A6', audiAddress);
    const mercedesAddress = new AddressModel('Mercedesowa', 56, 8);
    carAddresses.set('Klasa A', mercedesAddress);

    return carAddresses;
  }

  public getAddressByCarModel(carModel: string): AddressModel {
    return this.carAddresses.get(carModel);
  }
}
