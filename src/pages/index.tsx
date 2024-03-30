import { useSelector } from 'react-redux';
import { setLoading, setCart, deleteCart } from '@/context/action';
import { State } from '@/context/reducer/type.types';

export default function Home() {
  const { isLoading, cart } = useSelector((state: State) => state);

  const cartManage = (input: string) => {
    if (cart.includes(input)) {
      setCart(cart.filter((item) => item !== input));
    } else {
      setCart([...cart, input]);
    }
  };

  return (
    <main>
      <h1>{isLoading.toString()}</h1>
      <button onClick={() => setLoading(!isLoading)}>submit</button>
      <h1>your cart is: {cart.join(', ')}</h1>

      <input
        checked={cart.includes('book')}
        onClick={() => cartManage('book')}
        type="checkbox"
        id="book"
      />
      <label htmlFor="book">book</label>
      <input
        checked={cart.includes('pencil')}
        onClick={() => cartManage('pencil')}
        type="checkbox"
        id="pencil"
      />
      <label htmlFor="pencil">pencil</label>
      <input
        checked={cart.includes('pen')}
        onClick={() => cartManage('pen')}
        type="checkbox"
        id="pen"
      />
      <label htmlFor="pen">pen</label>
      <p>delete</p>
      <button onClick={() => deleteCart()}>delete cart</button>
    </main>
  );
}
