import { Component, OnInit } from '@angular/core';
import { parse } from 'querystring';
import { JSONP_HOME } from '@angular/http/src/backends/browser_jsonp';
import { error } from 'selenium-webdriver';
import { BuyService } from './buy.service';
import { MainService } from '../main.service'
import { MainComponent } from '../main.component';
import { async } from '@angular/core/testing';
declare var toastr: any;
declare var $: any
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  public giohangs: Array<any> = []
  public list_sp: Array<any> = []
  public tongtien: number
  public idBill: string
  public idShop: number
  public idUser: number
  constructor(
    private _buyService: BuyService,
    private _mainService: MainService
  ) {

  }
  ngOnInit() {
    this.getIdShop();
  }
  getIdShop() {
    this._mainService.getProfile().subscribe(res => {
      if (res.status == 'error') {
        console.log('Lỗi');
      }
      if (res.status == 'success') {
        this.idShop = res.user['user_shop_id'];
        this.idUser = res.user['user_id'];
        console.log('ma cua shop:' + this.idShop);
        console.log('ma cua shop:' + this.idUser);
        this.getDrinks();
      }
    })
  }
  getDrinks() {
    let data = JSON.stringify({
      drink_shop_id: this.idShop,
    })
    this._buyService.getDrinks(data).subscribe(res => {
      if (res.status == 'error') {
        console.log(res.message);
      }
      if (res.status == 'success') {
        console.log('thanh cong')
        console.log(res.drinks);
        //console.log(this.list_sp)
        this.list_sp = res.drinks;
        return;
      }
    })
  }
  addCart(dr: Object) {
    //console.log(sys);
    const objSP = {
      drink_id: dr['drink_id'],
      drink_name: dr['drink_name'],
      drink_price: dr['drink_price'],
      soluong: 1
    }
    console.log(objSP);

    const tan = sessionStorage.getItem('giohang');
    console.log(tan); // xem bien tan trong session lay ra nhu the nao
    // xem sau khi chuyen thanh la j
    if (tan) {
      const sanpham = JSON.parse(tan);
      let i;
      for (i = 0; i < sanpham.length; i++) {
        if (sanpham[i].drink_id === dr['drink_id']) {
          //console.log('vao trong duoc roi')
          sanpham[i].soluong = (Number.parseInt(sanpham[i].soluong) * 1 + 1 * 1) // đoạn cuối có .toString() kiem tra co can khong nha
          // console.log('vao trong duoc roi')
          console.log('so luong da duoc cong ' + sanpham[i].soluong);
          //console.log('Ma id cua san pham ' + sys['drink_id']);
          break;
        }
        console.log('Ngat ra khoi if')
        console.log(sanpham[i].soluong);
      }
      console.log('Ngat ra khoi for')
      console.log(i + '----');
      if (i >= sanpham.length) {
        console.log('nhay vo i >= lenght roi')
        sanpham.push(objSP);
        console.log(sanpham)
      }
      const myJsString = JSON.stringify(sanpham);
      console.log('chuoi mystring ' + myJsString)
      sessionStorage.setItem('giohang', myJsString);
      this.thongtingio();

    } else {
      const myJsString = JSON.stringify(objSP);
      sessionStorage.setItem('giohang', '[' + myJsString + ']');
      this.thongtingio();
    }
  }
  thongtingio() {
    this.giohangs = this._buyService.getContent();
    this.tongtien = this.gettotalMoney();
  }
  xoaItemGioHang(dr: Object) {
    const objSP = {
      drink_id: dr['drink_id'],
    }
    console.log('Ma id sp da chon  ' + objSP['drink_id']);
    let arrGioHangMoi = new Array();
    const tan = sessionStorage.getItem('giohang');
    const sanpham = JSON.parse(tan);
    console.log(tan);
    if (tan) {
      //console.log('vao trong duovc IF cua Tan')

      //console.log(sanpham)
      let j;
      //console.log('khai bao J')
      for (j = 0; j < sanpham.length; j++) {
        //console.log('chay vo duoc vong lap')
        //console.log('j thu = ' + j)
        //console.log(sanpham[j].drink_id + ' va objsp ' + objSP['drink_id'])
        if (sanpham[j].drink_id == objSP['drink_id']) {
          // console.log('Vo trong IF so sanh 2 ma giong nhau')
          // console.log('San pham co da chon xoa')
          // console.log(sanpham[j])
          sanpham.splice(j, 1);
          // console.log('chuoi moi ');
          break;
        }
        // console.log('ngat ra khoi if')
      }
      //console.log('ngat ra khoi for')
    }
    const myJString = JSON.stringify(sanpham);
    sessionStorage.setItem('giohang', myJString);
    this.thongtingio();
    this.gettotalMoney();
    console.log('ra tuot het roi')
  }
  gettotalItems(): number {
    const tan = sessionStorage.getItem('giohang');
    if (tan) {
      const sanpham = JSON.parse(tan);
      let tsl: number = 0;
      let i;
      for (i = 0; i < sanpham.length; i++) {
        tsl += Number.parseInt(sanpham[i].soluong);
      }
      return tsl;
    } else {
      return 0;
    }

  }
  gettotalMoney(): number {
    const tan = sessionStorage.getItem('giohang');
    if (tan) {
      let sanpham = JSON.parse(tan);
      let tongtien: number = 0;
      for (let i = 0; i < sanpham.length; i++) {
        tongtien += Number.parseInt(sanpham[i].soluong) * Number.parseInt(sanpham[i].drink_price);
      }
      return tongtien;
    }
    else {
      return 0;
    }
  }
  capnhatgio(event: any) {
    const id = event.target.id;
    //console.log(id);
    const msp = id.substring(2);
    //console.log('ma san pham' + msp);
    let soluong = event.target.value;
    //console.log('soluong:' + soluong);
    let tan = sessionStorage.getItem('giohang');
    const sanpham = JSON.parse(tan);
    //console.log(soluong.length);
    
    if (soluong.length > 0) {
      soluong = Number.parseInt(soluong);
      if (Number.isNaN(soluong) || soluong > 0) {
        for (let i = 0; i < this.giohangs.length; i++) {
          if (msp == this.giohangs[i].drink_id) {

            this.giohangs[i].soluong = soluong;
            console.log(this.giohangs[i]);
            sanpham[i].soluong = this.giohangs[i].soluong;
            console.log('san pham thay doi');
            console.log(sanpham[i]);
            break;
          }
        }
      }
    }
    const myJsString = JSON.stringify(sanpham);
    console.log('chuoi mystring  ' + myJsString)
    sessionStorage.setItem('giohang', myJsString);
    let tan1 = sessionStorage.getItem('giohang');
    console.log('chuoi session da cap nhat: ');
    console.log(tan1)
    this.thongtingio();
  }
  createIdBill(): string {
    var date = new Date();
    var random = "id" + Math.random().toString(30).slice(2)
    var nam = date.getFullYear().toString(),
      thang = date.getMonth().toString(),
      ngay = date.getDate().toString(),
      gio = date.getHours().toString(),
      phut = date.getMinutes().toString(),
      giay = date.getSeconds().toString(),
      nam1 = nam.substring(2);
    return this.idBill = nam1.concat(thang, ngay, gio, random.substring(9));

  }
  addBill() {
    var dataBill = JSON.stringify({
      bill_id: this.idBill,
      bill_user_id: this.idUser,
      bill_total: this.tongtien,
    });
    console.log('chuoi databill hoa don: ' + dataBill)
    this._buyService.addBill(dataBill).subscribe(res => {
      if (res.status == 'success') {
        toastr.success('Đã thanh toán')
        return;
      }
    }, error => {
      console.log('Không kết nối tới server');
      return;
    })
  }
  Pay() {
    this.createIdBill();
    this.addBill();
    const tan = sessionStorage.getItem('giohang');
    console.log(tan);
    if (tan) {
      const sanpham = JSON.parse(tan);
      for (let i = 0; i < sanpham.length; i++) {
        var dataBill = JSON.stringify({

          detail_bill_id: this.idBill,
          detail_drink_id: sanpham[i].drink_id,
          detail_drink_name: sanpham[i].drink_name,
          detail_number: sanpham[i].soluong,
          detail_price: sanpham[i].drink_price,
          detail_toalMoney_drink: sanpham[i].drink_price * sanpham[i].soluong
        })

        console.log('databill:' + dataBill)

        this._buyService.Pay(dataBill).subscribe(res => {
          if (res.json === 'success') {
            return console.log('thêm được được:' + sanpham[i].drink_name);
          }
        }, error => {
          console.log('không kết nối tới server');
          return;
        })
      }
      sessionStorage.removeItem('giohang');
      this.thongtingio();
      this.idBill = '';
    }
  }
}
