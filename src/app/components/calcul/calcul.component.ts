import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.scss']
})
export class CalculComponent implements OnInit {

  constructor(private routes: ActivatedRoute) { }
  value1= 0;
  value2 = 0;
  op = "";
  resultat = "";
  ngOnInit(): void {
    this.routes.params.subscribe(value =>{
      this.op = value['op'];
      this.routes.queryParams.subscribe(params =>{
        this.value1 = params['value1'];
        this.value2 = params['value2'];
        this.getOp(this.op);
        this.resultat = eval(this.value1 + this.op + this.value2)
      })
    })
  }
  getOp = (op) => {
    op == "moins" ? this.op = '-' : op == "fois" ? this.op = '*' : op == "plus" ? this.op = '+' : this.op = '/'
  }

}
