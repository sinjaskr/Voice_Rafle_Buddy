import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-raffle',
  templateUrl: './create-raffle.page.html',
  styleUrls: ['./create-raffle.page.scss'],
  standalone:false,
})
export class CreateRafflePage implements OnInit {

  name: string = '';
  description: string = '';
  category: string = '';
  ticketPrice: number = 0;
  startDate: string = '';
  endDate: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  async createRaffle() {
    const data = {
      name: this.name,
      description: this.description,
      category: this.category,
      ticketPrice: this.ticketPrice,
      startDate: this.startDate,
      endDate: this.endDate,
    };

    try {
      const response = await this.apiService.createRaffle(data);
      this.router.navigate(['/dashboard']);
    } catch (error) {
      alert('Error creating raffle');
    }
  }

  cancelCreateRaffle() {
    this.router.navigate(['/dashboard']); 
  }

  ngOnInit() {
  }

}
