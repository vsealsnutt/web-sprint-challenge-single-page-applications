import React from 'react';

function PizzaForm(props) {
    const {
        values,
        change,
        submit,
        errors
    } = props;

    const onChange = event => {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse);
    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <div className='form-header'>
                <h3>Build Your Own Pizza</h3>
            </div>

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
                <div>{errors.sauce}</div>
            </div>

            <div className='form-sections'>
                <label>Name 
                    <input id='name-input'
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onChange}
                        minLength='2'
                    />
                </label>

                <div className='size-container'>
                    <h4>Choice of Size</h4>
                    <h5>Required</h5>
                    <label>Size 
                        <select id='size-dropdown' value={values.size} name='size' onChange={onChange}>
                            <option value= ''>Select</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                    </label>
                </div>

                <div className='sauce-container'>
                    <h4>Choice of Sauce</h4>
                    <h5>Required</h5>
                    <label>Marinara
                        <input
                            type='radio'
                            name='sauce'
                            value='marinara'
                            onChange={onChange}
                            checked={values.sauce === 'marinara'}
                        />
                    </label>
                    <label>Garlic
                        <input
                            type='radio'
                            name='sauce'
                            value='garlic'
                            onChange={onChange}
                            checked={values.sauce === 'garlic'}
                        />
                    </label>
                    <label>BBQ
                        <input
                            type='radio'
                            name='sauce'
                            value='bbq'
                            onChange={onChange}
                            checked={values.sauce === 'bbq'}
                        />
                    </label>
                </div>

                <div className='toppings-container'>
                    <h4>Add Toppings</h4>
                    <h5>Choose up to 4</h5>
                    <label>Pepperoni
                        <input
                            type='checkbox'
                            name='pepperoni'
                            checked={values.pepperoni}
                            onChange={onChange}
                        />
                    </label>
                    <label>Bacon
                        <input
                            type='checkbox'
                            name='bacon'
                            checked={values.bacon}
                            onChange={onChange}
                        />
                    </label>
                    <label>Chicken
                        <input
                            type='checkbox'
                            name='chicken'
                            checked={values.chicken}
                            onChange={onChange}
                        />
                    </label>
                    <label>Mushrooms
                        <input
                            type='checkbox'
                            name='mushrooms'
                            checked={values.mushrooms}
                            onChange={onChange}
                        />
                    </label>
                    <label>Onions
                        <input
                            type='checkbox'
                            name='onions'
                            checked={values.onions}
                            onChange={onChange}
                        />
                    </label>
                    <label>Green Peppers
                        <input
                            type='checkbox'
                            name='peppers'
                            checked={values.peppers}
                            onChange={onChange}
                        />
                    </label>
                </div>
                
                <div className='special-container'>
                    <h4>Special Instructions</h4>
                    <label>
                        <input id='special-text'
                            type='text'
                            name='special'
                            value={values.special}
                            onChange={onChange}
                        />
                    </label>
                </div>
            </div>

            <div className='order'>
                <button id='order-button'>Add to Order</button>
            </div>
        </form>
    )


}

export default PizzaForm;