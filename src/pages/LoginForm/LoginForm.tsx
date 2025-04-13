import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from '../../components/Input/Input';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import * as S from './styles';
import logo from '../../assets/logo.png';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Email is required')
        .min(12, 'Minimum 12 characters')
        .max(40, 'Maximum 40 characters'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      setSubmitting(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        setUser({ id: data.id, name: data.name, email: data.email });
        navigate('/user-data');
      } catch (error) {
        setStatus('Ошибка при входе');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <S.Container>
      {}
      <S.ImageSide /> 
      <S.FormSide>
        <S.LoginForm>
          <S.Logo src={logo} alt="Logo" />
          <S.Title>Login Form</S.Title>
          <S.Form onSubmit={formik.handleSubmit}>
            <Input
              label="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email ? formik.errors.email : ''}
            />
            <Input
              label="Password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password ? formik.errors.password : ''}
            />
            <S.Button type="submit" disabled={formik.isSubmitting}>
              {formik.isSubmitting ? 'Loading...' : 'Login'}
            </S.Button>
            {formik.status && <S.Error>{formik.status}</S.Error>}
          </S.Form>
        </S.LoginForm>
      </S.FormSide>
      <S.RightSpace />
    </S.Container>
  );
};

export default LoginForm;
