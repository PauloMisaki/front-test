import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { createUser } from "../../services/users"

const Register: React.FC = () => {
  const onSubmit = (values) => {
    createUser(values);
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .max(300)
      .required("Campo obrigatório"),
    email: yup
      .string()
      .email("E-mail inválido")
      .required("Campo obrigatório"),
    cpf: yup
      .string()
      .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "Insira um CPF válido")
      .required("Campo obrigatório"),
    phone: yup
      .string()
      .matches(
        /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/,
        "Insira um telefone válido"
      )
      .required("Campo obrigatório"),
    skills: yup.array().of(yup.string()).min(1).max(3),
  });

  const initialValues = {
    name: "",
    email: "",
    cpf: "",
    phone: "",
    skills: [],
  };

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
      {({ isSubmitting }) => {
        return (
          <Form className="flex flex-col p-10 space-y-6" action="#" method="POST">
            <div className="mt-1 text-center">
              <label className="flex ml-2 font-semibold text-start">Nome</label>
              <Field
                name="name"
                type="text"
                className="block w-64 h-10 px-4 py-3 placeholder-gray-500 border border-gray-500 rounded-lg shadow-sm md:h-14 md:w-96 sm:text-sm"
                placeholder="Nome do Colaborador"
              />
            </div>
            <div className="relative mt-1 text-center">
              <label className="flex ml-2 font-semibold text-start">E-mail</label>

              <Field
                name="email"
                autoComplete="true"
                type="text"
                className="block w-64 h-10 px-4 py-3 placeholder-gray-500 border border-gray-500 rounded-lg shadow-sm md:h-14 md:w-96 sm:text-sm"
                placeholder="colaborador@empresa.com"
              />
            </div>
            <div className="relative mt-1 text-center">
              <label className="flex ml-2 font-semibold text-start">CPF</label>

              <Field
                name="cpf"
                autoComplete="true"
                type="text"
                className="block w-64 h-10 px-4 py-3 placeholder-gray-500 border border-gray-500 rounded-lg shadow-sm md:h-14 md:w-96 sm:text-sm"
                placeholder="123.456.789-00"
              />
            </div>
            <div className="relative mt-1 text-center">
              <label className="flex ml-2 font-semibold text-start">Phone</label>

              <Field
                name="phone"
                autoComplete="true"
                type="text"
                className="block w-64 h-10 px-4 py-3 placeholder-gray-500 border border-gray-500 rounded-lg shadow-sm md:h-14 md:w-96 sm:text-sm"
                placeholder="(99) 99999-9999"
              />
            <div className="flex mt-4 mb-2 ml-2 font-semibold text-start">Competências</div>
              <label className="flex mb-2 ml-2 text-start">

              <Field
                name="skills"
                autoComplete="false"
                type="checkbox"
                value="Git"
                className="block w-16 h-10 px-4 py-3 text-center placeholder-gray-500 border border-gray-500 rounded-lg shadow-sm md:h-14 md:w-96 sm:text-sm"
              />
              <p className="flex self-center">Git</p>
              </label>
              <label className="flex mb-2 ml-2 text-start">

              <Field
                name="skills"
                autoComplete="false"
                type="checkbox"
                value="React"
                className="block w-16 h-10 px-4 py-3 text-center placeholder-gray-500 border border-gray-500 rounded-lg shadow-sm md:h-14 md:w-96 sm:text-sm"
              />
              <p className="flex self-center">React</p>
              </label>
              <label className="flex mb-2 ml-2 text-start">

              <Field
                name="skills"
                autoComplete="false"
                type="checkbox"
                value="PHP"
                className="block w-16 h-10 px-4 py-3 text-center placeholder-gray-500 border border-gray-500 rounded-lg shadow-sm md:h-14 md:w-96 sm:text-sm"
              />
              <p className="flex self-center">PHP</p>
              </label>
              <label className="flex mb-2 ml-2 text-start">

              <Field
                name="skills"
                autoComplete="false"
                type="checkbox"
                value="NodeJS"
                className="block w-16 h-10 px-4 py-3 text-center placeholder-gray-500 border border-gray-500 rounded-lg shadow-sm md:h-14 md:w-96 sm:text-sm"
              />
              <p className="flex self-center">NodeJS</p>
              </label>
              <label className="flex mb-2 ml-2 text-start">

              <Field
                name="skills"
                autoComplete="false"
                type="checkbox"
                value="DevOps"
                className="block w-16 h-10 px-4 py-3 text-center placeholder-gray-500 border border-gray-500 rounded-lg shadow-sm md:h-14 md:w-96 sm:text-sm"
              />
              <p className="flex self-center">DevOps</p>
              </label>
              <label className="flex mb-2 ml-2 text-start">

              <Field
                name="skills"
                autoComplete="false"
                type="checkbox"
                value="Database"
                className="block w-16 h-10 px-4 py-3 text-center placeholder-gray-500 border border-gray-500 rounded-lg shadow-sm md:h-14 md:w-96 sm:text-sm"
              />
              <p className="flex self-center">Banco de Dados</p>
              </label>
              <label className="flex mb-2 ml-2 text-start">

              <Field
                name="skills"
                autoComplete="false"
                type="checkbox"
                value="Typescript"
                className="block w-16 h-10 px-4 py-3 text-center placeholder-gray-500 border border-gray-500 rounded-lg shadow-sm md:h-14 md:w-96 sm:text-sm"
              />
              <p className="flex self-center">Typescript</p>
              </label>
              
            </div>
            
            <button
              disabled={isSubmitting}
              type="submit"
              className="flex items-center justify-center w-64 h-10 py-2 font-bold tracking-wider text-center text-white rounded-lg shadow-sm md:w-96 md:h-14 bg-primary-500"
            >
              {!isSubmitting ? "Registrar" : "Registrado!"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Register