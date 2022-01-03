// First create a new folder 
// -- ng new admin

// then in src/app, create a new module names layout
// -- ng g module layout

// in this layout module , create components,
// -- ng g c header
// -- ng g c sidebar
// -- ng g c footer

// Export the modules from layout.module.ts
// exports :[
//   HeaderComponent,
//   SidebarComponent,
//   FooterComponent
// ]

// Now import the layout module into our APP module
// --Just write LayoutModule in our app.module.ts ->imports

// Now write the <app-header>,<app-footer> wherever you need in out html.

// From the angular website ,take your fav code for header ,footer and paste it in their htmls.
// (NO NEED)

// ==============================================================================================

// NODE BACKEND

// npm i cors
// npm i express
// npm i mongoose
// require and use CORS in app.js

// config - DB.JS

// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/test",{useNewUrlParser:true});
// let db = mongoose.connection;
// db.on("open",()=>{
//     console.log("Connected");
// })

// module.exports=mongoose;

// ----------------------------

// Model - Club.js

// const mongoose = require("../config/db");

// const schema = mongoose.Schema;

// const ClubSchema = new schema({
//     cname:String,
//     carea:String,
//     members:Number,
//     price:Number
// });

// const Club = mongoose.model("Club",ClubSchema);

// module.exports = Club;

// ---------------------------

// routes - ClubRouter.js

// const router = require("express").Router();
// const Club =require("../models/Club");

// router.get("/",(req,res)=>{
//     Club.find().lean()
//     .then((data)=>{
//         res.send(data);
//     })
//     .catch((err)=>{
//         res.send(err);
//     })
// });

// router.post("/add",(req,res)=>{
//     let club=new Club({
//         cname:req.body.cname,
//         carea:req.body.carea,
//         members:req.body.members,
//         price:req.body.price
//     })
//     club.save()
//     .then((data)=>{
//         res.send(data);
//     })
//     .catch((err)=>{
//         res.send(err);
//     })
// });

// router.get("/:id",(req,res)=>{
//     let ID=req.params.id;
//     Club.findById(ID)
//     .then((data)=>{
//         res.send(data);
//     })
//     .catch((err)=>{
//         res.send(err);
//     })
// });

// router.put("/edit/:id",(req,res)=>{
//     let databody={
//         cname:req.body.cname,
//         carea:req.body.carea,
//         members:req.body.members,
//         price:req.body.price
//     }
//     Club.findByIdAndUpdate({"_id":req.params.id},databody,{new:true})
//     .then((data)=>{
//         res.send(data);
//     })
//     .catch((err)=>{
//         res.send(err);
//     })
// });

// router.get("/delete/:id",(req,res)=>{
//     let ID = req.params.id;
//     Club.findByIdAndDelete(ID)
//     .then((data)=>{
//         res.send(data);
//     })
//     .catch((err)=>{
//         res.send(err);
//     })
// })

// module.exports=router;

// ---------------------------------

// APP.JS

// const express= require("express");
// const app= express();
// const cors= require("cors");
// const ClubRouter=require("./routes/ClubRouter");

// app.use(express.json());
// app.use(cors());
// app.use(express.urlencoded({extended:false}));
// app.use(express.static('public'));

// app.use("/club",ClubRouter);

// app.listen(7575,()=>{
//     console.log("listening at 7575...");
// })



// ==============================================================================================


// FOR CRUD


// in app,create a users module
// -- ng g module users

// in users module,create 5 crud components
// -- ng g c displayusers
// -- ng g c findusers
// -- ng g c addusers
// -- ng g c editusers
// -- ng g c deleteusers

// First import this module in our app component

// Now add routing for these pages -> in app.routing.module
//   const routes: Routes = [
  
//   {path:'users',
//     children:[
//       {path:'view/:id',component: FindusersComponent},
//       {path:'',component:DisplayusersComponent},
//       {path:'list',component:DisplayusersComponent},
//       {path:'delete/:id',component:DeleteusersComponent},
//       {path:'edit/:id',component:EditusersComponent},
//       {path:'create',component: AddusersComponent},
//     ]
//   }
// ];

// Now import HttpClientModule in app.module file = @angular/common/http
// import ReactiveFormsModule,RouterModule in user.module

// Create a service folder in app 
// in service folder - ng g service user

// Add services in service file 

// **DISPLAY

// baseUrl : string =  'http://localhost:7575/'; 
// //url of your backend app
// constructor(private http:HttpClient) { }

// displayusers()
// {
//      return this.http.get(this.baseUrl + "user");
// }

// viewusers()
// {
//      return this.http.get(this.baseUrl + "user/" + id);
// }

// addUser(userObj:any)
// {
//     return this.http.post(this.baseUrl + "user/add", userObj);
// }

// deleteUser(id:any)
// {
//     return this.http.get(this.baseUrl + "user/delete/" + id ); 
// }

// updateUser(id:any,userObj:any)
// {
//     return this.http.put(this.baseUrl + "user/edit/"+id, userObj);
// }
// ===============================================

// IN DISPLAYUSER.COMPONENT.TS

// listUsers :any;
//   constructor(private userService: UserService) { }

//   ngOnInit(): void {
//     this.userService.displayusers().subscribe(data =>{
//       this.listUsers = data;
//     });
//   }

// IN DISPLAYUSER.HTML

// <tr  *ngFor="let user of listUsers">
//             <td>{{user.name}}</td>
//             <td>{{user.gender}}</td>
//             <td>{{user.age}}</td>
// </tr>

// <a [routerLink]="['/users/view',user._id]">View</a>

// =============================================================================================

// IN FINDUSERS.COMPONENT.TS

// userid : String = '';
// userDetails:any;
// constructor(private userservice: UserService,private activatedRoute:ActivatedRoute) { }

//   ngOnInit(): void {

//     this.activatedRoute.params.subscribe(data =>{
//       this.userid = data['id'];
//     })

//     this.userservice.viewusers(this.userid).subscribe(data =>{
//       this.userDetails=data;
//     });
//   }

// IN FINDUSERS.HTML

// <table>
//     <tr>
//         <th>Name</th>
//         <td>{{userDetails.name}}</td>
//     </tr>
//     <tr>
//         <th>Gender</th>
//         <td>{{userDetails.gender}}</td>
//     </tr>
//     <tr>
//         <th>Age</th>
//         <td>{{userDetails.age}}</td>
//     </tr>
    
// </table>

// ==============================================================================================

// IN ADDUSERS.COMPONENT.TS

// addUserForm :FormGroup = new FormGroup({});
//   constructor(private formBuilder : FormBuilder,private userService:UserService,
//     private router:Router) { }

//   ngOnInit(): void {
//     this.addUserForm = this.formBuilder.group({
//       'name' : new FormControl(''),
//       'gender' : new FormControl(''),
//       'age' : new FormControl('')
//     })
//   }

//   createUser()
//   {
//     this.userService.addUser(this.addUserForm.value).subscribe(data =>{
//       console.log("User Created");
//       this.router.navigate(['users/list']);
//     },err =>{
//       console.log(err);
//     });
//   }


// IN ADDUSERS.HTML

// <form [formGroup]="addUserForm" (submit)="createUser()">
//     Name : <input formControlName="name" class="input"><br><br>
//     Gender : <input formControlName="gender"><br><br>
//     Age : <input formControlName="age"><br><br>
//     <br>
//     <button>Add User</button>

// </form>

// ==============================================================================================

// IN DELETEUSERS.COMPONENT.TS

// userid:String='';
//   constructor(private userService:UserService,private activatedRoute:ActivatedRoute,private router:Router) { }

//   ngOnInit(): void {
//     this.activatedRoute.params.subscribe(data =>{
//       this.userid=data['id'];
//     })

//     if(this.userid)
//     {
//       this.userService.deleteUser(this.userid).subscribe(data =>{
//         console.log("User Deleted");
//         this.router.navigate(['users/list']);
//       },err =>{
//         console.log(err);
//       })
//     }
//   }

// ==============================================================================================

// IN EDITUSERS.COMPONENT.TS

//   userid:String='';
//   userDetails:any;
//   dataLoaded:boolean=false;
//   editUserForm:FormGroup=new FormGroup({});

//   constructor(private userService:UserService,
//     private activatedRoute:ActivatedRoute,
//     private formBuilder:FormBuilder,
//     private router:Router) { }

//   ngOnInit(): void {
//     this.dataLoaded=false;
//     this.activatedRoute.params.subscribe(data =>{
//       this.userid=data['id'];
//     })

//     if(this.userid != '')
//     {
//       //View User Details
//       this.userService.viewusers(this.userid)
//       .toPromise()
//       .then(data =>{
//         this.userDetails=data;
//         console.log(this.userDetails);

//         //Build the Edit Form
//         this.editUserForm = this.formBuilder.group({
//           'name':new FormControl(this.userDetails.name),
//           'gender':new FormControl(this.userDetails.gender),
//           'age':new FormControl(this.userDetails.age)
//         })
//         this.dataLoaded=true;
//       })
//       .catch(err =>{
//         console.log(err);
//       })
//     }
//   }

//   updateUser()
//   {
//     this.userService.updateUser(this.userid,this.editUserForm.value).subscribe(data=>{
//       console.log("User Updated");
//       this.router.navigate(['users/list']);
//     },err =>{
//       console.log(err);
//     });
    

//   }

// IN EDITUSERS.HTML

// <div *ngIf="dataLoaded">
// <form [formGroup]="editUserForm" (submit)="updateUser()">
//     Name : <input formControlName="name"><br><br>
//     Gender : <input formControlName="gender"><br><br>
//     Age : <input formControlName="age"><br><br>
//     <br>
//     <button>Update User</button>
// </form>
// </div>

// ==============================================================================================

