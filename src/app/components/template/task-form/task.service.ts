import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class TaskService {
    API_URL = 'http://localhost:3000/task';

    constructor(private http: HttpClient){}

   

    create(task: Object){
        this.http.post<Object>(this.API_URL,task).subscribe();
    }
}
