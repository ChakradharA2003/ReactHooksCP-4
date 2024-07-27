// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  MainHeading,
  WebsiteDescription,
  ReactImage,
  DescriptionContainer,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const [isReadMore, setReadMoreOrLess] = useState(false)
  const {reactHooksDescription} = props
  const description = isReadMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)
  console.log(description)
  const buttonText = isReadMore ? 'Read Less' : 'Read More'
  const onClickedButton = () => setReadMoreOrLess(prevState => !prevState)
  return (
    <MainContainer>
      <MainHeading>React Hooks</MainHeading>
      <WebsiteDescription>Hooks are a new addition to React</WebsiteDescription>
      <ReactImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <DescriptionContainer>
        <WebsiteDescription>{description}</WebsiteDescription>
      </DescriptionContainer>
      <Button type="button" onClick={onClickedButton}>
        {buttonText}
      </Button>
    </MainContainer>
  )
}
export default ReadMore
