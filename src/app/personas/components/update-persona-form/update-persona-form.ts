import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {RelationshipsInputOptions, GenderInputOptions} from '../../models/personas.constants';
import { UpdatePersonaStore } from '../../stores/update-persona.stores';
import { PersonaResponse, UpdatePersonaRequest } from '../../models/personas.models';
import { TagInput } from '../../../shared/components/tag-input/tag-input';

@Component({
  imports: [ReactiveFormsModule, TagInput],
  selector: 'app-update-persona-form',
  styleUrl: './update-persona-form.css',
  templateUrl: './update-persona-form.html',
})
export class UpdatePersonaForm {
  protected readonly updatePersonaStore = inject(UpdatePersonaStore);
  protected genders = GenderInputOptions;
  protected relationships = RelationshipsInputOptions;

  formBuilder: FormBuilder = inject(FormBuilder);
  form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    backstory: ['', [Validators.maxLength(500)]],
  });

  gender = signal('FEMALE');
  relationship = signal('FRIENDSHIP');

  constructor() {
    effect(() => {
      if (this.updatePersonaStore.isPersonaLoaded()) {
        // load data
        this.loadForm(this.updatePersonaStore.currentPersona()!);
      }
    });
  }

  loadForm(initialData: PersonaResponse) {
    this.form.get('name')?.setValue(initialData.name);
    this.form.get('backstory')?.setValue(initialData.backstory);
    this.relationship.set(initialData.relationshipType);
    this.gender.set(initialData.gender);
  }

  formSubmit() {
    const id = this.updatePersonaStore.currentPersona()!.id;
    const payload: UpdatePersonaRequest = {
      id,
      active: true,
      name: this.form.get('name')?.value,
      backstory: this.form.get('backstory')?.value,
      relationshipType: this.relationship(),
      gender: this.gender(),
    };
    this.updatePersonaStore.updatePersona(payload);
  }
}
