import { useFormik } from "formik";
import * as Yup from 'yup'

import { Homework15Container, ValidationForm } from "./styles";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";
import { ValidationFormValues } from "./types";


function Homework15() {

  const validationSchema = Yup.object().shape({
    // code: Yup.string()
    //  .required('Поле обязательное')
    //  .matches(/^d{6}$/, 'Код должен содержать 6 символов'),
    code: Yup.number()
      .required('Поле обязательное')
      .test(
        '6symb',
        'Код должен содержать 6 символов',
        (value) => String(value).length === 6
      ),
    privacy: Yup.boolean().oneOf([true], 'Дайте согласие')
  })

  const formik = useFormik({
    initialValues: {
      code: '',
      privacy: false
    } as ValidationFormValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: (values: ValidationFormValues, formikHelpers) => {
      console.log('Вы успешно вошли');
      formikHelpers.resetForm()
    }
  })

  return (
    <Homework15Container>
      <ValidationForm onSubmit={formik.handleSubmit}>
        <Input
          name='code'
          label='Validation Code'
          id='code_id'
          type='number'
          placeholder="Enter your code"
          value={formik.values.code}
          onChange={formik.handleChange}
          error={formik.errors.code}
        />
        <Checkbox
          name='privacy'
          checked={formik.values.privacy}
          onChange={formik.handleChange}
          id='privacy_id'
          label='Privacy and Policy'
          error={formik.errors.privacy}
        />
        <Button name='Login' />
      </ValidationForm>
    </Homework15Container>
  )
}

export default Homework15