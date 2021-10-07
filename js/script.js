/*
  http://servicodados.ibge.gov.br/api/v3/noticias/
*/

let allNews = []
let titleNews = null
let spanSection = null
let introduction = null
let noticeList = null
let date = null

window.addEventListener('load', start())

function start() {
  titleNews = document.querySelector("#titleNews")
  spanSection = document.querySelector("#spanSection")
  date = document.querySelector("#date")
  noticeList = document.querySelector("#noticeList")
  introduction = document.querySelector("#introduction")

  fetchNews()
}

async function fetchNews() {
  const res = await fetch('http://servicodados.ibge.gov.br/api/v3/noticias/?qtd=10')
  const json = await res.json()

  console.log(json)

  allNews = json.items.map(news => {
    const { titulo, data_publicacao, introducao } = news
    return {
      
      date: data_publicacao,
      title: titulo,
      introducao
    }
  })
  render()
}

function render() {
  renderSpanNews()
}

function renderSpanNews() {
  let noticesHTML = "<div>"

    allNews.forEach(news => {
      const { date, title, introducao } = news
      const noticeHTML = 
      `
      <section>
          <div>
            <span id="">${date}</span>
          </div>
  
          <h4><span id="">${title}</span></h4>
  
          <article id="">${introducao}</article>
            
        </section>
      `
     
      noticesHTML += "</div>"
      noticesHTML += noticeHTML
      console.log('1')
    })
    noticeList.innerHTML += noticesHTML
  }
  
  