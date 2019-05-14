import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";


@Component({
	selector: 'app-add-one',
	templateUrl: './add-one.component.html',
	styleUrls: ['./add-one.component.css']
})
export class AddOneComponent implements OnInit {
	registered = false;
	submitted = false;
	userForm: FormGroup;
	name: string;
	serviceErrors: any = {};
	private headers;
	constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
		this.headers = new Headers();
		this.headers.set('Content-Type', 'application/json');

	}
	ngOnInit() {
		this.userForm = this.formBuilder.group({
			name: '',
			reslocation: '',
			content: ''
		});
	}
	onSubmit() {
		this.submitted = true;

		if (this.userForm.invalid == true) {
			return;
		}
		else {
			let data = this.userForm.value;
			console.log(data)

			this.http.post('/api/index.php/Restaurant/post_posts',data).subscribe(res => {
				console.log(res)
				this.router.navigate(['/view-restauransts']);
			}, error => {
					this.serviceErrors = error.error.error;
				});

			this.registered = true;

		}
	}

};