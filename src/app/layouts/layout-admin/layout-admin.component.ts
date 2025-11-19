import {Component, ElementRef, ViewChild} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {PerimetreComponent} from "../../modules/admin/perimetre/perimetre/perimetre.component";
import {ObjectifsComponent} from "../../modules/admin/objectifs/objectifs.component";

@Component({
  selector: 'app-layout-admin',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    PerimetreComponent,
    ObjectifsComponent
  ],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.scss'
})
export class LayoutAdminComponent {
  @ViewChild('objectifsSection') objectifsSection!: ElementRef;
  @ViewChild('perimetreSection') perimetreSection!: ElementRef;

  scrollTo(section: 'objectifs' | 'perimetre') {
    if (section === 'objectifs') {
      this.objectifsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.perimetreSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}


