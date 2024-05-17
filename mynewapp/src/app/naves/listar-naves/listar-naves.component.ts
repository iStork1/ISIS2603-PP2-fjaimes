import { Component, OnInit } from '@angular/core';
import { NavesService } from '../naves.service';
import { Nave } from '../nave';
@Component({
  selector: 'app-listar-naves',
  templateUrl: './listar-naves.component.html',
  styleUrls: ['./listar-naves.component.css']
})
export class ListarNavesComponent implements OnInit {
  naves: Array<Nave> = [];
  constructor(private navesService: NavesService) { }
  getNaves(): void {
    this.navesService.getNaves().subscribe((naves) => {
      console.log(naves)
      this.naves = naves;
    });
  }
  ngOnInit() {
    this.getNaves()
  }

}
