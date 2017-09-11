// import { Events, App } from 'ionic-angular';
// import { Injectable } from '@angular/core';
// import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
// import 'rxjs/add/operator/map';
// import { IPhone, IAgent, IUser, IHistory, IPromotion } from "./data.model";
// import { Observable } from "rxjs/Observable";
// import { LocalStorageService } from 'ng2-webstorage';

// @Injectable()
// export class ServiceAPI {
//   // host2: string = " http://localhost/cover/"
//   user: any = []
//   count: any[];
//   testom: IHistory[];
//   // http://localhost/cover/
//   host: string = "http://mykkpstg.dosh.gov.my:88/Cover/"
//   host2: string = "http://mykkpstg.dosh.gov.my:88/Cover/"
//   //host: string =
//   id: any;
//   time: any
//   // " http://mykkpstg.dosh.gov.my:88/Cover/";
//   todayDate: Date = new Date(Date.now())
//   damage: any[] = [
//     { type: "Cracked Screen" },
//     { type: "Touchscreen Malfunction" },
//     { type: "Charging Port Failure" },
//     { type: "Camera Malfunction" },
//     { type: "Headphone Jack" },
//     { type: "Home Button Failure" },
//     { type: "Speaker Malfunction" },
//     { type: "Volume Button mulfunction" },
//     { type: "Battery Failure" },
//     { type: "Microphone Failure" },
//   ];

//   specificScreen: any[] = [
//     { type: "Screen still function" },
//     { type: "Screen Malfunction" }
//   ];

//   phone: IPhone[] = [{ phoneId: 1, imeiNumber: 56253755372, image: "assets/img/apple3.jpg", brand: "Apple", model: "iPhone 5s", nickName: "Donald", serviceTag: "App-1012", startDate: "2015-03-25", endDate: "2015-03-25", expired: true },
//   { phoneId: 2, imeiNumber: 56253755372, image: "assets/img/huawei.png", brand: "Huawei", model: "Huawei 10 Lite", nickName: "Kyle", serviceTag: "Hua-1013", startDate: "2015-03-25", endDate: "2015-03-25", expired: false },
//   { phoneId: 3, imeiNumber: 56253755372, image: "assets/img/oppo.png", brand: "Oppo", model: "Oppo F3 Plus", nickName: "Steven", serviceTag: "Opp-1014", startDate: "2015-03-25", endDate: "2015-03-25", expired: false },
//   { phoneId: 4, imeiNumber: 56253755372, image: "assets/img/samsung.png", brand: "Samsung", model: "Samsung J3", nickName: "Michael", serviceTag: "Sam-1015", startDate: "2015-03-25", endDate: "2015-03-25", expired: true }];

//   agentList: IAgent[] = [{ agentId: 1, name: "Jo Repair&Service", address: "Shaftsbury Square", poscode: 61300, city: "Cyberjaya", state: "Selangor", latitude: 2.923701, logitude: 101.661746, distance: 20, image: "assets/img/shop1.jpg", phoneNumber: "019-9089123", rating: "4.5" },
//   { agentId: 2, name: "Shah Repair&Service", address: "DPULZE Shopping Centre", poscode: 61300, city: "Cyberjaya", state: "Selangor", latitude: 2.922514, logitude: 101.651020, distance: 40, image: "assets/img/shop.jpg", phoneNumber: "014-5089123", rating: "4.5" },
//   { agentId: 3, name: "Abdul Repair&Service", address: "The Street Mall 2", poscode: 61300, city: "Cyberjaya", state: "Selangor", latitude: 2.921024, logitude: 101.651167, distance: 15, image: "assets/img/shop.jpg", phoneNumber: "014-5089123", rating: "4.5" },
//   { agentId: 4, name: "Sidek Repair&Service", address: "HP Tower", poscode: 61300, city: "Cyberjaya", state: "Selangor", latitude: 3.151116, logitude: 101.664059, distance: 10, image: "assets/img/shop3.jpg", phoneNumber: "014-5089123", rating: "4.5" },];

//   userProfile: IUser[] = [
//     { userId: 1, firstName: "Alfonso", lastName: "Lopi", address: "Kuantan,Pahang", poscode: 61300, city: "Cyberjaya", state: "Selangor", email: "alfonso@gmail.com", icNumber: 980502117890, image: "assets/img/defaultPicture.png", phoneNumber: "019-9089123", password: "gdahsg", status: true },];

//   // notificationList: INotification[] = [{ title: "Keep Your Cover Up To Date!", notification: "Please register phone now." },
//   // { title: "Keep Your Cover Up To Date!", notification: "Please register phone now." },
//   // { title: "Cover Has Been Expired!", notification: "Please renew your cover." },
//   // { title: "Cover j Been Expired!", notification: "Please renew your cover." }];

//   promotionList: IPromotion[] = [{ image: "assets/img/promotion1.png", title: "Special Promotion", promotion: "Get 70% discount at Cover Store nearby you." },
//   { image: "assets/img/promotion2.png", title: "Save Up To 25%", promotion: "Save 25% for the next purchase." },
//   { image: "assets/img/promotion3.jpg", title: "Discount 50%", promotion: "You can get 50% discount if you finf at least 5 people to buy Cover" },
//   { image: "assets/img/promosi1.png", title: "Get KFC Voucher For Free!", promotion: "Claim your voucher now!" }];

//   historyList: any[] = [{ date: 2017 - 5 - 13, history: "Renewed coverage for Iphone 6s Messi" },
//   { date: 2017 - 2 - 13, history: "Renewed coverage for Iphone 6s Ronaldo" },
//   { date: 2017 - 4 - 13, history: "Deliver iPhone 6s Ronaldo to Repair&Service" },
//   { date: 2017 - 9 - 13, history: "Deliver iPhone iphone 5s Messi to Repair&Services" }];


//   Selangor: any[] = [
//     { name: "1030", slot: 1 }, { name: '1130', slot: 1 }, { name: '1230', slot: 1 }, { name: '1330', slot: 2 }, { name: '1430', slot: 1 }, { name: '1530', slot: 1 }, { name: '1630', slot: 1 }, { name: '1730', slot: 1 }, { name: '1830', slot: 1 },
//     { name: '1930', slot: 1 }];
//   KualaLumpur: any[] = [
//     { name: '1000', slot: 1 }, { name: '1100', slot: 1 }, { name: '1200', slot: 1 }, { name: '1300', slot: 1 }, { name: '1400', slot: 1 }, { name: '1500', slot: 1 },
//     { name: '1600', slot: 1 }, { name: '1700', slot: 1 }, { name: '1800', slot: 1 }, { name: '1900', slot: 1 }, { name: '2000', slot: 1 }, { name: '2100', slot: 1 }];



//   constructor(public app: App, public events: Events, public http: Http, private storage: LocalStorageService) {
//     this.user = this.storage.retrieve("user")
//     this.id = 1

//     this.user = this.storage.retrieve("user")
//     if (this.user == null) {
//       this.id = 0
//     }
//     else {
//       this.id = this.user.userId
//     }
//     //  this.id = this.user.userId
//     //   if (this.user.length != 0) {

//     //   }
//     //   else {
//     //     this.storage.clear('user')
//     //  //   this.app.getRootNav().setRoot(IntroPage);
//     //   }

//     this.events.subscribe('Login', (userEventData) => {
//       this.user = this.storage.retrieve("user")
//       console.log()
//       this.id = this.user.userId
//     })
//   }

//   // getSlot(date, agentId,limit): Observable<any[]> {
//   //   let url = this.host + 'api/slot/' + agentId + "/" + date + "/"+ limit
//   //   return this.http.get(url)
//   //     .map((res: Response) => res.json()
//   //     );
//   // }

//   getWorkTime(agent) {
//     switch (agent) {
//       case "SELANGOR": return this.Selangor

//       case "WILAYAH PERSEKUTUAN KUALA LUMPUR": return this.KualaLumpur
//     }
//   }


//   getDamage(): Observable<any[]> {
//     let url = this.host + 'api/damage'
//     console.log(url)
//     return this.http.get(url)
//       .map((res: Response) => res.json()
//       );
//   }

//   // getPhone(): Observable<any[]> {
//   //   let url = this. host + 'api/phone/' + this.id;
//   //   console.log(url)
//   //   return this.http.get(url)
//   //     .map((res: Response) => res.json()
//   //     );
//   // }

//   getPlanActive(): Observable<any[]> {
//     let url = this.host + 'api/plan/active/' + this.id;
//     console.log(url)
//     return this.http.get(url)
//       .map((res: Response) => res.json()
//       );
//   }

//   getPlanUnused(): Observable<any[]> {
//     let url = this.host2 + 'api/plan/unused/' + this.id;
//     console.log(url)
//     return this.http.get(url)
//       .map((res: Response) => res.json()
//       );
//   }

//   getPlanExpired(): Observable<any[]> {
//     let url = this.host + 'api/plan/expired/' + this.id;
//     console.log(url)
//     return this.http.get(url)
//       .map((res: Response) => res.json()
//       );
//   }


//   //  getMaxPlan(): Observable<any[]> {
//   //     let url = this.host2 + 'api/maxplan/' + this.id;
//   //     console.log(url)
//   //     return this.http.get(url)
//   //       .map((res: Response) => res.json()
//   //       );
//   //   }


//   getAllPlan(): Observable<any> {
//     let url = this.host2 + 'api/total/' + this.id;
//     console.log(url)
//     return this.http.get(url)
//       .map((res: Response) => res.json()
//       );
//   }

//   getPhoneBrand(): Observable<any[]> {
//     let url = this.host + 'api/brand';
//     console.log(url)
//     return this.http.get(url)
//       .map((res: Response) => res.json()
//       );
//   }

//   getPhoneModel(): Observable<any[]> {
//     let url = this.host + 'api/model';
//     console.log(url)
//     return this.http.get(url)
//       .map((res: Response) => res.json()
//       );
//   }

//   // getBookedTime(): any[] {
//   //   return this.bookedTime;
//   // }

//   //+ lat + "/" + lng;
//   getAgentList(lat, lng): Observable<any[]> {
//     let url = this.host + 'api/agent/' + lat + "/" + lng
//     return this.http.get(url)
//       .map((res: Response) => res.json()
//       );
//   }
//   getPhone(): Observable<any[]> {
//     let url = this.host + 'api/phone/' + this.id;
//     console.log(url)
//     return this.http.get(url)
//       .map((res: Response) => res.json()
//       );
//   }

//   // getUserProfile(): Observable<any[]> {
//   //   let url = this. host + 'api/login/' + this.id;
//   //   console.log(url)
//   //   return this.http.get(url)
//   //     .map((res: Response) => res.json()
//   //     );
//   // }

//   getProfile(): Observable<any[]> {
//     let url = this.host + 'api/user/' + this.id;
//     console.log(url)
//     return this.http.get(url)
//       .map((res: Response) => res.json()
//       );
//   }



//   getPromotionList(): any[] {
//     return this.promotionList;
//   }


//   getHistoryList(): Observable<any[]> {
//     let url = this.host + 'api/history?userId=' + this.id;
//     console.log(url)
//     return this.http.get(url)
//       .map((res: Response) => res.json()
//       );
//   }

//   getNotification(): Observable<any[]> {
//     let url = this.host + 'api/notification?userId=' + this.id;
//     console.log(url)
//     return this.http.get(url)
//       .map((res: Response) => res.json()
//       );
//   }

//   getRequest(): Observable<any[]> {
//     let url = this.host + 'api/request/' + this.id;
//     console.log(url)
//     return this.http.get(url)
//       .map((res: Response) => res.json()
//       );
//   }

//   // getAgent(): Observable<any[]> {
//   //   let url = this. host + 'api/phone/' + this.id
//   //   return this.http.get(url)
//   //     .map((res: Response) => res.json()
//   //     );
//   // }

//   getSpecific() {
//     return this.specificScreen
//   }

//   postImei(form): Observable<any> {
//     let url = this.host + "api/Imei"
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });
//     return this.http.post(url, form, options)
//       .map((res: Response) => res.json());
//   }



//   postUser(form): Observable<any> {
//     let url = this.host + "api/login"
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });
//     return this.http.post(url, form, options)
//       .map((res: Response) => res.json());
//   }


//   postRegister(form): Observable<any> {
//     let url = this.host + "api/register"
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });
//     return this.http.post(url, form, options)
//       .map((res: Response) => res.json());
//   }


//   postPhone(form, planId): Observable<any> {
//     console.log(planId)
//     let url = this.host + "api/addphone/" + this.id + "/" + planId;
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });
//     return this.http.post(url, form, options)
//       .map((res: Response) => res.json());
//   }


//   postRequest(form): Observable<any> {
//     let url = this.host + "api/request/" + this.id;

//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });
//     return this.http.post(url, form, options)
//       .map((res: Response) => res.json());
//   }


//   postRenew(form): Observable<any> {
//     let url = this.host + "api/renew" + this.id
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });
//     return this.http.post(url, form, options)
//       .map((res: Response) => res.json());
//   }

//   postRenewRequest(form): Observable<any> {
//     let url = this.host + "api/renewreq/" + this.id
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });
//     return this.http.post(url, form, options)
//       .map((res: Response) => res.json());
//   }

//   postAddPlan(form): Observable<any> {
//     let url = this.host2 + "api/addPlan/" + this.id
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });
//     return this.http.post(url, form, options)
//       .map((res: Response) => res.json());
//   }



//   check(form): Observable<any> {
//     let url = this.host + "api/email"
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });
//     return this.http.post(url, form, options)
//       .map((res: Response) => res.json());
//   }


//   slot(form): Observable<any> {
//     let params: URLSearchParams = new URLSearchParams();
//     //JSON.stringify(form)
//     console.log(form)
//     params.set("slot", JSON.stringify(form))
//     params.set("userId", this.id);

//     let url = this.host + 'api/slot';
//     console.log(url)
//     return this.http.get(url, { search: params })
//       .map((res: Response) => res.json()
//       );

//     //   let url = this.host + "api/slots?userId=" + this.id;
//     //   let headers = new Headers({ 'Content-Type': 'application/json' });
//     //   let options = new RequestOptions({ headers: headers });
//     //   return this.http.post(url, form, options)
//     //     .map((res: Response) => res.json());
//     // }


//   }

// }
