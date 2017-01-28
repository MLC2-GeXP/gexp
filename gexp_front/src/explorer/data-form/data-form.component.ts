import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from "@angular/core";
import {DataService} from "./data-form.service";
import {ICategory, ISubcategory, IPopulation, IData, ICountry} from "./data";
import {SelectItem} from 'primeng/primeng';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";

/**
 * Created by calin.crist on 15/01/2017.
 */

@Component({
    selector: 'gexp-data-form',
    moduleId: module.id,
    templateUrl: 'data-form.component.html'
})
export class DataFormComponent implements OnInit, OnChanges {

    private _categories: ICategory[] = [];
    private _subcategories: ISubcategory[] = [];
    private _populationGender: IPopulation[] = [];
    errorMessage: string;

    userform: FormGroup;
    categs: SelectItem[];
    subcategs: SelectItem[];
    genders: SelectItem[];
    fromYears: SelectItem[];
    toYears: SelectItem[];
    submitted: boolean;
    selectedCountries: any[];

    set categories(data: ICategory[]) {
      this._categories = data;
      this.categs = [];
      for (let categ of data) {
        this.categs.push({label:categ.name, value:{id:categ.id, name: categ.name}});
      }
    }

    set subcategories(data: ISubcategory[]) {
      this.subcategs = [];

      for (let subcateg of data) {
        this.subcategs.push({label:subcateg.name, value:{id:subcateg.id, name: subcateg.name}});
      }
    }

    set populationGender(data: IPopulation[]) {
      this.genders = [];
      for (let gen of data) {
        this.genders.push({label:gen.gender, value:gen.id});
      }
    }
  
    @Input() countries: ICountry[];
    @Input() set initialData(data: IData[]) {

      if (!data.length) {
        console.log('empty');
        return;
      }

      this.categories = data[0]['categories'];
      this.populationGender = data[0]['population'];

      let temps = this._subcategories.concat(data[0]['categories'][0].subcategories);
      this.subcategories = temps;
    }

    @Output() getDataClicked: EventEmitter<string> = new EventEmitter<string>();

    constructor(private _fb: FormBuilder) {  }

    ngOnInit(): void {
        this.userform = this._fb.group({
          'subcategs': new FormControl('', Validators.required),
          'categs': new FormControl('', Validators.required),
          'genders': new FormControl('', Validators.required),
          'fromYear': new FormControl(''),
          'toYear': new FormControl('')
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
      if (changes['initialData']) {
        this.initialData = changes['initialData'].currentValue
      }
      if (changes['countries']) {
        this.countries = changes['countries'].currentValue
      }
    }

    countrySelected(selectedCountries: string[]) {
        this.selectedCountries = selectedCountries;
    }

    onSubmit(value, event: Event) {
        event.preventDefault();
        this.submitted = true;

        const params: any = {
          'subcategoryId': this.userform.value.subcategs.id,
          'populationId': this.userform.value.genders,
          'countryIds': this.selectedCountries
        };

        this.getDataClicked.emit(params);
    }

    categoryChanged(value) {
      for (let category of this._categories) {
        if (category.id == value) {
          this._subcategories = [];
          this.subcategories = this._subcategories.concat(category.subcategories);
          break;
        }
      }
    }

    get diagnostic() { return JSON.stringify(this.userform.value); }
}
