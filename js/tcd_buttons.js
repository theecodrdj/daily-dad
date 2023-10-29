(function() {
  "use strict";

// ################## VOCAB OF THE DAY PAGE ###################

    document.addEventListener('DOMContentLoaded', () => {
    // after the page loads...

        document.querySelectorAll('.btn-wotdEng').forEach(button => {
            button.addEventListener('click', e => {
                let content = e.target.closest('.container').querySelector('.wotdEng');
                content.classList.toggle('hidden');
                e.target.innerText = content.classList.contains('hidden') ? 'In English' : 'Hide';
            }) // end click event listener
        }) // end btn-wotdEng

        document.querySelectorAll('.btn-wotdEsp').forEach(button => {
            button.addEventListener('click', e => {            
                let content = e.target.closest('.container').querySelector('.wotdEsp');                
                content.classList.toggle('hidden');                
                e.target.innerText = content.classList.contains('hidden') ? 'En Espanol' : 'Ocultar';                
            }) // end click event listener
        }) // end btn-wotdEsp

        document.querySelectorAll('.btn-defEng').forEach(button => {       
            button.addEventListener('click', e => {            
                let content = e.target.closest('.container').querySelector('.defEng');                
                content.classList.toggle('hidden');               
                e.target.innerText = content.classList.contains('hidden') ? 'In English' : 'Hide';                
            }) // end click event listener
        }) // end btn-defEng

        document.querySelectorAll('.btn-defEsp').forEach(button => {       
            button.addEventListener('click', e => {            
                let content = e.target.closest('.container').querySelector('.defEsp');               
                content.classList.toggle('hidden');               
                e.target.innerText = content.classList.contains('hidden') ? 'En Espanol' : 'Ocultar';               
            }) // end click event listener
        }) // end btn-defEsp



// ################ DAD JOKE PAGE ############################

        document.querySelectorAll('.btn-joke').forEach(button => {
            button.addEventListener('click', e => {          
                let content = e.target.closest('.container').querySelector('.joke');                
                content.classList.toggle('hidden');                
                e.target.innerText = content.classList.contains('hidden') ? 'Reveal' : 'Hide';                
            })
        }) // end btn-joke

        document.querySelectorAll('.btn-punchline').forEach(button => {       
            button.addEventListener('click', e => {           
                let content = e.target.closest('.container').querySelector('.punchline');               
                content.classList.toggle('hidden');               
                e.target.innerText = content.classList.contains('hidden') ? 'Reveal' : 'Hide';                
            })
        }) // end btn-punchline



// ################## FACTIOIDS PAGE ##########################

        document.querySelectorAll('.btn-factOne').forEach(button => {       
            button.addEventListener('click', e => {            
                let content = e.target.closest('.container').querySelector('.fact-one');                
                content.classList.toggle('hidden');                
                e.target.innerText = content.classList.contains('hidden') ? 'Reveal' : 'Hide';                
            })
        }) // end btn-factOne

        document.querySelectorAll('.btn-factTwo').forEach(button => {        
            button.addEventListener('click', e => {            
                let content = e.target.closest('.container').querySelector('.fact-two');                
                content.classList.toggle('hidden');                
                e.target.innerText = content.classList.contains('hidden') ? 'Reveal' : 'Hide';                
            })
        }) // end btn-factTwo



// ##################### ON THIS DAY PAGE ######################

        document.querySelectorAll('.btn-history').forEach(button => {        
            button.addEventListener('click', e => {           
                let content = e.target.closest('.container').querySelector('.history');                
                content.classList.toggle('hidden');                
                e.target.innerText = content.classList.contains('hidden') ? 'Reveal' : 'Hide';                
            })
        }) // end btn-history

        document.querySelectorAll('.btn-more').forEach(button => {        
            button.addEventListener('click', e => {           
                let content = e.target.closest('.container').querySelector('.more');                
                content.classList.toggle('hidden');                
                e.target.innerText = content.classList.contains('hidden') ? 'Reveal' : 'Hide';               
            })
        }) // end btn-more

    }) // end dom-content-loaded

})(); // end function tcd_buttons