import styled from 'styled-components';

// button tag 에 style 을 입힌 styled button create
const StyledButton = styled.button`
	padding: 8px 16px;
	font-size: 16px;
	border-width: 1px;
	border-radius: 8px;
	cursor: pointer;
`
const Button = (props) => {
	const { title, onClick } = props;
	return (
			<StyledButton onClick={onClick}>
				{title || 'button'}
			</StyledButton>
	)
}
export default Button;