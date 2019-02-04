import { Component, OnInit } from "@angular/core";
import Business from "../Business";
import { BusinessService } from "../business.service";

@Component({
  selector: "app-guest-get",
  templateUrl: "./guest-get.component.html",
  styleUrls: ["./guest-get.component.css"]
})
export class GuestGetComponent implements OnInit {
  businesses: Business[];
  constructor(private bs: BusinessService) {}

  ngOnInit() {
    this.bs.getBusinesses().subscribe((data: Business[]) => {
      this.businesses = data;
    });
  }

  deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log("Deleted");
    });
  }
}
