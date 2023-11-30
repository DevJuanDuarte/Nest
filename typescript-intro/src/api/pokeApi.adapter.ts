import axios from "axios";

export interface HttpAdaptador {
  get<T>(url: string): Promise<T>;
}
export class PokeApiFetchAdapter implements HttpAdaptador{

  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url);
    const data: T = await resp.json();
    console.log('Desde fetch');
    return data;
  }
}

export class PokeApiAdapter implements HttpAdaptador{
  private readonly axios = axios;

  async get<T>(url: string): Promise<T> {
    const { data } = await this.axios.get<T>(url);
    console.log('Desde axios');
    return data;
  }

  async post(url: string, data: any) {}

  async patch(url: string, data: any) {}

  async delete(url: string) {}
}
