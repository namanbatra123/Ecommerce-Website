import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import Image from "next/image"
import PrimeLogo from "../styles/Images/prime-logo.svg";

function Product({ id, title, price, description, category, image }) {
    const [rating] = useState(
        Math.floor(Math.random() * (4) + 1)
    );

    const [hasPrime] = useState(Math.random() < 0.5);

    return (
        <div className='relative flex flex-col m-5 bg-white z-20 p-10'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>

            <img src={image} height={200} width={200} objectFit="contain"/>

            <h4 className='my-3'>{title}</h4>
            <div className='flex'>
                {Array(rating).fill().map((_, i) => (
                    <StarIcon className="h-5 text-yellow-500" />
                ))}
            </div>

            <p className='text-xs my-2 line-clamp-2'>{description}</p>

            <div className='mb-5'>
                <Currency quantity={price*100} currency="INR" />
            </div>

            {hasPrime && (
                <div className='flex items-center space-x-2 -mt-5'>
                    <Image className="w-10" src={PrimeLogo} />
                    <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
                </div>
            )}

            <button className='mt-auto button'>Add to Cart</button>
        </div>
    )
}

export default Product