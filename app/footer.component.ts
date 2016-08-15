import {Component} from 'angular2/core';

@Component({
    selector: 'my-footer',
    template: `
    <footer class="page-footer">
         <div class="container">
           <div class="row">
             <div class="col l6 s12">
               <h5 class="white-text">About</h5>
               <p class="grey-text text-lighten-4">Flash Cards to make learning anywhere anytime a breeze!</p>
             </div>
             <div class="col l4 offset-l2 s12">
               <h5 class="white-text">Links</h5>
               <ul>
                 <li><a class="grey-text text-lighten-3" href="https://github.com/FlashApps" target='blank'><i class="fa fa-github" aria-hidden="true"></i> GitHub </a></li>
                 <li><a class="grey-text text-lighten-3" href="#!"><i class="fa fa-star" aria-hidden="true"></i> Dev Team</a></li>
               </ul>
             </div>
           </div>
         </div>
         <div class="footer-copyright">
           <div class="container">
           © 2016 Flash Apps Group
           </div>
         </div>
       </footer>`
})
export class FooterComponent { }
