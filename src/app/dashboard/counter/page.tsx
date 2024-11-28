import { CartCounter } from '../../shopping-cart/components/CartCounter';

export const metadata = {
    title: 'Shopping Cart',
    description: 'Carrito de compras',
}

const CounterPage = () => {

  

    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <span>Productos en el carrito de compras</span>
            

           <CartCounter initialValue={20}/>
        </div>
    )
}

export default CounterPage
