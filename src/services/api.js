// src/services/api.js
const API_BASE_URL = 'http://localhost:8080/api/v1';

class ApiService {
  constructor() {
    this.token = localStorage.getItem('jwt_token');
  }

  setAuthToken(token) {
    this.token = token;
    if (token) {
      localStorage.setItem('jwt_token', token);
    } else {
      localStorage.removeItem('jwt_token');
    }
  }

  getHeaders() {
    const headers = {
      'Content-Type': 'application/json',
    };
    
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }
    
    return headers;
  }

  async request(endpoint, options = {}) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
          ...this.getHeaders(),
          ...options.headers,
        },
      });

      if (response.status === 401) {
        this.setAuthToken(null);
        window.dispatchEvent(new Event('unauthorized'));
        throw new Error('Session expired. Please login again.');
      }

      // Handle response - your backend returns plain text, not JSON
      const contentType = response.headers.get('content-type');
      let data;
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }
      
      if (!response.ok) {
        throw new Error(data || 'Request failed');
      }
      
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  async login(credentials) {
    const response = await this.request('/auth/signin', {
      method: 'POST',
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password,
      }),
    });
    
    // Your backend returns the token as plain text
    if (response && typeof response === 'string' && response.length > 0) {
      this.setAuthToken(response);
      return { token: response };
    }
    
    return response;
  }

  async signup(userData) {
    const response = await this.request('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: userData.username,
        password: userData.password,
      }),
    });
    
    return response; // Returns "User registered successfully!" or "User already exists!"
  }

  async logout() {
    this.setAuthToken(null);
  }

  async getCurrentUser() {
    // You might need to implement this endpoint in your backend
    return this.request('/users/me');
  }

  // ... other methods remain the same
}

export default new ApiService();