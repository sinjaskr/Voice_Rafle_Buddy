import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:5000/api'; 

  constructor() { }

  // Admin Login
  async loginAdmin(data: any) {
    try {
      const response = await axios.post(`${this.apiUrl}/auth/login`, data);
      return response.data;
    } catch (error) {
      console.error('Login Error:', error);
      throw error;
    }
  }

  // Create a Raffle
  async createRaffle(data: any) {
    try {
      const response = await axios.post(`${this.apiUrl}/raffles`, data);
      return response.data;
    } catch (error) {
      console.error('Error creating raffle:', error);
      throw error;
    }
  }

  // Fetch all raffles
  async getAllRaffles() {
    try {
      const response = await axios.get(`${this.apiUrl}/raffles`);
      return response.data;
    } catch (error) {
      console.error('Error fetching raffles:', error);
      throw error;
    }
  }

  // Update a Raffle
  async updateRaffle(id: string, data: any) {
    try {
      const response = await axios.put(`${this.apiUrl}/raffles/${id}`, data);
      return response.data;
    } catch (error) {
      console.error('Error updating raffle:', error);
      throw error;
    }
  }

  // Delete a Raffle
  async deleteRaffle(id: string) {
    try {
      const response = await axios.delete(`${this.apiUrl}/raffles/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting raffle:', error);
      throw error;
    }
  }

  // Fetch a single raffle
  async getRaffle(id: string) {
    try {
      const response = await axios.get(`${this.apiUrl}/raffles/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching raffle:', error);
      throw error;
    }
  }

  // Fetch recent activity
  async getRecentActivity() {
    try {
      const response = await axios.get(`${this.apiUrl}/raffles/recent`);
      return response.data;
    } catch (error) {
      console.error('Error fetching recent activity:', error);
      throw error;
    }
  }
}
