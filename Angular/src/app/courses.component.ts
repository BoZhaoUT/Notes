import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', // css selector, <div class="courses"> selector: '#selector'
    template: `
        <h2>{{ "Title: " + title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <img [src]="imgUrl" />
        <table>
            <tr>
                <!-- sometimes need to add special prefix attr. -->
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
        <div (click)="onDivClicked()">
            <button 
                class="btn btn-primary" 
                [class.active]="isActive"
                [style.backgroundColor]="isActive ? 'orange' : 'black'"
                (click)="onSave($event)">
                Save
            </button>
        </div>
        <!-- Angular can bind an event to a special condition
             such as enter key in keyup event -->
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()">

        <!-- pipes -->
        {{ course.title | uppercase | lowercase }} <br>
        <!-- number pipe add , for readability -->
        {{ course.students | number }} <br>
        {{ course.rating | number:'1.2-2'}} <br>
        <!-- true will display currency symbol -->
        {{ course.price | currency:'AUD':true }} <br>
        {{ course.relaseDate | date:'longDate' }} <br>

        <div>
            <!-- costum pipe -->
            {{ text | summary:30 }}
        </div>

        <span
            class="glyphicon" 
            [class.glyphicon-star]="isFavourite" 
            [class.glyphicon-star-empty]="!isFavourite"
            (click)="toggle()">
        </span>
        <br>

        <input type="text" [(ngModel)]="movieTitle">
        <br>
        {{ movieTitle | titleCase }}

    `
})

export class CoursesComponent {
    title = "List of courses";
    courses;
    imgUrl = "http://lorempixel.com/400/200";
    colSpan = 2;
    isActive = true;
    email = "me@example.com";
    text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
    isFavourite = false;
    movieTitle = "";
    // service: CoursesService means let Angular create an instance of CoursesService
    // equivalent to let service = new CoursesService();
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
    // note: this Courses depends on CoursesService.
    // this concept is called depency injection
    // Angular injects a dependency into a component's constructor

    onSave($event) {
        // stopPropagation will disable all other (click) bindings from
        // this component's parents, e.g. onDivClicked()
        $event.stopPropagation();
        console.log("Button was clicked", $event);
    }

    onDivClicked() {
        console.log("Div was clicked");
    }

    onKeyUp() {
        console.log(this.email);
    }

    course = {
        title: "The Complete Angular Course",
        rating: 3.1415926,
        students: 30123,
        price: 120.12,
        relaseDate: new Date(2017, 10, 1)
    }

    toggle() {
        this.isFavourite = !this.isFavourite;
    }
}