import '../index.css'
import logo from '../assets/logo.svg'

function Header() {
	return (

			<div className="flex flex-wrap bg-primary relative  border-b">
				<img
					src={logo}
					alt="logo"
					className="h-24 w-24 mt-4 mr-4 drop-shadow "
				/>
			
			</div>
	)
}

export default Header