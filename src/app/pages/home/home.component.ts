import { Component, OnInit } from '@angular/core';
import { KeolaService } from '../../services/keola.service';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  characters: any[] =[];
  allCharacters: any[] = []; 
  params={} as any;
  filteredCharacters: any[] = []; 
  searchTerm: string = ''; 


  constructor(
    private KeolaSVC:KeolaService
  ) { }

  ngOnInit(): void {
    this.params.page =0;
    this.getCharacters();
  }

  getCharacters(event?: any) {
    this.params.page += 1;
    this.KeolaSVC.getCharacters(this.params).subscribe({
      next: (res: any) => {
        this.characters.push(...res.objModel.suscriptions);
        this.allCharacters.push(...res.objModel.suscriptions); 
        
      },
      error: (error: any) => {}
    });
  }

  filterCharacters() {
    this.characters = this.allCharacters.filter(character => {
      return character.package.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  clearSearch() {
    this.searchTerm = '';
    this.filterCharacters(); 
  }

}
