import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
isSubmitted :boolean = false
addProduct= new FormGroup({
name:new FormControl("",[
  Validators.required,
  Validators.maxLength(10),
  Validators.minLength(3)
]),
quantity:new FormControl("",[
  Validators.required
]),
description:new FormControl("",[
  Validators.required,
  Validators.maxLength(20),
  Validators.minLength(10)
]),
image:new FormControl("",[
  Validators.required,
  Validators.maxLength(10),
  Validators.minLength(3)
]),
color:new FormControl("",[
  Validators.required,
  Validators.maxLength(10),
  Validators.minLength(3)
]),
size:new FormControl("",[
  Validators.required,
  Validators.maxLength(10),
  Validators.minLength(3)
]),
categories:new FormControl("",[
  Validators.required,
  Validators.maxLength(10),
  Validators.minLength(3)
]),
price:new FormControl("",[
  Validators.required,
  Validators.maxLength(10),
  Validators.minLength(3)
]),



})
msg =""
  _addproduct: any;
  constructor(private _product: ProductService,private _router:Router) { }

  ngOnInit(): void {}
  get name () {return this.addProduct.get("name")}
  get quantity () {return this.addProduct.get("quantity")}
  get description () {return this.addProduct.get("description")}
  get image () {return this.addProduct.get("image")}
  get color () {return this.addProduct.get("color")}
  get size () {return this.addProduct.get("size")}
  get categories () {return this.addProduct.get("categories")}
  get price () {return this.addProduct.get("price")}

  AddProduct(){
    this.isSubmitted= true
    if (this.addProduct.valid){
      this._product.AddProduct(this.addProduct.value)
      // .subscribe(
      //   (res)=> console.log(res),
      //   (err)=> this.msg = err.error.data
      //   ()=>{
      //     this._router.navigateByUrl("/")
      //   }
      // )
    }
  }
}
