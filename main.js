window.addEventListener('DOMContentLoaded' , ()=>{
    const tabcontent = document.querySelectorAll('.tabcontent')
    const tabheader__item = document.querySelectorAll('.tabheader__item')
    const tabheader__items = document.querySelector('.tabheader__items')
    const loader = document.querySelector('.loader')



    setTimeout(() => {
        loader.style.opacity = 0
        setTimeout(()=>{
          loader.style.display = 'none'
        },1000)
    }, 2000);
    

    tabheader__items.addEventListener('click' , (e)=>{
       const target =e.target
       tabheader__item.forEach((item,index)=>{
        if(target===item){
            ContentHide()
          ShowContent(index)
        }
       })
    })
    
    function ContentHide(){
        tabcontent.forEach((item)=>{
          item.style.display = 'none'
        })

        tabheader__item.forEach((item)=>{
            item.classList.remove('tabheader__item_active')

        })
    }

    ContentHide()

    


    function ShowContent (index=0){
        tabcontent[index].style.display = 'block'
        tabheader__item[index].classList.add('tabheader__item_active')
        tabcontent[index].classList.add('fade')
    }  

    ShowContent()

   
   



    const current = document.getElementById('current')
    const offer__slider_prev = document.querySelector('.offer__slider-prev')
    const offer__slider_next = document.querySelector('.offer__slider-next')
    const offer__slide = document.querySelectorAll('.offer__slide')

    let i = offer__slide.length-1

    offer__slider_prev.addEventListener('click' , ()=>{
    i--

    if(i<0){
      i=offer__slide.length-1
    }
    nonchik()
    Addslide(i)
    
    })

    offer__slider_next.addEventListener('click' , ()=>{
      i++
  
      if(i>offer__slide.length-1){
        i=0
      }
      nonchik()
      Addslide(i)
      
      })
  

  function nonchik(){
    offer__slide.forEach((item)=>{
        item.style.display = 'none'
      })
  }
  nonchik()

  function Addslide(index=0) {
    offer__slide[index].style.display = 'block'
    current.innerText= `0${index+1}`
  }

  Addslide()

 





   const modal = document.querySelector('.modal')
   const button = document.querySelector('.button')
   const modal__close = document.querySelector('.modal__close')
   const body = document.querySelector('body')

   button.addEventListener('click' , ()=>{
    modal.classList.add('show')
    body.style.overflow = 'hidden'
   })

   setTimeout(() => {
    modal.classList.add('show')
   }, 5000);

   modal.addEventListener('click' , (e)=>{
    if(e.target.classList.contains('modal__close') ||e.target.classList.contains('modal') ){
        modal.classList.remove('show')
        body.style.overflow = ''
    }
    
   })



  //  dedline

  const newdate = new Date('2024-01-01')

  function dateadd(){
    const timer = Date.parse(newdate) - Date.parse(new Date)
    const days = Math.floor(timer/(1000*60*60*24))
    const hours = Math.floor((timer/(1000*60*60))%24)
    const minutes =Math.floor((timer/(1000*60))%60) 
    const seconds = Math.floor((timer/(1000))%60)
  
    
  return{
    days,
    hours,
    minutes,
    seconds
  }
  }

function fixedTime(element){
  if(element<10){
    return`0${element}`
  }else{
    return element
  }
}


  function settime(endtime,selektor){
   const timer = document.querySelector(selektor)
   const days = timer.querySelector('#days')
   const hours = timer.querySelector('#hours')
   const minutes = timer.querySelector('#minutes')
   const seconds = timer.querySelector('#seconds') 

   function setadd(){
    const time = dateadd(endtime)
    days.innerHTML=fixedTime(time.days)
    hours.innerHTML=fixedTime(time.hours)
    minutes.innerHTML=fixedTime(time.minutes)
    seconds.innerHTML=fixedTime(time.seconds)
   }
   let interval = setInterval(() => {
    setadd()
   }, 1000);
  }
 

  settime(newdate, '.timer')

  //  dedline end

})