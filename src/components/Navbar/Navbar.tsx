import { IconButton, List, ListItem } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';
import medium from '../../assets/images/medium.png';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import './Navbar.scss';

export const Navbar = () => {
	return (
		<div className='nav'>
			<Link to={'/home'}>
				<img width={36} height={36} src={medium} alt='medium site logo' />
			</Link>
			<nav>
				<List>
					<ListItem>
						<NavLink
							to={'/home'}
							className={({ isActive }) => (isActive ? 'active-link' : 'link')}>
							<IconButton>
								<HomeOutlinedIcon />
							</IconButton>
						</NavLink>
					</ListItem>
					<ListItem>
						<NavLink
							to={'/saved'}
							className={({ isActive }) => (isActive ? 'active-link' : 'link')}>
							<IconButton>
								<BookmarksOutlinedIcon />
							</IconButton>
						</NavLink>
					</ListItem>
					<ListItem>
						<NavLink
							to={'/my-stories'}
							className={({ isActive }) => (isActive ? 'active-link' : 'link')}>
							<IconButton>
								<DescriptionOutlinedIcon />
							</IconButton>
						</NavLink>
					</ListItem>
				</List>
			</nav>
			<NavLink
				to={'/publish'}
				className={({ isActive }) => (isActive ? 'active-link' : 'link')}>
				<IconButton>
					<SaveAsOutlinedIcon />
				</IconButton>
			</NavLink>
		</div>
	);
};
