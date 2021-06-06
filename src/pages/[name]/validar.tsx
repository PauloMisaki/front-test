import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { updateUser } from "../../services/users"

const Validate: React.FC = () => {
    const onSubmit = (values) => {
      updateUser(values);
    };
  
    const initialValues = {
        name: "",
        email: "",
        cpf: "",
        phone: "",
        skills: [],
      };


    const users = UserList((user) => {
        return {
          name: user.name,
          email: user.email,
          phone: user.phone,
          cpf: user.cpf,
          skills: user.skills,
          status: user.status,
        };
      });    

      return (
        <div className="">
            {users.map((user) => {
                return (
                    <div className="">
    
                      <p>{user.name}</p>
                      <p>{user.email}</p>
                      <p>{user.phone}</p>
                      <p>{user.cpf}</p>
                      <p>{user.skills}</p>
                      <p>{user.status}</p>
                    
    
                    <button type="button">
                        Validar
                    </button>
                    <button type="button">
                        Não Validar
                    </button>
                    </div>
                );
              })}

    
         
        </div>
      );
    }

    export default Validate