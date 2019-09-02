import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';

@Component({
  selector: 'app-producto-thumbail',
  templateUrl: './producto-thumbail.component.html',
  styleUrls: ['./producto-thumbail.component.css']
})
export class ProductoThumbailComponent implements OnInit {

  @Input() prod: Producto;

  constructor() { }

  ngOnInit() {
  }
}
