import {Component, OnInit} from "@angular/core";
import '../../node_modules/chart.js/src/chart.js'
import '../../node_modules/jquery/dist/jquery.js';
import {DataService} from "./data-form/data-form.service";
import {FormBuilder} from "@angular/forms";
import {IData, IPopulation, ICategory, ISubcategory, ICountry} from "./data-form/data";
/**
 * Created by calin.crist on 15/01/2017.
 */

const url = './explorer/loadCharts.js';
declare var jQuery: any;

@Component({
    moduleId: module.id,
    templateUrl: 'explorer.component.html',
    styleUrls: ['explorer.component.css']
})
export class ExplorerComponent implements OnInit{
    pageTitle: string = 'Data Explorer';
    errorMessage: string;
  
    initialData: IData[];
    countries: ICountry[];

    constructor(private _dataService: DataService) {  }

    ngOnInit(): void {
      
      this._dataService.getInitialData()
        .subscribe(initialData => this.initialData = initialData,
                         error => {
                           this.errorMessage = <any>error;
                           console.log('Error: ' + this.errorMessage);
                         });
      
      this._dataService.getCountries()
        .subscribe(countries => this.countries = countries,
          error => {this.errorMessage = error}
        );
    }
    
    onSubmit(parameters: any): void {
      console.log(parameters);
  
      // //  'Search' request to web service.
      this._dataService.getData(parameters).
      subscribe(response => console.log(response),
        error => console.log(error));
    }
}
