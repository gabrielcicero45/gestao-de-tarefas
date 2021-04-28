
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {ListService} from './list.service';


@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss']
})
export class ListFormComponent implements OnInit {
  
  listForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private listService: ListService){
    
  }
  

  ngOnInit(): void {
    this.listForm = this.formBuilder.group(
      {
        id: ['',Validators.required],
      }
    )
  }

  list(){
    const id = this.listForm.get('id')!.value;  
    this.listService.list(id);
    this.listForm.reset();
    console.log(id);
  
  }

}
