import { Component, OnInit } from '@angular/core';
import {FlatTreeControl, CdkTreeModule} from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { from } from 'rxjs';
import { DataLists } from './data';
import { faUser,faPlus,faMinus } from '@fortawesome/free-solid-svg-icons';


interface Items {
	id: number,
	name: string;
	amount: number;
	isDone: boolean;
}

interface DayLists {
	id: number,
	name: string;
	amount: number;
	isDone: boolean;
	children?: Items[];
}

export interface children {
    id: number,
	name: string;
	amount: number;
	isDone: boolean;
}

interface DayLists1 {
	id: number,
	day: string;
	items: children[];
}

const TREE_DATA: DayLists[] = [
	{
        id:1,
		name:'Day One',
		amount:7,
		isDone:false,
        children:[
            {id:1,name:'Read Aloud',amount:20,isDone:false},
            {id:1,name:'Repeat Sentence',amount:25,isDone:false},
            {id:1,name:'Retell Lecture',amount:5,isDone:false},
            {id:1,name:'Reading Drag & Drop Blanks',amount:20,isDone:false},
            {id:1,name:'Summarize Spoken Text',amount:2,isDone:false},
            {id:1,name:'Write From Dictation',amount:25,isDone:false}
        ]
    },
    {
        id:2,
		name:'Day Two',
		amount:7,
		isDone:false,
        children:[
            {id:1,name:'Read Aloud',amount:20,isDone:false},
            {id:1,name:'Repeat Sentence',amount:25,isDone:false},
            {id:1,name:'Retell Lecture',amount:5,isDone:false},
            {id:1,name:'Reading Drag & Drop Blanks',amount:20,isDone:false},
            {id:1,name:'Summarize Spoken Text',amount:2,isDone:false},
            {id:1,name:'Write From Dictation',amount:25,isDone:false}
        ]
    },
    {
        id:3,
		name:'Day Three',
		amount:7,
		isDone:false,
        children:[
            {id:1,name:'Read Aloud',amount:20,isDone:false},
            {id:1,name:'Repeat Sentence',amount:25,isDone:false},
            {id:1,name:'Retell Lecture',amount:5,isDone:false},
            {id:1,name:'Reading Drag & Drop Blanks',amount:20,isDone:false},
            {id:1,name:'Summarize Spoken Text',amount:2,isDone:false},
            {id:1,name:'Write From Dictation',amount:25,isDone:false}
        ]
    },
    {
        id:4,
		name:'Day Five',
		amount:7,
		isDone:false,
        children:[
            {id:1,name:'Read Aloud',amount:20,isDone:false},
            {id:1,name:'Repeat Sentence',amount:25,isDone:false},
            {id:1,name:'Retell Lecture',amount:5,isDone:false},
            {id:1,name:'Reading Drag & Drop Blanks',amount:20,isDone:false},
            {id:1,name:'Summarize Spoken Text',amount:2,isDone:false},
            {id:1,name:'Write From Dictation',amount:25,isDone:false}
        ]
    },
    {
        id:6,
		name:'Day Six',
		amount:7,
		isDone:false,
        children:[
            {id:1,name:'Read Aloud',amount:20,isDone:false},
            {id:1,name:'Repeat Sentence',amount:25,isDone:false},
            {id:1,name:'Retell Lecture',amount:5,isDone:false},
            {id:1,name:'Reading Drag & Drop Blanks',amount:20,isDone:false},
            {id:1,name:'Summarize Spoken Text',amount:2,isDone:false},
            {id:1,name:'Write From Dictation',amount:25,isDone:false}
        ]
    },
    {
        id:7,
		name:'Day Seven',
		amount:7,
		isDone:false,
        children:[
            {id:1,name:'Read Aloud',amount:20,isDone:false},
            {id:1,name:'Repeat Sentence',amount:25,isDone:false},
            {id:1,name:'Retell Lecture',amount:5,isDone:false},
            {id:1,name:'Reading Drag & Drop Blanks',amount:20,isDone:false},
            {id:1,name:'Summarize Spoken Text',amount:2,isDone:false},
            {id:1,name:'Write From Dictation',amount:25,isDone:false}
        ]
    },
    {
        id:8,
		name:'Day Eight',
		amount:7,
		isDone:false,
        children:[
            {id:1,name:'Read Aloud',amount:20,isDone:false},
            {id:1,name:'Repeat Sentence',amount:25,isDone:false},
            {id:1,name:'Retell Lecture',amount:5,isDone:false},
            {id:1,name:'Reading Drag & Drop Blanks',amount:20,isDone:false},
            {id:1,name:'Summarize Spoken Text',amount:2,isDone:false},
            {id:1,name:'Write From Dictation',amount:25,isDone:false}
        ]
    },
    {
        id:9,
		name:'Day Nine',
		amount:7,
		isDone:false,
        children:[
            {id:1,name:'Read Aloud',amount:20,isDone:false},
            {id:1,name:'Repeat Sentence',amount:25,isDone:false},
            {id:1,name:'Retell Lecture',amount:5,isDone:false},
            {id:1,name:'Reading Drag & Drop Blanks',amount:20,isDone:false},
            {id:1,name:'Summarize Spoken Text',amount:2,isDone:false},
            {id:1,name:'Write From Dictation',amount:25,isDone:false}
        ]
    },
    {
        id:10,
		name:'Day Ten',
		amount:7,
		isDone:false,
        children:[
            {id:1,name:'Read Aloud',amount:20,isDone:false},
            {id:1,name:'Repeat Sentence',amount:25,isDone:false},
            {id:1,name:'Retell Lecture',amount:5,isDone:false},
            {id:1,name:'Reading Drag & Drop Blanks',amount:20,isDone:false},
            {id:1,name:'Summarize Spoken Text',amount:2,isDone:false},
            {id:1,name:'Write From Dictation',amount:25,isDone:false}
        ]
    },
    {
        id:11,
		name:'Day Eleven',
		amount:7,
		isDone:false,
        children:[
            {id:1,name:'Read Aloud',amount:20,isDone:false},
            {id:1,name:'Repeat Sentence',amount:25,isDone:false},
            {id:1,name:'Retell Lecture',amount:5,isDone:false},
            {id:1,name:'Reading Drag & Drop Blanks',amount:20,isDone:false},
            {id:1,name:'Summarize Spoken Text',amount:2,isDone:false},
            {id:1,name:'Write From Dictation',amount:25,isDone:false}
        ]
    },
    {
        id:12,
		name:'Day Twelve',
		amount:7,
		isDone:false,
        children:[
            {id:1,name:'Read Aloud',amount:20,isDone:false},
            {id:1,name:'Repeat Sentence',amount:25,isDone:false},
            {id:1,name:'Retell Lecture',amount:5,isDone:false},
            {id:1,name:'Reading Drag & Drop Blanks',amount:20,isDone:false},
            {id:1,name:'Summarize Spoken Text',amount:2,isDone:false},
            {id:1,name:'Write From Dictation',amount:25,isDone:false}
        ]
    },
    {
        id:13,
		name:'Day Thirteen',
		amount:7,
		isDone:false,
        children:[
            {id:1,name:'Read Aloud',amount:20,isDone:false},
            {id:1,name:'Repeat Sentence',amount:25,isDone:false},
            {id:1,name:'Retell Lecture',amount:5,isDone:false},
            {id:1,name:'Reading Drag & Drop Blanks',amount:20,isDone:false},
            {id:1,name:'Summarize Spoken Text',amount:2,isDone:false},
            {id:1,name:'Write From Dictation',amount:25,isDone:false}
        ]
    },
    {
        id:14,
		name:'Day Forteen',
		amount:7,
		isDone:false,
        children:[
            {id:1,name:'Read Aloud',amount:20,isDone:false},
            {id:1,name:'Repeat Sentence',amount:25,isDone:false},
            {id:1,name:'Retell Lecture',amount:5,isDone:false},
            {id:1,name:'Reading Drag & Drop Blanks',amount:20,isDone:false},
            {id:1,name:'Summarize Spoken Text',amount:2,isDone:false},
            {id:1,name:'Write From Dictation',amount:25,isDone:false}
        ]
    }
];
  
  /** Flat node with expandable and level information */
interface ExampleFlatNode {
	expandable: boolean;
	name: string;
	amount: number;
	level: number;
}

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.css']
})


export class RoutineComponent implements OnInit {
    faUser = faUser;
    faPlus = faPlus;
    faMinus = faMinus;
    
	selectedIndex = 0;
	itemList : any;
	itemList2 : any;
	itemList3 : any;
	private _jsonURL = 'assets/data.json';
    // private routineData: Array<DayLists1>;
    apeUrl = 'https://api.apeuni.com/api/v1/studies/records/list?user_detail=jahanjerin%40gmail.com&token=1sGAxFNNUrDDeb387eJvPCY2etsKzhKAPwJaFXFP&acc_type=email&client=-QxsFYxcAA&api_type=e1&locale=en&device_type=web-1.0.0-Chrome-Chrome+83.0.4103.116+on+Windows+10+64-bit&page=1&page_size=4';
    
	private _transformer = (node: DayLists, level: number) => {
		return {
			expandable: !!node.children && node.children.length > 0,
			name: node.name,
			level: level,
		};
	}

	treeControl = new FlatTreeControl<ExampleFlatNode>(
		node => node.level, 
		node => node.expandable
	) ;

	treeFlattener = new MatTreeFlattener(
		this._transformer, 
		node => node.level, 
		node => node.expandable, 
		node => node.children
	);

    // dataSource = new MatTreeFlatDataSource(this.treeControl , this.treeFlattener);

	constructor(private httpClient: HttpClient) { 
        // this.dataSource.data = TREE_DATA;
        let httpHeaders = new HttpHeaders()
           .set('Content-Type', 'application/json')
           .set('Access-Control-Allow-Credentials', 'true')
           .set('Access-Control-Allow-Origin', '*');
           
        // this.httpClient.get(this.apeUrl,{ headers: httpHeaders}).subscribe(
        //     (res : any) =>{
        //         console.log('data = ',res);
        //     }
        // );

        let result = from( // wrap the fetch in a from if you need an rxjs Observable
            fetch(
                this.apeUrl,
                {
                    headers: {'Content-Type': 'application/json', 
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET'},
                    method: 'GET',
                    mode: 'no-cors'
                }
            )
        );
        result.subscribe({
            next(response) { console.log('In next',response); },
            error(err) { console.error('Error: ' + err); },
            complete() { console.log('Completed'); }
        });
        
	}
	hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
	
	ngOnInit(): void {
		let locatlStorageDataJ = localStorage.getItem('JitemLists');
		let locatlStorageDataR = localStorage.getItem('RitemLists');
		let locatlStorageDataM = localStorage.getItem('MitemLists');
		let locatlStorageDataViewAs = localStorage.getItem('viewAs');

		if(locatlStorageDataJ == null || locatlStorageDataJ == ''){
			this.itemList = DataLists ;
			localStorage.setItem('JitemLists',JSON.stringify(this.itemList));
		}else{
			this.itemList = JSON.parse(locatlStorageDataJ);
		}

		if(locatlStorageDataR == null || locatlStorageDataR == ''){
			this.itemList2 = DataLists;
			localStorage.setItem('RitemLists',JSON.stringify(this.itemList2));
		}else{
			this.itemList2 = JSON.parse(locatlStorageDataR);
        }
		if(locatlStorageDataM == null || locatlStorageDataM == ''){
			this.itemList3 = DataLists;
			localStorage.setItem('MitemLists',JSON.stringify(this.itemList3));
		}else{
			this.itemList3 = JSON.parse(locatlStorageDataM);
        }
        if(locatlStorageDataViewAs != ''){
            // this.selectedIndex = JSON.parse(locatlStorageDataViewAs);
            this.selectedIndex = (locatlStorageDataViewAs ? JSON.parse(locatlStorageDataViewAs) : null);
        }
	}

	todoLeafItemSelectionToggle(node: DayLists): void {
		// this.checklistSelection.toggle(node);
		// this.checkAllParentsSelection(node);
	}
	addNewItem(node: DayLists) {
		// const parentNode = this.flatNodeMap.get(node);
		// this._database.insertItem(parentNode!, '');
		// this.treeControl.expand(node);
	}


	doneItem(parentIndex : any,childIndex : any){
		this.itemList[(parentIndex -1)].items[childIndex -1].isDone = !this.itemList[(parentIndex -1)].items[childIndex -1].isDone;
		localStorage.setItem('JitemLists',JSON.stringify(this.itemList));
	}
	doneItem1(parentIndex : any,childIndex : any){
		this.itemList2[(parentIndex -1)].items[childIndex -1].isDone = !this.itemList2[(parentIndex -1)].items[childIndex -1].isDone;
		localStorage.setItem('RitemLists',JSON.stringify(this.itemList2));
	}
    doneItem2(parentIndex : any,childIndex : any){
		this.itemList3[(parentIndex -1)].items[childIndex -1].isDone = !this.itemList3[(parentIndex -1)].items[childIndex -1].isDone;
		localStorage.setItem('MitemLists',JSON.stringify(this.itemList3));
	}
	viewAs(val: any){
        this.selectedIndex = val;
        localStorage.setItem('viewAs',JSON.stringify(this.selectedIndex));
    }

    collapse_div(id: any){
        this.itemList[id-1].showChild = !this.itemList[id-1].showChild;
    }

    collapse_div1(id: any){
        this.itemList2[id-1].showChild = !this.itemList2[id-1].showChild;
    }
    collapse_div3(id: any){
        this.itemList3[id-1].showChild = !this.itemList3[id-1].showChild;
    }
    getCount(items: any){
        return items.filter((item : any) => !item.isDone).length;
    }
}

