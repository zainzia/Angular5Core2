import { Component } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';

require("primeng/resources/themes/omega/theme.css");
require("primeng/resources/primeng.min.css");
require("font-awesome/css/font-awesome.min.css");

@Component({
    selector: 'test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent {
    val1!: string;

    val2: string = 'Option 2';
}