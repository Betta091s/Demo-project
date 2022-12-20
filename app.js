/* adding the click effect of the navbar (3 bar <=> cross(x) )*/
/* Remember: from index.html file
      <div class="navbar_toggle" id="mobile-menu">
                <span class ="bar"></span>
                <span class ="bar"></span>
                <span class ="bar"></span>
            </div>

     */
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

/* now we want to trigger the navbar menu*/
 menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
 }); 
 /* please make sure you added <script>...</script> in your html file*/
