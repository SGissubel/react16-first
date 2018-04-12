import React, { Component } from 'react';
//will not qualify as a component (does not return jsx -> returns the function)
// const withClass = (WrappedComponent, className) => {
// 	return (props) => (
// 		<div className={className}>
// 			<WrappedComponent {...props}/>
// 		</div>
// 		)
// }

//if need access to server/web/etc --> stateful comp
const withClass = (WrappedComponent, className) => {
	return class extends Component {
		render() {
			return (
				<div className={className}>
					<WrappedComponent ref={this.props.forwardedRef} {...this.props}/>
				</div>
			)	
		}
	}
}
// const withClass = (WrappedComponent, className) => {
// 	const WithClass = class extends Component {
// 		render() {
// 			return (
// 				<div className={className}>
// 					<WrappedComponent ref={this.props.forwardedRef} {...this.props}/>
// 				</div>
// 			)	
// 		}
// 	}
// 	return React.forwardRef((props, ref) => {
// 		return <WithClass {...props} forwardedRef={ref} />
// 	});
// }

export default withClass;




// import React from 'react';


// const withClass = (props) => (
// 	<div className={props.classes}>
// 		{props.children}
// 	</div>
// );

// export default withClass;