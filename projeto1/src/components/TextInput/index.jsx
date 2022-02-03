import './styles.css'

export const TextInput = ({searchValue, handleChange}) =>{
    return (
        <input
            className='text-input'
            onChange={handleChange}
            value={searchValue}
            type='seach'
            placeholder='type your search'
        />
    )
}