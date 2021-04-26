import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  
  taskForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      title: ['',Validators.required],
      description: ['',Validators.required],
      responsible: ['',Validators.required],
      priority: ['',Validators.required],
      deadline: ['',Validators.required],
      
    })
  }

  

}
