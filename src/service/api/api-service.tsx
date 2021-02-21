import { Person } from "../types/stateTypes";

export default class Service {
    API_URL = 'https://jsonplaceholder.typicode.com/';

    async getResource(url: string): Promise<any> {
        const res = await fetch(`${this.API_URL}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }
    async getPersonList(): Promise<Person[]> {
        const res: Person[] = await this.getResource('users');
        return res;
    }

}
