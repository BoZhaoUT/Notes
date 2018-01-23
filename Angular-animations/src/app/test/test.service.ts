import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export class TestService {
    constructor(private http: Http) {
    }

    add(test) {
        return this.http.post('...', test).map(r => r.json());
    }
    
    getTests() { 
        return this.http.get('...').map(r => r.json());
    }

    delete(id) {
        return this.http.delete('...').map(r => r.json());
    }
}