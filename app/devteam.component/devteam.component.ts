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
            <img src="..." alt="...">
            <div class="caption">
              <h3>Wes Heidiger</h3>
              <p>...</p>
              <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-6">
          <div class="thumbnail">
            <img src="..." alt="...">
            <div class="caption">
              <h3>Tim Musgrove</h3>
              <p>Web developer with specialty in MEAN stack development with specific focus on Angular and Angular2</p>
              <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
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
              <p><a href="https://github.com/rayk216" class="btn btn-primary" role="button">GitHub</a> <a href="https://www.linkedin.com/in/raykoren" class="btn btn-primary" role="button">LinkedIn</a></p>
            </div>
          </div>
        </div>

      <div class="col-sm-6 col-md-6 col-lg-6">
        <div class="thumbnail">
          <img src="..." alt="...">
          <div class="caption">
            <h3>Bennett Joeger</h3>
            <p>...</p>
            <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
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
