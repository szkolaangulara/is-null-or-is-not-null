import {AddressModel} from '../address/address.model';

export class Car {
  constructor(public brand: string,
              public model: string,
              public engineType: string,
              public type: string,
              public discountAvailable: boolean,
              public address: AddressModel) {
  }
}
