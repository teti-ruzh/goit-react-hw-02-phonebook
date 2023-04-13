// import PropTypes from 'prop-types';

const Filter = ({value, onChange}) => {
return (
    <label>Find contacts by name<input type="text" value={value} onChange={onChange}></input></label>
    
)

}

export default Filter;