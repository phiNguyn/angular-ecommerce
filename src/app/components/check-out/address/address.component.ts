import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/service/address/address.service';
import { address, district, wards } from 'src/app/type/address';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  cityID!: number;
  districtId!: number | null;
  name: string = "";
  city: address[] = [];
  districts: district[] = [];
  wards: wards[] = [];



  constructor(private addressService: AddressService) {


   }

  

  ngOnInit() {
    this.addressService.getCity().subscribe((data: any) => {
      this.city = data.data; // Assuming the response has a 'data' property that is an array of cities
    });
  }

  onCityChanged() {
    if (this.cityID) {
      this.addressService.getDistrict(this.cityID).subscribe((data: any) => {
        this.districts = data.data;
        this.districtId = null; // Clear district selection
        this.wards = []; // Clear wards list
      });
    } else {
      this.districts = [];
      this.districtId = null;
      this.wards = [];
    }
  }

  onDistrictChanged() {
    if (this.districtId) {
      this.addressService.getWards(this.districtId).subscribe((data: any) => {
        this.wards = data.data;
      });
    } else {
      this.wards = [];
    }
  }
}
