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
                        <select value={values.size} name='size' onChange={onChange}>
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
                
            </div>
        </form>
    )


}

export default PizzaForm;