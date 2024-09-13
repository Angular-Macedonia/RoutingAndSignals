import { Component, inject, input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

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
export class PageOneDetailsComponent {
    detailsId = input.required();

    private route = inject(ActivatedRoute);

    ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('detailsId'));
      if (id) {
        console.log(id)
      }
    }
}