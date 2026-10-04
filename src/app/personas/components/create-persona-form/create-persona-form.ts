import { Component, inject, output, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreatePersonaRequest } from '../../models/personas.models';
import { GenderInputOptions } from '../../models/personas.constants';
import { TagInput } from '../../../shared/components/tag-input/tag-input';
import { CreatePersonaStore } from '../../stores/create-persona.stores';

@Component({
  imports: [ReactiveFormsModule, TagInput],
  selector: 'app-create-persona-form',
  styleUrl: './create-persona-form.css',
  templateUrl: './create-persona-form.html',
})
export class CreatePersonaForm {
  protected readonly createPersonaStore = inject(CreatePersonaStore)
  protected genders = GenderInputOptions;

  formBuilder: FormBuilder = inject(FormBuilder);
  form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
  });

  gender = signal('FEMALE');

  formSubmit() {
    const payload: CreatePersonaRequest = {
      name: this.form.get('name')?.value,
      gender: this.gender(),
    };
    this.createPersonaStore.createPersona(payload)
  }
}
