import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-service-type',
  templateUrl: './service-type.component.html',
  styleUrls: ['./service-type.component.css']
})
export class ServiceTypeComponent implements AfterViewInit{
  data: any;

  constructor(private route: ActivatedRoute, private dataService: DataService, private el: ElementRef) {
    var slug = this.route.snapshot.paramMap.get('type')
    for (const section of this.dataService.data) {
      const match = section.service_types.find(st => st.page === slug);
      if (match) {
        this.data = match;
        break;
      }
    }
  }

  
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = this.el.nativeElement.querySelectorAll('.reveal');
    elements.forEach((el: Element) => observer.observe(el));
  }

}
