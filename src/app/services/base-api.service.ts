import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class BaseApiService {
    #baseUrl = 'https://jsonplaceholder.typicode.com/';
}