import '../index.css'
import logo from '../assets/logo.png'

function Header() {
	return (

			<div className="flex flex-wrap bg-primary relative  border-b">
				<img
					src={logo}
					alt="logo"
					className="h-32 w-32 mt-4 mr-4 drop-shadow "
				/>
			
			</div>
	)
}

export default Header