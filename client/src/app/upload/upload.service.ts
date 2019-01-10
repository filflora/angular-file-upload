import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

const url = 'http://localhost:3000/upload';

@Injectable()
export class UploadService {
    constructor(private http: HttpClient) { }

    public upload(files: Set<File>) {

        // create a new multipart-form for every file
        const formData: FormData = new FormData();
        formData.append('a', 'Lorem ipsum dolor');

        files.forEach(file => {
            formData.append('attachments[]', file, file.name);
        });

        const headers = new HttpHeaders();
        headers.append('Content-Type', undefined);

        // create a http-post request and pass the form
        // tell it to report the upload progress
        const req = new HttpRequest('POST', url, formData, {
            headers: headers
        });

        // send the http-request and subscribe for progress-updates

        this.http.request(req).subscribe(event => {

        });

    }
}
