import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IdeasService } from '../ideas.service';
import { Idea } from '../models/idea.model';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
  @Input() idea: Idea
  @Output() vote = new EventEmitter<void>();

  constructor(private ideasService: IdeasService) { }

  ngOnInit(): void {
  }

  upvote(idea: Idea) {
    this.ideasService.upvoteIdea(idea).subscribe(_ => this.vote.next());
  }

  downvote(idea: Idea) {
    this.ideasService.downvoteIdea(idea).subscribe(_ => this.vote.next());
  }

}
