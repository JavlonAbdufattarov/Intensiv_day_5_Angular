import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @ts-ignore
  currency= "$";
  productData: any[]=[
    {
    image:"1 (1).png",
    title:"Лучшие лрузья",
    text:" Печенье, с которого все началось! Наше фирменное печенье с шоколадной крошкой и грецкими  орехами   хрустящее снаружи с достаточно толстой и липкой серединкой.",
    price:20,
    weight:"2шт/200гр",
    basePrice:20,
    },
    {
      image:"2.png",
      title:" Шоколадный француз",
      text:"   Это печенье, изготовленное из тёмного французского какао и полусладкой шоколадной стружки,наверняка удовлетворит даже самого заядлого любителя шоколада.",
      price:24,
      weight:"2шт/200гр",
      basePrice:24,
    },
    {
      image:"3.png",
      title:" Овсянка с изюмом, Сэр!",
      text:"  Это сдобное маслянистое печенье весом шесть унций каждое, золотисто-коричневое снаружи, влажное внутри и наполненное пухлым сладким изюмом." ,
      price:18,
      weight:"2шт/200гр",
      basePrice:18,
    },
    {
      image:"4.png",
      title:"Шоколадное наслаждение",
      text:"  Идеально хрустящее снаружи и достаточно густое и липкое в центре, это печенье наполнено полусладкой и тёмной шоколадной стружкой, придающей богатую глубину вкуса." ,
      price:24,
      weight:"2шт/200гр",
      basePrice:24,
    },
    {
      image:"5.png",
      title:" Арахисовый рай",
      text:" Сладкое, пикантное и идеально сбалансированное печенье удовлетворяет тягу любителей арахисового масла и шоколада." ,
      price:20,
      weight:"2шт/200гр",
      basePrice:20,
    },
    {
      image:"6.png",
      title:"Шоколадный ореховый деликатес",
      text:" Наша фирменная рецептура печенья с шоколадными крошками и грецкими орехами гарантирует   незабываемый вкусовой опыт. Каждое печенье хрустит снаружи, но раскрывает внутри нежную сердцевину." ,
      price:18,
      weight:"2шт/200гр",
      basePrice:18,
    },
    {
      image:"8.png",
      title:" Прошу прошение я по ленился делать остальные",
      text:" Но не сомневайтесь я могу это все сделать просто лень. Ну если что угошайтесь печенками )",
      price:24,
      weight:"2шт/200гр",
      basePrice:24,
    },
    {
      image:"8.png",
      title:" Прошу прошение я по ленился делать остальные",
      text:" Но не сомневайтесь я могу это все сделать просто лень. Ну если что угошайтесь печенками )",
      price:24,
      weight:"2шт/200гр",
      basePrice:24,
    },
    {
      image:"8.png",
      title:" Прошу прошение я по ленился делать остальные",
      text:" Но не сомневайтесь я могу это все сделать просто лень. Ну если что угошайтесь печенками )",
      price:24,
      weight:"2шт/200гр",
      basePrice:24,
    },
    {
      image:"8.png",
      title:" Прошу прошение я по ленился делать остальные",
      text:" Но не сомневайтесь я могу это все сделать просто лень. Ну если что угошайтесь печенками )",
      price:24,
      weight:"2шт/200гр",
      basePrice:24,
    },
    {
      image:"8.png",
      title:" Прошу прошение я по ленился делать остальные",
      text:" Но не сомневайтесь я могу это все сделать просто лень. Ну если что угошайтесь печенками )",
      price:24,
      weight:"2шт/200гр",
      basePrice:24,
    },
    {
      image:"8.png",
      title:" Прошу прошение я по ленился делать остальные",
      text:" Но не сомневайтесь я могу это все сделать просто лень. Ну если что угошайтесь печенками )",
      price:24,
      weight:"2шт/200гр",
      basePrice:24,
    },
  ];

  form  = this.fb.group({
    product:["",Validators.required],
    name:["",Validators.required],
    phone:["",Validators.required],

  });

  constructor(private fb: FormBuilder) {

  }

    scrollTo(target :HTMLElement,product?:any) {
    target.scrollIntoView({behavior: 'smooth'});
      if (product) {
        this.form.patchValue({product: product.title + ' (' + product.price + ' ' + this.currency + ')'});
      }
  }
  changeCurency(){

    let newCurrency  = "$" ;
    let coefficient  = 1;
    if (this.currency === "$") {
      newCurrency = "so`m";
      coefficient = 100;
    }else if (this.currency === "so`m") {
      newCurrency = "&";
      coefficient = 3;
    }
    else if (this.currency=== "&") {
      newCurrency = "€";
      coefficient = 0.9
    }
    else if (this.currency  === "€") {
      newCurrency = "¥";
      coefficient = 6.9
    }

    this.currency = newCurrency;
    this.productData.forEach((item:any) => {
      item.price = +(item.basePrice*coefficient).toFixed(1) ;
    })
  }
  confirmOrder(){
    if (this.form.valid) {}
    alert("Thank u")
    this.form.reset();
  }
}
