// Get API Endpoints
const technology ='https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=b87486bc86754284bd33359c20191ed4'
const science = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=b87486bc86754284bd33359c20191ed4"
const business = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b87486bc86754284bd33359c20191ed4'
const headlines = 'https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=b87486bc86754284bd33359c20191ed4'
const health = 'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=b87486bc86754284bd33359c20191ed4'
const entertainment = 'https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=b87486bc86754284bd33359c20191ed4'
const sports = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=b87486bc86754284bd33359c20191ed4'
const construction = 'https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=b87486bc86754284bd33359c20191ed4'


let scienceBtn = document.querySelector('.btn-Science')
let section = document.querySelector('section')
let techBtn = document.querySelector('.btn-Technology')
let bisBtn = document.querySelector('.btn-Business')
let healthBtn = document.querySelector('.btn-Health')
let sportsBtn = document.querySelector('.btn-Sports')
let entBtn = document.querySelector('.btn-Entertainment')
let civilBtn=document.querySelector('.btn-CivilEngineering')
window.onload = getHeadlines()  
// let error = document.querySelector('.error')
// let active = document.querySelector('h5')



// develop  Science function
 function getscience(){
    fetch(science)
        .then(response => {
            return response.json()
        })
        .then(data => {
          section.innerHTML = ''
          let newsArr= data.articles
          newsArr.forEach(news =>{
                // Create Title
                let article = document.createElement('article')
                let title = document.createElement('p')
                    title.setAttribute('class','title')
                    title.textContent = news.title
                    // Create Image
                    let image = document.createElement('img')
                    image.src = news.urlToImage
                    if(image.src ===  404){
                        console.log('none')
                    }
                   
                    // Create description
                    let content = document.createElement('p')
                        content.setAttribute('class','desc')
                        content.textContent = news.description
                    
                    // Create ReadMore link
                    let link = document.createElement('a')
                        link.setAttribute('class','link')
                        link.href = news.url
                        link.innerText = 'Read More'
                        link.target = '_blank'    
                    // Create date
                    let date = document.createElement('span')
                        date.setAttribute('class','date')
                        let noDate= news.publishedAt
                            noDate = new Date(noDate).getTime()
                        let day = new Date(noDate).getDate()+1
                        let month = new Date(noDate).getMonth()+1
                        let year = new Date(noDate).getFullYear()
                        let currentDate = `${day}/${month}/${year}`
                            date.textContent = currentDate
                    
                    
                    // Append
                    article.appendChild(title)
                    article.appendChild(image)
                    article.appendChild(content)
                    article.appendChild(link)
                    article.appendChild(date)
                    section.appendChild(article)    
                })        
             }
                       
      )} 
  
// develop  Business function  
function getBusiness(){
    fetch(business)
        .then(response => {
            return response.json()
        })
        .then(data => {
          section.innerHTML = ''
          let newsArr= data.articles
          newsArr.forEach(news =>{
                // Create Title
                let article = document.createElement('article')
                let title = document.createElement('p')
                    title.setAttribute('class','title')
                    title.textContent = news.title
                    // Create Image
                    let image = document.createElement('img')
                    image.src = news.urlToImage
                    if(image.src ===  404){
                        console.log('none')
                    }
                   
                    // Create description
                    let content = document.createElement('p')
                        content.setAttribute('class','desc')
                        content.textContent = news.description
                    
                    // Create ReadMore link
                    let link = document.createElement('a')
                        link.setAttribute('class','link')
                        link.href = news.url
                        link.innerText = 'Read More'
                        link.target = '_blank'    
                    // Create date
                    let date = document.createElement('span')
                        date.setAttribute('class','date')
                        let noDate= news.publishedAt
                            noDate = new Date(noDate).getTime()
                        let day = new Date(noDate).getDate()+1
                        let month = new Date(noDate).getMonth()+1
                        let year = new Date(noDate).getFullYear()
                        let currentDate = `${day}/${month}/${year}`
                            date.textContent = currentDate
                    
                    
                    // Append
                    article.appendChild(title)
                    article.appendChild(image)
                    article.appendChild(content)
                    article.appendChild(link)
                    article.appendChild(date)
                    section.appendChild(article)    
                })        
             }
                       
      )} 
           
// develop  Tech function    
function getTech(){
    fetch(technology)
        .then(response => {
            return response.json()
        })
        .then(data => {
          section.innerHTML = ''
          let newsArr= data.articles
          newsArr.forEach(news =>{
                // Create Title
                let article = document.createElement('article')
                let title = document.createElement('p')
                    title.setAttribute('class','title')
                    title.textContent = news.title
                    // Create Image
                    let image = document.createElement('img')
                    image.src = news.urlToImage
                    if(image.src ===  404){
                        console.log('none')
                    }
                   
                    // Create description
                    let content = document.createElement('p')
                        content.setAttribute('class','desc')
                        content.textContent = news.description
                    
                    // Create ReadMore link
                    let link = document.createElement('a')
                        link.setAttribute('class','link')
                        link.href = news.url
                        link.innerText = 'Read More'
                        link.target = '_blank'    
                    // Create date
                    let date = document.createElement('span')
                        date.setAttribute('class','date')
                        let noDate= news.publishedAt
                            noDate = new Date(noDate).getTime()
                        let day = new Date(noDate).getDate()+1
                        let month = new Date(noDate).getMonth()+1
                        let year = new Date(noDate).getFullYear()
                        let currentDate = `${day}/${month}/${year}`
                            date.textContent = currentDate
                    
                    
                    // Append
                    article.appendChild(title)
                    article.appendChild(image)
                    article.appendChild(content)
                    article.appendChild(link)
                    article.appendChild(date)
                    section.appendChild(article)    
                })        
             }
                       
      )}
    
// develop health function    
function getHealth(){
    fetch(health)
        .then(response => {
            return response.json()
        })
        .then(data => {
          section.innerHTML = ''
          let newsArr= data.articles
          newsArr.forEach(news =>{
                // Create Title
                let article = document.createElement('article')
                let title = document.createElement('p')
                    title.setAttribute('class','title')
                    title.textContent = news.title
                    // Create Image
                    let image = document.createElement('img')
                    image.src = news.urlToImage
                    if(image.src ===  404){
                        console.log('none')
                    }
                   
                    // Create description
                    let content = document.createElement('p')
                        content.setAttribute('class','desc')
                        content.textContent = news.description
                    
                    // Create ReadMore link
                    let link = document.createElement('a')
                        link.setAttribute('class','link')
                        link.href = news.url
                        link.innerText = 'Read More'
                        link.target = '_blank'    
                    // Create date
                    let date = document.createElement('span')
                        date.setAttribute('class','date')
                        let noDate= news.publishedAt
                            noDate = new Date(noDate).getTime()
                        let day = new Date(noDate).getDate()+1
                        let month = new Date(noDate).getMonth()+1
                        let year = new Date(noDate).getFullYear()
                        let currentDate = `${day}/${month}/${year}`
                            date.textContent = currentDate
                    
                    
                    // Append
                    article.appendChild(title)
                    article.appendChild(image)
                    article.appendChild(content)
                    article.appendChild(link)
                    article.appendChild(date)
                    section.appendChild(article)    
                })        
             }
                       
      )} 
   
// develop Entertainment function    
function getEnt(){
    fetch(entertainment)
        .then(response => {
            return response.json()
        })
        .then(data => {
          section.innerHTML = ''
          let newsArr= data.articles
          newsArr.forEach(news =>{
                // Create Title
                let article = document.createElement('article')
                let title = document.createElement('p')
                    title.setAttribute('class','title')
                    title.textContent = news.title
                    // Create Image
                    let image = document.createElement('img')
                    image.src = news.urlToImage
                    if(image.src ===  404){
                        console.log('none')
                    }
                   
                    // Create description
                    let content = document.createElement('p')
                        content.setAttribute('class','desc')
                        content.textContent = news.description
                    
                    // Create ReadMore link
                    let link = document.createElement('a')
                        link.setAttribute('class','link')
                        link.href = news.url
                        link.innerText = 'Read More'
                        link.target = '_blank'    
                    // Create date
                    let date = document.createElement('span')
                        date.setAttribute('class','date')
                        let noDate= news.publishedAt
                            noDate = new Date(noDate).getTime()
                        let day = new Date(noDate).getDate()+1
                        let month = new Date(noDate).getMonth()+1
                        let year = new Date(noDate).getFullYear()
                        let currentDate = `${day}/${month}/${year}`
                            date.textContent = currentDate
                    
                    
                    // Append
                    article.appendChild(title)
                    article.appendChild(image)
                    article.appendChild(content)
                    article.appendChild(link)
                    article.appendChild(date)
                    section.appendChild(article)    
                })        
             }                 
    )} 

// develop Sports function
function getSports(){
    fetch(sports)
        .then(response => {
            return response.json()
        })
        .then(data => {
              section.innerHTML = ''
              let newsArr= data.articles
              newsArr.forEach(news =>{
                    // Create Title
                    let article = document.createElement('article')
                    let title = document.createElement('p')
                        title.setAttribute('class','title')
                        title.textContent = news.title
                        // Create Image
                        let image = document.createElement('img')
                        image.src = news.urlToImage
                        if(image.src ===  404){
                            console.log('none')
                        }
                       
                        // Create description
                        let content = document.createElement('p')
                            content.setAttribute('class','desc')
                            content.textContent = news.description
                        
                        // Create ReadMore link
                        let link = document.createElement('a')
                            link.setAttribute('class','link')
                            link.href = news.url
                            link.innerText = 'Read More'
                            link.target = '_blank'    
                        // Create date
                        let date = document.createElement('span')
                            date.setAttribute('class','date')
                            let noDate= news.publishedAt
                                noDate = new Date(noDate).getTime()
                            let day = new Date(noDate).getDate()+1
                            let month = new Date(noDate).getMonth()+1
                            let year = new Date(noDate).getFullYear()
                            let currentDate = `${day}/${month}/${year}`
                                date.textContent = currentDate
                        
                        
                        // Append
                        article.appendChild(title)
                        article.appendChild(image)
                        article.appendChild(content)
                        article.appendChild(link)
                        article.appendChild(date)
                        section.appendChild(article)    
                    })        
                 }
                           
            
    )}


// develop civil engineering function
function getCivilEngineering(){
    fetch(construction)
        .then(response => {
            return response.json()
        })
        .then(data => {
              section.innerHTML = ''
              let newsArr= data.articles
              newsArr.forEach(news =>{
                    // Create Title
                    let article = document.createElement('article')
                    let title = document.createElement('p')
                        title.setAttribute('class','title')
                        title.textContent = news.title
                        // Create Image
                        let image = document.createElement('img')
                        image.src = news.urlToImage
                        if(image.src ===  404){
                            console.log('none')
                        }
                       
                        // Create description
                        let content = document.createElement('p')
                            content.setAttribute('class','desc')
                            content.textContent = news.description
                        
                        // Create ReadMore link
                        let link = document.createElement('a')
                            link.setAttribute('class','link')
                            link.href = news.url
                            link.innerText = 'Read More'
                            link.target = '_blank'    
                        // Create date
                        let date = document.createElement('span')
                            date.setAttribute('class','date')
                            let noDate= news.publishedAt
                                noDate = new Date(noDate).getTime()
                            let day = new Date(noDate).getDate()+1
                            let month = new Date(noDate).getMonth()+1
                            let year = new Date(noDate).getFullYear()
                            let currentDate = `${day}/${month}/${year}`
                                date.textContent = currentDate
                        
                        
                        // Append
                        article.appendChild(title)
                        article.appendChild(image)
                        article.appendChild(content)
                        article.appendChild(link)
                        article.appendChild(date)
                        section.appendChild(article)    
                    })        
                 }
                           
            
    )}

// develop headline function
function getHeadlines(){
  fetch(headlines)
      .then(response => {
          return response.json()
      })
      .then(data => {
        section.innerHTML = ''
        let newsArr= data.articles
        newsArr.forEach(news =>{
              // Create Title
              let article = document.createElement('article')
              let title = document.createElement('p')
                  title.setAttribute('class','title')
                  title.textContent = news.title
                  // Create Image
                  let image = document.createElement('img')
                  image.src = news.urlToImage
                  if(image.src ===  404){
                      console.log('none')
                  }
                 
                  // Create description
                  let content = document.createElement('p')
                      content.setAttribute('class','desc')
                      content.textContent = news.description
                  
                  // Create ReadMore link
                  let link = document.createElement('a')
                      link.setAttribute('class','link')
                      link.href = news.url
                      link.innerText = 'Read More'
                      link.target = '_blank'    
                  // Create date
                  let date = document.createElement('span')
                      date.setAttribute('class','date')
                      let noDate= news.publishedAt
                          noDate = new Date(noDate).getTime()
                      let day = new Date(noDate).getDate()+1
                      let month = new Date(noDate).getMonth()+1
                      let year = new Date(noDate).getFullYear()
                      let currentDate = `${day}/${month}/${year}`
                          date.textContent = currentDate
                  
                  
                  // Append
                  article.appendChild(title)
                  article.appendChild(image)
                  article.appendChild(content)
                  article.appendChild(link)
                  article.appendChild(date)
                  section.appendChild(article)    
              })        
           }
                     
    )} 

// ADD EVENT LISTENERS

scienceBtn.addEventListener('click',getscience)
bisBtn.addEventListener('click',getBusiness)
techBtn.addEventListener('click',getTech)
healthBtn.addEventListener('click',getHealth)
entBtn.addEventListener('click',getEnt)
sportsBtn.addEventListener('click',getSports)
civilBtn.addEventListener('click',getCivilEngineering)

