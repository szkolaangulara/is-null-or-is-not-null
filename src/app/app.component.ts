import {Component} from '@angular/core';
import {Car} from './car/car.model';
import {AddressService} from './address/address.service';
import {CarService} from './car/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public car: Car;
  public car1: Car;

  constructor(private carService: CarService,
              private addressService: AddressService) {

    this.car = new Car(
      'Audi',
      'A6',
      'benzyna',
      'sedan',
      this.carService.checkIfDiscountIsAvailable('Audi'),
      this.addressService.getAddressByCarModel('A6'));

    this.car1 = new Car('Mercedes',
      'Klasa E',
      'diesel',
      'coupe',
      this.carService.checkIfDiscountIsAvailable('Mercedes'),
      this.addressService.getAddressByCarModel('Klasa E')
    );
  }
}
