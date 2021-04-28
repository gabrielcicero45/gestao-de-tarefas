import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ListService {
    API_URL = 'http://localhost:3000/task';

    constructor(private http: HttpClient){}

    list(id: any){
        console.log(this.API_URL+'/'+id)
        return this.http.get(this.API_URL+'/'+id).subscribe(res=>{
            console.log(res);
            
        });
    }

   
}
