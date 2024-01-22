import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ id, name, img, category, price, description, stock }) => {

    const handleOnAdd = (quantity) => {
        const objProduct = {
            id,
            name,
            quantity,
            price
        }

        console.log('agregado correctamente:', objProduct)
    }

    return (
        <article className="item-detail-container">
            <h3 className="highlighted-text">{name}</h3>
            <img src={img} alt={name} className="item-image" />
            <p>Categoria: {category}</p>
            <h4>U$s{price}</h4>
            <p>Descripcion: {description}</p>
            <ItemCount stock={stock} onAdd={handleOnAdd} />
        </article>
    );
}

export default ItemDetail;
