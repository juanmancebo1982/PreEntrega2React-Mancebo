import logo from '../../assets/logocart.png';

const CartWidget = () => {
    return (
        <div style={{ width: '30px', height: '30px' }}>
            <img src={logo} alt="Cart Logo" style={{ width: '75%', height: '75%' }} />
            0
        </div>
    );
};

export default CartWidget;
