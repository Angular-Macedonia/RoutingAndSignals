import { Component, input } from "@angular/core";

@Component({
    selector: 'page-one-details',
    template: `
        <h1>Page One Details</h1>

        <p>Details ID: {{detailsId()}}</p>
    `,
    styles: [``],
    standalone: true,
    providers: [

    ]
})
export default class PageOneDetailsComponent {
    detailsId = input.required();
}