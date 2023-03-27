let b = document.getElementById("btn");
        let c = document.getElementsByClassName("listitem");
        let ul = document.getElementsByClassName("ul");
        
        b.addEventListener('click', () => {
            for(let i=0;i<c.length;i++){
                c[i].classList.toggle("displayflex");
            }

            ul[0].classList.toggle("flexcolumn");
            
            if(ul[0].classList.contains("flexcolumn"))
                ul[0].style.height="15rem";
            else
                ul[0].style.height="2.7rem";
        });