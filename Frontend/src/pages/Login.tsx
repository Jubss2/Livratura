import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import HeaderLogin from './components/HeaderLogin';
import {Box, TextField} from '@mui/material';
import {Button} from '@mui/material';
import Footer from './components/Footer'
import Logo from '../assets/Group1.svg'
import Livratura from '../assets/Livratura.svg'

interface ILogin {
  email: string;
  senha: string;
}

const schema = yup.object({
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  senha: yup.string().min(6, 'Senha deve ter no mínimo 6 caracteres')
    .matches(/[0-9]/, 'Senha deve conter pelo menos 1 número')
    .matches(/[A-Z]/, "Senha deve ter pelo menos uma letra maiúscula")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Senha deve conter um caracter especial")
    .required('Senha é obrigatória'),
}).required();

function Login() {
  // Back -> front
  const { setToken } = useAuth();
  const navigate = useNavigate();
  //
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILogin>({
    resolver: yupResolver(schema)
  });
 // const onSubmit = (data: ILogin) => {
 //   console.log('Login enviado com sucesso!', data);
 //   alert(`Email: ${data.email}, Senha: ${data.senha},`);
 // };
  
  const handleLogin = async (data: ILogin) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email: data.email,
        senha: data.senha
      }, {
        withCredentials: true
      });
      const { token } = response.data;
      setToken(token);
      navigate('/');
      console.log(response.data);
    } catch (error) {
      console.error('Erro durante o Login', error);
    }
  }
  return (
    <>   <HeaderLogin /> 
    <Box  
        sx ={{
          display: 'flex',
          flexDirection: 'column',
          alignItems:'center',
          justifyContent: 'center',
          background: 'linear-gradient( #7578d0, #A5A5E7)',
          height: '95vh'
        }}
      
    >
      <Box sx ={{
          display: 'flex',
          }}>
      <img src={Livratura} alt="Livratura" style={{ width: '450px', padding: 4, marginBottom:'5px', marginRight:'2px'}} />
      <img src={Logo} alt="Logo da Livratura" style={{ width: '250px', height: '234px',padding: 4, marginBottom:'5px'}} />
      
      </Box>
      <Box onSubmit={handleSubmit(handleLogin)} component="form" sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'background.default',
            gap: 2,
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
            width: { xs: '90%', sm: '700px' },
            maxWidth: '500px',
          }}>
        <TextField required label='Email' id="email" {...register("email")} fullWidth color='primary'/>
        {errors.email && <div style={{ color: 'red' }}>{errors.email.message}</div>}
      
        <TextField required label='Senha' type="password" id="senha" {...register("senha")} fullWidth color='primary'/>
        {errors.senha && <div style={{ color: 'red' }}>{errors.senha.message}</div>}

      <Button sx={{ mt: 1 }} variant="contained" type='submit' fullWidth>Login</Button>
    </Box>  
    </Box>
    <Footer/>
    </>
  );
}

export default Login;