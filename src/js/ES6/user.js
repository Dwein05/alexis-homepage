const USER_NAME = 'Jeka'

var navigation = {
    // Variables
    $nav: document.querySelector('.menu'),
    $navTrigger: document.querySelector('.menu__icon'),
    $navContent: document.querySelector('.nav_content'),
    $navList: document.querySelector('.nav'),
    transitionEnd: 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
    
    init() {
        var self = this;

        // Handle the transitions
        self.$navTrigger.addEventListener('click', function() {
            if (!self.$navTrigger.classList.contains('show')) {
                // .nav--trigger active
                self.$navTrigger.classList.add('show');

                // .nav active
                if (!self.$nav.classList.contains('show')) {
                    self.$nav.classList.add('show');
                    self.$nav.addEventListener('transitionend', function(e) {
                        if (e.propertyName == 'width' && self.$navTrigger.classList.contains('show')) {
                            // .nav__content active
                            self.$navContent.classList.add('show');
                        }
                    });
                } else {
                    self.$navContent.classList.add('show');                    
                }

                // no-csstransitions fallback
                if (document.documentElement.classList.contains('no-csstransitions')) {
                    self.$navContent.classList.add('show');
                }
            } else {
                // .nav--trigger inactive
                self.$navTrigger.classList.remove('show');
                
                // .nav__content inactive
                if (self.$navContent.classList.contains('show')) {
                    self.$navContent.classList.remove('show');
                    self.$navContent.addEventListener('transitionend', function(e) {    
                        if (e.propertyName == 'opacity' && !self.$navTrigger.classList.contains('show')) {
                            // .nav inactive
                            self.$nav.classList.remove('show');                        
                        }
                    });                    
                } else {
                    self.$nav.classList.remove('show');                    
                }

                // no-csstransitions fallback
                if (document.documentElement.classList.contains('no-csstransitions')) {
                    self.$nav.classList.remove('show');
                }
            }
        });
    }
}

navigation.init();