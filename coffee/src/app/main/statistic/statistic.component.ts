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
  constructor(
    private _mainService: MainService,
    private _statisticService: StatisticService
  ) {

  }

  ngOnInit() {
    this.profitDay();
    this.profitMonth();
    this.profitWeek();
  }
  getIdShop() {
    this._mainService.getProfile().subscribe(res => {
      if (res.status == 'error') {
        console.log('error');
        return;
      }
      if (res.status == 'success') {
        this.idShop = res.user['user_shop_id'];
        console.log('id cua shop:' + this.idShop);
        return;
      }
    })
  }
  profitDay() {
    let data = JSON.stringify({
      Idshop: 4,
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
        this.Fday = ngay.substring(3,0)
        console.log(res.money[0]['SUM(bill_total)'])
        
        return;
      }
    })
  }
  profitWeek() {
    let data = JSON.stringify({
      Idshop: 4,
    });
    this._statisticService.profitWeek(data).subscribe(res => {
      if (res.status == 'error') {
        toastr.warning('Error');
        return;
      }
      if (res.status == 'success') {
        // caách lấy 1 giá trị từ 1 mảng ở vị trí 0 với khóa trong phần tử trong mảng
        this.Fweek = res.money[0]['SUM(bill_total)'];
        var week = this.Fweek.toString();
        this.Fweek = week.substring(3,0)
        console.log(res.money[0]['SUM(bill_total)'])
        
        return;
      }
    })
  }
  profitMonth() {
    let data = JSON.stringify({
      Idshop: 4,
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
        this.Fmonth = thang.substring(3,0),
        console.log(this.Fmonth)
        console.log(res.money[0]['SUM(bill_total)'])
        
        return;
      }
    })
  }
}
