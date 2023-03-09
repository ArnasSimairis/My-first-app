import './product.css'

const product = (props) => {

    console.log(props.items);

    return (
        <div className='list_of_items'>
            {
                props.items.map((item, index) => (
                    <div key={index} className="item">
                        <img src={item.imageUrl} alt="" />
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default product