import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup,FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormField, MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,MatInputModule,MatFormField,MatFormFieldModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

  
  @Output() delete = new EventEmitter();
  
  itemForm = new FormGroup({
       itemName : new FormControl('',[Validators.required]),
       quantity : new FormControl(1,{validators:[Validators.required]}),
       price : new FormControl(0.00,{validators:[Validators.required]})
  })


  onItemFormSubmit(){
        console.log(this.itemForm)
  }

  deleteItemForm(){
     this.delete.emit()
  }
}
