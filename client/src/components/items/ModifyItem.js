import React, { useContext, useState, useEffect } from 'react';
import ItemContext from '../../context/item/itemContext';

const ModifyItem = props => {
	
	const itemContext = useContext(ItemContext);
	const { current, addItem, modifyItem } = itemContext;

	useEffect( () => {
		console.log('CURRENT', current);
        if(current !== null) {
            setItem(current);
        } else {
            setItem({
				id: false,
				name: '',
				price: 0.0,
				stock: 0,
				description: '',
				image: ''
            });
        }
    }, [current]);

    const [item, setItem] = useState({
		id: false,
		name: '',
		price: 0.0,
		stock: 0,
		description: '',
		image: ''
	});
	console.log('ITEMmmmm',item);

    const { id, name, price, stock, description, image } = item;

    const onChange = e => 
        setItem({ ...item, [e.target.name]: e.target.value });

	const onSubmit = e => {
		let newItem = {
			id: item._id.current,
			name: item.name.current,
			price: item.price.current,
			stock: item.stock.current,
			description: item.description.current,
			image: item.image.current
		};
		if ( current !== null ) modifyItem(newItem);
		else {
			delete newItem.id;
			addItem(newItem);
		}
	};
	return (
		<div className="form"> {
			id && (
				<div className="field is-horizontal">
					<div className="field-label is-large">
					   	<label className="label">ID:</label>
			 		</div>
			 		<div className="field-body">
					   	<div className="field">
						   	<p class="control">
          						<button class="button is-static">
									{id}
          						</button>
        					</p>
						</div>
					</div>
				</div>
			)}
			<div className="field is-horizontal">
				<div className="field-label is-large">
			   		<label className="label">Product</label>
			 	</div>
			 	<div className="field-body">
			   		<div className="field">
			     		<p className="control has-icons-left">
							<input 
								className="input is-large"
								type="text"
								placeholder="Name"
								value={name}
								onChange={onChange}
								required 
							/>
			       			<span className="icon is-small is-left">
			         			<i className="fas fa-paint-roller" />
			       			</span>
			     		</p>
			   		</div>
				</div>
			</div>
			<div className="field is-horizontal is-large">
				<div className="field-label is-large"><label className="label">Price</label></div>
				<div className="field-body">
				  <div className="field is-expanded">
					<div className="field has-addons">
					  <p className="control">
						<a className="button is-large is-static">
							<i className="fas fa-dollar-sign" />
						</a>
					  </p>
					  <p className="control is-expanded">
							<input
								className="input is-large"
								type="number"
								placeholder="Price"
								value={price}
								onChange={onChange}
								required
							/>
					  </p>
					</div>
					<p className="help">Only numbers</p>
				  </div>
				</div>
		  	</div>
			<div className="field is-horizontal">
				<div className="field-label is-large">
			   		<label className="label">Stock</label>
			 	</div>
			 	<div className="field-body">
			   		<div className="field">
			     		<p className="control has-icons-left">
			       			<input
								className="input is-large"
								type="number"
								placeholder="Stock"
								value={stock}
								onChange={onChange}
								required
							/>
			       			<span className="icon is-small is-left">
			         			<i className="fas fa-cart-arrow-down" />
			       			</span>
			     		</p>
							<p className="help">Only integer numbers</p>
			   		</div>
				</div>
			</div>
			<div className="field is-horizontal">
				<div className="field-label is-large">
			   		<label className="label">Description</label>
			 	</div>
			 	<div className="field-body">
			   		<div className="field">
			     		<p className="control has-icons-left">
			       			<input
								className="input is-large"
								type="text"
								placeholder="Description"
								value={description}
								onChange={onChange}
							/>
			       			<span className="icon is-small is-left">
			         			<i className="fas fa-align-left" />
			       			</span>
			     		</p>
			   		</div>
				</div>
			</div>
			<div className="field is-horizontal">
				<div className="field-label is-large">
			   		<label className="label">Image</label>
			 	</div>
			 	<div className="field-body">
			   		<div className="field">
			     		<p className="control has-icons-left">
			       			<input
								className="input is-large"
								type="text"
								placeholder="URL"
								value={image}
								onChange={onChange}
							/>
			       			<span className="icon is-small is-left">
			         			<i className="fas fa-image" />
			       			</span>
			     		</p>
						 <p className="help">Paste the URL of your image</p>
			   		</div>
				</div>
			</div>
			<div className="field is-grouped is-grouped-centered">
				<div className="control">
    				<button className="button is-warning" onClick={onSubmit}>Submit</button>
  				</div>
			</div>
		</div>
	);
};
export default ModifyItem;