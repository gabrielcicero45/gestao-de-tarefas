import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import {TaskService} from './task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  
  taskForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      title: ['',Validators.required],
      description: ['',Validators.required],
      responsible: ['',Validators.required],
      priority: ['',Validators.required],
      deadline: ['',Validators.required],
      
    });
    
  }

  create(){

    const title = this.taskForm.get('title')!.value;
    const description = this.taskForm.get('description')!.value;
    const responsible = this.taskForm.get('responsible')!.value;
    const priority = this.taskForm.get('priority')!.value;
    const deadline = this.taskForm.get('deadline')!.value;

   const task = {
    title,description,responsible,priority,deadline
    };
    console.log(task);
    this.taskService.create(task);
    this.taskForm.reset();
    
  }


  

}
