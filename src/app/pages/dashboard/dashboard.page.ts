import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {

  raffles: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  async ionViewDidEnter() {
    this.getRaffles();
  }

  async getRaffles() {
    try {
      this.raffles = await this.apiService.getRecentActivity();
    } catch (error) {
      console.error('Error fetching raffles:', error);
    }
  }

  navigateToCreateRaffle() {
    this.router.navigate(['/create-raffle']);
  }

  navigateToRaffleDetail(raffleId: string) {
    this.router.navigate([`/raffle-detail/${raffleId}`]);
  }

  navigateToRaffleManagement() {
    this.router.navigate(['/raffle-management']);
  }

  logout() {
    localStorage.removeItem('adminToken');
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
