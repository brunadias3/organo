import Botao from '../Botao/index.js'
import CampoTexto from '../CampoTexto/CampoTexto.js'
import ListaSuspensa from '../ListaSuspensa/index.js'
import './Formulario.css'

const Formulario = () => {

  const times = [
    'Programação',
    'Front-End',
    'Data Sciense',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  const aoSalvar = (event) => {
    event.preventDefault()
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2> Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem " />
        <ListaSuspensa required={true} label="Times" itens={times} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  )
}

export default Formulario