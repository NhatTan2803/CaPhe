import { Component, OnInit } from '@angular/core';
import { StatisticService } from './statistic.service';
import { MainService } from './../main.service';
declare var toastr: any;
declare var $: any;
@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css'],

})
export class StatisticComponent implements OnInit {
  public idShop: number;
  public Fday: string;
  public Fweek: string;
  public Fmonth: string;
  public countBill: number;
  public countDrink: number;
  constructor(
    private _mainService: MainService,
    private _statisticService: StatisticService
  ) {

  }

  ngOnInit() {
    this.getIdShop();

  }
  getIdShop() {
    this._mainService.getProfile().subscribe(res => {
      if (res.status == 'error') {
        console.log('error');
        return;
      }
      if (res.status == 'success') {
        this.idShop = res.user['user_shop_id'];
        this.profitDay();
        this.profitMonth();
        this.profitWeek();
        this.billcount();
        this.drinkcount();
        console.log('id cua shop:' + this.idShop);
        return;
      }
    })
  }
  profitDay() {
    let data = JSON.stringify({
      Idshop: this.idShop,
    });
    this._statisticService.profitDay(data).subscribe(res => {
      if (res.status == 'error') {
        toastr.warning('Error');
        return;
      }
      if (res.status == 'success') {
        // caách lấy 1 giá trị từ 1 mảng ở vị trí 0 với khóa trong phần tử trong mảng
        this.Fday = res.money[0]['SUM(bill_total)'];
        var ngay = this.Fday.toString();

        // cat chuoi lay tu vi tri so 0(vi chu dau tien la so 1) và ket thuc o thu 2,cat ra bo vo Fday thi ngay con 000
        this.Fday = ngay.substring(0, ngay.length - 3);

        // console.log(res.money[0]['SUM(bill_total)'])

        return;
      }
    })
  }
  profitWeek() {
    let data = JSON.stringify({
      Idshop: this.idShop,
    });
    this._statisticService.profitWeek(data).subscribe(res => {
      if (res.status == 'error') {
        toastr.warning('Error');
        return;
      }
      if (res.status == 'success') {
        // caách lấy 1 giá trị từ 1 mảng ở vị trí 0 với khóa trong phần tử trong mảng
        this.Fweek = res.money[0]['SUM(bill_total)'];
        var tuan = this.Fweek.toString();
        this.Fweek = tuan.substring(0, tuan.length - 3)
        console.log(res.money[0]['SUM(bill_total)'])

        return;
      }
    })
  }
  profitMonth() {
    let data = JSON.stringify({
      Idshop: this.idShop,
    });
    this._statisticService.profitMonth(data).subscribe(res => {
      if (res.status == 'error') {
        toastr.warning('Error');
        return;
      }
      if (res.status == 'success') {
        // caách lấy 1 giá trị từ 1 mảng ở vị trí 0 với khóa trong phần tử trong mảng
        this.Fmonth = res.money[0]['SUM(bill_total)'];
        // chuyen thang sang chuoi de cắt
        var thang = this.Fmonth.toString();
        this.Fmonth = thang.substring(0, thang.length - 3),
          console.log(this.Fmonth)
        console.log(res.money[0]['SUM(bill_total)'])

        return;
      }
    })
  }
  billcount() {
    let data = JSON.stringify({
      Idshop: this.idShop,
    });
    this._statisticService.countBill(data).subscribe(res => {
      if (res.status == 'error') {
        toastr.warning('Error');
        return;
      }
      if (res.status == 'success') {
        // caách lấy 1 giá trị từ 1 mảng ở vị trí 0 với khóa trong phần tử trong mảng
        this.countBill = res.bill[0]['COUNT(bill_total)'];
        console.log(this.countBill)

        return;
      }
    })
  }
  drinkcount() {
    let data = JSON.stringify({
      Idshop: this.idShop,
    });
    this._statisticService.countDrink(data).subscribe(res => {
      if (res.status == 'error') {
        toastr.warning('Error');
        return;
      }
      if (res.status == 'success') {
        // caách lấy 1 giá trị từ 1 mảng ở vị trí 0 với khóa trong phần tử trong mảng
        this.countDrink = res.drink[0]['SUM(detail_number)'];
        console.log(this.countDrink)

        return;
      }
    })
  }
}