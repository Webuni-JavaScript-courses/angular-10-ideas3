import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IdeasService } from '../ideas.service';
import { Idea } from '../models/idea.model';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent implements OnInit {
  idea: Idea | undefined;

  constructor(private activatedRoute: ActivatedRoute, private ideasService: IdeasService, private router: Router) {
    this.activatedRoute.params
      .pipe(switchMap(params => this.ideasService.getIdea(params.id)))
      .subscribe(idea => this.idea = idea);
  }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigateByUrl('/ideas');
  }
}
