import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutineComponent } from './routine/routine.component';
import { MarkingCriteriaComponent } from './marking-criteria/marking-criteria.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        AppComponent,
        RoutineComponent,
        MarkingCriteriaComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatTableModule,
        MatSortModule,
        CdkTreeModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatTabsModule,
        MatCheckboxModule,
        MatCardModule,
        MatIconModule,
        FontAwesomeModule 
    ],
    providers: [AppComponent],
    bootstrap: [AppComponent],
    
})
export class AppModule { }
