import { NavigationBar,Loading,ParagraphBlock,ContentWrapper } from "@components";
import { Formik, Field, Form } from "formik";

const AdminLogin = ()=>{
  return (<>
  <NavigationBar/>
  <ContentWrapper>
  <div class="bx--grid center">
    <div class="bx--row">
      <div class="bx--col-lg-3"></div>
      <div class="bx--col-lg-6">
        <Formik
          initialValues={{ name: "", email: "" }}
          onSubmit={async values => {
            await new Promise(resolve => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <Field class="bx--text-input" name="name" type="text" />
            <Field class="bx--text-input" name="email" type="email" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
      <div class="bx--col-lg-3"></div>
    </div>
  </div>
  </ContentWrapper>
  </>)
}

export default AdminLogin;