import Typewriter from 'typewriter-effect';

function Typed(props) {
	return(
		<Typewriter
		options={{
			strings: [props.output]
		}}
		/>
		
	)
}

export default Typed;