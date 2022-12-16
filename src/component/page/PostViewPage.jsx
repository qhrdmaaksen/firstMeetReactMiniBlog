import styled from 'styled-components';
import {useNavigate} from "react-router-dom";

const Wrapper = styled.div`
	padding: 16px;
	width: calc(100% - 32px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Container = styled.div`
	width: 100%;
	max-width: 720px;
	
	& > * {
		:not(:last-child) {
			margin-bottom: 16px;
		}
	}
`

const PostContainer = styled.div`
	padding: 8px 16px;
	border: 1px solid grey;
	border-radius: 8px;
`

const TitleText = styled.p`
	font-size: 28px;
	font-weight: 500;
`

const ContentText = styled.p`
	font-size: 20px;
	line-height: 32px;
	white-space: pre-wrap;
`

const CommentLabel = styled.p`
	font-size: 16px;
	font-weight: 500;
`

const PostViewPage = (props) => {

	const navigate = useNavigate()
	const {postId} = props;

	const post = data.find((item) => {
			return item.id == postId
})



	return (
			<Wrapper>

			</Wrapper>
	)
}
export default PostViewPage;