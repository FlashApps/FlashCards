import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'Dev-Team',
    template: `
    <main>
    <div class="page-header">
      <h1>Flash Cards Dev Team</h1>
    </div>
    <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-6">
          <div class="thumbnail">
            <img src="https://media.licdn.com/mpr/mpr/shrink_200_200/p/6/005/04a/21e/24004b1.jpg" alt="picture of wes hediger a full stack developer">
            <div class="caption">
              <h3>Wes Hediger</h3>
              <p>I thrive in environments where I solve conceptual problems using a natural talent for technically oriented detailed work. My strengths are reflective, analytic, factual and practical in nature. I gain long-term satisfaction by taking on unique goal oriented challenges to learn and use new information and make improvements with practical and social merit.</p>
              <p><a href="https://github.com/whediger" class="btn btn-primary" role="button"><i class="fa fa-github" aria-hidden="true"></i> Github</a> <a href="https://www.linkedin.com/in/whediger" class="btn btn-primary" role="button">LinkedIn</a></p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-6">
          <div class="thumbnail">
            <img src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAlEAAAAJDM0MGYwOGFlLWY1NjQtNDBlYi04OGMyLThiMDg0ZGU5NDgxYQ.jpg" alt="Tim Musgrove">
            <div class="caption">
              <h3>Tim Musgrove</h3>
              <p>Web developer with specialty in MEAN stack development with specific focus on Angular and Angular2</p>
              <p><a href="https://github.com/tttimmusgrove" class="btn btn-primary" role="button"><i class="fa fa-github" aria-hidden="true"></i> Github</a> <a href=" https://linkedin.com/in/tttimmusgrove" class="btn btn-primary" role="button">LinkedIn</a></p>
            </div>
          </div>
        </div>
        </div>
        <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-6">
          <div class="thumbnail">
            <img src="https://avatars3.githubusercontent.com/u/16106956?v=3&s=460" alt="Ray Koren">
            <div class="caption">
              <h3>Ray Koren</h3>
              <p>Full Stack Developer, SEO, Audio Enthusiast.</p>
              <p><a href="https://github.com/rayk216" class="btn btn-primary" role="button"><i class="fa fa-github" aria-hidden="true"></i> GitHub</a> <a href="https://www.linkedin.com/in/raykoren" class="btn btn-primary" role="button">LinkedIn</a></p>
            </div>
          </div>
        </div>

      <div class="col-sm-6 col-md-6 col-lg-6">
        <div class="thumbnail">
          <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAdGAAAAJGUzNDY0YzgzLWY1NzQtNDkxOS05MjlkLWM2MzBmNDc1YjZjNA.jpg" alt="Bennett Joerger">
          <div class="caption">
            <h3>Bennett Joeger</h3>
            <p>100<i class="fa fa-percent" aria-hidden="true"></i>
            </p>
            <p><a href="https://github.com/Bjoerger44" class="btn btn-primary" role="button"><i class="fa fa-github" aria-hidden="true"></i> GitHub</a> <a href="https://www.linkedin.com/in/bennettjoerger" class="btn btn-primary" role="button">LinkedIn</a></p>
          </div>
        </div>
      </div>
        </div>
    </main>
      `,
  directives: [ROUTER_DIRECTIVES]
})
export class DevTeamComponent {
}
