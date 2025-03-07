import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-raffle-detail',
  templateUrl: './raffle-detail.page.html',
  styleUrls: ['./raffle-detail.page.scss'],
  standalone: false,
})
export class RaffleDetailPage implements OnInit {

  raffleId: string = '';
  raffle: any = {};

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {
    this.raffleId = this.route.snapshot.paramMap.get('id')!;
  }

  async ionViewDidEnter() {
    await this.getRaffleDetails();
  }

  async getRaffleDetails() {
    try {
      this.raffle = await this.apiService.getRaffle(this.raffleId);
    } catch (error) {
      alert('Error fetching raffle details');
    }
  }

  async updateRaffle() {
    try {
      const updatedRaffle = await this.apiService.updateRaffle(this.raffleId, this.raffle);
      this.router.navigate(['/dashboard']);
    } catch (error) {
      alert('Error updating raffle');
    }
  }

  async deleteRaffle() {
    try {
      const confirmDelete = confirm('Are you sure you want to delete this raffle?');
      if (confirmDelete) {
        await this.apiService.deleteRaffle(this.raffleId);
        this.router.navigate(['/dashboard']);
      }
    } catch (error) {
      alert('Error deleting raffle');
    }
  }

  ngOnInit() {
  }

}
