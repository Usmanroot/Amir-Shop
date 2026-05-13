import React, { useState } from 'react';

export default function Order() {
    const [orderError, setOrderError] = useState(false);
    const [classError, setClassError] = useState(false);
    const [nameError, setNameError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const orderValue = formData.get('Order').trim();
        const orderClass = formData.get('Class').trim();
        const orderName = formData.get('Name').trim();

        const isOrderEmpty = orderValue === '';
        const isClassInvalid = orderClass.length < 2 || orderClass === '';
        const isNameInvalid = orderName.length < 13 || orderName === '';

        setOrderError(isOrderEmpty);
        setClassError(isClassInvalid);
        setNameError(isNameInvalid);

        if (!isOrderEmpty && !isClassInvalid && !isNameInvalid) {
            event.target.reset();
            setOrderError(false);
            setClassError(false);
            setNameError(false);
        }
    };

    const orderInputClass = `bg-white w-[500px] h-[150px] rounded-[50px] border-4 p-[20px] mt-[20px] transition-all outline-none ${
        orderError ? 'border-red-500 placeholder-red-400' : 'border-transparent'
    }`;

    const classInputClass = `bg-white w-[200px] h-[40px] rounded-[50px] p-[20px] transition-all outline-none border-2 ${
        classError ? 'border-red-500 placeholder-red-400' : 'border-transparent'
    }`;

    const classInputName = `bg-white w-[200px] h-[40px] rounded-[50px] p-[20px] transition-all outline-none border-2 ${
        nameError ? 'border-red-500 placeholder-red-400' : 'border-transparent'
    }`;

    return (
        <div className='bg-white p-[50px] font-sans'>
            <div className='max-w-[1500px] min-h-[600px] bg-linear-to-r from-[#5fa3e3] to-blue-800 rounded-[50px] p-[50px] mx-auto mt-[100px] flex flex-col items-center shadow-2xl'>
                <div>
                    <h1 className='text-[30px] font-black text-white'>Enter whatever you want to order</h1>
                </div>
                
                <form className='flex flex-col items-center' onSubmit={handleSubmit}>
                    <label className='text-[30px] font-bold text-white'>Your order</label>
                    <input 
                        type="text" 
                        className={orderInputClass} 
                        name='Order' 
                        placeholder={orderError ? 'Type smth bruh' : 'This place for your order'}
                    />
                    
                    <span className='flex flex-col items-center justify-around p-[20px]'>
                        <label className='font-bold text-white opacity-80 mt-[20px]'>Your class</label>
                        <input 
                            type="text" 
                            className={classInputClass} 
                            placeholder={classError ? 'pls type ur class' : 'class'} 
                            name='Class'
                        />
                        
                        <label className='font-bold text-white opacity-80 mt-[20px]'>Your name/last name</label>
                        <input 
                            type="text" 
                            className={classInputName}
                            placeholder={nameError ? 'where is ur name' : 'name'}
                            name='Name'
                        />
                    </span>

                    <button 
                        type='submit' 
                        className='w-[200px] p-[20px] text-white font-black bg-red-500 rounded-[10px] cursor-pointer mt-[5px] transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-red-500/50'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}