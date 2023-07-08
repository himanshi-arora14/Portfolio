// typing Animation 
var typed = new Typed(".typing",{
    strings:["Full stack developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});

// aside 

const nav = document.querySelector(".nav"),
    navList= nav.querySelectorAll("li"),
    totalNavList= navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++)
    {
        const a=navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            removeBackSection();
            
            for(let j=0; j<totalNavList;j++){
                if(navList[j].querySelector("a").classList.contains("active"))

                {
                    addBackSection(j);
                    // allSection[j].classList.add("back-section");
                }     
                  navList[j].querySelector("a").classList.remove("active");
            }
           this.classList.add("active");
           showSection(this);
            if(window.innerWidth <1200)
            {
                asideSectionTogglerBtn();
            }
        })
    }

    function removeBackSection ()
    {
        for(let i=0; i<totalSection; i++)
                    {
                        allSection[i].classList.remove("back-section");
                    }
    }
    function addBackSection(num){
        allSection[num].classList.add("back-section");
    }
    function showSection(element)
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }
       const target =element.getAttribute("href").split('#')[1];
            document.querySelector("#" + target).classList.add("active")
    }
    function updateNav(element)
    {
        for(let i=0; i<totalNavList; i++){
            navList[i].querySelector("a").classList.remove("active");
            const target =element.getAttribute("href").split('#')[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function()
    {
        const sectionIndex= this.getAttribute("data-section-index");
        // console.log(sectionIndex);
      showSection(this);
     updateNav(this);
     removeBackSection();
     addBackSection(sectionIndex);
    })

    const navTogglerBtn= document.querySelector(".nav-toggler"),
    aside=document.querySelector(".aside");
    navTogglerBtn.addEventListener("click" , ()=>
    {
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn()
    {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++ ){
            allSection[i].classList.toggle("open");
        }

    }


// form


  function submitContactForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Create a new FormData object
    var formData = new FormData();
    formData.append("entry.373786351", name);
    formData.append("entry.1695094314", email);
    formData.append("entry.1915624936", subject);
    formData.append("entry.968919601", message);

    // Send the form data to the Google Form URL using Fetch API
    fetch("https://docs.google.com/forms/d/e/1FAIpQLSdtvLSqZNuQtqEoxoq1EFOOnO9314ApR6f3s5UKhhr1lu7YXQ/formResponse", {
      method: "POST",
      body: formData,
    })
      .then(function(response) {
        if (response.ok) {
          // Form submitted successfully
          alert("Form submitted successfully!");
          // Clear the form fields
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "";
        } else {
          // Form submission failed
          alert("Form submission failed. Please try again later.");
        }
      })
      .catch(function(error) {
        // An error occurred during form submission
        alert("An error occurred during form submission. Please try again later.");
        console.error(error);
      });
  }
