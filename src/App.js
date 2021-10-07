import { Fragment, useState } from 'react';

import Header from '../src/components/Layout/Header'
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
function App () {
	const [cartIsShown, setCartIsShown] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
	}

	const hideCartHandler = () => {
		setCartIsShown(false);
	}

	return (
		<CartProvider>
			{cartIsShown && <Cart onHideCart={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;