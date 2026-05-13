import React from 'react'

export default function Questions() {
    const cards = [
        { id: 1, title: "Why should we buy snacks from this store if we can buy them on the street or at the school cafeteria?", answer:"Firstly, we created this service to sell goods in school for the same price as on the street, and sometimes even cheaper. We also have a lot of cool products that are hard to find in some stores. Considering the fact that schoolchildren are not allowed outside the school boundaries during recess, you won't be able to buy chips or drinks while in your classroom. We offer a service where you buy goods for the day ahead and can safely pick them up tomorrow and eat with pleasure. Our goods are also much cheaper than in the school cafeteria" },
        { id: 2, title: "What income do you get from this?", answer:"This was the toughest question. Of course, you're probably all wondering, what's the point of reselling goods and running a business if it doesn't generate any income, but our business is different. The founder of this market, Amir Abdurakhmanov, primarily earned his income from tips and debts, but over time, he began to gain experience and come up with many ideas for his business, and now he's making a good profit. But now we mainly make money from the wholesale prices of goods at the market, where we buy our treats. We also bundle our unsold goods into one big promotion and increase their prices to generate some income.  P.S.: We don't raise prices on promotions that much, just by a 1000 so'm" },
        { id: 3, title: "Why was it necessary to create a whole website if we are already not allowed to use phones on school grounds?", answer:"Well, first of all, the question was a very good one. The site was created not only to promote the marketplace, but also for the convenience of the author, who constantly needs to remember what to buy and who to buy it for. To that end, the author decided he needed a service where all the promotions, products, etc., could be found, so he could focus more time and attention on his studies. Secondly, you can order products on your laptop, as laptops are allowed to be used during breaks or after school. A phone version of the site is also being developed so you can pick up your phone after school and place your order." },
    ]
    return (
        <div className='p-[50px]'>
            <h1 className='text-[60px] text-center mt-[30px] p-[20px]'>answers to frequently asked questions</h1>
            <div className='flex items-center justify-around p-[30px]'>
                {cards.map((card) => (
                    <div key={card.id}>
                        <div className='max-w-[550px] h-[500px] p-[40px] shadow-lg/30 rounded-[20px]'>
                            <h1 className='text-[24px] font-black'>{card.title}</h1>
                            <p className='mt-[20px] opacity-50'>{card.answer}</p>
                        </div>
                    </div>
                ))}
                
            </div>
            <h1 className='text-[70px] text-center text-red-500 font-black mt-[50px]'>Thank you for understanding each other!</h1>
        </div>
    )
}
