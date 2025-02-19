import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Card, LinkBotao } from './style'

const Projeto = () => (
  <Card>
    <Titulo>Projeto lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJs</Paragrafo>
    <LinkBotao>Vizualizar</LinkBotao>
  </Card>
)

export default Projeto
