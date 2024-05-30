import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { KeolaService } from '../../services/keola.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css'
})

export class CharacterDetailComponent implements OnInit {

  characterId: string = ""
  schedule: any[] = [];
  status: string = "";
  description: string = "";
  objModel: any[] = [];
  
 

  voucherInfo: any;
  constructor(
    private actRoute: ActivatedRoute,
    private KeolaSVC: KeolaService,
    private http: HttpClient
  ) {
    this.characterId = this.actRoute.snapshot.paramMap.get("id") as string
    console.log("id", this.characterId)
  }

  ngOnInit(): void {

    this.actRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.getSchedule(id);
      }
    });

  }

  getImageUrl(namePicture: string): string {
    return `https://inclubtest.com/images/${namePicture}`;
  }
  
  getSchedule(id: string): void {
    this.KeolaSVC.getCharactersId(id).subscribe(
     
      data => {
        this.status = data.status;
        this.description = data.description;
        this.objModel = data.objModel;
        this.schedule = data;
      
        
      },
      error => {
        alert(error);
      }
    );
  }

  
  validarPago(idSuscription: number, paymentId: number): void {
    console.log(this.schedule)
    const data = {
      IdSuscription: idSuscription,
      ListIdPaymentsValidate: [paymentId],
      IsAcceptedPayment: 1, 
      ReasonRejection: { id: paymentId, Detalle: "" }
    };
    this.KeolaSVC.validarPago(data).subscribe({
      next: (response) => {
        console.log('Respuesta del servidor:', response);

      },
      error: (error) => {
        if (error.status === 400) {
          alert(error.error.description);
        }
      }
    });

  }


  
}








