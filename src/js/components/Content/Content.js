import { Content as Wrapper } from "carbon-components-react/lib/components/UIShell";

const ContentWrapper = ({ children })=>{
  return (<Wrapper id="main-content">
    {children}
    </Wrapper>)
}

export default ContentWrapper;