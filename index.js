console.log('Index JS');

let fetchDiv = document.getElementById('fetchDiv');
let alert_error = document.getElementById('alert_error');
let alert_success = document.getElementById('alert_success');
alert_error.style.display = 'none'
alert_success.style.display = 'none'


// News Api Utility

apiKey = 'pub_101164628e323dcf7c6ee54f7ac26b7f90bc2';
// apiKey = '7a513e2fac2c40e7b6d6de1980e0578b';
// sourceNews = 'cnn'
// sourceNews = 'al-jazeera-english'

// Create an Fetch Api Request
let news;

async function fetchNews() {
    try {
        // const jsonData = await fetch(`https://newsapi.org/v2/top-headlines?sources=${sourceNews}&apiKey=${apiKey}`,
        const response = await fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}&domain=thehansindia`,
            {
                method: 'GET',
            });
        news = await response.json();
        news = news.results;
        // console.log('News Articles', news);

        let newshtml = '';


        await news.forEach((element) => {
            // console.log(element)
            let fnews = `   <div class="card mx-3 my-3" style="width:24rem; height:auto;">
                            <img src="${element.image_url}" id='cardImg' class="card-img-top my-3" alt="...">
                             <div class="card-body">
                                 <h5 class="card-title">${element.title}</h5>
                                    <p class="card-text">${element.description}</p>
                                    <a href="${element.link}" target='_blank' class="btn btn-primary">Read More</a>
                                 </div>
                     </div>`


            newshtml += fnews;

            alert_success.style.display = 'block'

            setTimeout(() => {
                alert_success.style.display = 'none'

            }, 2000)
        });
        fetchDiv.innerHTML = newshtml


    } catch (e) {
        console.log(e)
        alert_success.style.display = 'none'
        alert_error.style.display = 'block'
        alert_error.innerHTML=`<strong>Sorry :(</strong> ${e}.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`

    }
}

fetchNews();
