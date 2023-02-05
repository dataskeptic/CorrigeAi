import { useState } from 'react'

//Components da aplicação
import { FormAvaliation } from '../../components/FormAvaliation'

//Components de estilização
import { CreateTaskOrExamStyled } from './styles'

export function CreateTaskOrExam() {
  const [selectValue, setSelectValue] = useState('none')

  
  const list = [
    { id: 'none', name: 'Nenhuma' },
    { id: 'exam', name: 'Prova' },
    { id: 'task', name: 'Tarefa' }
  ]

  return (
      <CreateTaskOrExamStyled className="TaskOrExam">
        <label htmlFor="avaliation">Escolha a avaliação: </label>
        <select
          name="avaliation"
          id="avaliation"
          value={selectValue}
          onChange={e => setSelectValue(e.target.value)}
        >
          {list.map((avaliation, i) => (
            <option key={i} value={avaliation.id}>
              {avaliation.name}
            </option>
          ))}
        </select>
        {/* Dependendo da escolha, vai gerar um formulario diferente */}
        { 
          selectValue !== 'none' ? 
            <FormAvaliation 
              typeAvaliation={selectValue}
            /> 
            : 
            <h2>Escolha uma opção</h2>
        }
      </CreateTaskOrExamStyled>
  )
}
