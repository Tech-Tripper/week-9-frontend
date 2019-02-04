import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BusinessService } from "../business.service";

@Component({
  selector: "app-guest-add",
  templateUrl: "./guest-add.component.html",
  styleUrls: ["./guest-add.component.css"]
})
export class GuestAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: BusinessService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      person_name: ["", Validators.required],
      business_name: ["", Validators.required],
      business_gst_number: ["", Validators.required]
    });
  }

  addBusiness(person_name, busines_name, business_gst_number) {
    this.bs.addBusiness(person_name, busines_name, business_gst_number);
  }

  ngOnInit() {}
}
