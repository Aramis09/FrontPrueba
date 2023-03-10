import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { searchName } from '../../redux/reducer/productReducer';
import { getProductsByFilters } from '../../redux/actions/productAction';
import style from './SearchBar.module.scss';
import iconSearch from './images/icon_search.png';



export const SearchBar = () => {
	const [Search, setSearch] = useState('');
	const dispatch = useAppDispatch();

	const handleClickSubmit = (event: any) => {
		event.preventDefault();
		dispatch(searchName(Search))
    	dispatch(getProductsByFilters( //NO TOCAR
			{ 
			name:Search,
			filters:
				{
				genres:[],
				platform:[],
				priceRange:[0,100]
				},
			order:
			{
				alphabetic:'',
				price:''
			}    
			}
			));
	};
	const handleInputChange = (event: any) => {
		event.preventDefault();
		setSearch(event.target.value);
	};

	return (
		<div className={style.containerSearch}>
			<input
				className={style.Input}
				type='text'
				placeholder='   Search Video Games'
				onChange={(event) => handleInputChange(event)}
			/>
				<button
					className={style.But}
					type='submit'
					onClick={(event) => handleClickSubmit(event)}>
					<p className={style.textSearch}>SEARCH</p>
					<img className={style.iconSearch} src={iconSearch} alt="iconSearch" />
				</button>
		</div>
	);
};
