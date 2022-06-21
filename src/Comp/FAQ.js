import React from 'react'
import FAQSection from './FAQSection'
import Search from './Search'



const FAQ = () => {
    const data=[{
        title:"What is Netlix?",
        body:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
        title:"How much does Netlix cost?",
        body:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $19.99 a month. No extra costs, no contracts.",
    },
    {
        title:"Where can I watch?",
        body:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
        title:"How Do I cancel?",
        body:"Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
        title:"Is Netlix Good for kids?",
        body:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    }]
  return (
    <>

        <div className='bg-black py-10 px-5 md:px-40 items-center'>
        <div className='container max-w-3xl mx-auto'>
        <p className='text-white text-center text-5xl py-10'>Frequently Asked Questions</p>
          {data.map((fqa,i)=>(
              <FAQSection key={i} title={fqa.title} body={fqa.body}/>

          ))}
            <Search/>
        </div>
    

        </div>
        
       
    </>
  )
}

export default FAQ
